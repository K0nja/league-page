import { json, error } from '@sveltejs/kit';
import { GoogleGenAI } from '@google/genai';
import Anthropic from '@anthropic-ai/sdk';
import contentful from 'contentful-management';
import { GEMINI_API_KEY, ANTHROPIC_API_KEY, AI_PROVIDER, BLOG_GENERATE_SECRET } from '$env/static/private';
import { leagueID, managers, leagueName, leagueContext } from '$lib/utils/leagueInfo';

const lang = "en-US";

// Built dynamically from leagueInfo.js — edit aiBlurb on each manager to customize
const MANAGER_CONTEXT = `League context: ${leagueContext}

Manager personalities (use these for flavor):
${managers.filter(m => m.aiBlurb).map(m => `- ${m.name}: ${m.aiBlurb}`).join('\n')}`;

const JSON_INSTRUCTIONS = `Respond ONLY with a valid JSON object (no markdown, no code blocks):
{
  "title": "[title]",
  "type": "[type]",
  "sections": [
    {"type": "paragraph"|"heading", "text": "..."}
  ]
}`;

export async function POST({ request }) {
    const body = await request.json().catch(() => ({}));

    if (!BLOG_GENERATE_SECRET || body.secret !== BLOG_GENERATE_SECRET) {
        throw error(401, "Unauthorized");
    }

    const postType = body.postType ?? 'recap';

    // --- Core Sleeper data needed by all post types ---
    const [nflStateRes, leagueDataRes, usersRes, rostersRes] = await Promise.all([
        fetch('https://api.sleeper.app/v1/state/nfl'),
        fetch(`https://api.sleeper.app/v1/league/${leagueID}`),
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/users`),
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/rosters`),
    ]);
    const [nflState, leagueData, usersData, rostersData] = await Promise.all([
        nflStateRes.json(), leagueDataRes.json(), usersRes.json(), rostersRes.json(),
    ]);

    // Build roster_id → manager name map (used by all types)
    const rosterToManager = {};
    for (const roster of rostersData) {
        const user = usersData.find(u => u.user_id === roster.owner_id);
        if (user) {
            const manager = managers.find(m => m.managerID === user.user_id);
            rosterToManager[roster.roster_id] = manager ? manager.name : (user.display_name ?? `Team ${roster.roster_id}`);
        }
    }

    // Determine current/target week
    let currentWeek = 1;
    if (nflState.season_type === 'regular') {
        currentWeek = nflState.display_week;
    } else if (nflState.season_type === 'post') {
        currentWeek = 18;
    }

    let prompt;

    if (postType === 'preview') {
        prompt = await buildPreviewPrompt({ body, leagueData, rosterToManager, currentWeek });
    } else if (postType === 'pre-draft') {
        prompt = await buildPreDraftPrompt({ leagueData, rosterToManager, rostersData });
    } else if (postType === 'post-draft') {
        prompt = await buildPostDraftPrompt({ leagueData, rosterToManager });
    } else if (postType === 'roast') {
        prompt = buildRoastPrompt({ body, rosterToManager });
    } else {
        // default: recap
        prompt = await buildRecapPrompt({ body, leagueData, rosterToManager, currentWeek });
    }

    // Generate content
    const provider = AI_PROVIDER || 'gemini';
    const generated = provider === 'claude'
        ? await generateWithClaude(prompt)
        : await generateWithGemini(prompt);

    const parsed = parseAIResponse(generated);
    const post = await publishToContentful(parsed);

    return json({ success: true, title: parsed.title, postId: post.sys.id });
}

// ---------------------------------------------------------------------------
// Recap prompt (post-week)
// ---------------------------------------------------------------------------
async function buildRecapPrompt({ body, rosterToManager, currentWeek }) {
    const targetWeek = body.week ? parseInt(body.week) : Math.max(1, currentWeek - 1);

    const [matchupsRes, transactionsRes] = await Promise.all([
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/matchups/${targetWeek}`),
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/transactions/${targetWeek}`),
    ]);
    const [matchupsData, transactionsData] = await Promise.all([
        matchupsRes.json(), transactionsRes.json(),
    ]);

    const matchupLines = processMatchups(matchupsData, rosterToManager, true);
    const { tradeLines, waiverLines } = processTransactions(transactionsData, rosterToManager);
    const transactionSection = [...tradeLines, ...waiverLines].join('\n') || 'No transactions this week.';

    return `You are a witty, trash-talking sports writer for "${leagueName}", a dynasty fantasy football league running since 2015 (went dynasty in 2019).

${MANAGER_CONTEXT}

Week ${targetWeek} matchup results:
${matchupLines.join('\n') || 'No matchup data available.'}

Week ${targetWeek} transactions:
${transactionSection}

Write an entertaining Week ${targetWeek} recap. Be funny, reference manager personalities and histories. Call out dominant wins, embarrassing losses, and notable transactions.

${JSON_INSTRUCTIONS.replace('[title]', `Week ${targetWeek} Recap: [catchy subtitle]`).replace('[type]', 'Recap')}
Use sections: opening paragraph, "Matchup Breakdown" heading + paragraph, "Around The League" heading + transactions/standings paragraph, closing hot take paragraph.`;
}

