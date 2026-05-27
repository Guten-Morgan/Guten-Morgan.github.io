// =======================================================================
//  data.js  —  YOUR CONTENT LIVES HERE
//
//  Edit this file to update every section of your portfolio.
//  The site automatically re-renders when you change values below.
//
//  QUICK GUIDE:
//    • Personal info  →  DATA.name, DATA.bio, DATA.skills, etc.
//    • Add a project  →  copy one block inside DATA.projects and edit it
//    • Add a post     →  copy one block inside DATA.posts and edit it
//    • Update resume  →  edit DATA.resume (education / experience / skills)
//    • Social links   →  DATA.github / DATA.linkedin / DATA.email
//    • Photo          →  drop your image at assets/photo.jpg and see
//                        the comment in index.html to swap in the <img>
//    • PDF resume     →  drop your file at assets/resume.pdf
// =======================================================================

const DATA = {

  // ─── PERSONAL INFO ────────────────────────────────────────────────────
  name:     "Morgan M. Burden",
  title:    "Data Scientist & Business Analyst",
  bio:      "Business analyst with a strong focus on data-driven solutions, currently " +
            "pursuing a Master's in Data Science. Skilled in translating complex business " +
            "needs into actionable insights, collaborating across teams, and delivering " +
            "analytics-backed results. Passionate about leveraging data to drive strategic " +
            "decisions and enhance user experiences.",
  initials: "MB",

  // Two stat bubbles shown in the hero
  stats: [
    { number: "5+",  label: "Years Exp." },
    { number: "MS",  label: "Data Science" }
  ],

  // Skill pills in the hero section
  skills: [
    "Python", "R", "SQL", "Tableau",
    "Data Analytics", "Agile / Scrum", "Stakeholder Communication", "SAP"
  ],

  // Social / contact links  (set to null to hide)
  github:   "https://github.com/Guten-Morgan",
  linkedin: "https://www.linkedin.com/in/morgan-burden-93696883/",
  email:    "morganmburden@gmail.com",


  // ─── PROJECTS ─────────────────────────────────────────────────────────
  //   color    : thumbnail banner background (any CSS color)
  //   featured : adds a gold "Featured" badge
  //   github   : link to repo  (null = hidden)
  //   demo     : link to live demo / Streamlit / Shiny app  (null = hidden)
  //   report   : link to PDF report or write-up  (null = hidden)
  // ──────────────────────────────────────────────────────────────────────
  projects: [
    {
      id:       1,
      title:    "PWHL Player WAR Model",
      desc:     "Developed a Wins Above Replacement (WAR) metric for PWHL players " +
                "using play-by-play data. Analyzed on-ice events to quantify " +
                "individual player contributions across all game situations.",
      tags:     ["Python", "Sports Analytics", "Statistics"],
      github:   "https://github.com/Guten-Morgan/PWHL-WAR",
      demo:     "pwhl.html",
      report:   null,
      color:    "#1B3A8A",
      featured: true
    },
    // ➕  Add more projects here — copy a block above and edit the fields
  ],


  // ─── BLOG / WRITING ───────────────────────────────────────────────────
  //   content : full article HTML shown in the modal when clicked.
  //             Use standard HTML tags: <h3>, <p>, <ul>, <li>, <code>, <pre>
  // ──────────────────────────────────────────────────────────────────────
  posts: [
    {
      id:       1,
      title:    "Building a WAR Model for the PWHL",
      date:     "February 2026",
      excerpt:  "How I approached quantifying player value in women's professional " +
                "hockey using play-by-play data and an adapted WAR framework.",
      tags:     ["Sports Analytics", "Statistics", "Python", "AI"],
      content: `
        <h3>Overview</h3>
        <p>
          The goal was to identify player level Wins Above Replacement to have backward looking player specific analysis. Wins Above Replacement (WAR) is a catch-all statistic designed to summarize
          a player's total contributions to their team in a single number.
          Adapting this framework for the PWHL presented unique challenges due to
          data availability and roster construction differences from the NHL.

          AI-assisted approaches were used to help parse and clean the play-by-play data, as well as to generate initial feature sets for the model. 
          However, all modeling decisions and interpretations were made by me, ensuring that the final WAR metric is grounded in domain knowledge and statistical rigor.
        </p>

        <h3>Data Collection</h3>
        <p>
          I collected play-by-play data from the 2023-2024, 2024–25, and 2025–26 PWHL seasons,
          parsing shot events, blocked shots, time on ice, plus/minus, and goals.
          The raw dataset contained over 50,000 events across 120 games.
        </p>

        <h3>Assumptions</h3>
        <p>
          Goals related directly to wins, about 5 per game. Goalies are of the 
          same talent and caliber across teams.
        </p>

        <h3>Limitations</h3>
        <p>
          Only 2.5 seasons of data, so a lot of noise around individual play. 
          Can only separate so much from team level play. As such Min and MTL 
          players are higher on average than other teams. The only data to test 
          against that isn't being used in the model is team level data, so W/L 
          and point differential. Defense play is nosier since they typically 
          do not have as high of expected goals as offensive players, separating 
          out players into offensive and effusive play without over valuing good 
          two way players is especially difficult.
        </p>

        <h3>Methodology</h3>
        <p>
          The model decomposes WAR into three components: offensive value, defensive
          value, and positional adjustment. Each component is estimated using a
          combination of Expected Goals models and RAPM-style regression.
        </p>
        <ul>
          <li>Expected Goals (xG) model trained on shot location and type</li>
          <li>Regularized Adjusted Plus-Minus for on-ice impact</li>
          <li>Zone-start adjustments to account for deployment context</li>
        </ul>
      `
    }
    // ➕  Add more posts here — copy a block above and edit the fields
  ],


  // ─── RESUME ───────────────────────────────────────────────────────────
  resume: {

    education: [
      {
        degree:  "Master of Science, Data Science",
        school:  "University of St Thomas — St. Paul, MN",
        period:  "In Progress",
        details: "Coursework: Python, SQL & Database Management, Data Warehousing. " +
                 "Focus areas: analytics platforms, data modeling, modern data stacks."
      },
      {
        degree:  "Bachelor of Science, Economics & Global Resource Systems",
        school:  "Iowa State University — Ames, IA",
        period:  "May 2017",
        details: "Courses in Statistics, Economic Development, and Econometrics."
      }
    ],

    experience: [
      {
        title:   "Lead Customer Support Analyst",
        company: "SPS Commerce — Minneapolis, MN",
        period:  "June 2024 – Present",
        bullets: [
          "Act as a cross-functional liaison between Customer Support, Product, and Customer Success teams to ensure successful adoption of Fulfillment feature upgrades and platform enhancements",
          "Introduced support process improvements that reduced team Time to Resolution by 40%, directly improving operational KPIs",
          "Lead the NetX support team through escalations, prioritization, and stakeholder communication, ensuring high-quality delivery and alignment with business goals",
          "Partner with technical teams to ensure product issues are accurately captured, translated into actionable requirements, and resolved efficiently"
        ]
      },
      {
        title:   "HR Analyst",
        company: "Tennant Company — Eden Prairie, MN",
        period:  "Oct 2023 – June 2024",
        bullets: [
          "Managed large-scale data uploads and governance processes within SAP, ensuring data quality and compliance across HR systems",
          "Managed mass data uploads including the annual merit process",
          "Developed HR dashboards and analytics to support business decision-making"
        ]
      },
      {
        title:   "Employee Experience Business Analyst",
        company: "Allina Health — Minneapolis, MN (Contract)",
        period:  "Oct 2022 – Feb 2023",
        bullets: [
          "Planned and led design and implementation of UX/UI improvements that increased access to information and usability for all users",
          "Tested SharePoint upgrades using test scripts and user acceptance testing for more efficient and productive testing",
          "Operated in an Agile workspace defining user stories, requirements, and working through the Azure DevOps backlog"
        ]
      },
      {
        title:   "Associate Business Analyst",
        company: "SPS Commerce — Minneapolis, MN",
        period:  "July 2021 – Oct 2022",
        bullets: [
          "Designed and maintained retail data and EDI products supporting vendor communities, ensuring alignment with retailer requirements and industry standards",
          "Served as the technical lead and primary point of contact for retailer-focused product initiatives, managing communication between engineering, solution architects, and business stakeholders"
        ]
      },
      {
        title:   "Data & Requirements Analyst",
        company: "Cargill — Hopkins, MN",
        period:  "",
        bullets: [
          "Provided data and requirements to build out multi-million-dollar meat processing plants",
          "Analyzed decades of financial data to provide actionable insights"
        ]
      }
    ],

    skills: {
      "Product & Agile":   ["Product Ownership", "Roadmapping", "User Stories & Requirements",
                            "Agile / Scrum", "Stakeholder Communication", "Backlog Management"],
      "Data & Technical":  ["SQL", "Python", "R", "Tableau", "Analytics & Dashboards",
                            "Data Quality & Validation"],
      "Tools & Platforms": ["Azure DevOps", "EDI Platforms & Retail Data", "Salesforce",
                            "SAP", "SharePoint", "Microsoft Office"]
    },

    // Leave as empty [] if you have no publications
    publications: [
      // {
      //   title: "Paper Title",
      //   venue: "Conference or Journal Name",
      //   year:  "2025",
      //   link:  "https://doi.org/..."
      // }
    ]
  }

};
