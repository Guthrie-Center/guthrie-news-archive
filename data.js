// Guthrie CTE Center News Archive — data.js
// 784 posts from WordPress database (2003–2022) + 29 from PDF archives (2001–2002)
// imageUrl points to https://guthrie-center.github.io/guthrie-media/uploads/

const NEWS_DATA = [

  // ── 2001–2002 from PDF archive ──

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

  // ── 2003–2022 from WordPress database ──

  {
    id: '2003-09-03-4265',
    date: '2003-09-03',
    year: 2003,
    headline: 'Guthrie Students\' Featured',
    body: '2003-09-03 20:43:43\', \'Hotel Management students Jennifer Espino, Winnie Lin , and Damon Jones from the Omni Houston-Westside were featured in the recent Hospitality Educators Association of Texas newsletter for their participation in the American Express/Academy of Travel and Tourism Internship Program.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2003-09-09-4263',
    date: '2003-09-09',
    year: 2003,
    headline: 'Apple Seminar',
    body: '2003-09-09 20:40:37\', \'We are pleased to host an Apple Education Seminar on Professional DV Editing & DVD Authoring. Attendees will refine their skills in Final Cut Pro 4.0 and DVD Studio Pro 2.0.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2003-09-10-4259',
    date: '2003-09-10',
    year: 2003,
    headline: 'High Quality',
    body: '2003-09-10 20:35:40\', \'If you were ever in doubt of the quality of programs offered through our school and the dramatic change that comes about as our students progress throughout the year, check out the metamorphis of our Hotel Management program students in the photos below!\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2003-09-11-4254',
    date: '2003-09-11',
    year: 2003,
    headline: 'Always Remember',
    body: '2003-09-11 20:20:44\', \'Today as we remember the sacrifice and heroism of so many Americans on that fateful day two years ago, we must never forget the cowardly actions of the evil terrorists. During the ensuing years, the resolve of the American spirit for freedom is stronger than ever. Thanks to our NJROTC Color Guard and Cadets for the flag ceremony this morning.\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2003-09-19-4252',
    date: '2003-09-19',
    year: 2003,
    headline: 'Pep Rally Time',
    body: '2003-09-19 20:18:16\', \'While our students were back at their home schools attending pep rallies for their teams, we had a bit of a staff development/pep rally of our own.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-01-07-4068',
    date: '2004-01-07',
    year: 2004,
    headline: 'New Semester Arrives',
    body: '2004-01-07 18:16:34\', \'The new semester brings new opportunities for classes at The Guthrie Center. All of our Ag Science classes, Digital Electronics, Chef Training, Intro courses, Computer A+/N+ and Internship programs have started up again and many have openings. Call or come by for information, or contact your counselor at school.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-08-12-4249',
    date: '2004-08-12',
    year: 2004,
    headline: 'We\'re Ready!',
    body: '2004-08-12 20:18:20\', \'We are gearing up and ready for our students to begin or continue their quest for the ultimate career at The Guthrie Center. The first day for classes on our campus is Monday. We look forward to seeing you here.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-08-15-4247',
    date: '2004-08-15',
    year: 2004,
    headline: 'August 15th',
    body: '2004-08-15 20:17:22\', \' WELCOME BACK!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-08-26-4243',
    date: '2004-08-26',
    year: 2004,
    headline: 'Thank You Everyone!',
    body: '2004-08-26 20:16:05\', \'As of today, over 140 of our students will be earning both high school and college credit with Houston Community College as part of our dual- credit agreement. These students are actually enrolled in both high school AND college, have a great start to their college career and will have less expenses once they graduate. It required a lot of teamwork from our teachers, counselor Beverly Litton and the registrars at the home schools to make it happen. Thanks to everyone that worked on this and congratulations collegians!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-09-02-4239',
    date: '2004-09-02',
    year: 2004,
    headline: 'September 2nd',
    body: '2004-09-02 20:13:53\', \'The 2004-2005 school year is in full swing for Spring Branch FFA as about 90 parents and students listen to presentations on the busy season tonight in the ITV Theater. This is a great opportunity for students to raise projects, earn scholarships and demonstrate leadership. We appreciate all of the hard work that is donated by our devoted and talented FFA Alumni Association members and chapter advisors.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-09-18-4235',
    date: '2004-09-18',
    year: 2004,
    headline: 'Challenger 7 Orienteering Meet',
    body: '2004-09-18 20:08:33\', \'Saturday, 44 of our NJROTC cadets participated in the annual Challenger 7 Orienteering Meet at Challenger Park in Webster. They got a little hot and tired, but they all completed the course!\\n\\nThe results of the day are listed below:\\n\\nSilver Medal: Cesar Santos, Nicholas Clark, Michael Mallon \\n\\nBronze medal: Diana Gonzalez, Sean McGee, Drew Mayo \\n\\n4th Place finishers: Esmeralda Mendoza, Richard Bordelon, Christian Vetter, Jose Gomez, Hugo Rodriguez, Aaron Runge \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-09-25-4233',
    date: '2004-09-25',
    year: 2004,
    headline: 'Congratulations to NJROTC',
    body: '2004-09-25 20:05:23\', \'Congratulations to NJROTC Cadets Nayeli Abarca, Jonathan Layton, Aaron Runge, Victor Santamaria and Eric Walker for taking home a Second Place trophy at the 3rd Annual Houston Area Consortium Orienteering Meet at Prairie View A&M.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-09-29-4229',
    date: '2004-09-29',
    year: 2004,
    headline: 'New Calf for the Ag Science Center',
    body: '2004-09-29 20:02:51\', \'Our newest calf at the Ag Science Center on Brittmoore rests in the shade on a warm, sunny day. This is the second of even more births to occur with the new FFA Heifer program.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-02-4227',
    date: '2004-10-02',
    year: 2004,
    headline: 'Hill Country Challenge Winner',
    body: '2004-10-02 20:01:17\', \'Congratulations to NJROTC Cadet Alex Moncada for finishing in 2nd place in the Physical Fitness Category this weekend in the Hill Country Challenge. Alex won it by completing 110 pushups in two minutes! Way to go Alex, now drop and give us 26 more!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-05-4225',
    date: '2004-10-05',
    year: 2004,
    headline: 'Welcome Laurie Ledbetter',
    body: '2004-10-05 20:00:13\', \'We are thrilled to announce the newest addition to our dynamic teaching team at The Guthrie Center. Laurie Ledbetter will begin her Spring Branch career teaching Agricultural Science tomorrow. Ms. Ledbetter, a native Texan, received her teaching degrees from Texas State University and most recently taught Agriculture, Horticulture and Landscape Design in North Carolina. We welcome Laurie back to Texas and to the Spring Branch family!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-06-4223',
    date: '2004-10-06',
    year: 2004,
    headline: 'Public Hearing',
    body: '2004-10-06 19:59:23\', \'There will be a public hearing regarding the 2005-2006 school calendar at the regularly scheduled SBISD Board of Trustees Meeting, October 25, 2004, 7:00 p.m. in the SBISD Board Room. Everyone\\\'s input is welcome.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-12-4219',
    date: '2004-10-12',
    year: 2004,
    headline: 'October 12 ',
    body: '2004-10-12 19:57:11\', \'If you had millions of dollars, what would you choose? Would you choose an efficient affluent highrise condominium or an expansive prosperous single family dwelling in a suburban neighborhood? The Architectural students had a chance to answer that question by means of firsthand observations. Today the students visited two projects under construction. The first venture was Montebello Houston and the second development was a Riverwood Building Co. construction site in the village of Bunker Hill.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-25-4215',
    date: '2004-10-25',
    year: 2004,
    headline: 'Commitment to the Community',
    body: '2004-10-25 19:54:23\', \'Community service is an integral part of the Spring Branch NJROTC philosophy. While benefiting our end of the year report, we are also committing ourselves to the responsibility of the improvement of our neighborhoods and schools. NJROTC is very active when it comes to community outreach into our society, whether it be teacher, parent, or fellow classmate, everyone is appreciative for what we do for them. Whether picking up trash at a local park or collecting food for the , people notice. In fact, Patricia Benton, counselor at Spring Woods High School, recently remarked about our participation serving as ambassadors for the college representatives at college night on 13 October 2004. She expressed gratitude for our "respectful, well-mannered, and hard working bunch" of cadets, and went on to say that they, "represented NJROTC admirably." From volunteering at Astroworld to supporting a fashion show, whether it be collecting cans or picking up trash, the unit, based at The Guthrie Center, is always at the ready to support it\\\'s family,friends, and community.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-10-29-4211',
    date: '2004-10-29',
    year: 2004,
    headline: 'Seasonal Display',
    body: '2004-10-29 19:52:44\', \'The signs of the season were on display today at The Guthrie Center thanks to our students in Cosmetology, Culinary Arts and Chef Training . There was even an almost exact replica of the principal (lower left).\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-01-4207',
    date: '2004-11-01',
    year: 2004,
    headline: 'Volunteering Pays Off',
    body: '2004-11-01 20:51:03\', \' \\nNJROTC Cadet Command Master Chief Mariam Ahmed has been named recepient of the Making A Difference Award for the month of November. This character education award celebrates students who have made a difference in their school or community through volunteerism. Mariam spearheaded the unit\\\'s efforts to assist Katrina and Rita victims via a food and clothing drive as well as raising money for the Houston Food Bank. Mariam will be honored at a luncheon today with her parents and the real Master Chief. She is pictured above with Cadet Commanding Officer Nayeli Abarca .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-02-4205',
    date: '2004-11-02',
    year: 2004,
    headline: 'Community Tuesday',
    body: '2004-11-02 20:50:08\', \'Last evening we held our first Community Tuesday Night where each of our programs conducted mini interactive lessons similar to what our students learn. We had a good turnout and look forward to seeing everyone again at our next one on January 17, 2006.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-03-4201',
    date: '2004-11-03',
    year: 2004,
    headline: 'MoFAH Film Showcase',
    body: '2004-11-03 20:48:14\', \'Guthrie Digital Filmmaking alumni Justin Gilley and Nicholas Jayanty will have their film shown at the Museum of Fine Arts on November 11 as part of the Texas Filmmakers Showcase. The former students have their own production company and are on their way to a successful career.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-06-4079',
    date: '2004-11-06',
    year: 2004,
    headline: 'Cadets Help Out at the AHA Annual Walk-A-Thon',
    body: '2004-11-06 18:50:47\', \'On Saturday, thirty Spring Branch NJROTC cadets arrived at Sam Houston Park to help prepare the city for the annual American Heart Association Walk-A-Thon . We were designated with the responsibility of manning the water stations throughout the 5-mile course, and to provide the reception for the over 10,000 walkers that participated in the walk. "The cadets were very motivated and very glad to cheer the runners and walkers on," reported Executive Officer C/Lt. Molano . Overall our cadets did an outstanding job and we are proud to report that we earned over 187 hours of community service. Special thanks go out to The Guthrie Center\\\'s own Darrell Lewis, C/SCPO Lewis\\\' father, for his help as a chaperone.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-08-4076',
    date: '2004-11-08',
    year: 2004,
    headline: 'Great CultureShapers Turn Out',
    body: '2004-11-08 18:31:27\', \'One more time! The Digital Film students at The Guthrie Center have made a big impact at the CultureShapers Fest in Houston. Roberto Contreas, Chelsea Hayden, Amanda Martin, Alizsha Pennington, Lauren Walsh and Joyce Moon are in the Top 10 as Finalists followed by Thomas Karba, Matthew Henry Martin, Eddie Melchor, Brian Johnston, Brian Perimutter, Jeremy Oliver and Chandler Wild all honorable mention in the Top 20. Congratulations to these students and to teachers Patty Nilsson and Mike Radler for their guidance and dedication.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-09-4195',
    date: '2004-11-09',
    year: 2004,
    headline: 'Visit from Our State Rep.',
    body: '2004-11-09 20:45:07\', \'Today we were honored to have a visit from State Representative Dwayne Bohac, Trustee Mike Falic and our Governmental Affairs Director Diane Jackson . Rep. Bohac had a chance to see our talented students in various classes, learn a little about The Guthrie Center and experience how well Career and Technology Education classes use the weighted funding the legislature supplies to keep our programs on the cutting edge.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-11-4193',
    date: '2004-11-11',
    year: 2004,
    headline: '"It\'s A Wrap" Winners',
    body: '2004-11-11 20:42:50\', \'Congratulations to film students PatrickNguyen and Leif Steenson for winning the Public Service Announcement category, Chandler Wild for Drama and Anisa Boukhif for Art/Experimental at Kingwood College\\\'s It\\\'s a Wrap Video Fest. These students along with Honorably Mentioned Alizsha Pennington were honored Saturday at the festival in Kingwood.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-14-4191',
    date: '2004-11-14',
    year: 2004,
    headline: 'Haircut Workshop',
    body: '2004-11-14 20:41:35\', \'Cosmetology students participated in a haircutting workshop sponsored by Great Clips at their center on Westheimer. Trainer Becky Gonzalez from San Antonio conducted the workshop where she demonstrated the long- layer face frame and flattop haircuts. Guided by Great Clips salon managers, our students had a chance to try what they learned. Salon owner Carl Smith spoke to the students about employment in the real world. He pointed out ways to be a good employee and what a successful hairstylist is from an owner’s point of view. Thanks to Great Clips for a great day of learning.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-16-4189',
    date: '2004-11-16',
    year: 2004,
    headline: 'Invited Once Again!',
    body: '2004-11-16 20:37:14\', \'For the third year in a row, The Guthrie Center Digital Filmmaking department has been invited to attend the Sundance Film Festival in January. Only a handful of high schools are selected each year, and we are fortunate to be one of them.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-17-4185',
    date: '2004-11-17',
    year: 2004,
    headline: 'CultureShaper Recognition',
    body: '2004-11-17 20:35:05\', \'Tonight Alizsha Pennington and Chris Zeid attended the Culture Shapers awards banquet and were recognized for being in the Top 10 out of nearly 100 entries in the Film category. You can view their projects, along with Henry Dillard \\\'s film thatreceived Honorable Mention on the CultureShapers website by clicking here. DF teacher Michael Radler was astonished as he was chosen by Cultureshapers as their Teacher of the Year for his dedication, honesty and high expectations. Congratulations Mike, Alizsha, Chris and Henry!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-11-22-4061',
    date: '2004-11-22',
    year: 2004,
    headline: 'Responding to those in Need',
    body: '2004-11-22 21:47:55\', \'When the phone call from Raquel Leal of the Spring Branch Welcome Center requesting help providing a Thanksgiving dinner for three families in need, our NJROTC unit responded immediately. Canned goods and non-perishable dry goods started appearing in boxes within the NJROTC spaces. Three turkeys were donated by the HEB grocery store on North Gessner. Another turkey, for a family close to the unit, was donated by an anonymous donor. All that was needed was the rest of the trimmings. Lt. Colonel Ken Sluis and Master Chief Mark Heuser added whatever was necessary to ensure the meals were complete.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-02-4059',
    date: '2004-12-02',
    year: 2004,
    headline: 'Grant for Bones',
    body: '2004-12-02 21:46:25\', \'Congratulations to our 3D Animation teachers, Sean Bellinger and Brenda Davidson for being awarded a J. Landon Short grant for their project, "Mr. Bones." They will purchase two sets of skeletons for their classrooms so the Animation students can study the bone structure of humans. Is this a science class, you must be thinking? No, but knowledge of anatomy is important to create characters with fluid, natural movements.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-05-4181',
    date: '2004-12-05',
    year: 2004,
    headline: 'Happy Birthday!',
    body: '2004-12-05 20:33:53\', \'We are fortunate to have the best custodial support staff in the district, and today we ar proud to wish one of ours a very Happy Birthday!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-06-4175',
    date: '2004-12-06',
    year: 2004,
    headline: 'Mini-grants Winners',
    body: '2004-12-06 20:30:38\', \'The winners of the J. Landon Short Mini-Grants were announced today, and teachers Betty Franklin, Linda Nicodemus and Sonia Greiner were awarded funding for their program projects. The grantswill give students in Cosmetology and Architecture extra resources to excel.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Dec-6.png',
    source: 'web'
  },
  {
    id: '2004-12-08-4055',
    date: '2004-12-08',
    year: 2004,
    headline: 'NJROTC Annual Inspection',
    body: '2004-12-08 21:44:16\', \'The Annual Inspection of our NJROTC Cadets concluded today under the watchful eye of Brigadier General Victor Thompson , USAF Retired. About 75 parents, family and friends watchted the proceedings along with Superintendent Duncan Klussman and Chief Information Officer Luke Fox . General Thompson told the cadets how proud he is of their efforts and accomplishments and said that if there is a more superior unit in Area 10 to this one, he would have to see it to believe it.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-08-4170',
    date: '2004-12-08',
    year: 2004,
    headline: 'Promoted to Master Chief',
    body: '2004-12-08 20:27:43\', \'NJROTC Cadet Miriam Ahmed received her ribbons as she earned promotion to the rank of Cadet Command Master Chief for our outstanding NJROTC unit. Congratulations Miriam and thank you for your hard work and leadership.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-09-4071',
    date: '2004-12-09',
    year: 2004,
    headline: 'Holiday Dinner',
    body: '2004-12-09 18:25:17\', \'Chef Training students Joanna Llanas, Kyoung Lee, Pieter Baay, Michael Melton, Sabrina Navarro and Zulaima Aguilar worked together to prepare their end- of-course Holiday Dinner. Guests were treated to a Mixed Green Salad, Stuffed Chicken Breast with Roasted Potatoes and Green Bean Bundles followed by a Pecan Brownie with Caramel and Fresh Whipped Cream. Thanks to instructor Wendy Bousley and Art Institute of Houston partners, Chef Holderfield and Intern Lisa Ferreria .\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-09-4164',
    date: '2004-12-09',
    year: 2004,
    headline: 'Expect the Best',
    body: '2004-12-09 20:25:20\', \'Earlier this year, Ag Science teacher Sheyenne Krysher was chosen to represent the State of Texas at the National Association of Agricultural Educators convention held December 6-9 in Kansas City. Sheyenne had a chance to experience many things including freshly fallen snow and meeting fellow educators from around the country. However her greatest memory came when she received the National Teacher\\\'s Turn The Key award. Way to go Sheyenne!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2004-12-12-4161',
    date: '2004-12-12',
    year: 2004,
    headline: 'Opportunity of a Lifetime',
    body: '2004-12-12 20:23:26\', \'Cadet Officers Aaron Runge and Nick Clark both received an opportunity of a lifetime when they received nominations to attend either the US Naval Academy or the US Air Force Academy for their post-secondary education. This is indeed an honor for these young men, the NJROTC program, our school and Westchester Academy, their home campus. Outstanding!\\n\\nTonight at the Board of Trustees meeting, our gracious SBISD leaders approved the construction of permanent classrooms at our Agricultural Science Center. We appreciate this endorsement for our awesome program.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-03-4150',
    date: '2005-01-03',
    year: 2005,
    headline: 'Praise for Matt Moore',
    body: '2005-01-03 20:13:18\', \'One of the things that make us smile is getting positive feedback about one of our students. Diversified Internships student Matt Moore works with Hodes Group, a high profile career placement firm. Excerpts from a BHG Creative Director correspondence to us include these comments: "...with his positive attitude and sharp abilities, he has proven to be of great assistance....from operations that require a fast turnaround to various other detailed projects, Matt follows directions well and is willing to jump in and lend a hand...In looking towards the future of bigger projects and more responsibility, Matt is learning new graphic software that is a part of our creative world. Way to go Matt! (seen in photo sitting next to his Mac station at BHG)\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-10-4146',
    date: '2005-01-10',
    year: 2005,
    headline: 'Listen to Our Podcast',
    body: '2005-01-10 20:11:49\', \' Digital Filmmaking has joined the Podcast Revolution . You can now view and download select student videos at the iTunes Music Store Podcast section. Just do a search for Studio 303 . Once you find it, go ahead and subscribe so you will be notified when we add more videos. They can be viewed on your computer or video iPod.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-11-4144',
    date: '2005-01-11',
    year: 2005,
    headline: 'Edible Art',
    body: '2005-01-11 20:10:22\', \'Our Intro to Culinary Arts students are off to a great start this semester. Today was their first day in the food lab, and they created delicious works of edible art.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-13-4050',
    date: '2005-01-13',
    year: 2005,
    headline: 'Amigas Latinas for College',
    body: '2005-01-13 21:35:50\', \' Amigas Latinas for College is a group of students that meet regularly at The Guthrie Center with Dr. Virginia Baxt to learn about and prepare for their education after high school. Last night the organization had its annual Mentor/Student Get Together to thank the mentors and benefactors and allow them, the students and their families to network and get to know each other. It was an outstanding and motivating evening at El Tiempo Cantina restaurant. For additional information on the group, visit their website at http://amigaslatinas4college.org\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-15-4142',
    date: '2005-01-15',
    year: 2005,
    headline: 'Welcome Jennifer Cardenas',
    body: '2005-01-15 20:07:02\', \'We are pleased to Welcome Jennifer Cardenas to The Guthrie Center as our new Culinary Arts Instructor. Ms. Cardenas is a lifelong Spring Branch resident, a graduate of Spring Woods High School and has been teaching culinary for a few years (we won\\\'t say how many) at the middle and high school level. Welcome Jennifer, you have excellent students to work with this year!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-24-4138',
    date: '2005-01-24',
    year: 2005,
    headline: 'Headed Out to Sundance',
    body: '2005-01-24 20:03:01\', \'Early Wednesday morning, our Filmmaking teachers and some of their students will leave for Park City, Utah and the Sundance Film Festival. Once again, The Guthrie Center is one of only a handful of high schools invited by the festival to participate in the many workshops and screenings. This year, our ambassadors will be producing a daily podcast of their experiences. It will be available for download at the iTunes Music store, and we will place a link to it on this page.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-25-4133',
    date: '2005-01-25',
    year: 2005,
    headline: 'Tour of the Toyota Center',
    body: '2005-01-25 19:59:14\', \'Students from Sonia Greiner\\\'s Architectural CAD classes toured the Toyota Center and many of the back areas not ordinarily seen by spectators, including the Lexus Lounge, their premiere suite. They enjoyed the plush environment alongwith their professional chaperones, Linda Allen of Paper Vessel and Diane Dwyer of Diane Dwyer Interior Design. The students saw Yao Ming and even held one of his sneakers (click on it to view some photos ). Their trip continued to the architect of record for the Toyota Center, Morris Architects. Chris Royster , this year\\\'s chairman of the Michael G. Meyers competition committee, guided the group of 50 students through their new office space. Each student received a Morris clock as a memento of their visit.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-27-4128',
    date: '2005-01-27',
    year: 2005,
    headline: 'Welcome Sarah Jordan',
    body: '2005-01-27 19:49:14\', \'Our Baking and Catering class welcomes Sarah Jordan as guest instructor as she teaches the fine art of cake decorating. They learned that along with creativity and technique, they also need a steady hand. Next week our students will be putting this in practice by decorating their own cakes.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-28-4126',
    date: '2005-01-28',
    year: 2005,
    headline: 'Orienteering Meet in Corpus Christi',
    body: '2005-01-28 19:47:21\', \'Our NJROTC cadets went in different directions today as Master Chief Heuser took one bus load to Corpus Christi for a regional drill meet while Lt. Col. Sluis and the others headed to Jones State Park in Conroe for an orienteering meet. Jones results included a First Place showing for George Bracero and Third Place awards to Jorge Hurtado and Daigoro Tzun in their respective age groups. Congratulations to all of our cadet winners and participants.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-29-4122',
    date: '2005-01-29',
    year: 2005,
    headline: 'New Year for Architecture Students',
    body: '2005-01-29 19:44:28\', \'Sixteen Architecture students traveled to The Michael G. Meyers High School Design Competition workshop to kick off their 2005 year at the University of Houston College of Architecture. The new program was unveiled as students were treated with bagels and juice along with a design workshop. Members of the American Institute of Architects members volunteered their time to interact with students from the Houston area.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-01-30-4047',
    date: '2005-01-30',
    year: 2005,
    headline: 'More Winners From Guthrie!',
    body: '2005-01-30 21:23:58\', \'This weekend eight BPA students competed and won a first place in C++ ( Edgar Bering - individual) and E- commerce ( Davender Mohan, Chiminh Pascal, Dan Wells - group) as well as a second place in the PC service ( Aaron Motsch - individual) and a third in Network Design ( Tony Sanchez, Matthew Kosmoski, James Bri ckel l - Group). First and second place students are eligible to attend state in early March. This was the first time Guthrie Center Networking students entered a BPA contest. Thanks to Steve Whitt and Gary Croft for sponsoring these student winners!\\n\\nWhile this competion was heating up, our Architectural CAD students were touring the program at the University of Houston and receiving tips on the annual Michael G. Myers Competition that takes place in April. This contest, sponsored by the American Institute of Architects, challenges and stretches the student\\\'s imagination and abilities in the field of Architecture. Teacher Sonia Greiner arranged for Kiel Von Feldt, Forest Smith, Gabby Monzon, Michael Minkov, Melika Mirzakhani, Ri chard Arce, Nancy Bel montes, Andres Al faro, Mario Magana and Joseph Guevara to attend. Many of our students have worked with their teacher to develop a club and have named it the Organization of Student Architects . They have designed a logo and had t-shirts made which they wore to the event. Not only was UH and the AIA people interested in this founding charter organization, but so were neighboring districts who want to use it as a model to form their own chapters of OSA.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-01-4043',
    date: '2005-02-01',
    year: 2005,
    headline: 'Meet and Greets at Sundance',
    body: '2005-02-01 21:20:31\', \' Digital Filmmaking students Mike Salem, Tom Karba, Chris Zeid, Jeremy Oliver, Ashley Walker, Emmett Kerr-Perkinson, Brian Perlmutter and McKenzie Guillams along with teachers Patty Nilsson and Mike Radler returned from Park City, Utah where they attended the Sundance Film Festival. The Guthrie Center was one of only a handful of high s chools in the nation that was invited. Many hours were spent meeting directors and producers, listening to successful filmmakers in the business and watching the best and sometimes most innovative independent films out there. Below some of the attendees pose with writer Neil Gaiman from the movie MirrorMask.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-04-4039',
    date: '2005-02-04',
    year: 2005,
    headline: 'SkillsUSA!',
    body: '2005-02-04 21:09:34\', \' 3D Animation students competed in the SkillsUSA competition at CyFair College and won three of the top four spots. Congratulations to these student winners - First Place: Brandon Breen and Matt Moore; Third Place: Richard Beeman and Selene Oviedo; Fourth Place: Charlie Guevara and Cameron Lindig . Brandon and Matt will represent Spring Branch at the state competition later this semester.\\n \\nCongratulations to our Cosmetology students as they competed in SkillsUSA events. Student project 1st place winners include: Christian Caniglia NHS, Araceli Gomez NHS, Margarit Gonzales NHS, Mindy Justo NHS, Quynh Nguyen NHS, Sandy Perez NHS, Yareli Rodriguez NHS, Heysell Romero NHS, Venesa Salar NHS, Esmeralda Flores MHS Nathalie Drew SHS, Julia Filipiak SHS, Ashley Harrison SHS, Lupita Moreno SHS, Dalicia Thomas SHS. Student Leadership winners include Nathalie Drew in 3rd place for "Job Skills Demonstration. Intro to Cosmetology students that won 1st place include Lizbeth Alvarez SHS, Christina Castillo SHS, Blanca Garcia SHS, Christina Wainwright SHS, Chelsea Wilhelm SHS, Amy Olvera NHS, Marianna Rivera NHS, Jessica Soto NHS, Daisy Cepeda SWHS, Laura Gonzalez SWHS, Vivian Grajeda SWHS, Karen Ibarra SWHS, Eva Montes SWHS, Liz Ana Rodriguez SWHS, Erika Mejia WAIS, Sophia Ochoa WAIS',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-04-4117',
    date: '2005-02-04',
    year: 2005,
    headline: 'Drill Team Competition',
    body: '2005-02-04 19:30:44\', \' NJRTOC Drill Team competed against scores of other JROTC units at Tomball today. Whilewe do not yet have the official results, you can see a quick view of some of the teams by clicking on the photo.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-05-4035',
    date: '2005-02-05',
    year: 2005,
    headline: 'Drill Meet',
    body: '2005-02-05 21:07:53\', \'Our NJROTC cadets participated in the Tomball Area Drill Meet where they competed in the areas of Academics, Physical Fitness, Color Guard, Armed and Unarmed Drill Teams and Inspection. We are still awating the final scores, but you can see a little of what they went through in the photos below.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-07-4029',
    date: '2005-02-07',
    year: 2005,
    headline: 'DF Student Selected for SXSW',
    body: '2005-02-07 21:04:40\', \' \\nDigital Filmmaking first-year film student Anisa Boukliff has had the honor of having her short film "Running on Empty" invited to screen in the high school competition program at the prestigious South-By-Southwest Film Festival in Austin March 11-19. Her film was selected from thousands of works submitted from around the globe. Congratulations to Anisa and her fine work!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-07-4110',
    date: '2005-02-07',
    year: 2005,
    headline: 'Nayeli Abarca is Honored for "Making a Difference"',
    body: '2005-02-07 19:25:54\', \' Nayeli Abarca , NJROTC Cadet Commanding Officer was honored today by the Institute of Real Estate Management and received their "Making a Difference" award. Nayeli was recognized for her achievements in leadership, community service & academic achievements. To go along with these kind words she also received a check and savings bond from this fine group of real estate managers in Houston. She is pictured here with IREM President Phillip Schneideau and Lt. Col. Sluis.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-09-4106',
    date: '2005-02-09',
    year: 2005,
    headline: 'Children\'s Barnyard',
    body: '2005-02-09 19:23:37\', \'The Children\\\'s Barnyard, part of our annual FFA Show and Sale , started today and will continue on Friday at 9AM. Elementary students from all over the district came out to see the student\\\'s projects and the visiting ponies. The sale and auction will be held on Saturday. The public is welcome, so y\\\'all come!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-11-4021',
    date: '2005-02-11',
    year: 2005,
    headline: 'Winner of the Gilliam Award',
    body: '2005-02-11 21:00:44\', \'Congratulations to Cadet Master Chief Tyler Lewis of our NJROTC Unit. Tyler is this year\\\'s prestigious Gilliam Award winner for Area 10. His award consists of a laminated plaque containing a citation signed by the Chief of Naval Education and Training, and a biographical statement of the award\\\'s namesake, along with a cash award. Tyler was chosen over numerous applicants based on his academic record and essay. Tyler and his dad, Darrell Lewis (Criminal Justice Instructor) along with Lt. Col. Sluis and Master Chief Heuser were thrilled he received this honor.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-11-4099',
    date: '2005-02-11',
    year: 2005,
    headline: 'Show and Sale',
    body: '2005-02-11 19:18:34\', \'Our Show and Sale ended with a record number of buyers spending a record amount on thestudent\\\'s projects, including $9,500 for Chris Herring\\\'s Grand Champion Steer. A huge thanks goes out to our FFA Alumni, our teachers Sheyenne Krysher and Laurie Ledbetter , our FFA and Ag Science students and parents for their support and direction of this huge event. To the buyers who spent not only their time and money towards this great scholarship program, you have our heartfelt thanks. You can click on the quilt for a slideshow of the event.\\n \\nBefore our record setting FFA Show and Sale began, we experienced a huge plumbing problem threatened to put a cloud on the day. Thanks to our crack SBISD maintenance staff (Alberto and Louis) who arrived at 6 AM, everything began flowing smoothly about 10 AM.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-13-4095',
    date: '2005-02-13',
    year: 2005,
    headline: 'Updating the Ag Science Complex',
    body: '2005-02-13 19:16:57\', \'Construction on new, permanent classrooms began today at the Agricultural Science complex on Brittmoore. We thank the support of the district to make this improvement for our future students.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-18-4019',
    date: '2005-02-18',
    year: 2005,
    headline: 'Anything She Can\'t Do?',
    body: '2005-02-18 20:58:51\', \'Our Digital Film instructor Patty Nilsson was chosen as Teacher of the Year at The Guthrie Center. The faculty and staff from our school elected Ms. Nilsson for this prestigious recognition. She will join with the other SBISD secondary school winners where a panel will select SBISD\\\'s Teacher of the Year later this semester. Congratulations Patty!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-18-4088',
    date: '2005-02-18',
    year: 2005,
    headline: 'Donation of a Victorian House',
    body: '2005-02-18 19:01:47\', \'Tonight our Architectural CAD students are putting a new twist on Community Service. Thirteen students along with Sonia and Adam Greiner are constructing a Victorian Doll House that they will donate to the Ronald McDonald House in Houston. RMH plans to make it a part of their Oscar Night Auction, where some lucky bidder will get a four foot doll house complete with lights, tile floors, wallpaper and any other finishing touches the students decide upon. Thanks to this fine group of individuals for donating their time and talent to help others in need.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-20-4084',
    date: '2005-02-20',
    year: 2005,
    headline: 'Teacher of the Year',
    body: '2005-02-20 18:59:58\', \'We are proud to announce that Cosmetology teacher Betty Franklin has been elected as Teacher of the Year for The Guthrie Center. Betty is in her sixth year as instructor with Spring Branch and takes up from reigning Teacher of the Year Patty Nilsson. Congratulations Betty!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-23-4015',
    date: '2005-02-23',
    year: 2005,
    headline: 'New Opportunities for Nilsson',
    body: '2005-02-23 20:56:35\', \' Women in TV & Film , a non- profit, international organization has been involved with the Digital Film classes at The Guthrie Center for some time serving as part of our advisory committee and providing mentors. DF Teacher Patty Nilsson has been invited to sit on their board of directors. Patty is hoping this additional role will provide greater opportunities for students in the TV and Film industry in Houston.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-25-4011',
    date: '2005-02-25',
    year: 2005,
    headline: 'Support our Ag Science Students',
    body: '2005-02-25 20:53:31\', \'The FFA Show and Sale is underway at the Ag Science Complex on Brittmoore. The students have been showing thier projects the past two days, which will culminate with the Sale on Saturday at 1:00. Come on out and show your support and check out the incredible silent auction items.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-26-4007',
    date: '2005-02-26',
    year: 2005,
    headline: 'Annual FFA Sale 2005',
    body: '2005-02-26 20:47:57\', \'A large crowd of buyers and supporters including our Superintendent and many of SBISD Board of Trustees braved the rain and cool weather to attend the Annual FFA Sale today. Bidders competed at the auction for Corey Harget\\\'s Grand Champion Steer, Paige Pesl\\\'s Grand Champion Hog, Travis Evan\\\'s Grand Champion Goat, Andrew Archer\\\'s Grand Champion Lamb, Christopher Powell\\\'s Grand Champion Meat Rabbits, Scott Pesl\\\'s Grand Champion Broilers, Lauren Deibert\\\'s Grand Champion Horticulture Project , all the Reserve Grand Champion Winners and other projects raised by these fine FFA students. A big thank you to the students, the FFA Alumni Association and Sponsors Sheyenne Krysher and Laurie Ledbetter for an outstanding event.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-02-28-4001',
    date: '2005-02-28',
    year: 2005,
    headline: 'Visitors From Greece',
    body: '2005-02-28 20:44:50\', \'Principal Mrs. Pelagia Voutsa and students Ioannis Stroulis, Pantelis Hantzaras, Dimitris Valasiadis, Sophia Karga and Ioanna Draganaki from the American Farm School in Thessaloniki, Greece along with sponsor Pete Peropoulos toured the campus and the Ag Science Center today. The mostly rural students from different sections of Greece live at their school to learn specialized agricultural techniques along with their academic curriculum. If you want to learn a bit about their school, they can be found on the web at http://www.afs.edu.gr Thanks to Sophia Petrou of SBISD for arranging this great exchange of educational and cultural ideas.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-01-3998',
    date: '2005-03-01',
    year: 2005,
    headline: 'Spring Showcase',
    body: '2005-03-01 20:41:07\', \'Today The Guthrie Center welcomed hundreds of past, present and future students, their families and friends and guests from all over the area to our Spring Showcase and Portfolio Show. My sincere thanks to everyone that came out to see the wonderful work our students produce, and especially to our awesome Guthrie staff and students who worked so hard to make this day a success.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-14-3996',
    date: '2005-03-14',
    year: 2005,
    headline: 'Orienteering Winners',
    body: '2005-03-14 20:34:33\', \'While last week was relaxing and a break for most of us, we had a number of students involved in competitions that walked away as winners. The NJROTC Orienteering Team competed at Jones State Park on March 5th as Nayeli Abarca finished 1st and Nicholas Clark and Jennifer Castandon wound up in 2nd, closely followed by Jorge Hurtado and Jose Balbuena . Meanwhile, Networking and e-commerce students competed at the State BPA events. E-commerce Team Davender Mohan, Chiminh Pascal and Dan Wells took 1st in the state and qualify for Nationals. Network Design Team Tony Sanchez, Matthew Kosmoski and James Brickell placed 3rd and are an alternate team for Nationals. Congratulations to all of these students for their success.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-16-3992',
    date: '2005-03-16',
    year: 2005,
    headline: 'Good Eats',
    body: '2005-03-16 20:32:17\', \' Landry\\\'s Restaurants, Inc . played host today to our Hotel Management students as they toured their corporate headquarters on the West Loop and enjoyed a demonstration of King Crab cracking (and eating) at the original Joe\\\'s Crab Shack . Thanks to Joan Barker from Landry\\\'s for giving our students a good taste of a restaurant empire.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-18-3985',
    date: '2005-03-18',
    year: 2005,
    headline: 'Giving Back to the Community',
    body: '2005-03-18 20:26:52\', \' Houston Junior Forum\\\'s President, Michelle Sorenson , a Partner, works directly with our Diversified Interns learning and researching grants on their "Grant Writing Committee" to benefit an underprivileged inner-city preschool. These students have already accumulated 77hours and counting. Interns are not only hard working students but they care about their community. \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-21-3980',
    date: '2005-03-21',
    year: 2005,
    headline: 'Always Willing to Help',
    body: '2005-03-21 20:21:35\', \'This past weekend was busy for many of our students from The Guthrie Center. - NJROTC held a car wash here for charity and collected nearly $600. At $3 and $5 each, Col. Sluis and the cadets cleaned a lot of vehicles.\\n \\n - Our Architectural CAD teacher Sonia Greiner and student members of the OSA chapter spent Saturday at Habitat for Humanity building walls and constructing houses. \\n\\n- Tina Miller\\\'s Diversified Internship students attended an overnihgt leadership retreat sponsored by their Explorers Post at Camp Strait in Conroe. - A handful of FFA students and Sheyenne Krysher spent a lot of time at the Houston Livestock Show and Rodeo showing their projects raised this year and competing in calf scrambles and other events . \\n\\n Thank you to all of these students and their teachers for giving up their time to compete or help others in need.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-23-3975',
    date: '2005-03-23',
    year: 2005,
    headline: 'Hair and Nails Annual Competition',
    body: '2005-03-23 20:16:24\', \'Our Cosmetology Department held it\\\'s annual Hair and Nail Competition this evening. Students in both first and second year Cosmetology and Manicuring vied against each other to claim top spot in various categories, while being cheered on by family and friends. The results of the night: First Year Students top spots in the Sales category include Mindy Juston, Lupita Moreno and Danielle Mahone ; First Year Styling winners were Araceli Gomez, Bri Hart and Julia Filipiak ; Nail Competition winners included Julie Castillo , Kelly Chiles and Myriam Diaz ; Second Year Student Sales winners were Cristina Rangel, J\\\'Anna Troxell and Maria Chinchilla; and rounding out the competition in Second Year Hairstyling were Jazmin Castillo, Teresa Ramirez and Maria Roman . Thanks to our guest judges from area salons for volunteering their time. Money raised from thisfundraiser benefits students scholarships.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-28-3973',
    date: '2005-03-28',
    year: 2005,
    headline: 'Senior students ',
    body: '2005-03-28 20:14:52\', \' T his is the time of year when you should be spending time planning for life after high school. Since the majority of you are heading off to some post-secondary education, you may be in need of some scholarship money. The Career and Technology department will give out at least five scholarships to Spring Branch ISD seniors . If you want to check it out and apply, visit this site for more information: http://cate.springbranchisd.com/scholarship.htm',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-29-3968',
    date: '2005-03-29',
    year: 2005,
    headline: 'Tour of Academy',
    body: '2005-03-29 20:10:35\', \'The Fundamentals of e-Commerce class went on a tour of Academy Sports & Outdoors\\\' corporate headquarters and distribution center in Katy. They observed how Academy\\\'s Distribution Center processes and delivers goods to their more than eighty stores in eight states, along with the Internet Marketing Department, and talked to some of ecommerce employees. Our thanks to Darcus Williamson and Kal Patel from Academy for giving our students an opportunity to see behind the scenes of a big business in the retail industry.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-03-31-3959',
    date: '2005-03-31',
    year: 2005,
    headline: 'Congratulations to all of our Hard Workers',
    body: '2005-03-31 19:54:44\', \'Chef Training student Corey Harget competed in the Houston Area Hospitality & Culinary competition at the Campbell Center in Aldine. Cory took 2nd place in the Garde Manger for fruit carving event over students from 30 schools. He can be seen posing next to his design, an aquarium theme with fish and flowers cut from watermelon, cantaloupe, honeydew, lemons and oranges. Cory is no stranger to competition, as he recently showed his Grand Champion Steer at the FFA Show and Sale earlier this month. Hotel Management student winners include Allen Moya for Manager on Duty, Jeong Kim for Garde Manger, Alexandra Canga and J anie Hernandez for their Marketing Campaign and Natalie Evans and Claudia Vega for Banquet Set-Up.Pictured is a bridal Centerpiece designed and assembled by Regina Lee .\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-03-3957',
    date: '2005-04-03',
    year: 2005,
    headline: 'On our way to Nationals',
    body: '2005-04-03 18:53:17\', \'Two of our 3D Animation students competed at State for SkillsUSA and came away with the highly coveted 1st Place award! Congratulations to Brandon Breen and Matt Moore , and best of luck as you head to Kansas City for Nationals in June.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-04-3954',
    date: '2005-04-04',
    year: 2005,
    headline: 'Young Award Winners',
    body: '2005-04-04 18:48:13\', \'Congratulations to Digital Filmmaking winners for the 2005 Young Moviemakers student film competition have been announced. The 2005 Winners include: 1st Place Comedy, Chelsea Hayden "Tortuga", 1st Place Animation, Lauren Walsh "Art Can\\\'t Lie", 2nd Place Experimental, Anisa Bouhkliff , "Running on Empty", 3rd Place Drama, Trey Carnley , "Have a Seat", Honorable Mention Drama, Chandler Wild "The House".',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-05-3899',
    date: '2005-04-05',
    year: 2005,
    headline: 'Surprise Honoring',
    body: '2005-04-05 21:17:46\', \'Today I received an incredible surprise from this great place where I am so fortunate to work. Little did I know at 8:30 AM, what I thought was going to be group photo of the students turned out to be KPRC TV - Local 2 Weatherman Wes Hohenstein flying in on the News 2 chopper to present their Sunshine Award to me. I am humbled and honored by this and for all of your support as we provide our SBISD students unparalleled opportunities for their future.\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-19-3891',
    date: '2005-04-19',
    year: 2005,
    headline: 'FFA Annual Banquet',
    body: '2005-04-19 20:30:21\', \'Our FFA program held their annual banquet Tuesday evening at Northbrook High School. It is their time to celebrate and acknowledge their year, thank their outgoing officers and install the FFA Officers for the next school year. The 2005-2006 leaders are Sentinel - Daniel Powell, Reporter - Joseph Johnson , Treasurer - Tyler Frazier , Secretary - Ashley Villarreal , Vice President - Lauren Deibert and President - Lauren Papierz. Thanks to teachers Sheyenne Krysher, Laurie Ledbetter and all the others that volunteered their time to make this evening a success. Also congrats to Cory Harget, Scott Pesl and Amber Williams for winning FFA Scholarships from the Ford Truck FFA Foundation!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-22-3886',
    date: '2005-04-22',
    year: 2005,
    headline: 'Bike Shop Comp.',
    body: '2005-04-22 20:19:25\', \'It\\\'s Crunch Time in Architectural CAD. 5 PM today is the deadline for entries in the AIA Michael G. Meyers competition for high school students. Throughout the past couple of weeks, dozens of students have been working evenings and weekends finishing their projects to design a bike shop in a historic building in the 3rd Ward. Sonia Greiner\\\'s class have created some incredible designs and presentations that are as good or better than what area college students produce.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/April-22.png',
    source: 'web'
  },
  {
    id: '2005-04-23-3882',
    date: '2005-04-23',
    year: 2005,
    headline: 'Island Film Festival',
    body: '2005-04-23 20:16:05\', \'The 2nd Annual Island Film Festival was held today in Galveston. The festival began last year from the efforts of our Digital Film teachers Mike Radler and Patty Nilsson to provide opportunities for high school students to enter and receive recognition for their work. It is open to high school and college students, and is judged by professionals in the film industry. This year, Guthrie Center students finished strong. Chelsea Hayden and Amanda Martin won 1st in the High School PSA category accompanied by Honorable Mentioned Lauren Walsh and Joyce Moon . High School Music Video 2nd place went to Zach Clarke, Francisco Herrera and David Aguirre . Tom Karba not only won 2nd place in High School Narrative, but he was voted by the audience as " Best of Show " and walked away with his prize - a brand new iMac G5 and an Apple Production Suite. Way to go Tom and all of our winners and entrants at IFF!\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/April-23.png',
    source: 'web'
  },
  {
    id: '2005-04-27-3879',
    date: '2005-04-27',
    year: 2005,
    headline: 'Career Day',
    body: '2005-04-27 20:12:46\', \'A very successful and well-attended Career Day was held at The Guthrie Center today. Beverly Litton once again lined up top quality volunteer speakers to educate the students about various occupations they are interested in knowing more about. We were also joined by the students and many of the staff from The School of Choice . Thanks to our presenters for making it a memorable day.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-28-3875',
    date: '2005-04-28',
    year: 2005,
    headline: 'Three Nominees ',
    body: '2005-04-28 20:09:31\', \'This year, three Guthrie Center teachers have been nominated by current or former students to the Who\\\'s Who Among America\\\'s Teachers. The Master Chief (Mark Heuser), Linda Nicodemus and Sonia Greiner are now among other Guthrie Center teachers who have received this honor in the past.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-29-3872',
    date: '2005-04-29',
    year: 2005,
    headline: 'CAD Winners',
    body: '2005-04-29 20:04:56\', \'Our Architectural CAD students who entered the AIA\\\'s Michael G. Myers competition came away with 4 of the 8 awards given by the Houston chapter (see April 22). Congratulations to individual winners Jorge Bustamante and Kiel Von Feldt and group winners Louis Charrin, Gabby Monzon, Alfred Lopez and Edgar Valverde for your success among all the high schools in the Houston area. Each student received a gift certificate and a scholarship to University of Houston\\\'s Summer Architecural program.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-04-30-3868',
    date: '2005-04-30',
    year: 2005,
    headline: 'Help Beyond Measure',
    body: '2005-04-30 20:02:14\', \' NJROTC cadets and their instructors finished what they started earlier this year when they raised over $1000 from car washes to help a family member of one of their own. A cadet\\\'s mom who is confined to a wheelchair needed help to get in and out of her home. Those proceeds, along with a lot of muscle and volunteer work from NJROTC, moved a ton of stepping stones, sand and hardware in place and installed the custom made aluminum ramps. This was after they removed the old walkways, patio and landscaping. At the end of the day, their faces were courting smiles from the satisfaction they received because of their unselfish efforts to assist.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-05-02-3864',
    date: '2005-05-02',
    year: 2005,
    headline: 'Special Screening',
    body: '2005-05-02 19:57:55\', \'On Tuesday May 10 during 3rd period we will be hosting a special screening of the award-winning documentary " Lost Boys of Sudan " at the GC ITV Theatre. One of the directors, a producer and one of the Lost Boys will be present to discuss various aspects of the film with students. Lost Boys of Sudan is an award-winning documentary that follows two Sudanese refugees on an extraordinary journey from Africa to America. Orphaned as young boys in one of Africa\\\'s cruelest civil wars, Peter Dut and Santino Chuor survived lion attacks and militia gunfire to reach a refugee camp in Kenya along with thousands of other children. From there, remarkably, they were chosen to come to America.\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-05-03-3859',
    date: '2005-05-03',
    year: 2005,
    headline: 'Producing Winners',
    body: '2005-05-03 19:45:23\', \'First year Digital Film student Juan Campos III from Westchester has had his Spanish film selected to be shown at the Barcelona Independent Film Festival. We are very proud that his work has been chosen by the festival.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/May-3.png',
    source: 'web'
  },
  {
    id: '2005-05-04-3854',
    date: '2005-05-04',
    year: 2005,
    headline: 'Proud of Patty',
    body: '2005-05-04 19:32:07\', \'Last evening our very own Digital Film teacher Patty Nilsson was chosen as the district\\\'s Secondary Teacher of the Year ! We are proud of Patty as she receives this well deserved honor, and wish her the best as she represents Spring Branch in the regional Teacher of the Year event!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/May-4.png',
    source: 'web'
  },
  {
    id: '2005-05-05-3852',
    date: '2005-05-05',
    year: 2005,
    headline: 'Congratulations Tyler Lewis!',
    body: '2005-05-05 19:29:51\', \'NJROTC Cadet Master Chief Tyler Lewis has been presented the Meritorious Achievement Ribbon from the unit for his enthusiasm and effort in organizing the cadets to attain over 3,000 hours in community service . Earlier this year, Tyler was selected to receive the USN Gilliam Achievement Award. Tyler will attend Baylor University in the fall.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-05-06-3847',
    date: '2005-05-06',
    year: 2005,
    headline: 'CTE Awards and Scholarships ',
    body: '2005-05-06 19:22:31\', \'Our Career & Technology Awards and Scholarship Recognition Event was held here last night. We honored all of our student competitors, gave out $17,000 in scholarships to thirteen seniors, honored retiring teacher Ken Thuesen and announced the CATE Educator of the year - Suzanne Sobol from LMS. All this before a packed house in our theater.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/May-6.png',
    source: 'web'
  },
  {
    id: '2005-05-10-3842',
    date: '2005-05-10',
    year: 2005,
    headline: 'Lost Boys',
    body: '2005-05-10 19:07:28\', \'A full house of 135 attended a film screening in The Guthrie Center theater of the documentary " Lost Boys of Sudan . " Director Megan Mylan, and Lost Boys James Yuot & Mike Maker were on hand to answer questions from the students after the film ended. Thanks to our Digital Film department for arranging and inviting everyone to witness this gutty story of the young, orphaned, male refugees of Sudan from the 1990\\\'s.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/May-10.png',
    source: 'web'
  },
  {
    id: '2005-05-18-3840',
    date: '2005-05-18',
    year: 2005,
    headline: 'May 18',
    body: '2005-05-18 19:05:28\', \'Digital Film teacher Patty Nilsson received the 2005 Elizabeth Brand Teacher Excellence Award from the Houston Association of Professional Landmen. The memorial award is in honor of Mrs. Brand, a former SBISD teacher. The award was presented at a luncheon at the Hyatt Regency Downtown. Congratulations to Patty and thanks to HAPL for bestowing this recognition.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-05-24-3836',
    date: '2005-05-24',
    year: 2005,
    headline: 'New Classrooms Coming To Ag',
    body: '2005-05-24 19:03:32\', \'Last night the Board of Trustees approved obtaining bids for permanent classrooms at the Ag Center . This is a culmination of a great effort by the Ag parents, community, district leaders, teachers, students and The Guthrie Center. It was accomplished by presenting facts and showing the positive growth and needs of the program, supported in one voice by the interested parties. Once bids are received, if they come in under budget, the board will vote again to approve their construction. Thanks to everyone for their hard work in getting us to this point.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/May-24.png',
    source: 'web'
  },
  {
    id: '2005-05-26-3832',
    date: '2005-05-26',
    year: 2005,
    headline: 'School\'s Out For Summer',
    body: '2005-05-26 19:01:32\', \'So ends another outstanding year of education at The Guthrie Center. Finishing the year with a pot luck lunch including crawfish and catfish seemed only fitting. Enjoy the summer; August is just around the corner!\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-06-13-3824',
    date: '2005-06-13',
    year: 2005,
    headline: 'Outstanding Classes',
    body: '2005-06-13 18:57:58\', \'This summer we have already hosted a couple of outstanding classes at The Guthrie Center. Our partnership with Houston Community College again held an Agribusiness seminar during the past two weeks and Austin Filmworks offered their Filmmaking Workshop last week. The University of Houston has been hosting their CompuCamp here through July 14, and next week SBISD\\\'s Instructional Technology Department will have their Kid\\\'s Summer Computer Camp for students in grades 4 - 9.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/June-13.png',
    source: 'web'
  },
  {
    id: '2005-06-16-3820',
    date: '2005-06-16',
    year: 2005,
    headline: '3D Teacher Wanted',
    body: '2005-06-16 18:55:22\', \'Most of The Guthrie Center\\\'s instructors started out with professional careers in their teaching fields. Right now we are searching for a 3D Animation teacher . If you have at least three years experience as a 3D animator and are looking for a exciting career where you can develop future animators, I\\\'d like to talk to you. Contact me (Joe) at 713.365.4610 or visit the district\\\'s HR website to start your application process.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/June-16.png',
    source: 'web'
  },
  {
    id: '2005-06-30-3816',
    date: '2005-06-30',
    year: 2005,
    headline: 'Fond Goodbyes',
    body: '2005-06-30 18:52:27\', \'Today we bid a fond farewell to The Guthrie Center\\\'s Jean Thomas . Jean has contributed immeasurably in making this a great place to work over the past four years. Jean, you have my heartfelt thanks and appreciation as you move into the next phase of your life - fishing?\\n\\nWe also bid our second goodbye to Linda Russell in our Career and Technology department. Linda retired a couple of years ago and came back to help us maintain our level of service. Thanks for the memories Linda!\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-07-19-3814',
    date: '2005-07-19',
    year: 2005,
    headline: 'New Year, New Staff',
    body: '2005-07-19 18:50:17\', \'As summer winds down and we begin preparing for the 2005-2006 school year, I want to welcome new staff members Rindy Sumerlin as Guthrie\\\'s Administrative Assistant and Elva Saldivar as one of our Support Specialists. Both of our newest are experienced Spring Branch staffers who have taken a step forward to work at our school. I am thrilled to have them become a part of our team!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-07-20-3812',
    date: '2005-07-20',
    year: 2005,
    headline: 'Welcome!',
    body: '2005-07-20 17:48:07\', \'We warmly welcome our new 3D Animation Instructor, Alan Yip Choy . Alan attended Ringling School of Art and comes to us with 27 years as a commercial Graphic Designer/Animator and Creative Art Director for several Houston Area businesses.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2005-12-13-4157',
    date: '2005-12-13',
    year: 2005,
    headline: 'New Course Selection Guide',
    body: '2005-12-13 20:21:38\', \'Want an idea of what classes to take next year for electives ? Our Course Selection Guide is now available online. They will be mailed to the homes of all 8th to 11th graders the first week in January.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Dec-13.png',
    source: 'web'
  },
  {
    id: '2006-01-26-3679',
    date: '2006-01-26',
    year: 2006,
    headline: 'Website 5.0',
    body: '2006-01-26 17:26:55\', \'It\\\'s here! We welcome you to the NEW Guthrie Center Online! Our new website is filled with videos and interactivity for you to enjoy, while learning about what we have to offer and what goes on around campus. Thanks for stopping by!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-01-27-3672',
    date: '2006-01-27',
    year: 2006,
    headline: 'Future Architects Tour University',
    body: '2006-01-27 16:54:48\', \' OSA Architecture students attended the Michael G. Meyers High School Design Competition Workshop held at the U of H. The Young Architects of the Houston Chapter of AIA conducted a tour of the College of Architecture Building following the program. Students were amazed at the number of students that were there working on their college projects on a Saturday.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan27.jpg',
    source: 'web'
  },
  {
    id: '2006-01-27-3677',
    date: '2006-01-27',
    year: 2006,
    headline: 'Orienteering Meet Winners',
    body: '2006-01-27 17:03:52\', \'First time Orienteering participants received medals at the Texas Score Meet at Jones State Park on Saturday. Jhossany Rocha and Jaquan Reynolds took second and eighth place awards respectively. Orienteering is like a scavenger hunt with a map and compass as your tools. The goal is to find as many checkpoints in the woods in the quickest amount of time without getting lost.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-04-16-3894',
    date: '2006-04-16',
    year: 2006,
    headline: 'Annual Military Ball',
    body: '2006-04-16 20:47:02\', \' NJROTC Cadets held their Annual Military Ball tonight at the Crown Plaza Brookhollow. Hundreds of attendees listened to an inspirational speech by a former NJROTC student of Master Chief Heuser , currently serving in the US Navy as an officer. The outgoing seniors paid tribute to the program and their instructors; advancements in rank were issued; the new CO and XO were installed, and a dozen or so cadets volunteered to do a final round of pushups for Col. Sluis and Master Chief Heuser.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/April-16.png',
    source: 'web'
  },
  {
    id: '2006-08-01-3807',
    date: '2006-08-01',
    year: 2006,
    headline: '10th Annual Mini-Skills Camp',
    body: '2006-08-01 17:44:32\', \' NJROTC hosted its\\\' 10th Annual Mini-Skills Camp during the week of 24 July 06. Thirty four cadets knocked off the rust and provided training to an impressive group of incoming 1st year cadets. Lead by Cadet Lieutenant Commander Daniela Mendez , a Northbrook Senior, the cadets received classroom and practical training in military drill, Naval customs and courtesies and team building. The week concluded with a "drown-proofing" class followed by pizza, sodas and graduation.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Aug.-1.png',
    source: 'web'
  },
  {
    id: '2006-08-11-3804',
    date: '2006-08-11',
    year: 2006,
    headline: 'Recognized For Our Quality',
    body: '2006-08-11 17:40:56\', \'Today we hosted all of SBISD\\\'s Career & Technology teachers aswe prepare for the upcoming school year. Kicking off our staff development day was Alex Brennan-Martin owner of Brennan\\\'s of Houston , who delivered a lighthearted look at his industry and the importance of how we, as educators, serve our varied customers, including his family. He recently enrolled his own children in SBISD schools because of the quality of education he witnessed on the campuses they attend. Thanks to Alex for sharing his wisdom and stories from his book, " The Simple Truth About Your Business." \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-08-16-3802',
    date: '2006-08-16',
    year: 2006,
    headline: 'Hotel Management Still Accepting',
    body: '2006-08-16 17:39:03\', \'Today\\\'s Houston Chronicle featured our Hotel Management Internship program housed at The Omni Hotel Westside . Instructor Lorraine Hamilton works with Omni GM Judy Orlando and her department managers to provide total immersion in the Hospitality and Tourism industry. Students can also earn dual credit with Houston Community College and articulated credit with the University of Houston. This three hour class still has openings, so get with your counselor to sign up!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-08-17-3798',
    date: '2006-08-17',
    year: 2006,
    headline: 'First Days',
    body: '2006-08-17 17:37:27\', \'The first day of classes at Guthrie brought nearly 1,000 new and returning students to our campus. Over the next few days we will be balancing the numbers in each section so we can provide a quality, personal education for all.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Aug.-17.png',
    source: 'web'
  },
  {
    id: '2006-08-25-3790',
    date: '2006-08-25',
    year: 2006,
    headline: 'Chef Training',
    body: '2006-08-25 17:33:09\', \' Chef Training students observe Chef Michael Holderfield during their class at The Art Institute of Houston . Twice a week our class learns from their chefs at their impressive facility in the Galleria area. A few slots are still available in this class.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Aug.-25.png',
    source: 'web'
  },
  {
    id: '2006-09-01-3785',
    date: '2006-09-01',
    year: 2006,
    headline: 'Nacho usual project',
    body: '2006-09-01 17:22:20\', \'No, this is not a Culinary Arts project but a study of solar energy by our Architectural CAD students. Last year Sonia Greiner was awarded a $10,000 grant from BP so her students could build solar houses. As part of that focus, the students built solar ovens from pizza boxes and aluminum foil. Their delicacies included s\\\'mores and nachos (jalapenos on the side, please).\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-1.png',
    source: 'web'
  },
  {
    id: '2006-09-07-3778',
    date: '2006-09-07',
    year: 2006,
    headline: 'Annual Fundraiser',
    body: '2006-09-07 17:13:36\', \'Tonight nearly 100 FFA members and parents attended the annual kickoff meeting to learn about raising an animal project, fundraising, Ag Center rules and more. Last year\\\'s Grand Champion steer sold for nearly $10,000 creating a greater interest in raising steers. Our annual Show and Sale will be held in February.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-7.png',
    source: 'web'
  },
  {
    id: '2006-09-11-3769',
    date: '2006-09-11',
    year: 2006,
    headline: 'Honoring Our Heroes',
    body: '2006-09-11 18:50:23\', \'Today we stopped to honor the fallen victims and heros of 9/11, in observance of Patriot\\\'s Day.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-11.png',
    source: 'web'
  },
  {
    id: '2006-09-15-3763',
    date: '2006-09-15',
    year: 2006,
    headline: 'Honored Guest Luncheon ',
    body: '2006-09-15 18:45:49\', \' Chef Training students prepared and served a gourmet luncheon for almost forty members of the Gulf Coast Career and Technoloy Association here today. Under the leadership of Jennifer Cardenas and Chef Michael Holderfield from The Art Institute of Houston, guests were treated to Grilled Chicken Breast with Mushroom Sauce, Sauteed Green Beans with Zucchini and Pepper Noodles, Herb- Duchesse Potatoes and of course an excellent dessert - Chocolate Brownies with Passion Fruit Coulis!\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-15-1.png',
    source: 'web'
  },
  {
    id: '2006-09-16-3759',
    date: '2006-09-16',
    year: 2006,
    headline: 'Orienteering Begins',
    body: '2006-09-16 18:43:18\', \' NJROTC cadets and instructors Col. Sluis and Master Chief Heuser braved rain and mud today as they began their Orienteering season at Challenger 7 Park in Webster. The two dozen participants ran what amounts to a scavenger hunt in the woods with a compass and map as their only guides. The goal is to find all of the checkpoints and have the lowest time start to finish.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-16.png',
    source: 'web'
  },
  {
    id: '2006-09-26-3757',
    date: '2006-09-26',
    year: 2006,
    headline: 'JAM For The TCA',
    body: '2006-09-26 18:39:22\', \'Our OSA chapter (Organization of Student Architects) has arranged a special JAM session on Tuesday, October 3rd with special guest Marie Bell on how to complete the Texas Common Application and get your essay noticed. Seniors and Juniors - come by from 3 to 5 PM and get a head start on this important process for your future!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-09-27-3752',
    date: '2006-09-27',
    year: 2006,
    headline: 'Moving Day!',
    body: '2006-09-27 18:33:50\', \'It\\\'s finally here - moving day at our Ag Science Center. Our new classrooms are complete and we are transferring everything there to be ready to teach in these awesome classes and labs tomorrow. Thanks to our generous Board of Trustees for making this happen!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-27.png',
    source: 'web'
  },
  {
    id: '2006-09-28-3747',
    date: '2006-09-28',
    year: 2006,
    headline: 'Raising Chicks',
    body: '2006-09-28 18:18:30\', \' Animal Science students Celeste Gundlach and Bryan San Pedro view chick eggs in an incubator at our Ag Science facility on Brittmoore. By using a special flashlight, the students can look inside the eggs and see the soon-to-be-hatched chicks kick their feet and move around inside the egg.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-28.png',
    source: 'web'
  },
  {
    id: '2006-09-29-3743',
    date: '2006-09-29',
    year: 2006,
    headline: 'Reaching New Heights',
    body: '2006-09-29 18:16:42\', \' OSA, Organization of Student Architects , climbed to new heights when they met at the Texas Rock gym for their first social event of the year. Jackie Williford, an award winning rock climber and member of OSA, instructed students on the proper use of equipment.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Sept.-29.png',
    source: 'web'
  },
  {
    id: '2006-10-02-3738',
    date: '2006-10-02',
    year: 2006,
    headline: 'Picking Up Chicks',
    body: '2006-10-02 18:10:17\', \'Back to those chicks - it seems they hatch in as little as 12 days. The photos below show the final product - a living, breathing member of the poultry family.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.-2.png',
    source: 'web'
  },
  {
    id: '2006-10-03-3733',
    date: '2006-10-03',
    year: 2006,
    headline: 'Perfect Eggcecution',
    body: '2006-10-03 18:06:04\', \' Chef Training students worked feverishly to produce a finished product with multiple components that had to be completed at the same time. This requires planning, knowledge of cooking time and anticipating any possible pitfalls that may occur in the process. Abovethey proudly stand with their creation!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.-3-.png',
    source: 'web'
  },
  {
    id: '2006-10-04-3728',
    date: '2006-10-04',
    year: 2006,
    headline: 'JAM Sessions',
    body: '2006-10-04 18:03:19\', \'Yesterday our JAM session included special guest Marie Bell from SWHS who spent time explaining how to complete and write essays for the Texas Common Application. Students are invited to as often as possible to complete what they began and join other students at our weekly JAM every Tuesday from 3 to 5. Below Mrs. Bell works with OSA student Andres Alfaro. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2006/10/Oct.-4.png',
    source: 'web'
  },
  {
    id: '2006-10-07-3721',
    date: '2006-10-07',
    year: 2006,
    headline: 'Dedication and Effort',
    body: '2006-10-07 17:58:01\', \'Hard work pays off for NJROTC cadets volunteering at the Military Museum of Texas on Wallisville Road. Twenty students led by Senior Chief Vanessa Salas and Chief Hugo Rodriguez put in 120 hours of work this day, and were rewarded by hitching a ride.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.-7.png',
    source: 'web'
  },
  {
    id: '2006-10-10-3718',
    date: '2006-10-10',
    year: 2006,
    headline: 'Scholarship Info',
    body: '2006-10-10 17:53:25\', \'Seniors as you busily prepare for life after The Guthrie Center and high school, don\\\'t forget to look out for scholarship opportunities to help you in your college years. To assist your search, we have started a scholarships web page with links and deadlines for your convenience. Click on the \\\' scholarship info \\\' link at the bottom of the Guthrie website.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-10-11-3712',
    date: '2006-10-11',
    year: 2006,
    headline: 'Check Out Our Podcast',
    body: '2006-10-11 17:50:12\', \'As our Commercial Photography students shoot and edit their photos, many are presenting them as a podcast. You can view the students\\\' work on the iTunes Store \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.11.png',
    source: 'web'
  },
  {
    id: '2006-10-17-3708',
    date: '2006-10-17',
    year: 2006,
    headline: 'Free Breakfast For NJROTC',
    body: '2006-10-17 17:48:05\', \'All semester our NJROTC students have had to endure the alluring aroma coming over in their spaces from Culinary . Luckily for them, today students were simulating line production and needed a willing group of customers - so the cadets were treated to a full course breakfast courtesy of our chefs in training.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.-17.png',
    source: 'web'
  },
  {
    id: '2006-10-24-3700',
    date: '2006-10-24',
    year: 2006,
    headline: 'Community Tuesday',
    body: '2006-10-24 17:41:12\', \'Tonight we hosted our first Community Tuesday of the school year. We were thrilled to have so manyinterested parents, friends and neighbors come out to see what we teach and how well our students execute. Thanks to all who came and those who prepared the presentations and provided the hospitality. Join us for our next CT on January 30.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-10-26-3693',
    date: '2006-10-26',
    year: 2006,
    headline: 'The Mayor Gets Interviewed',
    body: '2006-10-26 17:34:39\', \'Internet Broadcasting student Chris Leyendecker interviews Bill White , Mayor of Houston, at the Innagural SBISD Good Neighbor event held this evening at the Houston Racquet Club. Look for Chris and Robert McCarthy\\\'s podcast interview soon on the DFiBN website and at the iTunes Store.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2006/10/Oct.-26.png',
    source: 'web'
  },
  {
    id: '2006-10-27-3686',
    date: '2006-10-27',
    year: 2006,
    headline: 'Red Eye ',
    body: '2006-10-27 17:28:56\', \'The Guthrie Center tends to do things a little different than other schools, including periodic all night lock-ins by different departments. This past weekend our Digital Film teachers held their Red Eye Fest where students used our facilities to capture their music, shoot and edit videos, work on current projects or just show up in unusual attire.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.-27.png',
    source: 'web'
  },
  {
    id: '2006-10-31-3682',
    date: '2006-10-31',
    year: 2006,
    headline: 'Happy Halloween!',
    body: '2006-10-31 17:37:45\', \' Cosmetology & Manicuring students showed their gouhlishness as they decorated their subjects for Halloween, while some members of the Board of Trustees and Senior Staff along with Duncan Klussmann joined our Culinary class for appreciation breakfast today.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Oct.31.png',
    source: 'web'
  },
  {
    id: '2006-11-04-3666',
    date: '2006-11-04',
    year: 2006,
    headline: 'Lock In For Charity',
    body: '2006-11-04 16:52:26\', \' No, this is not taken during one of our classes. Actually its from the OSA\\\'s lock in this past weekend as 22 Architecture students showed up to help construct this years project for the Ronald McDonald House Oscar Night auction. Work began at 7pm and ended 7am the next morning. Working, eating, having fun and even sleeping was enjoyed by all. \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nov4.jpg',
    source: 'web'
  },
  {
    id: '2006-11-09-3660',
    date: '2006-11-09',
    year: 2006,
    headline: 'Cosmetology Students Volunteer At Festival',
    body: '2006-11-09 16:50:09\', \' Cosmetology students spent part of their weekend at SBISD school festivals doing face and nail painting. Students pictured here are decorating the visage of a Treasure Forest student while momapprovingly observes.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nov9.jpg',
    source: 'web'
  },
  {
    id: '2006-11-10-3655',
    date: '2006-11-10',
    year: 2006,
    headline: 'NJROTC Salutes Veterans',
    body: '2006-11-10 16:41:28\', \'NJROTC Cadet Michael Mallon talks with students from Spring Forest Middle School after their annual Veterans Day assembly. Our cadets and Master Chief Heuser provided the a Color Guard for the event honoring Spring Branch area Vets.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nov10.jpg',
    source: 'web'
  },
  {
    id: '2006-11-14-3653',
    date: '2006-11-14',
    year: 2006,
    headline: 'CultureShapers Finalist',
    body: '2006-11-14 16:39:10\', \'Cultureshapers, a Houston area competition for high school students in the creative arts fields, just announced their finalists for this year\\\'s awards. Three GC Film students placed in the top 20 and will find out how they fared on November 29th - Leif Steenson, Alizsha Pennington and Owen Schwartzbard all hope to take home a chunk of the $100,000 in awards. You can view their films and the rest of the finalists by visiting http://www.cultureshapers.com/visual-arts/film-winners-06.php',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-11-27-3649',
    date: '2006-11-27',
    year: 2006,
    headline: 'Laurie Ledbetter Honored in Atlanta',
    body: '2006-11-27 16:37:24\', \'Agricultural Science teacher Laurie Ledbetter will be honored in Atlanta this week with the Teachers Turn the Key Award . The National Association of Agriculture Educators bestows this to the top Ag teacher in each state. Last year\\\'s recipient was fellow teacher Sheyenne Krysher . Coincidence? Definitely not - they pick the best and we are proud to have the Best in Texas!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nov27.jpg',
    source: 'web'
  },
  {
    id: '2006-11-29-3645',
    date: '2006-11-29',
    year: 2006,
    headline: 'Alizsha Pennington Wins Again at CultureShapers',
    body: '2006-11-29 16:35:10\', \'Congratulations to Film Alizsha Pennington who finished in the Top 10 at CultureShapers. You can view her winning film by clicking here. Also at the banquet, MHS Principal Steve Shorter was honored as Administrator of the Year.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nov14.jpg',
    source: 'web'
  },
  {
    id: '2006-12-06-3641',
    date: '2006-12-06',
    year: 2006,
    headline: 'NJROTC Annual Military Inspection',
    body: '2006-12-06 16:33:27\', \'As the photo above indicates, our NJROTC unit is in the midst of it\\\'s Annual Military Inspection under the refined eyes of guest inspector Lt. Col. Jodeit, USMC. We are confident his inspection will reinforce our opinion that we have the best of all NJROTC units.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/dec06.jpg',
    source: 'web'
  },
  {
    id: '2006-12-11-3639',
    date: '2006-12-11',
    year: 2006,
    headline: 'Mini Grant Winners Honored',
    body: '2006-12-11 16:31:32\', \'This evening prior to and at the SBISD Board of Trustees meeting, Linda Nicodemus, Betty Franklin and Sonia Greiner were honored with the other district recipients of the J. Landon Short Mini- Grants. Congratulations to our winning teachers and their students who will directly benefit from their award!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-12-14-3636',
    date: '2006-12-14',
    year: 2006,
    headline: 'NJROTC Part of Wreaths Across America',
    body: '2006-12-14 16:29:15\', \'A contingent of NJROTC cadets and instructors attended the "Wreaths Across America" event at the Houston VA National Cemetery today. Our cadets provided the Color Guard and Lt. Col Sluis and MC Heuser presented wreaths for their respective services.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2006-12-16-3634',
    date: '2006-12-16',
    year: 2006,
    headline: 'Our New Course Selection Guide',
    body: '2006-12-16 16:27:44\', \'Our latest http://www.school2-0.org/ for 2007-08 will be going to the printer after the holidays and be in your mailboxes the second week in January. To get a sneak preview of it, click here.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-01-02-3629',
    date: '2007-01-02',
    year: 2007,
    headline: 'Sonia Grenier Named Crystal Award Recipient',
    body: '2007-01-02 22:53:41\', \'A new year brings a great surprise to Architecture teacher Sonia Greiner. Today she learned she was named a recepient of a Houston Chronicle Crystal Award for outstanding teachers, and one of six selected from over two thousand nominations. Congrats Ms. Greiner!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan21.jpg',
    source: 'web'
  },
  {
    id: '2007-01-08-3625',
    date: '2007-01-08',
    year: 2007,
    headline: 'Film Students in the News',
    body: '2007-01-08 22:52:02\', \'Filmmaking students Will Bulkema and George Craig were featured in an article in the Memorial Examiner about their productions and classes at The Guthrie Center.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan8.jpg',
    source: 'web'
  },
  {
    id: '2007-01-12-3620',
    date: '2007-01-12',
    year: 2007,
    headline: 'Architecture Students at the Ballpark',
    body: '2007-01-12 22:48:41\', \' Minute Maid Park and Kirksey Architects were the focus of the study trip taken by Guthrie Architectural students. They toured through the bullpen, communications box, the Lexus Lounge and the Legends Suite areas not usually visited by the general public. Afterwards at Kirksey Architects , one our inaugural Spring Branch ISD Good Neighbor Award Winners, the students learned about the design process, architectural history and a tour of their offices. Thanks to our chaperones, Diane Dwyer, Linda Allen, Jim Robin, Doris Graves and Don Graves. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan12.jpg',
    source: 'web'
  },
  {
    id: '2007-01-17-3615',
    date: '2007-01-17',
    year: 2007,
    headline: 'Connecting to the Workplace',
    body: '2007-01-17 22:42:53\', \'Our Diversified Internship students recently visited Starbucks early one morning to hear manager Craig talk about the advantages of building relationships in careers. "It gives you a greater advantage than a person seeking the same job with only a resume because the employer already knows what kind a person you are and the way you conduct yourself. Making connections is more that just meeting new people - it is also keeping in touch with them."\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan17.jpg',
    source: 'web'
  },
  {
    id: '2007-01-20-3606',
    date: '2007-01-20',
    year: 2007,
    headline: 'Regional Competitions',
    body: '2007-01-20 22:34:17\', \'Two separate competitions involving Guthrie students went on today. At Memorial HS the Business Professionals Association had their regional meet where students from all over Houston competed against others in areas like Entrepreneurship, Economics and many technicalhardware and software events one being Network Design where our team took first place.\\n \\nAcross the city at Nimitz HS, our NJRTOC cadets competed with 15 other units in a warm-up event for their Corpus Christi meet this Saturday. Judged events include Personnel Inspection, Color Guard, Armed and Unarmed Drill, Academics and Physical Fitness. Our Unarmed Drill Team had an amazing performance and the other teams did quite well, including the PT team, shown in the photos above.\\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2007/01/jan20.jpg',
    source: 'web'
  },
  {
    id: '2007-01-23-3602',
    date: '2007-01-23',
    year: 2007,
    headline: 'Culinary Arts Interns',
    body: '2007-01-23 22:32:49\', \'Former Culinary Arts & current Internship students Jon Shannon and Robyn Dudley are pictured at their training station, Cakes and Culinary Creations. Outstanding partners like owners Justin & Amber Fraser allow our interns real career experiences in successful, operating businesses. In addition, C&CC will be guest lecturing our Baking and Catering class later this month.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan23.jpg',
    source: 'web'
  },
  {
    id: '2007-01-24-3598',
    date: '2007-01-24',
    year: 2007,
    headline: 'Guthrie at Sundance',
    body: '2007-01-24 22:30:57\', \'A contingent of Filmmaking students and teachers Patty Nilsson and Mike Radler are in Park City Utah attending the Sundance Film Festival. This is the 5th year our school has been invited to attend and is still one of a dozen or so high schools around the nation that gets to go. Besides viewing numerous independent films, the students participate in workshops and interview directors and other film industry folks.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan24.jpg',
    source: 'web'
  },
  {
    id: '2007-01-30-3596',
    date: '2007-01-30',
    year: 2007,
    headline: 'Community Tuesday Guests Visits',
    body: '2007-01-30 22:27:09\', \'Our second Community Tuesday of the year was a great success. We appreciate all the extra effort made by our staff and students in welcoming our guests and giving them insight to the daily wonders of life at The Guthrie Center.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-01-31-3594',
    date: '2007-01-31',
    year: 2007,
    headline: 'Guthrie Goes to Washington',
    body: '2007-01-31 22:25:58\', \'I had the pleasure of being part of a Principal Technical Working Group with other national leaders in technology for two days in DC with the Department of Education and SRI Institute. Thirteen high, middle and elementary principals discussed different ways they have integrated technology in their schools and the positives and pitfalls of the implementation. The goal is to develop a reference for schools and districts to begin that process for the good of our students. The conceptual model we worked with can be viewed here: http://www.school2-0.org/',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-02-3592',
    date: '2007-02-02',
    year: 2007,
    headline: 'Students Continue to State',
    body: '2007-02-02 22:24:39\', \' Cosmetology students Karen Rojas and Kennia Alvarez took 2nd and 3rd place in the Nail Competition and are advancing to the State contests. In addition, our 3D Animation team also won and will attend the state competition in Corpus Christi in March.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-03-3588',
    date: '2007-02-03',
    year: 2007,
    headline: 'NJROTC Cadets Restore Vehicle',
    body: '2007-02-03 22:22:29\', \' NJROTC Cadet volunteers have adopted a VTR (vehicle/tank retriever) at the Military Museum of Texas where they will work on their own time cosmetically restoring it in time for the Veterans Day Parade in the fall. Last year the cadets also helped at the museum with various vehicles.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/feb3.jpg',
    source: 'web'
  },
  {
    id: '2007-02-05-3586',
    date: '2007-02-05',
    year: 2007,
    headline: 'Awesome Unarmed Drill Team',
    body: '2007-02-05 22:21:15\', \'Some of the options for participation in our NJROTC unit include the Color Guard, Armed Drill and Unarmed Drill Team. This year our unarmed team is truly special. You can view the routine from their Nimitz meet below.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-06-3581',
    date: '2007-02-06',
    year: 2007,
    headline: 'Teacher of The Year Announced',
    body: '2007-02-06 22:16:27\', \'Architecture teacher and Crystal Award winner Sonia Greiner has been elected as The Guthrie Center\\\'s Teacher of the Year for 2007! Congratulations to Sonia who will take the diamond studded tiara from the reigning Betty Franklin very soon.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/jan2.jpg',
    source: 'web'
  },
  {
    id: '2007-02-08-3576',
    date: '2007-02-08',
    year: 2007,
    headline: 'Show and Sale Begins',
    body: '2007-02-08 22:12:59\', \'Our FFA Show and Sale started off strong today with over 900 PK-5 grade students visiting our Children\\\'s Barnyard event, followed by the Livestock Show portion for steers, heifers, rabbits, turkeys and chickens. The show will continue on Friday at 5:00 and the Sale portion begins Saturday at 1:00 PM. Come on out and support our students!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/showsalebegins.jpg',
    source: 'web'
  },
  {
    id: '2007-02-10-3574',
    date: '2007-02-10',
    year: 2007,
    headline: '29th Annual FFA Show and Sale Huge Success',
    body: '2007-02-10 22:10:07\', \'Our Show and Sale concluded as the most successful in history, raising over $136,000 for the FFA Chapter and student participants. FFA advisors Sheyenne Krysher and Laurie Ledbetter along with their amazing student leaders and dedicated parent FFA Alumni Association created this smooth running, successful event. A special thanks to our buyers, for without them we wouldn\\\'t have raised a dime.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-14-3570',
    date: '2007-02-14',
    year: 2007,
    headline: 'OSA Helps Cupid',
    body: '2007-02-14 22:08:23\', \'Our Organization of Student Architects held their annual Valentine\\\'s Day fundraiser today, providing hundreds of students with roses, balloons and teddy bears to give to to their loved ones on this day of the heart. OSA is one of a handful of high school chapters in the nation for future architects.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/OSA-helps.jpg',
    source: 'web'
  },
  {
    id: '2007-02-15-3564',
    date: '2007-02-15',
    year: 2007,
    headline: 'Academy Students in Big Apple',
    body: '2007-02-15 22:02:45\', \' Academy of Hospitality and Tourism and Academy of Finance seniors from around the district spent a frigid four days in NYC touring the financial and travel centers of the world. AOHT students are housed at our Hotel Management program at the Omni Hotel Westside and led by instructor Lorraine Hamilton. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/feb15.jpg',
    source: 'web'
  },
  {
    id: '2007-02-15-3568',
    date: '2007-02-15',
    year: 2007,
    headline: 'Culinary Hosts District Principals',
    body: '2007-02-15 22:05:47\', \' Culinary Arts students prepared a delicious luncheon for most of the building principals and upper management in our district including Superintendent Duncan Klussmann . The event was the brainchild of Exec. Director Sofia Petrou and designed to showcase the program and school to school leaders throughout Spring Branch. Thanks to Jennifer Cardenas and our students for creating a wonderful menu of Chicken Marsala, wild rice, vegetables, salad, and a Chocolate Fountain for desert.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-16-3559',
    date: '2007-02-16',
    year: 2007,
    headline: 'Guthrie Teachers at Crystal Awards',
    body: '2007-02-16 21:44:42\', \'Two of our teachers were honored this evening at the 2007 Crystal Awards Banquet at the Westin Galleria Hotel. Sonia Greiner received her Crystal Apple from Jack Sweeney , Publisher of the Houston Chronicle, before an audience of hundreds. In all six Houston area teachers were nominated from a group of nearly 2,000. Also at the event, Betty Franklin was recognized as our 2006 Teacher of the Year! You can read the Chronicle article from 2/22/07 by clicking here.\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/crystalaward.jpg',
    source: 'web'
  },
  {
    id: '2007-02-17-3555',
    date: '2007-02-17',
    year: 2007,
    headline: 'To Love and Cherish',
    body: '2007-02-17 21:42:14\', \'Today many of The Guthrie Center staff and NJROTC Cadets attended the beautiful wedding ceremony of our own Colonel Ken Sluis to former CATE Director Linda Russell . We are so happy for Ken and Lindaas they continue down the path of life sharing it with each other.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/toloveandcherish.jpg',
    source: 'web'
  },
  {
    id: '2007-02-22-3551',
    date: '2007-02-22',
    year: 2007,
    headline: 'Volunteers at the Zoo',
    body: '2007-02-22 21:39:59\', \'Many of our NJROTC Cadets volunteered at the Houston Zoo this past weekend cleaning and organizing areas in need. A Special thanks to the students, Master Chief and Mrs. Master Chief for organizing and chaperoning the event. Zoo officials were impressed by their work ethic and by the camaraderie and respect the cadets exhibited towards all.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-02-28-3547',
    date: '2007-02-28',
    year: 2007,
    headline: 'Competition Season Heats Up',
    body: '2007-02-28 21:32:00\', \'We are in the middle of the second round of competitions and have many Guthrie students off to State events. Today Steve Whitt and BPA Computer Tech students Clayton Nocker, Jerry Perry, Edgar Bering, Robert Douglas, Robert Schumacker, Greg Brown, Key Clark and David Riviera went to compete in Network Design, Web Applications and Java. Next week, Lorraine Hamilton\\\' s Hotel Management DECA students (pictured) Lauren Leskinen, Julia Messina and Amanda Winner will compete in Hospitality Services and Hotel & Lodging events. After that, our 3D Animation team of Will Russler and Ryan Teodoro will vie in the 3D Visualization & Animation competition escorted by Sean Bellinger. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/DECAWinners07.jpg',
    source: 'web'
  },
  {
    id: '2007-03-02-3542',
    date: '2007-03-02',
    year: 2007,
    headline: 'The Guthrie Center hosts students from Greece',
    body: '2007-03-02 21:27:44\', \'"The Guthrie Center hosts students from Greece" which is how we spent a great day visiting with a student/teacher delegation from the American Farm School In Thessaloniki, Greece. This is our 3rd year to welcome guests who are able to come to the USA and Texas thanks to Sofia Petrou, Peter Peropoulos and the generosity of the Macedonian Association of Greater Houston . This year we hosted English teacher (it\\\'s a foreign language over there) Mary Chism and her students Helen, Niki, Simos, Thomas and Yianna . They only had a chance to see half of our programs during their five-hour stay, including lunch by our Culinary Arts students and staff and a quick shampoo and hair color for the guys. The day ended as Thomas and Simos played the bouzouki and trumpet while the ladies danced to Greek music to the delight of our students.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/greek.jpg',
    source: 'web'
  },
  {
    id: '2007-03-04-3539',
    date: '2007-03-04',
    year: 2007,
    headline: 'A Successful Weekend',
    body: '2007-03-04 21:23:51\', \'Our BPA competitors returned Saturday with 3rd place in Texas for Web Application Team. Congratulations to Edgar Bering, Robert Douglas and Key Clark . The Network Design Team finished in the top 10 in the state. Great results everyone!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-03-05-3537',
    date: '2007-03-05',
    year: 2007,
    headline: 'the $25,000 Question!',
    body: '2007-03-05 21:18:55\', \'Senior students, get in on the action and get yourself part of the $25,000 in Career & Technology Scholarships for 2007. Just log on to the special website and follow the prompts. There is only one essay, and you have a chance to claim a part of the $25,000! http://catescholarships.springbranchisd.com\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-03-07-3534',
    date: '2007-03-07',
    year: 2007,
    headline: 'Museum of Fine Arts Young MovieMakers',
    body: '2007-03-07 21:08:03\', \'Several of our Digital Film students were awarded top spots in the MFAH Young MovieMakers Film Festival and will be honored April 15th at the ceremony. Congratulations to Ayesha Shah, George Craig, Andrew Kim, Owen Schwartzbard, Ryan Zander, Brillante Wang, Leif Steenson and Will Buikema as well as teachers Patty Nilsson and Mike Radler . For details on the winners, visit the DF website by clicking the programs link (above), then choose the film & photography magazine and click the link to the site.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-03-20-3530',
    date: '2007-03-20',
    year: 2007,
    headline: 'Ready to Compete at Nationals',
    body: '2007-03-20 20:04:52\', \'Our Hotel Management Internship students, Lauren Leskinen, Julia Messina and Amanda Winner are Texas State winners in the Lodging and Hospitality Services Management Decision Making Teams events and advance to National DECA in Orlando, Florida. DECA, an organization for marketing students, boasts a national membership of 180,000 high school students. Congratulations and good luck to Lorraine Hamilton and her students!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/DECA.jpg',
    source: 'web'
  },
  {
    id: '2007-03-26-3527',
    date: '2007-03-26',
    year: 2007,
    headline: 'Rock and Roll is Here to Stay',
    body: '2007-03-26 20:02:23\', \'Friday evening from 6 to 10 PM, seven groups will compete in our 2nd Annual Battle of the Bands . Come out and enjoy the sounds - admission is $5 at the door.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-03-28-3523',
    date: '2007-03-28',
    year: 2007,
    headline: 'Helping to Save the World',
    body: '2007-03-28 19:59:29\', \'You may be familiar with the G8 - the group of eight countries (USA, Canada, Japan, UK, Italy, Germany, France and Russia) that meet annually to collaborate on common problems and solutions. What you may not know is there is a J8 (Junior 8) , where students around the world compete through ideas to have an opportunity to address the G8 leaders. Film teacher Patty Nilsson organized SBISD students Leelund Kim, Katharine Austin, Aynsley Griffin, Amy Kutinac, Gina Cahill, Robert Kollenberg, Neal Akhave and Nathalie McClure. They met afternoons and sometimes until 8 PM planning and discussing Climate Change, HIV/AIDS, Intellectual Property Rights and Economic Development in African Nations . If they win, the students and teacher will travel to Germany for the June G8 Summit.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-03-30-3518',
    date: '2007-03-30',
    year: 2007,
    headline: 'DF Concert Tonight',
    body: '2007-03-30 19:54:27\', \'It\\\'s rock and roll time in the Guthrie courtyard. 7 bands, 4.5 hours, 5 bucks. UPDATE: It was a great evening, we had about 350 attend to see The Patty Nilsson Project (we didn\\\'t pick the name) named as top band for the night. Thanks to all of our film students, staff and community volunteers for making it happen.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/bob.jpg',
    source: 'web'
  },
  {
    id: '2007-03-31-3516',
    date: '2007-03-31',
    year: 2007,
    headline: 'Back In The News Again',
    body: '2007-03-31 19:53:23\', \'Congratulations to Sonia Greiner , named as one of three finalists for SBISD Teacher of the Year. Sonia will interview with the selection committee next week and the winning teacher will be announced later this semester.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-02-3514',
    date: '2007-04-02',
    year: 2007,
    headline: '3D Animation Shows At State',
    body: '2007-04-02 19:51:39\', \'Our 3D Animation team of Will Russler and Ryan Teodoro took third place in all of Texas in the Visualization 3D Animation competition this past weekend in Fort Worth. Congratulations to Will, Ray and instructor Sean Bellinger for a fine display of their talents.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-04-3510',
    date: '2007-04-04',
    year: 2007,
    headline: 'Cosmetology Students Give and Receive',
    body: '2007-04-04 19:48:48\', \' Cosmetology students provided services for a variety of students from Woodview, Spring Branch, Cedar Brook, and Edgbrook Elementary schools on April 4th. Earlier that week, our partner Great Clips provided a clipper cut clinic for students. Three location managers along with owner Carl Smith came to the school and taught a hands-on clipper cutting class for the students. This fine partnership allows our students to learn directly from industry professional the cuts requested in salons today.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/greatclips.jpg',
    source: 'web'
  },
  {
    id: '2007-04-05-3506',
    date: '2007-04-05',
    year: 2007,
    headline: 'First, the Lone Star Emmy. Next, "The Envelope, Please!"',
    body: '2007-04-05 19:45:19\', \'Film students George Craig and Will Buikema have been awarded an Emmy for their films by the Texas Chapter of The National Academy of Arts and Sciences.In other department news, students will present a film and photography exhibition entitled Coexistence Houston at the Altharetta Yeargin Art Museum located at 901 Yorkchester. An Open House will be held on Saturday, April 14 from 2-4pm with refreshments and interactive children’s activities. Included are a collection of student- produced documentaries, Public Service Announcements, short films and creative color and black and white photographic artwork dedicated to coexistence in Houston.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/emmy.jpg',
    source: 'web'
  },
  {
    id: '2007-04-06-3495',
    date: '2007-04-06',
    year: 2007,
    headline: 'It\'s Springtime For Planting',
    body: '2007-04-06 19:38:00\', \'Thanks to our Horticultural Science students, the entrance to The Guthrie Center has been beautified. Laurie Ledbetter and her class plantged and grew the flowers in their greenhouse at the Ag Science complex on Brittmoore. They have plenty of Gerber Daisies for sale along with other plants - just in time for you to do the same where you live. Call 713.722.0384 for details on how and when you can buy and get your plants.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/hort.jpg',
    source: 'web'
  },
  {
    id: '2007-04-10-3500',
    date: '2007-04-10',
    year: 2007,
    headline: 'Museum of Fine Arts Young Moviemakers Awards Event',
    body: '2007-04-10 19:41:50\', \'Come out and celebrate with our winners on Sunday!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/hyf.jpg',
    source: 'web'
  },
  {
    id: '2007-04-11-3490',
    date: '2007-04-11',
    year: 2007,
    headline: 'Employee of The Month',
    body: '2007-04-11 19:31:39\', \'Our wonderful counselor Beverly Litton was surprised today with a visit from Superintendent Duncan Klussmann and others as she was named the SBISD Employee of the Month for April. Our NJROTC Cadets dinged her aboard to the delight of her Guthrie family and friends. Bev will be honored at the regular April Board of Trustees meeting on 4/23/2007 @ 7 PM.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/bev.jpg',
    source: 'web'
  },
  {
    id: '2007-04-14-3486',
    date: '2007-04-14',
    year: 2007,
    headline: 'Up All Night',
    body: '2007-04-14 19:27:55\', \'About thirty dedicated Architecture students and instructor Sonia Greiner spent their Friday night working on their entries for the Michael G. Meyers High School Design Competition projects. Projects will be delivered on Friday, April 21 to be judged. Stay tuned for results on Monday, April 30.\\n cadlockin',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-17-3482',
    date: '2007-04-17',
    year: 2007,
    headline: 'Wise Words Of Wisdom',
    body: '2007-04-17 19:19:49\', \'The Academies of Finance and Hospitality & Tourism had a funraising event this evening at the Federal Reserve Bank downtown. MHS almuni and Chairman/CEO Jeff Hildebrand of Hilcorp Energy Company was their speaker and delivered some wise words for the audience and other students seeking success. Jeff\\\'s speech can be read here: http://guthriecenter.springbranchisd.com/pdf/jeffhspeech.pdfThe AOF/AOHT academies are specialized programs for students desiring careers in finance, hospitality or tourism. Our thanks go out to Mr. Hildebrand, our teacher sponsors ( Lorraine Hamilton, Gay Sabom, Kristy Schaper, Betty Tallas and Eileen Tims ) and the AOF/AOHT Advisory Board for putting this successful evening together.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-23-3478',
    date: '2007-04-23',
    year: 2007,
    headline: 'Honored Once Again',
    body: '2007-04-23 19:16:50\', \'This evening at the Board of Trustees meeting, Beverly Litton was honored as SBISD Employee of the Month. Pictured are Superintendent Duncan Klussmann and Board President Wayne Schaper congratulating Beverly on her nomination.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/littoneom.jpg',
    source: 'web'
  },
  {
    id: '2007-04-24-3475',
    date: '2007-04-24',
    year: 2007,
    headline: 'Scholarships And Awards Night',
    body: '2007-04-24 19:12:11\', \'The Annual Career and Technology Awards ceremony was held this evening at The Guthrie Center. Nearly 150 guests were greeted by our NJROTC Cadets and fed by our Culinary Arts department. Congratulations to all of our student scholarship recipients and to the Career & Technology Educator of the Year - Jennifer Cardenas ! Enjoy the photos playing below or CLICK HERE for a large QUICKTIME slideshow. You can download a copy of the flyer with all of the details by clicking here>>',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-25-3473',
    date: '2007-04-25',
    year: 2007,
    headline: 'Leaders Share Experiences',
    body: '2007-04-25 19:09:42\', \'Business, industry and education leaders from the Houston area took time from their busy workday to come out and visit with our students during our annual Career Day. Beverly Litton once again coordinated an outstanding array of professionals in many fields to share their career stories. We greatly appreciate the effort of the 40+ presenters.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-27-3471',
    date: '2007-04-27',
    year: 2007,
    headline: 'Orlando Here They Come',
    body: '2007-04-27 19:08:01\', \'Our Hotel Management Internship students, Lauren Leskinen, Julia Messina and Amanda Winner are on their way to DECA Nationals with advisor Lorraine Hamilton . We wish them them a fun, memorable trip and success in their competition.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-04-30-3467',
    date: '2007-04-30',
    year: 2007,
    headline: 'Architectural Triumph',
    body: '2007-04-30 19:01:42\', \' Architectural CAD students took 7 out of 11 awards at the annual Michael G. Meyers high school competition sponsored by the Houston Chapter of the American Institute of Architects. Second Place was overall was awarded to Andres Alfaro , with Honorable Mentions enjoyed by Daniel Prather, Adam Rodriguez, Michael Mallon, Luis Salcedo, Adriana Valdez, Hannah Kim and Khairun Nisa . Most of the students were on hand to receive their award on Friday along with instructor Ms.Greiner. Congratulations one and all!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-05-01-3458',
    date: '2007-05-01',
    year: 2007,
    headline: 'FFA Banquet',
    body: '2007-05-01 18:53:44\', \'The Annual FFA Blue & Gold Banquet was held this evening in the Westchester cafeteria. Next year\\\'s student leadership team was installed, along with FFA Scholarships being awardedand acknowledgement of others who have made this an amazing year for Ag Science in Spring Branch iSD. Congratulations to our new FFA Officer Team: President- Travis Evans , Vice President- Paige Pesl ,Historian- Craig Culver \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ffabanquet07.jpg',
    source: 'web'
  },
  {
    id: '2007-05-01-3462',
    date: '2007-05-01',
    year: 2007,
    headline: 'NJROTC Cadet Commanding Officers',
    body: '2007-05-01 18:57:17\', \'Our NJROTC Unit installed their new commanding officer team at their Military Ball on April 21. Hugo Rodriguez takes over as Commanding Officer for outgoing CO Daniela Mendez , and Esther Vasquez will assume the duties of Command Senior Chief for graduating Command Master Chief Vanessa Salas . Huggies and Esther will be joined by Operations Officer Mystree Johnson and Administration Officer Jorge Hurtado .\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/njrotcmb.jpg',
    source: 'web'
  },
  {
    id: '2007-05-02-3456',
    date: '2007-05-02',
    year: 2007,
    headline: 'One More Honor',
    body: '2007-05-02 18:52:33\', \'Architecture teacher Sonia Greiner will receive the Elizabeth Brand Teaching Excellence Award by the Houston Association of Professional Landmen. Sonia will receive her award at their luncheon at the Petroleum Club later this month.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-05-03-3451',
    date: '2007-05-03',
    year: 2007,
    headline: 'Distinguished',
    body: '2007-05-03 18:42:31\', \'The US Navy designated the Spring Branch NJROTC Unit as "Distinguished with Academic Honors." This is due to the hard work and success of the cadets in the areas of academics, community service, competitions and their annual inspection among other factors. Congratulations to our cadet leaders and Lt. Col. Sluis and Master Chief Heuser. With this designation, we will be able to submit nominations for eligible seniors to the US Naval Academy, the US Military Academy and the US Air Force Academy. This is the 2nd consecutive year and the 8th time the unit has earned this prestigious award!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-05-08-3446',
    date: '2007-05-08',
    year: 2007,
    headline: 'C-Span Award Winner',
    body: '2007-05-08 17:22:58\', \' We are pleased to announce that Internet Broadcasting student Natalie Petrie has been awarded one of the top prizes in the C-SPAN’s StudentCam Video Documentary competition . Her video “Mortgaging Our Futures” will be aired on C-SPAN on June 6th at 5:50 AM, and can be viewed on our IB website by clicking here >> \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/2007Winners_header.jpg',
    source: 'web'
  },
  {
    id: '2007-05-10-3442',
    date: '2007-05-10',
    year: 2007,
    headline: 'Architectural CAD Awards Night',
    body: '2007-05-10 17:20:03\', \'Braving wind, rain and floods, 30+ individuals attended the Architectural CAD Banquet catered by our Culinary Arts department. After the delicious cuisine, students were awarded with the GC Architectural "Golden Brick" for their winning design entries. Capping off the evening, four top students, Samantha Mendenhall, Luis Salcedo, Michael Mallon, and Andres Alfaro each walked away with $500 in college scholarship funds. Scholarship awards were the result of student fundraisers held throughout the year.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/cadawards.jpg',
    source: 'web'
  },
  {
    id: '2007-05-14-3439',
    date: '2007-05-14',
    year: 2007,
    headline: 'Parent Meeting May 16',
    body: '2007-05-14 17:17:03\', \'Wednesday evening at 7 PM we are hosting a parent meeting with Superintendent Duncan and give your input on this topic.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-05-17-3431',
    date: '2007-05-17',
    year: 2007,
    headline: 'New Headwear',
    body: '2007-05-17 17:08:01\', \'Second year and higher Guthrie students model their new Guthrie ballcaps awarded to them for dedication to their career focus while attending our fine school.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/caps.jpg',
    source: 'web'
  },
  {
    id: '2007-05-17-3435',
    date: '2007-05-17',
    year: 2007,
    headline: 'Excellence In Teaching Award',
    body: '2007-05-17 17:11:12\', \' Sonia Greiner was a guest of the Houston Association of Professional Landmen at the Petroleum Club downtown today where she received the Elizabeth Brand Excellence in Teaching Award . Mrs. Brand was a long time social studies teacher in SBISD and this annual award goes to one SBISD and one HISD teacher. Pctured in the photo below with Sonia are Peggy and Brandon Perry , daugher and grandson of Mrs. Brand.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/brandaward.jpg',
    source: 'web'
  },
  {
    id: '2007-05-18-3427',
    date: '2007-05-18',
    year: 2007,
    headline: 'Guthrie Partners Honored',
    body: '2007-05-18 17:02:42\', \'The Houston West Chamber of Commerce honored Educational Partners at their annual Awards Luncheon today. Guthrie nominees were selected as tops in three categories. Air Routing Group , Kirksey Architects and Riverwood Building Company were lauded for their strong support of education. They were in good company with the other nominated partners - longtime Hotel Management site Omni Houston Hotel Westside , Hungry\\\'s Cafe , Terra Nova Landscaping , Cakes and Culinary Creations , Sam\\\'s Club , Houston Community College Northwest, the Houston Junior Forum and First Community Credit Union . \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/hwcoc_logo.jpg',
    source: 'web'
  },
  {
    id: '2007-05-24-3423',
    date: '2007-05-24',
    year: 2007,
    headline: 'Digital Film Awarded BP A+ Grant',
    body: '2007-05-24 17:00:27\', \' Mike Radler and Patty Nilsson were awarded a $10,000 BP A+ for Energy teachers grant for the upcoming school year. Their students will be creating video and graphical communications on ways we can conserve energy in our lives. Congratulations to all and thank you BP for providing this opportunity for our students.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-05-25-3418',
    date: '2007-05-25',
    year: 2007,
    headline: 'As Our Year Concludes',
    body: '2007-05-25 16:49:06\', \'Fellowship and food are enjoyed at our annual year-end luncheon at The Guthrie Center. Delicious foods prepared by many of our staff were enjoyed including Trudy\\\'s Red Beans & Rice and a good old fashioned Crawfish Boil cooked to perfection by Master Chief and yours truly. This tradition gives us a chance to get together one last time to reflect on the year and what is to come. "Laissez les bons temps rouler!" \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/lunch.jpg',
    source: 'web'
  },
  {
    id: '2007-08-19-3413',
    date: '2007-08-19',
    year: 2007,
    headline: 'Surprise Reading',
    body: '2007-08-19 16:24:15\', \'The other day Auto Tech instructor Craig Clark was reading his latest copy of Undercar Digest, and when he got to page 46 he saw three cars that looked just like his, and it turns out they are photos of his cars from a recent Auto Show.\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/udcover200708_130.jpg',
    source: 'web'
  },
  {
    id: '2007-08-21-3409',
    date: '2007-08-21',
    year: 2007,
    headline: 'Ron Ellis Day',
    body: '2007-08-21 16:21:31\', \'During this week of intense preparation by our staff for the opening of school, we pause today to celebrate the retirement of our awesome custodial foreman, Ron Ellis . Throughout his 25 years at The Guthrie Center, Ron has seen principals and teachers come and go, programs change, and tree saplings grow to 40 feet tall. He leaves a legacy of pride in presenting a facility every day that is safe and clean for the students and staff. Ron, thanks for caring for all of us and making this a great place to work and attend school. We will miss you, wish you the best in your future, and hope youwill come back to visit!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ron.jpg',
    source: 'web'
  },
  {
    id: '2007-08-28-3405',
    date: '2007-08-28',
    year: 2007,
    headline: 'It\'s A Great Day',
    body: '2007-08-28 16:20:14\', \'Today we welcome back returning students and greet our new ones to The Guthrie Center. After an extended summer, we are thrilled to be back in business. This year, as always, we will strive to continue bringing you the latest in technology and curriculum to prepare a record number of you for success in college and your career.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/back.jpg',
    source: 'web'
  },
  {
    id: '2007-09-09-3401',
    date: '2007-09-09',
    year: 2007,
    headline: 'Walk And Round Up',
    body: '2007-09-09 16:16:46\', \' NJROTC cadets Zindi Contreas, Jose Leal, Esmeralda Mendoza, Jordana Reyes, Mark Silva, Ben Wakefield, Mark Vasquez, Vianca Vieyra, Daniel Villoni, Mario Zapada and Team Leader Hugo Rodriguez along with Cosmetology teacher Betty Franklin joined SBISD and other school districts in the "Reach Out to Dropouts" walk around the district. By 8 AM, over 100 volunteers visited the homes of students who were in school last year but didn\\\'t return in August. Cadet Daniel Villoni accompanied a handful of school officials and Carol Fox, Piney Point Village Mayor . Daniel talked to the students we met about how school is important to him and inspired them with stories of his success in and the benefits of our NJROTC unit.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/dropoutwalk.jpg',
    source: 'web'
  },
  {
    id: '2007-09-13-3397',
    date: '2007-09-13',
    year: 2007,
    headline: 'FFA Information Night',
    body: '2007-09-13 16:14:06\', \' Agricultural Science students and parents packed our theater to learn all about the the upcoming FFA events and procedures for this school year. Besides having a record number of students in Ag classes, we have more requests to raise animal projects than we have available space. It\\\'s a good problem to have. A big thanks to our FFA Alumni Officers Cliff Powell, Jeff Matecki, Delinda Gonzalez, Sonya Garnier, Lisa Herman and Dina Blume , and especially our advisors/teachers Laurie Ledbetter and Sheridan Clinkscales .\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ffa.jpg',
    source: 'web'
  },
  {
    id: '2007-09-14-3392',
    date: '2007-09-14',
    year: 2007,
    headline: 'On Their Way To College',
    body: '2007-09-14 16:08:04\', \' Chef Training students gather at the front of school every Thursday and Friday to travel to The Art Institute of Houston where they study under Chef Michael Holderfield . This is our eighth year of an outstanding partnership with The Art Institute, who graciously allow our students to learn in a college environment alongside their culinary baccalaureate candidates. Bon Appétit!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/chef.jpg',
    source: 'web'
  },
  {
    id: '2007-09-15-3390',
    date: '2007-09-15',
    year: 2007,
    headline: 'Orienteering 101',
    body: '2007-09-15 16:07:02\', \'The tune up orienteering meet for the season was held today at Challenger 7 Memorial Park near Clear Lake. NJRTOC cadets searched their way around the park for checkpoints, trying to be the fastest to complete their event. Afterwards they relaxed, comparing how muddy they were and enjoyed food and fellowship.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-09-17-3386',
    date: '2007-09-17',
    year: 2007,
    headline: 'Battling Bots',
    body: '2007-09-17 16:03:02\', \'Students in our Robotics/Electronics classes work on their first project, assembling mini-robotic vehicles that they program to respond to certain events, like turning 90 degrees or going into reverse upon impact. While doing this, our students learn the basics of electronics from instructor Joe Lynch. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/robotics.jpg',
    source: 'web'
  },
  {
    id: '2007-09-18-3381',
    date: '2007-09-18',
    year: 2007,
    headline: 'Edible Shirts',
    body: '2007-09-18 16:00:00\', \'Well not really edible, but one of Global Agriculture students\\\' recent assignments was to design and create a t-shirt that would promote and market agriculture. Global Ag, taught by Sheridan Clinkscales, is one of the many classes offered at our Ag Science Center and part of our family of programs at Guthrie.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Global-AG-T-shirt-project-fall-07-019.jpg',
    source: 'web'
  },
  {
    id: '2007-09-26-3377',
    date: '2007-09-26',
    year: 2007,
    headline: 'Huggie\'s Helpers',
    body: '2007-09-26 15:58:05\', \' Cadet Hugo Rodriguez , running for Homecoming King at Spring Woods, had many volunteers painting signs for him to help bring him the crown after school today during drill team practice breaks. Way to go Hugo!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/huggies.jpg',
    source: 'web'
  },
  {
    id: '2007-09-27-3373',
    date: '2007-09-27',
    year: 2007,
    headline: 'Squisito!',
    body: '2007-09-27 15:56:00\', \'Our talented and hard-working Chef Training students led by instructor Jennifer Cardenas spent the morning at Carmelo\\\'s Italian Restaurant on Memorial Drive. The first part of the day they worked in the kitchen prepping a variety of items alongisde Carmelo\\\'s staff This gave these future culinary wizards a reality dose of life in the culinary world. After they were finished they were treated to (and served) a wonderful Camelo\\\'s lunch. To view photos from the day, click on the link below or visit our website: http://guthriecenter.springbranchisd.com/culinary/index.html \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/carmelos.jpg',
    source: 'web'
  },
  {
    id: '2007-10-06-3369',
    date: '2007-10-06',
    year: 2007,
    headline: 'For A Good Cause',
    body: '2007-10-06 15:54:21\', \'Our NJROTC unit collected over $500 at their car wash today with all of the proceeds going to support the Fight Against Breat Cancer . Over 40 cadets joined Col. Sluis and Master Chief Heuser in doing their part to support this worthy cause.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Breast-Cancer-Car-Wash.jpg',
    source: 'web'
  },
  {
    id: '2007-10-07-3367',
    date: '2007-10-07',
    year: 2007,
    headline: 'Helping Those That Help Others',
    body: '2007-10-07 15:50:17\', \' Camp Aranzazu , near Rockport on the Gulf Coast is a place where children with chronic illness or disabilities can experience outdoor life and just some fun in their lives. They rely on volunteers to help maintain the facilities, so many of our Architecture students and a few from Criminal Justice did just that and spent their weekend completing a punchlist of painting, pressure washing, repairing and more. Joining teacher Sonia Greiner and her husband Terry were Raul Soto, Juan Garcia, Dorian Rodriguez, Helmer Murillo, Sam Pena, Juan Alarcon, Alexander Guajardo, Adam Rodriguez, Ji Sung, Aynsley Griffin, Bernice Hernandez, Javier Hernandez, Anna Stiff, Melissa Perez, Antoan Bien and Jaqueline Sosa. Thanks to these students and Mrs. Greiner for furthering the strong spirit of volunteerism at The Guthrie Center.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2007-10-10-3363',
    date: '2007-10-10',
    year: 2007,
    headline: 'Community Tuesday- Our Open House',
    body: '2007-10-10 15:48:18\', \'Our first Community Tuesday of the year will be held on October 23 from 5 to 7:30 PM . Please join us to see the great programs that we have to offer our students and the incredible work they accomplish daily. We look forward to seeing you here on the 23rd.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/Gwithcourses.jpg',
    source: 'web'
  },
  {
    id: '2007-10-13-3359',
    date: '2007-10-13',
    year: 2007,
    headline: 'Two Real Honors',
    body: '2007-10-13 15:45:09\', \'Spring Woods senior and NJROTC Executive Officer Gabriela Villalobos received two honors Friday evening. During Halftime ceremonies at Tully Stadium, Gabby was escorted to the center of the field by a true hometown hero, her brother. United States Marine Corps Corporal Eric Morante , a recipient of the Purple Heart for wounds received during patrol operations in Iraq and a 2003 graduate of Spring Woods, took Gabby by her arm and walked her through an Honor Guard of NJROTC Cadets. All eyes in the stadium were on the five finalists. When the announcement came that Gabby had been selected as the 2007 Homecoming Queen came, the place erupted. One could not tell who was more proud; Gabby or Eric.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/gabby.jpg',
    source: 'web'
  },
  {
    id: '2007-10-14-3355',
    date: '2007-10-14',
    year: 2007,
    headline: 'Learning From The Pros',
    body: '2007-10-14 18:57:05\', \' Visible Changes went the extra step to enhance student education by providing an industry level hair and style show for our Cosmetology students. The stylists-in-training learned from the best of the best. Style Directors, Chemical and Creative Specialists shared their expertise with our students to give a glimpse into their future through demonstrations of these art forms. Senior Claudia Yanez was an on-stage model for a haircut and style. The educational morning was followed by a style show and a great lunch compliments of our partner with 30 years in the hair business.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/VC-group.jpg',
    source: 'web'
  },
  {
    id: '2007-10-15-3351',
    date: '2007-10-15',
    year: 2007,
    headline: 'International Competitors ',
    body: '2007-10-15 18:54:14\', \'Two Guthrie students just returned from competing in the 2007 Special Olympic World Summer Games in Shanghai, China. Marcus Gary (Business) and Ashley Billard (Hotel Management) were among 7,500 athletes from around the world competing in various events. While Marcus\\\'soccer team faced formidable opponents and held their own in each match, Ashley returned with Gold Medals in the 100 meter Freestyle and 25 meter Backstroke, along with a silver in her USA Team Relay. Congratulations to both of our student winners!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ashley.jpg',
    source: 'web'
  },
  {
    id: '2007-10-18-3347',
    date: '2007-10-18',
    year: 2007,
    headline: 'My Kind Of Meeting',
    body: '2007-10-18 18:52:26\', \'Members of the prestigious teacher organization Delta Kappa Gamma held their monthly meeting in our Culinary departmentwith Jennifer Cardenas and Steve Whitt teaching them the fine art of preparing hors d\\\'oeuvres.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/class.jpg',
    source: 'web'
  },
  {
    id: '2007-10-22-3343',
    date: '2007-10-22',
    year: 2007,
    headline: 'Quiet On The Set',
    body: '2007-10-22 18:49:00\', \'Digital Filmmaking students Leelund Kim, Hunter Coleman and Hannah Smith shoot a television commercial with General Bob Dees , US ARMY Retired, for HOUSTON FREEDOM FEST a city-wide Veteran\\\'s Day celebration.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/dees.jpg',
    source: 'web'
  },
  {
    id: '2007-10-23-3338',
    date: '2007-10-23',
    year: 2007,
    headline: 'A Welcoming Event',
    body: '2007-10-23 18:44:46\', \'Our first Community Tuesday of the school year was a great success. Over 300 guests visited our school and toured the programs with their children, brought over perspective students or just browsed to see all the incredible classes available to SBISD high school students. We look forward to seeing even more at our next event coming up during the spring semester.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/CIMG1635.jpg',
    source: 'web'
  },
  {
    id: '2007-10-24-3333',
    date: '2007-10-24',
    year: 2007,
    headline: 'Relaxed Listening',
    body: '2007-10-24 18:41:19\', \'On an absolutely beautiful day at The Guthrie Center, Mike Radler \\\'s Commercial Photography students watch and listen to podcasts on photography techniques.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/cfilmpod.jpg',
    source: 'web'
  },
  {
    id: '2007-10-25-3329',
    date: '2007-10-25',
    year: 2007,
    headline: 'Great Neighbors',
    body: '2007-10-25 18:38:49\', \'Tonight Mayor White addressed nearly 300 Spring Branch education, business and community leaders at the Class of 2007 Good Neighbors celebration at the Houston Racquet Club. The Guthrie Center\\\'s seventeen nominations include ARG Services, Cakes & Culinary Creations, Colinas, Crossroad Animal Clinic, First Impressions, Houston Junior Forum, Hungry\\\'s, Kirksey Architects, Omni Westside, Riverwood Builders, Starbucks, Studio Works, Terra Nova Landscaping, The Art Institute of Houston, The Travel Desk, Tomball College & Village Table . Good Neighbors are partners that do three things above and beyond to support the students of Spring Branch. Thank you again to our ‘Good Neighbors” and all of those that contribute to the students educational experience in SBISD!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/CIMG1716.jpg',
    source: 'web'
  },
  {
    id: '2007-11-07-3321',
    date: '2007-11-07',
    year: 2007,
    headline: 'Voters Decide',
    body: '2007-11-07 19:32:49\', \'Yesterday the $597M SBISD Bond was approved by a widemargin which will allow a dozen elementary schools to be rebuilt, systems replaced and addtional technology throughout the system. Thanks for your support of our district!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/vote.jpg',
    source: 'web'
  },
  {
    id: '2007-11-13-3312',
    date: '2007-11-13',
    year: 2007,
    headline: 'Apple Night',
    body: '2007-11-13 19:23:58\', \'Over 50 Digital Filmmaking and Commercial Photography students, family and friends celebrated their creative projects during School Night at the Apple Store in Memorial CityMall. We are proud of their accomplishments and appreciate the Apple Store for providing a forum for many to witness their success.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/applenight.jpg',
    source: 'web'
  },
  {
    id: '2007-11-15-3307',
    date: '2007-11-15',
    year: 2007,
    headline: 'Fitness Training',
    body: '2007-11-15 19:19:50\', \'At long last our NJROTC Cadets have a way to implement their physical fitness regime in safety and style. Today they used the new training stations at six areas around the jogging trail built earlier this year. The exercise equipment was funded through a $5,500 grant from the Spring Branch Education Foundation and in part through our Executive Director Sofia Petrou\\\'s office. We appreciate this asset for the students of our Distinguished Unit.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/fitness1.jpg',
    source: 'web'
  },
  {
    id: '2007-11-16-3303',
    date: '2007-11-16',
    year: 2007,
    headline: 'Greenhouse Goes Red',
    body: '2007-11-16 19:17:52\', \'Our Agricultural Science Greenhouse and Horticulture students have worked hard all fall to produce an impressive crop of poinsettia\\\'s. They are now ready for you to buy and give to your family and friends throughout the holidays. Please call 713.722.0384 or 713.365.4610 to arrange purchase of these beautiful plants for only $5.25 each. During the spring semester, these same students will be germinating and growing assorted flowers and house plants that will be available for you to purchase as well. Watch this site for additional information.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/poinsettia.jpg',
    source: 'web'
  },
  {
    id: '2007-11-27-3299',
    date: '2007-11-27',
    year: 2007,
    headline: 'Sweet Equity Brings It Home',
    body: '2007-11-27 19:15:30\', \'Former student Michael Ortiz (\\\'04) sent us the note below, along with scans of his first paycheck from 20th Century Fox Films while still attending the University of Texas.... ."Thought you might like to see this and possibly show your students in order to illustrate: 1) how helpful the GC is in preparing you for the real world; 2) how the experience and knowledge learned at the GC can get you places (like college); and 3) how important college (not necessarily film school) actually is in the eyes of employers. Attached is my paycheck from 20th Century Fox!" \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ortiz1.jpg',
    source: 'web'
  },
  {
    id: '2007-11-30-3295',
    date: '2007-11-30',
    year: 2007,
    headline: 'On A Typical Day At Guthrie',
    body: '2007-11-30 19:13:31\', \' Hotel Management students from The Omni Westside get ready to tour the Galleria area hotels to see how they attract and serve their guests who visit from around the world.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/hotel.jpg',
    source: 'web'
  },
  {
    id: '2007-12-04-3286',
    date: '2007-12-04',
    year: 2007,
    headline: 'A Generous Gesture',
    body: '2007-12-04 19:06:46\', \'As our seniors transition into college and beyond, a big concern for many is funding their continued education. We are fortunate to have many businesses, schools and individuals contribute to their success after high school. Today we learned from Dave Easley of Mack Haik Group that Mack Haik Ford has teamed with Ford Motor Company to sponsor two $1,000 FFA Scholarships for our Agricultural Science student leaders. Last year over $25,000 in scholarships were awarded to Guthrie seniors thanks to caring Partners in Education like Mac Haik.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2007/12/mackhaik.jpg',
    source: 'web'
  },
  {
    id: '2007-12-10-3282',
    date: '2007-12-10',
    year: 2007,
    headline: 'Muscle Car Showing',
    body: '2007-12-10 19:03:33\', \' Automotive Technology students Brady King (Camaro) and JT Knox (GT 500 Shelby) showed their vehicles at AutoRama at the George R. Brown Convention Center over the Thanksgiving holidays. Both students and instructor Craig Clark won awards for their fine automobiles at the event.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/king.jpg',
    source: 'web'
  },
  {
    id: '2007-12-13-3277',
    date: '2007-12-13',
    year: 2007,
    headline: 'Strong Performance',
    body: '2007-12-13 19:01:43\', \' NJROTC Cadets performed admirably during their Annual MilitaryInspection today at The Guthrie Center. Under the watchful eye of Area 10 Commander Mike Hale , many parents and Board of Trustees Theresa Kosmoski and Mary Grace Landrum , the cadets were assessed in Personnel Inspection, Basic Platoon marching Drill, Drill Team performances, Pass-In-Review. The cadet leadership then briefed Cdr. Hale on the unit and their personal goals, displayed their financial and inventory records, and wrapped it up with an exquisite luncheon prepared by our Culinary Arts students.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/CIMG18911.jpg',
    source: 'web'
  },
  {
    id: '2007-12-21-3275',
    date: '2007-12-21',
    year: 2007,
    headline: 'Home For The Holidays',
    body: '2007-12-21 18:58:47\', \'As we leave for some well-deserved time off, we wish all of you a wonderful Christmas or your holiday of choice, and look forward to a spring semester to remember.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-01-07-3271',
    date: '2008-01-07',
    year: 2008,
    headline: 'Excellence Acknowledged ',
    body: '2008-01-07 18:57:15\', \'Filmmaking teacher Patty Nilsson was selected as a Crystal Award Winner sponsored by the Houston Chronicle. Patty is one of six teachers from the entire Gulf Coast region to receive this prestigious award out of over a thousand nominations. She will be honored at a dinner at the Westin Oaks in February. Last year, Architecture teacher Sonia Greiner received this honor - making it two years in a row that a Guthrie teacher is a recipient of this wonderful award.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/nilsson.jpg',
    source: 'web'
  },
  {
    id: '2008-01-09-3267',
    date: '2008-01-09',
    year: 2008,
    headline: 'Ainsley Makes A Difference',
    body: '2008-01-09 18:55:41\', \' Ainsley King , a Baking and Catering student was awarded the “Making a Difference Award” Tuesday during a Luncheon at the Post Oak Hilton. Culinary Arts Instructor Jennifer Cardenas nominated Ainsley after observing her strong work ethic and attitude of service in her school and community. She was awarded a cash prize along with a savings bond on behalf of the Institute of Real Estate Management Association. Congratulations Ainsley!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/ainsley.jpg',
    source: 'web'
  },
  {
    id: '2008-01-14-3263',
    date: '2008-01-14',
    year: 2008,
    headline: 'Coming Soon To A Mailbox Near You',
    body: '2008-01-14 18:53:57\', \' The Guthrie Center Course Selection Guide for 2008-2009 is coming soon to your home. This year the guide will look a little different but has all the information you need to make an informed decsion on the Guthrie classes you want to take next year. Watch your mail towards the end of the month for delivery.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/G.jpg',
    source: 'web'
  },
  {
    id: '2008-01-15-3259',
    date: '2008-01-15',
    year: 2008,
    headline: 'Yes We Have Finalists At Culture Shapers',
    body: '2008-01-15 18:49:39\', \' CultureShapers is an organization that promotes the Artsin Houston area high schools by sponsoring their annual Visual Arts Contest and backing it up with a lot of prize money so the students can continue their Art Education. This year we have 7 out of the 15 finalists in Film and one of the 15 finalists in Photography. Good luck to these students in Nilsson & Radler\\\'s classes. Caroline Giese, Cristian Alvarez, Hunter Coleman, Gianna Cox, Sean Giroir, Chris Leyendecker, Jacquelynn Hartsoe, Kate Phillips & Hannah Smith - winners will beannounced January 31st! You can view their projects here: FILM FINALISTS PHOTO FINALISTS \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/cultureshapers.jpg',
    source: 'web'
  },
  {
    id: '2008-01-17-3255',
    date: '2008-01-17',
    year: 2008,
    headline: 'Honored Guests',
    body: '2008-01-17 18:46:03\', \'This week we were fortunate to host two events at The Guthrie Center, and along with it the ability to share all that our outstandng students are doing in their classes. Tuesday we were joined by the SBISD Partnership, Volunteer and Good Neighbors Boards for their regular meeting. About 35 guests took a tour of the campus and enjoyed a delicious breakfast prepared by our Culinary Arts students under escort by Diversified Interns Jamal Banan, Kenzie Cash, Tammy Chow, Christy Connelly, Steve Elsbury, Kat Flowers, Daniel Perez & Adam Rodriguez . Today we had the 26th class of Leadership Houston , a nonprofit group that supports the personal, organizational and civic development of leaders in the Houston area. Nearly 60 attendees began and ended their day here focused on education, and during the midday about 1/3 of them toured the school and dined to an exquisitely prepared luncheon by our culinary program.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/lh.jpg',
    source: 'web'
  },
  {
    id: '2008-01-22-3251',
    date: '2008-01-22',
    year: 2008,
    headline: 'Sundance One More Time',
    body: '2008-01-22 18:38:49\', \'Film students Chris Leyendecker, Hannah Smith, Cristian Alvarez, Kate Phillips, Leelund Kim, Owen Schwartzbard, Sean Giroir, Patrick Wylie and Sean Dodge are heading to the Sundance Film Festival with teachers Mike Radler and Patty Nilsson . This is the 5th year that Digital Filmmaking has been invited to the premiere event of Independent Films. They will be posting regular podcasts while in Utah, so check back here for the latest news.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/sff.jpg',
    source: 'web'
  },
  {
    id: '2008-01-24-3248',
    date: '2008-01-24',
    year: 2008,
    headline: 'Film Takes Place',
    body: '2008-01-24 18:30:28\', \'Movies, workshops, Q&A\\\'s, interviewing directors and actors - this is all part of the Sundance experience our DF2 students are in the middle of right now. The students tell it best, so click on the link below to view their podcasts, photos and more http://guthriecenter.springbranchisd.com/DF/DF/Welcome.html',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-01-26-3244',
    date: '2008-01-26',
    year: 2008,
    headline: 'Green Architects',
    body: '2008-01-26 18:27:39\', \'Nineteen students and parents participated in the annual Michael G. Meyers student design & scholarship competition workshop. This program gives motivated architecture students a chance to interact with others in the architecture profession and UH professors. Students this year are designing an environmentally safe Community Recycling and Reuse Center.\\n\\nEarlier this month our students were selected to be the first recipients of gently used architectural materials and resources from the " Pass It On " initiative from IIDA ( International Interior Design Association ). Thanks to director Monica Faulkner and director-elect Megan Ebert for delivering these valuable resources.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/arch1.jpg',
    source: 'web'
  },
  {
    id: '2008-01-31-3241',
    date: '2008-01-31',
    year: 2008,
    headline: 'Culture Shapers Results',
    body: '2008-01-31 17:55:49\', \'Tonight at the CultureShapers awards ceremony, our school and district were proudly represented by Cristian Alvarez, Sean Giroir, Chris Leyendecker, Kate Phillips & Hannah Smith who all placed inthe top 10. These creative and innovative filmmakers each walked away with their award, a cash prize and the satisfaction of being among the top selected of hundreds of entries.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-01-3239',
    date: '2008-02-01',
    year: 2008,
    headline: 'Tomball Prep',
    body: '2008-02-01 17:54:10\', \'Our NJROTC cadets were busy preparing for tomorrow\\\'s meet in Tomball. Check out the video below for a first hand look! Right below that, you can view exerpts from the Drill Teams and Color Guard performance at the Tomball Meet on Saturday. FLASH - Feb 6 - Our Cadets Placed at Tomball and have been invited to compete at State for NJROTC Area 10 - an awesome accomplishment!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-06-3235',
    date: '2008-02-06',
    year: 2008,
    headline: 'The Big 3-0',
    body: '2008-02-06 17:50:49\', \'The FFA Annual Show and Sale turns 30 this year with the Ag Adventure on Thursday, Feb. 7 from 9 AM to 2 PM. Children from many SBISD schools and the general public will attend this fun time that is planned, organized and put on by our FFA students. Featured exhibits include dairy, agricultural related goods,a petting zoo, horses, cattle and much more. Thursday afternoon from 5 to 7 the Livestock Show will feature Rabbits, Broilers, Turkeys, Heifers and Steers. The show will continue Friday afternoon at 5 for Swine, Lambs and Goats . On Sale Day (Saturday) , buyer registration begins at 11 AM with a free luncheon for registered buyers at 11:30 AM. A Silent Auction will be held from 11 AM - 2 PM followed by the Livestock and Horticulture Live Auction at 1 PM . All activities are open to the public.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/agadventure.jpg',
    source: 'web'
  },
  {
    id: '2008-02-07-3231',
    date: '2008-02-07',
    year: 2008,
    headline: 'Teacher Of The Year',
    body: '2008-02-07 17:49:24\', \'Congratulations to Steve Whitt who was elected as The Guthrie Center\\\'s Teacher of The Year ! Steve teaches Computer Technology and Baking & Catering classes, and was instrumental in pioneering a new program - Computer Networking- here almost ten years ago. He also worked with CJ Instructor Darrell Lewis to bring Computer Forensics to SBISD. Way to go Steve!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/steve.jpg',
    source: 'web'
  },
  {
    id: '2008-02-09-3229',
    date: '2008-02-09',
    year: 2008,
    headline: 'Lost and Found',
    body: '2008-02-09 17:47:18\', \'Eighteen NJROTC students and their instructors are spending the weekend camping at Lake Stubblefield and participating in their last Orienteering meet of the year. As of noon Saturday, most were still out on the course finding checkpoints and hopefully their way back to the campsite. Besides the meet, they are getting to experience outdoor life sans computers and TV. Quite refreshing! UPDATE - Hugh Rodroquez earned a 1st place medal for completing the Yellow Course while Cecillo and Marisol Aguilar both were awarded medals for their 3rd place finishes on the White Course. Congratulations all!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-10-3227',
    date: '2008-02-10',
    year: 2008,
    headline: '30th Annual FFA Show and Sale',
    body: '2008-02-10 17:44:44\', \'While the students and others are working hard to take down and clean up from the event today, they are doing so with the satisfaction of just completing the most successful Show and Sale in SBISD FFA history. Saturday\\\'s Live Auction brought in $200,900 - a huge increase over last year, and included a whopping $15,000 bid for the Grand Champion Steer. The Grand Champions are Bria Cardenas , Spring Woods HS (Goat), Cody Matecki, Spring Woods HS (Lamb), Cody Matecki , Spring Woods HS (Rabbits), Helen Herman , Stratford (Swine), Jake Garnier , Stratford (Turkey), Lesli Evans , Cornerstone (Steer), and Paige Pesl , Memorial HS (Broilers). A huge thanks to so many who put this great exhibition on, including our FFA Alumni Association , Advisors Laurie Ledbetter and Sheridan Clinkscales, and of course our awesome FFA students .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-14-3223',
    date: '2008-02-14',
    year: 2008,
    headline: 'Roses For Your Valentine',
    body: '2008-02-14 17:42:58\', \' Architectural CAD students are in the midst of their major fundraising event as they prepare for an onslought of last-minute Valentine\\\'s Day shoppers. You can purchase 1, 3 6 or a dozen roses in tissue or a clear plastic box. They will also be available for sale this afternoon after school in the library. Contact Sonia Greiner at 713.365.4610 for information.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/valentine.jpg',
    source: 'web'
  },
  {
    id: '2008-02-19-3221',
    date: '2008-02-19',
    year: 2008,
    headline: 'Community Tuesday',
    body: '2008-02-19 17:39:12\', \'Tonight is your chance to take a look behind the scenes and experience first-hand the fabulous real-world programs and educational opportunities offered at The Guthrie Center. Students and teachers will be available to personally offer advice on everything from picking out a digital camera to creating a home network. Demonstrations and projects by students will be available for viewing.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-20-3217',
    date: '2008-02-20',
    year: 2008,
    headline: 'Catch And Release',
    body: '2008-02-20 17:36:54\', \'FFA Chapter Vice President Paige Pesl is the first FFA member to participate in and catch at four calf scrambles. Starting with Harris County Fair in 2005, followed by Star of Texas in Austin in 2006, Houston Livestock Show & Rodeo last spring and a couple weeks ago her latest success at the San Antonio Expo. Students who catch calves earn a scramble certificate that they use to purchase a registered heifer, and agree to return to the show the next year and show their progress. Heifers are popular in FFA because they are breeding projects and are not used as market animals. Paige put her first two scramble certificates together to buy her first heifer, Cherokee, a Beefmaster. Last November, Cherokee gave birth to a heifer calf, Comanche - Paige\\\'s pride and joy! The HLSR scramble certificate went towards another heifer named Apache, a Gelbvieh. Paige started as an FFA Junior member in 6th grade and is now a junior at Memorial High School. Congratulations Paige!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/paige.jpg',
    source: 'web'
  },
  {
    id: '2008-02-21-3215',
    date: '2008-02-21',
    year: 2008,
    headline: 'In The News',
    body: '2008-02-21 17:35:31\', \'The other night at Community Tuesday, the Houston Chronicle sent out photographer Thomas Nguyen who visited all of our programs.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-02-25-3211',
    date: '2008-02-25',
    year: 2008,
    headline: 'Scholarships For SBISD Seniors',
    body: '2008-02-25 17:33:56\', \'The Annual Career & Technology Scholarship online application is now open for our seniors to apply for scholarships from various programs,departments and partnering schools. Watch for the postcard that is being mailed to 2,000 SBISD seniors throughout the district. The process is streamlined and it requires just one essay. You may apply to all the scholarships that pertain to you. http://catescholarships.springbranchisd.com/ \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/catescholarship.jpg',
    source: 'web'
  },
  {
    id: '2008-02-29-3207',
    date: '2008-02-29',
    year: 2008,
    headline: 'And The Winners Are...',
    body: '2008-02-29 17:30:43\', \'This morning students loaded up their tools for competition (computers, monitors, hair styling items, etc) and boarded the bus for the SkillsUSA events andreturned with some great results. 3D Animation Zoe Sommers & Lizzy Herrera took 1st Place in Team Skills, and Lizzy also had her project earn a 1st Place award. In the Cosmetology competition, Cindy Lopez won 1st Place in Nail Care while Bora Im earned 1st in Nail Art. Congratulations to these students and all of our other winners who competed against their peers from around the Houston area. On Saturday, our NJROTC Orienteering Team of Hugo and Elier Rodriguez finished 2nd among the many teams competing at Jones State Park in Conroe.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/skills1.jpg',
    source: 'web'
  },
  {
    id: '2008-03-03-3204',
    date: '2008-03-03',
    year: 2008,
    headline: 'A Crystal Moment',
    body: '2008-03-03 17:09:09\', \'On Friday night the Houston Chronicle and Spring Branch Education Foundation honored six Crystal Award winners from thousands nominated around the Houston area. Our own Patty Nilsson received this prestigous accolade from Continental Airlines CEO Larry Kellner , which you can view below. This was a night that also recognized Sonia Greiner and the 2007 SBISD Teachers of the Year.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-03-04-3200',
    date: '2008-03-04',
    year: 2008,
    headline: 'Distinguished Alumnus Returns',
    body: '2008-03-04 17:06:35\', \' C ulinary Arts students are learning today from former Chef Training graduate Landon Kinney about how their class really does prepare them for future success in the culinary and restaurant world. In 2002, Landon received a scholarship to The Art Institute of Houston and, after graduating from their program, continuted to work with the Pappas family in their restaurants. Landon is currently a manager at Pappadeaux on FM 1960. He attributes his strong interest in this business to the positive experiences he had in Chef Training and The Art Institute, but we know his success is due to his wisdom and intense work ethic. Thanks for sharing with our students, Landon!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/landon.jpg',
    source: 'web'
  },
  {
    id: '2008-03-07-3196',
    date: '2008-03-07',
    year: 2008,
    headline: 'College Road Trip, DI Style',
    body: '2008-03-07 17:04:34\', \'It\\\'s only a coincidence that many of our Diversified Interns are in San Antonio and San Marcos this weekend visiting the campuses of Texas State and UTSA, and not a reinactment of the Martin Lawrence\\\'s movie College Road Trip debuting today. Coordinator Tina Miller and her all-star seniors have two study trips a year where they explore the world of post-secondary education in Texas. Thanks to Brittany Laviage for sending this on-location photo at Texas State University.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/di.jpg',
    source: 'web'
  },
  {
    id: '2008-03-10-3194',
    date: '2008-03-10',
    year: 2008,
    headline: 'B.O.B. Round 3',
    body: '2008-03-10 16:03:21\', \'The Third Annual Battle of the Bands will be held here on Friday, April 11th. If you know of or are in a band and want to be considered for the event, email Mike Radler or Patty Nilsson for details. Demo tracks need to be submitted by March 14.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-03-14-3190',
    date: '2008-03-14',
    year: 2008,
    headline: 'Of All The Trees, In All The Schools, In All The Districts, She Nests Right Here',
    body: '2008-03-14 16:01:15\', \'Every year The Guthrie Center trees are home to a variety of nesting birds - mostly grackles and doves . While the former tends to build their nests in our tall trees (and are very protective of their territory), the doves seem to find areas closer to the ground. A few years ago a pair tried to build their nest in one of our water fountains; this year they are in the potted palm on our deck.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/dove.jpg',
    source: 'web'
  },
  {
    id: '2008-03-25-3186',
    date: '2008-03-25',
    year: 2008,
    headline: 'Diversified Intern On The Job',
    body: '2008-03-25 15:59:03\', \'Intern Jenna Diamond plans to major in Equine Science when she graduates from Memorial this year. Her DI experience has her working at Cielito Ranch in the Brazos River Valley with mentor Judith Shaper . We are very appreciative of our intern partners for providing Jenna and others experience in their chosen field of study.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/equine.jpg',
    source: 'web'
  },
  {
    id: '2008-03-26-3182',
    date: '2008-03-26',
    year: 2008,
    headline: 'Bringing On The HEAT',
    body: '2008-03-26 15:56:06\', \' Hotel Management students competed in the HEAT Hospitality compeittion today at the Berry Center. All walked away winners, including Myra Gonzalez and Gabriella Herrara for their skillful 28 minute Fruit Carvings in the Garde Mangier event; Justine Jacobson for Plate Decorating; Nadine Elkhouri and Irene Ortega for their beautiful fresh Floral Centerpiece; Rene Cardenas in Marketing for his brochure; Nadine and Rene for Banquet set-up; and Jimmy Burge, Matt Moffatt, Travis Karlskind and Rene in the Luggage Relay and Waiters Tray. Thanks to Lorraine Hamilton for sponsoring these students and guiding them to success!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/heat.jpg',
    source: 'web'
  },
  {
    id: '2008-03-27-3180',
    date: '2008-03-27',
    year: 2008,
    headline: 'End of A Visit',
    body: '2008-03-27 15:52:11\', \'Six students and a teacher from the American Farm School in Thessaloniki, Greece spent the end of their 10 day USA visit with us today. We were honored to host Olga Fotiou, Helen Boutou, Fani Tasi, Kyros Sidiropoulos, Vaggelis Katsodonis, Stelios Balasis and teacher George Stambolides and show them the fine programs our students have to choose from in elective classes. Their school has an agricultural emphasis and is a prestigious school in the country of Greece. Someday we hope to send a delegation of our students to visit them and learn about the customs and way of life of teens in that part of the world.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-03-3178',
    date: '2008-04-03',
    year: 2008,
    headline: '3D At State',
    body: '2008-04-03 15:50:54\', \' Zoe Sommers and Lizzy Herrera are in Corpus Christi with instructor Sean Bellinger for the SkillsUSA State competition in 3D Animation. We wish them all the best and hope to feature some of their creations right here when they return this weekend.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-04-3176',
    date: '2008-04-04',
    year: 2008,
    headline: 'Why This School You Ask?',
    body: '2008-04-04 15:49:13\', \'We were fortunate to receive an invitation to address the MHS Hispanic Parents Forum last night to talk about the great offerings at our school. Many of us were on hand, but the highlight was our NJROTC Cadet leaders Hugo Rodriguez and Gabriella Villalobos talking and performing for the parents. Although I don\\\'t have a photo from the event, you can view the information presented at http://guthriecenter.springbranchisd.com/whyguthrie',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-05-3172',
    date: '2008-04-05',
    year: 2008,
    headline: 'Locked In',
    body: '2008-04-05 15:46:54\', \'S onia Greiner\\\'s Architectural CAD students numbered over 30 at one\\n\\npoint last night during their annual lock-in. They are working on their\\n\\n Michael G. Meyers Community Recycling and Reuse Center \\n\\ncompetition projects since it\\\'s only a week until the deadline, so the heat\\\'s on. Thanks to Adam Greiner for giving up his Friday night to help chaperone.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/small-group.jpg',
    source: 'web'
  },
  {
    id: '2008-04-10-3168',
    date: '2008-04-10',
    year: 2008,
    headline: 'Swinging It',
    body: '2008-04-10 15:44:01\', \'The Houston HepCats entertained attendees at the Spring Branch Educational Support Association’s Bosses\\\' Night at Westchester. The HepCats are a group of very talented dancers dedicated to preserving swing dancing in the area. We were also treated to a dance performance by SWM teacher Shelly Foster and Mark Doriski , all in honor of Superintendent Duncan Klussmann being named "Boss of the Year."\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/hepcats.jpg',
    source: 'web'
  },
  {
    id: '2008-04-14-3166',
    date: '2008-04-14',
    year: 2008,
    headline: 'Lone Star Emmy\'s',
    body: '2008-04-14 15:41:58\', \'Two Digital Film students received an Honorable Mention for their entry in this Texas chapter of the national Emmy Awards. Hunter Coleman was acknowledged for his Documentary film and Owen Schwartzbard for his PSA. Both will be recognized along with many more at the CATE Awards Night on April 24th. You can view their films and more on the DF site at: http://guthriecenter.springbranchisd.com/DF/DF/Welcome.html',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-15-3161',
    date: '2008-04-15',
    year: 2008,
    headline: 'Finishing Touches',
    body: '2008-04-15 15:40:14\', \'As taxpayers finish up their last minute filings, our Architectural CA D students are putting last minute touches on their entries in the AIA\\\'s Michael G. Meyers Design Competition. Sonia Greiner\\\' s students worked all weekend and after school, emulating how it\\\'s done studying Architecture at a University and in the profession.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2008/04/arch.jpg',
    source: 'web'
  },
  {
    id: '2008-04-16-3159',
    date: '2008-04-16',
    year: 2008,
    headline: 'Career Day 2008',
    body: '2008-04-16 15:38:35\', \'Thanks to over 50 guest speakers donating their time and experiences, our students were able to learn firsthand about a myriad of careers from Airline Pilots to Wildlife and Recreation Wardens. Every year, our counselor Beverly Litton arranges for this insightful approach to career awareness for our students. Thanks to our generous guests who gave their precious time, and to our awesome staff for making it another outstanding Career Day!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-17-3157',
    date: '2008-04-17',
    year: 2008,
    headline: 'Scholarship Winners Announced',
    body: '2008-04-17 15:33:14\', \'Our annual Career & Technology Scholarships applications have been reviewed by the judges and the following students will be honored at the Awards Night on April 24th in the Guthrie theater. Congratulations to them and thank you to our evaluation committee who gave up their time to help choose these winners.\\n\\n $1,000 Exemplary Student \\n\\n Travis Evans Erin Jackson Sophie Romay \\n\\n $1,000 Houston Community College \\n\\n Hallie Schaper \\n\\n $1,000 Academy of Finance \\n\\n Jonathan Evans Juan Alatorre Gabriela HerreraAlyssa Herring Carolina Silva Lindsey Weitzel \\n\\n $5,000 The Art Institute of Houston \\n\\n Ruben Salas \\n\\n $500 FFA Blue & Gold \\n\\n Mary Herman Emily Minnis',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-18-3149',
    date: '2008-04-18',
    year: 2008,
    headline: 'Breakfast Anyone?',
    body: '2008-04-18 15:22:41\', \' Intro to Culinary students recently discovered what it takes to prepare and run a breakfast restaurant as one of their projects. Each class was divided into two groups with a manager and employees, and participated in creating and printing menus and practicing at the various stations required to run a restaurant. On opening day each group served fellow students, parents, teachers and administrators as they gained valuable knowledge and experience in both front and back of the house service. Pia Petry , a foreign exchange student from Germany, was the manager of a very successful group; she excelled in her ability to unite, organize and motivate her team of skilled workers. Pia said this was an experience she will never forget and will share with her family and friends when she returns to Germany.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/pia.jpg',
    source: 'web'
  },
  {
    id: '2008-04-18-3155',
    date: '2008-04-18',
    year: 2008,
    headline: 'Working Away With TEA',
    body: '2008-04-18 15:28:19\', \'This week Career & Technology educators, business leaders and college partners are working with TEA in Austin to review the current courses in CTE and start an overhaul of curriculum for these programs in Texas. Spring Branch ISD is fortunate to be represented by four teachers on these statewide committees - Patty Nilsson & Sonia Greiner from Guthrie and Shelly Tornquist & Emily Gresham from Memorial.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-04-19-3140',
    date: '2008-04-19',
    year: 2008,
    headline: 'Big Assist',
    body: '2008-04-19 20:50:05\', \'Twice a year, Rebuilding Together Houston coordinates teams to work on home repair projects to help those that are disadvantaged either physically or financially or both make repairs to their home.Saturday, members of Architecture\\\'s OSA (Organization of Student Architects ) along with Tina Miller and Adam Greiner joined forces with the Young Architects of Houston to volunteer their time and energy to help.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/cadassist1.jpg',
    source: 'web'
  },
  {
    id: '2008-04-25-3135',
    date: '2008-04-25',
    year: 2008,
    headline: 'The $30,000 Giveaway',
    body: '2008-04-25 20:47:31\', \'Last night we celebrated the success of many of our students at the annual CATE Awards and Scholarship Event . In all we recognized ourstudents and teachers for striving to achieve excellence; presented nearly $30,000 in various scholarships to 21 students; paid tribute to Northbrook\\\'s Gay Sabom as she retires after 32 years in the district; and revealed our CATE Teacher of the Year, Steve Whitt. Thanks to everyone that attended and helped to present, and to our staff and students for preparing and presenting great food, fellowship and more. You can view photos of the night and the program by clicking on the links below.\\n\\n VIEW PHOTOS VIEW PROGRAM \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2008/04/awards.jpg',
    source: 'web'
  },
  {
    id: '2008-04-28-3131',
    date: '2008-04-28',
    year: 2008,
    headline: 'One More Time',
    body: '2008-04-28 20:43:36\', \'Annually during the spring semester, our Architecture students enter the Michael G. Meyers high school competition through the Houston chapter of the American Institute of Architects. Most years, our students bring home at least half of the awards, and this year is no exception, as we took 5 out of the 8 top spots. Congratulations to Sonia Greiner’s students below and to all of the 50+ students who worked on and submitted their drawings, models and plans. First place individual: Beau Braddock (MHS) 3rd place individual: Andre Braschayko (SHS) Honorable Mention individual: Sebastial Alcarco n (SHS) First place group: Danny Salguero, Oscar Munoz and Miguesl Batalla (all NHS) Honorable mention group: Luis Rodruguez (NHS) and Flor Lopez (SWHS) These projects are major time and talent investments by our students (see Apr 15 and Apr 5 news). All of the entries from our students are on display in our library through Wed 5/7. You are invited to come out and see these great designs and the fruits of their labor anytime during their exhibition.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/mgm1.jpg',
    source: 'web'
  },
  {
    id: '2008-04-29-3126',
    date: '2008-04-29',
    year: 2008,
    headline: 'This Really Will Save You Money',
    body: '2008-04-29 20:38:20\', \'Last night the Digital Filmmaking and Commercial Photography students held a special Exhibition and Open House for industry professionals, parents and advisors at the Altharetta Yeargin Art Museum. It featured a collection of student-produced documentaries, Public Service Announcements, short films, and a creative collection of photographic artwork about global warming and energy conservation. " Take 10 For Energy! " was made possible through a generous A+ For Energy Grant from BP who each year donate $1 million to teachers in Texas interested in educating students about energy-related issues and concerns.The exhibition will be open to the public through May 3rd.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/take10.jpg',
    source: 'web'
  },
  {
    id: '2008-05-02-3124',
    date: '2008-05-02',
    year: 2008,
    headline: 'Many Records',
    body: '2008-05-02 20:34:30\', \'The Guthrie Battle of the Bands set a number of records tonight, including number of bands (9), attendance (estimated over 400) and fastest cleanup. Thanks to the Film & Photo Club and teachers Nilsson and Radler , along with the assistance from numerous Guthrie folks, many parents & student volunteers. 94.5 The Buzz DJ Davey Jones was on hand to announce the winning band - Merlins Beard. Also playing tonight were The LP\\\'s, Wha?, Roto, Swans Will Attack, Skyscrapers Walk Among Us, A Shot For Favor, Aftermath, and The Sounds of Mimes.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-05-05-3122',
    date: '2008-05-05',
    year: 2008,
    headline: 'Continuing the Tradition',
    body: '2008-05-05 20:27:35\', \'The NJROTC Cadets learned this morning that the fruits of their hard work and efforts had a payout. SBISD NJROTC is again a " Distinguished Unit with Academic Honors ." Our students are one of only 11 that earned this designation out of all the Navy units in Texas, Colorado, Kansas, Oklahoma and New Mexico. Congratulations Col. Sluis & Master Chief Heuser for guiding our cadets, led by CO Hugo Rodriguez, XO Gabriela Villalobos, MCPO Esmeralda Mendoza, OO Cindy Contreras, AO Jorge Hurtado, SO Esther Vasquez and POA Angie Quintanilla, to once again bringing this prestigious commendation to Spring Branch ISD.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-05-06-3120',
    date: '2008-05-06',
    year: 2008,
    headline: 'New FFA Officers Installed',
    body: '2008-05-06 20:24:58\', \'The Annual FFA Banquet was held tonight where about 150 students, parents and guests were treated to great food by Taqueria Cancun & amazing desserts created by Alumni Association Board Member and parent Sonya Garnier , while being entertained by some talented FFA members. Students received awards, scholarships, and the new officers were installed. We welcome our new team of Hannah Bass (President), Jake Garnier (VP), Lawton Duncan (Secretary), Lauren Arthur (Treasurer), Emily Jernigan (Reporter) and Amy Higginbotham (Sentinel), and wish our outgoing leaders the best.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-05-09-3115',
    date: '2008-05-09',
    year: 2008,
    headline: 'Architecture Celebration',
    body: '2008-05-09 20:17:38\', \'S onia Greiner\\\'s Architectural CAD classes had their annual awards banquet last night, which began with a delicious meal exquisitely prepared by, of course, our Culinary students. The presentations and recognition followed where many of the students received their awards and certificates from competitions and community service throughout the year to the delight of their family and friends. The CAD scholarships were awarded in class today.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/archwinners.jpg',
    source: 'web'
  },
  {
    id: '2008-05-12-3102',
    date: '2008-05-12',
    year: 2008,
    headline: 'Winners All Around',
    body: '2008-05-12 20:11:27\', \'Most of the classes at Guthrie are part of Career & Technology Education. Around the district, there are many more outstanding CTE classes whose students also excel and win awards. Recently we learned of two highly successful accomplishments.\\n\\n Jim Kirkwood at SWHS started a Rocketry class this year based on the successful model developed in Fredericksburg a dozen years ago. The goal for the students in this hybrid CTE/Science class is to designand construct a rocket that will successfully launch and go in the direction it is intended to go. A couple weekends ago they did and are included as one of the schools in this video featured on NBC News . Congratulations to Jim and his launch team of Raul Tenorio, Juan Perez, Sean Curcio, Joseph Kang, Dylan Gray, Charles Laughlin and Ryan Gisler . http://www.msnbc.msn.com/id/3032619/vp/24430144#24430144 \\n \\n \\n\\n Business Professionals of America (BPA) students from Memorial and Stratford traveled to Reno last weekend with advisor Karen Summers to compete in Nationals. Seniors, Michelle Mandell, Eric Johnson, Ben Halliday and Steven Pham from Stratford High School competed in the Small Business Management Team Event, freshman, Anne Alexander also from Stratford competed in Entrepreneurship and senior, Young Kim from Memorial competed in Fundamentals of Accounting. The Small Business Management Team took 2nd in the nation for their project. They are all members of the Stratford Academy of Finance Program. Young Kim placed 6th in Fundamentals of Accounting.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2008/05/rocketkids.jpg',
    source: 'web'
  },
  {
    id: '2008-05-14-3099',
    date: '2008-05-14',
    year: 2008,
    headline: 'Film Premiere',
    body: '2008-05-14 20:07:18\', \'Last evening Digital Filmmakin g students and guests enjoyed the world premiere of many of their projects at the Student Film Festival in the Guthrie Theater. Sponsored by the Film & Photo Club , this free event featured many entertaining and enlightening shorts from our talented prodigies.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-05-15-3095',
    date: '2008-05-15',
    year: 2008,
    headline: 'Kicking Tails and Taking Names',
    body: '2008-05-15 20:01:49\', \'That was the theme of the 6th Annual FFA Crawfish Boil held this afternoon at the Ag Science Center. Our new FFA officers organized the event, along with a lot of help from parents, friends and teachers Laurie Ledbetter & Sheridan Clinkscales . Over 100 students and guests enjoyed games, fellowship, great food and, of course, the obligatory crawfish eating contest!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ffacrawfish1.jpg',
    source: 'web'
  },
  {
    id: '2008-05-16-3091',
    date: '2008-05-16',
    year: 2008,
    headline: 'It\'s Ortiz Time',
    body: '2008-05-16 19:59:58\', \'Digital Film student alumni Michael Ortiz (\\\'04) takes the walk earning his Bachelors of Science in Radio-Television-Film at the University of Texas. His next stop is Hollywood. Congratulations Michael!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ortiz.jpg',
    source: 'web'
  },
  {
    id: '2008-05-22-3087',
    date: '2008-05-22',
    year: 2008,
    headline: 'A Star In Many Places',
    body: '2008-05-22 19:57:16\', \'Congratulations to Diversified Internship student MacKenzie Cash who received the Stratford High School Principal\\\'s Award for her outstanding leadership, character and achievement. SHS junior principal Laura Ragsdale pointed out much Kenzie had matured, blossomed and grown as a result of her internship in the SBISD Community Relations Department this year. The DI program works with upper-level students to gain the maximum amount of technical learning possible as a paid intern in their chosen field of study, all while in high school.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/kenzie.jpg',
    source: 'web'
  },
  {
    id: '2008-05-30-3082',
    date: '2008-05-30',
    year: 2008,
    headline: 'And So It Goes',
    body: '2008-05-30 19:32:08\', \'Our annual year-end crawfish boil allows us to take time for fellowship and farewells. This year we say goodbye to teachers Larry Haug and Laurie Ledbetter. We wish them all the best in their new endeavors, and hope you all have a safe and stressless summer.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/byenow.jpg',
    source: 'web'
  },
  {
    id: '2008-06-06-3077',
    date: '2008-06-06',
    year: 2008,
    headline: 'Summer Sensations',
    body: '2008-06-06 19:25:07\', \'This week students attending the annual Summer Career Carnival had a chance to tour the Omni Hotel , cook with the Culinary Arts students, visit our Ag Science Center and take a tour of Sam Houston State University \\\'s many colleges. Next week they will visit Minute Maid Park , tour the Houston SPCA , visit the home office of Kirksey Architects , picnic at the Galleria and culminate with a trip to and tour of many exciting areas in Austin . The Career Carnival is organized by our counselor Beverly Litton and is a joint effort with Houston Community College . While it\\\'s too late to get in this year\\\'s action, check again next spring for the 2009 Summer Career Carnival.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/SHSU-Mammoth-SH-Statue4-Group1.jpg',
    source: 'web'
  },
  {
    id: '2008-06-23-3072',
    date: '2008-06-23',
    year: 2008,
    headline: 'Automotive Excellence',
    body: '2008-06-23 19:21:52\', \'Auto Tech teacher Craig Clark was presented today with a plaque and letter of acknowledgement by the United States Air Force Education and Training Command in honor of being named Outstanding Technology Teacher for 2007-2008. Every year the USAF bestows this on a handful of educators around the USA. Congratulations Craig!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2008/06/craig.jpg',
    source: 'web'
  },
  {
    id: '2008-06-24-3068',
    date: '2008-06-24',
    year: 2008,
    headline: 'NJROTC Leadership Continues',
    body: '2008-06-24 19:14:52\', \'Congratulations to NJROTC Cadets attending the Beaumont Leadership Academy and Basic Leadership Training Camp the past two weeks. The Number One top overall cadet at the Leadership Academy (out of 55 participants) was Chief Petty Officer Jonathan Shumate from Spring Woods. He personally excelled in academics, physical fitness, personnel inspection, unit drill and demonstrated strong leadership qualities. Other unit members honored Commanding Officer Jordana Reyes; Maureen Gonzales and John Menicke . The top female position (out of 16 schools) at the Basic Leadership Training Camp was Ashley Ruiz of Northbrook. She too excelled in individual leadership traits that included academics, physical fitness, personnel inspection, unit drill and demonstrated leadership qualities. Luis Duran of Spring Woods earned top physical fitness honors for doing 118 sit-ups in two minutes. Other cadets honored include Marisol Aguilar, Cecilio Aguilar and Elier Rodriquez .\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/shumate.jpg',
    source: 'web'
  },
  {
    id: '2008-07-15-3064',
    date: '2008-07-15',
    year: 2008,
    headline: 'Featured Article',
    body: '2008-07-15 19:10:50\', \' Texas School Business Magazine has been independently publishing the positive news of public education in Texas for over fifty years. This month\\\'s issue features how Career and Technical Education classes statewide prepare students for post-secondary success. Our school is mentioned in the article along with photos of our students at work. Thanks to reporter Raven Hill and editor Katie Ford for recognizing how important CTE programs are in readying our teens for their chosen career.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/tsb.jpg',
    source: 'web'
  },
  {
    id: '2008-08-18-3059',
    date: '2008-08-18',
    year: 2008,
    headline: 'A Round of Applause',
    body: '2008-08-18 19:06:35\', \'As our awesome staff returns for the start of 0809, we enjoyed a morning in the coliseum at the Convocation. In addition to wisdom imparted by our superintendent Duncan Klussmann , we were treated to inspiring speakers Clay Roberts talking about the 40 Assets and by Emmanuel Lopez , award-winning former CTE and Northbrook student.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/convocation.jpg',
    source: 'web'
  },
  {
    id: '2008-08-26-3052',
    date: '2008-08-26',
    year: 2008,
    headline: 'Back With Passion',
    body: '2008-08-26 19:01:23\', \'It\\\'s great to be back for another year! We are starting off with record enrollment of interested and excited students throughout our school and remote locations. Our students were met with smiles, new computers and equipment in many areas and a Culinary lab makeover. They also had the benefit of meeting our two newest teachers, Nikki Reed in Ag Science and Erin Land in Culinary Arts!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/EXCELLENCE.jpg',
    source: 'web'
  },
  {
    id: '2008-09-04-3050',
    date: '2008-09-04',
    year: 2008,
    headline: 'Upcoming Events',
    body: '2008-09-04 19:00:12\', \' Community Tuesday returns on October 28th ! It\\\'s your chance to get a sample of what our students learn and a view of their talents. Join us from 5 to 7:30 for an enlightening and eventful evening.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-09-06-3047',
    date: '2008-09-06',
    year: 2008,
    headline: 'Busy Saturday',
    body: '2008-09-06 18:57:31\', \'Today seemed like a regular school day with all of the activity around campus. NJROTC held a very successful fundraiser Car Wash, Architecture students held a "Purge Party", FFA students and families enjoyed their Kick Off Picnic with delicious boxed lunches made by Culinary Arts students, and the HVAC men were here trying to keep our facilities a bit more comfortable. I am always humbled by our students and staff who give up their free time to stay involved, spread the good word and have some fun!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-09-09-3042',
    date: '2008-09-09',
    year: 2008,
    headline: 'Red Carpet Treatment',
    body: '2008-09-09 18:53:29\', \'Superintendent Duncan Klussmann hosted over 50 Spring Branch Realtors today at The Guthrie Center. A superb gourmet meal of Grilled Beef Tenderloin, Prosciutto Wrapped Asparagus and Garlic Duchesse Potatoes was enjoyed by our area real estate experts as they were briefed by Duncan on the state of the district and the state of school financing in Texas. Thanks to our Culinary Arts students and teachers Jennifer Cardenas and Erin Land for pulling off an exemplary event with only 9 days of school under their belt!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/realtors.jpg',
    source: 'web'
  },
  {
    id: '2008-09-11-3039',
    date: '2008-09-11',
    year: 2008,
    headline: 'We Remember',
    body: '2008-09-11 18:45:36\', \'Today, as we prepare for the arrival of Hurricane Ike, we also take time to remember our fallen heros and the victims of September 11, 2001. Our students observed an extended moment of silence as our NJROTC Color Guard raised and lowered the flags to half-staff in honor of Patriot\\\'s Day.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-09-16-3034',
    date: '2008-09-16',
    year: 2008,
    headline: 'Spared',
    body: '2008-09-16 18:37:52\', \'While Hurricane Ike came and went, he spared our school from any major damage. A little water here and there and a lot of debris, which was cleaned up today by our custodial staff and many of our NJROTC Cadets who donated their time and talent getting us ready to serve! Thanks everyone for your efforts.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/9111.jpg',
    source: 'web'
  },
  {
    id: '2008-09-26-3029',
    date: '2008-09-26',
    year: 2008,
    headline: 'Quiet On The Set',
    body: '2008-09-26 18:31:24\', \'2nd year Digital Film students shoot an interview in our courtyard today while our student body enjoyed popcorn courtesy of our great staff. While many students and staff still do not have lights at home, you wouldn\\\'t know it by their focus and intensity at Guthrie.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/df.jpg',
    source: 'web'
  },
  {
    id: '2008-09-27-3025',
    date: '2008-09-27',
    year: 2008,
    headline: '3"s The Number',
    body: '2008-09-27 18:26:43\', \' NJROTC Orienteering and Physical Fitness Teams competed at their first meet today at Prairie View A&M. Congratulations to the team for taking 3rd place overall and to Crystal Martinez for taking 3rd in the Flex Arm Hang and Situps categories.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-10-08-3019',
    date: '2008-10-08',
    year: 2008,
    headline: 'Charting The Future of CTE',
    body: '2008-10-08 18:21:14\', \'Our district is fortunate to have strong representation on the statewide CTE Curriculum Writing Teams in Austin. These groups are updating and developing new classes that will begin with the next school year. Patty Nilsson (Filmmaking) and Sonia Greiner (Architecture) have given up many weekends since April doing this, along with Shelly Tornquist and Emily Gresham (Engineering from MHS). Today they were joined in Austin by Alan Yip Choy (3D Animation), Darrell Lewis (Criminal Justice), Estie Cuellar and Craig Adams (Business from SWHS and NHS) as part of the Vertical Writing Teams who took the current plans to consult with colleges and the business/industry partners, make adjustments and give themback to the writing teams for review. Thanks to all of our Guthrie and SBISD contributors to this critical process.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/cwt1.jpg',
    source: 'web'
  },
  {
    id: '2008-10-09-3015',
    date: '2008-10-09',
    year: 2008,
    headline: 'Creating Delicacies',
    body: '2008-10-09 18:18:48\', \'Twenty five teachers of the Houston area Delta Kappa Gamma teaching sorority attended the second annual Culinary Cooking Class sponsored by Culinary Arts. This year’s challenge was an Iron Chef type competition, where the ladies were presented with gourmet ingredients, prepared dough and an hour to put together the most creative, attractive and flavorful pizza possible. Chef Training students were on hand to lend their knowledge and assistance. The teams used their skill, unity, and creativity to create amazing and tasty pizzas. The winning team ” Madote ” and the others left inspired and ready for next year\\\'s competition.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/keltakappa.jpg',
    source: 'web'
  },
  {
    id: '2008-10-13-3009',
    date: '2008-10-13',
    year: 2008,
    headline: 'Hail To The Queen',
    body: '2008-10-13 18:13:05\', \'The Youth Expo of Harris County kicked off its first season Sunday at the Humble Civic Center. The purpose of this scholarship andtalent event was to select individuals who will represent the Youth Expo with outstanding attributes of personality, integrity, intelligence, beauty, and grace. We had 8 FFA members participate in the events, including Amy Higginbotham who placed 2nd and Bria Cardenas who came in 3rd. The Queen\\\'s contestants included Bria Cardenas (1st runner up). Janie Garnier, Hannah Bass, Danielle Drake, Emily Jernigan (3rd runner up) and Paige Pesl. Ashley Davis-Nelson , who won Youth Expo Sweetheart by raising over $1100 herself also made history by being crowned the first ever Youth Expo of Harris County Queen! Congratulations to all of our participants! For additional details and photos, visit the Ag Science Social Networking website - see link at the bottom of this page. UPDATE: On Saturday, October 18th, Ashley was named Queen of the Harris County Fair as well! \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/Expo-Pageant-022.jpg',
    source: 'web'
  },
  {
    id: '2008-10-14-3013',
    date: '2008-10-14',
    year: 2008,
    headline: 'PDAP at Memorial HS',
    body: '2008-10-14 18:16:46\', \'KHOU TV\\\'s Deborah Duncan is joining with PDAP at Memorial High School on Tuesday, October 21st at 7PM to host their "Teens and Risky Behavior" seminar. PDAP (Palmer Drug Abuse Program) , a free,drug and alcohol recovery service has been serving the youth of Houston since 1971.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-10-18-3007',
    date: '2008-10-18',
    year: 2008,
    headline: 'Weekend of Helping Hands',
    body: '2008-10-18 18:11:17\', \' Architecture\\\'s student organization OSA volunteered Saturday with Rebuilding Together Houston to brighten the life of an older Houstonian who\\\'s home was in need of repair. NJROTC students had a lock-in Friday and then were in the Conroe area at the Memory Walk to End Alzheimer\\\'s at Lone Star College. They helped man the stations for those raising money for this affliction that could affect many of us someday.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-10-20-3325',
    date: '2008-10-20',
    year: 2008,
    headline: 'Helping Hands',
    body: '2008-10-20 18:34:26\', \'The past two weekends found Architecture students working with Rebuilding Together Houston, an organization that provides house repair services for needy homeowners. Students not only provided hard labor, but also had the chance to network with professional architectural interns (completing required community service before taking their licensing exam). Sonia Greiner\\\'s students who participated included Adam Rodriguez, Aiza Garcia, Alvaro Mendez, Ariel Contreras, Beau Braddock, Berenice Hernandez, Dorian Rodriguez, Esmeralda Mendoza, Grayson Hastings, Helmer Murillo, Ignacio Elizondo, Jamal Banan, Jonathan Cooper, Juan Garcia, Kerry Carrol, Melissa Banda, Raul Soto, Sarah Requa, Scott Schroeder, Will Schroeder and Zach Goodwine. Trudy LeBlanc and Alex Guajardo assisted with chaperoning.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/rth.jpg',
    source: 'web'
  },
  {
    id: '2008-10-24-3003',
    date: '2008-10-24',
    year: 2008,
    headline: 'What To Do This Weekend',
    body: '2008-10-24 18:07:50\', \'You could go to the ASES Houston Solar Tour on Saturday where our Digital Film & Photography students have an exibition; or you could drive to Beaumont where our NJROTC cadets are competing in a Drill Meet at Westbrook HS; or help out with the OSA project below; or attend the Harris County Fair with some of our FFA students; or fly up to Indy where are more of our FFA students are at the National Convention . Or you could just enjoy the beautiful weather we anticipate having.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/rebuildCAD.jpg',
    source: 'web'
  },
  {
    id: '2008-10-27-3001',
    date: '2008-10-27',
    year: 2008,
    headline: 'NJROTC Meet Results',
    body: '2008-10-27 18:06:23\', \' NJROTC cadets had a successful innaugural meet on Saturday at West Brook HS in Beaumont. Overall the unit took 3rd place, with individual and team performances as follows: Armed Basic Drill 2nd Place, Armed Inspection 3rd Place, Unarmed Inspection 2nd Place, Color Guard 3rd Place, Male Athletics 1st Place, Female Athletics 2nd Place, Top Female Sit-ups earned by Monica Apolinar , and Top Male Sit- ups awarded to Cameron Sims .\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-10-28-2997',
    date: '2008-10-28',
    year: 2008,
    headline: 'Shining Brightly In The Night',
    body: '2008-10-28 17:59:40\', \'Our first Community Tuesday of the year was a great success and was one of the best attended in recent memory. The parents, family and friends of our students were captivated seeing what the students do and the various offerings we have at Guthrie. Thanks to everyone who contributed to making it a success, and to those who took their time to come out and visi\\n\\n \\n\\nt.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ct.jpg',
    source: 'web'
  },
  {
    id: '2008-10-30-2993',
    date: '2008-10-30',
    year: 2008,
    headline: 'We Are Good Neighbors',
    body: '2008-10-30 17:56:31\', \'Well, we were recognized last week as a SBISD Good Neighbor at the 2008 Annual Good Neighbor Awards Night at The Omni Hotel Westside . Students Jessica Grenader photographed the event while Patrick Lane and Owen Schwartzbard produced and shot video, all of which can be viewed here on the DF website. We also nominated many of our outstanding business partners as Good Neighbors, including AR Group, Cakes & Culinary, Colina\\\'s Italina Kitchen, College Ball or Bust, Cooper, Sprague, Jackson and Boanerges, PC, Crossroad Animal Clinic, Devry University, Fuddruckers, Henderson and Rogers, Inc, Houston Junior Forum, Hungry\\\'s Cafe, Kirksey Architects, Pieper-Houston Electric, Riverwood Building Company, Starbucks Katy Fwy, Studio Works, Terra Nova Landscaping, The Arbor School, The Art Institute of Houston, The Red Balloon Cafe, The Travel Desk and Village Table. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/gn.jpg',
    source: 'web'
  },
  {
    id: '2008-11-04-2989',
    date: '2008-11-04',
    year: 2008,
    headline: 'Vote: Cupcakes or Cookies',
    body: '2008-11-04 18:54:08\', \'The Film and Photo Club is sponsoring a bake sale today in to help everyone that needs an extra dose of sugar while standing in line to vote. Jessee Froelich, Elan Cardona, Shannon Sewell and Kate Owen are here waiting to serve your sweet tooth.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/bakesale.jpg',
    source: 'web'
  },
  {
    id: '2008-11-05-2986',
    date: '2008-11-05',
    year: 2008,
    headline: 'On The Horizon',
    body: '2008-11-05 18:50:39\', \'This weekend our NJROTC teams will compete in Seguin; we will host the Spring Woods Middle 8th grade class on Nov 12th; on November 22 our Agricultural Science FFA will sponsor a petting zoo from 10AM - 4PM at the Pilgrim Festival being held at 10840 Beinhorn.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-08-3317',
    date: '2008-11-08',
    year: 2008,
    headline: 'Animal Rescue Team',
    body: '2008-11-08 19:30:41\', \'When a handful of chickens were found in Stratford High running the hallways, their staff tried to calm them down by tying their legs together. Fortunately, someone had the intuitiveness to contact our Ag Science program to find them a home and free them from bondage. The flapping, feathered fowls zip-ties were removed, and they now happily reside at the Ag Science Center on Brittmoore, eating bugs and bugging the animals.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/08/chicken.jpg',
    source: 'web'
  },
  {
    id: '2008-11-10-2980',
    date: '2008-11-10',
    year: 2008,
    headline: 'Donating Is A Click Away',
    body: '2008-11-10 18:46:20\', \'Here\\\'s an easy way to help the National FFA . Campbell Soups will donate $1 (up to $250,000) for every click of the red barn on its website to the FFA scholarship and education programs. You can do this once a day, so please click and tell. Our Ag Science program thanks you! http://www.helpgrowyoursoup.com/supporting.aspx \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-11-2978',
    date: '2008-11-11',
    year: 2008,
    headline: 'What Is That',
    body: '2008-11-11 18:44:32\', \'Tonight as our dilligent FFA Alumni Association parents met at the Ag Science Center to discuss details and upcoming events, the FFA student chapter met across the hall handling their business. The session I caught was unique - the members grouped into 5 teams with a common goal of creating a farm animal out of chewed gum. They had a lot of fun and the winning creations vaguely resembled a cat and a heifer.\\n\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-13-2976',
    date: '2008-11-13',
    year: 2008,
    headline: 'Animal Kingdom',
    body: '2008-11-13 18:42:37\', \'Students of the Digital Filmmaking and Commercial Photography department visited the HoustonZoo today on a Photo Safari and Documentary Shoot for the production of "Endangered Species", about the many endangered animals in our world. National Geographic "Here We Come!"',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-14-2974',
    date: '2008-11-14',
    year: 2008,
    headline: 'So This Is What They Can Do',
    body: '2008-11-14 18:40:23\', \' Matt Norberg and Jacob Gallery , both 3rd year Architecture students, animated a proposed conference center for the Indiana University Geology Field Office in Montana. Indiana Alumni Craig Davis, President of INEXS Inc , a geological and geophysical interpretation consulting company contacted our Level 3 students for their help earlier this year. Other team members are working on additional buildings, PowerPoint presentations and website access of the proposed project. Check back for the links to see what they have accomplished. Our upper level students work in teams to design buildings and other architectural projects as part of their independent and interdependent course of study.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-15-2971',
    date: '2008-11-15',
    year: 2008,
    headline: 'FFA Leadership Events',
    body: '2008-11-15 18:35:26\', \'Congratulations to our FFA LDE teams who sparred last Thursday in the District 7 competitions at Katy. Participating in the Radio Team, Creed Speaker, Job Interview and Quiz events were Claudia Martinez, Aurora Caballero, Alicia Higginbotham, Liz Schneider, Cody Matecki, Jake Garnier, Ashley Davis-Nelson, Monica Vazquez, Amy Higginbotham, Hanna Smith, and Tyler First. Taking 1st place in Radio Team were Amy, Hanna and Tyler. They will compete at Area on Saturday, November 22nd at Blinn in Brenham',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-18-2967',
    date: '2008-11-18',
    year: 2008,
    headline: 'Legislative Attention',
    body: '2008-11-18 18:31:47\', \'Digital Filmmaking teacher Patty Nilsson asks questions to State Senators Dan Patrick and Florence Shapiro , and TEA Commissioner Robert Scott at their town hall meeting "Take Back The Classroom" tonight. Patty was one of a handful of teachers representing our district at the information gathering andQ&A format, designed to help our state legislators better understand the issues in public education today. Sen. Patrick indicated he looked forward to visiting The Guthrie Center in the near future.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/townhall.jpg',
    source: 'web'
  },
  {
    id: '2008-11-21-2964',
    date: '2008-11-21',
    year: 2008,
    headline: 'Prepared to Assist',
    body: '2008-11-21 18:11:51\', \' Digital Forensics, Criminal Justice and Computer Tech students learn how to put out small fires in their Teen Cert class, led by members of the Houston Fire Department and Harris County Citizen Corps . The program helps prepare teens to assist in emergencies until the professionals (fire, police, homeland security) arrive on the scene. Firefighters will be here all day to work with other students enrolled in Teen Cert from Steve Whitt and Darrell Lewis \\\' classes.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-22-2958',
    date: '2008-11-22',
    year: 2008,
    headline: 'On To State',
    body: '2008-11-22 18:06:18\', \'Our FFA Radio Team placed 2nd out of the 14 teams in Brenham today and will compete at the State level on December 5th and 6th at Sam Houston State University. Congratulations to Tyler First, Amy Higginbotham and Hannah Smith and FFA Advisor Nikki Reed for this accomplishment! We wish them the best as they vie against the top 20 teams from Texas in hopes of bringing a state title to SBISD.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-11-22-2960',
    date: '2008-11-22',
    year: 2008,
    headline: 'Other Weekend Events',
    body: '2008-11-22 18:07:52\', \'A group of FFA students attended the Klein Heifer and Steer Show. Lesli Evans won Reserve Grand Champion Steer overall, Bria Cardenas placed 2nd in her steer class, and Jake Garnier placed 3rd. Janie Garnier won Reserve Grand Champion Heifer overall with her heifer - Purple Monkey Firecracker.Fifteen students, plus sibling and parent volunteers provided Petting Zoo animals and work crew for the 14th Annual Pilgrim Festival at the First Congregational Church. Exhibits included chickens, turkeys, lambs, goats, pigs, and rabbits. Watch the Chronicle later this week for photos.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/petzoo.jpg',
    source: 'web'
  },
  {
    id: '2008-12-03-2954',
    date: '2008-12-03',
    year: 2008,
    headline: 'The World Is Flat (but expensive)',
    body: '2008-12-03 17:59:41\', \' Estie Cuellar\\\'s Business Independent Study class at Spring Woods HS has been participating in the "Flat Classroom Project " with students from around the globe. They have also been invited to the Flat Classroom Conference In Qatar in January. The students are looking for help to raise funds to make this once in a lifetime trip. You can see their work and\\n\\nget more information on their website at http://springwoodsgoes2qatar.blogspot.com/ \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/Tigerbanner.jpg',
    source: 'web'
  },
  {
    id: '2008-12-04-2950',
    date: '2008-12-04',
    year: 2008,
    headline: 'Photography Contest Winners',
    body: '2008-12-04 17:56:07\', \'The results of a district-wide Health Fitness photo contest are in, and our Commercial Photography students took 3 of the top 5 slots. Congratulations Katherine Owen, Michael Mortola and Lauren Boggs- Zadik ! The photos (below) can be viewed online at http://animoto.com/play/pQTEAgn7iQgLgD9TpO0JzA \\n \\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/winners.jpg',
    source: 'web'
  },
  {
    id: '2008-12-05-2946',
    date: '2008-12-05',
    year: 2008,
    headline: 'In The Top One Percent',
    body: '2008-12-05 17:52:44\', \'Dec 5 - The Spring Branch FFA Radio Team of Tyler First, Amy Higginbotham & Hannah Smith competed at SHSU in Huntsville this weekend and came in 5th Place in Texas, out of the 591 teams that entered the event. We are so proud of our students for this incredible showing during their first foray in this contest, and to FFA Advisor Nikki Reed for sponsoring them!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/radio-state-banner1.jpg',
    source: 'web'
  },
  {
    id: '2008-12-06-2942',
    date: '2008-12-06',
    year: 2008,
    headline: 'Late Night @ Guthrie',
    body: '2008-12-06 17:50:15\', \'Continuing the tradition of all night lock-in events on campus this past weeked were the Film & Photo Club and the NJROTC Cadets . Both groups had busy evenings planned at their respective areas, including eating and games\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/redi1.jpg',
    source: 'web'
  },
  {
    id: '2008-12-10-2938',
    date: '2008-12-10',
    year: 2008,
    headline: 'AMI A Success',
    body: '2008-12-10 17:47:28\', \'The Annual Military Inspection of our NJROTC Unit was conducted today under the leadership of our cadets and instructors. Guest Inspector Colonel Michael Jodeit, USMC evaluated the personnel as they organized their activities in an improvised setting due to the extremely cold and rainy weather. The cadet staff, inspecting officer and distinguished guests were treated to a culinary feast courtesy of our Chef Training and other classes.\\n\\nAnd on another NJROTC note, we learned that our Academic Team that competed in the Navy JROTC Academic Bowl sponsored by the College Options Foundation has advanced to the next level (2). This organization is dedicated to enriching the academic development of high school students and assisting them in their preparation for higher education by using academic competitions, college exam study guides, college admissions tutorials and personalized counseling',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2008-12-18-2933',
    date: '2008-12-18',
    year: 2008,
    headline: 'The Man In The Red Suit',
    body: '2008-12-18 17:43:44\', \'Tonight hundreds of children and their parents enjoyed the holiday spirit and festivities at the First Annual Santa\\\'s Farm at our Ag Science Complex. Our FFA Alumni Association, parents, students and advisors worked painstakingly to decorate and provide activities including roasting marshmallows over an open fire, hayrides, arts and crafts, a petting zoo and of course pictures with Santa ! Thanks to all for creating a festive and delightful event.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/santa.jpg',
    source: 'web'
  },
  {
    id: '2009-01-05-2928',
    date: '2009-01-05',
    year: 2009,
    headline: 'Burnt Lunch?',
    body: '2009-01-05 17:41:00\', \'No, Chef Land is not putting out the latest culinary creation that baked a little long. As part of ourstaff development training, our Emergency Response Team demonstrated how to safely and correctly use fire extinguishers and reviewed our plans in case they are needed. One of our goals is to provide our students a safe and secure place to learn.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/fire.jpg',
    source: 'web'
  },
  {
    id: '2009-01-07-2921',
    date: '2009-01-07',
    year: 2009,
    headline: 'Stay Informed In Style',
    body: '2009-01-07 17:25:23\', \'Keeping abreast of education news in Texas can be a chore. There aremany sites scattered over the internet where youcan find information, and one of the best,most comprehensive sources comes from Trustee Mike Falick. His site has been selected as a finalist for the Weblog Award for Best Education Blog . Mike shares news and info about education events in the district, state and across the USA. Staying current is critical as we enter the 81st Texas Legislative Session later in the month. I recommend you check it out,\\n\\nand while you are there, vote! http://mikefalick.blogs.com/ \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/blog.jpg',
    source: 'web'
  },
  {
    id: '2009-01-12-2913',
    date: '2009-01-12',
    year: 2009,
    headline: 'Choose Wisely',
    body: '2009-01-12 17:20:07\', \' Our 2009-2010 Course Selection Guide is at the printers and will be mailed to the homes of every 8th, 9th, 10th & 11th grade student in SBISD in about 10 days. A big thanks to Mike Radler, Patty Nilsson and students Lucas Hoyos, Rachel Marino, Jordan Phillips and Maddie Hanlon for the amazing photography and art direction. Next year could be our biggest year ever at Guthrie, and we want you to be a part of it!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/guide2009.jpg',
    source: 'web'
  },
  {
    id: '2009-01-14-2917',
    date: '2009-01-14',
    year: 2009,
    headline: 'Mentor, Role Model & Friend',
    body: '2009-01-14 17:22:52\', \'We all mourn at the loss of Automotive Tech teacher Tiny Kent, who passed away January 13th. Tiny touched the hearts of countless people through nearly a quarter century of service to SBISD and The Guthrie Center. A memorial service will be held at 2:00 PM on Saturday, January 17 at St. Paulʼs Episcopal Church, 1936 Drexel Drive (@ Franz Rd), Katy, Texas 77493. Anyone wishing to send condolences and memories to his wife Mary can email her at: edwardkent@sbcglobal.net\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/tiny.jpg',
    source: 'web'
  },
  {
    id: '2009-01-19-2909',
    date: '2009-01-19',
    year: 2009,
    headline: 'FFA Show & Sale Is On The Way',
    body: '2009-01-19 17:17:25\', \'The 31st Annual FFA Show and Sale is coming your way soon. Events this year include the Children\\\'s Barnyard on Thursday, February 5 from 9 AM to 2 PM, the FFA Livestock Shows on Thursday and Friday evenings from 5 - 7 and culminating with the FFA Live Auction Saturday at 1PM. All events are open to the public, and of course, buyers are welcome and wanted. For more information, please contact our FFA Alumni Association at 713.335.9699. All FFA events are held at our farm at 1905 Brittmoore.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/flyer.jpg',
    source: 'web'
  },
  {
    id: '2009-01-27-2905',
    date: '2009-01-27',
    year: 2009,
    headline: 'Hot Designs',
    body: '2009-01-27 17:11:36\', \'Thirty four Architecture students attended the annual Michael G. Meyers High School Design\\n\\nRes Champ Goat\\n\\n Robert Bass \\n\\nPBK Architects\\n\\nRes Champ Broilers\\n\\n Lauren Arthur \\n\\nHorizon Builders\\n\\nRes Champ Turkey\\n\\n Paige Pesl \\n\\n Summers Drywall \\n\\nRes Champ Rabbits\\n\\n Cody Matecki \\n\\nJarrar & Co\\n\\nRes Champ Horticulture\\n\\n Ashley Davis- Nelson \\n\\nCowboy Trucking\\n\\n3rd Place Steer\\n\\n Stephel Spilker \\n\\n Margaret West \\n\\n3rd Place Swine\\n\\n Ashley Davis- Nelson \\n\\nOmega Builders\\n\\n3rd Place Lamb\\n\\n Emily Jernigan \\n\\nHorizon Builders\\n\\n3rd Place Goat\\n\\n Bria Cardenas \\n\\nThe Oppenheimers\\n\\n3rd Place Broilers\\n\\n Kevin Pesl \\n\\n Cox & Perkins \\n\\n3rd Place Turkey\\n\\n Jake Garnier \\n\\nPolar Air Co\\n\\n3rd Place Rabbits\\n\\n Makenzie Matecki \\n\\nRSMIS FoundationCompetition workshop held in the newly renovated conference center at Kirksey Architects. They spent their Saturday networking with area architects and learning different design techniques. This year’s competition will be designing Fire Station 1 for downtown Houston at Allen’s Landing.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/mgm09.jpg',
    source: 'web'
  },
  {
    id: '2009-02-02-2897',
    date: '2009-02-02',
    year: 2009,
    headline: 'Welcome Texas Friends',
    body: '2009-02-02 17:09:09\', \'We were honored today to host a tour from the Career & Technology Association of Texas Conference being held in Houston this week. About 40 CTE administrators, counselors and advisors joined us for a gourmet luncheon provided by our Culinary Arts department, heard from some of our awesome students, and toured our campus and agriculture facility on Brittmoore. CTAT members represent almost one million CTE students in Texas.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ctat.jpg',
    source: 'web'
  },
  {
    id: '2009-02-04-2890',
    date: '2009-02-04',
    year: 2009,
    headline: 'Guthrie Teacher of The Year',
    body: '2009-02-04 17:04:19\', \' Mike Radler , Commercial Photography & Digital Filmmaking instructor has been elected our Teacher of the Year! In his 13th year at Guthrie, Mike has been instrumental in pioneering the two programs he currently teaches along with 3d Animation . Congratulations Mr. Radler!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/rad.jpg',
    source: 'web'
  },
  {
    id: '2009-02-09-2888',
    date: '2009-02-09',
    year: 2009,
    headline: '31 And Counting',
    body: '2009-02-09 19:50:53\', \'The 31st FFA Show and Sale and Children\\\'s Barnyard is now history. Thanks to our students, parents, volunteers and advisor Nikki Reed for their hard work in making this such a successful weekend. The events flowed smoothly, the ambiance was memorable and the students received both public and monitary rewards for their sweat and tears throughout the time they raised their projects. A special thanks to our buyers and community members for supporting our students so generously!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-02-10-2883',
    date: '2009-02-10',
    year: 2009,
    headline: 'CAD Can Cook',
    body: '2009-02-10 19:48:05\', \' Sonia Greiner\\\'s OSA students in our Architecture program have commandeered the Culinar Arts lab in the evenings all week as they prepare for their Valentine\\\'s Day Bake Sale. Stop by the library on Friday to get cookies, cupcakes and more, all at a great price and for a fine cause.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2009/02/cadcook.jpg',
    source: 'web'
  },
  {
    id: '2009-02-13-2874',
    date: '2009-02-13',
    year: 2009,
    headline: 'Texas CTE PSA Winners',
    body: '2009-02-13 19:37:33\', \' Digital Film students teamed up recently to produce a series of Public Service Announcements promoting Career & Technical programs for the Texas Public Service Announcement Challenge. We are happy to announce that one of our student teams placed 2nd for the state of Texas, producing a 30-second spot promoting the importance of CTE programs for all students with Spanish-speaking parents as their targeted audience. The video features our Computer Technologies department and is hosted by Lupita Herrera. The winning entry was directed by John Kackley and Carlos Rodriguez , along with Lupita Herrera, J ose Estevez, and La June Resendiz. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ctepsa.jpg',
    source: 'web'
  },
  {
    id: '2009-02-13-2879',
    date: '2009-02-13',
    year: 2009,
    headline: 'Tomorrow\'s The Day',
    body: '2009-02-13 19:45:56\', \'In case you are looking for a last minute Valentine\\\'s gift, stop by the Architectural CAD Bake Sale and pick up some sweets or a bear. Proceeds help support their OSA student organization and whatever you purchase will help keep you out of trouble.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/bake.jpg',
    source: 'web'
  },
  {
    id: '2009-02-22-2870',
    date: '2009-02-22',
    year: 2009,
    headline: 'In The Big Apple',
    body: '2009-02-22 19:33:54\', \'The senior trip to NYC for the Academy of Hospitality & Tourism students in Hotel Management ended Saturday after three incredible days learning about tourism and finance in the largest city in the USA. AOHT students Katherine Boltov, Marcus Gary, Jorge Mendoza, Andrea Alvarado and Leslie Gonzalez and teacher Lorraine Hamilton , along with Academy of Finance students from around the district braved the blustery cold days for the sake of education. What a sacrifice! You can view photos of the trip here: http://cte.springbranchisd.com/nyc09.html\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/nytrip.jpg',
    source: 'web'
  },
  {
    id: '2009-02-27-2867',
    date: '2009-02-27',
    year: 2009,
    headline: 'Go Teams!',
    body: '2009-02-27 19:30:49\', \'The Guthrie Center is represented well in many competitive events today and tomorrow across the area. NJROTC is competing at State in College Station, Hotel Management DECA students are involved in their own State competition in Galveston, and 3D Animation and Cosmetology are in their area contests at San Jacinto College. We wish our students well, we thank our teachers for taking their time, and look forward to tne next round for all of them.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-03-02-2862',
    date: '2009-03-02',
    year: 2009,
    headline: 'Top Quacks',
    body: '2009-03-02 19:23:46\', \'The results are in from Lone Star College\\\'s Quack Attack Film Festival . Taking 1st Place in Narrative was Owen Schwartzbard for "The Picture House Evidence"; also in 1st Place for his PSA was John Saucedo for "Child Abuse", followed closely behind in 2nd Place PSA by Bobby Nash for "Bike Helmet Safety." Congratulations to these students for their success!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/quack.jpg',
    source: 'web'
  },
  {
    id: '2009-03-06-2858',
    date: '2009-03-06',
    year: 2009,
    headline: 'Guests From The Birthplace of Democracy ',
    body: '2009-03-06 19:20:15\', \'We were honored to welcome a contingent of students from the American Farm School in Thessalonkik, Greece today. Teacher Giannis traveled with George, Irini, Nikolas, Sofia, Zachos and Zeta to see firsthand about public education in Texas and the USA. They toured a good part of our school and our Agricultural Science Center, and were treated to a fine dining experience in Culinary Arts. You can learn more about their school at http://www.afs.edu.gr/ \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/greek.jpg',
    source: 'web'
  },
  {
    id: '2009-03-10-2854',
    date: '2009-03-10',
    year: 2009,
    headline: 'Fast Thinking And Action',
    body: '2009-03-10 18:17:22\', \'Cosmetology student Claudia Yanez was awarded the American Red Cross “Certificate of Extraordinary Personal Action” late last month for her heroic response to a choking man at an area pizza place in December. Just six weeks earlier she was trained in Adult CPR in her Guthrie class by teacher Linda Nicodemus . The Red Cross rewarded Claudia with a gift certificate for a two-night stay at the Hilton Westchase Towers including a complementary dinner at the Rio Ranch restaurant, which she gave to her parents.You can read an article about Claudia in the Houston Chronicle by clicking here >>\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/claudia.jpg',
    source: 'web'
  },
  {
    id: '2009-03-11-2851',
    date: '2009-03-11',
    year: 2009,
    headline: 'State Winners',
    body: '2009-03-11 18:14:08\', \'Four Guthrie students competed at state in Austin last week. Jon Crowcroft – Network DesignTeam/PC Servicing & Troubleshooting, Gib Smith – Network Design Team/Microsoft Networking Administration, Barrett Montgomery – Network Design Team/Cisco Network Administration, and Chris Morris Network Design Team. Our Network Design Team made it to the stage as finalists but did not place high enough to advance. However Gib and Barrett did finish their competitions with placements that qualify them to advance to the National Finals in Dallas in May. Congratulations to these students and instructor Steve Whitt for making it happen.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-03-27-2847',
    date: '2009-03-27',
    year: 2009,
    headline: 'Rock Your Night',
    body: '2009-03-27 18:12:32\', \'One week from tonight is our annual Battle Of The Bands , held on stage in our beautiful amphitheater from 6 to 10 PM. Admission at the door is $5. Refreshments will be available. All proceeds benefit the Film & Photo Club. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/09Battle-of-the-Bands.jpg',
    source: 'web'
  },
  {
    id: '2009-04-03-2841',
    date: '2009-04-03',
    year: 2009,
    headline: 'The Battle Is Over',
    body: '2009-04-03 18:09:08\', \'Blue Light Traffic....Volatile Inertia....Suburban Warfare....A Shot for Favor.....Sound of Mimes.....Merlin\\\'s Beard...Eyes Like Oceans....Roto....and the band of the year is SUBURBAN WARFARE! Click on the photo below for a QuickTime slideshow of more pix.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/bob21.jpg',
    source: 'web'
  },
  {
    id: '2009-04-06-2838',
    date: '2009-04-06',
    year: 2009,
    headline: 'A Close Finish',
    body: '2009-04-06 18:05:18\', \' Sean Bellinger \\\'s 3d Animation teams took to the road this weekend at the SkillsUSA State competition in Corpus Christi. J ake Brunner, Alex Erfurdt, Hannah Nicholson and Zoe Sommers competed with students from around Texas. Jake and Alex\\\'s team came in 2nd place of all that participated. Congratulations and thanks to each one of these exceptional students for stretching themselves to reach their goals.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-04-09-2833',
    date: '2009-04-09',
    year: 2009,
    headline: 'A Finalist In Our Midst',
    body: '2009-04-09 17:57:21\', \'Digital Film and Commercial Photography teacher Mike Radle r has been named a finalist for SBISD\\\'s Secondary Teacher Of The Year for 2009. This is the third time in a handful of years that a Guthrie teacher has reached this plateau. Mike and the rest of us will find out if he is awarded this honor at the ceremony\\n\\nin May. Good luck Mr. Radler!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/radler.jpg',
    source: 'web'
  },
  {
    id: '2009-04-17-2829',
    date: '2009-04-17',
    year: 2009,
    headline: 'Changes Aplenty',
    body: '2009-04-17 17:45:14\', \'Saturday our NJROTC Unit celebrated their successful school year attheir annual Military Ball. Guest speaker USCG Master Chief Forrest Croom delivered a powerful and uplifting message to our cadets and guests, our current seniors had a chance to say farewell to their peers and instructors, and the change of command to next years cadet officers was completed. Commanding Officer Patricia Reyes will be succeeded by Ines Capuchino , Executive Officer Angie Quintanilla yields to Elson Perez, Operations Officer Brittany Hunt passes off to John Menicke , Administrative Officer Meghan Silva gives way to Jonathan Pineda, Command Master Chief Vianca Vieyra relinquishes to Ashley Ruiz, Supply Officer Maureen Gonzalez cedes to Ambar Balderas and Public Affairs Officer John Menicke hands over his reigns to Ethan Johnson. Thanks to our outgoing cadets, welcome to our incoming ones and good luck to those graduating.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/coc.jpg',
    source: 'web'
  },
  {
    id: '2009-04-22-2825',
    date: '2009-04-22',
    year: 2009,
    headline: 'Professional Development for Our Students',
    body: '2009-04-22 17:40:18\', \'This year our annual career day took on a new persona, as we adjusted from having speakers talk about specific careers to a new focus by our business and higher education partners explaining what it takes to get that career, grow in it and move up the ladder of success. Thanks to Beverly Litton for coordinating the day, and to our guests Rebecca Leppala, LaShaune Tisdale, Danny Arocha, Anita Eilliams, Joel Wagher, Trudy Zwicke, Vanneshia Lyons, Geraldina Wise and Damien Threats for making our Professional Development Day a great success. Students, we would like your feedback on yesterday, please click here to take a short survey >> \\n \\n \\n\\n \\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/pdd.jpg',
    source: 'web'
  },
  {
    id: '2009-04-23-2823',
    date: '2009-04-23',
    year: 2009,
    headline: 'Acclaim Earned Again',
    body: '2009-04-23 17:36:47\', \'For the 9th time in 10 years, our NJROTC Cadets were named a Distinguished Unit with Academic Honors . This means they are among the elite of all NJROTC units in a five state area. It also means that we may nominate up to three cadets to each of the service academies for the 2010 graduating class. Congratulations to our cadets and their leadership staff (see Apr 17th article below) and to Col. Sluis and Master Chief Heuse r for another job well done.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-04-24-2821',
    date: '2009-04-24',
    year: 2009,
    headline: 'Not Conde Nast Quite Yet',
    body: '2009-04-24 17:34:58\', \' Travel and Tourism students from the Omni Hotel Management program went to visit some of the tourist sites in Houston today courtesy of teacher Lorraine Hamilton . First stop was the Hilton of the America\\\'s where former Hotel Management Intern, now HR director at the Hilton, met them and gave a tour. After leaving the Hilton they walked over to one of Houston\\\'s newest tourist spots, Discover Green. They finished their tour at the House of Blues.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-04-25-2817',
    date: '2009-04-25',
    year: 2009,
    headline: 'Earthly Ideas',
    body: '2009-04-25 17:24:58\', \'In celebration of Earth week, Architectural CAD students have constructed a maze in the courtyard. The maze, provided by Emerging Green Builders , raises awareness about the environment, LEED (Leadership in Energy and Environmental Design) and sustainability. The display will be on campus for viewing until May 8.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/hilton.jpg',
    source: 'web'
  },
  {
    id: '2009-04-30-2812',
    date: '2009-04-30',
    year: 2009,
    headline: 'Architectural Awards',
    body: '2009-04-30 17:18:51\', \'The winners in the Houston AIA Michael G. Meyers High School Design Competition have been released, and once again The Guthrie Center Architectural program cleaned up, receiving 7 out of 9 awards. 1st place Individual Entry ($1,500) went to Juan Corzo (pictured), 3rd Place ($250) was given to William Braddock . Wayne Norberg received an Honorable Mention. For Team Entries, 2nd Place ($1000) awarded to Johnny Deleon and Monica Oviedo , with two teams receiving honorable mentions. Those students include Nilsen Sagastume , Jose Gonzalez, Omar Bahena and Toan Nguyen. The Michael G. Meyers Committee Favorite - Group was Loraine Ng and Val Suarez . All award winning students received a scholarship to the University of Houston’s Architectural Summer Discovery Program. Congratulations to these students and thanks to instructor Sonia Greiner for continuously raising the bar and challenging her students to go above and beyond.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/mgm.jpg',
    source: 'web'
  },
  {
    id: '2009-05-02-2803',
    date: '2009-05-02',
    year: 2009,
    headline: 'Showing Support',
    body: '2009-05-02 17:13:59\', \' NJROTC Cadets and Guthrie staff participated today at the 16th annual Running For The Arts that benefits the Education Foundation\\\'s ARTS Partner Program, providing cultural opportunites for all SBISD students. Congratulations to the two dozen cadets and Elva Saldivar for donating their time towards this excellent cause.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/rfa.jpg',
    source: 'web'
  },
  {
    id: '2009-05-05-2799',
    date: '2009-05-05',
    year: 2009,
    headline: 'Scholarships, Awards And More',
    body: '2009-05-05 17:10:32\', \'Tonight we celebrated the hundreds of CTE competitors, throughout the district, awarded $17,500 in scholarships, and recognized outstanding CTE educators, and more. A delicious array of snacks was graciously prepared by our Culinary Arts department prior to the event. Congratulations to all of our award and scholarship winners (you can view the program by clicking here) and to Computer Tech instructor Gary Croft , elected as CTE Educator of the Year by his peers throughout the district. Photos of the night can be viewed on our CTE website: http://cte.springbranchisd.com/awards_photos.html \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/gary.jpg',
    source: 'web'
  },
  {
    id: '2009-05-11-2796',
    date: '2009-05-11',
    year: 2009,
    headline: 'On The Go',
    body: '2009-05-11 17:09:22\', \'The HCC Mobile Go Center will be at the Guthrie Center for a couple of days to assist our seniors with preparing for college. On May 12th students will be guided through the HCC online application process and also secure their online FAFSA Personal Identification Numbers. May 13th, students will be walked through the online FAFSA application process. Thanks to Houston Community College Spring Branch for helping prepare our students for the next phase in their lives.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-05-12-2791',
    date: '2009-05-12',
    year: 2009,
    headline: 'FFA Celebrates At Banquet',
    body: '2009-05-12 17:04:32\', \'Outgoing FFA President Hannah Bass delivered a moving farewell address, students relived their year with photos and videos, scholarships were announced, and awards were aplenty for so many successes throughout the year. Congratulations and thanks to current FFA student leaders including Hannah, Jake Garnier, Lawton Duncan, Lauren Arthur, Emily Jernigan & Amy Higginbotham . Amy, Emily and Lauren will return as officers for 09-10. We wish our seniors the best in their future as they leave us in a few short weeks.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ffabanquet.jpg',
    source: 'web'
  },
  {
    id: '2009-05-13-2788',
    date: '2009-05-13',
    year: 2009,
    headline: 'District Partners Honored',
    body: '2009-05-13 16:59:49\', \'Superintendent Duncan Klussmann , Linda Buchman and Sue Loudis were on hand to welcome corporate leaders at the Junior Achievement Appreciation luncheon held in Culinary today. Invitees and guests enjoyed a delicious meal prepared by our students and instructors Chef Erin Land and Jennifer Cardenas . You can view a slide show of the event below.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-05-22-2786',
    date: '2009-05-22',
    year: 2009,
    headline: 'The Breakfast Club',
    body: '2009-05-22 16:56:59\', \' Intro to Culinary students prepared their own final exam - they designe, managed and ran their own breakfast restaurant. Each class had two teams - the staff and the patrons, and they switched roles on Thursday and Friday. It was a great (and delicious I might add) learning experience!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-05-26-2781',
    date: '2009-05-26',
    year: 2009,
    headline: 'Catch A Flick Tonight',
    body: '2009-05-26 16:50:23\', \' Digital Film students are showcasing the finest productions of 2008-09 in their annual GC/DF FILM FESTIVAL tonight in the GC Theatre from 6:30-8:30pm . Audiences will get to screen music videos, documentaries, public service announcements, short films, photographic slides and animated shorts as this year’s young filmmakers compete for the title of “Best of Show” in this year’s event voted on by those attending tonight\\\'s event. UPDATE: Congratulations to Owen Schwartzbard winner of last night\\\'s Audience Choice award and BEST OF SHOW winner for his short film "The Etude". \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/owen-pic.jpg',
    source: 'web'
  },
  {
    id: '2009-05-29-2776',
    date: '2009-05-29',
    year: 2009,
    headline: 'Helping Make Dreams A Reality',
    body: '2009-05-29 16:45:23\', \' Aiza Garcia received $1,000 scholarship from the Organization of Student Architects. Aiza is a third year Architectural CAD student who is going to continue her architectural ambition at the University of Houston, Gerald D. Hines School of Architecture. Funds were earned through the efforts of Ms. Greiner\\\'s students and the OSA organization, which Aiza has served as President this year. Best wishes to you Aiza as you pursue your dream.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/aiza.jpg',
    source: 'web'
  },
  {
    id: '2009-06-04-2774',
    date: '2009-06-04',
    year: 2009,
    headline: 'Time For Fellowship',
    body: '2009-06-04 16:43:50\', \'After a successful and stressful year, our staff, subs and family take time to break bread and reflect. Thanks to everyone here for a record setting year; we look forward to students returning in August.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-06-14-2768',
    date: '2009-06-14',
    year: 2009,
    headline: 'Leading The Way',
    body: '2009-06-14 16:35:01\', \'June 14 - NJROTC\\\'s Ashley Ruiz was the Top Female Athlete at Leadership Academy this past week. Cecilia Silva was the top female runner at 1.5 miles with a time of 9:51. Other cadets successfully completing the weeklong event include Elier Rodriguez, Justina Chapa, Ambar Balderas, Monica Apolinar, Cecilio Aguilar, Brian O’Connor and Elson Perez. These cadets continued their summer regime during the week of June 21 at Basic Leadership in Beaumont - Cecilia Silva, Justina Chapa (Graduate Assistants) , Cristina Enriquez, Me, Ruby Rivera, Jennifer Zapata, Eugenia Leal, Kevin Dang, Inez Capuchino (Graduate Assistant) , Tony Dinh, Joao DaSilva and Ruben Rincon. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/leadership.jpg',
    source: 'web'
  },
  {
    id: '2009-06-18-2765',
    date: '2009-06-18',
    year: 2009,
    headline: 'Turning Up The Heat',
    body: '2009-06-18 16:30:54\', \'Before everyone checks out for the summer, our Culinary Arts program in partnership with the University of Houston and Houston Community College held a hpspitality and culinary workshop and cooking competition for the past two weeks. The culmination of their experiences evolved as they each divided in teams to create a four course meal.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-08-05-2763',
    date: '2009-08-05',
    year: 2009,
    headline: 'Welcome New Teachers',
    body: '2009-08-05 16:27:58\', \'As we count down the days until classes resume, we have three new teachers joining the Guthrie family. Stacy Christopher , who was with us on a temporary basis last spring, will be our new Automotive Tech instructor. Stacy has taught in Houston ISD and at Houston Community College. Vanessa Collier is one of two new Agricultural Science teachers hailing from Sam Houston State University, where she helped establish the first collegiate FFA chapter and served as the Texas CFFA President. Christy Capps , our other Ag Science instructor, taught at both the junior high and high school in Waller and Normangee. Christy has experience training a variety of CDE and LDE teams and was very successful in her high school FFA program as an officer and multiple award and scholarship winner. Our FFA students and parents will have a chance to meet both Ag teachers tonight at 7 at the August Alumni and FFA meetings.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-08-25-2759',
    date: '2009-08-25',
    year: 2009,
    headline: 'Great to Have You Back',
    body: '2009-08-25 16:25:30\', \'On a hot summer day, we warmly welcome over 1,200 students back to The Guthrie Center for a fantastic new year. Welcome to the best part of your school day!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/back.jpg',
    source: 'web'
  },
  {
    id: '2009-08-29-2754',
    date: '2009-08-29',
    year: 2009,
    headline: 'Family Fun',
    body: '2009-08-29 16:13:40\', \'Today our annual FFA Family Pinic was held at the Ag Science center on Brittmoore. Teachers Christy Capps and Vanessa Collier and the FFA Officer Team welcomed their guests around lunchtime. They were treated to supurb boxed lunches created by our Culinary program. This is the kickoff to a very busy and fun year of events in the FFA program.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/picnic2.jpg',
    source: 'web'
  },
  {
    id: '2009-09-11-2747',
    date: '2009-09-11',
    year: 2009,
    headline: 'Honoring the Fallen',
    body: '2009-09-11 16:10:18\', \'We pause on this 8th anniversary of the terrorist attacks on the USA to honor those killed and those that helped in the rescue of the September 11, 2001 victims.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/911.jpg',
    source: 'web'
  },
  {
    id: '2009-09-14-2742',
    date: '2009-09-14',
    year: 2009,
    headline: 'Yin and Yang',
    body: '2009-09-14 16:06:43\', \'Sep 14 - Higher Education advisor and partner Scott Gehman has co-written a musical The Legend of Yin and Yang, that will be touring Houston and China this fall. It\\\'s a Cirque du Soleil style production in Mandarin and English that blends Broadway, Acrobatics, Martial Arts and Urban Hip-Hop. Created as a cultural exchange between the US and China, the production was the topic of PBS\\\'s The Making of aLegend. It is touring in Houston on Oct 31 and Nov 1 at HBU\\\'s Morris Cultural Arts Center. The China tour is December 1-8. Congrats to Scott for this outstanding accomplishment. Click on the photo below for details.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/yinyang.jpg',
    source: 'web'
  },
  {
    id: '2009-09-19-2739',
    date: '2009-09-19',
    year: 2009,
    headline: 'Lost and Found',
    body: '2009-09-19 16:02:41\', \'While GPS technology has made getting around unfamiliar places easy for many of us, it is not always reliable and a strong interest still there for the good old fashioned way of navigating with a compass and map. Orienteering competitions are held all over the Houston area, and this weekend sixteen of our NJROTC cadets competed at the Challenger 7 meet in Clear Lake. Congratulations to Eric Wilkerson and Eugenia Leal who took first and Cecilia Silva who finished third in their respective categories.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-09-23-2730',
    date: '2009-09-23',
    year: 2009,
    headline: 'Talk It Up',
    body: '2009-09-23 18:26:05\', \' Digital Filmmaking students gain production skills at The Guthrie Center\\\'s TV Studio as they work to produce their first talk talk show "Student Talk" which will recorded in high definition and aired on\\n\\nHCC-TV and SBISD-TV sometime late October. Involved in this project are Calvin Blair, Luis Martinez, Kelly Kmiecik, Ovidio Caldera, Virginia Lopez, Bryan Martinez, William Foster and Ethan Goodman. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/studenttalk.jpg',
    source: 'web'
  },
  {
    id: '2009-09-24-2725',
    date: '2009-09-24',
    year: 2009,
    headline: 'Crunch Time',
    body: '2009-09-24 18:20:39\', \' Chef Training students working with our culinary instructors Jennifer Cardenas , Erin Land and guest Chef Michael Bargas from The Art Institute of Houston are reviewing the timeline for today\\\'s Spring Branch Realtors luncheon sponsored by Superintendent Duncan Klussmann and our Community Relations department. Update: our 65 guests weretreated to an wonderful "Ode To The Pear" menu that included Roasted Baby Pears with Goat Cheese, Butternut Squash and Pear Soup, Prosciutto, Brie and Pear Panini and Almond Dusted Caramelized Pear Napoleon . Most culinary classes had a part in this delicious luncheon.\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ready4realtors.jpg',
    source: 'web'
  },
  {
    id: '2009-09-25-2723',
    date: '2009-09-25',
    year: 2009,
    headline: 'Final Cut- Gutherie\'s Show on Cable',
    body: '2009-09-25 18:18:56\', \' Digital Filmmaking\\\'s show "Final Cut" (a compilation of student projects including PSAs, Documentaries, Music Videos and short films) is airing 3 times a week on HCC-TV, cable channel 19 - Sunday @ 12:30 PM, Wednesday @ noon and Friday @ 11:30 AM. You can also catch it via the web link on their site: http://hcctv.hccs.edu/portal/site/hcctv/ \\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-09-26-2718',
    date: '2009-09-26',
    year: 2009,
    headline: 'Tuneup ',
    body: '2009-09-26 18:15:20\', \'Sep 26 - Competition season is underway for JROTC units around the state as they prepare to demonstrate mastery in academics, drill, orienteering and physical fitness. Today a few dozen cadets headed to Prairie View A&M for to compete with 20 other units from Southeast Texas. Commanding Officer Ines Capuchino and Supply Officer Ambar Balderas earned 2nd place overall in Academics while Monica Apolinar brought home 3rd overall in female sit-ups. Congratulations to all of our cadet competitors. The university\\\'s Navy ROTC program sponsored and coordinated the event, and were assisted by former Guthrie students Vianca Vieyra, Angie Quintanilla and Michael Mallon. \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-09-28-2713',
    date: '2009-09-28',
    year: 2009,
    headline: 'Your Opinion Please',
    body: '2009-09-28 18:11:57\', \'Sept 28 - In the next couple of weeks, Common Grounds , our student run coffee shop will open at Guthrie for your convenience and enjoyment. Our Culinary department is in the process of planning food and drink selections for you. However they want your input, so please take about 2 minutes to answer the questions on the survey found here > > Common Grounds Student Survey \\n \\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/opinion1.jpg',
    source: 'web'
  },
  {
    id: '2009-10-01-2709',
    date: '2009-10-01',
    year: 2009,
    headline: 'Please Join Us',
    body: '2009-10-01 18:10:08\', \'We hope you will join us at our Fall Community Tuesday on October 6th starting at 5:00 and ending at 7:30 PM. This is an opportunity for you to to see the campus, meet our students and teachers and learn about the incredible educational opportunites they pursue in classes every day. We really look forward to seeing you there!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ctoct09.jpg',
    source: 'web'
  },
  {
    id: '2009-10-06-2704',
    date: '2009-10-06',
    year: 2009,
    headline: 'Community Night',
    body: '2009-10-06 18:06:32\', \'Tonight we enjoyed the company of many parents, friends and family of our great students. Thanks for joining us! Below are a couple photos and a clip from the motion capture studio, new to our 3d Animation classes this year.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/CommunityTuesday.jpg',
    source: 'web'
  },
  {
    id: '2009-10-20-2694',
    date: '2009-10-20',
    year: 2009,
    headline: 'FFA at Harris County Fair',
    body: '2009-10-20 17:54:49\', \'FFA Students are ready this week to show their projects at the 32nd Annual Harris County Fair sponsored by the Houston Farm and Ranch Club. Representing Spring Branch this week are Janie Garnier, Lesli Evans, Amy and Alicia Higginbotham and Bria Cardenas who will be showing their heifers; Cody Moreno with his steer; Adriana Makenzie Matecki, Cody Matecki and Allison Jubert will show their rabbits; and Kevin Pesl along with most of the above students who have non-livestock competitions going on. Two of our students are in thecalf scramble - Cody Moreno and Zach Pierce , which was won last year by Alicia Higginbotham . Thanks to teachers Christy Capps and Vanessa Collier and our parent volunteers for making this event possible.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/hcf.jpg',
    source: 'web'
  },
  {
    id: '2009-10-21-2699',
    date: '2009-10-21',
    year: 2009,
    headline: 'Weekend Events',
    body: '2009-10-21 18:02:41\', \'Last weekend we had students attend the Navy-Rice Football game and much more. This week our Architecture students will be at Rebuilding Together Houston giving their time and talent to help those in need. Our NJROTC will hold a lock in and Car Wash Saturday from 9 - 2 for Wreaths Across America. Cosmetology students will have services available to the public on Saturday as well. Next week our FFA students will begin activites with the Harris County Fair.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/navyrice.jpg',
    source: 'web'
  },
  {
    id: '2009-10-23-2676',
    date: '2009-10-23',
    year: 2009,
    headline: 'Youth Leadership Forum',
    body: '2009-10-23 17:43:35\', \'Seven Guthrie students attended the 8th Annual YLF today at the James A. Baker III Institute for Public Policy at Rice University. This prestigous event sponsored by Leadership Houston is designed to encourage and inspire high school juniors from across the Greater Houston area to acquire the knowledge and skills necessary to become agents of positive change in their communities. Col. Sluis chapperoned our star students Ambar Balderas, Cornessa Berry, Jonathan Cox, Ashley Ruiz, Cecilia Silva, Hannah Smythe and Savannah Williams. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/YLD.jpg',
    source: 'web'
  },
  {
    id: '2009-10-26-2671',
    date: '2009-10-26',
    year: 2009,
    headline: 'Helping Hands',
    body: '2009-10-26 17:39:00\', \'This is Architectural Design\\\' s third year volunteering for Rebuilding Together Houston. More than 20 students were working hand in hand with the Houston Chapter of AIA Young Architects and Weston Solutions. AIA also provides mentoring for young adults interested in the field of architecture as well as scholarship opportunities through the Michael G. Meyers High School Design Competition. WestonSolutions delivers integrated, sustainable solutions for environmental restoration, property redevelopment, design/build construction, green buildings and clean energy. We are fortunate to have them on our team of advisors.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/osa.jpg',
    source: 'web'
  },
  {
    id: '2009-11-02-2667',
    date: '2009-11-02',
    year: 2009,
    headline: 'Now Open',
    body: '2009-11-02 18:36:48\', \' Common Grounds , our student run, student produced coffee shop is now open on the Guthrie campus. Culinary teachers Erin Land and Jennifer Cardenas have worked so hard getting it ready to open, and today all their effort came to fruition. Congratulations to our Culinary department and to our Interns who are ready to work and serve our students the best coffee drinks, smoothies, freshly baked items and sandwiches from our culinary classes. Click on the photo to view our menu.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/commongrounds.jpg',
    source: 'web'
  },
  {
    id: '2009-11-03-2662',
    date: '2009-11-03',
    year: 2009,
    headline: 'Dinner With The Chairman',
    body: '2009-11-03 18:33:25\', \'On Sunday, NJROTC Cadets provided the Color Guard at the Homecoming for Heroes Tribute Dinner honoring the 65th Anniversary of the Rescue of the Lost Battalion. The Keynote speaker was Admiral Michael Mullen, USN, Chairman of the Joint Chiefs of Staff (pictured above with Cadets Brian Smith, Kevin Dang, Cecilia Silva and Ashley Ruiz). During World War II, the Texas based 141st Regiment were surrounded by the Germans and facing complete defeat. Two other units had failed to break through enemy lines to rescue this battalion. The 442nd Regiment was then sent in and successfully defeated the Germans and rescued the remaining 141st Battalion members. This is only the 2nd time the veterans from the 442nd and the Texas based 141st have been together since this amazing battle during World War II. Click on the photo to view program pages.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/NJROTCAdmMullen1.jpg',
    source: 'web'
  },
  {
    id: '2009-11-09-2657',
    date: '2009-11-09',
    year: 2009,
    headline: 'FFA Competition',
    body: '2009-11-09 17:32:20\', \'Congratulations to our FFA students competing in Leadership Development Events last week at Katy. Our Junior Quiz Team of Sofia Caylor, Brianna Duvall, Andrew Johnson and Mattie Bounds placed 2nd and are advancing to Area Competition. Mattie also placed 1st in individual. Other FFA competitors include Cody Matecki, Jake Garnier, Claudia Martinez, Ashely Davis-Nelson, Bria Cardenas, Kelton Axtell, Meghan Schovjasa, Elvira Ayala, Alicia Higginbotham, Trey Fuqua, Amy Higginbotham and Karly Shimerka. Thanks to advisors Christy Capps and Vanessa Collier for sponsoring their students at this event!\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2009-11-16-2652',
    date: '2009-11-16',
    year: 2009,
    headline: 'Only The Best',
    body: '2009-11-16 17:28:02\', \' Digital Filmmaking is proud to announce the launch of Guthrie Center Films , the latest on- demand internet broadcast channel on YouTube. GCF will showcase premium student work along with networking and professional opportunities to students beyond the classroom. Visit and subscribe wherever you are able to view YouTube. www.youtube.com/guthriecenterfilms \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/gcf.jpg',
    source: 'web'
  },
  {
    id: '2009-11-17-2645',
    date: '2009-11-17',
    year: 2009,
    headline: 'Back To Give Back',
    body: '2009-11-17 17:24:07\', \'Great Clips Stylist and former Guthrie Cosmetology student Diana Guzman , works with current 2nd year student Sarah Salazar during a clipper cutting workshop. Diana started with Great Clips as a receptionist, but after completing our program and passing the Texas Cosmetology State Exam, she began her career as a hairstylist. We thank Diana for giving back and working with students in the program that got her on the road to success.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2009/11/greatclips.jpg',
    source: 'web'
  },
  {
    id: '2009-11-24-2641',
    date: '2009-11-24',
    year: 2009,
    headline: 'Thanking Those Who Serve',
    body: '2009-11-24 17:14:57\', \'Today we wrapped up a week of our students, staff and friends bringing in hundreds and hundreds of needed items for two platoons of Marines stationed in Afghanistan for the holidays. Gabby , a former Spring Woods student and his fellow Marines are over there with little more than a tent and no place to buy anything in this rugged, undeveloped country. The culmination of the week\\\'s events was today when our students packed the boxes with toiletries, candy, cookies (baked by our culinary students), stationary, cards, Christmas decorations and more. Tomorrow 135 overstuffed boxes will be shipped out to arrive in time for the rest of the holiday season. Semper Fi.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/Marines.jpg',
    source: 'web'
  },
  {
    id: '2009-12-04-2636',
    date: '2009-12-04',
    year: 2009,
    headline: 'Chef\'s Surprise',
    body: '2009-12-04 17:09:57\', \'Our Chef Training students created a marvelous holiday luncheon today for their family, friends and guests from The Art Institute of Houston , our long-standing higher education partner in this class. Many of our awesome Guthrie staff pitched in to help serve and clean after consuming the feast themselves. Everyone took in the beautiful snowfall ordered in specailly for this event by Art Institute Chef Michael Bargas. View photos of the event below.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/chef.jpg',
    source: 'web'
  },
  {
    id: '2009-12-07-2632',
    date: '2009-12-07',
    year: 2009,
    headline: 'Fun For The Whole Family',
    body: '2009-12-07 17:07:21\', \'As the cold weather and holidays draw near, it is time for FFA\\\'s Annual Santa\\\'s Farm . This year it will be held Thursday from 6 to 8 PM at our Agricultural Science Center located at 1905 Brittmoore about 1.5 miles from the school. It\\\'s a great family event that includes a Petting Zoo, Hay Rides, Arts & Crafts, Hot Cocoa, S\\\'mores and more and it is all free! Of course Santa will be there, so come get a photo with him.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/snowguthrie.jpg',
    source: 'web'
  },
  {
    id: '2009-12-10-2623',
    date: '2009-12-10',
    year: 2009,
    headline: 'Holiday Fun',
    body: '2009-12-10 17:01:12\', \' FFA students and parents put on a great event this evening for community families at their annual Santa\\\'s Farm. After spending hours and hours decorating and preparing for the night, their reward was watching and guiding the hundreds of guests enjoy this holiday treat.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/santasfarm.jpg',
    source: 'web'
  },
  {
    id: '2009-12-14-2619',
    date: '2009-12-14',
    year: 2009,
    headline: 'Working Together',
    body: '2009-12-14 16:57:21\', \'Over 50 attendees including current and former students, family members and honored guests attended our Cosmetology Teaming for Success night. Student’s work was on display and awards were presented for creativity. Program graduates Gladys Hernandez , Zaily Aldana , Griselda Rodriguez , and Angelica Sanchez shared information they learned and applied from their experiences at Guthrie. Current students contributed donations to assist a needy family in the district, which Valerie Silva presented to Mrs. Raquel Leal of the Parent Center.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/success.jpg',
    source: 'web'
  },
  {
    id: '2010-01-07-2614',
    date: '2010-01-07',
    year: 2010,
    headline: 'Design, Create & Critique',
    body: '2010-01-07 16:46:12\', \'Nilsson and Radler\\\'s Digital Filmmaking and Commercial Photography students joined forces this week to Create, Design and Develop a new logo concept, tag line and possible school name for a new Spring Branch ISD online learning school. Students pitched their concepts and ideas to Melissa Wiland , from the SBISD Communications Department, and got a taste of real-world experience as she listened and critiqued their concepts.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/design.jpg',
    source: 'web'
  },
  {
    id: '2010-01-08-2609',
    date: '2010-01-08',
    year: 2010,
    headline: 'Join Us At Our Community Tuesday',
    body: '2010-01-08 16:36:55\', \'Our spring semester open house, Community Tuesday, will be this coming Tuesday, January 12th from 5 to 7:30 PM. You can stroll around the campus to visit our excitingprograms, meet our instructors and some students, and get involved in a sample lesson of what we do here daily. We are also pleased to have CPA Bob Stevenson , a Spring Branch resident, who will present his seminar "Paying for College: Tax Strategies and Financial Aid." The event is free and open to the public.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/CT01122010.jpg',
    source: 'web'
  },
  {
    id: '2010-01-13-2604',
    date: '2010-01-13',
    year: 2010,
    headline: 'Movers, Shakers, and Decision Makers',
    body: '2010-01-13 16:32:22\', \'Digital Film and Broadcasting instructor Patty Nilsson was conducting a training for area teachers at the Region 4 Service Center today when out in the hall appeared Governor Rick Perry , Senator Dan Patrick and others touring the facility. They took a few minutes to talk to the class and posed for a photo with some members. Local radio legend Sam Malone was also with the group and graciously agreed to take the picture for Patty. Thanks Sam..see ya! \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/nilsonandthegov.jpg',
    source: 'web'
  },
  {
    id: '2010-01-19-2599',
    date: '2010-01-19',
    year: 2010,
    headline: 'Success Defined',
    body: '2010-01-19 16:26:58\', \'Former Digital Filmmaking students Justin Gilley and Nick Jayanty are screening their feature film SKATELAND at the upcoming Sundance Film Festival where Nilsson, Radler and some current students will be in attendance next week! SKATELAND is competing in the prestigious Dramatic Competition category and already has all the Hollywood buzz that promises huge success. The cast is an impressive line up of some of Hollywoods finest young actors--- Ashley Greene, Shiloh Fernandez, Heath Freeman, AJ. Buckley and more. Congratulations Justin and Nick - you are prime examples of what The Guthrie Center is all about!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/skateland.jpg',
    source: 'web'
  },
  {
    id: '2010-01-28-2594',
    date: '2010-01-28',
    year: 2010,
    headline: 'It\'s All Good',
    body: '2010-01-28 16:21:22\', \'Film students Amy Nelson, Julia Lockin, Lucas Hoyos, Cole Jodon, Jesse Froehlich, Mo Itani, Umar Ibrahim, Allie Rask, Katie Raley and Cameron Bohls along with teachers Mike Radler and Patty Nilsson are exhaustively viewing as many films as they can at Sundance 2010 in Park City, Utah. Click on the photo or link below to view photos and videos as they watch film, network with directors and actors, learn what is involved to get their projects funded and discovered, and just enjoy the beautiful natural surroundings. Sundance finished Saturday night and their trip winds down Sunday evening.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/sff2010.jpg',
    source: 'web'
  },
  {
    id: '2010-01-29-2589',
    date: '2010-01-29',
    year: 2010,
    headline: 'FFA Show and Sale Is Almost Here',
    body: '2010-01-29 16:17:21\', \'The annual FFA Show and Sale will be here before you know it. It will showcase livestock and non-livestock projects of the hard working FFA students who participated took an Ag Science class, participated in FFA Chapter events and spent time in community service activities in order to qualify for the Show & Sale. They also invest substantial time, effort and financial resources in their livestock projects including feeding and caring for their animals on a daily basis. The FFA Alumni will auction a quilt created by FFA members with proceeds going to a scholarship fund for graduating FFA seniors. A silent auction will also be hosted to help fund capital improvements at the Ag Center. (photo: Zach Pierce and his project goat "Red.") The days and times for the events are:\\n\\n Thursday, February 4th \\n\\n9A-2P Ag Adventure: Children’s Barnyard 5P Rabbit Show followed by Broilers, Turkeys, Heifers & Steers Friday, February 5th 5P Goat Show, followed by Lambs and Swine Saturday, February 6th 11A Silent Auction opens 11:30 Buyer Luncheon 1P Live Auction\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/zach.jpg',
    source: 'web'
  },
  {
    id: '2010-02-06-2584',
    date: '2010-02-06',
    year: 2010,
    headline: 'Wrap it: Another Success',
    body: '2010-02-06 16:02:44\', \'The 2010 FFA Show and Sale is complete. Our students proudly showed their projects and bid farewell to them as the weekend\\\'s events completed. The total receipts for the sale was over $171,000. Congratulations to our students for their hard work, and many thanks to the support and guidence of our teachers Christy Capps and Vanessa Collier , our Alumni Association, parents, community members, and the financial support from our buyers.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ffa2010.jpg',
    source: 'web'
  },
  {
    id: '2010-02-17-2579',
    date: '2010-02-17',
    year: 2010,
    headline: 'Memorable Day',
    body: '2010-02-17 15:57:19\', \' Commander Mike Hale , USN was onhand today to conduct the Annual Military Inspection of our NJROTC Unit. All cadets were here early and spent the first two hours of the day in personnel inspection, platoon drills, color guard and armed/unarmed drill teams and topping it off with the pass-in-review. You can view slides and videos of the day by clicking on the photo. Congratulations to Col. Sluis, Master Chief Heuser and our awesome Cadet staff who worked hard with the rest of the cadets to make it happen.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/inspection.jpg',
    source: 'web'
  },
  {
    id: '2010-02-18-2574',
    date: '2010-02-18',
    year: 2010,
    headline: 'Award Winner',
    body: '2010-02-18 15:53:18\', \' Beverly Litton was recognized by the Gulf Coast Tech Prep Consortium for her success in career counseling Spring Branch iSD students. As one of her nominations read, "Beverly does not say no to anyone and will do everything in her control to help the students reach their goals." The Award of Counseling Excellence is given each year at the Counselor and Administraor Conference for the Gulf Coast area.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/litton.jpg',
    source: 'web'
  },
  {
    id: '2010-02-23-2567',
    date: '2010-02-23',
    year: 2010,
    headline: 'Fellow Finalist',
    body: '2010-02-23 15:48:39\', \'Filmmaking instructor Patty Nilsson has been named one of seven finalists in the USA in C-SPAN\\\'s 2010 Teacher Fellowship Program . If one of the 3 fellows selected, Patty will spend a month in Washington DC this summer developing new programming for educators. Congratulations Patty and good luck in the final round.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/nilsson.jpg',
    source: 'web'
  },
  {
    id: '2010-02-25-2560',
    date: '2010-02-25',
    year: 2010,
    headline: 'Learning the Ropes',
    body: '2010-02-25 15:42:25\', \'Agricultural Science students Elvira Ayala, Andrew Johnson, Sofia Caylor, Allison Jubert and Claudia Martinez are in Austin today with teacher Christy Capps for Texas FFA Day at the State Capitol. They are learning about our state political process, specifically addressing agriculture and agricultural education, via workshops and presentations conducted by key political figures in Texas.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/ffaaustin.jpeg',
    source: 'web'
  },
  {
    id: '2010-03-05-2555',
    date: '2010-03-05',
    year: 2010,
    headline: 'Καλώς Ορίσατε',
    body: '2010-03-05 15:32:29\', \'Today we had the honor of welcoming friends from our sister school in Thessalonika, Greece . High school students Sofia, Olga, Vasilis, Tasos and Michaela along with their teacher Anna spent the day visiting and interacting in many of our programs and learning a little about USA high school life, Guthrie style. This is the sixth year we have hosted students from the American Farm School, a prestigious secondary school and college located in Northern Greece. For more information, visit their website at http://www.afs.edu.gr They are able to visit the US due in part to the generosity of the Texas Global Educataion & Cultural Exchange and the Macedonian Association of Greater Houston. Click on the photofor a slideshow of their visit.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/afs10.jpg',
    source: 'web'
  },
  {
    id: '2010-03-11-2548',
    date: '2010-03-11',
    year: 2010,
    headline: 'Grit and Determination',
    body: '2010-03-11 15:23:29\', \'Ag Science student Brent Blume participated in the calf scramble at the Houston Livestock Show and Rodeo last night. After a lot of hard work, determination and endless running in front of thousands of screaming fans, Brent caught a 350 pound calf. He will now receive a registered heifer to raise as an FFA project over the upcoming year, returning with it to the next HLSR. The rodeo has the world’s largest and longest running calf scramble with roughly 60 years of dedication to scramblers.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/Brent.jpg',
    source: 'web'
  },
  {
    id: '2010-03-27-2542',
    date: '2010-03-27',
    year: 2010,
    headline: 'Worldwide Leaders in Smart',
    body: '2010-03-27 14:18:20\', \'The National Academic Exam is an annual event held to promote and recognize outstanding academic achievement among NJROTC cadets and their units from around the world. This year a total of 1,615 teams participated in the worldwide competition that included all50 states, Sigonella and Naples Italy, Rota Spain, Sasebo and Yokosuka Japan and Guam. NJROTC Cadets participating included Ambar Balderas, Ines Capuchino, Daniel Martinez, John Menicke, Eric Wilkerson, Tony Dinh, Elson Perez, Jonathan Pineda, Ruby Rivera and Cecilia Silva. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/world.jpg',
    source: 'web'
  },
  {
    id: '2010-04-07-2536',
    date: '2010-04-07',
    year: 2010,
    headline: 'A Great Honor',
    body: '2010-04-07 14:16:01\', \'Culinary Arts Instructor Jennifer Cardenas , Guthrie\\\'s Teacher of the Year, has been named a finalist for SBISD\\\'s Secondary Teacher of the Year . Congratulations Jennifer - you are so worthy and deserving of this honor and recognition! The three finalists interview on April 15th with the TOY committee who will choose the district\\\'s Teacher of the Year. Good luck Jennifer!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/jennifer.jpg',
    source: 'web'
  },
  {
    id: '2010-04-09-2530',
    date: '2010-04-09',
    year: 2010,
    headline: 'He Never Forgets So It Will Never Happen Again',
    body: '2010-04-09 14:12:51\', \'Do you remember what you were doing when you were 13? Walter Kase does, and vividly recalls the harrowing experiences of five Nazi concentration camps during WW2. Mr. Kase has spent many years talking to students about the power of hate and how it was nearly successfully used to extinguish a whole race of people. Last week we were honored for him to visit our school, during which time he agreed to be interviewed on camera. This is the central focus of Guthrie\\\'s No Place For Hate campaign for 2010, which will be discussed school wide on Tuesday. To view the video, click on his photo.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/walterKase.png',
    source: 'web'
  },
  {
    id: '2010-04-14-2520',
    date: '2010-04-14',
    year: 2010,
    headline: 'No Questioning This',
    body: '2010-04-14 14:08:39\', \'Culinary Arts student Rigoberto Ruiz is the recipient of the Guthrie Center “ Character Without Question ” Award for 2009-2010. Rigo\\\'s passion and talent for the food and beverage industry has propelled him into the role of afternoon manager of Common Grounds Cafe. Chef Erin Land\\\'s nomination emphasized his dependability, initiative, honesty, integrity and care for his fellow students. At Spring Woods High School, Rigo has participated in Children Giving Back, a student tutorial program for fellow students. After graduation, Rigo plans to attend the UH Conrad Hilton College of Hotel and Restaurant Management. His focus, work ethic and positive attitude will guide him to achieve his career dreams. Congratulations, Rigo!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/Rigo.jpg',
    source: 'web'
  },
  {
    id: '2010-04-17-2515',
    date: '2010-04-17',
    year: 2010,
    headline: 'A Formal Affair',
    body: '2010-04-17 14:03:59\', \' NJROTC Cadets and dates attended the annual Military Ball this evening held on the 10th floor of the new Marriott Energy Corridor Hotel. Opening ceremonies included our outstanding Color Guard and singing of our National Anthem by culinary Chef Erin Land , and reading of the Rime of the Ancient Mariner poem by Master Chief Heuser . Attendees enjoyed a delicious dinner followed by an inspirational speech from former XO and current Marine Gabriela Villalobos . Our seniors had an opportunity to say goodbye and thanks, then they all danced the night away.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/mb2010.jpg',
    source: 'web'
  },
  {
    id: '2010-04-21-2510',
    date: '2010-04-21',
    year: 2010,
    headline: 'Fun and Educational',
    body: '2010-04-21 13:59:33\', \' Cosmetology students toured Farouk USA headquarters today, makers of Chi and Biosilk hair products. They viewed the electronic manufacturing area for the CHI curling iron, visited the microbiology lab for the manufacturing of the hair products and saw the production end of the manufacturing of hair color. They learned the meaning of quality control which was stressed throughout the tour. Owner Farouk Shami visited with the students and gave a mini Texas government lesson as he ran for governor earlier this year.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/groupShami.jpg',
    source: 'web'
  },
  {
    id: '2010-04-24-2500',
    date: '2010-04-24',
    year: 2010,
    headline: 'Bravo Zulu',
    body: '2010-04-24 13:53:36\', \'In most endeavors in life, getting to the top is a challenge, but staying at the top is the real test. It proves not only a desire to succeed but also a culture and imbedded discipline to achieve goals. Once again our Navy JROTC program has been named a " Distinguished Unit with Academic Honors " for the 5th year in a row and 9th time in 15 years. To top it off, they scored second highest in the State of Texas among all NJROTC units. Congratulations Col. Sluis, Master Chief Heuser, our outstanding cadet leaders and the entire unit for begin recognized for so many things, including over 3300 community and school service hours, and one of the highest academic rankings in our great state. UPDATE: Congratulations also for their success in the recent Area 10 Postal where the unit was 3rd overall in the 300 yard shuttle run.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/nj.jpg',
    source: 'web'
  },
  {
    id: '2010-04-30-2489',
    date: '2010-04-30',
    year: 2010,
    headline: 'Take that Katy!',
    body: '2010-04-30 13:48:22\', \'FFA Advisors Vanessa Collier & Christy Capps took students to compete at the District 7 competition in Katy today. Advancing to Area include Star Greenhand in Agribusiness: Sofia Caylor , Star Chapter Farmer: Lesli Evans , Star Lone Star in Agribusiness: Cody Matecki, Equine Proficiency: Emily Jernigan, Diversified Livestock Proficiency, Specialty Animal Proficiency and Small Animal Proficiency: Cody Matecki. Lone Star Degrees were conferred upon Cody Matecki, Allison Jubert, Ashley Davis-Nelson, Kelton Axtell and Emily Jernigan. Congratulations to all these students as the 09-10 season winds down.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/04/Texas-FFA-Logo.jpg',
    source: 'web'
  },
  {
    id: '2010-05-01-2481',
    date: '2010-05-01',
    year: 2010,
    headline: 'Stadium Designers',
    body: '2010-05-01 13:28:07\', \'Another successful year was earned by our Architectural Design students at the Houston Chapter of American Institute of Architects, Michael G. Meyers High School Design Competition. This is the ninthMGM competition that Sonia Greiner’s students have placed and participated, with over 60 entrants this year. The students designed a soccer stadium for the Houston Dynamos for the 2010 World Cup. Students were introduced to Senior VP of the Houston Dynamos, Steven Powell who was a judge and presenter at this year’s award ceremony. Of the 12 MGMC awards, our students received six, amounting to over $7,300of scholarship money. Students will also have the opportunity to attend the UH\\\'s 2010 Architectural Summer Discover Program. Congratulations to Alison Cottet ( Dynamo Favorite), Ariel Contreras and Luis Jimenez (Best Computer Rendering), Walter Mata (Best Sketches), Nichole Byrd & Loraine Ng (3rd Place Group), Joe Landrum & Valerie Suarez (2nd Place Group), and Samantha Cuestas (3rd Place Individual). Instructor Sonia Greiner was also honored for her dedication to her students and support of this 20 year old competition.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/mgm3.jpg',
    source: 'web'
  },
  {
    id: '2010-05-05-1562',
    date: '2010-05-05',
    year: 2010,
    headline: 'This Mum’s For You',
    body: '2010-05-05 16:54:11\', \' Our Floral Design class made “It’s a Boy” and “It’s a Girl” baby mum door knockers for the new mom’s at Memorial Hermann Memorial City’s Labor and Delivery Unit for Mother’s Day. Claudia Martinez, Jacob Pope, Stephanie Couch, Marshall Holland and Gerry Gonzalez were on hand to deliver them to Nurse Bridget , who will give to the proud parents this weekend. The students and teacher Vanessa Collier had a tour of the unit, NICU area, nursery room and met many of the wonderful nursing staff. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/05/mum.jpg',
    source: 'web'
  },
  {
    id: '2010-05-12-1555',
    date: '2010-05-12',
    year: 2010,
    headline: 'Live, From Guthrie - It\'s Student Talk',
    body: '2010-05-12 16:46:07\', \' Jack Bentele (SHS), Tai Sommers (MHS) and Omar Itani (MHS) are interviewed by "STUDENT TALK" Host Evan Baker (SHS). This student-produced broadcast is created by the VideoTechnology students at The Guthrie Center and can be seen weekly on HCC-TV or on Guthrie Center FilmsChannel on Vimeo: http://vimeo.com/channels/guthriecenterfilms \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/02/studenttalk.jpg',
    source: 'web'
  },
  {
    id: '2010-05-15-1547',
    date: '2010-05-15',
    year: 2010,
    headline: 'Officer Salute',
    body: '2010-05-15 14:08:14\', \' Tyler Lewis, former NJROTC Cadet and son of our CJ instructor Darrell Lewis, graduated from the University of Missouri and completed officer training this month. Today Tyler was sworn in as a Second Lieutenant in the US Marine Corps and was awarded a Mameluke sword (the official officer’s sword of theMarines) for being the top Midshipman in his unit, a combined Navy/Marine Corps unit which include 3 combat veterans. Our NJROTC instructors joined Tyler\\\'s family at the commissioning, with Col. Sluis administering the Oath of Office and Master Chief Heuser giving his former student his first salute as an officer. Congratulations Tyler, and thank you for your service! \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/02/tyler.jpg',
    source: 'web'
  },
  {
    id: '2010-05-18-1540',
    date: '2010-05-18',
    year: 2010,
    headline: 'Tribute To Our Winners',
    body: '2010-05-18 13:53:08\', \' Career & Technical Education scholarship recipients and their parents & teachers were honored today at a luncheon held at the Omni Houston Hotel Westside. While open to high school students across the district, there were many attending Guthrie classes who walked away with a check to start their college career. Congratulations to Autumn McGowann (Hotel), Josue Martinez (Computer Tech), Brian Smith (NJROTC), Cecilia Argueta (Hotel), Leslie Gonzalez (Hotel), Loraine Ng (Architecture), Cole Jodon (Internships & Film) and Rigo Ruiz (Culinary & Internships) . \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/02/IMG_0971.jpg',
    source: 'web'
  },
  {
    id: '2010-05-26-1504',
    date: '2010-05-26',
    year: 2010,
    headline: 'OSA Helps Pay The Way',
    body: '2010-05-26 11:59:42\', \' \\n\\n Sonia Greiner\\\'s 3rd year Architectural Design students, Loraine Ng and Nilsen Sagastume, were the recipients of the annual Organization of Student Architects College Scholarship. Each student was awarded $1000 towards college expenses. Loraine will be attending UT Austin and Nilsen has been accepted to Pratt. Good luck to both of you.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/02/OSA2.jpg',
    source: 'web'
  },
  {
    id: '2010-06-02-1488',
    date: '2010-06-02',
    year: 2010,
    headline: 'Farewell Friends',
    body: '2010-06-02 11:42:04\', \' \\n\\n This year as we wrap up, we bid a fond farewell with thankful hearts to five colleagues who have given 99 years to education, mostly at The Guthrie Center. \\n\\n Craig Clark (Automotive Tech), Linda Nicodemus (Cosmetology), Trudy LeBlanc (Special Education), Maggie Chaudier (Support Specialist) and Cristina Castellon (Operations) retire with decades of memories and leave friends and their work family to begin a new and exciting chapter in their lives. Thank you all for your friendship, dedication and contributions to make this a great place to learn and work!',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/06/83.jpg',
    source: 'web'
  },
  {
    id: '2010-08-03-224',
    date: '2010-08-03',
    year: 2010,
    headline: 'A Busy Summer Ends Soon',
    body: '2010-08-04 02:05:53\', \' \\n\\n August serves both as the hottest month of the year and the countdown to a new beginning of classes at Guthrie. Our summer has been eventful and exciting, with more happening every day. On the student front, we had both Culinary and Hotel Management weeklong camps and competitions with our partners at Houston Community College and the Conrad Hilton College at UH . Our NJROTC cadets had both their leadership retreats, competitions and are in the middle of Mini-Skills Camp for incoming NS1\\\'s. Ag Science FFA students attended their state convention and received many animal projects. Eventful school news includes the addition of two new teachers - Xavier Martinez joins us as our 2nd Architectural Design Instructor and we also welcome Chris Olson to our 3D Animation department. Our Culinary facilities are in the process of being rebuilt, and there is plenty of other work happening around campus. We have also been fortunate to host our friends from Spring Woods HS during their construction phase. August 23th is the return to school and we will be ready to provide you once again a path to excellence in education!',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/10/summerHCC.jpg',
    source: 'web'
  },
  {
    id: '2010-08-15-72',
    date: '2010-08-15',
    year: 2010,
    headline: '3D Animation',
    body: '2010-08-16 01:24:04\', \'Learn to develop and communicate your animation ideas through 3D modeling, animation, concept drawings, storyboards, virtual lights & cameras, and scene design using the same techniques and software used by animation professionals.\\n\\n 3d animation 2013-2014 \\n\\n 3D Animation \\n\\nLearn to develop and communicate your animation ideas through 3D Modeling, animation, concept drawings, storyboards, virtual lights & cameras, and scene design using the same techniques and software used by animation professionals.\\n\\nGrades: 9-12 Credit/Course ID: 2 / 13008300 / CAV11A & CAV11B\\n\\n 3D Animation 2 | Advanced \\n\\nExpand the skills and creativity you developed in Animation! Skills taught include advanced modeling and texturing techniques, effective in-depth storytelling, visual effects, and integrated audio. Advanced Animation students will develop video portfolios of their work.\\n\\nPrerequisite: Successful completion of Animation.\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13008400 / CAV21A & CAV21B\\n\\n 3D Animation 3 | Practicum 1 \\nUtilize the latest technologies in 3D Modeling, Animation and Motion Capture for developing real time graphics, game development and interactive communication.\\n\\nGrades: 11-12 Credit/Course ID: 2 / 13009000 / CAV83A & CAV83B\\n\\n 3D Animation 4 | Practicum 2 \\n\\nThis course expands the use of motion capture as it applies to visual effects. You will explore concepts in layering digital assets into composites for video and film. This also prepares you for working in the industry through real world projects and internships with local business partners, as well as extending animation studies at a college or university.\\n\\nGrades: 12 Credit/Course ID: 2 / 13009010 / CAV93A & CAV93B\\n\\n 3d Animation One-Pager',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-86',
    date: '2010-08-15',
    year: 2010,
    headline: 'Agricultural Science',
    body: '2010-08-15 14:15:30\', \'Careers in Agriculture and Natural Resources involve planning, managing and performing agricultural production, horticulture and landscaping service planning, managing and performing mining and extraction operations; managing and conserving natural resources; performing related environmental services, and veterinary sciences.\\n\\n ag science for 2013-2014 \\n\\n Advanced Animal Science (State Approved 4th Year Science Credit) \\n\\nThis course is designed for students who want to further their knowledge of the livestock industry. In depth studies include animal industry, anatomy & physiology, and livestock husbandry. Offered Spring Semester Only.\\n\\nPrerequisite: Successful completion of Livestock Production\\n\\n4th Year Science Prerequisite: Completion of Biology, Chemistry, and concurrent with or after Physics.\\n\\nGrades: 11-12 Credit/Course ID: 1 / 13000700 / CTAG15\\n\\n Advanced Plant and Soil Science (State Approved as 4th Year Science Credit) \\n\\nGet out of the classroom! This course is designed around greenhouse management from germinating seedling to marketing a finished product. Learn the techniques involved with propagation, fertilization, and maintenance. Investigations, laboratory practices, and field exercises will be used to develop an understanding of current plant and soil science.\\n\\nPrerequisite: Successful completion of Horticulture Science\\n\\n4th Year Science Prerequisite: Completion of Biology, Chemistry, and concurrent with or after Physics.\\n\\nGrades: 11-12 Credit/Course ID: 1 / 13002100 / CTAG29\\n\\n Equine Science \\n\\nStudents will be exposed to equine science and technology principles that include genetics, anatomy, physiology/nutrition, diseases, pests, and management practices. Topics also include an introduction to the equine industry, various breeds, conformation, selection, care and management, soundness, health, feeding, farrier observation, restraints, general vaccinations and overall managerial duties.\\n\\nGrades: 10-1',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-138',
    date: '2010-08-15',
    year: 2010,
    headline: 'Architectural Design',
    body: '2010-08-16 02:58:13\', \'Want to design your future as an architect? Start your sophomore year at The Guthrie Center for potentially three years of architectural study. Projects are designed to build your portfolio and resume so that you are the best candidate for the college program of your choice.\\n\\nIn your first year of study, you will learn networking techniques, art practices, technical drafting and beginning computer aided drafting skills. You will learn the letter styles used by architects, how to do an “as-built”, how to read a blueprint, how to edit a commercial tenant improvement set of documents and compete in a student design competition. Start building your dream today!\\n\\n architectural design for 2013-2014 \\n\\n Architectural Design \\n\\nWant to design your future as an architect? Start your sophomore year at the Guthrie Center for potentially three years of architectural study. Projects are designed to build your portfolio and resume so that you are the best candidate for the college program of your choice. In your first year of study, you will learn networking techniques, art practices, technical drafting and beginning computer aided drafting skills. You will learn the letter styles used by architects, how to do an “as-built”, how to read a blueprint, how to edit a commercial tenant improvement set of documents and compete in a student design competition. Start building your dream today!\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13004600 / CAC12A & CAC12B Dual Credit: may be available for qualified 11th/12th grade students\\n\\n Architectural Design 2 | Advanced \\n\\nCarry on the dream by taking a second year of architectural study. Building upon knowledge and skills successfully mastered in Architectural Design, you will learn about residential design. You will study building codes, interior design, room relationships and sizes, exterior design, conservation and environmental design and framing methods. Projects added to your portfolio will include designin',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-147',
    date: '2010-08-15',
    year: 2010,
    headline: 'Automotive Tech',
    body: '2010-08-16 03:05:29\', \'Shift into passing gear with the Automotive Technology program!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-151',
    date: '2010-08-15',
    year: 2010,
    headline: 'Commercial Photography',
    body: '2010-08-16 03:11:22\', \'Do you like photos? Are you creative? Transform your passion for images into Commercial Photographic skills and learn a skill that can make you money. As a professional photographer, you can work all around the world in an exciting career full of great opportunities and experiences!\\n\\nIn this unique Guthrie Center class you’ll use a real studio with professional equipment to create an amazing portfolio that can take you to the next level. Juniors and seniors can earn college credit!\\n\\n commercial photography for 2013-2014 \\n\\n Commercial Photography \\n\\nDo you like photos? Are you creative? Transform your passion for images into Commercial Photographic skills and learn a skill that can make you money. As a professional photographer, you can work all around the world in an exciting career full of great opportunities and experiences! In this unique Guthrie Center class you’ll use a real studio with professional equipment to create an amazing portfolio that can take you to the next level. Juniors and seniors can potentially earn college credit!\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13009100 / CAV14A & CAV14B Dual Credit: may be available for qualified 11th/12th grade students\\n\\n Commercial Photography 2 | Advanced \\n\\nTake your Commercial Photography I skills to the next level in this intense course that encourages you to work for outside clients including SBISD, SBISD-TV, HCC-TV and more! Juniors and seniors can potentially earn college credit! Teacher approval required.\\n\\nPrerequisite: Successful completion of Commercial Photography\\n\\nGrades: 11-12 Credit/Course ID: 2 / 13009200 / CAV24A & CAV24B Dual Credit: may be available for qualified 11th/12th grade students\\n\\n CommercialPhoto One Pager',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-158',
    date: '2010-08-15',
    year: 2010,
    headline: 'Cosmetology',
    body: '2010-08-16 04:13:09\', \'Explore your passion for beauty. Open the door to your future by joining one of the most exciting and diverse careers in the glamour industry.\\n\\nCosmetology offers hands-on training, amazing guest artists, field trips and a challenging curriculum focused on competition, salon skills and preparing for the Texas Cosmetology State Examination. You will earn State Cosmetology clock hours that are transferable to any community college or private beauty school program within the state of Texas if you do not complete before graduation.\\n\\nCosmetology classes are double-blocked, require a high school reading level, and you will need to purchase a kit that includes the tools you need to for employment in the field.\\n\\n cosmetology for 2013-2014 \\n\\n Cosmetology | Salon Skills & Beauty Fundamentals (These are double blocked classes)\\n\\nThis program offers hands-on training, amazing guest artists, study trips and a self-paced curriculum focused on competitions, salon skills, and Texas Cosmetology State Examination. Students are responsible for Texas Department Licensing Registration fee and supplies.\\n\\nGrades: 10-11 Credit/Course ID: 3 / 13025200 / CHU19A & CHU19B 1 / N1290010 / ADMCOA & ADMCOB\\n\\n Cosmetology 2 | Advanced Salon Skills & Exam Preparation (These are double blocked classes)\\n\\nGraduate from high school with your Texas Cosmetology State License! Maximize skills and theory learned in Cosmetology 1 through an intense focus on industry readiness and the Texas Cosmetology State Licensing Examination. Upon successful completion of Cosmetology 2 you will have an opportunity to obtain your Texas Cosmetology State License by passing written and practical examinations given for licensure certification. Students are responsible for State Licensure Examination fees and supplies.\\n\\nPrerequisite: Successful completion of Cosmetology 1\\n\\nGrades: 11-12 Credit/Course ID: 3 / 13025300 / CHU29A & CHU29B t echnical certification option: Texas Cosmetolog y',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-164',
    date: '2010-08-15',
    year: 2010,
    headline: 'Criminal Justice',
    body: '2010-08-16 04:17:26\', \'Come explore the Criminal Justice program at The Guthrie Center. Learn which career path in this field you find the most intriguing.\\n\\n criminal justice for 2013-2014 \\n\\n Court Systems and Practices | Pre Law \\n\\n“Order in the Court!” This class is an overview of the federal and state court systems with emphasis on constitutional laws for criminal procedures as well as, civil law. Preparation and delivery of both prosecution and defense legal strategies are brought to life during mock trials in a courtroom environment.\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13029600 / CLW12A & CLW12B\\n\\n Forensic Science (State Approved as 4th Year Science Credit) \\n\\nBugs, Bullets, Bytes and Band-Aids! Find out how science solves crime. If you like watching CSI and other true crime shows, then this course is for you. Find out what science can and cannot do in crime fighting. Is it real or just TV? You might be surprised!\\n\\nPrerequisites: Completion of Law Enforcement 1 is recommended.\\n\\n4th Year Science Prerequisite: Completion of Biology, Chemistry, and concurrent with or after Physics.\\n\\nGrades: 11-12 Credit/Course ID: 1 / 13029500 / CTLW50\\n\\n Law Enforcement \\n\\nWhat is the “Thin Blue Line”? Explore the history, organization, and functions of local, state, and federal law enforcement. Explore constitutional law, the US legal system, criminal law, law enforcement terminology, and the classification and elements of crime.\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13029300 / CLW11A & CLW11B\\n\\n Law Enforcement 2 \\n\\nIf you liked Law Enforcement 1 and Forensics, you can dig deeper into the day to day aspects of policing. What does it really mean to protect & serve? Law Enforcement 2 goes deeper into career choices in law enforcement and looks at the day to day challenges faced in protecting and serving people. This course includes the ethical and legal responsibilities, operation of police and emergency telecommunication equipment, and courtroom testimony.\\',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-167',
    date: '2010-08-15',
    year: 2010,
    headline: 'Culinary Arts',
    body: '2010-08-16 04:21:06\', \'This program will introduce you to careers in the hospitality industry, with hands on cooking experiences. We provide Individual and group work activities as we research each area of the industry. You will investigate a variety of restaurants, hotels, cruise lines, catering and gourmet take home. You will also be provided the opportunity to gain valuable cooking techniques involving vegetables, egg preparation, meats and starches.\\n\\n culinary arts for 2013-2014 \\n\\n Culinary Arts \\n\\nCulinary Arts begins with the fundamentals of cooking, the science of baking, management and production skills, and safety/sanitation procedures. Along with guest chefs, we will help you develop and refine your creative side. You will master the steps of recipe development and event planning where you will actually prepare specific dining functions throughout the school year.\\n\\nGrades: 9-12 Credit/Course ID: 2 / 13022600 / CHT14A & CHT14B Dual Credit: may be available for qualified 11th/12th grade students\\n\\n technical certification option: ServSafe Food Handlers Certification and ProStart Foundations of Restaurant Management & Culinary Arts 1 \\n\\n Culinary Arts 2 | Advanced \\n\\nAdvanced Culinary Arts will extend content and enhance skills introduced in Culinary Arts by infusing high-level, industry-driven content to prepare students for success in higher education, certifications and/or immediate employment. This mid-level course will increase your depth of knowledge and experience in specific areas including baking, protein selection, advanced nutrition and sustainability. As an Advanced Culinary Arts student, you will trace the origin of food recipe and preparation. You will have a complete understanding of front and back of the house roles and how these areas work together to create a successful operation. You will prepare for national certifications that will provide you an advantage for scholarships, college admittance and employment.\\n\\nGrades: 10-12 Cre',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-170',
    date: '2010-08-15',
    year: 2010,
    headline: 'Digital Film & Video Production',
    body: '2010-08-16 04:24:04\', \'Lights! Camera! Action! Do you enjoy watching movies and music videos? Are you artistic and creative?\\n\\nThe Guthrie Center has a film class unlike any other class you’ve ever taken before. You’ll learn how to write, edit and produce professional videos and create a portfolio of your work that can spruce up your college resume. You’ll learn how to edit with Final Cut Pro, the leading editing software in Hollywood.\\n\\nWhether you want to go to Hollywood, start your own business or learn this skill as a hobby, this class will give you an experience you won’t forget. Juniors and seniors can earn college credit. Bring your computer skills and your creativity.\\n\\n digital filmmaking for 2013-2014 \\n\\n Film & Video Production \\n\\nLights! Camera! Action! Do you enjoy watching movies and music videos? Are you artistic and creative? The Guthrie Center has a film class unlike any other class you’ve ever taken before. In this class you’ll learn how to write, edit and produce professional videos and create a portfolio of your work that can spruce up your college resume. You’ll learn how to edit with Final Cut Pro, the leading editing software in Hollywood. Whether you want to go to Hollywood, start your own business or learn this skill as a hobby, this class will give you an experience you won’t forget. Juniors and seniors can potentially earn college credit. Bring your computer skills and your creativity.\\n\\nGrades: 9-12 Credit/Course ID: 2 / 13008500 / CAV12A & CAV12B Dual Credit: may be available for qualified 11th/12th grade students\\n\\n Film & Video Production 2 | Advanced \\n\\nLights! Camera! Action! --- On HIGH GEAR! Take your A/V Production skills to the next level and set yourself apart. This class is for students interested in film as a career or as a serious money making hobby. Students write, edit and produce for film competitions and recognition. Shoot your own movie. Tell your own story. Write a feature-length script. If available, juniors & ',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-173',
    date: '2010-08-15',
    year: 2010,
    headline: 'Hotel Management',
    body: '2010-08-16 04:27:57\', \'Unique “hands-on” experience offered at the luxurious Omni Houston Hotel Westside.\\n\\nDevelop your expertise and skills from several areas of the hotel including front desk, concierge, restaurant, banquets, kitchen, accounting, sales, engineering and human resources. Network with management, build self-confidence and enhance your resume. The Travel and Tourism focuses on resorts, cruises, amusements, attractions, international travel and destination geography.\\n\\nEarn three free college credits from the Conrad Hilton College at the University of Houston and six dual credits in hospitality and tourism from Houston Community College. Highlights include many exciting field trips, an optional four-day tour of New York City, and competitive events both local and out-of-state.\\n\\nInterested in an exciting career in hospitality and tourism? Join this popular and rewarding practicum today! Transportation to the Omni is available.\\n\\n hotel management for 2013-2013 \\n\\n Hotel 1 | Hotel Management with Practicum 1 --- Hotel 2 | Travel & Tourism with Practicum 2 \\n\\n(These are double blocked classes)\\n\\nAn off-campus internship located at the luxurious Omni Houston Hotel Westside on the Katy Freeway. Gain valuable job skills and self-confidence as you experience a hands-on education in several hotel departments. Choose your training at the front desk, concierge, banquets, restaurant, kitchen, gift shop, sales and marketing, accounting, human resources, switchboard, engineering and housekeeping. Participate in exciting study trips, competitive events and an optional trip to New York City. Earn college credits through the Conrad Hilton College and Houston Community College. Network with the outstanding managers of the Omni Hotel. If you want to get an early start in your career, then join this popular and proven practicum. Space is limited. Transportation to Omni is provided.\\n\\nGrades: 10-12 Credit/Course ID’s see below for year 1 & 2\\n\\n1/13022300/CHT11A',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-177',
    date: '2010-08-15',
    year: 2010,
    headline: 'Internships',
    body: '2010-08-16 04:31:29\', \'As a junior or senior would you love to… earn 2 or 3 credits for working in your chosen career? Obtain a healthier attitude about yourself & your future? Be treated like a professional? Write a power resume? Know what colleges want you? Earn volunteer and community service hours? Belong to a professional organization? Learn how to out interview your competition by avoiding traps? Understand how powerful your first impression is? Know the psychology behind dressing for success? Become a master of time management? Define your short and long term goals? Improve your personal leadership skills?\\n\\nIf you have answered yes to most of these questions then you need to be an Intern! This is where the “driven” get it done!\\n\\n internships for 2013-2014 \\n\\n Internships \\n\\nThis course provides opportunities for you to participate in a learning experience that combines classroom instruction with paid business and industry employment experiences and supports strong partnerships among school, business, and community stakeholders. The goal is to prepare you with a variety of skills for a fast-changing workplace.\\n\\nGrades: 11-12 Credit/Course ID: 2 - 3 / 12701300\\n\\n Internships One Pager',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-190',
    date: '2010-08-15',
    year: 2010,
    headline: 'Robotics & Automation',
    body: '2010-08-16 04:48:43\', \' Robotics is a course where you will understand the concept of making robotic devices do what you program them to do. Through implementation of the design process, you will transfer advanced academic skills to component designs in a project-based environment. Learn by building prototypes or using simulation software to test your designs.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-15-232',
    date: '2010-08-15',
    year: 2010,
    headline: 'Computer Tech',
    body: '2010-08-15 05:18:48\', \'These programs will prepare you to take CompTIA’s A+ and N+ Certification exams. With these certifications, you will be ready to go to work in the high-tech and high-paying IT jobs of tomorrow.\\n\\nThrough hands on activities and labs, you will learn how to assemble and configure computers and networks, install operating systems, software, and troubleshoot hardware, software and network problems. This class of current and future IT careers will help you discover the skills and education you will need for success in the field.\\n\\n computer tech for 2013-2014 \\n\\n Computer Maintenance \\n\\nThese programs will prepare students to take CompTIA’s A+ and N+ Certification exams. With these certifications, you will be ready to go to work in the high-tech and high-paying IT jobs of tomorrow. Through hands on activities and labs, you will learn how to assemble and configure computers and networks, install operating systems, software, and troubleshoot hardware, software and network problems.\\n\\nGrades: 9-12 Credit/Course ID: 2 / 13027300 / CIT11A & CIT11B Dual Credit: may be available for qualified 11th/12th grade students technical certification option: Comptia A+ Certification \\n\\n Cisco Networking \\n\\nThis program will prepare students to take the Cisco CCNA or CCENT Certification exams. With these certifications, you will be ready to go to work in the high-tech and high-paying IT jobs of tomorrow. Through hands on activities and labs, you will learn how to configure routers and set up small networks using many commercial design and network administrator tools.\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13027400 / CIT12A & CIT12B Dual Credit: may be available for qualified 11th/12th grade students technical certification option: Cisco Entry Networking Technician \\n\\n Cisco Networking 2 | Research in IT \\n\\nIn this second year of Cisco Networking, you will gain additional knowledge and experience in preparation of CCNA/CCENT certifications. Successful comple',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-19-221',
    date: '2010-08-19',
    year: 2010,
    headline: 'Science Options',
    body: '2010-08-20 02:01:38\', \' \\n\\n Two brand new classes offered at Guthrie this year will serve as a forth year science credit . Forensic Science (part of Criminal Justice) will be taught in the fall and spring semester. Advanced Animal Science will be offered in the spring semester at our Ag Science center on Brittmoore.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-08-24-215',
    date: '2010-08-24',
    year: 2010,
    headline: 'Bigger, Better, Stronger',
    body: '2010-08-24 20:53:04\', \' We begin our 38th year serving our students with new classes, new faces, expanded and relocated programs, classroom makeovers here and there and a major renovation of one of our programs. All CTE classes in Texas have been overhauled, and are in place now throughout Spring Branch ISD. \\n\\n Joining our staff. we welcome Michael Ortiz as our 3rd Filmmaking teacher and Olga Caballero in Criminal Justice as we double that program. Linda Newnum also joins us as our teacher specialist for any student desiring assistance. Towards the end of the semester we will unveil our new Culinary Arts facility, which will triple in size including a bakery, and the return of our Common Grounds Cafe .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-09-06-201',
    date: '2010-09-06',
    year: 2010,
    headline: 'Blood Drive, Commit For Life',
    body: '2010-09-06 05:18:32\', \' \\n\\n Our NJROTC cadet leaders are organizing and sponsoring a Blood Drive in partnership with the Gulf Coast Regional Blood Center on Monday, September 27 from 11 to 3 PM. Students 16 and under will need parental consent prior to the day, and the drive will be open to the public. For additional information, click here to download the flyer or give us a call at 713.251.1300.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/10/blood-drive-090610.jpg',
    source: 'web'
  },
  {
    id: '2010-09-18-195',
    date: '2010-09-18',
    year: 2010,
    headline: 'FFA Competition At the Washington County Fair',
    body: '2010-09-18 07:13:16\', \' This weekend, FFA members competed at the Washington County Fair. Heifer exhibitors included Janie Garnier, who won both of her classes with her Red Angus calf and was also named Reserve and Grand Champion, Zach Pierce exhibited his Red Brangus Heifer to win both classes and a Reserve Champion, and Maggie Bass showed her Simbra Heifer to a 5th and 6th place. Spring Branch FFA had three Steer exhibitors including Lesli Evans with two 2nd placings, Sofia Caylor with a 2nd and 3rd place finish, and Janie Garnier with two 4th placings. Representing the chapter in Livestock Judging was Andrew Johnson. Elsewhere, FFA students attended the District 7 FFA meeting held at the Merrill Center in Katy where they met district officers, mingled with students from across Houston area and honed their leadership skills. Later this year, students will participate in activities above the chapter level to advance their FFA degrees and awards.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-09-23-14215',
    date: '2010-09-23',
    year: 2010,
    headline: 'Referral',
    body: '2010-09-23 18:16:03\', \'Loading…\\\\n\\\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-04-318',
    date: '2010-10-04',
    year: 2010,
    headline: 'Joe Lynch, Robotics & Automation',
    body: '2010-10-04 06:53:22\', \'I teach both Robotics & Automation and Computer Maintenance here at The Guthrie Center. I grew up in Burlington, Vermont and moved to Houston where I was working in the electronics field for about sixteen years.\\n\\nThe Guthrie Center has given me the opportunity to work with students interested in any kind of engineering or computer field and I have enjoyed doing that in my years here.\\n\\nPlease take the time to find out more about these programs. It might just be what you are looking for.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-05-642',
    date: '2010-10-05',
    year: 2010,
    headline: 'Harris County Fair Queen',
    body: '2010-10-06 01:14:36\', \' Spring Woods Junior and FFA member Alicia Higginbotham was named the 201 Harris County Fair Queen. Read the HCF press release below, and join us in congratulating Alicia! \\n\\n PRESS RELEASE: October 2, 2010 \\n The 2010 Miss Harris County Fair Royalty pageant was held in the McAnelly Hall of Houston Farm and Ranch facilities on October 2, 2010. \\n\\n The purpose of this pageant is to select young ladies who are most representative of Harris County that possess outstanding attributes of charm, personality, intelligence and beauty .The Fair Queen and her royalty court shall attend various functions of the 2010 Harris County Fair and support the Fair when asked for assistance. They shall promote the principals of the Harris County Fair and The Houston Farm & Ranch Club throughout their yearlong reign. \\n\\n The contestants are scored in the following areas: The queen interviews included scoring on their interview questions and etiquette as well as their appearance and presentation during those interviews. All the ladies are scored on their self introduction on stage, modeling, appearance, attire and personality and the all important question on stage. \\n\\n The Harris County Fair is Oct 20-23, 2010 with the auction beginning at 1 pm on the 23 rd at Houston Farm and Ranch Club. Harris County Fair is produced by Houston Farm and Ranch. \\n\\n 2010 Miss Harris County Fair Queen- Alicia Higginbotham is 16 yrs old and in the FFA at Spring Woods High school where she is in the 11 th grade. Alicia has been riding horses since she was three. She has been in FFA at Spring Branch since she was in 8 th grade. She is the reigning champion for Showmanship for the past two years showing her heifers at her Spring Branch ISD Show and Sale. She is currently raising 2 heifers and a lamb. Alicia’s goal is to attend Texas A & M and become a large animal vet and to one day open her own vet Clinic.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-14-827',
    date: '2010-10-14',
    year: 2010,
    headline: 'They’re Here!',
    body: '2010-10-15 03:43:35\', \' FFA and Jr. FFA members have been anxiously awaiting the events of this week - the arrival and selection of their smaller animal projects. Swine, lambs, goats and turkeys have joined the steers and heifers already at the Ag Science farm on Brittmoore. Ag Science students learn about what to look for in each breed in order to pick the animal with the highest potential for success at the January FFA Show and Sale. We wish the best to our students who have taken on the responsibility to feed, care for and raise their SAE projects over the next four months.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-20-889',
    date: '2010-10-20',
    year: 2010,
    headline: 'The Jr. UP Experience',
    body: '2010-10-21 01:17:23\', \' Students from Guthrie today joined a few hundred other high school students at The Jr. UP Experience at the Stafford Center. The UP Experience brings in a variety of interesting and innovative speakers from around the world to talk to their audiences. They speak for about 20 minutes each, followed by a Q&A session.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-25-1015',
    date: '2010-10-25',
    year: 2010,
    headline: 'Campus Improvement Team',
    body: '2010-10-25 23:37:39\', \' Greetings everyone, \\n\\n This will be the home of our Campus Improvement Team information, including agendas, minutes, discussions and of course, the plan for 2010-2011. Thanks for being part of our team this year.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-25-1028',
    date: '2010-10-25',
    year: 2010,
    headline: 'October 2010 Meeting',
    body: '2010-10-26 00:39:40\', \' Here are the notes from our October meeting. Thanks for your input. \\n\\n Agenda and Minutes citaganda10122010 \\n\\n Demographics demographics1011 \\n\\n Campus Plan cip1011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-27-1039',
    date: '2010-10-27',
    year: 2010,
    headline: 'FFA at Harris County Fair',
    body: '2010-10-28 03:02:17\', \' Fourteen Spring Branch FFA members competed in the Harris County Fair at Farm and Ranch Club from October 20th to 24th. The competitions were in the market hog, lamb, goat, rabbit and broiler divisions and breeding heifers. There was also a calf scramble event that a couple of our students entered. \\n\\n All animal projects are owned and raised by students at the Spring Branch Agriculture Center. Breeding heifers are kept year-round with market animals raised for only part of the year. The county fair sheep and goats arrived in June, the hogs in July, market rabbits were born in August and the market broilers arrived in September. Ag Science teachers Christy Capps and Vanessa Collier supervise these projects. \\n\\n The Harris County Fair is one of two countywide shows that are held the last weekends of October. Many of these students will also be attending the Harris County Youth Expo held October 27-30th at the Humble Civic Center in Humble, Texas. \\n\\n Market Hog Results Class 1 Noah Moreno 3rd Janie Garnier 7th Makenzie Matecki 9th Class 2 Claudia Martinez 9th Class 3 Jacob Pope 6th Class 5 Allison Jubert 10th Class 6 Lesli Evans 5th Market Lambs Class 4 Cody Matecki 5th Market Goats Class 2 Logan Moreno 6th Class 5 Amy Pope 5th Market Broilers Cody Matecki 4th Market Rabbits Allison Jubert 6th Brianna Duvall 10th ABC Heifers Class 1 Maggie Bass 2nd Lesli Evans 6th Alicia Higginbotham 7th Class 4 Zach Pierce 4th British Heifers Class 1 Janie Garnier 2nd Scramble Heifers Zach Pierce 4th Calf Scramble Event Lesli Evans - Hard Luck Award (which gets Lesli a heifer!)',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-10-28-628',
    date: '2010-10-28',
    year: 2010,
    headline: 'Petroleum Engineering Fair @ Guthrie',
    body: '2010-10-28 09:04:03\', \' \\n\\n We are pleased to host a district wide Petroleum Engineering Fair presented by Society of Women Engineers on November 1, 2010. Any high school student interested in this exciting and rewarding career will be able to hear from people in the profession, learn about scholarship opportunities available, and meet face to face with college representatives. Light snacks and refreshments will be provided. Parents are encouraged to attend with their students! \\n\\n Please join us on Monday 11/1/2010 at 6:00 PM in the Guthrie theater, located on the west side of our building at 10660 Hammerly Boulevard, next to Beltway 8. After the information session concludes, college representatives will be available for questions until 8:30 PM. \\n\\n For additional information please contact counselor Beverly Litton at 713.251.1300 / beverly.litton@springbranchisd.com or the SWE at president@swehouston.org . The Society of Petroleum Engineers is the official sponsor for the event. \\n\\n Flier',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/10/Screen-shot-2010-10-08-at-4.57.29-AM.png',
    source: 'web'
  },
  {
    id: '2010-10-28-790',
    date: '2010-10-28',
    year: 2010,
    headline: 'Community Tuesday Returns November 9th',
    body: '2010-10-28 23:27:44\', \' Our Fall Community Tuesday event kicks off on November 9th from 5:00 to 7:30 PM at Guthrie and the Ag Science Center. A few times each year we open our doors to parents, students and community members who want to see firsthand what goes on in the classrooms and labs at Guthrie. \\n\\n Each program will have a demonstration of the innovative, high-level curriculum taught here daily. Students and teachers will personally design and present mini-lessons in their area of study. \\n\\n CPA Bob Stevenson will be presenting a mini Financial Aid Seminar for parents on the many options and opportunities to pay for their student\\\'s college education. His sessions run from 5:30 to 7 PM. \\n\\n Parents be sure to check out the Information Station that can get you up to speed on the new tools in SBISD that allow you access to your student\\\'s grades and more. \\n\\n This come and go event is a great opportunity to network with our staff, fellow students and each other. We look forward to seeing you there.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/10/gcct.jpg',
    source: 'web'
  },
  {
    id: '2010-11-05-1102',
    date: '2010-11-05',
    year: 2010,
    headline: 'Just Beautiful!',
    body: '2010-11-05 21:19:12\', \' This cool but beautiful November morning was enhanced by our Ag Science students planting new flowers for the cooler times ahead. Many thanks to our students and teacher Christy Capps for making it a welcoming entry at Guthrie. We are getting ready for our Community Tuesday Open House on November 9th - we hope you will come by and visit.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-11-09-1115',
    date: '2010-11-09',
    year: 2010,
    headline: 'November 2010 Meeting',
    body: '2010-11-09 13:58:58\', \' Hi everyone, \\n The agenda for our meeting today is posted below. It is a brief agenda and teachers need to dismiss at 4:45 for open house. We will have barbecue and baked potatoes if you are hungry. See you then. citaganda110901 \\n\\n The agenda and minutes are here: citaganda&minutes110902010 \\n\\n The draft of the computer forensics class is here DRAFTcomputerforensics \\n\\n Thanks again for your support of our school. \\n\\n Joe',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-11-15-11848',
    date: '2010-11-15',
    year: 2010,
    headline: 'Linda Newnum',
    body: '2010-11-16 02:39:11\', \'Special Education Liaison',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-11-24-1150',
    date: '2010-11-24',
    year: 2010,
    headline: 'Final Cut: The Show',
    body: '2010-11-24 15:07:17\', \' Digital Filmmaking students in Video Production classes produced this 30 minute compilation of work.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-11-29-1143',
    date: '2010-11-29',
    year: 2010,
    headline: 'Help For The Holidays',
    body: '2010-11-29 16:48:49\', \' Our Culinary program was cooking up something different this holiday season. Chef Land and around 100 Culinary Arts students, parents and volunteers to the Houston Food Bank prepare for one of their busiest times of the year. They spent several hours bagging and packing ten thousand pounds of pinto beans that will be distributed to families in the Houston area that are currently food insecure. \\n\\n The Houston Food Bank feeds over 137,000 people each week in the greater Houston area. Those affected by the economy combined with the holidays make for increased requests for assistance. Food Insecurity is the USDA’s term to measure hunger, defined as lack of access to enough food to fully meet basic needs at all times due to lack of financial resources. “We are very proud of our students and the bright smiles they shared with the community while giving,” says Chef Erin Land, one of our Culinary instructors.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-01-1169',
    date: '2010-12-01',
    year: 2010,
    headline: 'FFA’s Santa’s Farm',
    body: '2010-12-02 01:44:00\', \' It’s almost time for Santa to make his annual visit to the farm ! The FFA students invite all area families to our Annual Santa’s Farm event on Friday, December 10, 2010, from 5:00 – 8:00 PM at the Agriculture Center located at 1905 Brittmoore . All children are welcome to have their picture taken with Santa, see the farm animals, go for hay rides, participate in a craft project, make S’mores and have some hot chocolate – all for FREE! \\n\\n Cody Matecki, President of the Spring Branch FFA, said: “This event takes a lot of work, but our FFA Chapter really enjoys hosting a special holiday evening for the families of our school district. We hope your family will join us for a fun and festive evening on the farm.” \\n\\n For more information on the event, please call 713- 559-7000.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-03-1193',
    date: '2010-12-03',
    year: 2010,
    headline: 'Architectural Design Museum Trip',
    body: '2010-12-03 19:31:20\', \' Over 70 Architectural Design students from Sonia Greiner and Xavier Martinez classes had the opportunity to visit The Menil Collection, The Rothko Chapel, the Byzantie Fresco Chapel and the Cy Twombly Gallery on Friday, December 3, 2010 to study architecture. They began by sketching the Menil Museum and then toured each location. It was a wonderful experience by all. Thanks to our chaperones for giving the gift of their time..',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-03-1200',
    date: '2010-12-03',
    year: 2010,
    headline: 'Cooking Up Excellence',
    body: '2010-12-03 18:54:35\', \' The Chef Training class of 2010 prepared a six-course meal under the direction of Chef Bargas and Jennifer Cardenas for parents, friends, high school & district administrators and The Art Institute of Houston leaders on Friday, December 3. \\n\\n Our aspiring young chefs include Marianna Rivero, Cyndie Guardado, Juan Nieto, Shawn Timmons, Steven Salazar, Tania Carrillo, Shalena Jackson, Misty Bruno, Christina Velasquez, Jena Kim, and Ivonne Posadas. \\n\\n The menu began with a Gingerbread and Eggnog tartlet, Turkey and Truffle Raviolo, Tempura Green Beans with a Carrot ginger sauce, Candy cane Sorbet, Grilled Turkey Breast, Deconstructed Turkey Tamale, Sweet Potato Gnocchi and finished with Pumpkin Cheesecake, Pumpkin Seed Brittle, and a Spiced Pumpkin drink. \\n\\n Along with a wonderful lunch, acknowledgements and awards were presented to the students. Most Outstanding student went to Mariana Rivero , and Most Improved went to Cyndi Guardado . Both culinary instructors Mrs. Cardenas and Chef Land are so proud of their students for their amazing growth while in Culinary and the completion of this capstone practicum, Chef Training.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-09-1235',
    date: '2010-12-09',
    year: 2010,
    headline: 'December 2010 Virtual Meeting',
    body: '2010-12-09 20:35:08\', \' citaganda120702010 \\n\\n Thanks for allowing us to communicate virtually this month. We are all so busy getting the semester completed and ready for Christmas break, I felt it was better use of everyone\\\'s time. \\n\\n The agenda is at the link above. Here is a running commentary on the topics. \\n\\n Renovations Update : the Culinary part is nearing completion. They are nearly finished with the tile, halfway thought painting, and still installing FFE. The biggest hurdle is waiting for the roof fans to arrive and get installed, which means no air until we return in January. The district has had many issues with the vendor (JCI) who is in charge of this phase as they do not seem to value customer service. The Audio booth was installed last week and has produced sound quality for movie voice overs, etc. Phase 2 is mostly mechanical upgrades that will use most of the remaining bond allottment. We are preparing to propose alternates to the bond committee to see if we can have additional program work completed during phase 2 next summer. \\n\\n The NJROTC Inspection was impeccably conducted yesterday morning. The students showed the guest inspector how their hard work and preparation paid off. We should have photos posted online later this week. \\n\\n Friday from 5 - 8 at the Ag Science center will host a community event, Santa\\\'s Farm . Kids from all over can come out and do craft projects, take hayrides, experience a petting zoo and get photos with Santa. It\\\'s all free and we expect a strong turnout. The evening is planned and put on by the FFA students. \\n\\n Discussion Item \\n One of our CIP items is teaching career focus standards to our students, especially seniors who will be leaving. One of Duncan\\\'s priorities is changing up the senior year to make it more meaningful and improve transition from high school to the day after graduation. In talks with business leaders and adults over the past couple of years, a big concern is high school graduate st',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-10-1242',
    date: '2010-12-10',
    year: 2010,
    headline: 'Inspected and Approved',
    body: '2010-12-10 18:31:28\', \' Our NJROTC Cadets , under the leadership of Lt. Col. Sluis and Master Chief Heuser , showed what a group of dedicated, focused and determined individuals can do as they were inspected today by guest inspector Lt. Col. Mike Jodiet, USMC. \\n\\n A strong showing of support from families watched the events of the day start off with a Personnel Inspection. Standing at attention, our cadets braved cold weather in short-sleeve shirts waiting for their platoon to finish. Following this were marching drills by each platoon, performances from the Unarmed and Armed Drill Teams, Awards Presentations and the Pass-In-Review. The morning finished with a briefing by the unit officers and a luncheon. \\n\\n The amazing photo slideshow is courtesy of our Commercial Photography students. \\n\\n Congratulations to our Distinguished with Academic Honors Unit!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2010-12-10-2628',
    date: '2010-12-10',
    year: 2010,
    headline: 'Warming Up',
    body: '2010-12-10 18:49:27\', \'Our giving and cold-braving front office staff prepared and served hot cocoa and candy canes today for our students as they arrived in chilly weather. This annual event for our Guthrie students is a small token of appreciation for their being here and working so hard to achieve success.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/07/cocoa.jpg',
    source: 'web'
  },
  {
    id: '2010-12-11-1248',
    date: '2010-12-11',
    year: 2010,
    headline: 'Remembering America’s Heroes',
    body: '2010-12-12 00:18:30\', \' Wreaths Across Houston began a few years ago to honor our deceased soldiers laid to rest at Houston National Cemetery. This year, our NJROTC Cadets collected donations for hundreds of wreathes and today, 37 of them spent hours at the cemetary along with about 15,000 others. After a moving opening dedication, the cadets and Col. Sluis helped lay over 26,000 wreaths at the gravestones of the fallen.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-01-04-1303',
    date: '2011-01-04',
    year: 2011,
    headline: 'Getting a Mention',
    body: '2011-01-04 17:26:04\', \' Chef Michael Bargas, our Chef Training partner instructor from The Art Institute of Houston, demonstrates part of the gourmet holiday meal prepared by our students last month on a recent Great Day Houston appearance. We appreciate Chef Bargas for his outstanding mentoring of our students both here an at the International Culinary School.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-01-08-1331',
    date: '2011-01-08',
    year: 2011,
    headline: 'January 2011 Meeting',
    body: '2011-01-08 19:38:43\', \' The January meeting was held on the 11th at Guthrie. Below is a link to the agenda and minutes. \\n\\n cit01112011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-01-22-1424',
    date: '2011-01-22',
    year: 2011,
    headline: 'NJROTC Getting Physical',
    body: '2011-01-22 13:38:26\', \' Our NJROTC Cadets compete in a number of different areas at each drill meet. One of the most challenging is the physical fitness competition. At the meet at Dekaney High School in Spring ISD, you can see why they have to be in top shape. The sit-ups and pushups part were done by cadence - they had to keep time to the beat.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-01-24-1340',
    date: '2011-01-24',
    year: 2011,
    headline: 'Guthrie Teacher Of The Year',
    body: '2011-01-24 11:48:01\', \' Congratulations to Christy Capps who has been chosen by her peers as our Teacher of the Year. Christy teaches Agricultural Science and in addition to her teaching assignment, also manages the FFA program along with fellow teacher Vanessa Collier. \\n\\n Christy came to Spring Branch in the summer of 2009 after teaching in Normangee. She grew up in the Cy-Fair school district, in the Cypress Creek Agriculture department. Christy is a Sam Houston State University Agriculture graduate who student taught at Waller High School and was later hired to run the Waller Junior High agriculture department.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-01-31-1417',
    date: '2011-01-31',
    year: 2011,
    headline: 'FFA Show & Sale Results',
    body: '2011-01-31 11:08:27\', \' The 33rd Annual Show and Sale is in the books. Congratulations to our students for an outstanding and successful weekend. Thank you to our parents, friends, buyers and especially our FFA Alumni Association members and FFA Advisors Vanessa Collier and Christy Capps. \\n\\n Grand Champions were Claudia Martinez (Steers), Derek Zwernemann (Swine), Cody Matecki (Lambs), Nick Caylor (Goats), Wilson Sims (Turkeys), Cody Matecki (Broilers), Amy Pope (Rabbits), Mason Stewart (2D Art), Alicia Higginbotham (Food), and Blake Pesl (Horticulture). \\n\\n Reserve Grand Champions include Sofia Caylor (Steer), Zach Pierce (Swine), Garrett Randle (Lambs), Wilson Sims (Goats), Kevin Pesl (Turkeys), MaKenzie Matecki (Broilers), Karly Shimerka (Rabbits), Andrew Johnson (2D Art), Alicia Higginbotham (Food), and Emily Caylor (Horticulture). \\n\\n The rest of the winners are in the chart below. \\n\\n \\n\\n Photos of the event are at Flickr http://www.flickr.com/photos/58980885@N04/sets/72157625822877789/',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/01/2011ShowSaleResults.png',
    source: 'web'
  },
  {
    id: '2011-02-01-1441',
    date: '2011-02-01',
    year: 2011,
    headline: 'Then and Now',
    body: '2011-02-01 18:07:12\', \' We have finally settled into our new facility in Culinary Arts @ Guthrie. It has been an amazing transformation over the past 7 years ago when we occupied a former welding and computer lab. \\n\\n Our students and teachers have worked so hard setting up equipment, organizing areas and cooking up a storm. Our grand re-opening will be part of our Community Tuesday Open House on February 15th from 5 to 7:30 PM. We hope you can join us! \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-02-1458',
    date: '2011-02-02',
    year: 2011,
    headline: 'Community Tuesday 2.15.2011',
    body: '2011-02-03 01:12:15\', \' A few times each year we hold our open houses on a Tuesday and invite the entire Spring Branch community. This will be the last CT for this school year, and it\\\'s just in time to take a final look at the programs before you choose your classes for next year. \\n\\n Please join us on Tuesday, February 15, 2011 from 5 to 7:30 PM. Take a self-guided tour of the campus, meet our staff and students, and get a first look at our newly remodeled Culinary Arts area. \\n\\n We look forward to seeing you then!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-07-1475',
    date: '2011-02-07',
    year: 2011,
    headline: 'Unarmed Drill Team @ Tomball',
    body: '2011-02-07 11:44:26\', \' The Spring Branch NJROTC Unarmed Drill Team performs at the Tomball Invitational Meet on Saturday, February 5, 2011. Enjoy the video of their activity.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-07-1479',
    date: '2011-02-07',
    year: 2011,
    headline: 'Her Character Is Without Question',
    body: '2011-02-07 14:39:53\', \' Congratulations to Ambar Balderas , recipient of this year’s Character Without Question Award for The Guthrie Center. \\n\\n Recently, outstanding students were nominated by their instructors for this prestigious honor, based on characteristics such as honest and integrity, responsibility, dependability, respect, perseverance, courage, caring and kindness, citizenship and civic virtue. \\n\\n Nominees for the award included Ambar Balderas, Justin Tung, Mariana Rivero-Loyola, Walter Mata, Christine Nguyen, David Unrath, Kate Denninger and Moriah Elizando . The students, all deserving of their nomination, were interviewed by a committee last week. \\n\\n Ambar will be recognized at the Spring Branch Board of Trustees Meeting on March 28 th along with the other awardees from schools throughout the district. \\n\\n Ambar had another great piece of news arrive last week in the mail - her official letter of Appointment to The United States Naval Academy , where she will attend following her graduation from Northbrook High School in May. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/02/Ambar-Balderas-2.jpg',
    source: 'web'
  },
  {
    id: '2011-02-11-1511',
    date: '2011-02-11',
    year: 2011,
    headline: 'Not So Routine',
    body: '2011-02-11 19:33:19\', \' Today our Law Enforcement students in Criminal Justice had the opportunity to witness and practice mock traffic stops, thanks to SBISD Officers Krajnocvich and Brown. One of the first things they learned, best said by student Ashley Thomas, "traffic stops are so different than what we expected... routine traffic stop, really that’s not even a real term....a person training to be an officer has to be on their toes. The whole situation is complete an adrenaline rush because you soon come to expect the unexpected." \\n\\n Heather Broussard chimed in with this observation: "from the traffic stop exercise, I learned many things but the most important was that there is no such thing as a “routine” traffic stop. When we pulled the violator over, we never knew what to expect. Some ran, some fought, and some cooperated with us. We used the skills we learned though and were able to control and handle each situation. I feel like this was a great exercise, especially for those who would like to become police officers.”',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-11-1515',
    date: '2011-02-11',
    year: 2011,
    headline: 'Joint Advisory Board Luncheon Initiates New Culinary Area',
    body: '2011-02-11 23:46:28\', \' The Spring Branch Community Relations Department hosted the Partners In Education, Volunteer Advisory Board and the Good Neighbor Committee groups for a beautifully prepared luncheon in our new Culinary spaces at Guthrie. Superintendent Duncan Klussmann and Community Relations Officer Linda Buchman dined with four dozen involved community members of Spring Branch. Duncan delivered updates on the current legislative session to the wide-eyed group. \\n\\n Culinary instructors Jennifer Cardenas and Erin Land also had a chance to talk to the guests about their program and the excitement the new area has generated for the students. This was the inaugural event held in Culinary Arts since the remodel. Commercial Photography and Filmmaking students contributed by taking the photos and videotaping the event for those that could not attend.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-11-4025',
    date: '2011-02-11',
    year: 2011,
    headline: 'Staff Development ',
    body: '2011-02-11 21:02:36\', \'Today while our students were sleeping in, The Guthrie Center\\\'s teachers andadministration attended a staff development and team building session at The Art Institute of Houston. Our topic was Service Leadership - building a top performing organization by serving each of our coworkers and customers (our students). To keep it authentic, we even rode in a school bus to the event. Thanks to The Art Institute\\\'s President, Kim Nugent for working with us, feeding us (magnificiently) and providing a great place to meet.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-12-1523',
    date: '2011-02-12',
    year: 2011,
    headline: 'February 2011 Meeting',
    body: '2011-02-12 17:05:31\', \' The February meeting was held on the 8th at Guthrie. Below is a link to the agenda and minutes. \\n\\n CITminutes02082011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-15-2018',
    date: '2011-02-15',
    year: 2011,
    headline: 'Why NJROTC?',
    body: '2011-02-15 15:52:48\', \' The Spring Branch Navy JROTC unit is and continues to be one of the top in Texas and around the nation. There are so many reasons why but mostly it is due to the leadership and guidance of Lt. Col. Sluis , Master Chief Heuser and the Cadet Leadership Teams. \\n\\n The NJROTC program nationally has measurement indicators that show students enrolled have a higher rate of attendance, graduation and GPA along with a lower discipline and drop out rate. Check out the link below for more details. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/03/njrotcgoals.png',
    source: 'web'
  },
  {
    id: '2011-02-16-1602',
    date: '2011-02-16',
    year: 2011,
    headline: 'A Grand Time',
    body: '2011-02-16 11:19:38\', \' Tonight at our campus-wide open house, teachers Jennifer Cardenas , Erin Land and a couple dozen students celebrated the re-opening of our Culinary Arts facility with a few friends. Board of Trustees members Wayne Schaper, Mike Falick, Mary Grace Landrum, Theresa Kosmoski and Pam Goodson toured and enjoyed hors d\\\'oeuvres along with representatives from key people that designed and built the facility from Pfluger Architects, Bass Construction and Millunzi Restaurant Design , and many district senior managers and families of our students. \\n\\n It was great to have some of our key partners in the culinary field from The International Culinary School at The Art Institute of Houston, Houston Community College Culinary department, Culinary Institute LeNôtre, Drew\\\'s Pastry Place , and the Ben E. Keith Company. \\n\\n Our special thanks go out to to SBISD project manager David Vesling , key Bass Construction folks Jay Bass and Nick Favre , and to Pfluger Architects contacts Michelle Dudley and Joe Osborne for working with so many to bring this concept to fruition. We are humbled to have these great spaces entrusted to our care, and proud to give our students the best culinary facility in any high school in Texas.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-02-27-1809',
    date: '2011-02-27',
    year: 2011,
    headline: 'No Stumbling At Stubblefield',
    body: '2011-02-27 14:25:17\', \' Our NJROTC Orienteering Team participated in the Stubblefield Orienteering Meet this weekend. Located deep in Sam Houston National Forest hear Huntsville, the cadets had their option of the white, yellow or red courses to maneuver. \\n\\n Orienteering is a sport in which orienteers use an accurate, detailed map and a compass to find points in the landscape. The map has a start, a series of sites numbered in the order they are to be visited, and a finish. The compass is the old fashioned kind that does not use batteries or a GPS signal. \\n\\n Participants Damian Arredondo, John Hopes, Emily Rowland and Cecilia Silva may have a few other descriptions of how it really is, including the time spent getting caught in thorny brush, stomping through mud and occasionally getting off the track. Saturday no one got lost and were greeted by Col. Sluis and volunteers Maria Rodriquez and Adriana Silva who guarded the food and cheered them at the end.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-05-1980',
    date: '2011-03-05',
    year: 2011,
    headline: 'Gulf Coast CTE Association Luncheon',
    body: '2011-03-05 13:32:35\', \' A group of about 50 Gulf Coast area CTE administrators and counselors gathered today for the monthly meeting to network, discuss common issues, share ideas for improving CTE classes throughout our area and fellowship. This was the first time the group visited the newly renovated Culinary Arts at Guthrie, and they were treated to an excellent meal and outstanding service by our culinary students. Instructors Jennifer Cardenas and Erin Land addressed the captive audience and fielded questions about the new spaces use and design. Special guests included newly named DeVry University President Kim Nugent and Crosby High School Principal Marley Morris .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-08-1990',
    date: '2011-03-08',
    year: 2011,
    headline: 'March 2011 Meeting',
    body: '2011-03-08 16:43:08\', \' The March meeting was held on the 8th at Guthrie. Below is a link to the agenda and minutes. \\n\\n cit03082011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-10-1999',
    date: '2011-03-10',
    year: 2011,
    headline: '2011 CTE Scholarship Application Is Ready',
    body: '2011-03-10 14:33:15\', \' \\n\\n The 2011 CTE Scholarship Application is now posted. \\n\\n These merit-based awards are from the CTE Department, The Academy of Finance/Hospitality, Village Family Practice, HCC, The Art Institute of Houston and DeVry University. \\n\\n The PDF application can be downloaded and saved to your computer. You can fill it out as you have time, save it and go back to complete it. Once finished please follow the instructions to submit electronically along with the other required items. \\n\\n The deadline is March 31, so please get started as time is short! \\n\\n http://cte.springbranchisd.com/CTEscholarships.html \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-12-2035',
    date: '2011-03-12',
    year: 2011,
    headline: 'April 2011 Meeting',
    body: '2011-03-12 17:22:02\', \' We will have our monthly CIT meeting at Guthrie on April 12, 2011. One of the items on the agenda will be a review of the Tier 1 Master Teacher PDAS tool drafted by the district task force. It is attached below along with the agenda. \\n\\n citaganda04122011 \\n\\n Attach.MD-CIT Review of Tier 1 \\n\\n \\n\\n citaganda&minutes04122011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-22-2042',
    date: '2011-03-22',
    year: 2011,
    headline: 'We All Celebrate',
    body: '2011-03-22 21:16:05\', \' Throughout the year, there are innumerable celebrations by different cultural and religious groups on any given day. Since we are a melting pot society, it\\\'s helpful to have a handy reference to know when many of these events are celebrated. \\n\\nIn conjunction with the Anti Defamation League\\\'s NO PLACE FOR HATE campaign, we are providing the document at the link below that you can download or refer to as desired.\\n\\n \\n\\n Calendar of Observances \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/03/Screen-shot-2011-03-22-at-2.05.34-PM.png',
    source: 'web'
  },
  {
    id: '2011-03-24-2052',
    date: '2011-03-24',
    year: 2011,
    headline: 'SBISD Career Fair',
    body: '2011-03-24 23:08:25\', \' Attention Students and Parents! \\n\\n Plan to attend the Spring Branch ISD Career Fair on Wednesday, March 30th at Northbrook High School from 6 to 8 PM . Representatives from many careers will be available to share information and answer your questions about many different occupations. \\n\\n A short program will be held in the NHS auditorium at 6 and then will the career representatives will move to the NHS Commons/Cafeteria area. Some of the careers that will be represented include: \\n\\n \\n \\n Architecture \\n Agriculture \\n Hydroponics and Aquaponics \\n 3D Computer Animation \\n Graphic Design \\n Media Arts \\n Fashion Design \\n Medical Careers \\n Engineering \\n Computer Technology \\n Business and Finance \\n Education \\n Hotel and Restaurant Management \\n Culinary Arts \\n Automotive Technician \\n Aviation \\n Veterinary Medicine \\n FBI \\n Law and Public Safety Careers \\n Social Work \\n \\n \\n\\n There will also be college representatives from University of Houston, Sam Houston State, University of Texas at Dallas, Texas A&M, Drexel, Texas State, Culinary Institute LeNotre, The Art Institute of Houston and our co-sponsor of this event, Houston Community College. \\n\\n Plan to attend and learn about these exciting careers that could be your future! \\n\\n Career Fair Brochure',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-29-2067',
    date: '2011-03-29',
    year: 2011,
    headline: 'Cadets Win At Top Gun Meet',
    body: '2011-03-29 13:58:31\', \'Congratulations to our NJROTC cadets who won at the Top Gun competition in Conroe on Saturday, March 26. The Intermediate Orienteering Team took it all and received a first place trophy. The Geocaching Team won third, and Ambar Balderas brought home an individual medal in Academics.\\n This is the first time our cadets competed in the Geocaching event, which is very similar to Orienteering except contestants use GPS units instead of a compass and map.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-29-2073',
    date: '2011-03-29',
    year: 2011,
    headline: 'Award Accepted',
    body: '2011-03-29 13:57:31\', \'Last evening at the March Board of Trustees meeting, one student from each school on hand to accept their Character Without Question award from the Board and Superintendent. Guthrie recipient Ambar Balderas received the award in front of a crowd of hundreds. Congratulations Ambar!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-03-29-2079',
    date: '2011-03-29',
    year: 2011,
    headline: 'A Week At The Show',
    body: '2011-03-29 15:13:29\', \' Spring Break can be relaxing time for many, but many FFA students and Ag Science teachers Vanessa Collier and Christy Capps spent time down at the Houston Livestock Show and Rodeo showing and competing in a variety of events. \\n\\n Calf Scramble Contestants race after calves that are turned loose in the arena, trying to catch and return one to the designated area. If they succeed the student earns a certificate to purchase a heifer to bring back and compete for champion heifer at the following year’s show. Alicia Higginbotham and Andrew Johnson both caught, and Janie Garnier earned a "Hard Luck" award. Lesli Evans and Amy Pope also participated in this exciting event. \\n\\n Quite a few students exhibited their livestock in their quest to make the live auction. Andrew Johnson took 11th place with his Berkshire swine that sold for over $4,000 at the auction. Other exhibitors showing their swine included Derek Zwernemann, Cody Moreno, Makenzie Matecki, Lesli Evans, Allie Jubert and Zach Pierce. Blake Pesl brought his turkey to show, and Lesli Evans, Jacob Pope, Brent Blume, Zach Pierce, Janie Garnier, Maggie Bass and Alicia Higginbotham showed their heifers. \\n\\n Entering the judging competitions were Ashton Belcher for Horse Judging and Nicole Nosrat, Amy Pope, Emilia Caylor and Claudia Martinez for Florculture. \\n\\n Ag Awareness Day participants were Zach Pierce and Nicole Nosrat. \\n\\n Congratulations to all of our HLSR contestants, their families and supporters and our teachers for sharing a memorable experience. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/03/SBFFAscramble1.jpg',
    source: 'web'
  },
  {
    id: '2011-04-06-2109',
    date: '2011-04-06',
    year: 2011,
    headline: 'A Summer In Greece',
    body: '2011-04-06 10:29:50\', \' For the past six years, The Guthrie Center has enjoyed hosting students from the American Farm School in Thessaloniki, Greece during their week-long visit to the USA. The tight economy prevented their trip this year, so we thought we would tell you about something they have offered for the past 40 years for students traveling there this summer. \\n\\n Greek Summer was created to offer young Americans an unmatched opportunity to be immersed in a foreign culture, challenging them physically and emotionally. Every summer a select group of high school students go on a five-and-a-half week odyssey that uniquely combines community service, village home-stay, travel, and an introduction to the American Farm School for a once-in-a-lifetime learning experience. Participants spend a short time at the School, but the core of the program is time spent living with a family in a small Greek village where they undertake a much needed community service project. Students are presented with a certificate for their service hours at the end of the program. \\n\\n The dates for this year’s program are June 26 to August 1. You can get further details at www.afs.edu.gr/greeksummer or by contacting their coordinator directly: Rena Karypidou, Greek Summer Admissions, American Farm School and Perrotis College, Tel. (+30) 2310 492-890, rkaryp@afs.edu.gr',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-13-2131',
    date: '2011-04-13',
    year: 2011,
    headline: 'Newspring Student Art Auction is May 13th',
    body: '2011-04-13 21:36:29\', \' Discover original artwork at the Newspring Student Art Auction Friday, May 13th, at Sculptures by Design in CITYCENTRE, 12848 Queensbury Lane. The auction features both sculpture and paintings by SBISD middle & high school students developing their talent through their schools and the Newspring Art Studio . All auction proceeds go directly to the individual student artists . The event begins at 6:00 PM, and the silent auction will conclude at 8:30PM. Pre-bidding will be available on Newspring\\\'s website ( www.newspringcenter.org ) beginning May 6th . \\n\\n "We had no idea how successful the 2010 auction would be", notes Newspring Chairman Robert Westheimer , "so we had to move to a larger space." "We are excited to expand into a CITYCENTRE\\\'s gallery setting." The NEW location, Sculptures by Design , is located on the second floor of CITYCENTRE, next to Eddie V\\\'s restaurant, all just a short drive from Guthrie. \\n\\n Newspring has partnered with many schools in SBISD including The Guthrie Center. This year, 3d Animation student Shu Yu Zhang designed the auction poster. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/04/NSAC-2011.jpg',
    source: 'web'
  },
  {
    id: '2011-04-19-2163',
    date: '2011-04-19',
    year: 2011,
    headline: 'Budget Reductions @ Guthrie',
    body: '2011-04-19 17:41:53\', \' April 14, 2011 \\n\\n Dear Parents and Friends of Guthrie, \\n\\n As a direct result of the anticipated significant drop in State funding for public education on April 5, 2011, the SBISD Board of Trustees approved measures that are expected to reduce expenses for the 2011-12 school year by more than $17 million, or roughly 7% of the district’s budget. In addition to reductions in operating expenses at the campus and district level, the measures impact approximately 350 positions across the District. These cuts are necessary because of the budget decisions being made in Austin. \\n\\n Our district leaders and Board of Trustees have worked for months on the plan for budget reductions. The principals have been included in the process as well. Over the past six years, the District has been able to protect our students from the impact of budget challenges resulting from the state’s public school finance model. Unfortunately, the size of the required cuts this year will lead to changes that will affect our campus and our classrooms. \\n\\n How will the district budget reductions impact The Guthrie Center? \\n\\n Class Size/Staffing Allocations: We plan to have the same number of classroom teachers and will add computers & workstations where feasible to increase the number of students per class. \\n\\n Operating Budget: Every school has been asked to reduce its operating budget by 10%. For us, this is a reduction of about $24,000. This loss will be spread around the campus and programs at Guthrie to minimize impact in any one area. \\n\\n Office Staff : Guthrie along with every school has been asked to reduce administrative support by one office support staff member. This may mean that next year, it takes a bit longer for us to answer your call, deliver a message, or respond to your questions. \\n\\n District Level Support: Some services provided by district level departments and/or staff will no longer be available or will be provided at a reduced level of support',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-20-2218',
    date: '2011-04-20',
    year: 2011,
    headline: 'Formal Changes At The Formal',
    body: '2011-04-20 21:31:05\', \' Each year our Navy JROTC unit celebrates the year and conducts the change of command at the Annual Military Ball . This year was our 15th and the largest one on record, held April 16th on the tenth floor of the Marriott Energy Corridor Hote l. \\n\\n It starts off with a ceremonial phase that includes the Lone Table and Two-Bell Ceremony honoring past and fallen sailors. Following a great meal, senior speeches and individual advancement announcements, the change of command takes place. Finally the dance starts around 8:30PM. \\n\\n In the photo below, Cadet LCDR Kevin Dang salutes and relieves Cadet LCDR Ambar Balderas . Also pictured are the outgoing Command Master Chief Cecilia Silva and incoming Commanding Senior Chief Marlene Alfaro . \\n\\n The rest of the promotions include Executive Officer Cadet LT Bryan Hallenbeck , Operations Officer Cadet LTJG Jennifer Zapata , Administrative Officer Cadet ENS Ruby Rivera , Supply Officer Cadet ENS Hunter Chase , Unarmed Drill Team Commander Cadet SCPO Eugenia Leal , Supply Chief Cadet CPO Destiny Lewis , and Armed Drill Team Commander Cadet CPO Damian Arredondo . \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/05/militaryball11.jpg',
    source: 'web'
  },
  {
    id: '2011-04-22-2179',
    date: '2011-04-22',
    year: 2011,
    headline: 'Spring Branch FFA Wows @ District 7',
    body: '2011-04-22 08:31:28\', \' Congratulations to our FFA students who did an amazing job at the District 7 FFA Convention in Katy on Tuesday. \\n\\n \\n \\n Andrew Johnson was named an Area 3 FFA Jr. Advisor officer \\n Prepared Public Speaking winners were Ashton Belcher (2nd) and S ofia Caylor (5th) \\n The Floral Design Judging Team of C laudia Martinez, Amy Pope, Emilia Caylor and Nicole Nosrat placed 5th \\n Nicole Nosrat, Amy Pope and Sophia Caylor competed in the Talent Team \\n Lesli Evans was named as a 2011 District VII Area III Courtesy Corps member. \\n \\n \\n Those advancing to area include Nicole Nosrat (Star Greenhand Farmer), Andrew Johnson (Star Chapter Farmer), Lesli Evans (Star Lonestar, Beef Production Proficiency, Diversified Proficiency), and Allison Jubert (Swine Production Proficiency). Lonestar FFA degrees were awarded to Kevin Pesl, Zach Pierce, Claudia Martinez, Cody Moreno, Lesli Evans, Jacob Pope and Brent Blume. \\n \\n \\n Thanks to advisors Vanessa Collier and Christy Capps for working with our students to earn these awards and recognitions.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-23-2189',
    date: '2011-04-23',
    year: 2011,
    headline: 'Success Begets Success',
    body: '2011-04-23 13:07:16\', \' Ten years ago film instructors Nilsson & Radler recognized and nurtured the talent of Digital Filmmaking student Josh Franer . As a senior he seemed to find success in every competition he entered like the Museum of Fine Arts Young Filmmakers, Spindletop Film Fest, Houston Film Commission, Cultureshapers and Houston Young Moviemakers . \\n\\n Josh continued his studies at Baylor and is now well-established in his career. Our teachers heard from him this week via email and here is an exerpt describing his recent successes. \\n\\n …"In case you\\\'ve been wondering, in the past year I\\\'ve doubled my travel mileage and racked up some free flights on Southwest. For starters I\\\'ve traveled 3 times to Africa, as well as traveling to China, Haiti, Taipei, and London among other locations. I\\\'ve had some life-altering experiences filming with some amazing non-profit groups focusing on clean water, food, adoption, education, and child slavery all of which helped me develop a passion for serving others on these trips. I\\\'ve learned what a privilege it is to call the states home and also the importance of having a family after having countless orphans jump all over me because they were lacking love and attention. Some of these organizations include WhyHunger, Bethany, Causecast, Musicians on Call, and A Glimmer of Hope. \\n\\n On the music side of things, I was honored this year to have my first published band photo in Rolling Stone as well as winning several festival awards for a tour documentary short I did with William Fitzsimmons all over Europe. I shot several music videos, did a ton of epk\\\'s and worked on a cool music project for David Crowder where I traveled across the US to highlight cool musicians doing interesting things. I\\\'m also excited to have just finished a few new projects for Nettwerk Music Group as well as having multiple video premiers on AOL, MTV, and Paste. \\n\\n On the corporate front, I recently had the honor of directing a project with',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-25-2199',
    date: '2011-04-25',
    year: 2011,
    headline: 'May 2011 Meeting',
    body: '2011-04-25 16:32:43\', \' The May CIT meeting will be held at 3:45 PM on the 10th. Here is the agenda and the survey for our final meeting for the year. \\n\\n See you then! \\n\\n citaganda05102011 \\n\\n ClimateSurvey1011Guthrie \\n\\n citagandaandminutes05102011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-27-2204',
    date: '2011-04-27',
    year: 2011,
    headline: 'FIve Year Plan Survey Results',
    body: '2011-04-27 13:49:58\', \' Each year the faculty and staff from every school in SBISD participates in a survey as part of the Five Year Educational Plan. Respondents are asked to rate areas such as high expectations, communication, and safety, and rate them from strongly agree to strongly disagree. These questions were categorized and reported by strength of score. \\n\\n While far from perfect, we are very fortunate to have scored higher than last year in most areas, and are far above the average of all secondary schools and all schools in the district. To us, this means we continue to provide a safe and secure place to learn with high expectations for learning and behavior. On top of that, it\\\'s a great place to work! \\n\\n For details of the questions asked and responses, please click on the link below to view a PDF of the data. \\n\\n ClimateSurvey1011Guthrie',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-04-27-2207',
    date: '2011-04-27',
    year: 2011,
    headline: 'It\'s Not Automatic - They Earn It Every Time',
    body: '2011-04-27 19:47:58\', \'The Department of the Navy NJROTC Area Ten Manager Cdr. Hale has informed our unit that they have attained the status of " Distinguished with Academic Honors ." In the fifteen year history of our unit, the cadets have worked tirelessly to earn this distinct honor a dozen times.\\n\\nThe honor is based on unit accomplishments in their Annual Military Inspection, community service, results from competitions and meets, personal achievements and academic standing. Thanks to the strong leadership from Col. Sluis and Master Chief Heuser , the Cadet leaders and positive support from Spring Branch, they brought the distinction back one more time.\\n\\nCongratulations to all of the cadets in our hard-working, goal-oriented successful unit. Your results will now allow additional seniors to be nominated to attend one of the three service academies representing the United States Military!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-03-2224',
    date: '2011-05-03',
    year: 2011,
    headline: 'Spring Branch Right Now',
    body: '2011-05-03 10:37:42\', \' Advanced Film Students put their skills to work as they shot the first " Spring Branch Right Now " show recently featuring Mary Grace Landrum as the host and Mike Falick and Chris Vierra as guests. The show discussed the serious budget issues facing SBISD. You can watch the show on HCC-TV cable channel 19 or on SBISD-TV.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-03-2228',
    date: '2011-05-03',
    year: 2011,
    headline: 'Battle Of The Bands This Friday @ 6 for $5',
    body: '2011-05-03 13:46:05\', \' The Guthrie Center will be holding their annual BATTLE OF THE BANDS this FRIDAY, May 6 with 7 bands from all over the district battling it out for $250 dollars cash! \\n\\n The battle begins at 6 o\\\'clock sharp with " Dairy Party " from Stratford leading the battle. THIS FRIDAY! \\n\\n REMEMBER, the first band starts at 6 o\\\'clock sharp so you need to arrive early to see them all! Tickets are $5 dollars at the door . Food and concessions will be sold. \\n\\n Be there! Proceeds benefit the Film & Photo Club . \\n\\n LINE UP \\n 6:00 – 6:20 DAIRY PARTY \\n 6:30 – 6:50 AUTUMNS ARISEN \\n 7:00 – 7:20 RUNNER \\n 7:30 – 7:50 SOBER IN THE MORNING \\n 8:00 – 8:20 TWISTED MINDS \\n 8:20 – 8:50 WRITE WHAT’S LEFT \\n 9:00 – 9:20 OH NOSTALGIA \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-03-2238',
    date: '2011-05-03',
    year: 2011,
    headline: 'MGM High School Design Competition Results',
    body: '2011-05-03 14:17:37\', \' Our Architectural Design department is proud to announce that 78 students entered the 21st annual Michael G. Meyers High School Design and Scholarship Competition . \\n\\n This competition is sponsored by the Houston Chapter of the American Institute of Architects. This year, the competition included students from 8 different area high schools. They were to design an Urban “Super” Market located in the Montrose area of Houston. \\n\\n The MGMC awards ceremony was held at the downtown office of the AIA on Friday, April 29, 2011. Ten students from Sonia Greiner and Xavier Martinez Architectural Design classes won recognition. Out of the 11 categories awarded, the Guthrie Center students received 8 of those awards. Student’s collectively received $7100 in scholarship prizes that includes admission to the 2011 University of Houston’s Architectural Summer Discovery Program. Luis Jimenez and Joe Landrum are repeat winners of this contest having won Best Visualization and 2nd Place Group respectively.. \\n\\n Honorable Mentions: \\n\\n Best Visualization: Luis Jimenez (NHS) \\n Best Visualization: Gallery Martinez (WAIS) \\n Best Detail Design: Zach Metzler (SWHS) \\n Director’s Favorite: Eric Sorto (NHS) \\n\\n Individual \\n\\n Jorge Rebellon (SHS) \\n\\n Group Awards \\n\\n 3rd Place: Christine Nguyen (SHS) and Walter Mata (SWHS) \\n 2nd Place: Joe Landrum (WAIS) and Issac Suarez (WAIS) \\n\\n Individual Awards \\n\\n 3rd Place: Mauricio Araiza (MHS) \\n\\n Thank you to the scholarship sponsors this year for their generous donations: \\n\\n Kirksey Architecture \\n ArCH Foundation \\n Avadek \\n Bihner Chen Engineering \\n Brookstone \\n E&C Engineers \\n Gensler \\n Tandus \\n Turner Construction \\n Colorstone \\n CW Lighting & Associates \\n Lesco \\n Putterman, Schark & Associates Lighting \\n\\n Thank you to this years Jurors: Cord Bowen March, MBA; Wendy Heger, AIA; Angel Rivera LEED AP, The Houston Architecture Foundation, The AIA-Houston Chapter, The MGMC Committee, Parents, and ',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/05/Zach-Metzler.jpg',
    source: 'web'
  },
  {
    id: '2011-05-05-2269',
    date: '2011-05-05',
    year: 2011,
    headline: 'Guthrie Staff Recognized For Service',
    body: '2011-05-05 15:52:20\', \' Last night many of our Guthrie teachers and staff were recognized for their service and retirement at the 2011 SBISD Awards Banquet at the Omni Hotel Westide , hosted by the SBISD Community Relations and Communications department. \\n\\n Congratulations to all of our milestone makers: \\n\\n \\n Robotics instructor Joe Lynch who was honored as he retires after 20 years \\n Counselor Beverly Litton for her 40 years of service \\n Administrative assistant Elva Saldivar , NJROTC instructor Col. Ken Sluis and Computer Tech instructor Steve Whitt for 15 years \\n Architectural Design instructor Sonia Greiner , attendance specialist Donna Benavidez and CTE instructional support Melissa Sanders for 10 years \\n Library support Carla Stevens for completing five years \\n \\n\\n Board member Wayne Schaper was honored for his 50 years in the district, In addition to being celebrated by many people, the highlight was a video filmed and produced by our Advanced Film students and teachers Mike Radler, Patty Nilsson and Michael Ortiz. (You can view the video here) \\n\\n We appreciate our staff and sincerely thank them for their sacrifices to help our students find themselves and become successful, and are grateful to our district leaders and board for recognizing all those honored at the event.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-06-2284',
    date: '2011-05-06',
    year: 2011,
    headline: 'It’s On – BOB 11',
    body: '2011-05-07 00:00:30\', \' You still have time to come out and see the best of Spring Branch. BOB 11 goes till around 9:30 tonight! \\n\\n 6:00 – 6:20 DAIRY PARTY 6:30 – 6:50 AUTUMNS ARISEN 7:00 – 7:20 RUNNER 7:30 – 7:50 SOBER IN THE MORNING 8:00 – 8:20 TWISTED MINDS 8:20 – 8:50 WRITE WHAT’S LEFT 9:00 – 9:20 OH NOSTALGIA',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-08-2292',
    date: '2011-05-08',
    year: 2011,
    headline: 'The Battle Is Over',
    body: '2011-05-08 09:05:32\', \' The 2011 Guthrie Battle of the Bands has declared a victor. \\n\\n On a night with perfect weather, our courtyard morphed into a concert venue with incredible acoustics and atmosphere. The DFCP Club students took the playbook handed to them by teachers Patty and the Mikes . Working as a team they found seven quality bands, organized and set up security, refreshments and advertising, and executed the event to the delight of hundreds of attendees. \\n\\n Notable judges from the Houston area music scene listened to 20 minutes sets from SBISD high schools including Dairy Party, Autumns Arisen, Runner, Sober in the Morning, Twisted Minds, Write What\\\'s Left and Oh Nostalgia . After all was said and done, the esteemed jurists declared Write What\\\'s Left the winner to the joy of the sizable crowd staying to the very end. The band from Memorial HS walked away with $250 and satisfaction of victory. \\n\\n Thanks to our parent and staff volunteers, judges Mike Damante, Roshan Bhatt, Leslie Krafka, Saylor White and Kyle Vento , the DFCP Club, teachers and awesome attendees for a truly memorable evening.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-12-2304',
    date: '2011-05-12',
    year: 2011,
    headline: '2011 CTE Awards Luncheon',
    body: '2011-05-13 02:48:48\', \' The 2011 Career & Technical Education Awards Luncheon was held today at Guthrie to honor our students receiving scholarships from the CTE department, business and higher education partners, and private sources. We also announced the CTE Educator of the Year. \\n\\n Seniors S amantha Cuestas, Alejandra Escobar, Desirae Dufner, Jesse Parker, Byron Guevara, Gustavo Lucio, Shalena Jackson, Anne Alexander, Marshall Heins, Yesenia Vidal, Mariel Braun, Catherine Weitzel, Annie Wang, Maday Infante-Paz, Kanza Mazhar and Victor Sanchez all took a part of $21,000 in scholarships as they leave for college. \\n\\n The Educator of the Year nominees were Estie Cuellar and Judy Holtan from Spring Woods, Aubrey Ladner from Landrum and Linda Tusa at Northbrook High School. Nominated and voted on by their peers, the 2011 CTE recipient is Aubrey Ladner . \\n\\n The program can be downloaded below. \\n CTEawardsluncheon2011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-13-2316',
    date: '2011-05-13',
    year: 2011,
    headline: 'When Architecture, Math and Science Collide...',
    body: '2011-05-13 10:27:40\', \' Problem solving and teamwork are just two of the most important keys to successful architecture. Sonia Greiner and Xavier Martinez had their students divide into teams of 5 to work together on Wednesday. They were given the task of constructing the tallest structure that could stand unsupported for 10 seconds using only marshmallows, spaghetti and their ingenuity. Students soon discovered it was no easy task. They had to rely on their knowledge of geometry and physics. \\n\\n The third period team of Christine Nguyen, Walter Mata, Jesus Razo, Demetrich Nichols, and Keegan Droxler won bragging rites with their amazing structure that towered 56” in height. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/05/marshmallows.jpg',
    source: 'web'
  },
  {
    id: '2011-05-13-2322',
    date: '2011-05-13',
    year: 2011,
    headline: 'Nick and Justin Are At It Again',
    body: '2011-05-13 15:37:17\', \' The last time we ran into former Digital Film students turned producers Nick Jayanty and Justin Gilley was at Sundance Film Festival where they were debuting their production Skateland . \\n\\n \\n They are back - this time in Austin showing the latest one - Echotone - through Sunday. The movie synopsis from it\\\'s website goes like this: "Internationally known as \\\'The Live Music Capital of the World,\\\' Austin\\\'s music culture has led it to become one of the world\\\'s most sought-after destinations. As nearly two dozen high-rises pop up throughout the city amidst economic downfall, how does the working musician get along? This lyrical documentary provides a telescopic view into the lives of Austin\\\'s vibrant young musicians as they grapple with questions of artistic integrity, commercialism, experimentation, and the future of their beloved city. Directed by Nathan Christ and photographed by Robert Garza, Echotone is a cultural portrait of the modern American city examined through the lyrics and lens of its creative class." \\n\\n Learn more online at http://www.echotonefilm.com \\n\\n \\n\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/05/ECH-Header.jpg',
    source: 'web'
  },
  {
    id: '2011-05-13-2338',
    date: '2011-05-13',
    year: 2011,
    headline: 'Crime Scene Investigations',
    body: '2011-05-13 21:34:47\', \' Law Enforcement 1 students worked a crime scene as a portion of their final project. Each student had an active CSI role of photography, sketching, evidence collection and processing. \\n\\n Students were given a realistic scenario and were required to process the scene using industry best standards. Further forensic examinations were conducted in the Guthrie Center Forensics lab to replicate a true investigation. \\n\\n Only time will tell if the murderer will be brought to justice (if it really is a murder).....',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-16-2349',
    date: '2011-05-16',
    year: 2011,
    headline: 'Objective Planning for 2011-2012',
    body: '2011-05-16 20:59:46\', \' Ok, let\\\'s start off by providing a little background information... \\n\\n The board sets the goals based on the 5 year plan. The current goals are below. We will model our objectives based on these. \\n\\n \\n SBISD will be an exemplary school district with an enriched and relevant PK – 12 curriculum that promotes creativity, critical thinking and achievement. \\n SBISD will be the premier college-focused district in the State of Texas and will prepare all students for success after high school graduation. \\n SBISD will ensure that all students have a strong foundation in ethics and character development. \\n SBISD will offer all students a wide range of school sponsored activities outside of the classroom. \\n SBISD will have a pervasive culture of safety and respect. \\n SBISD will update or supplement strategic plans to be fiscally responsible and efficiently use all resources-- human, time and monetary--to support student achievement. \\n Students, parents, and the community will be active partners with educators in students’ education. \\n SBISD, as the employer of choice, will recruit and retain the best people by rewarding excellence and providing opportunities for continual growth. \\n \\n \\n \\n \\n\\n The link to the right is a list of Guthrie objectives going back to 2001. Those of you who know our school well can see that many of these are in place permanently and part of our culture. That is the way we like to develop what we do - make it something meaningful to the student\\\'s experience here. CIP Objectives By Year \\n\\n ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> \\n\\n Here is how we are charged by the district and state to develop the CIP: \\n\\n Write at one Campus Improvement Plan objective for each of the eight goals . Each paired goal and objective must address the 5-Year Plan, be rigorous, be appropriate response to campus data and be measurable. \\n\\n Write at least one activity for each objective. Each activi',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-05-20-2355',
    date: '2011-05-20',
    year: 2011,
    headline: 'Guthrie Student Film Festival Excites Attendees',
    body: '2011-05-20 15:32:40\', \' The Digital Filmmaking Department together with DFCP Studios and Guthrie Center Films, held their annual Student Film Festival recently. The festival screened over 30 student-produced films representing works from 1st-year filmmakers to 4th-year Practicum students. \\n\\n Audiences delighted as they watched a 2-hour show on the big screen showing everything from dramatic Public Service Announcements to informative Documentaries, entertaining Music Videos, and dramatic short films. \\n\\n The winner for this year\\\'s Film Festival was "End Of The Day", a 30-minute short film written, produced, scored and edited by Evan Moore of Stratford High School. The film score was created by Evan Baker. \\n\\n Audience Choice went to the movie trailer "Helicopters on the Moon", written by Harris Foster, edited and produced by Jack Bentele, Jonathan Cox, Bobby Nash and Chris Calkins. \\n\\n The Film Festival will be aired in it\\\'s entirety on HCC-TV. \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/05/EvanMoore.jpeg',
    source: 'web'
  },
  {
    id: '2011-06-03-2384',
    date: '2011-06-03',
    year: 2011,
    headline: 'Thanks For The Memories',
    body: '2011-06-04 03:03:09\', \' Each year we stop and take time to break bread, look back and honor those who may be leaving our ranks. Today we celebrated the end of a career with Joe Lynch, who leaves education after 18 years at The Guthrie Center teaching Robotics and Electronics. Joe made a lasting impact on many students throughout his time as an educator, and we are all better to have worked alongside him. \\n\\n Teachers, staff, family and friends also celebrated the upcoming birth of Mr. & Mrs. Xavier Martinez\\\' daughter, and thanked frequent and long-term sub Jimmy Jump for stepping into difficult situations over the past three years and helping our students stay focused and on target. \\n\\n As most of our folks head out for the summer, we want to thank all of them for an outstanding year at Guthrie, a safe and restful summer and successful return in August. Laissez les bons temps rouler!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-06-15-2407',
    date: '2011-06-15',
    year: 2011,
    headline: 'cg cafe',
    body: '2011-06-15 13:03:10\', \' Get our Daily Specials sent to you - Follow Us On Twitter @GuthrieCafe \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-07-13-2470',
    date: '2011-07-13',
    year: 2011,
    headline: 'Work In Progress',
    body: '2011-07-13 14:01:11\', \' This summer, most of Guthrie is under construction. Thanks to the improvements made possible by the 2007 Bond, we are having new HVAC, electrical service, security, lighting and other renovations made to our nearly 40-year-old building. Many of our classrooms are being painted and getting new flooring installed. Every area is getting a new ceiling and improved lighting. \\n\\n Check back later in the summer for an update and photos of the finished project!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-08-08-3916',
    date: '2011-08-08',
    year: 2011,
    headline: 'Quick Response',
    body: '2011-08-09 03:05:45\', \'This afternoon as the county crews were mowing the land behind the Ag Farm, a small grass fire 1,200 feet south quickly spread into a large fire. HFD responded and about 60 firefighters worked until early evening to extinguish the blaze.\\n\\nAbout 4 PM when the fire was peaking, students Lesli Evans and Cody Moreno were ordered by police to begin evacuating the animals. As the only ones at the farm, they sprung into action by calling others to assist, and start getting the trucks and trailers loaded with the heifers, steer and other projects. In a short period of time many parents and students responded to prepare the animals to move locations if necessary. Advisor Vanessa Collier made arrangements with a Katy ISD farm for temporary housing.\\n\\nFortunately that was not necessary and by 7 PM all the animals were back in their shelters. But the quick and decisive response by Cody and Lesli turned what could have been a bad situation into a well-executed evacuation drill.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-08-15-4340',
    date: '2011-08-15',
    year: 2011,
    headline: 'Eagle Scout Makes It Safer For Our Students',
    body: '2011-08-16 02:29:15\', \'Last spring, Eagle Scout John Van Anglen was planning his Leadership Service Project and asked if there were any needs at The Guthrie Center. At dismissal our students had to walk into the driving lane to get to the far busses, and after showing John this scenario, he came up with a solid plan. This summer John and a few of his friends took out some of the grass and hedges in front of the school, leveled the ground and set in pavers so the students could safely reach all of the busses.\\n\\nWe sincerely appreciate John\\\'s idea and diligence in completing the project on time and on budget.\\n\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/10/EagleProject1.jpg',
    source: 'web'
  },
  {
    id: '2011-08-22-4279',
    date: '2011-08-22',
    year: 2011,
    headline: 'Always Changing',
    body: '2011-08-22 10:13:34\', \'As we embark on our 39th year serving students in Spring Branch ISD, we welcome two new teachers to our fold.\\n\\n Jennifer Cadengo joins our Culinary Arts department as we expand to three teachers and increase the variety of classes. Ms. Cadengo graduated from the Culinary Institute of America in NY and the University of Houston Conrad Hilton College of Hotel and Restaurant Management .\\n\\n Ella Park is launching our new Graphic Design program at Guthrie. Ms. Park received her degree in Illustration at Maryland Institute of College Art , and has been a Graphic Artist, Graphic Designer and Art Director.\\n\\nWe are thrilled to have our new teachers on board as this exciting new year begins.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-09-08-4300',
    date: '2011-09-08',
    year: 2011,
    headline: 'A Walk In Camera Obscura',
    body: '2011-09-08 10:04:30\', \' Commercial Photography students under the direction of instructor Mike Radler are constructing a Camera Obscura large enough to walk in and see first-hand how this 300 year old idea was the predecessor to modern photography. It is basically a darkened room with a hole on one side that lets light in where it is reproduced inverted on the opposite surface.\\n\\nTwo key aspects are a completely dark interior and a lot of light outside. CP students have built this with empty iMac boxes, tape, black plastic and anything else to make it a success. They are chronicling this event by film and (of course) photos which will be posted soon.\\n\\n \\n\\n \\n\\nFOR IMMEDIATE RELEASE:\\n\\nCAREER & TECHNOLOGY STUDENTS HONOR APPLE DESIGN AND BEAUTY BY REPURPOSING EMPTY iMAC BOXES TO BUILD A CAMERA OBSCURA\\nHOUSTON, TX --- Oct. 5, 2011\\n\\nWhat does 1 Mac-o-phile teacher, plus 40 empty iMac computer boxes, plus 125 film and photo students equal? A camera obscura, of course!\\n\\nWhen Mac-lovers and Commercial Photography instructors Michael Radler and Patty Nilsson were faced with having to throw out over 40 empty but absolutely beautiful iMac boxes, they knew they couldn’t do it.\\n\\nSo, instead of throwing them out, lead teacher Michael Radler came up with a brilliant idea.\\n\\nHe would build a camera obscura while teaching his students the basics of photography!\\n\\nHe pitched the idea to colleague Patty Nilsson and devised a way for their commercial photography students to honor the beautiful Apple design by repurposing the empty boxes. It was a win-win situation.\\n\\nA camera obscura is basically a pinhole camera whose origins date back to the 4th Century Greek philosopher Aristotle when early scientists observed that candlelight passing through a pinhole would create an inverted illuminated image on a screen.\\n\\n“When I saw all of these empty boxes, I just hated to throw them out” says Michael Radler, a Commercial Photography teacher at The Guthrie Center, a high-tech ',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/09/Image-2.jpg',
    source: 'web'
  },
  {
    id: '2011-09-09-4305',
    date: '2011-09-09',
    year: 2011,
    headline: 'September 2011 Meeting',
    body: '2011-09-09 10:32:15\', \'Greetings and welcome everyone, attached is the agenda and minutes from Tuesday\\\'s meeting. Thank you for your time.\\n\\n citaganda09132011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-07-4345',
    date: '2011-10-07',
    year: 2011,
    headline: 'Gulf Coast Area CTE Leaders Meet At Guthrie',
    body: '2011-10-08 03:25:53\', \'Today we welcomed members of the Gulf Coast CTE Association for their monthly meeting and luncheon. Culinary Arts students created and prepared an amazing feast that included Sweet Potato Soup w/ Coconut Caviar, Southwest Turkey Roulade with Whipped Potatoes & Roasted Vegetables and a Lemon Basil Tart for dessert. The students recent lesson on proper service techniques was evident as they were confident and smiling as they served our guests.\\n\\nExecutive Director for Secondary Education Sofia Petrou , Art Institute of Houston President Larry Horn and Director Susanne Behrens , and DeVry University President Kim Nugent were special guests at the event. Many thanks to our students and Chefs Land, Cardenas and Cadengo for a memorable luncheon.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-08-4313',
    date: '2011-10-08',
    year: 2011,
    headline: 'October 2011 Meeting',
    body: '2011-10-08 20:17:51\', \'The agenda and minutes from our October meeting is linked to below.\\n\\n citaganda&minutes10112011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-10-4384',
    date: '2011-10-10',
    year: 2011,
    headline: 'NJROTC Team Excels At Annual Prairie View A&M Competition',
    body: '2011-10-10 18:34:31\', \'The results from our NJROTC Prairie View A&M meet are in.\\n\\nCadet Ruby Rivera earned a third place individual medal for female pushups completing 41 in a 120 second time-frame.\\n\\n Gabriel Tzoc earned a first place individual medal for male pushups with 104 for his two minute intense workout.\\n\\nThe SB NJROTC Basic Orienteering Team of Cadets Marlene Alfaro, Corey Downs, Kristen Tabor and Christopher Martinez earned a first place trophy.\\n\\nCongratulations to all who participated against their peers from around the Gulf Coast Area.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-12-4351',
    date: '2011-10-12',
    year: 2011,
    headline: 'They\'re Here',
    body: '2011-10-13 03:43:59\', \' FFA students in Agricultural Science look forward to the day every year when their animals arrive and they get to choose theirs from the lot. Today featured pigs, lambs and goats. The students draw numbers which indicate their order in the selection process, and when it is their turn they enter the pen, pick their project and escort it to its new home at our farm.\\n\\nThanks to our parents and students during the last workday, we have new pens for additional lambs and goats, and the \\\'Ham Palace" has a new paint job, just in time for the pigs.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-14-4318',
    date: '2011-10-14',
    year: 2011,
    headline: 'Community Tuesday Is October 18th',
    body: '2011-10-14 17:25:00\', \'Twice a year The Guthrie Center holds a Community Tuesday Open House to welcome our families, friends and supporters to meet the staff and some of our students, and take in all the exciting opportunities that are available for the high school students of Spring Branch. Please join us on October 18th from 5 PM until 7:30 PM for light refreshments and take a self-tour of our school and our Ag Science Program located at our farm on Brittmoore.\\n\\nWe look forward to seeing you here!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-19-4364',
    date: '2011-10-19',
    year: 2011,
    headline: 'Community Tuesday A Success',
    body: '2011-10-19 14:18:44\', \'Thanks to our students, staff and teachers for creating a welcoming and interesting Community Tuesday event last night. Hundreds of guests visited the many programs offered at Guthrie, and enjoyed learning, networking and observing demonstrations put on by many of our classes.\\n\\nWe will have another event in the spring semester that will also include a portfolio show by our upper level students as they prepare to transition to life after Guthrie. The date is not yet set, so please check back with us after the holidays.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-10-25-4390',
    date: '2011-10-25',
    year: 2011,
    headline: 'A Quick Way To Find The Guthrie Web',
    body: '2011-10-25 15:27:07\', \' \\n\\nQuick Response (QR) codes are unique, two dimensional matrix tags that when scanned by equipped mobile devices can take you to a specific website, SMS message or other digital content. They have been widely used in Japan and other countries and are gaining prominence in the US. The phone or other device requires a QR Reader app (usually free) to read and activate the code.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/10/qrcode.2022164.png',
    source: 'web'
  },
  {
    id: '2011-10-26-4453',
    date: '2011-10-26',
    year: 2011,
    headline: 'Advanced Animal Science Pig Dissection Day',
    body: '2011-10-26 15:41:27\', \' Advanced Animal Science students explore many aspects of a variety of species, including anatomy, skeletal and tissue identification. Recently they completed a Virtual Fetal Pig Dissection online to become familiar with the organs and internal parts.\\n\\nToday was Pig Dissection Day. Students worked in groups to dissect their own fetal pig in lab. They were able to identify the structures of the body not only by sight, but through the senses of touch and smell.\\n The Advanced Animal Science class is a 4th year science class that meets the requirements for students\\\' graduation plans. It could be a great option for you as you plan your schedule for next year. Contact teacher Vanessa Collier for more information. vanessa.collier@springbranchisd.com \\n \\n\\n \\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/10/pig.jpg',
    source: 'web'
  },
  {
    id: '2011-10-29-4408',
    date: '2011-10-29',
    year: 2011,
    headline: 'View Common Grounds Café Specials Online',
    body: '2011-10-29 22:46:22\', \' Our student-run cafe Common Grounds has daily specials in addition to it\\\'s regular offerings. Due to the many requests we have received, you can now check our specials online in two places. They are listed in a white box at the bottom of the Guthrie home page, and can be viewed on our cafe Twitter feed @GuthrieCafe. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/10/CGlogo.jpg',
    source: 'web'
  },
  {
    id: '2011-11-01-4563',
    date: '2011-11-01',
    year: 2011,
    headline: 'Guthrie Partners Honored At District Good Neighbors Event',
    body: '2011-11-01 20:59:50\', \'The Sixth Annual Good Neighbors Event was held at the Omni Houston Hotel Westside and once again many of our partners were recognized as SBISD Good Neighbors. Honorees are nominated in categories including large, medium and small business, non-profits, faith-based and more. The selection committees chooses who will be featured during the evening but every contributor is honored and appreciated.\\n\\nThis year partners Crossroads Animal Clinic, Kirksey Architecture, Studio Works, The Art Institute of Houston, Memorial Hermann Hospital and host Omni Hotel Westside were on hand for the fanfare which included featured speaker Duncan Klussmann talking about the importance of partnerships and our district\\\'s goal to double the number of students getting post-secondary degrees and certifications. Special guest BP Director of Community Affairs Sally Kolenda accepted a plaque for their corporate involvement with SBISD.\\n\\n Digital Film and Commercial Photography students took many photos and interviewed guests to produce a video of the event.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-02-4467',
    date: '2011-11-02',
    year: 2011,
    headline: 'Look How Our Volunteer Projects Deliver',
    body: '2011-11-02 14:55:14\', \'The Guthrie Center Interns adopted the American Diabetes Association as their community service project. They were given 100% creative liberty with producing a promotional video to encourage community members to get involved with the association. Their production was passionately received and is being currently used. We are very proud of their incredible work…enjoy!\\n\\nThank you, Sheri Douglass, for the opportunity.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-02-4487',
    date: '2011-11-02',
    year: 2011,
    headline: 'Tips for Creating and Maintaining Successful Internships',
    body: '2011-11-02 14:59:45\', \' Internship Overview \\n\\nAn Internship is a well-defined short-term work/learning experience to assist students prepare in the preparation for a chosen career field. With intentional learning goals, supervision, and evaluation, interns apply their classroom learning to “real world” experiences, enhancing their education and adding value to the employer. Typically, students participate in project or work alongside practicing professional as they tackle specific day-to-day challenges.\\n\\nThe goal of Spring Branch Independent School District is to advance college/career-bound students’ academic, intellectual, technical and personal skills. These students are selected juniors and seniors who are enrolled in specific courses or possess higher level skills.\\n\\nSkill areas include Agriculture Business, Architectural Design, Engineering, 3D Animation Design, Computer Sciences, Criminal Justice, Culinary Arts, Digital Filmmaking, Health Sciences as well as others.\\n\\n Internship characteristics include: \\n \\n The Internship is for an elective credit. \\n Internship employers are referred to as Training Stations and Partners. \\n The work day/times are arranged individually according to the needs of the student and the employer. It may be during the school day, after school or on weekends depending on the needs of the employing industry. \\n The Intern is to be treated like an employee. \\n Training Managers are expected to evaluate the Intern every six weeks to help them grow in their perspective fields. \\n The Internship Coordinator will make informal visits to the establishments. \\n The Internship should be a very positive experience for all parties. \\n \\n Internship Benefit Students, Employers, Parents and our Teachers \\n\\n Students benefit from working and learning is a high-skilled environment. They observe all aspects of the company’s operations and discover how the knowledge gained in high school programs is applied in the workplace.\\n\\n Employers b',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-02-4491',
    date: '2011-11-02',
    year: 2011,
    headline: 'Crossroads Animal Clinic - Dr. McIntyre and Butch Miller',
    body: '2011-11-02 15:01:16\', \'To Future Partners...We are very pleased to partner with the SBISD internship program. The program is beneficial to us because students interested in the veterinary profession are placed in our clinic. These students become valuable assets to our company because they are interested and motivated. At least 2 of our students continued their employment with us even after the internship was over. I would highly recommend partnering with the SBISD program because it is a win-win situation. We gain motivated employees, but we are also helping the community and the school district.\\n\\n Kelly McIntyre, D.V.M. \\n\\nThank you Butch Miller & Dr. McIntyre and to all of the Crossroads Animal Clinic family for being an outstanding Good Neighbor and SBISD Partner! We at the Guthrie Center would not be who we are without people like you supporting our students. You truly exemplify what a Partnership should look like. It has been a pleasure for all of us to have worked with you guys for the past 8 years. Here\\\'s to 8 more!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-03-4496',
    date: '2011-11-03',
    year: 2011,
    headline: 'Guthrie Joins Worldwide Community',
    body: '2011-11-03 15:13:45\', \'We are always looking for partner schools to share ideas in Career & Technical Education and generate new ideas for Spring Branch students.\\n\\nTo help facilitate this, we are joining the ClustrMaps community. We can see a graphical representation from countries visiting our site worldwide which may help us seek out similar schools in those regions.\\n\\n http://www3.clustrmaps.com/counter/maps.php?url=http://guthriecenter.springbranchisd.com \\n\\n // \\n\\n &amp;lt;a href="http://www3.clustrmaps.com/user/b3ae7d67"&amp;gt;&amp;lt;img src="http://www3.clustrmaps.com/stats/maps-no_clusters/Guthriecenter.springbranchisd.com-thumb.jpg" alt="Locations of visitors to this page" /&amp;gt;&amp;lt;/a&amp;gt;',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-07-4531',
    date: '2011-11-07',
    year: 2011,
    headline: 'November 2011 Meeting',
    body: '2011-11-07 20:56:30\', \'The minutes for the November 8 meeting is linked to below. Thanks for the ideas - we will reconvene in December either virtually or in person.\\n\\nJoe\\n\\n citaganda11082011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-20-4595',
    date: '2011-11-20',
    year: 2011,
    headline: 'City ArtWorks Recognizes Student For Production',
    body: '2011-11-20 22:45:12\', \' Advanced Film and Video Practicum student Kelly Kmiecik was recognized by City ArtWorks recently for her production of a promotional video highlighting the organizations young artists, events and activities.\\n \\n The video was played at the annual fundraising event that drew some of Houston\\\'s most prominent citizens. Kelly was given special recognition by the Board President, Katrina Arnim . \\n "We were very honored that Kelly made such a wonderful video for our organization" said Tessa Pearson , the Program and Marketing Coordinator. \\n"We all think Kelly is very talented and we are very grateful that she gave her time to make us a video. We already have plans to use the video on our social media profiles!"\\n\\n City ArtWorks is a non-profit organization that engages children in exciting hands-on art experiences and fosters the development of creative thinkers. The organization is dedicated to the concept that Arts education directly and positively impacts a child\\\'s higher order thinking skills, problem solving abilities and motivation to learn.\\n\\nKelly is an Advanced Filmmaking and 3rd-Year Practicum student at The Guthrie Center, and studies under the instruction of Patty Nilsson, Michael Ortiz and Michael Radler.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/11/cityartworks.png',
    source: 'web'
  },
  {
    id: '2011-11-20-4607',
    date: '2011-11-20',
    year: 2011,
    headline: 'FFA Thanks Generous Partners and Volunteers',
    body: '2011-11-21 02:42:27\', \' Spring Branch FFA students, alumni and community honored the contributions of two major volunteers Tuesday after their monthly meeting in the show barn.\\n\\n Mike & Darlene Jarrar, frequent buyers at our annual Show and Sale, donated the materials and labor to pour a reinforced concrete floor at the SBISD Ag Center Show Barn. The concrete flooring will enhance instruction and the ambiance at the annual Livestock Show. Mr. Jarrar is CEO of Jarrar & Company, a commercial HVAC company in Houston. The generous gift is valued at over $100,000 is greatly appreciated.\\n\\nThe evening event also recognized longtime volunteer and contributor Joe Yarbrough for his being awarded an Honorary Lone Star Degree at the state FFA convention this summer, and was presented by . Joe was unable to attend so our students and Alumni Association brought it to him. Mr. Yarbrough has been involved for decades with our FFA program and has donated countless hours and provided funds for the good of our students.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-29-4619',
    date: '2011-11-29',
    year: 2011,
    headline: 'It\'s That Time Again!',
    body: '2011-11-29 11:33:45\', \' It’s almost time! \\nThe Spring Branch FFA Chapter invites all area families to the Fourth Annual Santa’s Farm on Friday, December 9, 2011, from 5:00 – 8:00 p.m.\\n\\nSanta’s Farm will be held at the SBISD Agriculture Center located at 1905 Brittmore , Houston, TX 77043. All children are welcome to have their picture taken with Santa, see our farm animals, take a hay ride, glide on inflatable slides, participate in a craft project and have some hot chocolate – all for FREE!\\n\\n Lesli Evans , President of the Spring Branch FFA, says “Our FFA Chapter really enjoys hosting a special holiday evening for the families of our school district. We hope your family will join us for a fun and festive evening on the farm.”\\n What: Santa’s Farm \\n When: Friday, December 9, 2011 5:00 – 8:00 PM \\n Where: SBISD Agriculture Center, 1905 Brittmore, Houston, TX 77043 \\n Who: All Spring Branch Area Families Invited \\n Why: A Community Service Event of the Spring Branch FFA',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-11-30-4630',
    date: '2011-11-30',
    year: 2011,
    headline: 'NJROTC Scores High At Academic Bowl to Advance To Round 2',
    body: '2011-11-30 21:20:06\', \'Congratulations to our NJROTC unit cadets who participated in the 2011-12 Navy Academic Bowl Level I. Destiny Lewis, Spencer Bennett, Emily Smith, Maria Rodriguez, Ryan Wong and Emily Wade have advanced to the next level which will be conducted February 1-15, 2012. The top six schools of Level 2 will go onto the Academic Bowl Finals.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-12-01-4708',
    date: '2011-12-01',
    year: 2011,
    headline: '104 Guthrie Students Invited To Join NTHS',
    body: '2011-12-01 23:08:17\', \'For the past couple of years, we have explored having a chapter of the National Technical Honor Society at Guthrie for our students. This year teacher Linda Newnum took on the task with tenacity and success. The result is we have 104 Guthrie students who will be inducted into the inaugural NTHS chapter at The Guthrie Center.\\n\\nToday, seventy of them attended an orientation meeting at the school with co-sponsors Patty Nilsson and Sonia Greiner . NTHS offers opportunities for members to be part of a prestigious academic and career-focused organization, apply for dedicated national scholarships only for NTHS students, hold leadership positions, plan, organizes and conduct community service events and earn recognition at graduation.\\n\\nWe look forward to a busy and productive spring with these find young men and women. In alpha order by last name, here are our NTHS inductees, class of 2011-2012.\\n\\nMichael Aldridge\\nSamantha Andrade\\nAshton Belcher\\nSpencer Bennett\\nVance Berk\\nClaudet Berrones\\nPaige Brown\\nMichael Cabrera\\nJessica Calzada\\nJuana Campos\\nNatalie Cantor\\nMirna Cardenas\\nCindy Chan\\nErin Clark\\nRicardo Coria\\nRene DelaCalleja\\nAntonio Delacruz\\nAi-Van Do\\nLindsay Doler\\nSamuel Dunlap\\nJeremy Dyer\\nKattia Espinoza\\nVanessa Espinoza\\nCristian Garcia\\nChristian Garcia\\nLucero Gonzalez\\nArmando Guerra\\nLlualmer Guevara\\nAddison Haight\\nCiara Harrison\\nJessica Hayes\\nDulce Hernandez\\nJacqueline Hernandez\\nGloria Hernandez\\nMelissa Iracheta\\nZain Irshad\\nAndrew Johnson\\nJordan Jump\\nAndrew Kelly\\nSamuel Kim\\nJavier Lagunas\\nYi Chieh Lee\\nChristian Lee\\nSang Heon Lee\\nDaniel Leeper\\nKhanhtran Levu\\nDestiny Lewis\\nSamuel Lopez\\nCecilia Lopez\\nErick Lopez\\nSaul Lopez\\nAlexis MacPherson\\nAna Martinez\\nEricka Mayorga\\nMichael McInroe\\nIsabel Melgoza\\nElizabeth Mojica\\nSamantha Moon\\nChan Moon\\nEvan Moore\\nAnjanee Munidasa\\nMohammad Naraghi\\nKeira Noble\\nShannon Olson\\nEmanuel Paredes\\nKennya Paredes\\nDuane Patterson\\nJenny Payton\\nDavid Pham',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-12-03-4717',
    date: '2011-12-03',
    year: 2011,
    headline: 'National Technical Honor Society @ Guthrie',
    body: '2011-12-03 23:29:57\', \' \\n\\n What is NTHS? \\n\\n NTHS is the acknowledged leader in the recognition of outstanding student achievement in career & technical education. Thousands of schools and colleges are affiliated with the Society. Member schools agree that NTHS encourages higher scholastic achievement, cultivates a desire for personal excellence, and helps top students find success in today\\\'s highly competitive workplace. \\n\\n The purpose of NTHS is to: \\n \\n Recognize and honor excellence in career and technical education, \\n Encourage students to reach for higher levels of achievement, develop self-esteem and pride, \\n Champion a stronger, more positive image for career and technical education in America, \\n Promote critical workplace values- including skill development, honesty, responsibility, service , citizenship and leadership, \\n Help member schools and colleges build and maintain effective partnerships with local business and industry, \\n Provide greater career opportunities for members and \\n Promote educational excellence in America. \\n \\n Benefits include: \\n \\n NTHS membership materials including: custom certificate, presentation folder, member pin, ID card, window decal, white tassel, official NTHS diploma seal and general letter of recommendation customized for each student\\\'s career portfolio. \\n Access to the secure online career center for a period of one year after graduation. \\n NTHS scholarship opportunities including the Jon H. Poteat scholarship and others through our career/technical student organization partners. \\n Access to requesting specific letters of recommendation for employment, college, or scholarships for a period of one year after graduation. \\n Recruitment opportunities by top U.S colleges and corporations. \\n \\n Candidates for membership : must be enrolled in at least one Career and Technical Education class in high school. They must also meet local and national membership standards, be nominated by their instructor(s) and b',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2011/11/facebook.png',
    source: 'web'
  },
  {
    id: '2011-12-07-4682',
    date: '2011-12-07',
    year: 2011,
    headline: 'December 2011 Meeting',
    body: '2011-12-07 20:19:21\', \'The December meeting will be held at Guthrie at 4 PM. The agenda and meeting are below for you use.\\n\\nThanks\\n\\n citaganda12132011 \\n\\n citminutes12132011',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2011-12-13-4701',
    date: '2011-12-13',
    year: 2011,
    headline: '2011 Reflections Award of Excellence Winners',
    body: '2011-12-13 22:03:38\', \'Congratulations to the following Advanced and Film Practicum and Advanced Photo students that entered the 2011 PTA Reflections Competition!\\n\\nEach year, the National PTA Reflections Program challenges students to create art inspired by a specific theme. Themes are selected from hundreds of ideas submitted by students in the PTA Reflections Program Theme Search Contest.\\n\\nPast themes have included "Exploring New Beginnings,"If I Could Give the World a Gift," "A Different Kind of Hero," “I Can Make a Difference” and “Wow!” and "Together We Can."\\n\\nThe 2011-2012 theme "Diversity Means" challenged students to create projects that reflected a personal yet creative interpretation of the theme using either film or photography as the medium.\\n\\nThe following students earned the Award of Excellence on their home campuses and their projects advanced to the District level for further judging.\\n\\nAll of the District film finalists are from The Guthrie Center!---Go GC!\\n \\n \\n \\n \\n \\n 2011 Reflections Award of Excellence Winners Pictured (L-R) \\nEvan Moore - "The Pancake Epidemic" (Film)\\nAndrew Kim - "Diversity is..." (Film)\\nMelissa Aviles - "Diversity" (Film)\\nValeria Dominguez - "Differently Similar" (Film)\\nD\\\'Aja Washington - "Diversity" (Film)\\nKatherine Dowlearn - (Photo)\\n(not pictured) Derrick Drake - "Smile" (Film) \\n \\n \\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/01/Image.jpg',
    source: 'web'
  },
  {
    id: '2011-12-16-4686',
    date: '2011-12-16',
    year: 2011,
    headline: 'Chef Training Luncheon Wows Guests',
    body: '2011-12-16 20:45:04\', \' Chef Training , the original class of our Culinary Arts program that began with hotplates and a weekly trip to The Art Institute of Houston , celebrated the end of the class in their traditional style - preparing and serving a gourmet meal to family, friends and guests.\\n\\nUnder the direction of Jennifer Cardenas and Chef Melissa Manske from The Art Institute, students researched, selected, prepared and served an amazing feast that included Pea Pesto Crostini with fresh Basil and Roma tomatoes, Bacon wrapped Apricots with Sage, Pumpkin Truffle Ravioli, Roasted Red pepper Soup with Texas Corn Salsa, Wheat berry Salad with Oranges, Cherries and Pecans, Apple-Cranberry Stuffed Pork loin with Fried Grit cake and sautéed Haricot Verts, Holiday Trio, Mini Gingerbread Cake with spiced Crème Anglaise, Candy Cane Bars, and Eggnog Ice Cream with Cinnamon Nutmeg Tuile.\\n\\nMany of our high school principals and district leaders were on hand to observe, enjoy and applaud the results of their intense 18 week course. The future chefs now have experienced what most others do not until they are well into culinary school at a college. This also gives them a competitive advantage over other applicants as their careers continue.\\n\\nThanks to everyone involved in supporting our students and programs at The Guthrie Center.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-03-4674',
    date: '2012-01-03',
    year: 2012,
    headline: 'Web 2.0 Presentations',
    body: '2012-01-03 13:40:27\', \'Today\\\'s staff development consist of all of you working in groups to learn and present a Web 2.0 tool to everyone else this afternoon. Below are the details.\\n\\nFirst watch my presentation on Diigo so you have an idea of what the tool is and how to use it. It is also an example of how to present your assignment.\\n\\nWeb 2.0 Presentations\\n- Research and work in your group to learn\\n- Focus on both how to use tool and how it could be used in a class or program\\n- Present digitally (presentation, webcast, screencast, podcast, etc - max 7 minutes) You can use some already created as part but not all of your presentation\\n- Allow for Q&A at end\\n\\nPresentations start right after lunch. You may or may not have ever seen or used these tools, and that\\\'s ok. None of them involve rocket science, and you are all very intelligent and resourceful professionals. Cooperation and collaboration will be key!\\n\\nClick below to find group assignments. Good luck!\\n\\n assignments',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-04-4640',
    date: '2012-01-04',
    year: 2012,
    headline: 'Former Cadet Makes Noise At USNA',
    body: '2012-01-05 03:19:51\', \'\\\'We were all thrilled when last year\\\'s NJRTOC Cadet Commanding Officer Ambar Balderas was nominated and appointed to the United States Naval Academy in Annapolis, Maryland.\\n\\nThe academy is one of the most competitive colleges in the nation to gain admittenace, as graduates of USNA take on officer roles in the United States Navy. A typical day in the life of a plebe is rising at 5:30 AM for physical fitness, attending classes, company drills and intramural activities. The evening meal is followed by a mandatory study period until 11 PM, with lights out at midnight.\\n\\nOne of Ambar\\\'s assignments is being part of the drum line for the Naval Academy Marching Band. She is easy to spot in the photos above, and in the imbedded YouTube video below you can watch the Army-Navy Drum-Off , and decide for yourself who the clear victor is.\\n\\n \\n http://youtu.be/nWANtNZ1yvA',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-04-4694',
    date: '2012-01-04',
    year: 2012,
    headline: 'Cadets Assist At Wreaths Across Houston',
    body: '2012-01-04 21:27:31\', \'\\\'Since it\\\'s beginning a few years ago, our NJROTC cadets have been involved in the Wreaths Across Houston project at Houston National Cemetery . Every second Saturday of December brings thousands of volunteers to lay wreaths on the graves of the 31,000 buried on Veterans Memorial Parkway in Houston.Prior to the event, our cadets raise money by selling wreaths to the public, and then donate their portion of the sales to purchase even more for Houston\\\'s part in this nationwide event.\\n\\nThis year Cadets Mark Cruz, Armando Guerra, Bryan Hallenbeck, Hayden Knirk, Courtney Maki, Isabel Prudenciano, Emily Wade, Emily Waites and John Washington participated while the rest of the unit was attending a drill meet in Corpus Christi.\\n\\nPatterned after the laying of wreaths at Arlington National Cemetery , Houston\\\'s version started when a six-year old asked his father why the soldiers buried here did not get them. He thought it was not fair and thus began the Wreaths Across America-Houston. While the graves may be decorated, the real lesson is remembering our heroes, honoring their service and commitment and never forgetting their part in our freedom.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-14-4748',
    date: '2012-01-14',
    year: 2012,
    headline: 'Film & Photo Club LockIn',
    body: '2012-01-15 04:01:36\', \'Lock-In Mania!\\n\\nThe video says it all.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-18-4774',
    date: '2012-01-18',
    year: 2012,
    headline: 'Using Tweetdeck',
    body: '2012-01-18 22:46:28\', \'This is a short review of twitter and a demonstration of tweetdeck, a real-time monitoring for multiple twitter feeds. Get it through Google Chrome or download at http://www.tweetdeck.com \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-21-4918',
    date: '2012-01-21',
    year: 2012,
    headline: 'Honorable Mention',
    body: '2012-01-21 11:29:49\', \'Reporter Rusty Graham spent time a couple of weeks ago to see first-hand the great opportunities we offer Spring Branch ISD students. Yesterday his article came out in the Memorial Examiner newspaper. It\\\'s a fine reflection of our commitment to prepare our students for success after graduation.\\n\\nYou can view the article online here: http://www.yourhoustonnews.com/memorial/news/sbisd-s-guthrie-center-marks-years-of-preparing-students-for/article_71f54009-6e34-5437-abfb-6df735ed15db.html',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-23-4824',
    date: '2012-01-23',
    year: 2012,
    headline: 'Floriculture Team Debuts Strong',
    body: '2012-01-23 13:44:00\', \'Our FFA Floriculture Team and advisor Vanessa Collier competed in the Klein Invitational on Saturday. Amy Pope, Nicole Nosrat, Sami Moon and Ashton Belcher placed 4 th overall as a team and Amy Pope received 6 th place overall in individual events. This was the team’s first time to compete together and will continue to practice hard, study and attend several other contests this spring.\\n\\nCongratulations to this and all of our FFA teams as they head into the Spring Branch FFA Show and Sale and competition season.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-27-4828',
    date: '2012-01-27',
    year: 2012,
    headline: 'Sundance 12',
    body: '2012-01-27 08:30:06\', \'Keep up with the all the action as Advanced Film & Photography students Valeria Dominguez, Savanna Shaffer, Gabby Wojtowicz, Bobby Nash, Vance Berk, Cullen Alexander, WiIIams Foster, Alex Ayers, Vicky Lopez and Daune Patterson make their way through the snow, stars and wait lines at the 2012 Sundance Film Festival in Park City, Utah . This almost annual led by teachers Patty Nilsson and Mike Radler provides a clear vision of the possibilities for a career in Film.\\n \\n \\n \\n \\n \\n \\n \\n \\n \\n \\n \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-31-4913',
    date: '2012-01-31',
    year: 2012,
    headline: 'A Brief Intro',
    body: '2012-01-31 11:11:23\', \'You can learn a lot about our outstanding classes and programs by visiting areas on our website and catching up on the latest in the news section. You can also take a look at this brief intro put together by Film Instructor Michael Ortiz .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-01-31-4924',
    date: '2012-01-31',
    year: 2012,
    headline: 'Film Student Evan Moore Is 2012 Reflections Winner',
    body: '2012-02-01 00:21:31\', \' \\n \\nCongratulations to Evan Moore for his 1st Place District win for his video "The Pancake Epidemic" in this year\\\'s 2012 Reflections competition.\\n\\nEvan is a third-year Filmmaking student at The Guthrie Center studying under the instruction of Patty Nilsson .\\n\\n"I still can\\\'t believe I won" says Evan. "It still hasn\\\'t registered."\\n\\nThe Reflections program is a national program that inspires community awareness and the importance of the arts in education by providing opportunities for students to express themselves artistically to a specific theme.\\n\\nThis year\\\'s theme was "Diversity is. . .".\\n\\n"I originally interpreted the theme as a standard diversity theme, but I found that too easy of a topic, so instead, I flipped the concept and\\nbasically produced a film that would show the compromise needed in order to accept different ideas."\\n\\nStudents are tasked to create art that challenges them to use their critical thinking skills as well as their creative talents to interpret and communicate various themes.\\n\\nEntries are first judged at a campus level and winning entries are then submitted for District consideration. The District winner moves on to\\nthe National level for further judging and recognition.\\n\\n"I\\\'m really proud of Evan because he\\\'s worked extremely hard over the last three years and he is honestly developing into an interesting\\nfilmmaker," says Patty Nilsson, his instructor.\\n\\n"His work has really matured and is now beginning to pay off."\\n\\nEvan created, wrote, filmed, directed, produced and edited his entire winning entry.\\n\\nEvan is a Junior at Stratford High School and plans to enroll in the Fourth-year Filmmaking Problems & Solutions class with Nilsson next year.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-02-4948',
    date: '2012-02-02',
    year: 2012,
    headline: 'Spring Branch Plan',
    body: '2012-02-02 14:16:26\', \'The video and attached notes are part of our focus group session on the Spring Branch Plan. To respect your time, I am posting these so that you can read and view the presentation before we meet after school next week or on 2/14.\\n\\nThe video is a number of slides (each lasting 6 seconds) and two embedded videos. You can pause on each slide as you review them.\\n\\nThe PDF attachment has the slides and presentation notes, including questions we will discuss. Please take the time to review all of this before our meeting. Over the past few months we have talked about many of these points in relation to our school.\\n\\nThanks\\n\\n Spring Branch Plan Notes',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-03-4972',
    date: '2012-02-03',
    year: 2012,
    headline: 'Guthrie\'s Teacher Of The Year is Xavier Martinez',
    body: '2012-02-03 11:13:08\', \'Our congratulations and best wishes go out to Architectural Design instructor Xavier Martinez , voted in as Teacher of the Year for The Guthrie Center.\\n\\nSince his transition to education from a career in architecture, Xavier has made an impact on the successful and challenging Architectural Design program with fellow teacher Sonia Greiner. Recently he wrote and secured a grant to expand the architectural library in their area at the school.\\n\\nXavier received his degree in Architecture from the Gerald D. Hines College of Architecture at the University of Houston, and serves on our Campus Improvement Team at Guthrie.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-03-4983',
    date: '2012-02-03',
    year: 2012,
    headline: 'Graphic Design',
    body: '2012-02-03 14:43:27\', \'Does your creativity create a desire to design packaging, digital art and magazine advertising? If so, come learn how colors, photography, illustration and typography all blend together to make your work stand out among others.\\n\\n graphic design for 2013-2014 \\n\\n Graphic Design \\n\\nUtilize the latest tools and software to design colorful, exciting, eye catching, engaging and memorable advertising and marketing communications that will have people abuzz about the products and services that you feature. This course focuses on the basics of color and design, illustration and the effective use of typography to showcase your clients’ products or services to their potential customers. Learn the software tools that professionals use to bring your ideas to print - the Adobe Design Suite, Font Folio and more.\\n\\nGrades: 10-12 Credit/Course ID: 2 / 13008800 / CAV13A & CAV13B\\n\\n Graphic Design 2 | Advanced \\n\\nToday our society relies on visual communication. The second year continues deeper into concepts and processes of Graphic Design for print and web. Adobe Creative Suite with projects in editorial design, website design, and motion graphics can be mastered.\\n\\nGrades: 11-12 Credit/Course ID: 2 / 13008900 / CAV23A & CAV23B\\n\\n GraphicDesign One Pager',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-05-5016',
    date: '2012-02-05',
    year: 2012,
    headline: 'Upcoming Events At Guthrie',
    body: '2012-02-05 21:05:29\', \'A series of important events for the students and programs at Guthrie are upon us.\\n\\n The 34th Annual FFA Show and Sale begins Wednesday, February 7th at the Ag Science Center at 1905 Brittmoore. Our FFA students have invested an enormous amount of time and effort in raising their projects, This culminating event results in scholarship funds for the students. Spectators and buyers are welcome. The Spring Branch FFA is a chapter of the national organization that makes a positive difference in the lives of students through leadership, personal growth and success. SBFFA serves students from all of our high schools and some middle schools through the Junior FFA program. Show&SaleSchedule \\n ~~~~~~~~~~~~~~~~~~~~~~~~ \\n Our NJROTC program will undergo their Annual Military Inspection on Monday, February 13th. This thorough process evaluates the entire program from cadet performance and academic standing all the way to inventory procedures. It is the primary determining factor for ranking all NJROTC units, with the coveted "Distinguished with Academic Honors" designation the goal. Our Navy JROTC program serves students from all SBISD high schools. AMIschedule \\n\\n \\n\\nBoth events are open to the public. For details on these and other Guthrie activities, please view our calendar (link at the top of the website).\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2010/11/FFA-Logo.png',
    source: 'web'
  },
  {
    id: '2012-02-10-5047',
    date: '2012-02-10',
    year: 2012,
    headline: '2012 FFA Livestock Show Results',
    body: '2012-02-10 23:10:05\', \'The 34th Annual FFA Show and Sale results are in with the final revenue tally an amazing $247,837. Thanks to the hard work and coordination by our students, alumni and advisors Christy Capps and Vanessa Collier, we had a record number of buyers attending and bidding on the projects - in fact, nine contributed to the future of these students in an amount exceeding $10,000 each.\\n\\nWe sincerely thank all of you for supporting, encouraging and attending to cheer on our dedicated students.\\n\\n Top bidding in categories (not necessarily the Grand Champion) \\n \\n\\nSteer - $12,275\\nSwine - $7,450\\nTurkeys - $3,575\\nBroilers - $5,025\\nRabbits - $6.400\\nLambs - $5,275\\nGoats - $4,400\\nHorticulture - $2,425\\nFood - $1,800\\n2D Art - $1,025\\n\\n \\n \\n\\nBelow are some of the results and some videos of the judging and auction. This year we were fortunate to have Geoffrey Moon , father of FFA member Sami Moon and excellent photographer spend hours of his time creating a photo diary of the week. Geoff has graciously allowed us to share with all of you.\\n\\nAlso, official photographer TJ Johnson has his Show and Auction Days photos available for you to view and order on his website you can access by clicking here .\\n\\n \\n \\n \\n \\n \\n \\n \\n \\n\\n Event: Market Rabbits \\n\\nGrand Champion Makenzie Matecki\\nReserve Grand Champion Alec Belcher\\n\\nEvan Powell\\nKarly Shimerka\\nEmily Caylor\\nBrianna Duvall\\nChristina Caylor\\n\\n Event: Breeding Rabbits \\n\\nGrand Champion Raul Herrera\\nReserve Grand Champion Kathryn Tekell\\n\\nChristina Caylor\\nKarly Shimerka\\nEvan Powell\\nMakenzie Matecki\\nAshton Belcher\\nEmily Caylor\\nAlec Belcher\\nLiam Caylor\\nBrianna Duvall\\nNick Caylor\\n\\n Event: Fur Rabbits \\n\\nGrand Champion Christina Caylor\\nReserve Grand Champion Kathryn Tekell\\n\\nRaul Herrera\\nAshton Belcher\\nMakenzie Matecki\\nKarly Shimerka\\nEmily Caylor\\nEvan Powell\\nLiam Caylor\\nAlec Belcher\\nBrianna Duvall\\nNick Caylor\\n\\n Event: Broilers \\n\\nGrand Champion Makenzie Matecki\\nR',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-15-5101',
    date: '2012-02-15',
    year: 2012,
    headline: 'FFA Updates',
    body: '2012-02-15 13:55:58\', \'We will post items and updates here for the Spring Branch FFA students and community. Please bookmark this page for your future reference.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-18-5124',
    date: '2012-02-18',
    year: 2012,
    headline: 'February 2011 Meeting',
    body: '2012-02-18 18:59:19\', \'The agenda and minutes for our February meeting is posted below. Thanks for your attendance and input.\\n\\n citagandaminutes02212012 \\n\\nThe CIT meeting from January was cancelled due to the short time frame from the last one.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-02-21-5111',
    date: '2012-02-21',
    year: 2012,
    headline: 'Cosmetology Shines At District 8 Conference',
    body: '2012-02-21 18:34:15\', \'Congratulations to Cosmetology students competing at the District 8 SkillsUSA Leadership and Skills Competitions and Conference. Betty Franklin\\\' s students finished strong in many contests.\\n\\nIn the Skills events Deborah Salgado finished 1st place in Nail Care, qualifying for State. Leadership rounds included senior Elizabeth Suarez finishing 2nd in Job Skill Demonstration and Lucero Gonzalez took 3rd in Prepared Speech. Finally Alecia Cabell placed 4th in Nail Art.\\n\\nThese students faced stiff competent among the hundreds of students from 25 Houston area schools at San Jacinto College.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-03-5066',
    date: '2012-03-03',
    year: 2012,
    headline: 'March 30th: 7th Annual Guthrie Center Battle of The Bands',
    body: '2012-03-04 04:43:55\', \'The Digital Filmmaking and Commercial Photography Club presents the 7th Annual Guthrie Center Battle of The Bands!\\n\\nCome out on March 30th 6-10PM, to watch bands/musical solo artists from all over Spring Branch ISD give it all they have to compete for a cash prize!\\n\\n*$5.00 admission fee\\n\\n*Food and Drinks will be available for sale.\\n\\n*Everyone is welcome to come out and enjoy the show, just be warned that ALL bands, students, and attending general public are required to follow all Spring Branch ISD policies and codes of conduct.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-06-5163',
    date: '2012-03-06',
    year: 2012,
    headline: 'Digital Film & SafeWay Driving Centers Partnership Soars',
    body: '2012-03-06 11:59:23\', \'There are a multitude of reasons why Guthrie students have an advantage in preparing for college and their career of choice. One of the biggest is our business and industry partners who give their time and talent to help paint a picture of how the career actually plays out in life.\\n\\n SafeWay Driving Centers has been partnering with our upper-level Digital Filmmaking students as they create a web campaign to teach young drivers the perils of texting while behind the wheel. Safeway\\\'s President & CEO Brandon Coleman and Communication Specialist Ann Littmann have invested many hours teaching teams of students how to brainstorm ideas, develop concepts and pitch proposals to potential customers. The fruits of their efforts were recently visible last week when the creative teams unveiled their ideas to their audience, received honest, pointed feedback and went back to refine their presentations for the next round.\\n\\nFilm Instructor Patty Nilsson was beaming with pride as her fledgling professionals presented their storyboards, design concepts and character developments to the SafeWay executives. But once they received their first round of feedback, she gave them marching orders to get ready for the next presentations due up shortly.\\n\\nWe sincerely appreciate Brandon and Ann for sharing their valuable time and wisdom with our students, and look forward to expanding this partnership and developing more in the future.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-07-5172',
    date: '2012-03-07',
    year: 2012,
    headline: 'NJROTC Finishes Strong at Ozen Orienteering and Field Meet',
    body: '2012-03-07 19:39:49\', \' \\nSpring Branch Navy JROTC Cadets traveled to Beaumont, Texas in the early hours of Saturday, March 3rd, 2012 to compete in the 2nd Annual Clifton J. Ozen NJROTC Orienteering and Field Meet.\\n\\nBasic and Advanced Land Navigation (Orienteering), Push-ups, Sit-ups, Pull-ups, Flexed Arm Hang, Standing Broad Jump, Long Jump, 100 yard sprints, one mile run and several relay races were conducted throughout the long day. In all, eight Navy JROTC Units from Texas and Louisiana were competing.\\n\\nAt the end of the day, cadets captured the Meet Overall Second Place Trophy, 1st Place trophy for Advanced Orienteering, 2nd Place Trophy for Basic Orienteering and the 3rd place trophy for the 1600 Yard Shuttle Run.\\n\\nIndividual Medals were awarded to Oscar Jimenez , Gold Medal for the Mile Run; Marlene Alfaro, Gold Medal for Sit-ups; Dawn McCaskill , Gold Medal for Push-Ups; Kevin Dang , Gold Medal for Pull-Ups and Eugenia Leal , Silver Medal for Sporter Air Rifle.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/03/ozen12.png',
    source: 'web'
  },
  {
    id: '2012-03-09-5189',
    date: '2012-03-09',
    year: 2012,
    headline: 'Career Cruising: Assessment',
    body: '2012-03-09 20:29:53\', \'Video screen cast walking you through Career Cruising Assessment portion.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-19-5497',
    date: '2012-03-19',
    year: 2012,
    headline: 'March 2012 Meeting',
    body: '2012-03-20 01:29:23\', \'The March meeting was held Tuesday 3/20/2012 @ 4 PM at Guthrie. Minutes are posted below.\\n\\nThanks for the great input and conversation.\\n\\n citagandaminutes03202012',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-28-5503',
    date: '2012-03-28',
    year: 2012,
    headline: 'Community Tuesday and Student Showcase',
    body: '2012-03-28 21:32:24\', \'This year we are adding a new component to our Community Tuesday Open House. We wanted to have more future students, families, community members and business partners come out and see the amazing accomplishments of our current students, so we added student portfolios and demonstrations. Since there is so much to see here, we extended the hours to the entire day.\\n\\nCome out to visit, learn and interact with our programs Tuesday, April 3 between 8 AM and 7:30 PM. We look forward to meeting you.\\n\\n Click here for invitation. \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/03/CommTues-Port-Exb-flyer-_final1.jpg',
    source: 'web'
  },
  {
    id: '2012-03-30-5547',
    date: '2012-03-30',
    year: 2012,
    headline: 'Designing A Graphic Logo',
    body: '2012-03-30 16:27:42\', \'Recently Graphic Design instructor Ella Park was contacted by the Spring Branch Community Health Center to develop a logo for their annual Walk for Wellness fundraiser. The deadline was tight, so it would require a lot of extra effort outside of class to have it ready in time. Ms. Park opened it up to her graphic design students as a contest, and in a short period of time she presented three impressive logo designs to SBCHC.\\n\\nThe design chosen was created by sophomore Nick Loew . He incorporated the center\\\'s current logo into his theme to create an ascetically pleasing, complimentary design for the yearly event. Graphic Design is the newest program at Guthrie with slots rapidly filling up for next year.\\n\\nCongratulations Nick!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/03/NickLoewS_WellnessLogo.jpg',
    source: 'web'
  },
  {
    id: '2012-03-30-5556',
    date: '2012-03-30',
    year: 2012,
    headline: 'FFA Connects With Local Farmers To Win',
    body: '2012-03-30 18:02:52\', \'Our FFA Chapter placed 9th in Texas for the 2012 FFA Chapter Challenge presented by Monsanto. The goal of the program was to connect FFA chapters with farmers (both large and small) to build support for the program. Congratulations to the students reaching out to make the connections and to everyone who voted for our program. The official press release is below.\\n\\n \\n\\n Spring Branch FFA Chapter connects with local farmers, wins chapter proceeds \\n\\nINDIANAPOLIS (Friday, March 16, 2012/National FFA Organization) – Thousands of FFA members from hundreds of FFA chapters in 12 states have finished a huge effort to connect with local farmers, and one local chapter has taken home a nice prize for their efforts.\\n\\nThe Spring Branch FFA Chapter received 71 votes from local farmers and placed ninth in the Texas standings. As a result, they’ll receive a $1000 FFA Certificate of Credit to be used for FFA expenses like official FFA jackets, chapter supplies and registration fees for national FFA leadership conferences. The Spring Branch FFA Chapter is located in Houston, Texas.\\n\\nThe Spring Branch FFA advisors are Vanessa Collier and Christy Capps.\\n\\nThe FFA Chapter Challenge, a second year program that expanded to 12 states in 2012, challenged FFA members to meet farmers in their local communities to build relationships and learn about different agricultural careers. After meeting, FFA members encouraged the farmers to vote for their chapter online or over the phone.\\n\\nMonsanto sponsors the FFA Chapter Challenge as a special project of the National FFA Foundation.\\n\\n“The mission of FFA goes beyond farming but its heart will always be in creating new generations of leaders who understand agriculture and small communities,” said Linda Arnold, Monsanto customer outreach lead. “Monsanto is proud to partner with the National FFA Foundation to help local chapters create that bond with the people who grow our food and build our communities.\\n\\nVoting for',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-30-5571',
    date: '2012-03-30',
    year: 2012,
    headline: 'April 2012 Meeting',
    body: '2012-03-30 20:19:06\', \'The April CIT meeting minutes and other info is attached. Thanks for your participation. will be held at 4PM on the 10th at Guthrie. We look forward to seeing you there.\\n\\n citagandaandminutes04102012',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-03-31-5610',
    date: '2012-03-31',
    year: 2012,
    headline: 'Battle Of The Bands Rocks Out',
    body: '2012-03-31 18:19:28\', \'The 7th Annual Guthrie Battle of the Bands was one of the strongest yet, with seasoned bands (three were returnees from 2011) going up against new ones for the coveted cash prize and claim to fame. Check out the video recap shot and edited by our students and watch for the uncut version to be posted soon.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-03-5577',
    date: '2012-04-03',
    year: 2012,
    headline: 'State And National Visit',
    body: '2012-04-03 17:14:10\', \'Our Spring Branch FFA program received a spontaneous visit today by two of Texas’ state FFA officers and two National FFA officer’s. Their visit today was part of a tour though the Houston area including the Houston Livestock Show and Rodeo area at Reliant Center and NASA Space Center. The national officers spend about 300 days per year traveling throughout the U.S. and even visit Japan to promote agricultural awareness and leadership throughout the world.\\n\\nTexas FFA State Officers Heston Heller and Kyle Schmidt along with National FFA Officers Jason Troendle and Alicia Hodnik spent the first part of their Houston visit touring our outstanding facilities, meeting with Ag teachers Christy Capps and Vanessa Collier, and interacting with our Ag Science students. After their tours through Houston, the National officers will be in the Brenham area tomorrow and will begin making their way to Austin, Texas later in the week.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-03-5588',
    date: '2012-04-03',
    year: 2012,
    headline: 'Guthrie Community Tuesday Kicks Off Early',
    body: '2012-04-03 22:07:53\', \' Community Tuesday started very early today at Guthrie as we were fortunate to host a remote broadcast of the FOX26 Morning News . Reporter Andrea Watkins first heard about Guthrie from her nephew Jeremy Dyer , who has taken Culinary classes for the past three years. A couple of weeks ago after visiting all of our programs, Andrea realized that they were all outstanding and needed to be a part of her story on her nephew and on our Community Tuesday Student Showcase going on until 7:30 PM today at Guthrie.\\n\\nThis video was part of a segment that featured Chef Randy Evans of Haven , a all-natural, green "seasonal kitchen" near Richmond and Kirby. This was his first trip to our remodeled spaces and his eyes were opened at the quality and level of learning and training our students absorb.\\n\\nThanks to Andrea Watkins, Chef Randy Evans, our students & instructors who rose early to begin cooking before 7 AM and of course to Jeremy for speaking so highly of his classes here at Guthrie that got this all started.\\n\\nYou can read the story and view over 15 minutes of video from today at http://www.myfoxhouston.com/dpp/news/education/120403-harold-guthrie-center-for-excellence',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-05-5703',
    date: '2012-04-05',
    year: 2012,
    headline: 'NJROTC Academically In Top 3%',
    body: '2012-04-05 13:37:42\', \'The results of the National Academic Exam are in and our Spring Branch NJROTC Unit has been ranked 5th overall in Area 10 and 61st out of the 1,677 NJROTC units in the USA.\\n\\nThis national exam includes NJROTC curriculum, College Board and current events questions. While unit participation is voluntary, nearly all units in the USA take part in this portion of the entire National Academic Competition.\\n\\nCongratulations to cadets Spencer Bennett, Armando Guerra, John Hopes, Destiny Lewis and Maria Rodriguez for outstanding results.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-09-5594',
    date: '2012-04-09',
    year: 2012,
    headline: 'Community Tuesday Student Showcase Is A Success',
    body: '2012-04-09 13:20:47\', \'Thanks to the hundreds of guests who joined us at our spring Community Tuesday on April 3. Our goal was to provide more information about our students success and more opportunities for our community and partners to visit and talk to our students and instructors. The response from the many we heard from was emphatically positive about the entire day.\\n\\nWe appreciate your supporting our students and recognizing their talents and abilities. We will continue refining our community events in the hopes to exceed your expectations even greater than you believe possible.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-10-5623',
    date: '2012-04-10',
    year: 2012,
    headline: 'How Creativity Works',
    body: '2012-04-10 10:13:15\', \'This is a promo for a book - it\\\'s well done and can be a conversation starter on problem solving issues we all face.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-13-5705',
    date: '2012-04-13',
    year: 2012,
    headline: 'FFA Students Sweep District 7 Competition',
    body: '2012-04-14 02:55:38\', \'Our FFA chapter submitted applications for awards at District 7 and walked away with all of them eligible to advance to Area.\\n\\nEntries by Andrew Johnson, Ashton Belcher, Benjamin Johnson, Brianna Duvall, Janie Garnier, Karly Shimerka, Kevin Pesl, Lesli Evans, Maggie Bass, Mattie Bounds, Nicole Nosrat and Sarah Busclen all qualified and will advance to Area 3 competition in May.\\n\\nCongratulations to these hard working and results-oriented students and their FFA Advisors Christy Capps and Vanessa Collier. \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/05/FFA-at-District.jpg',
    source: 'web'
  },
  {
    id: '2012-04-16-5640',
    date: '2012-04-16',
    year: 2012,
    headline: 'Culinary Hosts District Administrative Assistant Appreciation Luncheon',
    body: '2012-04-16 09:56:03\', \'Every year our Administrative Assistants from around the district are treated to an appreciation luncheon as a small thanks for their countless contributions throughout our departments and schools. This year our Culinary Arts students were recruited to provide them a break from the norm they would not soon forget.\\n\\nOur chefs and students put together a healthy main course grilled chicken salad with traditional and unique additions, followed by a fun, festive and of course healthy chocolate fondue. Our guests left with great smiles on their faces as they headed back to work, thanks to our Culinary classes and instructors Jennifer Cardenas , Erin Land and Jen Cadengo . Bon Appétit!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-24-5711',
    date: '2012-04-24',
    year: 2012,
    headline: 'NJROTC Continues Streak Of Earning Distinguished Unit With Academic Honors',
    body: '2012-04-25 02:57:23\', \'Our NJROTC Unit has again earned the coveted award of being a Distinguished Unit With Academic Honors . This is the seventh year in a row and 10th out of the 16 year history of the Spring Branch unit.\\n\\nThe \\\'distinguished\\\' level is based on a combination of their success in the Annual Military Inspection, placement in JROTC competitions, community service hours and many other factors, while the \\\'academic honors\\\' stems from the cumulative academic level of cadets enrolled in the program. Earning this designation entitles the Guthrie principal to nominate up to three cadets to each of the US Military Academies.\\n\\nCongratulations to Col. Sluis, Master Chief Heuser and our Cadets for continuing to achieve excellence in the program. Former CO and now US Naval Academy plebe Ambar Balderas passed on her sentiments earlier today, "I am EXTREMELY proud of everyone in the unit. This just goes to show that although we may have a lot of drama and mistakes in between, we can always pull together to reach our common goal in the end."',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-04-25-5713',
    date: '2012-04-25',
    year: 2012,
    headline: 'Worldly Award',
    body: '2012-04-26 03:07:01\', \'Digital Film students Gabby Wojtowicz, Grayson Blackburn, Valeria Dominguez and Kelly Kmiecik (not pictured) were estatic to learn they were awarded a Bronze Remi at the WorldFest Houston International Film Festival for their short film "The Life of Shoes."\\n\\n WorldFest Houston has been an international competition since 1967 and has counted noted filmmakers including Steven Spielberg, George Lucas, Ang Lee, Ridley Scott, The Coen Brothers, David Lynch, Brian De Palma and Oliver Stone as past winners.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-05-02-5722',
    date: '2012-05-02',
    year: 2012,
    headline: 'Animation Students Accepted At Ringling and UT Dallas',
    body: '2012-05-03 03:08:58\', \' Ringling College of Art and Design , one of the most competitive Animation schools in the country, has accepted two Guthrie 3D Animation students to join their student body in the fall, while UT Dallas, also a premiere higher education stop for future Animators will host two other advanced students from our program.\\n\\n Susie Zhang and Kirstyn Smith received letters of acceptance to Ringling and will attend in the fall majoring in animation, while Andrew Kelley and Daniel Leeper will join the student body at UT Dallas.\\n\\nGraduates from both schools are very well represented in the professional ranks of the Animation and Entertainment Industry.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-05-02-5751',
    date: '2012-05-02',
    year: 2012,
    headline: 'CTE Scholarship Luncheon Helps Kick-Start College',
    body: '2012-05-02 10:58:31\', \'Our Career and Technical Education Department held its annual Scholarship Awards Luncheon in Culinary Arts today to celebrate the success of many students and the partnerships of many businesses who contribute to this event.\\n\\n Lesli Evans, Aditya Dargan and Thomas Fuller received $1,000 CTE Exemplary Student Scholarships, Mario Isidoro was awarded the $500 Wedge-Wilkinson Memorial Scholarship, Foxmark Corporation presented $2,500 scholarships to interns Susie Zhang and Andrew Kelly , Katrina Carballa-Diaz went away with $2,500 from Village Family Practice , and Kyle Brickhouse, Blake Schreiber, Eden Infante-Paz, Michael Cisarik, Angela Arroyo and John Martinez all received scholarships from The Academy of Finance, Hospitality and Tourism and First Community Credit Union . Brooks Taylor also received a $2,000 scholarship from her internship site Forney Construction .\\n\\nSuperintendent Duncan Klussmann , campus principals, senior staff members and sponsoring teachers join the students and their families for the event. The students had a chance to address the audience and talk about their CTE classes and the direction they found for their future.\\n\\n Culinary Arts served a western-theme meal consisting of fried green tomatoes, chicken, mashed potatoes and banana pudding.\\n\\nThanks to our sponsors and scholarship committee and congratulations to our students for a successful high school career and great start to achieving their higher education goals.\\n\\nClick here for a PDF of the program. CTEawardsluncheon2012 \\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/05/VFP.png',
    source: 'web'
  },
  {
    id: '2012-05-04-5744',
    date: '2012-05-04',
    year: 2012,
    headline: 'Making Us Look Good Once Again',
    body: '2012-05-04 10:47:31\', \'A couple of times each year our campus really needs a facelift, and we are fortunate to have the creativity and care of our Horticultural Science students to do just that. Thanks to our students and Christy Capps for making Guthrie look good!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-05-08-5661',
    date: '2012-05-08',
    year: 2012,
    headline: 'May 2012 Meeting',
    body: '2012-05-08 10:53:01\', \'Thanks for contributing at our meeting yesterday. Here are the minutes and other info from our discussions as we continue to develop our 12-13 objectives via online discussion.\\n\\n CIT1213 Members GC \\n\\n CIT survey due June 1 \\n\\n CIP idea map for 12-13 \\n\\n citminutes05082012 \\n\\n GCsurvey1112 \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-05-12-5772',
    date: '2012-05-12',
    year: 2012,
    headline: 'vizvidfest Winner',
    body: '2012-05-12 13:25:16\', \'First year Digital Film student Joey Pinzon took home 3rd Place and a Sony Blogie camera at the 4th Annual vizvidfest hosted by the University of Houston. Joey was one of about two dozen Guthrie students who entered films in the competition. His piece “Que Sera Music Video" can be viewed on the festival site http://vimeopro.com/user3511768/visvidfest-2012-high-school-winners\\n\\nCongratulations to Joey and Film Instructor Michael Ortiz . You can read the details about vizvidfest here http://guthriecenter.springbranchisd.com/programs/df/visvidfest12 \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/05/vizvidfest.jpg',
    source: 'web'
  },
  {
    id: '2012-05-14-5740',
    date: '2012-05-14',
    year: 2012,
    headline: 'FFA Strong At Area 3',
    body: '2012-05-14 10:44:51\', \'The Area 3 Convention and Awards Competition at Blinn College in Brenham last week proved fruitful for our FFA students. In all, 22 of 27 awards submitted by our program advanced to State. Judging for those will be early in June at San Angelo, Texas.\\n\\nProficiency winners (those who came in First Place at both District and Area level competitions that span 20 Texas counties) included Lesli Evans for Beef Entrepreneurship, Diversified Entrepreneurship and Agricultural Education Placement, Ashton Belche r for Sheep Entrepreneurship and Sarah Buschlen in the Equine Entrepreneurship category.\\n\\nLonestar degrees will be awarded to Karly Shimerka, Janie Garnier, Maggie Bass, Andrew Johnson, Sophia Caylor, Mattie Bounds and Brianna Duvall at this year’s state FFA convention in Corpus Christi, Texas in July. Former student Claudia Martinez will receive her American Degree at National FFA Convention in Indianapolis in October, and our FFA Chapter will be honored with the Golden Horizon and National Chapter Rating at both Texas and National FFA conventions.\\n\\nCongratulations to all of our students, teachers Vanessa Collier and Christy Capps and our many parents and supporters who will receive Honorary Lonestar and Honorary American Degrees this summer.\\n\\nGood luck Lesli, Ashton and Sarah at State!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-05-15-5760',
    date: '2012-05-15',
    year: 2012,
    headline: 'Hospitality Student Receives Scholarship',
    body: '2012-05-15 11:12:37\', \' Dennis Moreno , student in our Hotel Management program at The Omni Hotel Westside was awarded a $2,500 scholarship from the Memorial-Spring Branch Rotary Club.\\n\\nA first-year intern in the Hotel Practicum, Dennis plans to major in business management at the University of Houston Downtown. His instructor Lorraine Hamilton was proud and very excited for this great opportunity as Dennis transitions to higher education.\\n\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/05/dennism.jpg',
    source: 'web'
  },
  {
    id: '2012-05-18-5728',
    date: '2012-05-18',
    year: 2012,
    headline: 'What A Year In Animation Can Do To You',
    body: '2012-05-19 03:19:32\', \'Some programs show progress in the classes through benchmark testing. But not 3D Animation; our students decided that photographic evidence was the best way to show development over the course of a year.\\n\\n Mr. Yip Choy\\\' s classes decided the best way to demonstrate what 1,500 minutes a year in front of a computer creating animated characters and scenes will do for you was through before and after photos.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-06-06-5857',
    date: '2012-06-06',
    year: 2012,
    headline: 'A Penny For Your Thoughts',
    body: '2012-06-06 10:27:12\', \'While Guthrie is a great place to learn, Houston is an amazing city. Our culturally diverse, economically strong, subtropical home is the Energy Capital of the World with more foreign cargo moving through our Port of Houston than anywhere else in the USA. We have also become known for the vast numbers of technology innovation companies making their home here, excellent colleges and universities and of course our world-renowned Medical Center .\\n\\nBut the main identity of Houston, both locally and in the minds of much of the world, is rapidly disappearing. We are Space City , home of Johnson Space Center that coordinated manned space exploration starting with Gemini , through Apollo and the Space Shuttle missions. In 1969 the name \\\'Houston\\\' was the first word spoken from the surface of the Moon to the entire world. The Astrodome , Rockets , Astros and Aeros are proof of the synonymy among Houston, NASA and the space program.\\n\\nAstrophysicist Neil deGrasse Tyson released a video last year about the importance of space exploration and how it positively impacts all areas in our society, and of course in Houston. Now there is a follow-up video \\\' We Stopped Dreaming Episode 2 - A New Perspective \\\', that continues this message to inspire continuing space ambitions and of course perpetuate Houston\\\'s nickname of Space City.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-07-29-5892',
    date: '2012-07-29',
    year: 2012,
    headline: 'Vision, Design, Build, Inhabit',
    body: '2012-07-29 14:51:25\', \'Four years ago, Architectural Design teacher Sonia Greiner was contacted by alumni of Indiana University to have her advanced students design and generate three dimensional renderings of a proposed lecture hall to be built on the campus of a geological field station in the mountains of southwestern Montana. Their months of work and presentations created were used to present this vision to hundreds of alumni of the field station. This resulted in raising $3,000,000 in private donations for the construction of several buildings, including the lecture hall facility as the keystone of the project.\\n\\nLast fall the construction began, and the building is nearly completed. Details of the project can be viewed on the IU website. http://www.indiana.edu/~iugfs/facilities.html \\n\\nAlumni member and parent of former Architecture student Craig Davis praised Ms Greiner for her "leadership, teaching methods, guidance, and encouragement of the students involved was instrumental in creating this vision...and all former students who have learned from you the joy of tackling difficult challenges and the reward of their successful efforts."',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-08-29-5936',
    date: '2012-08-29',
    year: 2012,
    headline: 'Welcome To 2012-13 @ Guthrie',
    body: '2012-08-29 13:36:52\', \'Students, please take a few minutes to view these important informational topics about our campus. We hope you enjoy your time here, and please let us know if you have any questions.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-12-6073',
    date: '2012-09-12',
    year: 2012,
    headline: 'Guests Discover FFA At Family Picnic',
    body: '2012-09-12 13:40:43\', \'The Annual FFA Family Picnic is a great time for current, former and future members along with those just curious, to relax with family and friends, take a tour of the facility and hear about the advantages of being part of this stellar organization from FFA officers and advisors Christy Capps and Jane Hartensteiner . This year\\\'s event had a strong turnout and were treated to gourmet box lunches provided by the Guthrie Culinary Arts department.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-12-6409',
    date: '2012-09-12',
    year: 2012,
    headline: 'Harris County Fair Report',
    body: '2012-09-12 16:56:57\', \'All through the week of September 3rd, Spring Branch FFA members Raul Herrerra, Amy Pope, Kathryn Tekell, Karly Shimirka, Alec Belcher, Ashton Belcher, Janie Garnier, Makenzie Matecki, and Emilia Caylor all competed in shows at the 2012 Harris County Fair. The placings are as follows:\\n Raul Herrerra- 10th with Broilers and 10th with market Rabbits \\n Amy Pope- 4th with market Lamb \\n Kathryn Tekell- 4th with market Rabbits \\n Karly Shimirka - 6th with market Lamb \\n Alec Belcher - Participants with Rabbits \\n Ashton Belcher - Participant with Rabbils, 7th with market Lamb \\n Janie Garnier - 1st in class with market Steer \\n Makenzie Matecki - 3rd with Broilers, 4th with market Lamb, and Participated in Calf Scramble \\n Emilia Caylo r- Participant with Rabbits \\n \\n Congratulations to all the Exhibitors! We are so proud of y\\\'all! Keep up the good work! \\n \\n\\narticle by Emily Caylor \\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-15-6126',
    date: '2012-09-15',
    year: 2012,
    headline: '2012 Harris County Fair Results',
    body: '2012-09-15 13:30:29\', \' Harris County Fair Results \\n\\n Janie Garnier - 1st place in class/6th place steer overall (auction)\\n\\n Makenzie Matecki - 3rd place broilers (auction); 4th in class with Medium Wool Lamb\\n\\n Amy Pope - 4th place in class Southdown Lamb\\n\\n Kathryn Tekell - 4th place fryer (rabbit)(auction)\\n\\n Karly Shimerka - 6th place in class Southdown Lamb\\n\\n Ashton Belcher - Participant with fryer and 7th place in class Southdown Lamb\\n\\n Raul Herrerra - 10th place broilers (auction); 10th place fryer (rabbit) (auction) and 13th place\\n\\n Alec Belcher - Participant with fryer\\n\\n Emilee Caylor - Participant with fryer',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-18-6066',
    date: '2012-09-18',
    year: 2012,
    headline: 'NTHS Members Meeting',
    body: '2012-09-18 13:33:45\', \'The 1 st NTHS meeting of the 1213 school year will be held Wed. Sept. 26 at 3:30 PM in the Student Center. More details coming - we look forward to seeing you then.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-18-6092',
    date: '2012-09-18',
    year: 2012,
    headline: 'September 2012 Meeting',
    body: '2012-09-18 20:48:40\', \'The link below will provide the CIT agenda and minutes for September. Thanks for taking part in our committee.\\n\\nOur next meeting will be October 9th.\\n\\n CITagenda&minutesSept2012',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-18-6130',
    date: '2012-09-18',
    year: 2012,
    headline: 'Challenger 7 Orienteering Results',
    body: '2012-09-18 18:41:15\', \'On Saturday, September 15th our Orienteering Team competed at the first event of the year. Congratulations to our participants. Below are the individual results of those who finished the course.\\n\\n \\n \\n \\n \\n Course \\n Start \\n Finish \\n \\n \\n BF 15 \\n \\n \\n \\n \\n 1. Cardenas Mirna \\n 40 \\n 24.31 \\n \\n \\n 3. Prudenciano Isabel \\n 39 \\n 29.07 \\n \\n \\n BF 16 \\n \\n \\n \\n \\n 2. Jimenez Jazmine \\n 38 \\n 30.15 \\n \\n \\n 8. Lewis Destiny \\n 37 \\n 62.51 \\n \\n \\n BF 17 \\n \\n \\n \\n \\n 7. Rodriguez Maria \\n 36 \\n 57.57 \\n \\n \\n BF 19+ \\n \\n \\n \\n \\n 1. Estrada Eduardo \\n 58 \\n 68.33 \\n \\n \\n BM 14 \\n \\n \\n \\n \\n 16. Barnes Mekhi \\n 43 \\n 69.43 \\n \\n \\n BM 15 \\n \\n \\n \\n \\n 29. Honeycutt Samuel \\n 41 \\n 91.51 \\n \\n \\n BM17 \\n \\n \\n \\n \\n 3. Wong Ryan \\n 55 \\n 30.41 \\n \\n \\n 7. Dougher Clint \\n 42 \\n 42.54 \\n \\n \\n IF 16 \\n \\n \\n \\n \\n 1.Tabor Kristen \\n 22 \\n 65.33 \\n \\n \\n IM 18 \\n \\n \\n \\n \\n 4. Downs Cory \\n 31 \\n 68.00 \\n \\n \\n 13. Godinez Julian \\n 33 \\n 67.33 \\n \\n \\n AM 17 \\n \\n \\n \\n \\n 5. Mallon Mathew \\n 37 \\n 68.51 \\n \\n \\n AM 19-30 \\n \\n \\n \\n \\n 1. Flores Jose \\n 34 \\n 66.42 \\n \\n \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-19-6096',
    date: '2012-09-19',
    year: 2012,
    headline: 'Cosmetology Is Off To A Cutting Start',
    body: '2012-09-19 10:04:34\', \'Cosmetology 2 student Deborah Salgado performs the first clipper haircut for this school year.\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/09/Cos1213-1.jpg',
    source: 'web'
  },
  {
    id: '2012-09-23-6113',
    date: '2012-09-23',
    year: 2012,
    headline: 'NJROTC Warms Up At Kingwood',
    body: '2012-09-23 12:55:43\', \'Our Navy JROTC cadets competed in their second meet this year at Kingwood High School on Saturday. While a dozen students were taking the academic test, our PT team was demonstrating proficiency in push-ups, sit-ups and speed. Earlier in the day the Color Guard, Unarmed and Armed drill teams were performing before volunteer judges from active military and college ROTC cadets. Col. Sluis and Master Chief Heuser provided inspiration, transportation and of course lunch after all events were complete.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-23-6117',
    date: '2012-09-23',
    year: 2012,
    headline: 'Senator Dan Patrick Visits Guthrie',
    body: '2012-09-23 12:55:06\', \'On a absolutely beautiful sunny day where earlier many Houstonians bitter-sweetly watched the final flyover of the Space Shuttle , we were honored to receive a visit from State Senator Dan Patrick . Taking time out of his very busy pre-election schedule, Sen. Patrick was able to see some of our programs and learn about these and all of the Career & Technical Education classes throughout Spring Branch ISD on his first trip the main Guthrie campus. As a leader on the Senate education committee, Sen. Patrick has a good understanding on public education in Texas, and as happens with most guests visiting our campus, he left with a powerful visual of how CTE classes spark student interest and make education relevant to them.\\n\\nBack in February Senator Patrick attended our FFA Livestock Auction in support of our Agricultural Science/FFA students. We appreciate his time, interest and support of Guthrie, SBISD and all education in Texas.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-09-26-6144',
    date: '2012-09-26',
    year: 2012,
    headline: 'Digital Filmmaking Students Dominate At Festival',
    body: '2012-09-26 12:36:34\', \'PRESS RELEASE BY VALERIA DOMINGUEZ \\n\\n Team members accepting their awards. (L-R) Valeria Dominguez, Bobby Nash, Chris Arcy, Jack Bentele, Jonathan Cox, Anna Shultz, Harris Foster. Not pictured; Caroline Suchman, Nilson Melgar, Isai Martinez, Peter King, Michael Pyndus, Abhishek Varma and Ryan Gibson.\\n During one hot weekend in June this summer, fourteen Spring Branch ISD current and graduated students set out to compete in Houston’s 48- Hour Film Festival. They ended up winning , as well as five other awards! \\n The festival is a film competition that takes place in various cities all over the world. Filmmaking teams are given only forty-eight hours to produce a new short film. There are high stakes involved; the winner is awarded a grand prize and a chance to have their film shown at Cannes, a prestigious film festival in France. \\nThis year’s team included: current SBISD students Harris Foster, Valeria Dominguez and Caroline Suchman . as well as graduated students of SBISD; Bobby Nash, Nilson Melgar, Chris Arcy, Isai Martinez, Peter King, Anna Shultz, Michael Pyndus, Jack Bentele, Jonathan Cox, Abhishek Varma and Ryan Gibson .\\n\\nThe team, who goes by 5aucey Cinema , was formed three years ago thanks The Guthrie Center’s Filmmaking Department. This is where many of the students took classes. They heard about the competition, formed a small team with their fellow classmates and have been competing ever since.\\n\\nThis year they received the genre of romance and in only forty-eight hours managed to write, film, and edit a seven-minute movie. They called it Southbound , a story about a young man who receives love advice from three unlikely strangers.\\n\\nSeventy-two teams originally entered the Houston competition; only sixty-nine completed films were turned in on time. Out of those films, Southbound received 1st Runner Up for all of Houston, as well as Honorable Mention awards for Directing, Writing, Cinematography, Musical Score and Audience',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/09/48-picture-2.jpg',
    source: 'web'
  },
  {
    id: '2012-10-04-6189',
    date: '2012-10-04',
    year: 2012,
    headline: 'Play In Dirt Daily - Choose Horticulture',
    body: '2012-10-05 02:50:36\', \'Remember when you were young and someone was always saying "don\\\'t play in the dirt, you\\\'ll track it in!" Well you won\\\'t hear that if you take Horticulture Science next year at Guthrie. This hands-on, fun and sometimes intense class will get you started in a solid career or give you the knowledge to grow your own at home.\\n\\nThanks our Floral Design students and instructor Jane Hartensteiner for making our campus look good!\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/10/feet.jpg',
    source: 'web'
  },
  {
    id: '2012-10-09-6203',
    date: '2012-10-09',
    year: 2012,
    headline: 'October 2012 Meeting',
    body: '2012-10-09 10:30:02\', \'The CIT agenda and minutes for the 10.9.2012 meeting is linked below.\\n\\n CITmeeting10112012',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-10-24-6363',
    date: '2012-10-24',
    year: 2012,
    headline: 'Cadets Set High Goal For Wreaths Across America - Houston',
    body: '2012-10-24 13:30:34\', \'Since 2008, our Navy Junior Reserve Officers Training Corps (NJROTC) unit has been involved with Houston’s annual “Wreaths Across America” program. The mission of the program is to Remember, Honor and Teach, and through fundraising efforts to place a wreath on each of more than 59,000 headstones of the heroes interred at the Houston National Cemeter y.\\n\\nThe NJROTC unit assisted in raising enough funds for over 14,000 wreaths in 2008 and over 29,000 in 2011. On 15 December, 2012, as in years past, cadets will assist in laying wreaths on the graves of our Nation’s fallen.\\n\\nThis year their goal is to raise $3,000 in donations to help fund as many wreaths as possible. Dozens of our cadets will participate in the laying of the wreaths on December 15, 2012 and will be there in January to assist in picking them up. You can support their efforts by sponsoring a wreath online at the WAAH website: http://bit.ly/waah12 \\n\\n \\n\\n \\n\\n2010 Video Featured',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/10/wreaths1.png',
    source: 'web'
  },
  {
    id: '2012-11-02-6377',
    date: '2012-11-02',
    year: 2012,
    headline: 'Food Imitates Life',
    body: '2012-11-02 10:41:52\', \'The phrase \\\'Art Imitates Life\\\' took a different twist today as thirty-some SBISD staff members discovered some key ways to work through tough situations via salad dressings. Our creative Chef Instructors Cardenas , Land and Cadengo and student assistants worked with district staff development guru Becky Wuerth to deliver "Have You Ever Dealt With An Especially Difficult Client Or Customer" lesson in a fun and memorable way.\\n\\nWhile the participants absorbed some very useful information that can be useful in many areas of their lives, the best part may have been getting to enjoy the fruits of their labor at the end of the session. Bon Appetit!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-11-12-6372',
    date: '2012-11-12',
    year: 2012,
    headline: 'Intense Pressure To Produce',
    body: '2012-11-12 11:49:08\', \' \\n Culinary held tryouts for their first competition team in its thirteen-year history. A couple dozen of our students auditioned in two focus areas, culinary and management.\\n\\nThe culinary tryout tested the individual student’s knife skills along with their mastery of cooking methods, safety and sanitation, seasoning and taste, with plating techniques. In the management competition, students were asked to professionally present a restaurant concept they created on a website to a panel of judges. They were judged on the feasibility of their concept, answers to their interview by the judges and website appearance.\\n\\nThe culinary team will be working with Chef Instructors and corporate Chef Ric Rosser from Landry’s to develop a three course meal that will be produced on two gas burners in an hour and a half. The management team will be creating a restaurant concept and completing a full business plan. During the regional competition in Humble the students must pitch their restaurant to a panel of judges as if they were investors. These teams will create, refine and perfect the skills they have learned thus far in our culinary program.\\n\\nIn February, we will send two teams to the ProStart Competition sponsored by the National Restaurant Association Educational Foundation and the Texas Restaurant Association. This is the first competition in a series that leads to The National ProStart Invitational. The NRAEA website calls the National ProStart Invitational "the country’s premier high school competition focused on restaurant management and culinary arts."\\n\\nCongratulations to our teams!\\n\\n Culinary Team - Breion Bracks, Gilda Cortez, Kelsey Long,Joseph Perez, Malik Bishop (Alternate)\\n\\n Management Team - Leonardo Aguilar, Alex Arriazola, Eunice Badillo, Roseleen Caballero, Alice Kim (Alternate)',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/11/sizzle.png',
    source: 'web'
  },
  {
    id: '2012-11-12-6395',
    date: '2012-11-12',
    year: 2012,
    headline: 'Weaving A New Partnership',
    body: '2012-11-12 17:13:29\', \'In late September our Digital Filmmaking department took an assignment from Marisa Walker at BP Community Affairs about their upcoming Fabric Of America event. They were looking for ways to digitally archive the October 17th celebration on the BP campus.\\n\\nInstructor Patty Nilsson contacted interns Grayson Blackburn, Valeria Dominguez and Fernando Trujano to generate some ideas and take the assignment. Our interns attended the event to capture it, and over the next couple weeks worked with our BP contacts to get it ready for release.\\n\\nYou can view the BP Fabric of America website that features the video and talks about this unique opportunity for BP employees to target up to $300 a year to a non-profit organization of their choosing.\\n\\n BP Neighbors - BP employees celebrate fund milestone \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2012/11/BPP_Rlbg.png',
    source: 'web'
  },
  {
    id: '2012-11-12-6418',
    date: '2012-11-12',
    year: 2012,
    headline: 'November 2012 Meeting',
    body: '2012-11-12 19:54:11\', \'Thanks for your input and time. The minutes are linked below (thank you Beverly for taking them).\\n\\nJoe\\n\\n CITmeeting11142012 \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-11-14-6433',
    date: '2012-11-14',
    year: 2012,
    headline: 'A Sundance Experience In Houston',
    body: '2012-11-14 12:05:34\', \'Digital Filmmaking students spent the day at the Houston Cinema Arts Festival at the Sundance Cinemas . After a screening of Trash Dance , our students had the opportunity to interview director Andrew Garrison and choreographer Allison Orr . The movie will be released nationally in 2013.\\n\\nHouston Cinema Arts Chairman Franci Crane took time out to talk to our students about the festival and the revitalization of Performing Arts in independent films in Houston cinemas.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-12-03-6467',
    date: '2012-12-03',
    year: 2012,
    headline: 'Reenacting The Crime',
    body: '2012-12-03 16:08:46\', \' Forensic Science students worked on their Crime Scene reenactments today analyzing simulated blood splatters, trajectory and other details as to determine the way a specific crime was committed. Instructor Olga Caballero called upon her experience with the Harris County Medical Examiner Office to create a realistic opportunity for the students to see that it really isn\\\'t like they show you on TV.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-12-13-6475',
    date: '2012-12-13',
    year: 2012,
    headline: 'Cadets Soar During Annual Military Inspection',
    body: '2012-12-13 17:17:44\', \'The Spring Branch NJROTC Eagles completed their Annual Military Inspection Wednesday under the watchful eyes of guest inspector Lt. Col. Mike Jodeit, USMC (Retired).\\n\\nThanks to detailed planning and execution by the cadet leaders, Col. Sluis and Master Chief Heuser were able to smile at the end as this talented team of NJROTC students impressed the inspector and dozens of visitors including SBISD trustee Bob Stevenson , Memorial HS principal Bill Lakin and Westchester Director Nancy Bertin .\\n\\nThe AMI includes personnel inspection, performance drills by platoons and teams, a cadet leadership briefing and thorough review of inventory and procedures required of each unit by the United States Navy.\\n\\nCongratulations to all those involved for an outstanding display of teamwork and results! The video above is a brief version of the twenty-minute recap featured right below here.\\n\\n \\n\\n NJROTC AMI 2012 Full from Guthrie Center on Vimeo .',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-12-13-6493',
    date: '2012-12-13',
    year: 2012,
    headline: 'Future Lawyers Start Here',
    body: '2012-12-13 15:24:04\', \' Law Enforcement 1 classes for Ms Caballero prepared and delivered opening arguments, testimony, cross examination and closing arguments during their final exam Mock Trial at Guthrie. Preparation was intense as used their newfound knowledge of court confidentiality, protocol, procedures, swearing in, cross-examination and the charge to the jury.\\n\\nLaw Enforcement is one of a handful of classes in the Criminal Justice department ay Guthrie, which will add Law Enforcement 2 and Security Services next year.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2012-12-21-6503',
    date: '2012-12-21',
    year: 2012,
    headline: 'Have A Happy!',
    body: '2012-12-21 12:38:24\', \'As we end our semester, all of us at The Guthrie Center wish you a happy holiday season!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-01-21-6548',
    date: '2013-01-21',
    year: 2013,
    headline: '35th FFA Show and Sale',
    body: '2013-01-21 16:16:54\', \'The 35th Annual Spring Branch FFA Show and Sale will be held February 7, 8 & 9 at the Ag Science Center at 1905 Brittmoore.\\n\\nWe have one of the few local shows where every eligible student who raises a project can participate in the sale. Come out and support these hard working students and cheer them on (you can bid on one as well).\\n\\n \\n\\n 2013 Spring Branch Show & Sale Schedule of Events \\n\\n Thursday, February 7, 2013 \\nRabbits Show\\nMeat Pen\\nBreeding\\nFur\\n\\n Friday, February 8, 2013 \\n08 AM Broilers-Turkeys\\n10 AM Goats\\n11 AM Lambs\\nNoon - Lunch\\n1 PM-Announce Non-livestock results\\n2 PM Breeding Heifer Show\\n3 PM Steer Show\\n4 PM Hog Show\\n\\n Saturday, February 9, 2013 \\n09 AM – Floral Design contest begins\\n11 AM – Buyer Registration & Reception begins\\n11 AM – Silent Auction opens\\n11:30 AM – Lunch\\n01 PM – Silent Auction closes\\n01 PM – Live Auction begins\\n\\n \\n\\nPoster designs courtesy of our Graphic Design @ Guthrie students.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-01-21-6557',
    date: '2013-01-21',
    year: 2013,
    headline: 'Competition Team Dinner And Fundraiser',
    body: '2013-01-21 16:41:45\', \'The first Guthrie Culinary Arts competition teams to compete in the ProStart Invitational held a fundraiser dinner and demonstration on February 7 @ 5:30 PM.\\n\\nThe ProStart competition consist of two events. The Management Team\\\' s job is to develop a proposal for the next big thing in restaurants conceptually and present it to a panel of industry judges. The Culinary Team \\\'s challenge is to prepare a three-course meal in one hour using only two gas burners with no available running water or electricity.\\n\\nAt stake in the nationals are up to $34 million in scholarships.\\n\\nGood luck to our teams and come out and support their efforts.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-01-28-6568',
    date: '2013-01-28',
    year: 2013,
    headline: 'Hospitality DECA Winners',
    body: '2013-01-28 15:20:58\', \'Congratulations to Natalie Toledo and Timothy Reger, winners in the District 4 DECA Career Conference Competition held on January 19 th at The Woodlands College Park High School.\\n\\nBoth students competed in the Hotel and Lodging Management event that composed of two major parts: solving a written scenario through a role-play presentation, and passing a one-hundred question comprehensive cluster exam. The students translated what they learned in their Practicum in Hospitality Services internship training, located at the Omni Houston Hotel Westside, into an effective and efficient course of action.\\n\\nNatalie and Tim are eligible to advance to the State DECA Career Conference level located in Corpus Christi, February 28 – March 2. Way to do Natalie, Tim and teacher Lorraine Hamilton for your success!\\n\\nFor more information on DECA visit texasdeca.org .\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/01/deca2013.png',
    source: 'web'
  },
  {
    id: '2013-01-30-6587',
    date: '2013-01-30',
    year: 2013,
    headline: 'The Guthrie Center Is….',
    body: '2013-01-30 22:33:15\', \'Advanced Digital Film students Valeria Dominguez, Andrew Kim, Evan Moore and Fernando Trujano wanted to share their (and others) thoughts about our school and what it has meant to their high school education. This two-minute video captures their vision extremely well. An extended version featuring all of our programs will be released soon.\\n\\nThanks Valeria, Andrew, Evan and Fernando for telling your story to the world!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-04-6601',
    date: '2013-02-04',
    year: 2013,
    headline: 'February 2013 Meeting',
    body: '2013-02-04 15:09:10\', \'The agenda and minutes from our meeting on February 11, 2013 meeting is below. Thanks for your participation.\\n\\n CITagendaFeb2013 \\n\\n Minutes Feb 2013 \\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-06-7085',
    date: '2013-02-06',
    year: 2013,
    headline: 'Building A Portfolio, One Energy Giant At A Time',
    body: '2013-02-06 20:28:55\', \'Film Interns Valeria Dominguez , Grayson Blackburn, Andrew Kim and Fernando Trujano spent a beautiful Sunday on the BP campus interviewing and recording their annual BBQ Cook-Off & FunFest, a family event and fundraiser that kicks off their part of the Houston Livestock and Rodeo.\\n\\n BP America has been an excellent partner for Guthrie in multiple programs. Our Digital Film and Commercial Photography students have gained valuable experience working with clients and producing a finished product to their specifications.\\n\\n Real world done right. \\n\\n http://bpneighbors.com/community-events/614-bbq-cook-off-funfest',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-11-6606',
    date: '2013-02-11',
    year: 2013,
    headline: 'FFA Show & Sale 2013',
    body: '2013-02-11 11:09:59\', \'Congratulations to our FFA chapter students, FFA alumni and advisors Christy Capps and Jane Primrose for putting together one of the most successful and the smoothest Spring Branch FFA Show and Sale events in our history. These students who work so diligently throughout the year to raise and groom their animal projects for their grand finale were rewarded both personally and financially as the auction raised over $235,000.\\n\\n Final Results From 35th FFA Show and Sale 2013 \\n\\n MARKET RABBITS \\nKathryn Tekell Grand Champion and Showmanship \\nRaul Herrera Reserve Champion \\nNestor Herrera\\nAshton Belcher\\nEmilia Caylor\\nAlec Belcher\\n\\n FUR RABBITS \\nAshton Belcher Grand Champion \\nKathryn Tekell Reserve Champion \\nEmilia Caylor\\nAlec Belcher\\nNestor Herrera\\nNick Caylor\\nRaul Herrera\\n\\n BREEDING RABBITS \\nEmilia Caylor Grand Champion \\nAshton Belcher Reserve Champion \\nAlec Belcher\\nNick Caylor\\nKathryn Tekell\\nNestor Herrera\\nRaul Herrera\\n\\n MARKET TURKEYS \\nCullen Robertson Grand Champion \\nEvan Powell Reserve Champion \\nAlec Belcher\\nBlake Pesl\\nAshton Belcher Showmanship \\n\\n MARKET BROILERS \\nGenesis Martinez Grand Champion \\nBlake Pesl Reserve Champion \\nMaKenzie Matecki\\nRaul Herrera Showmanship \\nNestor Herrera\\nAbel Cuevas\\nChris Beavers\\n\\n MARKET GOATS \\nEsteban Gomez Grand Champion \\nMegan Steele Reserve Champion and Showmanship \\nNick Caylor\\nAlyssa Koch\\nBenjamin Johnson\\nRachel Wilson\\nSamantha Moon\\nNestor Herrera\\nCody Woolsey\\nAmy Pope\\nJuan Ortiz\\n\\n MARKET LAMBS \\nRaul Herrera Grand Champion \\nKarly Shimerka Reserve Champion and Showmanship \\nMaKenzie Matecki\\nCassidy West\\nKyli Doucette\\nAmy Pope\\nSebastian Reyes\\nEmilia Caylor\\nAaron Makiyama\\nJanie Garnier\\nEmily Welch\\nJaime Martinez\\nMegan Steele\\n\\n HORTICULTURE\\n Benjamin Johnson Grand Champion \\nTy McGowen Reserve Champion\\n \\n\\n TWO DIMENSIONAL ART\\n Maranda Warehan Grand Champion \\nChin Pham Reserve Champion \\n\\n FOOD\\n Janie Garnier Grand Champion\\n Benjamin Jo',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-12-6613',
    date: '2013-02-12',
    year: 2013,
    headline: 'Follow Our Culinary Competition Team',
    body: '2013-02-12 16:21:27\', \'The Culinary Arts competition teams are in the middle of events at the Humble Civic Center . Chef Cadengo\\\'s Management Team finished their presentation and critical thinking exercises earlier and greatly impressed the judges. Chef Land\\\'s Culinary Team is ready to go on about 11:30 this morning. They will be tweeting updates and photos of their part online https://twitter.com/GCProStart @GCProStart\\n\\nIn video: management team members and a shot of where the culinary team will set up to win.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-12-6623',
    date: '2013-02-12',
    year: 2013,
    headline: 'Place And Show At Regionals',
    body: '2013-02-13 03:20:52\', \'The Culinary teams finished a long, exhilarating day at Humble Civic Center learning the Management Team took 2nd Place and the Culinary Team 3rd i n the ProStart Regional Culinary Competition. Chefs Cadengo and Land and students were thrilled to learn that both teams qualify for the state competition March 20-21 in Waco.\\n\\nCongratulations to our teams and chef instructors for an outstanding day. Our Culinary Team includes G ilda Cortez, Breion Bracks, Kelsey Long, Malik Bishop and Alex Snook ; and our Management Team is made up of Alex Arriazola, Eunice Badillo and Xavier Hawthorne. \\n \\n View and extended length photo and video clip montage of the culinary team\\\'s event below. \\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/02/psculinary.jpg',
    source: 'web'
  },
  {
    id: '2013-02-12-6640',
    date: '2013-02-12',
    year: 2013,
    headline: 'DFCP Lock-In Expands New Dance Craze',
    body: '2013-02-12 14:45:44\', \' Creativity Folly can strike anytime, and in the wee small hours of Saturday morning the DFCP lock-in attendees found their mania. Their version of the \\\'Harlem Shake\\\' can be seen on YouTube. http://youtu.be/6xxbh7g_wo0',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-13-6657',
    date: '2013-02-13',
    year: 2013,
    headline: 'Student Photographer Recognized',
    body: '2013-02-13 22:44:46\', \' \\n\\nWhen Christian Garcia , a Commercial Photography student entered his photo of downtown Houston into the Rising Photographer Contest , he just wanted to see what would happen and to read the critiques the competition would provide.\\n\\n“Mr Radler always tells us to push ourselves and to not be afraid of the truth, so I entered it just to see what would happen” he says.\\n\\n“I never expected to be selected, and I never expected to be a published photographer while I was still in high school!”\\n\\nGarcia’s photograph of downtown Houston was recognized for technical quality, composition, flow, texture, and light and was selected among hundreds of world-wide entries.\\n\\nFurther, Garcia’s photo caught the eye of the editorial team who thought the photo would be perfect for publication in their acclaimed Best of 2012 Photography publication making Garcia a published photographer.\\n\\nGarcia’s photo was published in three subsequent editions of Rising Photography magazine and it was in one of those editions that Garcia’s photo was noticed by editors from Photo Pursuit, an exclusive invitation-only photography community. They contacted Garcia and invited him to join their organization.\\n\\n“This one single image has totally changed my life” says Garcia. “I’m glad I took that chance.”\\n\\nThe Rising Photographer contest is open to amateur and professional photographers worldwide. Each year they receive thousands of photos who compete for money and prizes.\\n\\nGarcia is a 3rd year Commercial Photography student under the instruction of Michael Radler .\\n\\n story by Patty Nilsson \\n\\n \\n \\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/02/Commercial-Photography.jpeg',
    source: 'web'
  },
  {
    id: '2013-02-19-6748',
    date: '2013-02-19',
    year: 2013,
    headline: 'NTHS Inducts 59 Members',
    body: '2013-02-19 18:35:20\', \'We are proud to announce our 2013 inductees into our chapter of the National Technical Honor Society at Guthrie. These students, who were nominated by a teacher, have a proven track record in academics, responsibility, dependability and honesty. As members of NTHS they pledged to continue this and their strive for excellence in education.\\n\\nThe induction ceremony was held on February 18, 2013 at Guthrie to the delight of family and friends who filled the Guthrie Theater for the event, followed by refreshments and mingling time in our culinary dining area. Student officers Justin Tung, Anthony Lee, Mohammadali Naraghi and Anjanee Munidasa planned and executed a fast-paced, positive event.\\n\\n Julian Ayres, Maria Bautista, Analicia Belmarez, Infant Brito, David Brittain III, Karen Caballero, Alecia Cabell, Gabriela Cardenas, David Carter, Maritza Cuevas, Mallika Dargan, Daniel Eliades, Andrew Fowler, Joseph Fox, Rickey Golden Jr, Christopher Grant, Katherine Hulbert, Christian Kamarga, Catherine Kim, Danny Young Kim, Holly Kim, Francisco Lara, Tanner Lievois, Arleigh Lindahl, Caitlin Makin, Jonathan Martinez, Dawn McCaskill, Madison McWilliams, Cynthia Mendez, Edwin Mendoza, Niall Miner, Joan Mwaura, Hideaki Nakayama, Haley Needham, Maria Ponce, Angela Rai, Dakota Ransom, Oscar Rivera, Jessica Rodriguez, Jennifer Romero, Felipe Sanchez, Marimar Santana, Mark Schoenemann, Hira Siddiqui, Jesus Silguero Puente, Sarah Sopher, Richard Sun, Humza Tariq, Kathryn Tekell, Rodolfo Telles, Alexandria Toledo, Fernando Trujano, Danial Mohammad Uddin, Kali Venable, Josue Ventura, Nathan Vickery, Rachel Wilson, Ryan Wong and Qiaoyu Yang ,\\n\\nThanks to our sponsoring teachers Linda Newnum, Sonia Greiner and Xavier Martinez for making this all possible.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-20-6757',
    date: '2013-02-20',
    year: 2013,
    headline: 'The Moon Shines Bright',
    body: '2013-02-20 17:19:43\', \' Samantha "Sami" Moon was recently named the recipient of the 2013 Guthrie Center Character Without Question award. She, along with other SBISD campus recipients, will be recognized on February 25th at the beginning of a special Board of Trustees meeting at Northbrook High School. Superintendent Duncan Klussmann , Spring Branch educators, parents, family members and friends will be attending the celebration.\\n\\nA Memorial High School Senior, Samantha has been involved in Ag Science, FFA, Culinary Arts , and the Internship program at the Guthrie Center.\\n\\nIn nominating Samantha for this honor, some of the many accolades Ag. Science instructors Christy Capps and Jane Primrose included are "Sami shows many of the characteristics that a model student as well as a model citizen should possess. Her work ethic is unmatched by anyone that we have been associated with,” and "…she simply craves to make our community better than when she began, " and “the quality most admirable in Sami is her ability to excel academically while being involved in many organizations which include Spring Branch FFA, national Technical Honor Society, national Charity League, Theater, and Band, as well as many other extraneous volunteer initiatives while continuing to exhibit conscientiousness when working with her show animals."\\n\\nIt was stressed that Sami is a natural leader and has been the go-to girl when visitors arrive at the Spring Branch FFA Agricultural Sciences facility. She is well respected and appreciated by her teachers and those who know her.\\n\\nSami is well on her way to achieving her career goal of becoming a livestock veterinarian. We sincerely congratulate Sami for her achievements, exemplary character and being a role model for all.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-22-6790',
    date: '2013-02-22',
    year: 2013,
    headline: 'Student Talk Is Online',
    body: '2013-02-22 12:03:39\', \' Student Talk, a production written, directed and edited by our Digital Filmmaking students and hosted by Valeria Dominguez , is now online.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-27-6824',
    date: '2013-02-27',
    year: 2013,
    headline: 'SkillsUSA Spells Success For Cosmetology',
    body: '2013-02-27 21:08:24\', \' Cosmetology students had fun and enjoyed success at the District 8 SkillsUSA contest. Congratulations to our future hair professionals and instructor Betty Franklin. \\n\\n3D Acrylic Nail Art: Lucero Gonzalez - 1st Place\\nFlat Nail Art: Alecia Cabell - 2nd Place\\nNail Care: Deborah Salgado & Model Coraima Chapa - 2nd Place\\nEsthetics: Ileana Chavez & Model Karen Hernandez - 2nd Place\\nJob Demonstration: Hira Siddiqui - 2nd Place\\nPrepared Speech: Dulce Hernandez \\nMen’s Haircutting: Jenna Castro Place & Diana Flores \\nJob Interview: Priscilla Gaytan \\nLadies & Men Hair: Jermisha Anderson, Karen Garcia and Iriandy Zetina \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-02-28-6805',
    date: '2013-02-28',
    year: 2013,
    headline: 'Call For Entries - GC Battle Of The Bands 2013',
    body: '2013-02-28 21:25:04\', \'The Guthrie Battle of the Bands is coming, so if your band wants to take a shot at earning the 1st place cash prize, drop off a demo CD to the GC main office by March 18. \\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-03-06-6839',
    date: '2013-03-06',
    year: 2013,
    headline: 'Cadets Return With Trophies From Ozen',
    body: '2013-03-06 11:06:22\', \'Our Spring Branch Navy JROTC Cadets competed in the Beaumont-Ozen Drill and Orienteering Meet returning with the overall 3rd Place Trophy, 2nd Place Trophy in Advanced Orienteering and 3rd Place Trophies in Basic Oreinteering and 4 X 400 Relay.\\n\\nCongratulations and thanks to our cadets for their competitive spirit and success.\\n Blanca DeLeon : Silver Medal Broad Jump and Bronze in Rifle\\n Oscar Jimenez: Gold Medal 1 Mile Run and Silver in Pull ups\\n Mirna Cardenas: Gold Medal Flex Arm Hang and Bronze in push ups\\n Miguel Vasa-Romero: Silver Medal in Sit ups Bronze in Long Jump\\n Karina Gonzalez: Bronze in Long Jump\\n Isabel Prudenciano: Bronze in Sit ups\\n Jazmin Jimenez: Silver in 1 Mile Run\\n Emily Wade : Silver in Academics\\n \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-03-06-6851',
    date: '2013-03-06',
    year: 2013,
    headline: 'Capitol Day For FFA',
    body: '2013-03-06 11:51:53\', \'Our FFA chapter was one of over fifty from around Texas attending the 4th annual Agricultural Education and Texas FFA Day at the Capitol in Austin. They learned more about the legislative process, specifically addressing agriculture and agricultural education through workshops and presentations conducted by key public leaders in Texas. Advisor Christy Capps and students visited State Representative Dwayne Bohac at his Capitol Office.\\n\\nThe Texas FFA is one of the nation’s largest with more than 94,000 members and more than 1,000 FFA chapters. FFA gives students the opportunity to apply practical classroom knowledge to real world experiences through local, state and national competitions.\\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-03-19-6881',
    date: '2013-03-19',
    year: 2013,
    headline: 'Getting A Head Start At HerWorld',
    body: '2013-03-19 11:21:50\', \'Twenty-one female juniors and seniors from Guthrie joined with peers from around Houston to attend HerWorld @ DeVry University on March 8th. These forward-thinking students got a firsthand look at the college and learned about the importance and need for women to fill roles in technology-related careers.\\n\\nAttendees heard from DeVry Metro President (and Spring Woods Alum) Kim Nugent along with Adrienne Watson - Clinical Director for Memorial Hermann Hospital Education and other guest speakers. They participated in hands-on workshops and found out about DeVry\\\'s exciting program Passport2College that jumpstarts 11th and 12th graders to attend college during the summer. This free program for students sounded so good to Lucero Gonzalez that she signed up to take a Psychology class during spring break.\\n\\nThanks to Abel Garza at DeVry and our own Betty Franklin for coordinating the event.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-03-20-6896',
    date: '2013-03-20',
    year: 2013,
    headline: 'In Destiny\'s Hands',
    body: '2013-03-20 21:36:58\', \' Congratulations to Navy JROTC cadet Destiny Lewis on winning the statewide NJROTC Area Ten Joseph C. Gilliam Academic Achievement Award . \\nDestiny’s essay will be forwarded to Pensacola, Florida for competition at the national level. That winner will receive a laminated plaque containing a citation signed by the Chief of Naval Education and Training, a biographical statement of the award’s namesake and a monetary award.\\n\\nWe are very proud of Destiny\\\'s accomplishments as an active cadet for four years. This sixteen-year-old is number one in her class and will earn an International Baccalaureate Degree at Westchester Academy of International Studies , holds the leadership positions of Operations Officer in the NJROTC unit and vice president of Guthrie\\\'s National Technical Honor Society chapter. Destiny is a National Achievement Scholar, a member of the National Honor Society, the Spanish Honor Society, Science Honor Society and the Mu Alpha Theta Society. While in high school, Destiny dedicated more than 1,400 hours of service to her community under the direction of Col. Sluis and Master Chief Heuser . Next fall, she will begin the next chapter of her life at The University of Texas on a full ROTC Scholarship, exiting as an officer of the United States Navy.\\n\\nDestiny\\\'s submission for the Joseph C. Gilliam Academic Achievement Award can be read below.\\n \\n DESCRIBE HOW THE NAVY JUNIOR ROTC HAS PROVIDED A FOUNDATION THAT HAS ALLOWED YOU\\nTO MORE FULLY DEVELOP AS A CITIZEN AND FUTURE LEADER IN YOUR COMMUNITY \\n Not Self - But Country \\nLeadership and citizenship are synonymous because they are both attainable by all who seek to enhance the world around them through change, humility, and diligence. In four years, NJROTC has truly impacted me by exposing me to these credentials and fostering patriotism, self-confidence and individual leadership. I believe in the Naval Service Training Command motto, “Learn to Lead, Choose to Succeed!”\\n\\nCit',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/03/destiny.png',
    source: 'web'
  },
  {
    id: '2013-03-21-6905',
    date: '2013-03-21',
    year: 2013,
    headline: 'Graphic Design Student\'s Poster Chosen For Newspring Auction',
    body: '2013-03-21 15:33:58\', \' Newsprin g Center For Social Entrepreneurs and Business Nurturing has chosen a poster design by junior Brendan Jaggars as the winning entry in their annual Poster Design Contest for the Newspring Art Auction on May 2, 2013 at the BeHUMAN Gallery at CityCentre.\\n\\nBrendan is a student in the Graphic Design program at The Guthrie Center. He told his teacher Ella Park that "my years of doodling has finally paid off." In addition to recognition and pride in winning, Brendan will receive a $300 award from Newspring.\\n\\nNewspring and Guthrie have worked together to help support visual artists since their vision to revitalize sections of Spring Branch was in the incubation phase. We are honored to help support their efforts, and look forward to another successful auction year in 2013.\\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/03/BrendanJaggarsPic.png',
    source: 'web'
  },
  {
    id: '2013-03-21-6925',
    date: '2013-03-21',
    year: 2013,
    headline: 'First In State',
    body: '2013-03-21 23:59:23\', \'Congratulations to Evan Moore , a fourth-year Digital Filmmaking student at The Guthrie Center for being awarded in the 2013 PTA Reflections competition!\\n\\nEvan\\\'s film " The Magician " was awarded with District First Place, State First Place, Overall Award of Excellence and Outstanding Interpretation. \\n\\nThe PTA Reflections competition is put on annually and allows students from all over the country to submit creative works in many different categories such as film, photography, writing and more. This year\\\'s theme was "Magic of a Moment".\\n\\n"My approach this year was to try and think outside of the box and go for a more comical perspective in order to portray the theme, I\\\'m happy it paid off." says Evan.\\n\\nEvan and other nationally advancing competitors have been invited to the PTA Summer Leadership Seminar in Dallas, TX this summer to showcase their work and receive their awards.\\n\\n"I was ecstatic when I found out, I read over the results multiple times just to make sure that I\\\'d won!" says Evan about his reaction on receiving this award.\\n\\nAfter four years of studying filmmaking at The Guthrie Center, Evan has received numerous awards and his work has been broadcasted on local television. His story shows how hard work, dedication and creativity can take you far.\\n\\nEvan is a senior at Stratford high school. He plans to attend the University of North Texas to study psychology and continue filmmaking as a hobby in the future.\\n\\nCongratulations Evan!\\nStory by Valeria Dominguez / Photo by Christian Garcia\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/03/MG_9911.jpeg',
    source: 'web'
  },
  {
    id: '2013-03-21-6939',
    date: '2013-03-21',
    year: 2013,
    headline: 'There\'s A First Time For Everything',
    body: '2013-03-21 23:19:43\', \'This was an exciting and anguishing week in Culinary Arts with the ProStart competition in Waco held today. Although the original plans didn\\\'t materialize due to eligibility, our trio of Gilda Cortez, Kelsey Long and Alex Snook held their own and created an amazing three-course meal in one hour. Congratulations all!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-09-6957',
    date: '2013-04-09',
    year: 2013,
    headline: 'March 2013 Meeting',
    body: '2013-04-09 10:36:19\', \'The agenda and minutes are attached. It was a brief meeting today.\\n\\nJoe\\n\\n CITagenda&minutesMarch13',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-09-6958',
    date: '2013-04-09',
    year: 2013,
    headline: 'April 2013 Meeting',
    body: '2013-04-09 10:41:23\', \'The minutes from our April meeting are linked to below. Thanks for your support.\\n\\nJoe\\n\\n CITagenda-minutes4-23-2013',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-09-6973',
    date: '2013-04-09',
    year: 2013,
    headline: '40th Birthday Bash',
    body: '2013-04-09 11:38:02\', \'Mark you calendars for the biggest Birthday Bash The Guthrie Center has ever experienced.\\n\\n The Big 4-0 includes a community invitation to come out and see the amazing programs offered at The Guthrie Center , a high-tech Career and Technical Education school for high school students in Spring Branch ISD.\\n\\nFrom the tantalizing cuisine in Culinary Arts to the CSI investigations and mock trials in Criminal Justice , The Guthrie Center offers Spring Branch students an opportunity to explore and train in many careers while still in high school.\\n\\nIn the Digital Filmmaking and Commercial Photography classes, students learn how to manage large productions, work with a team and produce for real clients.\\n\\n3D Animation students work with professional software and motion-capture equipment straight out of Hollywood and the gaming, energy and healthcare industries. Architectural Design classes get an authentic experience of how a design firm operates and what it will take to major in architecture at a university.\\n\\n Cosmetology and Computer Tech offer students an opportunity to earn employable technical certifications that propel them into the workforce.\\n\\n“Our classes help prepare our students for success in whatever path they choose after graduation," comments principal Joe Kolenda. "Each program helps refine their skills in identifying and solving problems, working independent and with a team, sticking to a timeline and practicing the soft skills our business and industry partners tell us is critical for success in the workplace.” "We are thrilled to have the majority of our students participate in our district\\\'s T.2.4 goal by earning a certification, associates degree or bachelors degree.\\n\\nThe Guthrie Center 40th Birthday Bash will be held on Tuesday, April 23, 2013 from 4 to 7 PM. \\n\\nTeachers and students will be available to showcase departmental work, conduct mini-workshops, and give tours of the school.\\n\\nThe Guthrie Center is located',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-09-7067',
    date: '2013-04-09',
    year: 2013,
    headline: 'Officers For 2013-2014 Elected',
    body: '2013-04-09 18:35:15\', \'Congratulations to our National Technical Honor Society Officers as they were elected yesterday.\\n\\n NTHS Officers for 2013-2014 \\n\\nPresident: Anjanee Munidasa (SWHS)\\n\\nVice President: Mohammadali Naraghi (MHS)\\n\\nTreasurer: Jonathan Martinez (SHS)\\n\\nSecretary: Saul Lopez (WAIS)',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-24-6985',
    date: '2013-04-24',
    year: 2013,
    headline: 'What A Party!',
    body: '2013-04-24 16:20:33\', \'Everyone had a blast at our 40th Birthday Bash on April 23 as hundreds of guests including current and former students, families, friends, community members, SBISD Trustees and Houston City Councilwoman Helena Brown joined in the celebration.\\n\\nOur amazing faculty and staff went above and beyond to create a fun, exciting atmosphere with a huge assist from our students. Guests traveled from door to door learning about and seeing firsthand the incredible displays of work through projects and demonstrations, and getting their cards punched for a chance to take home prizes donated to the event.\\n\\nOf course it would not be a party without the food, and there was plenty of the all-American menu including hotdogs, pizza, lemonade, ice cream and birthday cake.\\n\\nThanks to so many who worked to put the finishing touches on our campus, including many of our National Technical Honor Society students who worked extremely hard the days leading up to it cleaning the exterior landscape, and to our Ag Science teachers and students who brought the farm to Guthrie. This was truly a team effort.\\n\\nWe are already starting to plan our 50th!\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-04-26-7019',
    date: '2013-04-26',
    year: 2013,
    headline: 'May 2013 Meeting',
    body: '2013-04-26 22:48:48\', \'Here are the minutes from our last meeting of the year. Thanks for helping generate ideas for 13-14. I will send out as our goals shortly.\\n\\nHave a great summer!\\n\\nJoe\\n\\n CITminutes05072013 \\n\\n CITagenda-minutes4-23-2013 \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-06-7038',
    date: '2013-05-06',
    year: 2013,
    headline: 'Animation Majors',
    body: '2013-05-06 23:07:25\', \'Animation 2 student Joey (Qiaoyu) Yang from Stratford has been accepted by the University of Texas - Dallas (UTD) and will be pursuing a degree in Arts and Technology. Joey, a first generation immigrant from Kunming, China spends his non-school time hanging out with friends, going to the movies, creating animations and sketching.\\n\\nWestchester Academy senior and 4th year animation student Marvin Mendoza has been accepted into the Motion Graphics Program at The Ringling College of Art and Design in Sarasota Florida. Marvin is a self-motivated when it comes to art projects and spends spare time at the movies and playing video games, and actively while playing tennis, biking, rock climbing and swimming. Marvin\\\'s brother Edwin is also in Animation in his second year.\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-08-7046',
    date: '2013-05-08',
    year: 2013,
    headline: 'And The Worldfest Remi Awards Go To....',
    body: '2013-05-08 18:30:11\', \' \\nTwo videos produced by Digital Filmmaking students and submitted to the 46th Annual Worldfest International Film Festival took home two coveted Remi Awards.\\n\\nCongratulations to Valeria Dominguez, Grayson Blackburn and Fernando Trujano for their award-winning production of “ Fabric of America” a 4-minute video produced for BP , one of our community partners. The video highlights one of the company’s many community events and is currently broadcast on the BP website.\\n\\nAnother Remi went to Valeria Dominguez, Andrew Kim and Evan Moore for their award-winning production of a promotional video for “The Guthrie Center”. The video is used as a short introduction to the school and highlights many student’s testimonials about what The Guthrie Center means to them.\\n\\nWorldFest is one of the oldest and largest film and video competitions in the world, with more than 4,500 category entries received from 37 countries around the world and offers competition in TV Production, Documentary, Corporate & Business Films, Student & Experimental, TV Commercials, Film & Video Production and more. Overall, only 15-20% of the total category entries actually win an award.\\n\\nIn addition to screening the award-winning films and drawing a world-wide audience, WorldFest is credited for discovering Steven Spielberg, George Lucas, Ang Lee, John Lee Hancock, David Lynch, Ridley Scott, Robert Rodriguez, The Coen Brothers, Spike Lee, Oliver Stone and more!\\n\\n“I’m incredibly proud of my students and of how much they’ve learned in our program” instructor Patty Nilsson says. “Making films is long and difficult process but when students make a plan, follow their plan and execute it, the results are amazing! I’m so glad they have learned this!”\\n\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/WorldFest-2013.jpeg',
    source: 'web'
  },
  {
    id: '2013-05-08-7073',
    date: '2013-05-08',
    year: 2013,
    headline: 'Guthrie\'s First NTHS Scholarship Winner',
    body: '2013-05-08 18:52:45\', \'Congratulations to Hugo Rodriguez , NTHS member and the first recipient of a national scholarship only available to National Technical Honor Society members. The 2013 Jon H. Poteat Scholarship winner was chosen at random from a group of members who consistently exemplify the seven attributes including Skill, Honesty, Service, Responsibility, Scholarship, Citizenship, and Leadership.\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/Hugo.jpg',
    source: 'web'
  },
  {
    id: '2013-05-08-7076',
    date: '2013-05-08',
    year: 2013,
    headline: 'Reel Teen Film Festival Winners',
    body: '2013-05-08 19:26:17\', \'Congratulations to the following students for having their films selected for screening in the 2013 REEL TEEN FILM FESTIVAL , sponsored by the Houston Public Library.\\n\\nThe festival is open to film students throughout Houston.\\n\\nStudents submit video projects in a variety of competitive film categories, namely, Documentary, Feature/Narrative, Music Videos, Animation, PSA, Commercial, Movie Trailers and more.\\n\\nOnly 44 of the over 200 projects submitted for consideration are selected for screening and Guthrie Center film students took 10 of those coveted spots!\\n\\nFilm teachers Michael Ortiz, Patty Nilsson congratulate their students Paul Snow, Juana Campos, Evan Moore, Fernando Trujano, Althea Charles, Caitlin Makin, Niall Miner, Gabriel Rivas, Giovanni Vidana and Kade Rhame for having their creative films selected for screening!\\n\\nWinners in various categories will be selected for further publicity and awards.\\n\\nThe 2013 REEL TEEN FILM FESTIVAL screenings will take place on Saturday, May 18, 2013 at the Houston Public Library Central, 500 McKinney. \\n \\n \\n RTFF Poster PDF',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/13_ReelTeenFilmFestival_Poster.png',
    source: 'web'
  },
  {
    id: '2013-05-08-7100',
    date: '2013-05-08',
    year: 2013,
    headline: 'NetRiders Get Off To A Sprint',
    body: '2013-05-08 20:27:03\', \'Congratulations to NetRiders Jarrett Tang and Nicholas Wade who finished 40th out of 900 teams throughout USA and Canada in 3rd round of the NetRiders Competition. Cisco developed these events to help students put their skills in place through simulations and online exams. All of it is conducted via Cisco WebEx.\\n\\nThe competition began with Jarrett, Nicholas and networking students Kyle Deshotel, Eduardo Guzman, Justin Tung, Daniel Sauceda, Lex Freeman and sponsor Gary Croft representing Guthrie and advancing to Round Two.\\n\\nMore info can be found at http://www.academynetriders.com/index.php',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-08-7118',
    date: '2013-05-08',
    year: 2013,
    headline: 'Architectural Design Wins Big At AIA Competition',
    body: '2013-05-08 22:26:03\', \' Architectural Design wins big again at the 2013 Houston Chapter, American Institute of Architects, Michael G. Meyers Design and Scholarship Competition. The 12 year winning streak continues. Architecture students across the district were rewarded for their hard work and long hours.\\n\\nPreceding the competition deadlines, students attended a workshop at Kirksey Architects and were treated to “a-hands on” approach to architectural design. They discussed site plans, floor plans, elevations, perspectives, narratives, and graphic/oral presentation. They were exposed to famous architects and renowned architecture. Several weeks into the project, students were invited to attend a guided tour of the building site by the committee. They discussed local influences and landscape contours. Midway through the project, the young architects conducted an interim review and critique of the student projects. Students are able to utilize AutoCAD 2013, Revit, Photoshop and Sketch Up to finalize their projects. After many after-school studio hours and an all-nighter, students prepared their projects for submittal. This year’s program was Re-inventing the Community Center for the east side of Houston.\\n\\nWinners include: (Guthrie Center wins 7 out of 15 awards- 9 SBISD students recognized)\\n\\n Honorable Mention – Best Use of the Silos: Marco Echavarria and Mason Arnold\\n\\n Honorable Mention-Best Sketch: Dakota Ransom\\n\\n Honorable Mention-Best Building Model; Saul Lopez\\n\\n Honorable Mention-AIA Houston Director Favorite; Holly Bohae Kim\\n\\n 3 rd Place Group Entry - $800 ea. and $800 Scholarship to the U of H Architectural Summer Discovery Program: Darius Zacharakis and Walker Waughtal\\n\\n 3 rd Place Individual Entry - $800 and $800 Scholarship to the U of H Architectural Summer Discovery Program: Chance Hill\\n\\n 1 st Place Individual Entry - $1200 and $800 Scholarship to the U of H Architectural Summer Discovery Program: Cecilia Zambrano\\n\\nStudents are able to u',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-09-7136',
    date: '2013-05-09',
    year: 2013,
    headline: 'Eight In A Row',
    body: '2013-05-09 17:44:11\', \'For the eighth consecutive year, the Spring Branch Navy Junior ROTC program has earned the Distinguished with Academic Honors designation. This stems from excelling in their AMI, drill meets, air rifle meets, orienteering meets, leadership training, community service and more. Achieving it takes careful planning, preparation, execution and assessment of results.\\n\\nThis honor allows the principal to nominate three eligible NJROTC cadets as candidates for appointment to the Naval Academy, Military Academy and Air Force Academy.\\n\\nCongratulations to our unit cadets and cadet leadership, outgoing Senior Naval Science Instructor Col. Ken Sluis and Master Chief Mark Heuser for creating and maintaining a strong, effective, well-run program.\\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/IMG_4851.jpg',
    source: 'web'
  },
  {
    id: '2013-05-10-7158',
    date: '2013-05-10',
    year: 2013,
    headline: 'Sharing The Love',
    body: '2013-05-10 22:46:26\', \' Leticia Seveda , a Graphic Design 2 student and senior at Northbrook HS submitted a silkscreen painting that was accepted into the 2013 Newspring Juried Art Show. \\n Her original love symbol creation was purchased at the very successful 6th Annual Newspring Student Art Auction on May 2 at the BeHuman Gallery in CityCentre. Leticia\\\'s earnings will help defray costs as she continues her art studies after graduation. \\n Graphic Design is one of many visual arts and technology electives available for high school students at Guthrie. Newspring\\\'s mission is to create economic opportunities for residents of Spring Branch to begin their journey to financial independence. \\n Congratulations Leticia! \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-16-7176',
    date: '2013-05-16',
    year: 2013,
    headline: 'Class of 2013',
    body: '2013-05-16 16:59:48\', \'',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/InternshipClassPic2012_2013.png',
    source: 'web'
  },
  {
    id: '2013-05-17-7203',
    date: '2013-05-17',
    year: 2013,
    headline: '2013 Guthrie Center Film Festival',
    body: '2013-05-17 19:43:54\', \' Guthrie Center Films together with the filmmaking team of Nilsson/Radler/Ortiz would like to congratulate the following students for earning top awards in the\\n2013 Guthrie Center Film Festival.\\n\\nParents, students and friends packed the theatre to view nearly 40 films that were selected from close to 100 entries.\\n\\nThe film teachers selected the winners and the audience voted on the Audience Choice Award.\\n\\nThe 2013 Film Festival can now be viewed at https://vimeo.com/album/2399413 \\n\\nCongratulations students!\\n\\n Best Story \\n “Disability and Phoebe” \\nDirector/Producer: Caitlin Makin \\nA documentary about cerebral palsy and a little girl who explores the world around her.\\n\\n Best Technical (tie) \\n “What You Know” \\nDirector/Producer: Darian Huynh \\nA fast-paced music video cut to the beat.\\n\\n Best Technical (tie) \\n “Sound Travels Around” \\nDirector/Producer: Fernando Trujano \\nA motion graphic illustration and music video.\\n\\n Best Cinematography \\n “Amidst” \\nDirector/Producer: Andrew Kim, Grayson Blackburn, Fernando Trujano \\nA psychological thriller produced by a team of students for the 48 Hour International Film Project in Houston.\\n\\n Best of Show and Audience Choice \\n “Tidal Wave” \\nDirector/Producer: Paul Snow \\nA beautiful story about complicated young love and a tidal wave of emotions set to The Killer’s popular song.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-17-7210',
    date: '2013-05-17',
    year: 2013,
    headline: 'Commercial Photography Students Earn Big Bucks',
    body: '2013-05-17 20:03:21\', \'Congratulations to two talented Commercial Photography students who took top awards in the FFA Show and Sale Photography competition recently. Maranda Wareham a senior from SHS was awarded $1,875.00 for her Grand Champion and 1st Place Color Title for her photo entitled “Holi”, a colorful and creative closeup depiction of a young woman’s eyes.“The Holi Festival is the festival of colors in India and because it’s such a sacred and colorful festival, I took my inspiration from them. When I actually won an award for my photo, I was astonished! I feel very blessed.” Chinh Pham a senior from SW took a Grand Champion Reserve title for “Hardworkers.” and a First Place title for “I Have Never Been to Me”.\\n\\nBoth titles earned Pham a total of $1,185.00 which he plans to give to his parents.\\n\\n“I want to give all of my award money to my parents,” Pham beams.\\n\\n“They are working so hard for me and my brother and I wouldn’t be anything if it wasn’t for them,” he adds.\\n\\n“It’s great to see that our students are able to combine the technical aspects of Commercial Photography with creativity to achieve these results”, says Michael Radler , one of the two Commercial Photography teachers at The Guthrie Center.\\n\\n“Photography is so much more than a point-and-shoot hobby.”\\n\\nEqually pleased is Patty Nilsson , the other Commercial Photography teacher.\\n\\n“When I found out that Chinh had placed and earned so much for his photos, I was ecstatic!” she says.\\n\\n“The whole class stood and clapped for him. We are so proud!”\\n\\nCongratulations students!\\n\\n \\n \\n \\n \\n\\narticle submitted by Patty Nilsson',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/Screen-Shot-2012-10-08-at-8.52.45-PM-copy.png',
    source: 'web'
  },
  {
    id: '2013-05-24-7218',
    date: '2013-05-24',
    year: 2013,
    headline: 'FFA Teams Strong At HLSR',
    body: '2013-05-24 20:19:58\', \' \\nMany FFA students and our advisors Christy Capps and Jane Primrose spent a good deal of time at the Houston Livestock Show and Rodeo this year with strong results in their areas of competition.\\n\\n Rachel Fargerson, Rachel Wilson Sami Moon, Amy Pope, Emily Caylor, Aaron Makiyama, and Nick Caylor were part of the Range Plant ID and Floriculture Competitions and earned 5th overall as a team and 16th, 18th, 20th individual finishes. The team is eligible for state.\\n\\n Kathy Hulbert placed 17th high individual in the Horse Judging Competition.\\n\\nIn the Ag Commodities Competition/ Ag4U events, Ellen Poskey, Aaron Makiyama, Emily Caylor, Makenzie Matecki and Cassidy West claimed 4th overall team, 2nd high individual (Aaron), and 18th, 26th and 33rd high individual (Ellen, Makenzie and Cassidy).\\n\\nThe Market Poultry Show resulted in the first SBFFA student making sale as Blake Pesl finished 132nd overall.\\n\\nMany others participated, and we offer our sincere congratulations to all.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/hlsr3.png',
    source: 'web'
  },
  {
    id: '2013-05-24-7250',
    date: '2013-05-24',
    year: 2013,
    headline: 'FFA Area 3 Convention Results',
    body: '2013-05-24 21:55:53\', \'Area 3 Convention was attended by Rachael Fargerson (Star Greenhand Interview), Ben Johnson (Star Chapter Interview & Voting Delegate), Amy Pope (Star Lone Star Production Interview), Emily Caylor (Star Lone Star Placement Interview), and Kathryn Tekell (voting delegate). Teachers Jane Primrose and Christy Capps assisted at Area 3 Convention. Lesli Evans s erved as an assistant to Star Interview candidates.\\n\\nTexas FFA Area 3 represents nearly lSO FFA chapters throughout twenty Texas counties. The students and awards below will advance to the State Degree Check at the Texas FFA Convention In july for consideration.\\n\\nCongratulations to our convention attendees and those continuing onto State.\\n\\nSTAR LONE STAR PLACEMENT\\n Emily Caylor \\n\\nPROFICIENCIES\\nSmall Animal Production & Care Proficiency Placement: Karly Shimerka \\nSwine Production Proficiency Entrepreneurship: Lesli Evans \\nAgriculture Education Proficiency Entrepreneurship: Lesli Evans \\nLandscape Management Proficiency Placement: Emily Caylor \\nAg Mechanics Design & Fabrication Proficiency Entrepreneurship: Ben Johnson \\nGoat Production Proficiency Entrepreneurship: Ben Johnson \\n\\nLONE STAR DEGREE APPLICANTS Abel Cuevas \\n Ashton Belcher \\n Amy Pope \\n Emily Caylor \\n\\nHONORARY LONE STAR APPLICANTS\\n Carl Risley \\n Bobby Pope \\n Greg Garnier \\n Sonya Garnier \\n Geoffrey Moon \\n Barrie Jubert \\n\\nHONORARY AMERICAN APPLICANT\\nRichard Perkins\\n\\nCHAPTER AWARDS\\n National Chapter Rating \\n Golden Horizon \\n\\nVATAT AWARDS\\nOutstanding Radio Station: Yahoo! Sports Radio 1560AM \\nOutstanding Cooperative Group: Spring Branch FFA Alumni \\nOutstanding Administrator: Joe Kolenda\\nChapter Publicity & Promotional: Ad used for Show & Sale on Sports Radio by George Galloway & Chris Beavers',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/area3FFA1.png',
    source: 'web'
  },
  {
    id: '2013-05-24-7263',
    date: '2013-05-24',
    year: 2013,
    headline: 'Operation FFA: Moore, Oklahoma',
    body: '2013-05-24 22:06:45\', \'Our FFA program is teaming up with Spring, Wunsche and Normangee FFA chapters to collect supplies and donations for both people and livestock that were impacted from the Oklahoma tornado on May 20. Operation FFA: Moore, Oklahoma will be coordinated here at the Ag Farm at 1905 Brittmoore through May 31, and delivered to the Moore FFA Chapter the first week in June.\\n\\nBelow are some of the needs for those affected. Our teachers have been in regular contact with the FFA chapter in Moore and their student projects were hit very hard. Anything we can do to help them will be appreciated.\\n\\n People Needs \\n\\n• Bedding/ sleeping bags/mattresses /blankets/towels\\n• First aid/ sanitizer\\n• Non perishable food\\n• Money/ gift cards\\n• Bug spray\\n• Shoes/rubber boots\\n• Garbage bags\\n• Socks\\n• Duct tape\\n• Sunscreen\\n• Bottled Water/energy drinks\\n• Gum\\n• Flashlights & batteries\\n• Soap/Deodorant\\n• Toothbrushes/toothpaste/ dental floss\\n• Shampoo\\n• Books/crayons/coloring books/toys\\n• Travel-sized toiletries\\n• Toilet paper\\n• Feminine products\\n\\n Livestock Needs \\n\\n• Feed\\n• Hay\\n• Halters\\n• Meds/ needles/ syringes/ thermometers\\n• Buckets\\n• Collars/ Leashes\\n• Fly Spray\\n• Lumber\\n• Barbed wire\\n• Zip ties\\n• concrete\\n• Shavings\\n• Rope\\n• tarps\\n• Bleach\\n• Brushes\\n• Shampoo & soap\\n\\n Operation FFA \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-05-27-7279',
    date: '2013-05-27',
    year: 2013,
    headline: 'Guthrie Film Festival Films Now Online',
    body: '2013-05-27 09:41:23\', \'All of the videos are available to view online on a Vimeo album. We hope you will enjoy them all; we are proud of our future filmmakers!\\n\\n https://vimeo.com/album/2399413 \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-06-07-7466',
    date: '2013-06-07',
    year: 2013,
    headline: 'One More For The Books',
    body: '2013-06-07 11:11:05\', \'Every year we celebrate the end of our journey with a crawfish boil before everyone departs. This is our way to fellowship, give thanks and say temporary and sometimes more permanent goodbyes.\\n\\nThis year we say thanks and best wishes to Ken Sluis , NJROTC Senior Naval Science Instructor and Nancy Wilkinson , CTE Administrative Assistant. Ken has been here since the program\\\'s inception at Guthrie and the high standards and success of the cadets have come under his leadership and guidance. Nancy created many systems and procedures for CTE to help it run more efficiently. Both have our gratitude and indebtedness for making this a better place to learn and work.\\n\\nThanks to all of our current and former Guthrie family members, and we eagerly await the beginning of 2013-2014 in August.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-06-12-7501',
    date: '2013-06-12',
    year: 2013,
    headline: 'Lending A Hand To Friends In Need',
    body: '2013-06-12 15:20:11\', \'After the devastation of the Moore, Oklahoma area by the deadly tornados, our FFA students got together and decided they wanted to do something to help. They soon found out that other FFA programs in Houston had the same idea, and worked with a couple of Spring ISD and Normangee chapters to collect items for the FFA programs in Moore and Tuttle, OK.\\n\\nThe response from the communities was huge, and on June 3, a group of current and recently graduated students including Haley Mandy, Ben Johnson, Lesli Evans, Amy Pope, Sebastian Reyes, Rachael Fargerson and Sami Moon went with FFA advisors Christy Capps and Jane Primrose to deliver hay, bedding items, water, wood and more to the Tuttle FFA chapter.\\n\\n You can read more about the trip in an article in the Memorial Examiner by Rusty Graham by clicking here. \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-06-19-7523',
    date: '2013-06-19',
    year: 2013,
    headline: 'FFA Officers Are Preparing For Next Year',
    body: '2013-06-19 18:38:41\', \'While most students and teachers are busy “recharging their batteries”, the FFA is busy planning for outstanding leadership and community service activities in the subsequent school year. This all began with the election of the 2013-2014 FFA Officer Team: Rachael Fargerson (President); Chris Beavers (Vice-President); Benjamin Johnson (Secretary); Nick Caylor (Treasurer); and Marybel Gomez (Reporter). The team plans to attend multiple events that will hone their presently impeccable leadership qualities. These include District VII Leadership Camp in June with other officers in the area and attend State FFA Convention in July with officers across the state to compare leadership strategies and innovative events/ideas that will ensure Spring Branch FFA’s success this next year.\\n\\nState Convention will also create an opportunity to celebrate this year’s successes at the state level, including: Outstanding Cooperation Award (Spring Branch FFA), Teacher’s Chapter Publicity and Promotions Award (Spring Branch FFA), Outstanding School Administrator Award (Joe Kolenda), and Outstanding Radio Station Award (Laura Beavers). Additionally, multiple LoneStar and American Awards will be bestowed upon hard working FFA members, past and present, for their diligent work during their high school careers as well as one proficiency ( Landscape Management-Placement ) submitted by Emily Caylor is advancing past State to Nationals in October 2013.\\n\\nOther FFA members are also busy planning for next year’s LDE and CDE teams as well as caring for next year’s animal projects which will be shown at both county, major, and the SBFFA Show and Sale. The garden is also in full production with tomatoes, corn, beans, okra, and peppers. The farm is definitely not “on break” but is lively with the sounds of cattle, sheep, goats, pigs, and students planning for success! See you in August…\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/06/FFAofficers1314.png',
    source: 'web'
  },
  {
    id: '2013-07-15-7558',
    date: '2013-07-15',
    year: 2013,
    headline: 'NJROTC Cadets Complete Summer Training & Prepare for 2013-14',
    body: '2013-07-15 11:30:06\', \'Eight cadets successfully completed the Navy JROTC Basic Leadership Training (BLT) and 12 the Area 10 Leadership Academy (LA) camps, both held at the Beaumont ISD Outdoor Activity Center and attended by Navy JROTC cadets from the Greater Houston and Beaumont areas.\\n\\nBasic Leadership Training is designed for cadets who have completed at least one year of NJROTC and are being groomed for future leadership positions within the NJROTC program. Isis Alvarez, Blanca DeLeon, Clinton Dougher, Alejandra Flores, Jasmine Hunt, Julissa Torres, Kristen Tabor , and Jacqueline Bustamante completed BLT. Ismenia Acosta and Mirna Cardenas were selected to assist Naval Science Instructors in administering the training as Graduate Assistants (GAs). Clinton Dougher took top academic honors for BLT.\\n\\nLeadership Academy is designed for senior cadets who have been selected for leadership positions for the upcoming school year. Luie Soto, Isabel Prudenciano, Hugo Montejo, Emmanuel Barrera, Mario Martinez, Kariana Bautista, Jazmin Jimenez, Dawn McCaskill, Brandon Ramirez, Jonathan Aguilar, Julian Godinez, and Emily Wade completed the Leadership Academy. Mirna Cardenas also assisted the instructors as a Graduate Assistant. Dawn McCaskill finished first in female pushups and the one mile run. Brandon Ramirez placed first in male pushups and Emmanuel Barrera was the fastest male one miler. Isabel Prudenciano was recognized as the top overall cadet for the Leadership Academy, compiling the highest score in drill, physical fitness, personnel inspection, aptitude and academics.\\n\\nOur cadets are now busy preparing for the upcoming school year, specifically making preps for the mini skills camp which will be held at The Guthrie Center from Monday July 20 thru Friday August 1. The mini skills camp will introduce new incoming cadets to the Navy JROTC program. Additionally, our cadets are conducting morning physical fitness, academic and drill practices to improve skills and',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/07/Image.jpg',
    source: 'web'
  },
  {
    id: '2013-08-06-8121',
    date: '2013-08-06',
    year: 2013,
    headline: 'An Eye Opening Experience',
    body: '2013-08-06 13:48:20\', \'Seas of blue and gold flooded the Dallas Convention Center for the 83rd Annual Texas State FFA Convention , July 8th through the 12th. Being one of only six students in my 2,500 student body high school to be in FFA, I was blown away with just how big of an organization the FFA actually is, especially in Texas. Nearly 11,000 FFA members from all over the state congregated to receive awards, attend leadership workshops, or represent as a voting delegate for his or her area of Texas. I met members from Vega to Corpus Christi, and Cotulla to Corsicana, nearly all of whom had a different interest in the FFA.\\n\\nMany join the FFA thinking that it is merely an opportunity for kids to raise farm animals; however, the recent convention furthered my knowledge. I realized now that the FFA offers a wealth of other opportunities. For example, I recall one girl who had been a member of the FFA for nearly four years and had never raised an animal because her real passion was in public speaking contests. Another encounter involved a young boy who only focused on range plant and wildlife competitions.\\n\\nFrom welding to painting and from Ag mechanics to horse judging, the FFA is an infinite abundance of knowledge for America\\\'s youth. It provides constructive outlets for students to form future career interests and opportunities, forces young minds to think from a leadership standpoint, and opens eyes to opportunities that are truly making a difference for high school students across the USA.\\n\\nSubmitted by Chris Beavers , FFA Chapter Vice President\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/08/FFA-TX-CONV13.png',
    source: 'web'
  },
  {
    id: '2013-08-07-8251',
    date: '2013-08-07',
    year: 2013,
    headline: 'FFA Receives Two-Star Chapter And National Chapter Awards',
    body: '2013-08-07 17:47:01\', \' \\n \\n Our Spring Branch FFA chapter has been recognized in 2013 National Chapter Award Program from the National FFA Organization. The program recognizes outstanding FFA chapters from throughout the country that successfully complete an annual set of required activities that encourage members to grow as individuals, work as a team and serve others in their communities. \\n \\n Chapters that received star ratings during judging July 28-Aug 2 and will be recognized at the 2013 National FFA Convention & Expo Oct. 30-Nov. 2 in Louisville, Ky. All star FFA chapters receive honors made possible by corporate sponsor John Deere as a special project of the National FFA Foundation. \\n \\n The National FFA Organization provides leadership, personal growth and career success training through agricultural education to 557,318 student members in grades seven through 12 who belong to one of 7,498 local FFA chapters throughout the U.S., Puerto Rico and the Virgin Islands. \\n \\n Source: National FFA Press Release \\n \\n \\n Click here for a copy of the 2013 Annual Report on FFA \\n 2013AnnualReport-SBFFA \\n \\n \\n \\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/StarNewsRelease.jpg',
    source: 'web'
  },
  {
    id: '2013-08-10-8127',
    date: '2013-08-10',
    year: 2013,
    headline: 'Roll Camera One: Culinary Demos',
    body: '2013-08-10 17:37:51\', \' \\nBefore our students return in a couple of weeks, our culinary chefs are busy working with CEV Multimedia producing and shooting a set of instructional videos for their iCEV Curriculum Web.\\n\\nNewest addition to our culinary staff Chef Manske is in the photo below and will work all weekend with Chef Land and Chef Cadengo and the talented video production team from CEV.\\n\\nThese videos will be available for our students as they home their culinary skills in the program at Guthrie.\\n\\nChef Land and Chef Cadengo take their turn before the cameras!\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/08/20130810-122059.jpg',
    source: 'web'
  },
  {
    id: '2013-08-12-8280',
    date: '2013-08-12',
    year: 2013,
    headline: 'Spring Branch Cadets Open National USCG CPOA Convention',
    body: '2013-08-12 18:46:41\', \'Cadets of the S pring Branch Navy JROTC conducted the flag ceremony opening the National United States Coast Guard Chief Petty Officers Association (CPOA) Convention , on 12 August 2013, held at the Hilton-North Hotel here in Houston. The Color Guard; Cadet CPO Chris Grant (Commander), Cadet CPO Julian Godinez , Cadet CPO Brandon Ramirez and Cadet PO1 Emmanuel Barre ra, were recognized with Certificates of Commendation, signed and by presented by the National President of the CPOA. The keynote speaker for the convention was the Commander, United States Coast Guard District Eight, Rear Admiral Kevin Cook , was also present for the opening.\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/uscg1.jpg',
    source: 'web'
  },
  {
    id: '2013-08-19-8242',
    date: '2013-08-19',
    year: 2013,
    headline: 'Back to School Health Fair',
    body: '2013-08-19 16:17:00\', \'Fifteen Spring Branch NJROTC cadets gave up their Saturday to volunteer for the Annual Back to School Health Fair at the Spring Branch Family Development Center.\\n\\nThe Unit’s Cadet Commanding Officer, Mirna Cardenas , (a Senior at Northbrook High School), lead a group of cadets in interpreting for, and signing up families, ensuring everyone remained hydrated and passing out over 2000 free backpacks to returning students of the Spring Branch Independent School District.\\n\\n \\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/CHF2.jpg',
    source: 'web'
  },
  {
    id: '2013-08-21-8247',
    date: '2013-08-21',
    year: 2013,
    headline: 'Honoring Our Veterans',
    body: '2013-08-21 16:41:40\', \' NJROTC Cadets were on hand at the rest of U.S. Congressman Ted Poe\\\'s office to honor local veterans at the Honor Our Heroes program sponsored by Congressman Ted Poe at the Trini Mendenhall Sosa Community Center on August 20 th to show their support for our veterans. Over 35 veterans and active duty military personnel were honored at the event which featured in addition to Congressman Poe, KPRC news anchor Bill Balleza , State Representative Dwayne Bohac and City Councilwoman Helena Brown . Cadet Lieutenant Commander Mirna Cardenas , a senior from Northbrook High School, reflected on the impact to her. “This was an honor for me to be able to meet a World War II veteran. It was very emotional to me since that generation, the greatest generation, is passing from us. Hearing their stories is something I will always remember.”\\n\\nPictured with congressman Poe from left to right : Jonathan Agular , Spring Woods junior; Emily Wade, Westchester Academy senior; Ismenia Acosta , Spring Woods senior; Mirna Cardenas, Northbrook senior; A nalleli Antunez, Spring Woods sophomore; Julian Godinez, Stratford junior; I sabel Prudenciano, Northbrook sophomore and Chris Grant, Spring Woods junior.\\n\\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/RepPoeNJROTC.png',
    source: 'web'
  },
  {
    id: '2013-08-23-8154',
    date: '2013-08-23',
    year: 2013,
    headline: 'Spring Branch NJROTC Cadets Complete Mini-Skills Camp',
    body: '2013-08-23 10:32:14\', \'Eighteen new incoming cadets participated in the annual NJROTC Mini-Skills camp from July 29 thru August 2. The voluntary one-week camp introduced the new cadets to basic drill, command structure, physical fitness, land navigation and basic military courtesies and regulations. The cadets also participated in a water survival exercise at the Spring Branch ISD Natatorium .\\n\\nThe following cadets were recognized for outstanding performance: Elijah Rodela – distinguished cadet, Ian Sanchez – most improved, J oseph Rivas – military aptitude, Brandon Flores – most dedicated and Bryan Wambui - most cooperative. Savannah Edwards and Ryan Haynes earned top honors for physical fitness and Carlos Rangel and Ryan Haynes took the best orienteering award. The mini skills camp was organized and conducted by the Spring Branch NJROTC company staff, commanded by Cadet Lieutenant Commander Mirna Cardenas , a senior from Northbrook High School.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-09-10-8206',
    date: '2013-09-10',
    year: 2013,
    headline: 'September 2013 Meeting',
    body: '2013-09-10 18:36:21\', \'Greetings all, thanks for attending today by in person or by phone. I appreciate your input, questions and kind words about out campus, and look forward to a productive year.\\n\\nOnce we get the minutes they will be added on this page.\\n\\nThanks, JOe\\n\\n CITagenda-handouts09112013',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-09-11-8270',
    date: '2013-09-11',
    year: 2013,
    headline: 'Patriots Day 2013',
    body: '2013-09-11 18:30:23\', \' Spring Branch NJROTC cadets let the campus in lowering the flags to half-staff, teacher Darrell Lewis read a proclamation on our remembering the terrorist attack, and conducted a moment of silence and the pledges to our American and Texas flags.\\n\\nPhotos courtesy Spring Branch NJROTC and Sonia Greiner.\\n \\n \\n \\nFlag raising photo caption: Cadets Emily Wade and Josie Millan , both seniors at the Westchester Academy of International Studies, raise the flag in observance of Patriot’s Day.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/Image-1.jpg',
    source: 'web'
  },
  {
    id: '2013-09-16-8284',
    date: '2013-09-16',
    year: 2013,
    headline: 'Architectural Photographer Leaves Impression',
    body: '2013-09-16 19:05:19\', \'Architectural Photographe r Joe Aker delivered an after school presentation to Architectural Design students in Sonia Greiner and Xavier Martine z\\\' classes. In addition to his talk about the photography of buildings, students were able to get a first hand look at his published books. Mrs. Greiner said " The books were a big hit. They just couldn’t stop looking at the beautiful photography and dreaming of visiting the different locations. We are so fortunate to live in a city that has such wonderful architecture and talent."\\n\\nJoe\\\'s presentation also reinforces the networking strategies and soft skills students learn in class. They will meet again on October 5 th at the American Institute of Architects for a presentation and walking tour of Houston.\\n\\nThanks to Joe Aker for sharing his time and talent with our students.\\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/09/arch1.png',
    source: 'web'
  },
  {
    id: '2013-10-08-8298',
    date: '2013-10-08',
    year: 2013,
    headline: 'October 2013 Meeting',
    body: '2013-10-08 20:11:03\', \'The October meeting was held 10.9.2013 in our student center at 4:15. Thanks for your time and input.\\n\\nJoe\\n\\n CITagenda10092013 \\n\\n CIT-GCclass1314 \\n\\n Data Points Handout \\n\\n cit MGI_Disruptive_technologies_Executive_summary_May2013 \\n\\n cit-eps-GC \\n\\n ECPS-Campus tech article \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-09-8294',
    date: '2013-10-09',
    year: 2013,
    headline: 'Guthrie Featured In Community Tuesday Video',
    body: '2013-10-09 11:28:56\', \'Our Digital Film/Video Production teams explored the campus during the recent Community Tuesday open house and left behind a memorable and informative video about Guthrie and what we offer for our students.\\n\\nThanks to videographers and editors Adrian Bourliot, Paul Branstrom, Angelica Chavez, Darian Huynh, Raekwon Johnson, Daniel Rayon and Kevin Welch working under the direction of instructors Nilsson and Ortiz for capturing the event for us.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-11-8311',
    date: '2013-10-11',
    year: 2013,
    headline: 'Paying For College',
    body: '2013-10-11 10:44:37\', \'This is an exceptional explanation of the parts and processes in finding and applying for financial aid for college.\\n\\nFilm Instructor Michael Ortiz uses his own successful experiences in meandering through the financial aid system. His explanations are understandable, real and attainable.\\n\\nThanks to Mr. Ortiz for taking his own time to produce this must-see video. Students, watching this could be the the best 16 minutes of your high school career.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-12-8315',
    date: '2013-10-12',
    year: 2013,
    headline: 'Keeping It Real',
    body: '2013-10-12 17:49:01\', \' Dawn of the Crescent Moon is in production and this weekend scenes are being shot at The Guthrie Center. Produced by Kevin Coleman and Directed by Kirk Louden , this story of modern-day college students researching 1800\\\'s folklore and finding a personal connection. The screenplay was co-written by Coleman and Welch.\\n\\n Digital Film student Kevin Welch is helping the cameraman, while Andrew Fowler, Raekwon Johnson and Adrian Bourloit are extras. Photos and on-site reporting courtesy of DF instructor Patty Nilsson. \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-16-8332',
    date: '2013-10-16',
    year: 2013,
    headline: 'Dr. Guthrie Remembered',
    body: '2013-10-17 03:14:08\', \' This week we lost a true friend and champion for students in Spring Branch. Dr. Hal Guthrie , for whom our campus is named, was instrumental in providing the vision and support for the programs at Guthrie and Career & Technical Education classes throughout SBISD.\\n\\nDr. Guthrie served as our superintendent for sixteen years before retiring in 2002. During his tenure our district became recognized as an innovative and experiential leader in education throughout the USA that has continued through this day.\\n\\nOur thoughts and prayers are with Dr. Guthrie\\\'s wife Doris, children, grandchildren, other family and friends. Details about Dr. Guthrie\\\'s storied life and career can be read in the message from Superintendent Duncan Klussmann and the obituary in the Houston Chronicle, both linked below.\\n\\nThe family has indicated that in lieu of customary remembrances, donations may be made to the school. We will establish a scholarship fund with any received. If you would like information on how to donate please contact the Spring Branch Education Foundation to contribute. Their website for donating is here Donate Online and their contact information is Spring Branch Education Foundation, 955 Campbell Road, Houston, TX 77024, 713-251-2381.\\n\\n http://www.springbranchisd.com/epubs/duncanmessageguthrie.html \\n http://www.legacy.com/obituaries/houstonchronicle/obituary.aspx?n=harold-guthrie-hal&pid=167567930&fhid=5470',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/10/drg.png',
    source: 'web'
  },
  {
    id: '2013-10-16-8341',
    date: '2013-10-16',
    year: 2013,
    headline: 'GenTX Week Wraps Up Strong',
    body: '2013-10-16 19:15:33\', \'This year GenTX week at Guthrie included daily announcements featuring specific colleges, class participation in College Week Online and the strong, informative College Lecture by filmmaking instructor Mike Ortiz on his foray and success with paying his way through it.\\n\\nGenTX Week culminated Friday afternoon with a mini-college fair held in and outside the Student Center with representatives from Sam Houston State University, University of Houston – Downtown, University of Texas – Dallas, Texas State Technical College - Waco, DeVry University, The Art Institute of Houston, Lone Star College and a representative the City of Houston , who explained the ImmTrac , the Texas immunization registry so students who turn 18 can maintain access to their shot and immunization records as they become adults.\\n\\nMay thanks to our college partners and Guthrie staff member Carla Stevens for organizing the event.\\n\\nPhotos of the college fair were shot and provided by Commercial Photography student Mallika Dargan .\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-18-8411',
    date: '2013-10-18',
    year: 2013,
    headline: 'HC Fair And  Youth Expo Results For FFA',
    body: '2013-10-18 13:49:18\', \'Congratulations to our FFA students for their strong showing in the Harris County Fair and Harris County Youth Expo. \\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-10-28-8355',
    date: '2013-10-28',
    year: 2013,
    headline: 'GHP Hears From VIP\'s',
    body: '2013-10-28 20:24:37\', \'During lunch on Friday a dozen or so students from across the district formed a superintendents panel for the Greater Houston Partnership \\\'s committee studying education and industry needs for the coming years. Duncan Klussmann put the event together to help clarify the needs and desires of today\\\'s students to GHP membership.\\n\\nCommittee members Rick Franke (Junior Achievement), Mike Temple (Houston-Galveston Area Council), Richard Meserole (Fluor Daniel), Katrina Kersch (Construction Career Collaborative), Tom Stellman & Caroline Alexander (TIP Strategies), Wanda Bamberg (Aldine ISD Superintendent) and Elaine Barber (GHP) heard from Guthrie students Jonathan Martinez (Architectural Design) Mirna Cardenas (NJROTC Commanding Officer) and Alexis Galindo (Computer Tech & Arch Design) among others talk about how their classes and focus prepares them for college and the career of their choice.\\n\\nLunch was catered by our Culinary Arts students.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-11-08-8404',
    date: '2013-11-08',
    year: 2013,
    headline: 'Film Students Attend Screening Of Chasing Shakespeare',
    body: '2013-11-08 13:49:58\', \' \\n\\nApproximately 90 Guthrie Center Film students were invited to attend the screening of "Chasing Shakespeare" at the Houston Cinema Arts Festival. \\n\\nThe festival includes over 50 narrative and documentary films, an interactive video installation gallery, 16mm screening room, live multimedia performances, panel discussions, Meet the Makers workshops, and free outdoor and student field trip screenings.\\n\\nIn its relatively short history, The Houston Cinema Arts Society has brought notable guest artists, such as Tilda Swinton, Alex Gibney, Guillermo Arriaga, Isabella Rossellini, John Turturro, Shirley MacLaine, Rick Linklater, Ethan Hawke, Fisher Stevens, and Robert Redford among many others, to the Festival.\\n\\nThe Guthrie Center Film Department was invited to attend as part of the educational outreach program.\\n\\nHouston Cinema Arts Society is a nonprofit organization dedicated to presenting innovative films and performances that celebrate the artistic process and enrich Houston\\\'s culture and urban vitality.\\n\\nSubmitted by Patty Nilsson , Digital Film Instructor\\n\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-11-11-8384',
    date: '2013-11-11',
    year: 2013,
    headline: 'Cadet Color Guard Stands By As Veterans March In',
    body: '2013-11-12 03:49:59\', \'Our NJROTC unit provided a color guard for the Spring Forest Middle School Veteran’s Day program on November 11. Under the direction of CDR Jerry Coufal, cadets Jonathan Aguilar, Jose DeLaRosa, Walker Harris and Alex Lefort provided the flag these soldiers fought for during their service to our great nation.\\n\\nYou can catch the cadets on camera as the veterans march in the gym on this Fox26 video.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-11-15-8387',
    date: '2013-11-15',
    year: 2013,
    headline: 'Academies Of Hospitality-Tourism And Finance Induction A Success',
    body: '2013-11-15 18:09:02\', \'Twenty-three students in our Hotel Management program were inducted into the Academy of Hospitality and Tourism along with 137 from Spring Branch high schools into the Academy of Finance at the 2013 Night At The Omni Induction and Fundraising event.\\n\\nThe event outlines the advantages and expectations for new students, as well as the outstanding opportunities for their going above and beyond to complete the required pieces.\\n\\nKeynote Speaker Toby Neugebauer , Co-Founder of Quantum Energy Partners , delivered a hard-hitting and realistic outlook on the economic system, competition for jobs and how automation will continue to displace workers. Tony also discussed his childhood and how he took lessons learned from his parents to create his first investment business all the way to the 7 billion in capital Quantum presently manages.\\n\\nFor more information on the academies, visit their websites at http://cte.springbranchisd.com/aof.html and http://cte.springbranchisd.com/aoht.html \\n \\n \\n\\n \\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-12-17-8691',
    date: '2013-12-17',
    year: 2013,
    headline: 'NJROTC Cadets Participate in Wreaths Across America – Houston',
    body: '2013-12-17 11:19:46\', \'Forty two NJROTC cadets participated in the Wreaths Across America program Saturday December 14. Over 15,000 people attended the ceremony honoring America’s veterans interred in the Houston National Cemetery. The Guthrie Center cadets assisted in the placing of over 40,000 wreaths throughout the cemetery.\\n\\nKHOU Channel 11’s Len Cannon served as master of ceremonies for the event which included a fly-over by the Commemorative Air Force , Houston Wing flying World War II aircraft, a presentation of wreaths by veterans of the Korean War in honor of the 60th anniversary of the Korean War armistice, a performance of Amazing Grace by the St. Thomas Episcopal Pipe Band and a rifle salute by the First Battalion 23 Marines .\\n\\nCadets will return on January 11 to help with the disposal of the wreaths.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2013-12-21-8436',
    date: '2013-12-21',
    year: 2013,
    headline: 'We Wish You The Best',
    body: '2013-12-21 11:42:34\', \'The songs talk about this being the most wonderful time of the year, being home and waking up to a blanket of snow. While the latter probably won\\\'t happen anytime soon, we do hope you experience peace, joy and the love of family and friends.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-01-10-8703',
    date: '2014-01-10',
    year: 2014,
    headline: 'Early Bucket List Honor',
    body: '2014-01-10 15:37:47\', \' Mirna Cardenas , the Commanding Officer NJROTC is the highest ranking cadet responsible for planning and coordinating all activities, administering program requirements for cadets and most importantly providing cadet leadership. A member of the National Honor Society and National Technical Honor Society this Top 10% Northbrook senior has already been accepted at Texas A&M University where she intends to major in biology, pursue a nursing career, possibly even in the Navy. Mirna has received numerous NJROTC awards and according to CDR Coufel she is at the top of a short list of cadets (out of hundreds he has mentored) throughout his education career. One of Mirna’s life goals was to meet a World War II vet which was accomplished back in August at Congressman Poe’s Salute to Veterans Community meeting where she spent time with veteran Bob Cook .\\r\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/01/co-wwII-vet.jpg',
    source: 'web'
  },
  {
    id: '2014-01-13-8857',
    date: '2014-01-13',
    year: 2014,
    headline: 'January 2014 Meeting',
    body: '2014-01-13 15:18:59\', \'Here are our agenda, minutes and handouts from the meeting. Thanks\\n\\n CITagenda01082014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-01-14-8463',
    date: '2014-01-14',
    year: 2014,
    headline: '2014 NJROTC AMI',
    body: '2014-01-14 15:08:09\', \' Tuesday, January 14 th 2014 was proclaimed Spring Branch Navy Junior ROTC Day by Mayor Annise D. Parker in recognition of the unit’s exemplary performance and outstanding contributions to the community. The proclamation was delivered by C ommander Mike Hale , United States Navy, Retired, the Navy Junior ROTC program Area Manager during the ceremonial phase of the unit’s annual Area Manager’s Inspection (AMI). \\n\\nThe purpose of the AMI is to provide a formal opportunity for the cadets to showcase what they have learned through drill performances, personnel inspections and reviews of the supply, material and administrative records that the cadets administer which are required by the program. The cadet Company staff is also required to formally brief the inspecting officer on their goals for the company for this school year as well as their personal goals for life after high school.\\n\\nAccording to Cadet Senior Chief Luie Soto, a junior at Stratford High School, “The inspection of our program was comprehensive and thorough. As the Company Supply Officer I learned a great deal from CDR Hale about how to keep our inventory control system running even better. I especially enjoyed the opportunity to brief my supply department to CDR Hale and the guest inspectors. Overall, the inspection was one of the most outstanding events I have had the opportunity to attend.”\\n\\nLocal area naval science instructors from Kingwood, Mayde Creek, Spring and George Bush High Schools were invited to assist with the inspection. The Spring Branch NJROTC Company is commanded by Cadet Commander Mirna Cardenas, a senior from Northbrook High School who has been accepted to Texas A&M University.\\n\\nUpdated story by CDR Coufel.\\n\\n----------------------------------------------------------------------------------------------\\n\\nWe are honored to be joined by Houston area JROTC leaders as inspectors who are sharing scores of years of military experience and guidance while insp',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-01-21-8695',
    date: '2014-01-21',
    year: 2014,
    headline: 'Course Selection Preview Night: January 23',
    body: '2014-01-21 12:03:43\', \' \\n \\n\\nAll families are invited to the Guthrie Center on Thursday, January 23, 2014 from 5:00 pm to 7:30 pm. Come and discover why many consider the Guthrie Center a hidden gem within Spring Branch ISD. The Guthrie Center will open its doors highlighting its 13 fields of study. Parents will learn about Graphic Design, Digital Filmmaking, 3D Animation, Architectural Design, Commercial Photography, Navy JROTC, Culinary, Internships, Computer Technology, Cosmetology, Criminal Justice, Agricultural Science, and Hotel Management. Students have the advantage of learning from professionals in an exciting environment. Come and see the many options and opportunities available for your sons and daughters at the Guthrie Center.\\n\\n \\n\\n Todos los padres de familia están invitados al Centro Guthrie, el día 23 de enero del 2014, de 5 a 7:30 de la tarde. Venga y descubra por qué muchos consideran el Centro Guthrie una joya escondida en Spring Branch ISD. El Centro Guthrie abrirá sus puertas destacando sus 13 campos de estudio. Los padres de familia aprenderán sobre Diseño Gráfico, Cine Digital, Animación 3D, Arquitectura, Fotografía Comercial, Navy JROTC, Artes Culinarias, Prácticas Profesionales, Tecnología Informática, Cosmetología, Derecho Penal, Agricultura y Hotelería. Los estudiantes tienen la ventaja de aprender directamente de profesionales en un ambiente emocionante. Venga y vea las muchas opciones y oportunidades disponibles para sus hijos e hijas en el Centro Guthrie. \\n\\n \\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-01-29-8833',
    date: '2014-01-29',
    year: 2014,
    headline: 'Farmyard Frolic',
    body: '2014-01-29 17:43:40\', \'After the Children\\\'s Barnyard passed, many schools realized they missed out on a great opportunity and made arrangements to bring a group of their students who were studying farm animals. Thanks to our instructors Christy Capps and Jane Primrose and student teacher Lindsey Nyquist , the were able to come over and turn their studies into reality.\\n\\nMany of our current Ag Science students also pitched in to make it a memorable day. Thanks to all for getting the attention of our future Guthrie and FFA students.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-08-8718',
    date: '2014-02-08',
    year: 2014,
    headline: 'ProStart Culinary Underway',
    body: '2014-02-08 15:50:01\', \'The Culinary Arts Management Team of Xavier Hawthorne , Alice Kim and Chanoa Johnson kicked off the Katy Regionals today at 6:55 AM! Later, our Culinary Team is scheduled to start at 1:30 PM at the Merrill Center in Katy ISD.\\n\\nFollow the events at https://twitter.com/GCProStart \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-09-8790',
    date: '2014-02-09',
    year: 2014,
    headline: 'Culinary Competition Results',
    body: '2014-02-10 03:50:45\', \'Guthrie competed against 27 teams from the Houston area, Austin, College Station and as far north as Longview Texas. Culinary Team members include Zain Ismail, Jaime Belden, Martha Flores, AJ Barrios and Sergio Moreno in the very important alternate role. Every facet of the preparation, sanitation, safety, skill level, teamwork, taste and presentation are watched as they prepare a three course gourmet meal in an hour without running water or electricity. The only source of heat are two butane burners.\\n\\nIn the Management Team competition, Xavier Hawthorne, Alice Kim and Chanoa Johnson presented and produced a solid restaurant concept and design - at 7 AM on Saturday morning. Their innovative approached wowed the judges even though they did not place in the top 3. Their concept board can be viewed on some of the slideshow photos.\\n\\n \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-10-8798',
    date: '2014-02-10',
    year: 2014,
    headline: '36th Annual FFA Show and Sale',
    body: '2014-02-10 16:02:39\', \' \\n Spring Branch FFA Alumni Invites you to the\\n 36th Annual Project Show and Sale\\n 1905 Brittmoore, Houston TX 77043 \\n Friday, February 14th, 2014 \\n 9:00 a.m. – 7:00 p.m. Livestock Shows\\n(Broilers, Rabbits, Goats, Lambs, Swine, Steer, and Heifers) Announce Non-Livestock results \\n\\n Saturday, February 15th, 2014 \\n 11:00 a.m. Buyer’s Registration Begins\\n11:00 a.m. – 1:00 p.m. Silent Auction\\n11:30 a.m. Luncheon (Complimentary to registered buyers)\\n1:00 p.m. Live Auction Begins - Sale will feature student Livestock and Non-Livestock Projects \\n For information contact:\\nJeff Matecki: 832-262-2269 or\\nWade Cline: 713-594-8077 E-mail: kwadecline@comcast.net \\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-15-8998',
    date: '2014-02-15',
    year: 2014,
    headline: 'NJROTC at Ozen Meet',
    body: '2014-02-15 20:42:52\', \'Congratulations Navy JROTC cadets who had a great day on February 15th as the physical fitness, orienteering and academic team won the overall championship at the Ozen NJROTC Physical Training, Orienteering and Academic Meet , hosted by the Ozen NJROTC in Beaumont.\\n\\n Jazmin Jimenez , a junior from Northbrook, placed first in the mile run and the flex arm hang (she set a new record of 1 min, 37 seconds). Joseph Rivas , a freshman from Stratford, placed first in male situps. Bryan Wambui , a senior and also from Stratford, placed first in the mile run. Mirna Cardenas , a senior from Northbrook took second place honors in academics and Blanca DeLeon , a junior from Stratford, took second place in marksmanship. Jonathan Aguilar, a senior from Spring Woods, placed second in male pushups, and Jasmin Hunt , a sophomore from Spring Woods finished second in the broad jump.\\n\\n \\n Photo caption\\nNJROTC physical Fitness Team winning overall championship at Central NJROTC Physical Fitness Meet at Central High School, Beaumont TX.\\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/02/NJROTCozen.jpg',
    source: 'web'
  },
  {
    id: '2014-02-24-8805',
    date: '2014-02-24',
    year: 2014,
    headline: 'Cosmetology Shows Skills At Farouk',
    body: '2014-02-24 18:25:35\', \'Congratulations to Cosmetology students at a very successful SkillsUSA District 8 contest day. Betty Franklin took a number of students to compete and they came away with many successes, including:\\n \\n 1 st Place Cosmetology Skills -- Erika Sanchez \\n 1 st Place Nail Care Skills -- Savannah Hoyt \\n 1 st Place Quiz Bowl Leadership -- Team \\n 1 st Place Action Skills Leadership -- Dulce Mendez \\n 2 nd Place Men’s Haircutting -- Bethany Montoya \\n \\nStudents not only competed, but also had direct contact and mentoring by industry professionals. The competition was held at Farouk with inspiration segments from the staff along with a hair show.\\n\\nSecond year student Erika Sanchez commented, “my experience at 2014 Skills USA was fantastic. One thing that I really liked was the presentation they had at the FAROUK\\\'s old location. Not only was the mini hair show fantastic but the guest speakers that took the day off to talk to students was very inspiring.” Touching, personal stories were shared about beginning in the career and the difficulties they had pursuing. Erika continues “When it was finally time to start the actual competition, the feeling I got in my gut knowing I was about to compete over something I am passionate about made me very proud. Yes, I felt under pressure since I was being watched by professionals while performing my skills on a manikin. It was a nice feeling knowing I was making something out of what I am good at doing.”\\n\\nThere was a consensus that SkillsUSA experience positively impacted students and their outlook on the cosmetology industry. That’s an understatement given the tremendous results from the events.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-25-8820',
    date: '2014-02-25',
    year: 2014,
    headline: 'Touring The Apple',
    body: '2014-02-25 16:44:48\', \' Lorraine Hamilton \\\'s Hotel Management seniors in the Academy of Hospitality and Tourism are finishing their NYC tour with the Academy of Finance students. The stops usually include Wall Street, Times Square, Broadway, the Statue of Liberty, Grand Central Terminal and Fifth Avenue.\\n\\n \\n\\n \\n A group of SBISD students and teachers at the Bethesda Fountain on 72nd Street in Central Park .',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/02/IMG_0348.jpg',
    source: 'web'
  },
  {
    id: '2014-02-25-8825',
    date: '2014-02-25',
    year: 2014,
    headline: '2014 FFA Show and Sale Results',
    body: '2014-02-25 13:34:39\', \'Presenting the results of the 2014 (36th Annual) FFA Show and Sale. Congratulations to our students, and a grateful thank you to their families and others who supported them as they raised their projects.\\n\\nThis Show and Sale was one of the smoothest in memory thanks to our strong and dedicated Alumni Association and advisors Christy Capps and Jane Primrose .\\n \\n \\n \\n \\n NON-LIVESTOCK \\n \\n \\n \\n \\n \\n \\n \\n \\n Exhibitor Name \\n \\n \\n School \\n \\n \\n Grade \\n \\n \\n Division \\n \\n \\n Buyer \\n \\n \\n \\n \\n Paige Fargerson \\n \\n \\n Memorial \\n \\n \\n 12 \\n \\n \\n 2-D Art \\n \\n \\n Loc McNew \\n \\n \\n \\n \\n SBFFA Chapter \\n \\n \\n N/A \\n \\n \\n \\n Chapter Hog \\n \\n \\n Metro National \\n \\n \\n \\n \\n SBFFA Alumni \\n \\n \\n N/A \\n \\n \\n \\n Scholarship Quilt \\n \\n \\n Cox & Perkins & Joe Yarborough \\n \\n \\n \\n \\n Abby Cline \\n \\n \\n Memorial \\n \\n \\n 9 \\n \\n \\n Creative Arts \\n \\n \\n Cline Family \\n \\n \\n \\n \\n Marybel Gomez \\n \\n \\n Spring Woods \\n \\n \\n 12 \\n \\n \\n Creative Arts \\n \\n \\n Cowboy Trucking \\n \\n \\n \\n \\n Shelby Mandy \\n \\n \\n Spring Forest MS \\n \\n \\n 8 \\n \\n \\n Food \\n \\n \\n Metro National \\n \\n \\n \\n \\n Benjamin Johnson \\n \\n \\n Stratford \\n \\n \\n 11 \\n \\n \\n Food \\n \\n \\n Comflo Mechanical \\n \\n \\n \\n \\n Cassidy West \\n \\n \\n Westchester \\n \\n \\n 12 \\n \\n \\n Horticulture \\n \\n \\n Cowboy Trucking \\n \\n \\n \\n \\n Benjamin Johnson \\n \\n \\n Stratford \\n \\n \\n 11 \\n \\n \\n Horticulture \\n \\n \\n Polar Air Inc \\n \\n \\n \\n \\n BROILERS \\n \\n \\n \\n \\n \\n \\n \\n \\n Exhibitor Name \\n \\n \\n School \\n \\n \\n Grade \\n \\n \\n Division \\n \\n \\n Buyer \\n \\n \\n \\n \\n Makenzie Matecki \\n \\n \\n Spring Woods \\n \\n \\n 11 \\n \\n \\n Market Broilers \\n \\n \\n Oppenheimer Foundation \\n \\n \\n \\n \\n Genesis Martinez \\n \\n \\n Spring Woods \\n \\n \\n 12 \\n \\n \\n Market Broilers \\n \\n \\n PBK Architects \\n \\n \\n \\n \\n Jimmy Martinez \\n \\n \\n Spring Woods \\n \\n \\n 10 \\n \\n \\n Market Broilers \\n \\n \\n Wolk Family \\n \\n \\n \\n \\n Blake Pesl \\n \\n \\n Memorial \\n \\n \\n 10 \\n \\n \\n Marke',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-25-8837',
    date: '2014-02-25',
    year: 2014,
    headline: 'Vote Early, Vote Often',
    body: '2014-02-26 01:07:02\', \' Digital Filmmaking has 4 student entries in the TXU Student Film Competition and we need your support to help our students move up the ladder. \\n\\nThe top 10 audience choices (votes) move up the ladder to be judged by professionals. The grand prize is $3,750 for the student AND $3,750 for the school.\\n\\nOnly 1 vote per day. Watch the GC videos and Vote today!\\n\\n https://www.facebook.com/TXUEnergy?sk=app_546596882089090 \\n\\nSimple Math by Keith Chapman \\nA World Without by Matthew Rodgers \\nSun Ride by Ana Rodriguez \\nElectricity: A Mistreated Life Source by Paul Brastrom \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/02/videos.png',
    source: 'web'
  },
  {
    id: '2014-02-25-8849',
    date: '2014-02-25',
    year: 2014,
    headline: 'The Art Of Profiting From Photography',
    body: '2014-02-25 16:15:14\', \'Congratulations to Memorial High School senior Paige Fargerson who walked away with the Grand Champion award in non-livestock at the SBISD FFA Show and Sale earlier this month.\\n\\nPaige has studied for two years under teacher Michael Radler , who praises her for her efforts and results. She plans to take her $1,700 auction money to use as she begins college in the fall.\\n\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-02-26-9053',
    date: '2014-02-26',
    year: 2014,
    headline: 'FFA Day At The Capitol 2014',
    body: '2014-02-26 21:03:19\', \' Spring Branch FFA attended the fifth annual Agricultural Education and Texas FFA Day at the Capitol hosted by the Texas FFA Association and the Vocational Agriculture Teachers Association of Texas (VATAT) on February 25, 2014, in Austin.\\n\\nSpring Branch was one of 51 chosen chapters that comprised 415 FFA members and advisors across Texas who participated in this event in order to learn more about the legislative process, specifically addressing agriculture and agricultural education through workshops and presentations conducted by key public leaders in Texas.\\n\\nMembers enjoyed keynote speeches from Mrs. Barbara Cargill , State Board of Education Chairman, Honorable Tracy O. King, House Agriculture and Livestock Committee Chairman and Honorable Larry Gonzalez, Texas House of Representatives, District 52. Students also participated in workshops facilitated by Chelsey Thomas, Texas Association of Realtors, Zach Brady, Brady & Hamilton LLP, Bryan Daniel, Texas Department of Agriculture and Bryan Berbert , General Counsel for the Lt. Governor’s Officer. The workshop’s primary focus was on the roles of legislators, executive offices and lobbyists, as well as expressed the need for bright, young people in public service.\\n\\n“Day at the Capitol is a great way for our state leaders to see the true impact of agricultural education and the FFA. It also affords our members the opportunity to see first-hand the legislative process, and how they can affect change in their own communities,” explained Texas FFA Leadership Development Coordinator Austin Large.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-03-8999',
    date: '2014-03-03',
    year: 2014,
    headline: 'Navy JROTC Finishes Strong At Rice',
    body: '2014-03-03 20:42:53\', \'Cadets enjoyed a strong outing at the Rice Drill Mee t on Saturday. Overall they finished 4th out of all the participant schools. Congratulations to our hard working, results-producing NJROTC team.\\n \\n 1st - Unarmed Exhibition \\n 1st - Push-ups \\n 2nd - Sit-ups \\n 3rd - Inspection \\n 3rd - Armed Basic \\n \\nThe 28 minute video is a detailed look at the entire meet and how our students compete against their peers and each other.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8855',
    date: '2014-03-13',
    year: 2014,
    headline: 'November 2013 Meeting',
    body: '2014-03-13 13:33:49\', \'Here are our agenda, minutes and handouts from the meeting. Thanks\\n\\n CITagenda-handouts09112013',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8856',
    date: '2014-03-13',
    year: 2014,
    headline: 'December 2013 Meeting',
    body: '2014-03-13 13:35:46\', \' Our meeting was cancelled this month.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8858',
    date: '2014-03-13',
    year: 2014,
    headline: 'February 2014 Meeting',
    body: '2014-03-13 13:44:51\', \'Here are our agenda, minutes and handouts from the meeting. Thanks\\n\\n CITagenda02122014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8859',
    date: '2014-03-13',
    year: 2014,
    headline: 'March 2014 Meeting',
    body: '2014-03-13 13:38:49\', \'Here are our agenda, minutes and handouts from the meeting. Thanks\\n\\n CITagenda03122014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8860',
    date: '2014-03-13',
    year: 2014,
    headline: 'April 2014 Meeting',
    body: '2014-03-13 13:38:17\', \'Our meeting was held on 4/9/2014. Below are the agenda and handouts.\\n\\n \\n\\n CITagenda04092014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-8861',
    date: '2014-03-13',
    year: 2014,
    headline: 'May 2014 Meeting',
    body: '2014-03-13 13:38:07\', \'Thanks for attending our last meeting of the year on May 14, 2014. The agenda and handouts are below.\\n\\n CITagendaMay2014 \\n\\n GC-Tripod2014 \\n\\n Tripod3YRspreads \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/03/tripodHS2014.png',
    source: 'web'
  },
  {
    id: '2014-03-13-9008',
    date: '2014-03-13',
    year: 2014,
    headline: 'Academic Team Soars',
    body: '2014-03-13 17:42:56\', \'The Eagles academic teams competed in the Navy JROTC National Academic Exam competition on Wednesday March 12, 2014. The exam covered the entire Navy JROTC 4 year curriculum.\\n\\nEagle 1, which included senior Alex Lefort and junior Samya Irfan , both from Stratford, Walker Harris , a senior from Memorial, Clinton Dougher, a sophomore from Westchester and Joseph Castelli, a Spring Woods freshman, placed in the 93 percentile nationwide.\\n\\nEagle 2 which included Dawn McCaskil l and Luie Soto, both juniors from Stratford, and seniors Hugo Montejo and Jose DeLaRosa, and junior Chris Grant , all from Spring Woods, placed in the 73 percentile.\\n\\nThese cadets competed against over 1,700 5-person teams from Navy JROTC programs across the nation.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-13-9048',
    date: '2014-03-13',
    year: 2014,
    headline: 'Digital Film Student Earns Statewide Honorable Mention',
    body: '2014-03-13 19:43:33\', \' It was another great year for Guthrie Center\\\'s Digital Filmmaking Department at the state-level of the annual PTA Reflections judging! \\n Student’s who won “Overall Awards of Excellence” at their respective District levels were able to compete with students from all over Texas for in this state-level competition.\\n \\n \\n A big congratulations to Paul Brastrom whose film project competed against other winning projects from all over Texas received an Honorable Mention for his film production “The Journey”, a short film about a young artist that struggles to find his inspiration. \\n \\n Paul will be recognized at an SBISD district awards night on Monday, May 4th at the Altharetta Yeargin Art Museum. \\n \\n Paul is a second-year film student under the instruction of Patty Nilsson . \\n \\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/05/paul.png',
    source: 'web'
  },
  {
    id: '2014-03-25-8877',
    date: '2014-03-25',
    year: 2014,
    headline: 'FFA Blood Drive On Monday 3.31.2014 @ Guthrie',
    body: '2014-03-25 07:59:03\', \'Our FFA chapter will sponsor a Blood Drive with MD Anderson Blood Center on Monday 3.31 from 9 AM to 4 PM.\\n\\nThe drive is dedicated in memory of Kagan Lucas, the younger sister of a fellow FFA chapter member in Katy. The drive was originally planned to help build a blood supply for Kagan who passed away on her eleventh birthday last month after a long illness.\\n\\nFor more information or to sign up to donate, please contact FFA Advisor Jane Primrose at jane.primrose@springbranchisd.com or 979-533-3606.\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-03-25-8883',
    date: '2014-03-25',
    year: 2014,
    headline: 'A Nordic Adventure Awaits',
    body: '2014-03-25 19:44:16\', \' \\n\\nThe Houston-Galveston Stavanger Sister City Society extended an invitation to a group of students from our Culinary Arts and S pring Woods Madrigal Choir to travel to Stavanger, Norway in June. This is the first year a culinary group has been invited to coincide with the World Association of Chefs Societies exhibition. The culinary students will stay three weeks for an internship experience in local culinary establishments and assist with Worldchefs Congress 2014. \\n\\nThe students and teachers are excited to be part of this lifetime memory event while serving as ambassadors from the Spring Branch and the Houston area. Through the generosity of the Houston/Galveston-Stavanger Sister City Society members and Stavanger residents, a lot of the costs were reduced, but there is a long way to go.\\n\\nThe dinner will be held on April 3rd at 6:30 PM in the culinary arts dining area at Guthrie. Tickets are $40 per person.\\n\\n \\n \\n \\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/03/Fund-Dinner-3.png',
    source: 'web'
  },
  {
    id: '2014-03-29-9015',
    date: '2014-03-29',
    year: 2014,
    headline: 'Deep Sea Success',
    body: '2014-03-29 17:58:48\', \'On Saturday March 29, 2014 our Eagles competed at the Magnolia NJROTC Deep Sea Meet and took first place in the 1.5 mile run and academics and placed second in orienteering. Brittany Gonzales , a junior from Spring Woods, took second place in female cross-country and Bryan Wambui took second place in male cross-country.\\n\\nCheck out the video highlights of the events courtesy of CDR Coufal.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-04-01-9051',
    date: '2014-04-01',
    year: 2014,
    headline: 'Blood Drive Successful',
    body: '2014-04-01 20:03:10\', \'Yesterday the Spring Branch FFA Chapter organized and facilitated a blood drive in memory and support of a young girl from Texas. The blood drive, taking place at our own Guthrie Center, collected over 70 donations of blood through the time and effort of over 100 volunteers as well as donors. This means that up to 216 lives can be saved from the success of this one event. Way to go Spring Branch FFA!\\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/04/blood.jpg',
    source: 'web'
  },
  {
    id: '2014-04-05-9026',
    date: '2014-04-05',
    year: 2014,
    headline: 'Spring Branch Eagles Still Fit To Win',
    body: '2014-04-05 18:16:20\', \'The NJROTC Eagles Physical Fitness Team won the Central NJROTC Physical Fitness meet held Saturday 5 April.\\n\\n Bryan Wambui and Jazmin Jimenez won the male and female 1 mile races. Jazmin also placed first in the flex arm hang and second in the 400 meter race. Dawn McCaskill placed second in the 100 meter race, broad jump and pushups. Jonathan Aguilar finished first in pushups and Eduardo Rodriguez , a junior from Westchester, placed third in pull ups.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-04-05-9041',
    date: '2014-04-05',
    year: 2014,
    headline: 'Change Of Pace',
    body: '2014-04-05 19:35:52\', \' After sweating out a major exam, computer Tech students took a brief break Thursday getting away from their PC to play kickball. The students really seem to enjoy the change of pace. \\n\\n \\n\\n \\n\\n \\n\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/05/photo-1.jpg',
    source: 'web'
  },
  {
    id: '2014-05-01-9019',
    date: '2014-05-01',
    year: 2014,
    headline: 'Guthrie Students Earn Awards At Mediafest',
    body: '2014-05-01 18:04:05\', \'Digital Media students from across campus were recognized at the 2014 Digital MediaFest at Westchester Academy Thursday evening.\\n\\nCongratulations to Graphic Design students Matthew Schwarz and Sricharan Challa , Commercial Photography\\\'s Alexus McNeil , and filmmaking student Morgan Santarlasc i. Congratulations to our Guthrie winners and teachers Ella Park, Mike Radler and Patty Nilsson for providing them the opportunity to hone their skills to reach this level of excellence.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-05-9032',
    date: '2014-05-05',
    year: 2014,
    headline: 'NJROTC Brings It For The 9th Year In A Row',
    body: '2014-05-05 18:28:26\', \'For the ninth consecutive year and 16th in the 17 years of its existence, our Navy JROTC unit earned the Distinguished Unit with Academic Honors for this school year. This is determined by overall scores in inspection, meets, community service and other areas. Guthrie is ranked #6 out of 56 in area 10.\\n\\nCongratulations to our cadets, cadet leaders and Naval Science instructors for bringing it home one more time. This designation allows qualified cadets to be nominated to attend one of the three service academies representing the United States Armed Forces.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-06-9023',
    date: '2014-05-06',
    year: 2014,
    headline: 'Filmmaker Finalists in The Greatest Save Competition',
    body: '2014-05-06 18:12:26\', \'Guthrie film students took 5 of the top spots in The Greatest Save Contest.\\n\\nCongratulations to Adam Torres, Winston Gentry, Travis Balleza, Caitlin Makin Adrian Bourliot, Daniel Rayon, Angelica Chavez and Fernando Hernandez.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-10-9021',
    date: '2014-05-10',
    year: 2014,
    headline: 'Valeria vs The Giants',
    body: '2014-05-10 18:11:04\', \'2013 film student graduate Valeria Dominguez accomplished a lot during her time at Guthrie in the program. Besides editing, acting and producing she also had opportunities to work with corporations and interacted with many professionals.\\n\\nThis has all culminated in her landing her first job as a set production assistant on "Lost in the Sun," a feature film being shot in Austin, directed by newcomer Trey Nelson and staring Josh Duhamel.\\n\\nValeria worked four days on the film for about 12-14 hours each day. She said "Working on a set was very hard work but it was such a wonderful experience. When I applied for the job there was only one intern spot and seniors from UT film school also applied, but thanks to my resume I got the job."\\n\\nWe are thrilled with Valeria\\\'s success and are confident she will continue to flourish. Her parting comment to instrutor Patty Nillson was "It really shows how much Guthrie actually prepares you. You have taught me so well."',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-11-9017',
    date: '2014-05-11',
    year: 2014,
    headline: 'FFA Ambassador Appointment Honor',
    body: '2014-05-11 18:00:18\', \'Congratulations to Rachael Fargerson on being selected as a 2014 Texas FFA Foundation Ambassador . Rachael was chosen as someone who has an "agriculture education" and "FFA" story to tell.\\n\\nShe will have an exciting opportunity at the 2014 State Convention to see a behind the scenes look at the largest youth led convention in Texas and serve as the face of FFA for special guests, sponsors and dignitaries.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-13-9010',
    date: '2014-05-13',
    year: 2014,
    headline: 'Digital Film Alum Featured In Chronicle',
    body: '2014-05-13 18:45:46\', \'Former Filmmaking and Stratford HS student Chandler Wild was featured in the Houston Chronicle today recapping his 6,700 plus mile bicycle trek across the USA and Canada to Homer, Alaska. Chandler\\\'s inspiration was the tragic death of his father and the filmmaker\\\'s desire to reflect on his dad\\\'s life, legacy and to name a mountain after him.\\n\\nHe recorded his adventure on film which will be edited and released in the future. Until then, you can view his trailer " Mount Lawrence " on Vimeo and read the article by Ken Hoffman.\\n\\nFilm instructor Patty Nilsson remembers Chandler well, including the tragic events of his father\\\'s death and how horrible it was for Chandler in his senior year. Nilsson went on to say "What an incredible story of survival, I am so proud to have been a bleep on his journey."\\n\\n ChandlerWild',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-16-9090',
    date: '2014-05-16',
    year: 2014,
    headline: 'Designed and Handcrafted by Students',
    body: '2014-05-16 16:49:40\', \'Our Graphic Design students have been practicing designing and silkscreening various items, and have come up with hand-made and student designed greeting cards.\\n\\nEach set of 5 cards and envelopes sells for $7 with proceeds going to the program\\\'s student activity account.\\n\\nThey will be available for a short time through our design students and teacher Ella Park. You can contact Mrs. Park at ella.park@springbranchisd.com or call her at 713.251.1342\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-16-9107',
    date: '2014-05-16',
    year: 2014,
    headline: 'FFA News Flash',
    body: '2014-05-16 21:11:46\', \' Congratulations to Ben Johnson who was named one of ten Ford FFA Leadership Scholars in Texas for 2014. The award recognizes juniors (rising seniors) who met the requirements of the Lone Star Degree and are highly motivated with a deep interest in leadership. Ben is also advancing to State in Senior Prepared Public Speaking (they write and deliver a 6-8 min speech about a current agricultural topic).\\r\\n\\r\\n Katherine Hulbert is one of 12 Texas FFA Courtesy Corps Representatives for the state convention from our area. Corps members will assist fellow members, guests, foundation sponsors and convention staff backstage with awards.\\r\\n\\r\\nOutgoing chapter president Rachel Fargerson advanced to State in Star Chapter Farmer placement (outstanding SAE in production agriculture and most involved in all phases of chapter activities).\\r\\n\\r\\nAlso advancing to State is Marybel Gomez in Landscape Management Proficiency, Cara Croft in Equine Proficiency and Amy Pope in Diversified Livestock Proficiency, Goat Proficiency and Sheep Proficienc y.\\r\\n\\r\\nThis has been a week of positives and accolades for our FFA students and program.\\r\\n\\r\\n',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2013/05/Texasffalogo1.png',
    source: 'web'
  },
  {
    id: '2014-05-21-9109',
    date: '2014-05-21',
    year: 2014,
    headline: 'Law Enforcement Field Day',
    body: '2014-05-21 13:52:29\', \'Students in Law Enforcement 1 & 2 along with Forensic Science peers participated in their final practicum at Guthrie on May 22. All three of Ms. Caballero\\\' s classes interacted and assisted each other in the day-long simulations. Year 2 students were first arrivals and instructed Forensics students at the crime scene, while LE 1 students took roles as active suspects in pat down/arrest techniques.\\n\\nThe process allowed every class to collaborate and see firsthand how the real world positions work side by side for common goals. We appreciate the support of our Spring Branch ISD Police Department who dispatched Officer Wehunt to work with the students and give them a real look at the daily workings of life in law enforcement.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-28-9115',
    date: '2014-05-28',
    year: 2014,
    headline: 'GC Film Festival Winners For 2014',
    body: '2014-05-28 10:28:36\', \'Congratulations to the winning entries in the 2014 Guthrie Film Festival. The public premiere was held Thursday evening before a large crowd in the Guthrie Theater.\\r\\n\\r\\nFilms were categorized under Public Service Announcements (PSA\\\'s), Special Effects, Documentaries, Short Films and Music Videos. The chosen best in PSA\\\'s was a tie with Internet Safety by Adrian Bourliot and Tired Driver by Marcus Alcala, SPECIAL EFFECTS to Trojan Virus by lvanakbar Purwamaska & Ali Jafari, SHORT FILMS went to Barbara by Jeremiah Jordan (who also took Best of Show), Drones by Paul Brastrom won the DOCUMENTARY category, and MUSIC VIDEOS winners were Minor Stab by Anna Rodriguez-Falco and Waiting On The World To Change by Adam Torres.\\r\\n\\r\\nA compilation of the winning videos can be viewed above, and the full one hour and thirty-four minute GC Film Festival show can be viewed here.\\r\\n\\r\\n \\r\\n \\r\\n\\r\\n GUTHRIE CENTER FILM FESTIVAL 2014 \\r\\n\\r\\n PSA\\\'s \\r\\n \\r\\n Internet Safety Adrian Bourliot \\r\\n Sex Trafficking Angelica Chavez \\r\\n Tired Driver Marcus Alcala \\r\\n Play 60 Matt Rogers \\r\\n The Haunting Daniel Rayon \\r\\n Stranger Danger Fernando Hernandez \\r\\n \\r\\n SPECIAL EFFECTS \\r\\n \\r\\n Starbucks Shark Anna Rodriguez-Falco \\r\\n Trojan Virus lvanakbar Purwamaska & Ali Jafari \\r\\n Planet Reptar Michael Cabrera & Oliver Velez & Taylor Meyer \\r\\n \\r\\n DOCUMENTARIES \\r\\n \\r\\n Sway Caitlin Makin & Adrian Bourliot \\r\\n Drones Paul Brastrom \\r\\n The Creatives Connor Jones \\r\\n \\r\\n SHORT FILMS \\r\\n \\r\\n Venus Travis Balleza \\r\\n 48 Fernando Hernandez \\r\\n Masked Binh Nguyen \\r\\n Caught in the Middle Rubianne Wagner \\r\\n Orange Life Michael Cabrera \\r\\n Houston lvanakhbar Purwamask a \\r\\n Missing John James \\r\\n Townes Adam Torres \\r\\n Barbara Jeremiah Jordan BEST IN SHOW \\r\\n \\r\\n MUSIC VIDEOS \\r\\n \\r\\n The Messenger Kade Rhame \\r\\n Tik Tok Darian Hunyh \\r\\n Missing Daniel Meja \\r\\n Please Don\\\'t Go lvanakbar Purwamaska \\r\\n Phonetics Taylor Meyer \\r\\n Fresh Pr',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-05-29-9124',
    date: '2014-05-29',
    year: 2014,
    headline: 'Film Student Takes Silver For Greatest Save PSA',
    body: '2014-05-29 16:49:08\', \'Congratulations to Digital Film student Fernando Hernandez for his second place result in Kindervision\\\'s The Greatest Save High School PSA Competition . Fernando and instructor Patty Nilsson were on hand at the Harris County Sheriff\\\'s headquarters Tuesday to receive his award.\\r\\n\\r\\nThe personal safety program started after a crime involving kidnapping and murder of an 7 year old in California 23 years ago. Kindervision\\\'s goal is to help educate youth of all ages through media and lessons to bring awareness to danger and protect themselves though personal safety training.\\r\\n\\r\\nHarris County Sheriff Adrian Garcia and Greatest Save Board Member Chris McDonough presented Fernando with his plaque and check.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-06-20-9131',
    date: '2014-06-20',
    year: 2014,
    headline: 'Culinary Exchange Students In Norway For Texas Days In Stavanger',
    body: '2014-06-21 01:54:44\', \' \\r\\n\\r\\n \\r\\n\\r\\nThe Houston-Galveston Stavanger Sister City Society extended an invitation to a group of students from Guthrie\\\'s Culinary Arts and Spring Woods High\\\'s Madrigal Choir to travel to Stavanger, Norway . All told, sixty-eight students from the Houston-Galveston area representing Fine Arts, Athletics and Culinary Arts are participating in the event which is partially underwritten by the HGSSCS members, the City of Stavanger, Norway, Energy companies including ConocoPhillips, NOV and others.\\r\\n\\r\\nStudents stay in Norwegian family host homes and will participate with high school students, professionals and other local organizations in Stavanger. Guthrie Chef Erin Land and SWHS Choir Director Scott Houston will accompany their students. Both students and teachers are excited to be part of this lifetime memory event while serving as ambassadors from SBISD and the Houston area.\\r\\n\\r\\nThe entire group is currently in Stavanger with all but culinary students returning June 25. Culinary will stay an additional two weeks to experience an internship in local culinary establishments for one week and assist with Worldchefs Congress 2014 the final week.\\r\\n\\r\\nYou can follow some of the events here and on Guthrie’s Facebook page.\\r\\n\\r\\n \\r\\n\\r\\n Program For Texas Days in Stavanger 18 - 25 June 2014 \\r\\n\\r\\n Wednesday 18 \\r\\n \\r\\n Arrival Sola airport. Transport to meeting place by busses \\r\\n Pick up of the students by their host families \\r\\n Spending time with their host families \\r\\n \\r\\n Thursday 19 \\r\\n \\r\\n Meeting point. Host families deliver and leaders pick up \\r\\n Individual group sessions: Choir, Jazz Band, Vocals, Culinary, Golf, Ballet, Scouts \\r\\n Lundsvågen games and competition for all youth groups \\r\\n Lundsvågen get-together for all youth groups and hosting families \\r\\n Free time with their families or groups. \\r\\n Mayor\\\'s welcome dinner for the Board, leaders and sponsors \\r\\n \\r\\n Friday 20 \\r\\n \\r\\n Host families dr',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/06/photo-2.jpg',
    source: 'web'
  },
  {
    id: '2014-09-06-9281',
    date: '2014-09-06',
    year: 2014,
    headline: 'Back To School Blood Drive',
    body: '2014-09-06 09:35:47\', \'Welcome back to Guthrie for our 42nd year providing a quality education to students in Spring Branch.\\r\\n\\r\\nContinuing our tradition of serving others, our FFA students are starting off the year with a Blood Drive in conjunction with MD Anderson\\\'s Blood Bank on September 16th , honoring our own Ag Science/FFA instructor Jane Primrose . Donors must be 17 years old other restrictions apply. You can sign up by contacting Ms. Primrose at jane.primrose@springbranchisd.com',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-09-17-11521',
    date: '2014-09-17',
    year: 2014,
    headline: 'Live Online Culinary Broadcast',
    body: '2014-09-18 01:04:53\', \' The Texas Restaurant Association, Texas ProStart and the Culinary Institute of America will sponsor a live culinary broadcast from Guthrie. The Wednesday 9/10 event will feature an exciting culinary demonstration, panel discussion w/ industry Chefs and CIA alumni and a Q&A Session live via email and Twitter.\\r\\n\\r\\nOur Film and Video Production students under the direction of Michael Ortiz and Patty Nilsson have worked tireless behind the scenes to find the best camera angles, lighting and all the intricate details to execute a show like this.\\r\\n\\r\\nYou can view the entire show that was produced, directed and shot by Advanced Film students below.\\r\\n\\r\\nhttps://vimeo.com/105889341',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-09-21-13706',
    date: '2014-09-21',
    year: 2014,
    headline: 'September 2014 Meeting',
    body: '2014-09-21 15:47:33\', \'Here are the documents and handouts for/from our meeting.\\r\\n\\r\\nThanks\\r\\n\\r\\n CITagenda09232014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-10-02-11543',
    date: '2014-10-02',
    year: 2014,
    headline: 'Sloppy Rules',
    body: '2014-10-02 17:15:40\', \'Today is the first Sloppy Tot Thursday in the cafe. For $3 you get a boat full of tots covered with sloppy joes, cheddar cheese, onions and jalapeño slices.\\r\\n\\r\\nIt\\\'s worth every cent - everyone here seems to think so today.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-10-17-9632',
    date: '2014-10-17',
    year: 2014,
    headline: 'Opening Our House',
    body: '2014-10-17 21:29:24\', \'Community Tuesday, our biannual open house is upon us. Please come out on Tuesday, October 21st from 5 - 7:30 PM and take a tour of the campus to learn more about what Endorsements we can offer students for graduation and what T24 pathway they can take to earn a technical certification, military service, two year or four year degree.\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-10-17-9637',
    date: '2014-10-17',
    year: 2014,
    headline: 'And The Emmy Goes To',
    body: '2014-10-17 19:50:11\', \' \\r\\n\\r\\nRecently, the National Television Arts and Sciences and the local Lone Star Emmy Chapter announced Emmy Awards recipients for excellence in TV and Broadcast productions.\\r\\n\\r\\nGuthrie Center Films and a number of Guthrie Digital Filmmaking students earned two Emmy Awards for their outstanding work in television production!\\r\\n\\r\\nCongratulations to Guthrie Center Films and to the following students for their excellent work-Award winning productions in television.\\r\\n\\r\\nFor “Works in Progress” a Newscast talk show featuring the excellent programs at The Guthrie Center, the following students earned a Lone Star Emmy Award.\\r\\n Adrian Bourliot, Producer/Director \\r\\n Jose Cervantes, Producer/Asst. Director \\r\\n Travis Balleza, Producer/Writer \\r\\n Caitlin Makin, Producer \\r\\n Paul Brastrom, Producer/Editor \\r\\n Andrew Fowler, Producer/Editor \\r\\n Raekwon Johnson, Producer/Editor \\r\\n Daniel Rayon, Producer \\r\\n Fernando Hernandez, Producer \\r\\n Angelica Chavez, Producer \\r\\nFor “Simple Math”, a Public Service Announcement about the importance of energy conservation, a Lone Star Emmy went to Producer/Director Keith Chapman. \\r\\n\\r\\nNATAS is a professional service organization dedicated to the advancement of the arts and sciences of television and related media and the promotion of creative leadership for artistic, educational and technical achievements within the television industry, best known for the coveted Emmy® Award.\\r\\n\\r\\nThe goal of the Lone Star EMMY Educational Foundation is to support education, encourage professional development and recognize longtime television professionals who have made a significant contribution to the broadcasting industry.\\r\\n\\r\\nThe Lone Star Chapter Regional Student Production Awards for excellence, which promotes best practices to College / University / High School Students, is intended to be an incentive for the pursuit of excellence in television journalism and focus public attention on outstandi',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-10-21-9643',
    date: '2014-10-21',
    year: 2014,
    headline: 'October 2014 Meeting',
    body: '2014-10-21 17:36:18\', \'Here is the agenda and supporting documents for our meeting.\\n\\nThanks\\n\\n CITagenda10212014 \\n\\n 9th-Endorsements-Distribution-102014 \\n\\n Teacher Eval Rubric - NEW \\n\\n teach-evalquestions \\n\\nHB 5 Summit Documents\\n\\n HB 5 Business and Education Workforce Symposium 101714 Chambers \\n\\n Business and Educ Workforce Symposium Peter Beard \\n\\n 2014-10-17 HP Institute NSOIT Skills \\n\\n Pathways-to-Prosperity-for-Americas-youth-080514 \\n\\n Workforce West Houston Joe Arnold',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-10-22-9728',
    date: '2014-10-22',
    year: 2014,
    headline: 'Community Tuesday October 2014',
    body: '2014-10-22 18:36:34\', \'Community Tuesday Open House was a huge success last night. It was great to see so many interested students and family members visit their classes and teachers, and check out the other Guthrie programs available as well. We look forward to seeing you all again in the spring semester.\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-11-21-13714',
    date: '2014-11-21',
    year: 2014,
    headline: 'November 2014 Meeting',
    body: '2014-11-21 17:00:46\', \'Here are the documents and handouts for/from our meeting.\\r\\n\\r\\nThanks\\r\\n\\r\\n CITNovember14',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2014-12-04-12256',
    date: '2014-12-04',
    year: 2014,
    headline: 'NTHS Induction 2014-15',
    body: '2014-12-04 16:03:26\', \'On the evening of Monday, December 8th at 6PM in our theater we will proudly induct the newest members of the Guthrie Center\\\'s chapter of the National Technical Honor Society. These students, Teachers nominated the students for their continued achievement in academics, responsibility, dependability and honesty.\\r\\n\\r\\nThe following NTHS inductees will pledge to uphold the values that put them in the nominee pool and continue during their high school years. The chapter is sponsored by teachers Linda Newnum, Jane Primrose and Ella Park.\\r\\n Syan Barrey\\r\\nKyle Brastrom\\r\\nColette Bucher\\r\\nBrian Carles\\r\\nJoseph Castelli\\r\\nStephanie Cruz\\r\\nRodrigo De La Torre\\r\\nMichelle Dias\\r\\nJohn Eyre\\r\\nDominique Fields\\r\\nAudrey Finck\\r\\nLorenzo Foster II\\r\\nGlenda Frutiz\\r\\nJuana Gamarras\\r\\nTaylor Gee\\r\\nFernando Gomez Osegueda\\r\\nArya Haji Taheri\\r\\nHolton Hockaday\\r\\nJessica Hollis\\r\\nSean Hurst\\r\\nKayla Johnson\\r\\nMadison Lindner\\r\\nJack Liu\\r\\nAlec Miller\\r\\nSydney Miller-Hewett\\r\\nPhilip Murvee\\r\\nAmy Nguyen\\r\\nAlberto Ortiz\\r\\nLucy Palomares\\r\\nMeaghan Pansacola-Rouchon\\r\\nJuliana Parody Sanchez\\r\\nCarlos Reyes Canales\\r\\nBailey Rockwell\\r\\nNina Rotan\\r\\nKyra Rubinstein\\r\\nGraciela Sanchez\\r\\nMailei Schmidt\\r\\nDavid Scott\\r\\nKate Sparenberg\\r\\nHeybi Torres\\r\\nEmma Trahan\\r\\nKayla Valencia\\r\\nNomaris Velez\\r\\nKelley Vo\\r\\nChristopher Wood\\r\\nClayton Wood\\r\\nLuisa Zarzosa \\r\\n CLICK TO DOWNLOAD THE INDUCTION PROGRAM \\r\\n NTHS Induction 2014',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-01-21-13705',
    date: '2015-01-21',
    year: 2015,
    headline: 'January 2015 Meeting',
    body: '2015-01-21 16:54:39\', \'Here are the documents and handouts for/from our meeting.\\r\\n\\r\\nThanks\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-02-05-12641',
    date: '2015-02-05',
    year: 2015,
    headline: 'Show and Sale 37 Starts Now',
    body: '2015-02-06 00:32:17\', \'The 37th Annual FFA Show and Sale is underway at the Ag Science Center at 1905 Brittmoore. The community is welcome to come out to support and encourage our middle and high school students in FFA as they show off their hard work to judges from this part of Texas.\\r\\n\\r\\n 2015 Spring Branch Show & Sale Schedule of Events \\r\\n\\r\\n \\r\\n\\r\\n \\r\\n\\r\\n Thursday, February 5, 2015 \\r\\n \\r\\n 3:30 PM to 6:30 PM Non-Livestock & Livestock check-in \\r\\n 6:35 PM Non-Livestock Judging \\r\\n 7:00 PM Floral Design Contest \\r\\n \\r\\n\\r\\n \\r\\n\\r\\n \\r\\n\\r\\n Friday, February 6, 2015 \\r\\n\\r\\n Livestock Show Details \\r\\n \\r\\n 10:00 AM Broilers and Turkeys \\r\\n 11:00 AM Rabbit Show \\r\\n 2:00 PM Goat Show \\r\\n 3:00 PM Lamb Show \\r\\n 4:00 PM Hog Show \\r\\n Announce Non-Livestock \\r\\n 6:00 PM Heifer Show \\r\\n 7:00 PM Steer Show \\r\\n 6 :00 PM Non-Livestock Closes \\r\\n \\r\\n\\r\\n \\r\\n\\r\\n \\r\\n\\r\\n Saturday, February 7, 2015 \\r\\n \\r\\n 11:00 AM - Buyer Registration & Reception begins \\r\\n 11:00 AM - Silent AuctiOn opens \\r\\n 11:30 AM- Buyers Lunch \\r\\n 1:00 PM- Live Auction begins \\r\\n 2:00 PM- Silent Auction closes \\r\\n \\r\\n\\r\\n \\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-02-07-12889',
    date: '2015-02-07',
    year: 2015,
    headline: 'Show and Sale 37 Results',
    body: '2015-02-07 08:28:38\', \'Here are the unofficial results from the FFA Show\\r\\n\\r\\n LIVESTOCK EVENTS \\r\\n\\r\\n Broilers \\r\\nGrand Champion: Blake Pesl-MHS\\r\\nReserve Champion: Makenzie Matecki-SWHS\\r\\n3rd: Jaime Martinez (Showmanship)- SWHS\\r\\n4th: Cecilia Chinchilla-NHS\\r\\n\\r\\n Turkeys \\r\\nGrand Champion: Jessica Hollis-MHS\\r\\nReserve Champion: Abby Cline-MHS\\r\\n3rd: Samuel Vassar (Showmanship)-MMS\\r\\n4th: Faith Breed-MHS\\r\\n\\r\\n Meat Rabbits \\r\\nGrand Champion: Raul Hererra- WAIS\\r\\nReserve Champion: Alexandra Wolff (Showmanship)-Awty\\r\\n3rd: Nestor Herrera-NHS\\r\\n4th: Blake Pesl-MHS\\r\\n\\r\\n Breeding Rabbit \\r\\nGrand Champion: Raul Hererra-WAIS\\r\\nReserve Champion: Blake Pesl-MHS\\r\\n3rd: Alexandra Wolff-Awty\\r\\n4th: Nestor Herrera-NHS\\r\\n\\r\\n Fur Rabbit \\r\\nGrand Champion: Raul Herrera-WAIS\\r\\nReserve Champion: Blake Pesl-MHS\\r\\n3rd: Nestor Herrera-NHS\\r\\n4th: Alexandra Wolff-Awty\\r\\n\\r\\n Goat \\r\\nGrand Champion: Hailey Wilson-Gonzalez (Showmanship)-SWHS\\r\\nReserve Champion: Sloan Kopelmann-MHS\\r\\n3rd: Amy Nguyen-MHS\\r\\n4th: Gladys Zubieta-SWHS\\r\\n5th: Esteban Gomez-SWHS\\r\\n\\r\\n Lamb \\r\\nGrand Champion: Claudia Salazar-SWHS\\r\\nReserve Champion: Hailey Wilson-Gonzalez-MHS\\r\\n3rd: Makenzie Matecki (Showmanship)-SWHS\\r\\n4th: Nestor Herrera-NHS\\r\\n\\r\\n Pig\\r\\n Grand Champion: Hailey Wilson-Gonzalez (Showmanship)-SWHS\\r\\nReserve Champion: James Martinson-WAIS\\r\\n3rd: Travis Karisch-MHS\\r\\n4th: Jessica Hollis-MHS\\r\\n5th: Alexandra Wolff-Awty\\r\\n6th: Esteban Gomez-SWHS\\r\\n7th: Jack Flowers-Cornerstone\\r\\n8th: Evan Roach-MHS\\r\\n9th: Abby Cline-MHS\\r\\n10th: Katie Edgely-SWHS\\r\\n11th: Faith Breed=MHS\\r\\n12th: Jaqueline Laredo-SWHS\\r\\n13th: Samuel Vassar-MMS\\r\\n14th: Dominique Fields-MHS\\r\\n\\r\\n Heifer \\r\\nGrand Champion: Abby Cline-MHS\\r\\nReserve Champion: Cullen Robertson (Showmanship)-MHS\\r\\n\\r\\n Steer \\r\\nGrand Champion: Cecilia Chinchilla-NHS\\r\\nReserve Champion: Makenzie Matecki (Showmanship)-SWHS\\r\\n3rd: Katie Edgley-SWHS\\r\\n4th: Evan Powell-SHS\\r\\n5th: Cullen Robertson-M',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-02-20-9793',
    date: '2015-02-20',
    year: 2015,
    headline: 'ProStart Culinary Competition',
    body: '2015-02-20 21:10:54\', \'Culinary Chefs Land and Manske have arrived at the Regionals at the Lonestar Convention and Expo in Conroe, Texas. Flanked by Culinary Team members Alex Younger, Lillie Kram, Morris Gonzales, Lorenzo Foster II and Alex Hodges along with Management Team Alice Kim, Gary Thompson and Nick Karolyi, they are going through the check-in process today.\\r\\n\\r\\nThe actual events are Saturday starting around 8:30 for the Management section and 1 PM for the culinary events. See the full schedule below and a link to all the events at the ProStart Regionals.\\r\\n\\r\\nYou can follow the team\\\'s progress on Twitter at https://twitter.com/GCProStart (@GCProStart)\\r\\n Schedule_of_Events_CONROE_-Teams_with_detail \\r\\n Conroe_Program_web \\r\\n \\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-02-21-13704',
    date: '2015-02-21',
    year: 2015,
    headline: 'February 2015 Meeting',
    body: '2015-02-21 16:52:26\', \'Here are the documents and handouts for/from our meeting.\\r\\n\\r\\nThanks\\r\\n\\r\\n CITagenda02242015 \\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-02-24-13014',
    date: '2015-02-24',
    year: 2015,
    headline: 'ProStart Regionals Recap',
    body: '2015-02-24 17:27:09\', \'Both Management and Culinary Teams found success on Saturday as they took 3rd in their respective events and will be going to state in March.\\r\\n\\r\\n Chef Manske\\\' s Management Team of Alice Kim, Gary Thompson and Nick Karolyi went against 11 other schools presenting their restaurant concept verbally, conceptually and were challenged in the critical thinking section of the competition.\\r\\n\\r\\nThe Culinary team, headed by Chef Land and Chef Alford had 22 competing programs as they showed their knife skills and prepared a 3 course meal in 60 minutes. Alex Younger, Lillie Kram, Morris Gonzales, Lorenzo Foster II and Alex Hodges showed poise and grit as they overcame obstacles to rise to the #3 spot.\\r\\n\\r\\nCongratulations to our teams and good luck in Waco in a few weeks.\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-03-21-13702',
    date: '2015-03-21',
    year: 2015,
    headline: 'March 2015 Meeting',
    body: '2015-03-21 15:53:34\', \'This month we spent the meeting time interviewing our assistant principal candidates.\\r\\n\\r\\nThanks\\r\\n\\r\\n CITagendaMarch15',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-03-31-13495',
    date: '2015-03-31',
    year: 2015,
    headline: 'Cadet Academic Teams Fly High',
    body: '2015-03-31 15:20:21\', \'The Navy NJROTC Academic Team participates in local skill meets throughout the year and annually via the National Academic Exam. The exam is composed of current events, NJROTC curriculum and college board entrance questions.\\r\\n\\r\\nThis year CDR Coufal and Master Chief Heuser fielded four teams and two of them finished in the top 9 of 151 Texas teams and nationally in the 97th/93rd percentile of all teams that entered. If you are not sure what that means, please ask one of our academic team members, they can explain it very well.\\r\\n\\r\\nCongratulations to team 1 [ Clinton Dougher (WAIS - JR), Samya Irfan (SHS-SR, Joseph Castelli (SWHS-SO), Jocelyn Fox (SWHS-JR) and Juan Estrada (SHS-FR)] and team 2 [ Francisco Tapia (WAIS-JR), Luis Pineda (MHS-JR), Chris Grant (SWHS-SR), Luie Soto (SHS-SR) & Robert Cross (SHS-JR)] for your results and to the other cadets for taking part in this mental exercise of excellence.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-04-07-13668',
    date: '2015-04-07',
    year: 2015,
    headline: 'Spring Open House 2015',
    body: '2015-04-07 15:22:57\', \'Thanks for coming by to Guthrie\\\'s Spring Open House and Portfolio Show. We are proud to show our guests the results of our students endeavors and success. \\r\\n\\r\\n\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-04-21-13713',
    date: '2015-04-21',
    year: 2015,
    headline: 'April 2015 Meeting',
    body: '2015-04-21 16:01:48\', \'Today’s Campus Improvement Team meeting will be conducted virtually.\\r\\n \\r\\n INFO ONLY: \\r\\n First off, I have no news or update on the assistant principal position. it is out of my hands and I am sure that when upper management can schedule their part we will have a response. \\r\\n \\r\\n One of the documents you will see is an update on certifications at Guthrie. We have many more scheduled this year but early results are still sketchy. One other high school campus is doing quite well with their certifications and have surpassed us in number passing. \\r\\n \\r\\n The document on Parent/Community Involvement Assessment is what I was hoping we could discuss and do together. This is basically our CIT’s opinion of where Guthrie is in the 11 categories listed (the ratings are acceptable, recognized and exemplary). \\r\\n \\r\\n Please take a few minutes and read them over and email back your rating or thoughts in each area. The areas include: \\r\\n \\r\\n \\r\\n Welcoming School Environment \\r\\n Inclusive And Respectful School Community \\r\\n Volunteer Programs And Opportunities \\r\\n Parent Teacher Organization Dna Dna Dna \\r\\n Parent And Family Engagement/Programming \\r\\n School/Home Communication 1 \\r\\n School/Home Communication 2 \\r\\n School/Home Communication 3 \\r\\n School/Home Communication 4 \\r\\n Parent And Community Feedback \\r\\n Partnerships And Good Neighbor Participation \\r\\n \\r\\n \\r\\n Thanks for being flexible in this meeting arrangement. There are many things going on at Guthrie that have most of us tied up and I did not send you a meeting reminder, agenda and do not have the minutes prepared from last time. \\r\\n \\r\\n \\r\\n If everyone can respond by Thursday, I will send out the results. Also if you have anything else to add, please feel free to reply to all. \\r\\n \\r\\n\\r\\n CITagenda04212015 \\r\\n\\r\\n CIT-ParentSurvey-AprMeeting \\r\\n\\r\\n GCcertsapril2015',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-04-28-13876',
    date: '2015-04-28',
    year: 2015,
    headline: 'CTE Scholarship Luncheon 2015',
    body: '2015-04-29 02:37:31\', \'Families and school representatives along with business and industry partners were on hand to celebrate with our 2015 Career and Technical Education Scholarship awardees at a luncheon in Guthrie Culinary.\\r\\n\\r\\n Kyle Mosby from Stratford, Fernando Gomez Osegueda from Guthrie, Lauren Almstedt from Memorial, Alexandra Pierce from Stratford, Haley Groce from Spring Woods, Samya Irfan from Stratford and Ben Johnson from Guthrie\\\'s FFA program enjoyed an excellent meal and had the opportunity to thank their teachers and others who helped them reach their goals.\\r\\n\\r\\nCongratulations to our student recipients and good luck to all of our seniors as you begin the excitement of life after high school.\\r\\n\\r\\nThe event program can be viewed/downloaded below. The outstanding photos from the celebration were taken by Film Practicum student Paul Brastrom.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-05-11-13967',
    date: '2015-05-11',
    year: 2015,
    headline: 'HWCOC Business and Education Partnership Luncheon',
    body: '2015-05-11 09:40:20\', \'Guthrie Center student representatives participated in exhibits at the 25th Annual Business & Education Partnership Luncheon held by the Houston West Chamber of Commerce on May 8.\\r\\n\\r\\nThe yearly event honors Teachers and Outstanding Business Partners of the Year in the West Houston workforce area. Guthrie Internships and SBISD partner Tres Market received the award in the 1-25 employee category for generously giving their time and talent to mentor, provide internships and program support.\\r\\n\\r\\n Alexandra Younger, Alice Kim, Evan Powell, Amy Nguyen, Matthew Bunting, Taylor Gee, Jordyn Folh and Oscar River a were on hand with instructors from Agricultural Science, Architectural Design, 3D Animation, Culinary Arts and Graphic Design.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-05-15-13971',
    date: '2015-05-15',
    year: 2015,
    headline: 'NJROTC Delivers Distinguished Again',
    body: '2015-05-15 10:02:37\', \'Congratulations to our Navy JROTC Unit who again earned honors as a Distinguished Unit and one of the top NJROTC\\\'s out of the 56 that make up Area 10. This is the 10th year in a row they earned it and 17th time in its\\\' eighteen year history in Spring Branch.\\r\\n\\r\\nThis year we have to wait a little longer to find out if the "Academic Honors" add-on was awarded, as it is now determined by the admiral\\\'s staff.\\r\\n\\r\\nOutstanding accomplishment by our cadets, student leaders and CDR Coufal and Master Chief Heuser.\\r\\n\\r\\n \\r\\n\\r\\n \\r\\n\\r\\n \\r\\n\\r\\nOne of the ways this is earned is through serving the community and others. The photo shows our cadets speaking with young students at Thornwood Elementary\\\'s Career Day about their high school program.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-05-18-13961',
    date: '2015-05-18',
    year: 2015,
    headline: 'May 2015 Meeting',
    body: '2015-05-18 23:56:49\', \'Our May meeting will be on May 19th at Guthrie. I hope to see you then.\\r\\n\\r\\nAgenda is below.\\r\\n\\r\\n CITagenda05182015 \\r\\n\\r\\n GraphicSchedule1516 \\r\\n\\r\\n 1516scheduleoptionsTEXT',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-05-20-14042',
    date: '2015-05-20',
    year: 2015,
    headline: 'NTHS End Of Year Celebration',
    body: '2015-05-20 22:33:45\', \'Today was time to celebrate the end of the school year for our National Technical Honor Society students and give the seniors their cords and tassels for graduation. Installation of the officers for 2015-2016 was also conducted.\\r\\n\\r\\nThanks to our student leaders and Ms. Newnum for putting on the event to close out the year. Enjoy the photos below taken by anyone who had the camera handed to them.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-06-09-14136',
    date: '2015-06-09',
    year: 2015,
    headline: 'With Academic Honors...',
    body: '2015-06-09 15:33:33\', \'Congratulations to NJROTC, now officially designated as a Distinguished Unit with Academic Honors based on their rankings in administration, academic performance, military proficiency and host school support.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2015/06/Dist1415.jpg',
    source: 'web'
  },
  {
    id: '2015-07-13-14174',
    date: '2015-07-13',
    year: 2015,
    headline: 'Welcome Katie',
    body: '2015-07-13 19:17:54\', \'We are thrilled to welcome Katie Thompson, the newest member of our Guthrie family as a teacher in the Agricultural Science program.\\r\\n\\r\\nKatie grew up in Sugar Land and earned her Bachelor of Science degree from Sam Houston State University. In addition to her student teaching experience, Katie served girls as a camp counselor and director for six summers in Kerrville.\\r\\n\\r\\nCongratulations Katie, you made a great decision to work in Spring Branch and at Guthrie!\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-08-20-14835',
    date: '2015-08-20',
    year: 2015,
    headline: 'Fixit',
    body: '2015-08-20 11:54:12\', \'Loading…\\\\n\\\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-08-24-14217',
    date: '2015-08-24',
    year: 2015,
    headline: 'Last Minute Additions',
    body: '2015-08-24 06:56:21\', \'Purvis & JonesTracy Purvis has taught Pharmacy Tech on the college level in addition to being a Registered Pharmacy Technician. Tracy teaches Health Science at Memorial HS in addition to PT at Guthrie. Dan Jones was practicing law up to the day he started with Guthrie as a Criminal Justice teacher. Dan taught a few years back in SBISD but he now gets to bring his experience in law to the classroom.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2015/08/DSC04411.jpg',
    source: 'web'
  },
  {
    id: '2015-09-12-14237',
    date: '2015-09-12',
    year: 2015,
    headline: 'Fall FFA Blood Drive',
    body: '2015-09-12 08:02:06\', \'Our FFA students and chapter is holding a blood drive on Tuesday 9.15 in the Student Center. The staff from MD Anderson will be ready to take donors beginning at 8 AM. For more information contact or email Katie Thompson at 713.251.1380.\\r\\n\\r\\nHelp save a life today!',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2015/09/blood2.png',
    source: 'web'
  },
  {
    id: '2015-09-12-14271',
    date: '2015-09-12',
    year: 2015,
    headline: 'Orienteering Teams Unite',
    body: '2015-09-12 18:04:01\', \'Today at the Challenger 7 Park in League City our Navy JROTC Orienteering Team competed with many others on a beautiful muddy, sunny day.\\r\\n\\r\\n25 cadets joined forces with fellow JROTC teams from George Bush and Nimitz High Schools. The strong fellowship among the Naval Science Instructors of the units seemed to permeate to the students as they talked, cooked and broke bread together.\\r\\n\\r\\n CDR Coufal and Master Chief Heuser took cadets Rosa Alvarez, Jasmine Aregullin, Randolph Bahena-Guerrero, Stephanie Benavides, Melvin Bustillo, Steven Caballero, Henri Calix, Alexis Castillo, Sara Crellen, Clinton Dougher, Michael Espino, Jocelyn Fox, Cristian Garza, Azucena Gonzales-Salazar, Gustavo Grimaldo, Jermi Mcmillan, Christi Nguyen, Pedro Quiroz, Juan Reyes-Canales, Carlos Reyes Canales, Jonathan Rodriguez, Corbin Scott, Chase Smesny, Francisco Tapia, and Logan Watson to the competition.\\r\\n\\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-09-21-14354',
    date: '2015-09-21',
    year: 2015,
    headline: 'NJROTC Kicks Off The 2015 Competition Season',
    body: '2015-09-21 13:20:38\', \'The first major drill meet in the NJROTC 2015-16 season was held Saturday at Kingwood High School. Under absolutely flawless weather, our cadets competed with many other JROTC units in drill, unarmed drill, physical training, academics and more. \\n\\n Commander Courfal and cadets Rosa Alvarez, Christopher Barron, Stephanie Benavides, Steven Caballero, Joseph Castelli, Anthony Condon, Sara Crellen, Clinton Dougher, Jocelyn Fox, Azucena Gonzales-Salazar, Priscilla Lopez, Jermi Mcmillan, Justin Mendoza, Austin Muckridge, Madeline O\\\'Rourke, Luis Pineda, George Politis, Pedro Quiroz, Kalia Rodela, Elijah Rodela, Lauren Rodela, Jonathan Rodriguez, Abraham Salazar, Corbin Scott, Francisco Tapia, Valerie Valdez and Logan Watson participated. \\n\\nCongratulations to our cadets for kicking off the year on a positive note. Click below to view some photos and video from the event.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-10-15-14376',
    date: '2015-10-15',
    year: 2015,
    headline: 'Tuesday Is For Our Community',
    body: '2015-10-15 09:48:51\', \'It\\\'s Here!Tuesday evening from 5 to 7:30 PM is a great opportunity for you to tour Guthrie and see the quality elective programming we provide for high school students in SBISD.\\r\\n\\r\\nCommunity Tuesday isn\\\'t a typical open house to meet the teacher. This come-and-go event puts you in the middle of our students project-based learning and in many cases you get to see the them individually or collectively at work collaborating on a project. Of course you still have the chance to meet our teachers!\\r\\n\\r\\nWe hope you will join us at Community Tuesday on October 20th. Bring the family, friends and neighbors and explore the place that is the best part of the school day for so many of our students.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-10-15-14401',
    date: '2015-10-15',
    year: 2015,
    headline: 'NTHS Car Wash Saturday at Guthrie',
    body: '2015-10-15 19:00:08\', \'We Had Cars!',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2015/10/NTHS7.jpg',
    source: 'web'
  },
  {
    id: '2015-11-13-14557',
    date: '2015-11-13',
    year: 2015,
    headline: 'October CIT Meeting',
    body: '2015-11-13 20:03:50\', \' CITagendaOctober',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2015-11-13-14561',
    date: '2015-11-13',
    year: 2015,
    headline: 'November CIT Meeting',
    body: '2015-11-13 20:04:48\', \' CITagendaNovember (2)',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2016-01-24-14590',
    date: '2016-01-24',
    year: 2016,
    headline: '38th Annual FFA Show and Sale',
    body: '2016-01-25 05:03:51\', \'Our FFA Chapter with tremendous support from the Spring Branch FFA Alumni presents the 38th Annual Show and Sale on February 12 & 13, 2016 at our Agricultural Science Center, 1905 Brittmoore.\\r\\n\\r\\nThis is the culmination of months of hard work by students raising livestock and other projects.\\r\\n\\r\\n Friday is the day to watch as guest judges inspect every animal and choose the Grand and Reserve Champions and all the rest in order.\\r\\n\\r\\n Saturday is the auction where our generous buyers meet and eat with the students before the live auction begins at 1:00 PM.\\r\\n\\r\\nFor additional information or to find out what it takes to be a buyer, please call FFA Alumni President Rebecca Robertson at 713.542.6519.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/05/Texasffalogo1.png',
    source: 'web'
  },
  {
    id: '2016-01-24-14629',
    date: '2016-01-24',
    year: 2016,
    headline: 'Funding Your Future Event At SWHS',
    body: '2016-01-24 19:21:06\', \'Come to Spring Woods High School on Saturday 1/30/2016 to learn more about financial planning for college, career and post-secondary training.\\r\\n\\r\\nAll students, parents or family embers interested in learning more are welcome.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/01/fundFuture_blog.png',
    source: 'web'
  },
  {
    id: '2016-01-24-14641',
    date: '2016-01-24',
    year: 2016,
    headline: 'Spring Branch Community Education News',
    body: '2016-01-24 19:42:22\', \'SBISD Community Education offers over 100 courses mostly to individuals who are 16 and over, featuring a variety of classes in Languages, Computers, GED Prep, Sewing, Art, Cake Decorating, Guitar, Interior Decorating and more.\\r\\n\\r\\nThe Dance Program offers different types of dance for 3 year olds to teen-adults as well as adults in Ballet, Tap, Jazz, Hip Hop, Zumba, Yoga, Flamenco, Ballroom, Country Western, and Salsa.\\r\\n\\r\\nDriver’s Education (14 yrs. -17 yrs.) and Motorcycle Safety are also offered.\\r\\n\\r\\nThe best way to see the rest of the courses, schedules and to register is to go to the website at: http://communityed.springbranchisd.com',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/01/Screen-Shot-2016-01-25-at-13.36.57.png',
    source: 'web'
  },
  {
    id: '2016-01-25-14601',
    date: '2016-01-25',
    year: 2016,
    headline: 'The Guthrie Experience: Architectural Design',
    body: '2016-01-25 14:50:47\', \'"We work on a multitude of projects and we get a lot of hands-on experience in my class."Did you know that high school students who take two or more Career and Technical Education (CTE) courses are more focused, perform better in school, and graduate at higher rates?\\n\\nAs a matter of fact, CTE prepares students to be college and career ready by providing a variety of courses that focus on core academic skills, employability skills, and hands-on technical job training.\\n\\nAt The Guthrie Center, a high-tech Career and Technical Education school in Spring Branch ISD, CTE students do just that. They gain experience in a multitude of hands-on courses that provide skills and training in a number of demanding and high-tech career fields.\\n\\nStudents get to experience what it would be like to work in a specific career while they are in high school.\\n\\nMeet Catherine Harrison, a 3rd year Architecture student from Memorial High School. Catherine knew at a young age that she wanted to become an architect but didn’t really know what that career field entailed.\\n\\n“I was always drawing and designing things growing up and my parents always told me that I would probably become an architect some day but I didn’t even know what that was!”\\n\\nNow after 3 years at Guthrie, Catherine is certified in both Revit and AutoCAD. These industry-standard computer programs allow her to create real-world architectural projects including floor plans, elevations, site plans, residential houses, office buildings, 3D views and more.\\n\\n“We work on a multitude of projects and we get a lot of hands-on experience in my class.”\\n\\nCatherine built a portfolio that got her accepted to all of the colleges she applied to and plans to attend The University of Houston School of Architecture next fall.\\n\\nCTE students not only earn industry certifications that set them apart from their counterparts, they build portfolios, gain experience and get to experience first-hand what working in ',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/01/Catherine-Harrison.jpg',
    source: 'web'
  },
  {
    id: '2016-01-25-14618',
    date: '2016-01-25',
    year: 2016,
    headline: 'The Guthrie Experience: Computer Tech',
    body: '2016-01-25 15:46:58\', \'"My Guthrie experience is exactly what I needed in order to achieve my goals in this industry. Certifications are important, but I also need hands-on experience."Meet Adam Ploman, an honor student from SHS. Adam has been at Guthrie for 4 years and after taking Computer Maintenance, Cisco Networking I, Cisco Networking 2, and Computer Technician, Adam earned his certifications in CT Work Keys, A+ Certification, and an EPA 608 Technician Certification.\\r\\n\\r\\nAs a Certified Technician, Adam is qualified to trouble-shoot, repair and install software and hardware on PCs. Adam often gets to work at the district Help Desk alongside SBISD technicians doing repairs and installing operating systems for the entire school district.\\r\\n\\r\\n“My Guthrie experience is exactly what I needed in order to achieve my goals in this industry. Certifications are important, but I also need hands-on experience.”\\r\\n\\r\\nUpon graduation, Adam plans to attend Houston Community College to earn even more industry certifications and will eventually work for a company that has a large technology infrastructure.\\r\\n\\r\\n“I love fixing computers and coming to Guthrie is the best part of my day! I would never get to do this in a traditional high school setting.”\\r\\n\\r\\nWith more than 75 percent of secondary CTE students pursuing postsecondary education shortly after high school, a CTE experience and test-drive in a career choice before committing to an expensive 4-year post secondary plan is a level of preparation that is invaluable.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/01/Adam-Ploman.jpg',
    source: 'web'
  },
  {
    id: '2016-02-01-14665',
    date: '2016-02-01',
    year: 2016,
    headline: 'The Guthrie Experience: Digital Filmmaking',
    body: '2016-02-01 17:37:50\', \'"I’m building my \\r\\nportfolio in my career field and I’m getting to see what this \\r\\nindustry is all about."Meet Sergio Vazquez-Mora a senior from Stratford High School. Sergio is in his second year of Digital Filmmaking and although he is interested in a career in music, he is using his Guthrie experience to earn industry-recognized certifications in both Video Production and Commercial Photography.\\r\\n\\r\\n“I feel like this school has opened doors to new opportunities because it’s not just about being challenged or creative, it’s about doing something real and meaningful. I’m building my portfolio in my career field and I’m getting to see what this industry is all about.”\\r\\n\\r\\nVazquez-Mora just received word that his original musical composition won first place at the district level and is moving on to the state level in the national Reflections competition.\\r\\n\\r\\n“I really think that my experience here has not only given me an opportunity to get recognition but I’m also able to develop my skills and create a versatile body of work to show schools and people in the industry.”\\r\\n\\r\\nThis Spring, Vazquez-Mora plans to earn a certification in both Final Cut Pro (advanced video editing) and another in Adobe Photoshop (image editing and photo manipulation) and will take his portfolio to the Musicians Institute College of Contemporary Music to study for a career in the Entertainment Industry.\\r\\n\\r\\nCTE students not only build portfolios, and gain valuable experience and skills in the classroom but many even get to work in real-world scenarios during their regular school day.\\r\\n\\r\\nStory by Patty Nilsson.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/01/Sergio-Vasquez-Mora.jpg',
    source: 'web'
  },
  {
    id: '2016-02-10-14668',
    date: '2016-02-10',
    year: 2016,
    headline: 'Betty Franklin',
    body: '2016-02-10 17:13:45\', \'Today we say goodbye to former Cosmetology teacher Betty Franklin who passed away last week. Betty served the students in our program from 2000 to 2015, teaching hundreds of students the necessary skills to earn a Texas Cosmetology Operator License, and was instrumental in rejuvenating the program. \\r\\n\\r\\nBetty\\\'s gentle spirit and positive, can-do approach has left a lasting impression on so many Guthrie students.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/08/IMG_0818.jpg',
    source: 'web'
  },
  {
    id: '2016-02-14-14673',
    date: '2016-02-14',
    year: 2016,
    headline: 'FFA Show and Sale A Success',
    body: '2016-02-15 01:41:48\', \'The 38th Annual Spring Branch FFA Show and Sale is over, creating a bittersweet moment for many FFA members as they learn how they performed raising their project, finding out how much it raised for scholarship money for them, and saying goodbye to their animals.\\r\\n\\r\\nCongratulations to our members, their families and supporters who helped them over the last few months, and to our FFA Advisors Bobby Terry and Katie Thompson . A very special thank you to our FFA Alumni Association members and leadership team ( Rebecca Robertson, Vicki Fargerson, Lanie Cline, Diana Kopelman, Faith Edgily and Ellen LeBas ) who worked tirelessly to put a smooth, successful and upbeat Show and Sale. A special thank you to and our Master of Ceremonies Wade Cline for announcing and explaining what was going on to the crowds, and to our Navy JROTC Color Guard for opening the auction with the presentation of our flags.\\r\\n\\r\\nWe want to also thank our Buyers for making the auction a success. It is through their generosity and willingness for many of them to return each year to participate in this time-honored tradition that helps our FFA students start their college careers with a few less payments.\\r\\n\\r\\nWe will post the official results here at a later date, and you can see what was happening as it did Friday at GC twitter: https://twitter.com/guthrie_center',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2016-02-17-14693',
    date: '2016-02-17',
    year: 2016,
    headline: 'Unquestionable Character',
    body: '2016-02-17 14:46:10\', \'This year our Character Without Question Awardee is Alexandra Rangel , a senior from Northbrook High School in our Internship program. Tina Miller nominated Alexandra for her strength in the areas of honesty & integrity, respect and kindness.\\r\\n\\r\\nThe internship class spends a lot of time talking about the traits of successful people in the workplace and what employers want from those they hire. One of the top ones is doing the right thing. According to Ms. Miller, Alexandra "exhibits daily integrity in her internship class... her opinion on professional topics is always aligned with doing the ethical thing rather than the comfortable thing." Since Alexandra is in the health care field, this is crucial dealing with confidential patient information.\\r\\n\\r\\nAlexandra has a natural inclination to give respect to people in all areas her life. Treating others with dignity, respecting their time and putting forth whatever effort it takes is the way she lives her life.\\r\\n\\r\\nWhen someone asks Alexandra for assistance, she will take time to help with anything needed, even if it results in extending her day. This comes from a servant approach which is reflected in both her career goal and her volunteer efforts.\\r\\n\\r\\nThis exceptionally busy young adult manages her time so she can excel in her advanced course load at school, intern at Memorial Hermann Hospital , take college courses during the summer and help others by volunteering at a homeless shelter, organize blood drives, collecting clothes and shoes for those less fortunate and more.\\r\\n\\r\\nWe applaud Alexandra for her selflessness and giving spirit that embodies what we should all strive for at Guthrie. Congratulations Alexandra and to all those nominated.\\r\\n\\r\\nOn Monday, February 22 at 7PM at Northbrook High School, the SBISD Board of Trustees will acknowledge all of the district CWQ awardees.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/02/Alexandra_Rangel_Guthrie.jpg',
    source: 'web'
  },
  {
    id: '2016-02-23-14706',
    date: '2016-02-23',
    year: 2016,
    headline: 'Poster Design Winners',
    body: '2016-02-24 02:24:44\', \' Kira Slentz and Kevin Euliarte are the winners of the Newspring Art Auction poster contest. The seniors are both part of our Graphic Design program, this being Kira\\\'s first year at Guthrie while Kevin has been here throughout high school taking both 3D Animation and now Graphic Design.\\r\\n\\r\\nWith time running out, Kira and Kevin worked as a team bringing their skills together to create the winning poster by the contests deadline and will share the $300 prize winnings.\\r\\n\\r\\nThe poster features the Newspring Student Art Auction to be held 5.19.2016 at the Queensbury Theatre. This event is a great opportunity for SBISD students because 100% of the proceeds goes to the student.\\r\\n\\r\\nSubmitted by Ella Park.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/02/newspring2016-1.jpg',
    source: 'web'
  },
  {
    id: '2016-02-26-14718',
    date: '2016-02-26',
    year: 2016,
    headline: 'ProStart Starts Saturday',
    body: '2016-02-26 18:18:49\', \'Sadie Gilbert\\r\\nLorena Del Toro\\r\\nCharlie ReyesLillie Kram\\r\\nAnayeli Brito\\r\\nLawrence Dipaolo\\r\\nDebanhi Mendoza\\r\\nJoel SilgueroChef Erin Land\\r\\nChef Mel Manske\\r\\nChef Jon AlfordThe culmination of months of planning, practice, hard work, and weekends in the kitchens comes to fruition tomorrow at 8:45 AM for Management Team and 10:15 AM for the Culinary Team at the Lone Star Convention and Expo Center in Conroe.\\r\\n\\r\\nWhile check-in, orientation and learning opportunities for the teams is today, the main events are Saturday. Click the link above for actual times and location of the events at Lone Star.\\r\\n\\r\\nWe wish the best of luck to our teams Management: Sadie Gilbert, Lorena Del Toro, Charlie Reyes and Culinary: Lillie Kram, Anayeli Brito, Lawrence Dipaolo, Debanhi Mendoza and Joel Silguero, and Chefs Land, Manske and Alford for getting our students ready. for prime time.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/02/prostart2016.jpg',
    source: 'web'
  },
  {
    id: '2016-03-22-14762',
    date: '2016-03-22',
    year: 2016,
    headline: 'ProStart Teams On Early At State',
    body: '2016-03-22 10:46:18\', \' ProStart Teams Schedule for Tuesday 3.22.2016 \\r\\n\\r\\n MANAGEMENT \\r\\n \\r\\n Verbal Presentation: 7:30 – 7:40am \\r\\n Judges Q&A: 7:40 – 7:50am \\r\\n Critical Thinking: 7:55 – 8:05am \\r\\n Feedback: 9:30 – 9:40am \\r\\n \\r\\n CULINARY \\r\\n \\r\\n Station Preset: 10am \\r\\n Knife Skills / Poultry Fab: 10:15am \\r\\n Knife Skills / Poultry Fab Critique: 10:30am \\r\\n Production Mise en Place: 10:35am \\r\\n Start Cooking: 10:55am \\r\\n Plate Presentation / Skills Critique: 11:55am \\r\\n Tasting Critique: 12:05pm \\r\\n Menu Critique: 12:12pm \\r\\n Cleanup: 12:17pm \\r\\n Sanitation Critique: 12:37pm \\r\\n Guthrie Out! 12:42pm \\r\\n',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2016-03-31-14788',
    date: '2016-03-31',
    year: 2016,
    headline: 'Open House April 5th',
    body: '2016-03-31 05:59:20\', \'Twice a year we open our doors to families, friends and the community to take a look at the talent and ability level Guthrie students possess. Your chance to see that this semester is Tuesday, April 5th from 5 - 7 PM .\\r\\n\\r\\nEarlier in the day, our junior and senior students will have the opportunity for a meet and greet with local colleges and Spring Branch area employers. It\\\'s a chance for them to firm up their future plans after graduation.\\r\\n\\r\\nPlease join us from 5 - 7 and right after Community Tuesday is over, you can head up Hammerly to Spring Woods High School to hear from Superintendent Scott Muri on SBISD\\\'s Strategic Plan, being a District of Innovation and how we will make education impactful for all students.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2016/03/ct.jpg',
    source: 'web'
  },
  {
    id: '2016-10-04-17382',
    date: '2016-10-04',
    year: 2016,
    headline: 'NJROTC Cadets Take Top Honors',
    body: '2016-10-04 21:49:22\', \' Nearly two dozen NJROTC cadets competed in the 14th Annual Prairie View A&M Navy ROTC Orienteering Skills Meet held on the campus of Prairie View A&M University.\\r\\n\\r\\nUnder beautiful October 1st weather, the cadets led by Cadet Lieutenant Commander Anthony Condon took first place for the second time in the past three years. The meet consisted of basic and advance orienteering, physical fitness and endurance challenges, team building exercises and an academic exam.\\r\\n\\r\\nCongratulations to our outstanding cadets and CDR Coufal and Master Chief Heuser for making this possible.',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-02-11-17447',
    date: '2017-02-11',
    year: 2017,
    headline: 'FFA Show and Sale 38 Results',
    body: '2017-02-11 07:39:33\', \'#SBISDProud of our FFA students as they demonstrate mastery! LIVESTOCK \\n Broilers \\n Grand Champion: Michael Woloson CBE \\n Reserve Champion: Joseph Woloson CBE \\nBenjamin Brady MMS\\nSamuel Vassar SHS\\nIsabella Cesconetto TES\\nAlex Valicek MHS\\nElizabeth Gammill MHS\\nMary Elyse Perez MMS\\nElizabeth Ann Valicek MHS\\nSean Hill MHS\\nKailie Henckel SHS\\nWyatt Storts SHS\\nAva Pluchino Cornerstone\\nLilliana Noyola NHS\\nKate Sparenberg MHS\\nNicholas Howard MMS\\nJulia Pavlick SFMS\\nAmelia Conner School of the Woods\\nLucy Weiss MDE\\n Showmanship: Isabella Cesconetto TES \\n Turkey \\n Grand Champion: Samuel Vassar SHS \\n Reserve Champion: Julia Howard RCE \\nJames Thompson MHS\\nHarrison New MHS\\n Showmanship James Thompson \\n Meat Pen Rabbits \\n Grand Champion: Luke Mica PSE \\n Reserve Champion: Nestor Herrerra SWHS \\nLeila Chang MMS\\nLuca Pavlik CBE\\nKailie Henckel SHS\\nDylan New MHS\\nJosephine Lim MHS\\nLaura Gardner NHS\\nJulia Howard RCE\\n Showmanship: Nestor Herrera \\n Breeding Rabbits \\n Grand Champion: Nestor Herrera SWHS \\n Reserve Champion: Dylan New MHS \\nLuke Mica PSE\\nKailie Henckel SHS\\nJulia Howard RCE\\nLeila Chang MMS\\nJosephine Lim MHS\\nLuca Pavlik CBE\\nOlivia Nugent PSE\\nLaura Garner NHS\\n Fur Rabbits \\n Grand Champion: Luca Pavlik CBE \\n Reserve Champion: Nestor Herrera SWHS \\nDylan New MHS\\nLuke Mica PSE\\nLaura Garner NHS\\nOlivia Nugent PSE\\nJosephine Lim MHS\\nJulia Howard RCE\\nKailie Henckel SHS\\n Goats \\n Grand Champion: Alexander Brittain MHS \\n Reserve Champion: Haven Gray MHS \\nCarter Henckel SHS\\nStephanie Zhang MMS\\nJulia Pavlik SFMS\\nKaitlynn Karisch MHS\\nCasey Brooks SHS\\nReagan Sanders MMS\\nMelanie Alvarez MHS\\n Showmanship: Kaitlyn Karisch \\n Lambs \\n Grand Champion: Nestor Herrerra SWHS \\n Reserve Champion: Jamie O\\\'Quinn SWHS \\nAlex Valicek MHS\\nJoshua Flower Cornerstone\\nCayla Cavazos SHS\\nChristian Cavazos SFMS\\nKate Sparenburg MHS\\n Heifers \\n Grand Champion: Abby Cline MHS \\n Reserve Champion: Presley Kolb MMS \\nAvery Ko',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2014/08/FFA-crest-logo-color.png',
    source: 'web'
  },
  {
    id: '2017-07-15-18461',
    date: '2017-07-15',
    year: 2017,
    headline: 'Our New Team Members',
    body: '2017-07-15 18:58:03\', \'As we approach the fall semester, we are thrilled to introduce the new members of Guthrie (alpha by first name).\\n\\nAnnette Santos will handle attendance and more in the front office. She attended classes here while in high school.\\n\\nDominic (HMI) Monita is our Naval Science Instructor joining us from Sterling High School.\\n\\n \\n\\nEdgar Anguilu is a master electrician and is pioneering our Electrician Apprentice program with TRIO Electric.\\n\\nMary Layton takes over our Pharmacy Technician pathway after spending over a decade as pharmacist with Walgreens.\\n\\nNick Gonzales brings his enthusiasm to our Ag Science/FFA program from industry and as an AST in Royal ISD.Five more reasons why Guthrie will be bigger, better and stronger in 1718!',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-07-26-18460',
    date: '2017-07-26',
    year: 2017,
    headline: 'History Comes Alive',
    body: '2017-07-26 18:58:05\', \'NJROTC Cadets wind down the summer touring TAMU Galveston today and boarding spending time on the submarine and destroyer located at Seawolf Park. It was a great all-hands-on-deck experience for all.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2017/09/DFsVARNVoAA34x3.jpg',
    source: 'web'
  },
  {
    id: '2017-08-07-18459',
    date: '2017-08-07',
    year: 2017,
    headline: 'Guthrie Students Welcome New SBISD Team',
    body: '2017-08-07 18:58:09\', \'Guthrie was one of four main meeting places for the 500+ new SBISD employees making their rounds on a bus tour of district facilities. NJROTC Cadets and FFA Leadership teams were on hand to make the GC portion memorable and interactive.Many of our guests said afterward Guthrie was the best part of their tour!',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2017/09/DGo65nQUAAAMrC6.jpg',
    source: 'web'
  },
  {
    id: '2017-08-25-18458',
    date: '2017-08-25',
    year: 2017,
    headline: 'Record Number of Students Enroll',
    body: '2017-08-25 18:58:16\', \'This year 1,378 students attend Guthrie each day as they travel down the pathway of their choice to a solid head start in a career. We are truly humbled and honored to have a record number of students wanting to be here. Maybe they heard about the almost 400 students last year who earned certifications from their GC classes.We are humbled to have so many want to capture the Guthrie experience during their high school years.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2017/09/Screen-Shot-2017-09-27-at-19.31.53-squashed.jpg',
    source: 'web'
  },
  {
    id: '2017-09-25-18457',
    date: '2017-09-25',
    year: 2017,
    headline: 'FFA Greenhand Camp',
    body: '2017-09-25 18:58:16\', \'Now that we are back from Harvey, our FFA program is busy getting the process started for our students. Last week anyone raising a project attended an information session to learn the rules and details that are part of the FFA package, and tonight our newly joined (and wanting to join) students attended Greenhand Camp. They enjoyed some fun and team building activities while the parents met and discussed their roles in making it a success. A green hand may refer to: a term for an inexperienced crew member, a family of hobbits, a first-year Future Farmers of America (FFA) member.',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2017/09/Screen-Shot-2017-09-27-at-14.25.21-squashed.jpg',
    source: 'web'
  },
  {
    id: '2017-10-05-18564',
    date: '2017-10-05',
    year: 2017,
    headline: 'Save the Date: NJROTC AMI 11.15.2017',
    body: '2017-10-05 16:05:39\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-10-07-18595',
    date: '2017-10-07',
    year: 2017,
    headline: 'Garbage In, Fertilizer Out',
    body: '2017-10-07 15:11:29\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-10-07-18612',
    date: '2017-10-07',
    year: 2017,
    headline: 'NJROTC Eagles Soar at PV A&M Meet',
    body: '2017-10-07 21:38:38\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-10-12-18626',
    date: '2017-10-12',
    year: 2017,
    headline: 'Bend It Like An Electrician',
    body: '2017-10-12 17:09:11\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-10-13-18631',
    date: '2017-10-13',
    year: 2017,
    headline: 'Early Morning Success Talk',
    body: '2017-10-13 05:18:14\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2017-10-13-18643',
    date: '2017-10-13',
    year: 2017,
    headline: 'Not Your Ordinary Classroom',
    body: '2017-10-13 05:58:12\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2018-02-21-18829',
    date: '2018-02-21',
    year: 2018,
    headline: 'Anonymous Reporting',
    body: '2018-02-21 19:36:44\', \' Loading...',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2018-05-16-18903',
    date: '2018-05-16',
    year: 2018,
    headline: 'Certifications Earned',
    body: '2018-05-16 19:39:57\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2018-06-05-18975',
    date: '2018-06-05',
    year: 2018,
    headline: 'Thirteen',
    body: '2018-06-05 18:05:50\', \'',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2020-09-02-19737',
    date: '2020-09-02',
    year: 2020,
    headline: 'Dear Face to Face Students/Families',
    body: '2020-09-02 23:39:18\', \' \\n [UPDATED 1.6.2021] We are very excited to continue F2F instruction at Guthrie. In-Person students attend Guthrie daily during normal class times . \\n \\n\\n \\n Zero Pd: 6:45-7:30 1st Pd: 7:45-9:15 3rd Pd: 11:00-12:30 or 11:15-12:45 4th Pd: 1:15-2:45 \\n \\n\\n \\n Our LearnSBISD plan has many components that have to seamlessly work together so we can have a successful transition. \\n \\n\\n \\n Below are highlights that will be enforced in all schools, including Guthrie. \\n \\n\\n \\n Students and Employees: Temperature checks will be completed daily at the start of our first class period. \\n \\n\\n \\n Face Masks or Coverings are required for all staff and students, ages 3 years old to adults, and must be worn: \\n \\n\\n \\n Properly over the nose and mouth and when physical distancing is not possible or practical. In the classroom, during passing periods and in common spaces (restrooms, walkways, student center, cafe, vending area, front office, bus waiting areas) On the bus at all times, while waiting for the bus and while loading and unloading. Masks and face coverings shall be free of any images, words, political slogans, with the exception of an SBISD school or district logo or college logo. Gaiters are an allowable face covering and must be worn appropriately over the nose and mouth. Masks with one-way exhalation valves or vents are not allowed. \\n \\n\\n \\n Failure to wear a mask is considered a health hazard and may result in disciplinary consequences. \\n \\n\\n \\n Face Shields: According to the Texas Education Agency, full-face shields may be used in place of a mask to protect the eyes, nose, and mouth whenever a mask is not feasible or whenever the education context may benefit from the ability to see an individual’s full face. Teachers may distribute face shields to students, if needed, to facilitate clear communication for in-person instruction. Students would only be allowed to wear them while seated at their desks, during instruction. If the stude',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2021-02-20-20185',
    date: '2021-02-20',
    year: 2021,
    headline: '43rd Spring Branch FFA Show and Sale',
    body: '2021-02-20 14:55:00\', \'A True Team Effort Produces An Outstanding Show Against All Odds\\n\\nThe 43rd Annual Spring Branch FFA Show and Sale wrapped up this past Saturday, merely hours before the Great Arctic Blast of 2021 descended upon the Houston area.\\nThe 2021 event looked quite different than other years due to strict COVID precautions that required spreading out the livestock shows over four evenings to allow for limited capacity due to social distancing practices. On top of that, the 70º Tuesday opening morphed into near-freezing shows and the auction by the weekend.\\nNonetheless, our students did an incredible job readying their projects for the visiting judges under the direction of Agricultural Science Teachers Katie Corona, Peyton Fisher, and Clayton Dumesnil.\\nThis year was a true team collaboration and effort from departments and people across the district. We are very appreciative of our district leaders for approving our modified event after detailed planning with SBISD\\\'s departments of Academics, Safety and Security, and Administration. The SBISD Audio & Video Team helped put together a quality sound and some of our feeds for the live+virtual production.\\nThe annual event is organized and driven by our amazing FFA Alumni Association made up of parents and community members all focused on orchestrating a solid show and auction that maximizes exposure and scholarship funds for the students. They work tirelessly alongside FFA members and our outstanding team of Ag Science teachers all year.\\nBelow you can view the official results and video feed of each show, followed by Saturday\\\'s auction videos. If the auctioneer\\\'s voice sounds familiar to you, that is because it belongs to our former Ag Teacher Nick Gonzales who moved to Belleville after serving our FFA students for a handful of years.\\nThanks to all who supported our journey this year - you all played an important part in creating a successful week. Our special thanks to our superintendent Jennife',
    programs: [],
    imageUrl: null,
    source: 'web'
  },
  {
    id: '2021-08-07-20314',
    date: '2021-08-07',
    year: 2021,
    headline: 'Anavesi Lopez-De Vides',
    body: '2021-08-07 19:10:44\', \'Operations',
    programs: [],
    imageUrl: 'https://guthrie-center.github.io/guthrie-media/uploads/2017/08/g-100.png',
    source: 'web'
  },
  {
    id: '2022-02-24-20727',
    date: '2022-02-24',
    year: 2022,
    headline: '2022 FFA Show and Sale Results',
    body: '2022-02-24 19:25:22\', \'CONGRATULATIONS TO ALL OF OUR STUDENTS. PLEASE CLICK ON EACH SECTION TO VIEW THE RANK ORDER IN EACH CATAGORY.\\\\n\\\\nLAMBS\\\\n\\\\nGrand Champion: Kinsey Jacobs \\nReserve Champion: Macey Medina \\nLightWeight Lamb\\n1: Macey Medina \\n2: Flor Gasca \\n3: Kate Chandler \\n4: Edie Wong CA\\nHeavyWeight Lamb \\n1: Kinsey Jacobs \\n2: Savannah Cornello \\n3: Gadiel Montero \\n4: Alexy Peña \\n5: Jax Bishop \\nJunior Showmanship: Edie Wong CA\\nExperienced Showmanship: Kinsey Jacobs \\\\n\\\\nGOATS\\\\n\\\\nGrand Champion: Brooke Mandery\\nReserve Champion: Gabriella Thurow \\nLightweight Goat\\n1: David Dailey\\n2: Claire Hess \\n3:Presley Kolb \\n4: Lola Pooler-Shaw SFMS\\n5: Rebeca Rivera \\n6: Houston Lovett \\n7: Kayden Nickel \\n8: Camden Hopper \\nHeavyweight Goat\\n1: Brooke Mandery \\n2: Gabriella Thurow \\n3: Aaron Bach \\n4: Avery Kolb \\n5: Wyatt Kolb\\nShowmanship: Aaron Bach \\\\n\\\\nSWINE\\\\n\\\\nGrand Champion: Melia Narazaki-Preston \\nReserve Champion: Kinsey Jacobs \\nLightWeight Swine\\n1: Kinsey Jacobs \\n2: Leila Chang \\n3: Emily Valicek St. Francis\\n4: Brayden Jones \\n5: James Cox \\n6: Allen Brothers \\n7: Chase Nguyen \\n8: Vanessa De La Torre \\n9: Sadie Cox\\nHeavyWeight Swine\\n1: Melia Narazaki-Preston \\n2: Katie Brackin \\n3: Trey Clark \\n4: Mary Elys Perez \\n5: Carolina Doyle \\n6: Brayden Wang \\n7: Bryan Cox \\n8: Daniela Daza \\nRookie Showmanship: Brayden Wang \\nSenior Showmanship: Bryan Cox \\\\n\\\\nNON-LIVESTOCK\\\\n\\\\nOverall High Point Winner\\nSarah Ryan \\nFOOD\\nGrand Champion: Brooke Mandery \\nReserve Champion: Sarah Ryan \\nHORTICULTURE\\nGrand Champion: Benjamin Brady \\nReserve Champion: Emily Valicek\\nAG MECHANICS\\nGrand Champion: Houston Jake Lovett \\nReserve Champion: John August Perez \\nCREATIVE ARTS\\nGrand Champion: Ashley Egger \\nReserve Champion: John Nugent SFMS\\nPHOTOGRAPHY\\nGrand Champion: Vanessa Dela Torre \\nReserve Champion: Claire Bernadac \\\\n\\\\nMEAT PEN RABBITS\\\\n\\\\nGrand Champion: Kayden Nickel \\nReserve Champion: Olivia Nugent \\n3: Jacob Gonzales\\n4: Luke Poto',
    programs: [],
    imageUrl: null,
    source: 'web'
  },

];