// ---------------------------------------------------------------------------
// Preview prompt (pre-week)
// ---------------------------------------------------------------------------
async function buildPreviewPrompt({ body, rosterToManager, currentWeek }) {
    const targetWeek = body.week ? parseInt(body.week) : currentWeek;

    // Fetch upcoming matchup pairings (no scores yet) and recent standings context
    const [matchupsRes, prevMatchupsRes] = await Promise.all([
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/matchups/${targetWeek}`),
        fetch(`https://api.sleeper.app/v1/league/${leagueID}/matchups/${Math.max(1, targetWeek - 1)}`),
    ]);
    const [matchupsData, prevMatchupsData] = await Promise.all([
        matchupsRes.json(), prevMatchupsRes.json(),
    ]);

    // Upcoming pairings (no scores)
    const pairingLines = processMatchupPairings(matchupsData, rosterToManager);

    // Last week's scores for context
    const lastWeekLines = processMatchups(prevMatchupsData, rosterToManager, true);

    return `You are a witty, trash-talking sports writer for "${leagueName}", a dynasty fantasy football league running since 2015 (went dynasty in 2019).

${MANAGER_CONTEXT}

Week ${targetWeek} upcoming matchups:
${pairingLines.join('\n') || 'No matchup data available.'}

Last week (Week ${targetWeek - 1}) scores for context:
${lastWeekLines.join('\n') || 'No prior week data.'}

Write an entertaining Week ${targetWeek} preview. Hype up the big matchups, make bold predictions, call out who's on a hot streak or in freefall. Reference personalities.

${JSON_INSTRUCTIONS.replace('[title]', `Week ${targetWeek} Preview: [catchy subtitle]`).replace('[type]', 'Preview')}
Use sections: opening paragraph, "Matchup Previews" heading + paragraph going through each matchup with predictions, "Bold Predictions" heading + bullet-style paragraph with 3 hot takes, closing paragraph.`;
}

// ---------------------------------------------------------------------------
// Pre-rookie draft prompt
// ---------------------------------------------------------------------------
async function buildPreDraftPrompt({ rosterToManager, rostersData }) {
    const draftsRes = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/drafts`);
    const draftsData = await draftsRes.json();

    // Find the most upcoming/recent draft
    const upcomingDraft = (draftsData ?? []).find(d => d.status === 'pre_draft') ?? draftsData?.[0];
    const draftId = upcomingDraft?.draft_id;

    let tradedPicksLines = [];
    if (draftId) {
        const tradedPicksRes = await fetch(`https://api.sleeper.app/v1/draft/${draftId}/traded_picks`);
        const tradedPicksData = await tradedPicksRes.json();
        tradedPicksLines = (tradedPicksData ?? []).slice(0, 20).map(p => {
            const owner = rosterToManager[p.owner_id] ?? `Team ${p.owner_id}`;
            const original = rosterToManager[p.roster_id] ?? `Team ${p.roster_id}`;
            return `${owner} holds ${p.season} Round ${p.round} pick (originally ${original}'s)`;
        });
    }

    // Summarize roster sizes as proxy for team needs
    const rosterSizes = rostersData.map(r => ({
        manager: rosterToManager[r.roster_id] ?? `Team ${r.roster_id}`,
        players: (r.players ?? []).length,
    })).sort((a, b) => a.players - b.players);

    const rosterLines = rosterSizes.map(r => `${r.manager}: ${r.players} players on roster`);

    return `You are a witty, trash-talking sports writer for "${leagueName}", a dynasty fantasy football league running since 2015 (went dynasty in 2019).

${MANAGER_CONTEXT}

Upcoming rookie draft info:
${upcomingDraft ? `Draft type: ${upcomingDraft.type}, Rounds: ${upcomingDraft.settings?.rounds ?? 'unknown'}` : 'Draft details unavailable.'}

Traded picks heading into the draft:
${tradedPicksLines.join('\n') || 'No traded picks data available.'}

Current roster sizes (smaller = more need):
${rosterLines.join('\n')}

Write an exciting pre-rookie draft article. Cover: who needs the most help, notable traded picks that will shape the draft order, which managers are in "win now" mode vs building for the future, and bold predictions for who wins and loses the draft.

${JSON_INSTRUCTIONS.replace('[title]', 'Rookie Draft Preview: [catchy subtitle]').replace('[type]', 'Draft')}
Use sections: opening hype paragraph, "The Draft Board" heading + paragraph on picks/order, "Team Needs" heading + paragraph on who needs what, "Bold Predictions" heading + paragraph with draft predictions, closing trash talk.`;
}

