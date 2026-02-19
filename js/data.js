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
  name:     "Your Name",
  title:    "Data Scientist & Analyst",
  bio:      "I transform complex data into actionable insights through statistical " +
            "analysis, machine learning, and thoughtful visualization. Currently " +
            "pursuing my graduate degree in Data Science, specializing in " +
            "predictive modeling and sports analytics.",
  initials: "YN",          // Shown in the portrait circle until you add a photo

  // Two stat bubbles shown in the hero
  stats: [
    { number: "10+", label: "Projects"  },
    { number: "3+",  label: "Years Exp." }
  ],

  // Skill pills in the hero section
  skills: [
    "Python", "R", "Machine Learning", "SQL",
    "PyTorch", "Scikit-learn", "Statistics", "Data Visualization"
  ],

  // Social / contact links  (set to null to hide)
  github:   "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email:    "your.email@example.com",


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
        school:  "Your University",
        period:  "Expected May 2026",
        details: "Relevant coursework: Machine Learning, Statistical Modeling, " +
                 "Data Visualization, Big Data Systems, Natural Language Processing."
      },
      {
        degree:  "Bachelor of Science, Statistics",
        school:  "Your University",
        period:  "May 2024",
        details: "Graduated with Honors. Minor in Computer Science. " +
                 "Dean's List every semester."
      }
    ],

    experience: [
      {
        title:   "Data Science Intern",
        company: "Company Name",
        period:  "Summer 2025",
        bullets: [
          "Developed predictive models that improved forecast accuracy by 15% over baseline",
          "Built automated ETL pipelines processing 1 M+ records daily using Python and SQL",
          "Presented findings and model recommendations to a senior leadership team of 20+",
          "Collaborated with cross-functional teams to define KPIs and evaluation criteria"
        ]
      },
      {
        title:   "Research Assistant",
        company: "Dept. of Statistics, Your University",
        period:  "2023 – 2024",
        bullets: [
          "Assisted faculty with statistical analyses for two peer-reviewed publications",
          "Wrote and maintained R scripts for data cleaning and Monte Carlo simulations",
          "Contributed to a grant proposal that resulted in $50 K in external funding"
        ]
      }
      // ➕  Add more experience blocks here
    ],

    skills: {
      "Programming":   ["Python", "R", "SQL", "Julia", "Bash"],
      "ML / AI":       ["Scikit-learn", "PyTorch", "TensorFlow", "XGBoost", "LightGBM"],
      "Data Tools":    ["Pandas", "NumPy", "Spark", "dbt", "Airflow"],
      "Visualization": ["Matplotlib", "Seaborn", "Plotly", "ggplot2", "Tableau"],
      "Dev Tools":     ["Git", "Docker", "VS Code", "Jupyter", "Linux / Bash"]
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
