<script>
    import { dues } from '$lib/utils/helper';
    let one;
    let two, twoOne, twoTwo;
    let three, threeOne, threeTwo, threeThree, threeFour;
    let four, fourOne;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive;
    let six;
    let seven;
    let eight;
    let nine;
    let ten;
    let eleven;
    let twelve;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">LEAGUE OF HAIWANS CONSTITUTION</h1>
    <h1><a href="https://drive.google.com/file/d/1gXYXkf3ZaOuUy2EqqQbw_z3vVnOwntB4/view?usp=sharing">click here for pdf version</a></h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: League Overview</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Fantasy Drafts & Draft Picks</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Inagural Draft</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Annual Rookie & Free Agent Draft</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Teams, Divisions, & Ownership</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Starting Lineups & Rosters</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 Injured Reserve Slots</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Taxi Squads</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFour)}>3.4 Roster Format</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Waiver Wire</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 FAAB</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: League Calendar</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Regular Season</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 Toilet Bowl</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>5.4 Offseason</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFive)}>5.5 Punishments</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Dues & Payment Structure</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: Trading</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 8: Scoring Format</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: Official Statistics, Scoring Changes, & League Rules Discrepancies</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>Section 10: Owner Responsibilities</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eleven)}>Section 11: Anti-Competitive Conduct</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(twelve)}>Section 12: Orphan Teams</h3>

    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1: League Overview</h2>
    
    <p>The purpose of this document and its bylaws is to (1) ensure a fair and enjoyable league for all Managers, (2) promote long-term viability of the league. If a rule is not explicitly stated, interpretations will consider these criteria and new rules will be voted on and subsequently documented in these bylaws. If this document disagrees with league site settings (Sleeper App), site settings will prevail until corrected.</p>
    <p></p>
    <ul>
        <li>10 Teams/Managers in 2 divisions playing a 14-week schedule with 3 weeks of Playoffs/Toilet Bowl</li>
        <li>30 roster spots
            <ul>
                <li>9 starters</li>
                <li>16 bench slots</li>
                <li>4 IR slots (leftover from Covid)</li>
                <li>5 Taxi Squad slots</li>
            </ul>
        </li>
        <li>An initial 31-round draft took place on August 18th, 2019 at 10 AM EST</li>
        <li>A 4 round rookie draft will take place each year to follow</li>
        <li>A position-balanced 0.5 PPR scoring format</li>
        <li>FAAB Bidding</li>
        <li>Free agents acquired through Blind Bid Auctioning will process continually every 24 hours at 3:05 AM EST. However, after games on Sunday, players will not be cleared until Wednesday mornings at approximately 3:05 AM EST
            <ul>
                <li>Dropped players will also spend a minimum of 48 hours on the waiver wire</li>
            </ul>
        </li>
        <li>League Dues: <b>See <a href ="https://docs.google.com/spreadsheets/d/1qei2R2FiRsNHShmRmlU0yJNMpzEcJy6iSfwEoDAoL4U/edit?usp=sharing">League Tracker Google Sheet</a></b>
            <ul>
                <li>Payouts to 1st place, 2nd place, highest weekly point total, & playoff berths</li>
            </ul>
        </li>
        <li>The league is designed to run for decades with smooth management transitions if necessary. Rules may be modified by the Commissioner or league vote to achieve overarching goals and withhold the integrity of the league.</li>
    </ul>    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2: Fantasy Drafts & Draft Picks</h2>
    
    <h3 bind:this={twoOne}>2.1 Inagural Draft</h3>
    <p>The league initially selected players via a 31-round startup draft on August 18th, 2019 at 10 AM EST. Current NFL players and 2019 rookies were eligible to be selected. Initial draft position was selected at random on August 4th, 2019. Trading of draft position was allowed up until an hour of the draft time. Trading of draft picks was not allowed during the initial draft.</p>

    <h3 bind:this={twoTwo}>2.2 Annual Rookie & Free Agent Draft</h3>
    <p>The league will conduct annual Rookie drafts for subsequent seasons.</p>
    <p></p>
    <p>Draft dates should be expected to take place after the NFL Draft and before the start of the regular NFL season. The Rookie Draft will consist of <b>4 rounds</b>.</p>
    <p></p>
    <p>Draft order will be determined by regular season Max Points For (see following list)</p>
    <p></p>
    <ul>
        <li>1st Pick: Non-playoff Teams' Max Points For</li>
        <li>2nd Pick: Non-playoff Teams' Max Points For</li>
        <li>3rd Pick: Non-playoff Teams' Max Points For</li>
        <li>4th Pick: Non-playoff Teams' Max Points For</li>
        <li>5th Pick: Playoff Teams' Max Points For</li>
        <li>6th Pick: Playoff Teams' Max Points For</li>
        <li>7th Pick: Playoff Teams' Max Points For</li>
        <li>8th Pick: Playoff Teams' Max Points For</li>
        <li>9th Pick: The Runner-Up</li>
        <li>10th Pick: The Champion</li>
    </ul>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3: Teams, Divisions, & Ownership</h2>

    <p>The league consists of 10 Teams (Managers) split into 2 divisions. Each team will play every team in their own division twice and play every team in the other division once with an additional game each year against a team's closest counterpart for a total of 14 regular season games. Divisions are subject to change from year to year by way of the Max Point For order. If a manager should choose not to return, the Commissioner will find a replacement manager using whatever means necessary to keep the league functioning.</p>

    <h3 bind:this={threeOne}>3.1 Starting Lineups & Rosters</h3>
    <p>League rosters will consist of no more than 30 players during a season (25 active, 5 taxi). There are no roster limits during the offseason, meaning that roster limits only apply from (1) the final cut down before the rookie/FA draft and (2) before the first game of a team's season. Due to some limitations in Sleeper App, the Commissioner will manually increase and decrease roster sizes at the start of each offseason (February 1st at the latest - increase) and at the end of each NFL preseason (Mondays, after the final preseason games have been concluded - decrease).</p>

    <h3 bind:this={threeTwo}>3.2 Injured Reserve Slots</h3>
    <p>Each team is granted four (4) Injured Reserve slots (increased due to Covid) to be used only for players who are unable to play due to injury. A player is eligible for IR only if they are placed on the actual Injured Reserve list by their NFL team.</p>
    <p></p>
    <p>If you have a player on IR who is no longer IR eligible, you must create room by dropping someone from your bench before you can make further Free Agent, Waiver, or Starting Lineup moves. (Sleeper preserves a player's IR designation if they get a season-ending injury until May 1st of the following year).</p>

    <h3 bind:this={threeThree}>3.3 Taxi Squads</h3>
    <p>Each team is granted five (5) taxi squad slots to stash rookies only. After the rookie drafts, managers are able to move any drafted rookie (including undrafted free agent rookies picked up via waivers) to the Taxi Squad, pending an available slot. Players are eligible to be on the Taxi Squad during their rookie and sophomore years in the NFL. Once their sophomore year has concluded, players must be moved to the active roster.</p>
    <p></p>
    <p>Taxi Squads are strictly for rookies and may not be added to during the season. This allows for players to be retained by managers while they develop during their first two years in the NFL.</p>
    <p></p>
    <p>Taxi Squad players are ineligible for starting lineups. <b>If a player is taken off the Taxi Squad, that player is no longer eligible to be added back to the Taxi Squad.</b></p>

    <h3 bind:this={threeFour}>3.4 Roster Format</h3>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>WR/RB/TE</li>
        <li>WR/RB</li>
        <li>WR/TE</li>
        <li>16 Bench</li>
        <li>4 IR</li>
        <li>5 Taxi</li>
    </ul>

    <h2 class="sectionHeading" bind:this={four}>Section 4: Waiver Wire</h2>
    <p>Any player not on a league roster is considered a free agent. Free agents may be claimed by managers through blind bidding. Blind bidding will take place using virtual currency with the manager's Free Agent Acquisition Budget (outlined below).</p>
    <p></p>
    <p>After games have concluded for the weekend, waivers will clear starting on Wednesday morning, and then every following morning at 3:05 AM EST.</p>
    <p></p>
    <p>Free agents whose NFL teams have participated in a game and players dropped by owners will be put on waivers for 48 hours before being eligible for pickup.</p>
    
    <h3 bind:this={fourOne}>4.1 FAAB</h3>
    <p>The Free Agent Acquisition Budget (FAAB) allocates a budget of virtual currency to each team before the season for them to spend on waiver pickups. Waiver claims are awarded to the highest bidder, not the worst-ranked team.</p>
    <p></p>
    <p>Each team is granted a $100 FAAB at the start of each season to be used for blind bidding waiver pickups. Bids will go through at the time of the reset of the waiver wire, Wednesday at 3:05 AM EST. In the event of a tie, a continuing rolling list waiver priority order is implemented for the tiebreaker, tracked by Sleeper. If you waiver a player at all, you go to the end of the list.</p>
    <p></p>
    <p>The minimum bid on any player is $1.</p>
    <p></p>
    <p>FAAB is a tradeable asset.</p>
    <p></p>
    <p>Remaining FAAB does <b>NOT</b> rollover from year to year.</p>
    <p></p>
    <p>The FAAB budget is reset when the league transitions to the new year automatically ($100).</p>
    <p></p>
    <p>Offseason bidding, waiver claims, and trades are all permitted - with the exception of during the down months (January - February).</p>

    <h2 class="sectionHeading" bind:this={five}>Section 5: League Calendar</h2>

    <h3 bind:this={fiveOne}>5.1 Regular Season</h3>
    <p>The Regular Season will consist of fourteen (14) total weeks starting simultaneously with the NFL season. The Top 6 teams will advance to the Playoffs, while the Bottom 4 teams will play for the Toilet Bowl during Weeks 15 - 17; after which point, the offseason will begin.</p>

    <h3 bind:this={fiveTwo}>5.2 Playoffs</h3>
    <p>As stated, Playoffs will consist of the Top 6 teams with the best records upon completion of the Regular Season. They will take place during Weeks 15 - 17 of the NFL season. The six playoff teams will be seeded as follows:</p>
    <ul>
        <li>Two Division Winners (Seeds 1 - 2) & granted BYE's</li>
        <li>Top remaining teams from either Division (3 - 6)</li>
    </ul>
    <p></p>
    <p>Tiebreakers for standings and playoff spots will be determined by this order, taken from Sleeper.App:</p>
    <ul>
        <li>Overall Record > Points For > Points Against</li>
    </ul>
    
    <h3 bind:this={fiveThree}>5.3 Toilet Bowl</h3>
    <p>The four remaining teams that do not advance to the playoffs will participate in the Toilet Bowl Playoffs. These teams will be seeded 1 - 4, with the number one (1) seed going to the team with the worst record. The teams will play to avoid battling for last place. The <b>LOSING</b> team from each round gets flushed to the next round. The winner of the Toilet Bowl will be awarded their trophy and punished by their colleagues.</p>

    <h3 bind:this={fiveFour}>5.4 Offseason</h3>
    <p>The Offseason will consist of the time between the conclusion of Pro Bowl Week 18 and Week 1 of the following year. However, after the conclusion of playoffs (Week 17), there will be a lock on all transactions, free agents, and waiver moves starting January 1st and ending on March 1st. On March 1st, the lock will be lifted, and owners may resume making transactions.</p>

    <h3 bind:this={fiveFive}>5.5 Punishments</h3>
    <p>Punishments will vary from year to year but will ultimately be owner suggestions or random selections from a grouping of agreed upon punishments before the start of the upcoming season. Vote decisions must be unanimous in that everyone consents to carrying out the punishment if they win the Toilet Bowl (lose) that year. Punishments are therefore mandatory, non-avoidable, and non-negotiable; and must be completed prior to the start of the following season.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6: Dues & Payouts</h2>
    <p>League dues are subject to change per season, are to be paid by each Team/Manager and are non-refundable.</p>
    <p></p>
    <p>If a manager leaves the league for any reason during the season, their dues are forfeited to the prize pool and they will have no claim to them in any way. This includes if said manager finds a replacement manager, unless the replacement manager is willing to reimburse the previous manager and pay the dues required to join the league.</p>
    <p></p>
    <p>If a manager cannot reasonably meet the dues deadline, they must notify the Commissioner and make alternate arrangements (i.e. payment plan, over-the-pant handy). Failure to do so will result in the forfeiture of their team for the current season and seeking a replacement manager, or taken over by the Commissioner until the manager is paid up, or another manager is found to take the team over. Don't be that person.</p>
    <p></p>
    <p>**All Venmo payments can be made out to the Commissioner: <b>@Matthew_McCourt</b></p>
    <p></p>
    <p>Payouts are as follows:</p>
    <ul>
        <li>First place: $750</li>
        <li>Second place: $150</li>
        <li>Highest Reg. Season (14) Weekly Points: $10/wk</li>
        <li>Playoff Berth: $25 per place</li>
        <li>TOTAL: $1140</li>
    </ul>
    <p><i>**To see past payout examples see the League Spreadsheet**</i></p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7: Trading</h2>
    <p>Trading is an essential part of a dynasty league & is only permitted by managers who are paid in full for the current season.</p>
    <p></p>
    <p><b>THE TRADE DEADLINE IS AT THE CONCLUSION OF WEEK 13 GAMES - TWO (2) WEEKS PRIOR TO PLAYOFFS.</b></p>
    <p></p>
    <p>Once a trade has been proposed and accepted via the site, it cannot be rescinded except for manager error. If a trade was offered/accepted in error, the manager making the error must notify the Commissioner AND the manager of the other team immediately (i.e. within 5 minutes of the trade's acceptance) to request the trade to be voided. Trades will only be revoked because of legitimate manager error that is reported in a timely manner. <b>A manager may not request that a trade be voided due to buyer's remorse, seller's remorse, or failure to perform due diligence before proposing or accepting the trade.</b> The Commissioner reserves the right to allow a trade to stand if a manager's claim of error is not deemed credible.</p>
    <p></p>
    <p>Conditional Trades (i.e. <i>based on future team record, finish in the standings, or player performance are allowed</i>) involving players, draft picks, and/or FAAB are permitted and will be documented within Sleeper.App via Commissioner's Notes. However, managers may not engage in “delayed” or “two-part” trades where players are agreed to be traded but one or more players are withheld from being traded for one or more days. The Commissioner may void the trade if there is clear and convincing evidence that the trade in question was part of such a trade.</p>
    <p></p>
    <p>Teams may not impose “post-trade conditions”, where a team trades a player subject to a requirement that the
other team perform or refrain from performing a specified action relating to the player after the trade has been
completed. However, conditional trades (i.e. A manager may not trade a player with the condition that the
player be waived immediately, or that the player must not be subsequently traded to a particular team, or that
the player is benched when playing the team currently trading the player) are permitted per the Conditional
Trades guidelines above.</p>
    <p></p>
    <p>Managers may not make offseason trades unless they have paid their league fees for the upcoming season.
Trades will not be processed unless all owners involved in the transaction have paid league fees.</p>
    <p></p>
    <p>Managers shall use their best efforts to respond promptly (within 48 hours) to trade offers from other owners.</p>
    <p></p>
    <p>Occasionally, rapidly changing information is not available to both sides of a trade, particularly when the trade
was opened before the news was widely known. In this case, it is recommended that both sides of the trade
inform each other of the material information that has changed prior to acting on the trade. While trading on
rapidly changing info can benefit a manager short-term, that's some pussy shit and the manager should be
reprimanded accordingly.</p>

    <h2 class="sectionHeading" bind:this={eight}>Section 8: Scoring Format - Half PPR</h2>
    <ul>
        <li>Passing Yards: 25 yards per point</li>
        <li>Passing TD: 6 points</li>
        <li>Pass Intercepted: -3 points</li>
        <li>Rushing Yards: 10 yards per point</li>
        <li>Rushing TD: 6 points</li>
        <li>Receiving Yards: 10 yards per point</li>
        <li>Receiving TD: 6 points</li>
        <li>2-pt Conversion: 2 points</li>
        <li>Fumble/+Lost: -1 point/-2 points</li>
        <li>Reception: .5 points</li>
    </ul>

    <h2 class="sectionHeading" bind:this={nine}>Section 9: Official Statistics, Scoring Changes, & League Rules Discrepancies</h2>
    <p>Every week after all NFL games are played and all fantasy scores are calculated, the Elias Sports Bureau
reviews all NFL games for the purposes of locating and calculating any necessary corrections to the official
team and player statistics compiled during each game. These corrections are applied to league scores when
they are released by Elias and the NFL, which is usually on Wednesday mornings.</p>
    <p></p>
    <p>Managers should be aware that the outcome of a game that was tied or won by a small margin may change
after the Elias Sports Bureau's scoring corrections are applied. Sleeper.App will apply the official scoring
corrections without exception, and owners may not appeal the changed scoring, outcome of a game, or request
that the official scoring corrections be disregarded, unless in circumstances that will lead to the betterment of
the league.</p>

    <h2 class="sectionHeading" bind:this={ten}>Section 10: Owner Responsibilities</h2>
    <p>Preparation is the key to short-term survival and long-term success in a dynasty league. Managers are
expected to be prepared for the annual drafts and to monitor NFL activities throughout the regular season
AND offseason, including but not limited to, up-to-date knowledge of player injuries and which
players/coaches have changed teams or retired.</p>
    <p></p>
    <p>Participation is the lifeblood of this league, so maintaining a sense of community and respect among owners is
vital to the league's long-term survival and managers' long-term commitment.</p>
    <p></p>
    <p>In addition to the above, managers are also required to adhere to the following responsibilities on behalf of
their teams. A manager who fails to adhere to one or more of these responsibilities will be subject to
Commissioner sanctions:</p>
    <ul>
        <li>Managers are responsible for regularly accessing the league's Sleeper.App, including:
            <ul>
                <li>Ensuring their team has current rosters and that they are submitting valid lineups weekly</li>
                <li>Knowing and following the rules and schedule listed in these bylaws as well as on Sleeper App</li>
                <li>Responding to emails or private messages from the Commissioner or other managers in a timely manner</li>
                <li>Taking part in league votes and debates</li>
                <li>Responding to trade offers in a timely manner</li>
                <li>Participating in all schedule league functions and scheduled events, whether they occur in the regular season or offseason</li>
                <li>Responsible for notifying a Commissioner if they will be away for an excessive period of time so arrangements can be made to set lineups and/or manage the team during that owner's absence</li>
            </ul>
        </li>
        <li>Sanctions (<i>in no particular order</i>) :
            <ul>
                <li>Public/Private Warning</li>
                <li>Deductions from overall and divisional point totals</li>
                <li>Retroactive cancellation of trades, with the possibility of forfeits declared for any games affected by the cancelled trade</li>
                <li>Suspension of waiver rights for a specified period</li>
                <li>Suspension of trading rights for a specified period</li>
                <li>Suspension or benching of players for a specified period</li>
                <li>Suspension of chat room privileges for a specified period</li>
                <li>Suspension of a manager or co-manager for a specified period, with their team forfeiting all games occurring during the suspension</li>
                <li>Forced waiving of players</li>
                <li>Loss of future draft picks</li>
                <li>Loss of waiver priority</li>
                <li>Removal of an owner from the league</li>
            </ul>
        </li>
    </ul>
    <p></p>
    <p>The Commissioner may impose and enforce sanctions at any time, including retroactively. The Commissioner
may use an owner's reputation in considering the length or severity of sanctions.</p>
    <p></p>
    <p>The Commissioner will be the final authority on all sanctions only to be overturned by a unanimous vote by all
other owners in a league wide vote.</p>

    <h2 class="sectionHeading" bind:this={eleven}>Section 11: Anti-Competitive Conduct</h2>
    <p>Anti-competitive conduct is defined as managers or teams engaging in conduct that prevents, reduces, or
otherwise negatively affects the natural competition and well-being of the league. The following
anticompetitive actions are strictly prohibited. Violations of these rules shall be agreed upon by the league,
who may subject a manager(s) to appropriate sanctions:</p>
    <p></p>
    <p><b>Tanking:</b> Managers are expected to use their best efforts to set their best available lineup every week of
competition, even if they are well out of playoff contention. Tanking is defined as failing to submit their best
available starting lineup either intentionally or through indifference. It is understood that owners may play
hunches on who to start and won't always start the player who scores the most points.</p>
    <p></p>
    <p>However, an owner who knowingly benches star players or obvious starting players in favor of players who
are marginal, clearly injured, benched, suspended or on their bye weeks shall be subject to Commissioner
sanctions for a first offense. A second offense shall result in that owner's immediate removal from the league.</p>
    <p></p>
    <p><b>Anti-Competitive Trades:</b> (1) Managers may not make trades that result in worsening their own team in order
to stock another team playing a third team they want/need to lose. (2) Managers may not make trades if they
do not intend to return to the league for the next season. If an owner does not intend to return to the league,
they should announce their retirement publicly and play out the season using their best efforts; the incoming
replacement owner should be permitted to inherit an intact team and make their own trades and roster
decisions. The Commissioner may retroactively void a trade if there is clear and convincing evidence that the
trade was prohibited on anti-competitive grounds that were not apparent at the time of the trade.</p>
    <p></p>
    <p><b>Collusion:</b> Collusion is defined as two or more managers making arrangements and/or acting in concert to
influence the results of league activities such as game outcomes, draft standing, or player availability. Any
unsportsmanlike conduct coordinated between two or more managers is considered to be collusion, as is
teams trading to consolidate better players on one team and/or agreeing to share payouts by acting in concert.
Trading a player with the condition that he be traded back would be considered collusion, and against the
rules. Managers engaging in collusion are subject to penalties and/or immediate removal from the league.</p>
    <p></p>
    <p><b>Dumping:</b> A manager who, without good reason, cuts players from their team who are obviously valuable is
subject to Commissioner sanctions. If a manager continues to dump players after sanctions are imposed, the
manager shall be removed from the league. It is understood that teams can and will drop “borderline” players
from their rosters, however, dropping obvious fantasy starters or large amounts of average players in an
attempt to increase draft position, make players available to others by way of collusion, or sabotage the
integrity of the league, shall <b>not</b> be tolerated.</p>
    <p></p>
    <p><b>Indifference:</b> A manager who fails to submit a starting lineup or fails to replace inactive players who are
injured, benched, suspended or on their bye week is subject to Commissioner's sanctions for a first offense. A
manager who fails to set a starting lineup due to indifference twice in the same season is subject to removal
from the league.</p>

    <h2 class="sectionHeading" bind:this={twelve}>Section 12: Orphan Teams</h2>
    <p>A manager may retire from the league in good standing. Retirement should be announced before the start of
the regular season. However, if retirement is announced during a season, that current season must be
completed by the current manager before retiring from the league. Upon announcement of an manager's
retirement, a replacement manager will be sought out and they will be responsible for taking control of the
orphan team and covering the upcoming season's league fees. Once a manager announces their retirement,
they may not make any trades for the remainder of the season.</p>
    <p></p>
    <p>Aside from retirement, orphan teams can be created through:</p>
    <ul>
        <li>Quitting Manager: If an owner publicly declares they are quitting the league, the team is immediately
classified as an orphan team and the Commissioner will assume the control of the team until a
replacement owner is found. Quitting owners will NOT be allowed re-entry into the league and will
NOT get their league dues back</li>
        <li>Abandoning manager: A team is considered abandoned during the season if an owner fails to set a
starting lineup for two consecutive weeks</li>
        <li>Removal of an owner(s):
            <ul>
                <li>for failure to pay league fees before start of regular season</li>
                <li>for cheating or anti-competitive conduct</li>
                <li>for collusion between teams</li>
                <li>for offering/accepting bribes to influence league activity in any way</li>
                <li>for repeated failure to adhere to league rules or abide by Commissioner and Co-Commissioner rulings</li>
            </ul>
        </li>
    </ul>
    <p></p>
    <p>If a team is orphaned during the season, the Commissioner will set that team's roster for the remainder of that
season. The stated preference is that the Commissioner setting the orphan team's roster not be scheduled to
play the orphan team during the season. In the event the Commissioner's team does play the orphan team
during the season, an appropriate league member shall set the orphan team's lineup for that game.</p>
    <p></p>
    <p>Payouts won by an orphaned team during a regular season will be put into the following year's prize pool to
be distributed as extra prize winnings.</p>
    
</div>