// ---------------------------------------------------------------------------
// Post-rookie draft prompt
// ---------------------------------------------------------------------------
async function buildPostDraftPrompt({ rosterToManager }) {
    const draftsRes = await fetch(`https://api.sleeper.app/v1/league/${leagueID}/drafts`);
    const draftsData = await draftsRes.json();

    // Find the most recently completed draft
    const completedDraft = (draftsData ?? []).find(d => d.status === 'complete') ?? draftsData?.[0];
    const draftId = completedDraft?.draft_id;

    let pickLines = [];
    if (draftId) {
        const picksRes = await fetch(`https://api.sleeper.app/v1/draft/${draftId}/picks`);
        const picksData = await picksRes.json();
        pickLines = (picksData ?? []).map(p => {
            const manager = rosterToManager[p.roster_id] ?? `Team ${p.roster_id}`;
            const playerName = p.metadata?.first_name && p.metadata?.last_name
                ? `${p.metadata.first_name} ${p.metadata.last_name}`
                : `Player ${p.player_id}`;
            const position = p.metadata?.position ?? '';
            return `Round ${p.round}, Pick ${p.pick_no}: ${manager} selected ${playerName} (${position})`;
        });
    }

    return `You are a witty, trash-talking sports writer for "${leagueName}", a dynasty fantasy football league running since 2015 (went dynasty in 2019).

${MANAGER_CONTEXT}

Rookie draft results:
${pickLines.join('\n') || 'No draft pick data available.'}

Write an entertaining post-draft analysis. Cover: the best picks, the biggest reaches or steals, which managers "won" the draft, which managers whiffed, and how the draft changes the league's power rankings going forward.

${JSON_INSTRUCTIONS.replace('[title]', 'Rookie Draft Recap: [catchy subtitle]').replace('[type]', 'Draft')}
Use sections: opening paragraph with overall draft vibe, "Best Picks" heading + paragraph, "Biggest Reaches" heading + paragraph, "Draft Grades" heading + paragraph grading each manager A-F with brief reason, closing power ranking paragraph.`;
}

