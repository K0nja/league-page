/*   STEP 1   */
export const leagueID = "1202123010564161536"; // your league ID
export const leagueName = "League of Haiwans"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>This is our home league, started in like 2015 as a redraft league and then we made the plunge to dynasty in 2019.</p>
  <p>We have a twitter to keep up with all our league news if you're interested!</p>
  <a href="https://twitter.com/HaiwanDynasty">Click here to go to our Twitter</a>
  <p>Matt McCourt is the commish and has never won a playoff game :~)</p>
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
        location: "Dearborn, MI, USA", // (optional)
        bio:
            "I went too far in a rebuild and got very lucky, BUT WE TAKE THOSE.  I have donated dues for 5 straight years.  Here's to at least 5 more 🍻🥂",
        photo: "/managers/konja.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2014, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Myself", // Can be anything (usually your rival's name)
            link: 0, // manager array number within this array, or null to link back to all managers page
            image: "/managers/konja.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 4963, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "Picks", // (optional) Favorite position (QB, WR, RB, TE, Picks, DL, SS, DB, and many more)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Depth? Who needs depth? If the big dogs go down I'm losing anyways.",
        tradingScale: 10, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "338741511774535680", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "PDSmith",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "I won the first Dynasty Championship as the clear-cut favorite. When I'm not winning trophies, in my spare time I enjoy long walks through my neighborhood and crying myself to sleep.",
        photo: "/managers/pat.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Mike", // Can be anything (usually your rival's name)
            link: 7, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mazzy.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 1525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Success is built on the failures of others.",
        tradingScale: 6, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "462311713048358912", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "mmccourt",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "I'm like John Lynch and the 49ers, I've put together a great roster that wins or competes for the division title every year only to lose in the first round of playoffs and have nothing to show for it - except I'm better at trading than he is.",
        photo: "/managers/mccourt.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2013, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Southern Racist Fuck", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/john.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 654, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "If you're not trying to win now then what are you playing for?",
        tradingScale: 5, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463097467752148992", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "blackzack5000",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "I got my mind on cats and cats on my mind",
        photo: "/managers/zack.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2008, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Plebs", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 2306, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Varsity team in a JV league",
        tradingScale: 10, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463130879590395904", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "klimansc",
        location: "Denver, CO, USA", // (optional)
        bio:
            "I'm 93-23-19 and counting against Fred in iPhone darts. At the last update, I was 76-22-18, so I'm 17-1-1 against him in the last 19. ",
        photo: "/managers/scott.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2001, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Stupid", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array(0-9), or null to link back to all managers page
            image: "/managers/kosai.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 394, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "Picks", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Have fun, be safe, make good choices!",
        tradingScale: 9, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463133568445444096", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mertic",
        location: "Tweed Heads, NSW, Australia", // (optional)
        bio:
            "Soon to be the only non 30 year old in this league. Current team principle of Scuderia Nonstop to cockfosters FF1 team, sponsored by the Piccadilly line. Our driver line up of Lamar Jackson & bunch of other guys gives us a great chance to finish 2nd in the Constructors Championship series this year.",
        photo: "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2007, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "The Ranga", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Think about the old days and convince yourself this is the year we get back to the top. Bank on little to no Injuries to our key players and disregard the glaring holes.",
        tradingScale: 3, // 1 - 10
        preferredContact: "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158509706407936", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "paynemd",
        location: "Riverview, MI, USA", // (optional)
        bio:
            "I'm Mike. I'm 32, married and have a beautiful baby girl. I love hockey, golf, cornhole, whiskey and guns. Soccer is a warmup sport. My favorite meal is steak and lobster. Carpe Diem. Live, Laugh, Love. You miss 100% of the shots you don't take. If you can dream it you can do it. Peace and blessings.",
        photo: "/managers/payne.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2006, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Kosai", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array, or null to link back to all managers page
            image: "/managers/kosai.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "The few carry the many. Depth is unnecessary",
        tradingScale: 7, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158817245360128", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mazzy_",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "Perennial mid-achiever. Wide Receiver enthusiast. Hater of Patty.",
        photo: "/managers/mazzy.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2016, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Patty Cakes / FUCK PAT", // Can be anything (usually your rival's name)
            link: 1, // manager array number within this array, or null to link back to all managers page
            image: "/managers/pat.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Dynasty is all about the long game, but at some point you have to push your chips in and call your shot. You can't win a championship with a bunch of good assets, you need a few elite pieces. Purgatory is death, if you can't be top five, tank and rebuild.",
        tradingScale: 6, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463382780466688000", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "fshatara2",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "Former champion, pulled off the biggest trade fleece of all time, but my most important achievement — sole owner of 1/10/1994. I like my RBs like I like my bourbon; aged 30+ years and overpriced.",
        photo: "/managers/fred.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Coward", // Can be anything (usually your rival's name)
            link: 8, // manager array number within this array, or null to link back to all managers page
            image: "/managers/fred.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 1525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Josh Allen",
        tradingScale: 10, // 1 - 10
        preferredContact: "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463399096221167616", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "kosai",
        location: "South Lyon, MI, USA", // (optional)
        bio: "I am a slightly above average flag football player that bought into this dumpster fire of a league however many years ago it has been and am only still here for the sole purpose of making other people's lives suck.",
        photo: "/managers/kosai.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2023, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "'Wah wah wah I'm angry.'", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 9221, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Build really good team, get pissed at Mertic/Mario, trade team for nothing, repeat cycle. Also always draft in the first round despite never having picks",
        tradingScale: 6, // 1 - 10
        preferredContact: "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
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
