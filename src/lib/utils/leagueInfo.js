/*   STEP 1   */
export const leagueID = "1336725339883196416"; // your league ID
export const leagueName = "League of Haiwans"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

// (optional) Context injected into AI-generated blog posts. Describe your league's history,
// tone, running jokes, rivalries, or anything else you want the AI to know.
export const leagueContext = `Started in 2015 as a redraft league, went dynasty in 2019. 10 managers, $100 dues. Known for trash talk, bad trades, and Jager Cup — an annual event where McCourt gets blackout drunk. The league has a Twitter at @HaiwanDynasty.`;

/*   STEP 2   */
export const homepageText = `
  <p>This is our home league, started in like 2015 as a redraft league and then we made the plunge to dynasty in 2019.</p>
  <p>We have a twitter to keep up with all our league news if you're interested!</p>
  <a href="https://twitter.com/HaiwanDynasty">Click here to go to our Twitter</a>
  <p>Matt McCourt is the commish and is the current champ (2025) :(</p>
  <p></p>
  <p>If anyone has something good to put here, let me (Mario) know </p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
        managerID: "77955166665850880", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Konja",
        aiBlurb: "overpays for elite talent, donated dues 7 straight years, finally trying to turn it around, at least he's a playoff bubble team now, sends the most trades and annoys everyone with offers", // (optional) short personality note for AI-generated posts
        location: "Dearborn, MI, USA", // (optional)
        bio:
            "I'm a new dad. I've never been a champion, this is the closest I'll ever be. It was more fun rebuilding than winning.",
        photo: "/managers/konja.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2014, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "The Usurper", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/zack.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 4963, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "Picks", // (optional) Favorite position (QB, WR, RB, TE, Picks, DL, SS, DB, and many more)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Fuck. Them. Picks.",
        tradingScale: 10, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "338741511774535680", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "PDSmith",
        aiBlurb: "won year 1, made the 2 worst trades in league history, eternal rebuilder, rivals with Mazzy, loves trivia and video games, is current toliet bowl champ", // (optional) short personality note for AI-generated posts
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "Hi my name's Pat. I won the league the first year and since then have made the 2 worst trades in league history. Outside of fantasy football I enjoy playing trivia, video games, flag football and isolating myself in my room for days at a time. ",
        photo: "/managers/pat.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Mike", // Can be anything (usually your rival's name)
            link: 7, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mazzy.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 1525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "CB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Success is built on the failures of others.",
        tradingScale: 8, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "462311713048358912", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "mmccourt",
        aiBlurb: "reigning 2025 champion after never winning a playoff ever, Washington fan, gets blackout drunk at Jager Cup, rivals with Mertic",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "I have a lot of accolades and finally something to show for it. 2025 champion. Fuck Mertic. I golf a lot and no I haven't gotten any better but at least I'm not afraid to use the driver now. I still cannot drink successfully.",
        photo: "/managers/mccourt.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2013, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "lac", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Snake Bitch", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/john.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 654, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Always aim to compete. If I ever find myself rebuilding I hope it's short-lived.",
        tradingScale: 5, // 1 - 10
        preferredContact: "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463097467752148992", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "blackzack5000",
        aiBlurb: "former champion who mastered the tank, now trying to compete again, wrote a love letter to losing, is engaged  to Michelle this year, has likely the best team in the league",
        location: "Berkley, MI, USA", // (optional)
        bio:
            "Cat guy. Plant guy. Sports guy. Engaged guy. Bald guy.",
        photo: "/managers/zack.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2008, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "N/A", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 2306, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Getting Bijan, Gibbs, and Achane in a single draft was all skill. Just draft good, not hard.",
        tradingScale: 8, // 1 - 10
        preferredContact: "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463130879590395904", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "klimansc",
        aiBlurb: "fantasy veteran since 2001, 99-23 in iPhone darts vs Fred and waiting for the perfect moment for win 100, loves ketchup, edgy jokes, punters, and lives in Denver",
        location: "Denver, CO, USA", // (optional)
        bio:
        "Didn't get updated last year, so what are the odds its get updated this year.\n" +
        "Feel free to actually use that \n" +
        "... \n" +     
        "I'm 99-23-21 against Fred in iPhone darts. I told him sending the next game is on him. Whenever he's most confident, that's when I want to take win 100. I've been waiting months.",
        photo: "/managers/scott.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2001, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Let's just get along", // Can be anything (usually your rival's name)
            link: 6, // manager array number within this array(0-9), or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 1170, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Have fun, be safe, make good choices!",
        tradingScale: 7, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463133568445444096", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mertic",
        aiBlurb: "American who lives in Austraila and claims he is Arabic but really he is 25% at most of Turkish decent, relies on Lamar Jackson to bail him out, low trade activity, hated by kosai and McCourt, is a dad",
        location: "Tweed Heads, NSW, Australia", // (optional)
        bio:
            "Dad in Australia. I need to win in fantasy football to prove my self worth. ",
        photo: "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2007, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Gingervitis", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 516, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Accidentally become fantasy relevant. Only team to never miss the playoffs.",
        tradingScale: 8, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158509706407936", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "paynemd",
        aiBlurb: "motto is 'win or lose booze', Cleveland Browns fan, low trade scale, just here to have a good time, brother in law with Mazzy and they share a name, Michael. Their wives are also sisters.",
        location: "Riverview, MI, USA", // (optional)
        bio:
            "Dad to Palmer and Colton. Everything else is irrelevant",
        photo: "/managers/payne.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2006, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "McCourt", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Stay the course",
        tradingScale: 4, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158817245360128", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mazzy_",
        aiBlurb: "eternal rebuilder, Bills fan, main rival is Pat, somehow always rebuilding despite years in the league, is the league punching bag and we are always extra mean to him, but only in good fun.",
        location: "Northville, MI, USA", // (optional)
        bio:
            "A pretty significant part of my actual job is risk management and mathematical projections. Turns out this is harder 🤷🏽‍♂️",
        photo: "/managers/mazzy.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2016, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "✌🏼️", // Can be anything (usually your rival's name)
            link: 7, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Statistically speaking it should be nearly impossible for me to *never* win this league, right...?",
        tradingScale: 10, // 1 - 10
        preferredContact: "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463382780466688000", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "fshatara2",
        aiBlurb: "former champion, just moved to Nashville from Detroit abandoning all his friends, 'when all else fails, Josh Allen', darts rival of Scott but has a losing record.",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "Multiple trophy winner. Pro Josh Allen. Anti Downriver. ",
        photo: "/managers/fred.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "cunt, piece of shit, pathetic, loser, coward, etc.", // Can be anything (usually your rival's name)
            link: 8, // manager array number within this array, or null to link back to all managers page
            image: "/managers/fred.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 4984, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "When else fails, we have Josh and a sarcastic sense of humor. ",
        tradingScale: 10, // 1 - 10
        preferredContact: "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463399096221167616", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "kosai",
        aiBlurb: "obnoxious, loud, think's he's the shit, here purely to talk shit, particular hatred of Mertic, surprisingly competitive",
        location: "Novi, MI, USA", // (optional)
        bio: "I'm here because I'm self-loathing and I'm filling this out so I don't get bitched at",
        photo: "/managers/kosai.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2023, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Bald POS", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/zack.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 461, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Balance being young and competing because if i am in the toilet bowl, i will win it.",
        tradingScale: 8, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
];

/*   !!  !!  IMPORTANT  !!  !! */
/*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */

// {
//   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//   "name": "Your Name",
//   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//   "location": "Brooklyn", // (optional)
//   "bio": "Lorem ipsum...",
//   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   "rival": {
//     name: "Rival", // Can be anything (usually your rival's name)
//     link: 6, // manager array number within this array, or null to link back to all managers page
//     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   },
//   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//   "philosophy": "Your fantasy team's philosophy", // (optional)
//   "tradingScale": 10, // 1 - 10 (optional)
//   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
// },