// ---------------------------------------------------------------------------
// Custom roast / bit prompt
// ---------------------------------------------------------------------------
function buildRoastPrompt({ body, rosterToManager }) {
    const customPrompt = (body.customPrompt ?? '').trim();
    const managerList = Object.values(rosterToManager).join(', ');

    return `You are a witty, savage sports writer for "${leagueName}", a dynasty fantasy football league running since 2015 (went dynasty in 2019). Your job is to write hilarious, biting content that roasts leaguemates and stirs the pot.

${MANAGER_CONTEXT}

League managers: ${managerList}

The user wants you to write the following piece:
"${customPrompt}"

Write this as a full blog post. Be funny, specific, and ruthless — lean into the manager personalities above. Don't hold back.

${JSON_INSTRUCTIONS.replace('[title]', '[catchy, punchy title for this roast/bit]').replace('[type]', 'News')}
Use at least 3-5 sections mixing headings and paragraphs to give the post structure and punch.`;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function processMatchups(matchupsData, rosterToManager, withScores) {
    if (!matchupsData?.length) return [];
    const pairs = {};
    for (const match of matchupsData) {
        if (!pairs[match.matchup_id]) pairs[match.matchup_id] = [];
        pairs[match.matchup_id].push({
            manager: rosterToManager[match.roster_id] ?? `Team ${match.roster_id}`,
            points: match.points ?? 0,
        });
    }
    return Object.values(pairs)
        .filter(pair => pair.length === 2)
        .map(pair => {
            const [w, l] = [...pair].sort((a, b) => b.points - a.points);
            return withScores
                ? `${w.manager} (${w.points.toFixed(2)} pts) defeated ${l.manager} (${l.points.toFixed(2)} pts)`
                : `${w.manager} vs ${l.manager}`;
        });
}

function processMatchupPairings(matchupsData, rosterToManager) {
    if (!matchupsData?.length) return [];
    const pairs = {};
    for (const match of matchupsData) {
        if (!pairs[match.matchup_id]) pairs[match.matchup_id] = [];
        pairs[match.matchup_id].push(rosterToManager[match.roster_id] ?? `Team ${match.roster_id}`);
    }
    return Object.values(pairs)
        .filter(pair => pair.length === 2)
        .map(pair => `${pair[0]} vs ${pair[1]}`);
}

function processTransactions(transactionsData, rosterToManager) {
    const trades = (transactionsData ?? []).filter(t => t.type === 'trade');
    const waivers = (transactionsData ?? []).filter(t => t.type === 'waiver' || t.type === 'free_agent');

    const tradeLines = trades.map(t => {
        const teams = (t.roster_ids ?? []).map(id => rosterToManager[id] ?? `Team ${id}`);
        return `Trade: ${teams.join(' ↔ ')}`;
    });
    const waiverLines = waivers.map(t => {
        const team = rosterToManager[(t.roster_ids ?? [])[0]] ?? 'Unknown';
        const addCount = Object.keys(t.adds ?? {}).length;
        const dropCount = Object.keys(t.drops ?? {}).length;
        return `${team} added ${addCount} player(s), dropped ${dropCount}`;
    });

    return { tradeLines, waiverLines };
}

// ---------------------------------------------------------------------------
// AI providers
// ---------------------------------------------------------------------------
async function generateWithGemini(prompt) {
    if (!GEMINI_API_KEY) throw error(500, "GEMINI_API_KEY not configured");
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    }).catch(e => { console.error(e); throw error(500, `Gemini API error: ${e.message}`); });
    if (!response?.text) throw error(500, "Gemini returned an empty response");
    return response.text;
}

async function generateWithClaude(prompt) {
    if (!ANTHROPIC_API_KEY) throw error(500, "ANTHROPIC_API_KEY not configured");
    const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
    }).catch(e => { console.error(e); throw error(500, `Claude API error: ${e.message}`); });
    const text = message?.content?.[0]?.text;
    if (!text) throw error(500, "Claude returned an empty response");
    return text;
}

// ---------------------------------------------------------------------------
// Parse AI JSON response
// ---------------------------------------------------------------------------
function parseAIResponse(raw) {
    if (!raw) throw error(500, "AI returned an empty response");
    const cleaned = raw.replace(/^```json?\s*/i, '').replace(/```\s*$/i, '').trim();
    try {
        return JSON.parse(cleaned);
    } catch {
        return {
            title: 'League Update',
            type: 'News',
            sections: [{ type: 'paragraph', text: raw }],
        };
    }
}

// ---------------------------------------------------------------------------
// Convert sections to Contentful rich text
// ---------------------------------------------------------------------------
function buildRichText(sections) {
    const content = sections.map(section => {
        const textNode = { nodeType: 'text', value: section.text, marks: [], data: {} };
        if (section.type === 'heading') {
            return { nodeType: 'heading-2', data: {}, content: [textNode] };
        }
        return { nodeType: 'paragraph', data: {}, content: [textNode] };
    });
    return { nodeType: 'document', data: {}, content };
}

// ---------------------------------------------------------------------------
// Publish to Contentful
// ---------------------------------------------------------------------------
async function publishToContentful(parsed) {
    const client = contentful.createClient({
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
    const space = await client.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE)
        .catch(e => { console.error(e); throw error(500, "Contentful: could not get space"); });
    const environment = await space.getEnvironment('master')
        .catch(e => { console.error(e); throw error(500, "Contentful: could not get environment"); });

    const fields = {
        title: { [lang]: parsed.title },
        body: { [lang]: buildRichText(parsed.sections) },
        type: { [lang]: parsed.type ?? 'News' },
        author: { [lang]: 'leaguebot' },
        featured: { [lang]: true },
    };

    const entry = await environment.createEntry('blog_post', { fields })
        .catch(e => { console.error(e); throw error(500, "Contentful: could not create entry"); });

    await entry.publish()
        .catch(e => { console.error(e); throw error(500, "Contentful: could not publish entry"); });

    return entry;
}
