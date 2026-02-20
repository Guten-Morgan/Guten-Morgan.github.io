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
  linkedin: null,
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
      github:   "#",
      demo:     "pwhl.html",
      report:   null,
      color:    "#1B3A8A",
      featured: true
    },
    {
      id:       2,
      title:    "Predictive ML Pipeline",
      desc:     "End-to-end machine learning pipeline for binary classification, " +
                "including automated feature engineering, nested cross-validation, " +
                "and hyperparameter tuning via Optuna. Achieved 94% accuracy on the " +
                "holdout set.",
      tags:     ["Python", "Machine Learning", "Scikit-learn"],
      github:   "#",
      demo:     null,
      report:   null,
      color:    "#CFB53B",
      featured: false
    },
    {
      id:       3,
      title:    "Sports Performance Dashboard",
      desc:     "Interactive R Shiny dashboard visualizing player performance trends " +
                "across a full season. Designed for non-technical stakeholders with " +
                "drill-down filtering and exportable summaries.",
      tags:     ["R", "Visualization", "Sports Analytics"],
      github:   "#",
      demo:     null,
      report:   null,
      color:    "#2B52B6",
      featured: false
    }
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
      readTime: "8 min read",
      excerpt:  "How I approached quantifying player value in women's professional " +
                "hockey using play-by-play data and an adapted WAR framework.",
      tags:     ["Sports Analytics", "Statistics", "Python"],
      content: `
        <h3>Overview</h3>
        <p>
          Wins Above Replacement (WAR) is a catch-all statistic designed to summarize
          a player's total contributions to their team in a single number.
          Adapting this framework for the PWHL presented unique challenges due to
          data availability and roster construction differences from the NHL.
        </p>

        <h3>Data Collection</h3>
        <p>
          I collected play-by-play data from the 2024–25 and 2025–26 PWHL seasons,
          parsing shot events, zone entries, face-offs, and penalty data.
          The raw dataset contained over 50,000 events across 120 games.
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

        <h3>Results</h3>
        <p>
          Replace this placeholder with your actual findings, charts, and takeaways.
          You can paste HTML-formatted content or use a markdown-to-HTML converter.
        </p>
      `
    },
    {
      id:       2,
      title:    "Feature Engineering Strategies for Tabular Data",
      date:     "January 2026",
      readTime: "6 min read",
      excerpt:  "A practical guide to creating meaningful features from raw tabular " +
                "data, with examples drawn from real-world projects.",
      tags:     ["Machine Learning", "Python", "Best Practices"],
      content: `
        <h3>Why Feature Engineering Still Matters</h3>
        <p>
          Despite the rise of deep learning approaches that learn representations
          automatically, feature engineering remains the highest-leverage step in
          most tabular ML projects. A thoughtfully engineered feature can outperform
          weeks of model tuning.
        </p>

        <h3>Key Strategies</h3>
        <ul>
          <li><strong>Interaction terms</strong> — multiply or divide correlated features</li>
          <li><strong>Temporal aggregations</strong> — rolling means, lags, trend slopes</li>
          <li><strong>Target encoding</strong> — encode categoricals with leave-one-out stats</li>
          <li><strong>Domain-specific ratios</strong> — e.g. shots-on-net / shots attempted</li>
        </ul>

        <h3>A Practical Example</h3>
        <p>
          Replace this section with a concrete code example or case study from one
          of your projects. Use <code>&lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;</code> blocks
          for code snippets.
        </p>
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
