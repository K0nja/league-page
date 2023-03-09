/*   STEP 1   */
export const leagueID = "1052162650571923456"; // your league ID
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
            "I am always bad and I make dumb bets.  I have donated dues for 4 straight years.  Here's to at least 4 more 🍻🥂",
        photo: "/managers/konja.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2014, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Myself", // Can be anything (usually your rival's name)
            link: 0, // manager array number within this array, or null to link back to all managers page
            image: "/managers/konja.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 4149, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "Picks", // (optional) Favorite position (QB, WR, RB, TE, Picks, DL, SS, DB, and many more)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Sell everything and everyone.  Never buy, only sell.  Don't have a good line up.  Good line ups make you worry and stressed, bad ones have no stress!",
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
        tradingScale: 5, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "462311713048358912", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "mmccourt",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "I'm like John Lynch and the 49ers, I've put together a great roster that wins or competes for the division title every year only to lose in the first round of playoffs and have nothing to show for it - except I'm better at trading than he is.",
        photo: "/managers/mccourt.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2013, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Turkish Delight", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/john.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 654, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "If you're not trying to win now then what are you playing for?",
        tradingScale: 4, // 1 - 10
        preferredContact: "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463097467752148992", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "blackzack5000",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "Full blown cat daddy. Considering a transition to only having players from cat teams - Lions, Jags, Panthers, Bengals. Send trades.",
        photo: "/managers/zack.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2008, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "TBD", // Can be anything (usually your rival's name)
            link: null, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 684, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Be a clear top team in the league or gtfo. I want to always be in a position where I have enough equity to take risky upside shots without being fucked if it doesn't work out. ",
        tradingScale: 10, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463130879590395904", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "klimansc",
        location: "Denver, CO, USA", // (optional)
        bio:
            "I'm 76-22-18 and counting against Fred in iPhone darts. And no, the rumors are not true, he has not been sandbagging. I'm just that good, challenges accepted. ",
        photo: "/managers/scott.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2001, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Ketchup Hat", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array(0-9), or null to link back to all managers page
            image: "/managers/kosai.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 394, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Have Fun!",
        tradingScale: 10, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463133568445444096", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mertic",
        location: "Tweed Heads, NSW, Australia", // (optional)
        bio:
            "Previous champion, only team to never miss the playoffs, only Australian resident in the league.",
        photo: "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2007, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Ginger Cunt", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Win as many games as possible. Pray no one gets hurt. Trade my first round pick mid season to someone struggling.",
        tradingScale: 1, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158509706407936", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "paynemd",
        location: "Riverview, MI, USA", // (optional)
        bio:
            "I'm Mike. I'm 31 and married. Got a baby on the way. I love hockey, golf and cornhole. Soccer is a warmup sport. My favorite meal is steak and lobster. Big whiskey fan. Carpe Diem. Live, Laugh, Love. You miss 100% of the shots you don’t take. If you can dream it you can do it. Peace and blessings.",
        photo: "/managers/payne.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2006, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Patrick", // Can be anything (usually your rival's name)
            link: 1, // manager array number within this array, or null to link back to all managers page
            image: "/managers/pat.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Rely on the few to carry the many. Balance is overrated. Are running backs important?",
        tradingScale: 7, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158817245360128", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mazzy13",
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "Perennial 'meh, his team is OK' guy. Always good for an upset against McCourt here and there.",
        photo: "/managers/mazzy.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2016, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Patty Cakes", // Can be anything (usually your rival's name)
            link: 1, // manager array number within this array, or null to link back to all managers page
            image: "/managers/pat.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Dynasty is all about the long game, but at some point you have to push your chips in and call your shot. You can't win a championship with a bunch of good assets, you need a few elite pieces. Purgatory is death, if you can't be top five, tank and rebuild.",
        tradingScale: 8, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463382780466688000", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "fshatara2",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "Self proclaimed and unanimously undisputed favorite child. Lover of all things narcotics and stimulants. Did I mention I'm platinum status with Delta?",
        photo: "/managers/fred.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Princess Peach", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 1525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Josh Allen until I die (or whenever Micah retires).",
        tradingScale: 7, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463399096221167616", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "kzaya5",
        location: "South Lyon, MI, USA", // (optional)
        bio: "FREE. TREY. SERMON.",
        photo: "/managers/kosai.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2023, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "El Bandido de salsa de tomate ", // Can be anything (usually your rival's name)
            link: 4, // manager array number within this array, or null to link back to all managers page
            image: "/managers/scott.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 8151, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "FREE. TREY. FREE. JAME-O",
        tradingScale: 7, // 1 - 10
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
