// Guthrie CTE Center News Archive — data.js
// Add entries chronologically (newest first preferred, but any order works — app sorts by date)
// Each entry: { id, date (YYYY-MM-DD), year, headline, body, programs[], source ('web'|'twitter') }

const NEWS_DATA = [

  // ── 2002 MAY ──
  {
    id: "2002-05-15",
    date: "2002-05-15",
    year: 2002,
    headline: "CAD Classes Celebrate End-of-Year with Pot-Luck Lunch",
    body: "Ms. Greiner's CAD classes held their end of year post-final exam celebration with a pot-luck lunch supplied by the teacher and all of her students. They dined on fajitas, kiwi-marinated pork, flan, beans & rice and other homemade delicacies.",
    programs: ["Architectural CAD"],
    source: "web"
  },
  {
    id: "2002-05-13",
    date: "2002-05-13",
    year: 2002,
    headline: "Josh Franer Wins Silver Remi Award at WorldFest Houston 2002",
    body: "Josh Franer, a Media Technology student, was awarded the prestigious Remi Award from the 35th annual WorldFest Houston 2002. Josh submitted his short film, a digital video entry entitled \"The Beginning of the End\" and competed among 3,900 entries to win a Silver Remi Award. He also won $5,000 in the Culture Shapers Art Festival and an honorable mention in the Spindletop Film Festival. \"I can't believe I won,\" says Franer. \"There were so many entries… I really didn't expect to even place.\"",
    programs: ["Media Technology"],
    source: "web"
  },
  {
    id: "2002-05-12",
    date: "2002-05-12",
    year: 2002,
    headline: "BPA Web Development Team Earns Second Place Nationally in Chicago",
    body: "J. Axel Murillo (George), a student of Computer Networking and Media Technology classes, along with fellow Stratford students Josh Hosseinali and Emily Kelsch, and sponsor Kristy Schaper, entered the national BPA Web Development Competition in Chicago. Their design of \"Fusion Productions\" earned second place overall in the nation.",
    programs: ["Computer Networking", "Media Technology"],
    source: "web"
  },
  {
    id: "2002-05-09",
    date: "2002-05-09",
    year: 2002,
    headline: "NJROTC Unit Earns 'Distinguished' Recognition — 2nd Overall in Region",
    body: "The NJROTC unit from The Guthrie Center received 'Distinguished' recognition — one of the most coveted awards in JROTC. Out of over sixty NJROTC units in the area, the Guthrie unit placed second overall, with academic honors. This distinction opens up college opportunities including principal nominations for West Point, Air Force, and Naval Academy appointments. Congratulations to the cadets, student leaders, and instructors.",
    programs: ["NJROTC"],
    source: "web"
  },
  {
    id: "2002-05-06",
    date: "2002-05-06",
    year: 2002,
    headline: "Explorers Post 664 Takes Third at Katy ISD Law Enforcement Contest",
    body: "Explorers Post 664 attended a Law Enforcement Contest hosted by Katy ISD. Mr. Winn and his team of John Figaroa, Laura Cross, and Jesus Guillen took third place in the Felony Traffic Stop portion — notable as The Guthrie Center's first competition in this venue. Explorers are trained in law enforcement tactics including accident investigation, drug raids, domestic crisis, crime scene search, and felony traffic stops. Special thanks to Dan Steffenauer, Officer Chiles SBISD PD, Sgt. Fleming SBISD PD, and Chief Brawner SBISD PD.",
    programs: ["Law Enforcement", "Explorers Post 664"],
    source: "web"
  },
  {
    id: "2002-05-03",
    date: "2002-05-03",
    year: 2002,
    headline: "CAD Students Excel at Michael Myers AIA Design Competition",
    body: "Many Computer Architectural Drafting students completed entries in the Michael Myers AIA Design Competition. The Houston chapter of the American Institute of Architects holds an annual scholarship and recognition event for high school students. SWHS student Bo-Hye Na won first place in the individual competition. Carlos Gomez, also from SWHS, placed in that division. The team of Eduardo Alvardo (NHS) and Manrique Amaya (SWHS) took third place in the group competition. Thanks to Ms. Greiner for going above and beyond to make this opportunity happen.",
    programs: ["Architectural CAD"],
    source: "web"
  },
  {
    id: "2002-05-02",
    date: "2002-05-02",
    year: 2002,
    headline: "CATE Scholarship Awards Ceremony — Over $100,000 Awarded to SBISD Students",
    body: "The Career and Technology Education Scholarship awards recognition reception was held at the Administration building Board Room. Students from throughout the district were honored. Over $100,000 in scholarships were awarded to SBISD students. Guthrie Center scholarship recipients included: Landon Kinney — Art Institute (Ms. Bousley, Culinary Arts); Bo-Hye Na — RWS Architects (Ms. Greiner, Architectural CAD); Michelle Robles — Leadership in Hotel Studies (Ms. Hamilton, Hotel Management); Christopher Ellers — SBISD Education Foundation (Lt. Col. Sluis, NJROTC); Lauren Pearson — SBISD Education Foundation (Ms. Greiner, Architectural CAD); Quang Tran — Gates Scholarship@TAMU (Lt. Col. Sluis, NJROTC); John Figaroa — Gates Scholarship@TAMU (Lt. Col. Sluis, NJROTC). Special thanks to Linda Russell and her CATE staff and Advisory Board.",
    programs: ["Culinary Arts", "Architectural CAD", "Hotel Management", "NJROTC"],
    source: "web"
  },
  {
    id: "2002-05-01",
    date: "2002-05-01",
    year: 2002,
    headline: "SkillsUSA State Champions: Computer Animation Students Headed to Kansas City",
    body: "Four Computer Animation students competed and won in the SkillsUSA Texas State Championships. Graham Musgrove (SWHS) and Pierre Vega (NHS) each took third place. Aaron Blair (SHS) and Alberto Capetillo won first place and will compete at the national convention in Kansas City in June.",
    programs: ["Computer Animation"],
    source: "web"
  },

  // ── 2002 APRIL ──
  {
    id: "2002-04-26",
    date: "2002-04-26",
    year: 2002,
    headline: "Nine Students Represent SBISD at State SkillsUSA/VICA in Fort Worth",
    body: "Nine SBISD students representing four high schools competed in Fort Worth at the state SkillsUSA/VICA contests. Representing Computer Animation and Cosmetology programs: Alberto Capetillo & Emelin Rodriguez (MHS); Aaron Blair & Michelle Ma (SHS); Graham Musgrove & Thao Diep (SWHS); Maria Deleon, Anna Sandoval & Pierre Vega (NHS).",
    programs: ["Computer Animation", "Cosmetology"],
    source: "web"
  },
  {
    id: "2002-04-25",
    date: "2002-04-25",
    year: 2002,
    headline: "Sam's Club Awards CAD Class $1,000 Check for Valentine's Day Fundraiser",
    body: "Back in February, Ms. Greiner's Architectural Drafting students held a fundraiser for their program selling roses for Valentine's Day. They arranged with Sam's Club on the Katy Freeway to match the money they raised. The Sam's Club management team awarded Ms. Greiner's class with a $1,000 check, presented at the morning crew meeting in front of about fifty employees.",
    programs: ["Architectural CAD"],
    source: "web"
  },
  {
    id: "2002-04-24",
    date: "2002-04-24",
    year: 2002,
    headline: "Olympic Luge Athlete Ruben Gonzales Visits Media Technology Program",
    body: "Olympic Luge athlete Ruben Gonzales, who has successfully participated in three Olympic competitions, visited with Media Tech student Brendon Lankford about editing a video. Gonzales, who lives in the Katy area, heard about the Guthrie program and was impressed by the high quality of work and students.",
    programs: ["Media Technology"],
    source: "web"
  },
  {
    id: "2002-04-23",
    date: "2002-04-23",
    year: 2002,
    headline: "FFA Annual Banquet Held at Don Coleman Coliseum",
    body: "The Spring Branch FFA Students held their annual banquet at the Don Coleman Coliseum. After a barbecue dinner, awards were presented. Volunteers Suzanne Dedear and Joe Yarborough were recognized for their continued dedication. FFA Officers for 2002-2003 were installed: Jennifer Kelley — President; Christina Gunkel — Vice President; Katie Dedear — Secretary; Cory Harget — Treasurer; Scott Pesl — Reporter. Mr. McManners and outgoing officers produced a great video recap.",
    programs: ["FFA"],
    source: "web"
  },
  {
    id: "2002-04-22a",
    date: "2002-04-22",
    year: 2002,
    headline: "Dr. Theron Brown Joins Guthrie Center Administrative Team",
    body: "The Guthrie Center is pleased to announce the newest member of the Administrative Team — Dr. Theron Brown. Welcome to the dynamic and growing family!",
    programs: [],
    source: "web"
  },
  {
    id: "2002-04-22b",
    date: "2002-04-22",
    year: 2002,
    headline: "Media Tech Students Win Multiple Awards at Museum of Fine Arts Young Filmmakers Festival",
    body: "Media Tech students had two first place projects and two second place ties at The Museum of Fine Arts Young Filmmakers Festival. First Place Winners: Milton Grimes (MHS), Victor Bernal and Enrique Arroyo (SWHS). Second Place Winning Ties: Josh Franer (MHS), Coleman McFarland (SHS), and Brendon Lankford (MHS). Winning projects were screened at the Museum of Fine Arts, followed by a reception.",
    programs: ["Media Technology"],
    source: "web"
  },
  {
    id: "2002-04-18",
    date: "2002-04-18",
    year: 2002,
    headline: "Media Tech Star Lauren Caltigirone Featured in Memorial-Spring Branch Sun",
    body: "Lauren Caltigirone, one of our Media Tech stars, was featured in an article in the Memorial-Spring Branch Sun covering her adventures through the program and her successful year as a video producer-director-writer-editor.",
    programs: ["Media Technology"],
    source: "web"
  },
  {
    id: "2002-04-17",
    date: "2002-04-17",
    year: 2002,
    headline: "Media Technology Hosts Inaugural Annual Student Film Premiere",
    body: "The Media Technology program held their 1st Annual Student Film Premiere before an enthusiastic crowd of family, community members, and representatives of the film industry. Special thanks to Mike Radler, Patty Nilsson, and all the students for making this a success.",
    programs: ["Media Technology"],
    source: "web"
  },
  {
    id: "2002-04-10",
    date: "2002-04-10",
    year: 2002,
    headline: "Career Day Draws Industry Guests to Campus",
    body: "Career Day was an outstanding success. Thanks to all the presenters, participants, and Ms. Litton for organizing the event. Students were engaged and appreciative — demonstrating once again that only the best students in the district attend classes at The Guthrie Center.",
    programs: [],
    source: "web"
  },
  {
    id: "2002-04-08",
    date: "2002-04-08",
    year: 2002,
    headline: "NJROTC Cadets Place 2nd at Prairie View A&M Final Area Drill Meet",
    body: "NJROTC cadets competed in their final area drill meet of the season at Prairie View A&M University, earning overall 2nd place out of all participating schools. The unarmed drill team placed second in exhibition and first place in basic. Coincidentally, the first-place school — Clements High of Fort Bend ISD — is taught by Master Chief Heuser's brother-in-law. Come visit to see the gigantic trophies in the office!",
    programs: ["NJROTC"],
    source: "web"
  },
  {
    id: "2002-04-08b",
    date: "2002-04-08",
    year: 2002,
    headline: "Harold D. Guthrie Center for Excellence Launches Brand New Website Design",
    body: "The Harold D. Guthrie Center for Excellence is proud to exhibit a brand new website design. We hope you enjoy it!",
    programs: [],
    source: "web"
  },
  {
    id: "2002-04-04",
    date: "2002-04-04",
    year: 2002,
    headline: "Linda Russell Named SBISD Employee of the Month",
    body: "Career and Technology Education Director Linda Russell was surprised when Superintendent Linda Reed, Communications Director Bob Sharp, and others burst into her office to award her SBISD's Employee of the Month. Linda does a tremendous amount of work that directly benefits the students at The Guthrie Center.",
    programs: [],
    source: "web"
  },

  // ── 2002 MARCH ──
  {
    id: "2002-03-20",
    date: "2002-03-20",
    year: 2002,
    headline: "Master Chief Heuser Named to Who's Who Among American Teachers — Third Year Running",
    body: "Congratulations to Mark Heuser, one of our NJROTC instructors, who has been selected for the third consecutive year in Who's Who Among American Teachers. This recognition was initiated by his former students.",
    programs: ["NJROTC"],
    source: "web"
  },
  {
    id: "2002-03-18",
    date: "2002-03-18",
    year: 2002,
    headline: "Multiple Programs Win Big Before Spring Break",
    body: "Computer Animation projects advancing to state SkillsUSA were completed by Albert Capetillo, Keita Kazo, and Graham Musgrove (Best of Show). Skill contest winners were Pierre Vega and Graham Musgrove. Cosmetology: Angelica Sanchez was awarded for leadership in Job Demonstration; Maria DeLeon won Speed and Skills in Haircutting; Michelle Ma placed second in Nails; Thao Diep won first in Nail Techniques and will advance to state.",
    programs: ["Computer Animation", "Cosmetology"],
    source: "web"
  },
  {
    id: "2002-03-04",
    date: "2002-03-04",
    year: 2002,
    headline: "NJROTC Shines at Area Eight Drill Competition at Ole Miss",
    body: "The NJROTC program announces the results of the Area Eight Drill Competition held at Ole' Miss University: Personnel Inspection — First Place; Unarmed Drill Team — Second Place. Individual medal winners: Hector Rodriguez — Second Place, Knockout Drill; Julio Cortez — Third Place, Pushups; Michael Riettini — Fifth Place, Academic Test. Congratulations to the cadets for a great competitive year!",
    programs: ["NJROTC"],
    source: "web"
  },

  // ── 2002 FEBRUARY ──
  {
    id: "2002-02-25a",
    date: "2002-02-25",
    year: 2002,
    headline: "Computer Networking Students Get Real-World Experience at Southwestern Energy",
    body: "A hand-picked group of students converged on Southwestern Energy Production Company to get real-world networking experience as they replaced servers and network racks for the nationwide corporation.",
    programs: ["Computer Networking"],
    source: "web"
  },
  {
    id: "2002-02-25b",
    date: "2002-02-25",
    year: 2002,
    headline: "NJROTC Wins State Medals at Houston Orienteering Club Meet",
    body: "NJROTC students were State Medal Winners at the two-day Orienteering Meet hosted by the Houston Orienteering Club at Lake Stubblefield, with over 200 people competing. Results: Amber Reese & Hector Rodriguez — First Place; Christina White — Second Place; Milton Gonzales — Third Place; Jason Domingo & Rosie Olmedo — Fourth Place.",
    programs: ["NJROTC"],
    source: "web"
  },
  {
    id: "2002-02-18a",
    date: "2002-02-18",
    year: 2002,
    headline: "Cosmetology Students Win 6 of 18 Awards at Fantastic Sam's Competition",
    body: "Fantastic Sam's held a competition with over 400 entries. Students from The Guthrie Center won six of the 18 total awards, earning $750. Congratulations to Juana Castillo, Thao Diep, Sanjuana Flores, Tiffany Foley, Emily Rodriguez, and Angelica Sanchez.",
    programs: ["Cosmetology"],
    source: "web"
  },
  {
    id: "2002-02-18b",
    date: "2002-02-18",
    year: 2002,
    headline: "NJROTC Finishes Strong at Tomball Invitational — Headed to Regionals",
    body: "The Navy team competed at Tomball High School, finishing second in the inspection phase and third overall in the drill meets, with a victory in female tug-of-war. Their next stop is regionals in Mississippi, and if they sweep, they advance to Nationals in Florida.",
    programs: ["NJROTC"],
    source: "web"
  },
  {
    id: "2002-02-11",
    date: "2002-02-11",
    year: 2002,
    headline: "Spring Branch FFA Show & Sale and NJROTC Military Ball",
    body: "The Spring Branch FFA Show & Sale was held with strong community support for this outstanding scholarship program. The annual NJROTC Military Ball ceremony and dance was held February 9th at the Crown Plaza Brookhollow. Cadets and guests were treated to a motivating speech by Col. Charles Reeves, USAF ret.",
    programs: ["FFA", "NJROTC"],
    source: "web"
  },
  {
    id: "2002-02-03",
    date: "2002-02-03",
    year: 2002,
    headline: "Media Tech and Animation Students Win at Spindletop Film Festival",
    body: "Media Tech and Animation students were winners on February 2nd at the annual Spindletop Film Festival, sponsored by Lamar University in Beaumont. Awards were presented to multiple students from The Guthrie Center.",
    programs: ["Media Technology", "Computer Animation"],
    source: "web"
  }

  // ── ADD MORE YEARS BELOW ──
  // Copy the pattern above for each new PDF or Twitter export you process.
  // For Twitter entries, use: source: "twitter"

];
