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
            "I overpay for elite talent and always will.  I have donated dues for 6 straight years.  Here's to hopefully making some back this year 🍻🥂",
        photo: "/managers/konja.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2014, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "GreyZay5000", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/zack.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
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
        location: "Allen Park, MI, USA", // (optional)
        bio:
            "What's left to say. I suck. Maybe I'll get a cat. I got blackout drunk the first night of Jager Cup and got body slammed into a deck. Trying to spice things up in life, change up the routine. My golf handicap fluctuates between 10 and 20. I cannot drink alcohol successfully. #420blazeup",
        photo: "/managers/mccourt.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2013, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Bogan Racist Fuck", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/john.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 654, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "DE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Fuck Mertic",
        tradingScale: 8, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463097467752148992", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "blackzack5000",
        location: "Berkley, MI, USA", // (optional)
        bio:
            "I manage a historically volatile dynasty football roster and have 3 cats that hate each other. None of us know peace, but we know persistence.",
        photo: "/managers/zack.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2008, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Everyone is my best friend", // Can be anything (usually your rival's name)
            link: 3, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 2306, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "There was a time, not long past, when the weight of failure was the only thing that kept me afloat. I was a captain of a sinking ship, willfully so—tanking, they called it. It was my way, my name, my soul. The tides of defeat washed over me, season after season, and yet I pressed on through storm and sorrow, chasing some far-off glimmer atop the standings. </p></p>" + 
            "And lo, I reached it. The summit. I stood where champions stand, and the wind was still. You'd think triumph would warm these old bones... but tell me—why then do I feel so cold?\n \n" +
            "I find myself gazing astern, past the golden shores, toward those dark and briny depths where loss lived... and you.\n \n" +
            "Ah, the tank—how cruel, how comforting. We were terrible, yes, but we were true. One day, when the cheers fade and the record books close, I shall return to you. For in the silence of defeat, I found something purer than victory.\n \n" +
            "One day, my beloved tank, we'll drift together once more—adrift, but never apart. \n \n" +
            "Forever yours.",
        tradingScale: 10, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463130879590395904", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "klimansc",
        location: "Denver, CO, USA", // (optional)
        bio:
            "I'm 99-23-21 against Fred in iPhone darts. I told him sending the next game is on him. Whenever he's most confident, that's when I want to take win 100. I've been waiting months.",
        photo: "/managers/scott.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2001, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "In Pat's honor", // Can be anything (usually your rival's name)
            link: 9, // manager array number within this array(0-9), or null to link back to all managers page
            image: "/managers/mazzy.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 3272, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Have fun, be safe, make good choices!",
        tradingScale: 8, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463133568445444096", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mertic",
        location: "Tweed Heads, NSW, Australia", // (optional)
        bio:
            "As a Financial Instructor with the Retirement Education Foundation, I'm proud to be part of a non-profit charitable organization that empowers individuals approaching or in retirement with advanced financial literacy. Through in-depth, education-first workshops and courses, we help people understand the complexities of retirement planning - covering everything from tax strategies to income distributions. Our mission is simple: to give people the confidence and clarity they need to make informed decisions that support a secure and fulfilling retirement.\n \n" +
            "In addition to my work with REF, I serve as a Financial Advisor at C2 Private Wealth, where I have the privilege of working one-on-one with clients to build customized retirement plans. I'm passionate about helping people retire sooner, spend more confidently, and live with less financial anxiety. By constructing highly individualized retirement plans tailored to each client's goals, we deliver the best possible outcomes and help make their ideal retirement a reality.\n \n" +
            "At the core of both roles is a commitment to education, clarity, and meaningful outcomes. Whether through teaching or advising, my focus is always on helping others make the most of their retirement years.",
        photo: "/managers/john.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2007, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Red Boi", // Can be anything (usually your rival's name)
            link: 2, // manager array number within this array, or null to link back to all managers page
            image: "/managers/mccourt.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "scrape together enough wins to get into playoffs and get bailed out by Lamar. Maybe hit on a third round pick every now and then.",
        tradingScale: 4, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158509706407936", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "paynemd",
        location: "Riverview, MI, USA", // (optional)
        bio:
            "I'm the popularest guy in the group \n Big-ass stomach, bitches think I'm cute. 50 told me to do sit-ups to get buff \n Did two and a half and couldn't get up.",
        photo: "/managers/payne.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2006, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "IR", // Can be anything (usually your rival's name)
            link: null, // manager array number within this array, or null to link back to all managers page
            image: "/managers/everyone.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 240, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "Win or lose booze",
        tradingScale: 3, // 1 - 10
        preferredContact: "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463158817245360128", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "Mazzy_",
        location: "Northville, MI, USA", // (optional)
        bio:
            "Death. Taxes. Rebuild. I am bad at fantasy football.",
        photo: "/managers/mazzy.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2016, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Cheap Soy Burger Patty", // Can be anything (usually your rival's name)
            link: 1, // manager array number within this array, or null to link back to all managers page
            image: "/managers/pat.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy:
            "I logically understand that at some point the rebuild should culminate in a team worthy of competing for a championship, but I haven't quite cracked the code on how to actually do that. As long as I beat Patty, I'll be happy though.",
        tradingScale: 10, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463382780466688000", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "fshatara2",
        location: "Detroit, MI, USA", // (optional)
        bio:
            "Former champion, currently in possession of the toilet bowl trophy. Firm believer in low impact activities. Life goals include, but not limited to; becoming best friends with QB1, figure out my driver, and understand whatever the fuck matcha is. \n \n https://hydeshailmary.com",
        photo: "/managers/fred.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2012, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Coward", // Can be anything (usually your rival's name)
            link: 8, // manager array number within this array, or null to link back to all managers page
            image: "/managers/fred.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 2212, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "When all else fails, Josh Allen",
        tradingScale: 8, // 1 - 10
        preferredContact: "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
        managerID: "463399096221167616", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        name: "kosai",
        location: "Novi, MI, USA", // (optional)
        bio: "Still just here to talk shit and suck the fun out of it for everyone else. Also fuck Mertic",
        photo: "/managers/kosai.jpg", // square ratio recommended (no larger than 500x500)
        fantasyStart: 2023, // (optional) when did the manager start playing fantasy football
        favoriteTeam: "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        mode: "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        rival: {
            name: "Mertic, Scott, and McCourt", // Can be anything (usually your rival's name)
            link: 5, // manager array number within this array, or null to link back to all managers page
            image: "/managers/Mertic.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        favoritePlayer: 9221, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        valuePosition: "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        rookieOrVets: "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        philosophy: "Have the best players and the most good players at all the positions ",
        tradingScale: 6, // 1 - 10
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
