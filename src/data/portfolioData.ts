import { Project, ExperienceItem, SkillCategory, StatItem, EducationItem } from '../types';
import profilePhotoImg from '../assets/images/regenerated_image_1786272628847.jpg';
import cryptoDashboardImg from '../assets/images/crypto-dashboard.png';
import olaOverviewImg from '../assets/images/ola-overview.png';
import weatherDashboardImg from '../assets/images/weather-dashboard.png';
import mobileSalesDashboardImg from '../assets/images/mobile-sales-dashboard.png';

export const personalInfo = {
  name: 'Zishan Khan',
  title: 'Data Analyst | Business Analyst | Aspiring Software Engineer',
  headline: 'Data Analyst proficient in SQL, Python, Power BI, Tableau & Advanced Excel',
  summary: 'Results-oriented Data Analyst proficient in SQL, Python, Power BI, Tableau, and Advanced Excel. Experienced in constructing ETL pipelines, developing interactive dashboards, and applying machine learning models to solve business challenges. Strong expertise in data quality governance, statistical modeling, and executive stakeholder reporting.',
  shortBio: "Results-oriented Data Analyst & B.Tech CSE (2026) graduate with expertise in SQL, Python, Power BI, and predictive modeling. Experienced in turning raw data into executive business insights and building robust ETL pipelines.",
  email: 'zishankhan9284@gmail.com',
  phone: '+91-9309448080',
  location: 'Nanded, Maharashtra, India',
  github: 'https://github.com/Zishan9309',
  linkedin: 'https://linkedin.com/in/zishan-khan-a310a3259',
  fiverr: 'https://fiverr.com/zishankhan8080',
  languages: ['English', 'Hindi', 'Urdu'],
  freelance: 'Fiverr (Data Analytics Services)',
  interests: ['Data Storytelling', 'Business Intelligence', 'Financial Analytics', 'Generative AI'],
  profilePhoto: profilePhotoImg,
  resumeUrl: '#resume',
};

export const aboutParagraphs = [
  "Results-oriented Data Analyst proficient in SQL, Python, Power BI, Tableau, and Advanced Excel. Experienced in constructing ETL pipelines, developing interactive dashboards, and applying machine learning models to solve complex business challenges.",
  "During my Data Analyst Internship at Infosys Springboard, I engineered end-to-end data pipelines for 50+ cryptocurrency assets, conducted statistical analysis across 50 datasets, and deployed dynamic Power BI portals that slashed decision turnaround time from 5 hours to under 30 minutes.",
  "Currently completing my B.Tech in Computer Science and Engineering (2026) at MGM's College of Engineering with a 7.5/10 CGPA, while delivering freelance analytics, business intelligence dashboards, and SQL solutions for global clients on Fiverr."
];

export const stats: StatItem[] = [
  {
    label: 'Data Records Analyzed',
    value: '100K+',
    subtext: 'Ride & sales transactions',
    iconName: 'FolderGit2'
  },
  {
    label: 'Internship Completed',
    value: 'Infosys',
    subtext: 'Data Analyst Intern (Springboard)',
    iconName: 'Award'
  },
  {
    label: 'Freelance Analyst',
    value: 'Fiverr',
    subtext: 'Global Data Analytics Services',
    iconName: 'Globe'
  },
  {
    label: 'B.Tech CSE',
    value: '7.5 CGPA',
    subtext: 'MGM College of Engineering (2022–2026)',
    iconName: 'GraduationCap'
  }
];

export const certifications = [
  {
    title: 'Data Analyst Certification',
    issuer: 'Infosys Springboard',
    skills: 'SQL, Data Analysis, Visualization, Statistical Modeling',
    date: 'May 2026'
  },
  {
    title: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    skills: 'Data Structures, Data Cleansing, Analytical Programming',
    date: 'Sep 2025'
  },
  {
    title: 'Machine Learning Model Achievement',
    issuer: 'Academic / ML Project',
    skills: 'Achieved 84% accuracy on 7,000+ records using Logistic Regression and Random Forest',
    date: '2025'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Programming',
    category: 'languages',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 'Pandas, NumPy, Scikit-learn', highlighted: true },
      { name: 'SQL', level: 'MySQL, PostgreSQL, Query Optimization', highlighted: true },
      { name: 'JavaScript', level: 'ES6+, Async/Await, Web APIs', highlighted: true },
      { name: 'TypeScript', level: 'Strict Typing, Interfaces', highlighted: true },
      { name: 'DAX', level: 'Advanced Measures & Time Intelligence', highlighted: true },
      { name: 'HTML5 & CSS3', level: 'Responsive Layouts & Semantics', highlighted: true },
      { name: 'REST APIs', level: 'API Ingestion & Webhooks', highlighted: true }
    ]
  },
  {
    title: 'BI & Visualization',
    category: 'analytics',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI', level: 'Executive Dashboards & Drill-downs', highlighted: true },
      { name: 'Tableau', level: 'Visual Analytics & Calculations', highlighted: true },
      { name: 'Advanced Excel', level: 'Pivot Tables, Power Query, XLOOKUP', highlighted: true },
      { name: 'Streamlit', level: 'Interactive Data & ML Apps', highlighted: true },
      { name: 'Plotly', level: 'Dynamic Interactive Visuals' }
    ]
  },
  {
    title: 'Software & Web Development',
    category: 'web',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 'Hooks, SPA, Component Architecture', highlighted: true },
      { name: 'React Native', level: 'Cross-Platform Mobile Apps', highlighted: true },
      { name: 'Node.js', level: 'Backend Services & Event-driven IO', highlighted: true },
      { name: 'Express.js', level: 'RESTful Server & Middleware', highlighted: true },
      { name: 'Tailwind CSS', level: 'Modern Responsive UI Styling', highlighted: true },
      { name: 'MongoDB', level: 'Document Store, Mongoose & Aggregations', highlighted: true },
      { name: 'MySQL', level: 'Views, Stored Procedures, Indexing', highlighted: true },
      { name: 'Data Modeling', level: 'Star & Snowflake Schema', highlighted: true },
      { name: 'ETL Pipelines', level: 'Automated Processing & Cleansing', highlighted: true }
    ]
  },
  {
    title: 'Generative AI, ML & Analytics',
    category: 'ai',
    icon: 'Sparkles',
    skills: [
      { name: 'Generative AI', level: 'LLMs, Prompt Engineering, Fine-tuning', highlighted: true },
      { name: 'RAG Architecture', level: 'Vector Search, Embeddings, Context Augmentation', highlighted: true },
      { name: 'LangChain', level: 'Chains, Agents, Memory & Retrieval', highlighted: true },
      { name: 'Groq AI (Llama-3)', level: 'LLM API Integration & Fast Inference', highlighted: true },
      { name: 'Scikit-learn', level: 'Random Forest, Logistic Regression', highlighted: true },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Statistical Insights & Distribution', highlighted: true },
      { name: 'Statistical Modeling', level: 'Hypothesis Testing & Correlation', highlighted: true },
      { name: 'Predictive Analytics', level: 'Classification & Churn Modeling', highlighted: true },
      { name: 'Root Cause Analysis', level: 'Business Diagnostics & KPI Drivers' }
    ]
  },
  {
    title: 'Tools, DevOps & Practices',
    category: 'tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control & Collaboration', highlighted: true },
      { name: 'VS Code', level: 'Full-Stack IDE & Debugging', highlighted: true },
      { name: 'Jupyter Notebook', level: 'Data Exploration & ML Prototyping', highlighted: true },
      { name: 'Postman', level: 'API Testing & Automation', highlighted: true },
      { name: 'Agile/Scrum', level: 'Iterative Delivery & Sprints' },
      { name: 'Stakeholder Reporting', level: 'Executive KPI Decks & Data Storytelling', highlighted: true }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'ola-ride-analytics',
    title: 'Ola Ride Booking Data Analysis Dashboard',
    category: 'Data Analytics',
    tech: ['SQL', 'Power BI', 'Excel', 'DAX', 'MySQL'],
    image: olaOverviewImg,
    description: 'Processed over 100,000 ride booking records using SQL to evaluate booking success rates, cancellation drivers, revenue trends, and customer metrics across 5 operational zones.',
    fullDetails: 'Constructed Power BI reporting suites with KPI cards, drill-through reports, interactive slicers, and DAX measures to track operational performance for leadership. Identified peak demand windows and regional revenue drivers, uncovering growth opportunities that optimized fleet allocation strategy.',
    keyMetrics: ['100K+ Ride Booking Records Analyzed', '62% Booking Success Rate Identified', '₹3.5 Cr+ Total Revenue Tracked', '5 Operational Zones & Cancellation Drivers'],
    githubUrl: 'https://github.com/Zishan9309/Ola_Ride_Bookings_Analysis',
    demoUrl: 'https://github.com/Zishan9309/Ola_Ride_Bookings_Analysis/blob/main/Screenshots/Overview.png',
    featured: true,
    role: 'Lead Data Analyst'
  },
  {
    id: 'weather-powerbi-dashboard',
    title: 'Weather Forecast Analytics Dashboard',
    category: 'Data Analytics',
    tech: ['Power BI', 'DAX', 'REST API', 'Weather API', 'Power Query'],
    image: weatherDashboardImg,
    description: 'Integrated a live weather REST API directly into Power BI without intermediate database storage, establishing a streamlined BI workflow from API ingestion to production-ready reporting.',
    fullDetails: 'Designed real-time visual interfaces displaying temperature, humidity, precipitation, and wind metrics utilizing dynamic DAX calculations and customized forecast cards. Configured automated scheduled refresh triggers for continuous monitoring and documented end-to-end data modeling workflows for team reproducibility.',
    keyMetrics: ['Direct REST API Ingestion in Power BI', 'Nested JSON M-Language Parsing', 'Dynamic DAX Meteorological Cards', 'Automated Scheduled Refresh Triggers'],
    githubUrl: 'https://github.com/Zishan9309/Weather_Analysis_Dashboard',
    demoUrl: 'https://github.com/Zishan9309/Weather_Analysis_Dashboard/blob/main/Screenshots/Weather%20Dashboard.png',
    featured: true,
    role: 'BI Developer'
  },
  {
    id: 'e-commerce-sales-analytics',
    title: 'E-Commerce Data Analysis and BI Dashboard',
    category: 'Data Analytics',
    tech: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'DAX'],
    image: mobileSalesDashboardImg,
    description: 'Consolidated operational data from multiple sources spanning 90 days using SQL, Python, and Excel, achieving 98 percent data accuracy across analytical layers.',
    fullDetails: 'Audited user behavior patterns through exploratory data analysis, uncovering a 43 percent higher bounce rate on mobile versus desktop that prompted a strategic UX redesign. Built self-service Power BI and Tableau analytics platforms enabling automated KPI tracking, accelerating reporting turnaround by 60 percent across 4 departments.',
    keyMetrics: ['98% Data Accuracy Across Sources', '43% Higher Bounce Rate Discovery', '60% Faster Reporting Turnaround', 'Multi-department Self-Service BI'],
    githubUrl: 'https://github.com/Zishan9309/Mobile_Sales_Analysis',
    demoUrl: 'https://github.com/Zishan9309/Mobile_Sales_Analysis/blob/main/Screenshots/Mobile%20Sale%20Dashboard.png',
    featured: true,
    role: 'Lead Data Analyst'
  },
  {
    id: 'crypto-volatility',
    title: 'Crypto Volatility & Risk Analyzer',
    category: 'Machine Learning & AI',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly', 'CoinGecko API'],
    image: cryptoDashboardImg,
    description: 'Built during Infosys Springboard Virtual Internship 6.0 — a real-time platform that fetches live crypto data, computes volatility, and predicts risk using ML classification models. Features live price tracking via CoinGecko API and an interactive Streamlit dashboard with Plotly visualizations.',
    fullDetails: 'Developed an end-to-end cryptocurrency risk assessment web application. Implemented live API connectors to fetch ticker metrics, engineered volatility indicators (rolling standard deviation, Sharpe ratios), and trained ML classifiers to categorize risk levels. Delivered through an intuitive Streamlit interface.',
    keyMetrics: ['Infosys Virtual Internship 6.0', 'Real-time CoinGecko API pipeline', 'ML Risk Classification Model', 'Interactive Plotly charts'],
    githubUrl: 'https://github.com/Zishan9309/Crypto_Volatility_Zishan_Khan',
    demoUrl: 'https://github.com/Zishan9309/Crypto_Volatility_Zishan_Khan/blob/main/Screenshots/Dashboard.png',
    featured: true,
    role: 'Data Analyst Intern'
  },
  {
    id: 'anganwadi-support-app',
    title: 'Anganwadi Support App',
    category: 'Web & Mobile Apps',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Groq AI (Llama-3)', 'TypeScript'],
    description: 'A full-stack mobile app to digitize and empower Anganwadi Workers across India. Features digital student health-record enrollment, SMS-based vaccination reminders with parent verification, an AI chatbot (Llama-3 via Groq) answering Poshan Abhiyaan & PMMVY queries in Hindi and English, and camera-based cloud image reporting.',
    fullDetails: 'Designed to solve operational bottlenecks for grassroots healthcare and child nutrition workers. Integrates Groq LLM API with fast inference speeds for multilingual assistance, offline-capable database synchronization, and automated SMS reminder alerts for rural parents.',
    keyMetrics: ['Groq Llama-3 AI Integration', 'Hindi & English Chatbot Support', 'SMS Vaccination Reminders', 'Digital Health Record Management'],
    githubUrl: 'https://github.com/Zishan9309/Anganwadi_Support',
    demoUrl: '#',
    featured: true,
    role: 'Full Stack Mobile Developer'
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    category: 'Machine Learning & AI',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    description: 'Built a machine learning classification model to predict customer churn with 84% accuracy, helping identify at-risk customers for retention strategies.',
    fullDetails: 'Analyzed customer demographic and transactional telemetry data. Performed feature engineering, balanced target classes using SMOTE, and evaluated Multiple ML models (Random Forest, Logistic Regression, XGBoost) to achieve an optimal 84% predictive accuracy score on 7,000+ records.',
    keyMetrics: ['84% Predictive Accuracy', '7,000+ Records Analyzed', 'SMOTE Class Balancing', 'Customer Retention Strategy'],
    githubUrl: 'https://github.com/Zishan9309',
    demoUrl: '#',
    featured: false,
    role: 'ML Developer'
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'infosys-internship',
    role: 'Data Analyst Intern',
    company: 'Infosys Springboard',
    period: 'Jan 2026 – Apr 2026',
    type: 'Remote',
    badge: 'Remote',
    description: [
      'Engineered an end-to-end data pipeline to ingest, standardize, and validate live market metrics from a cryptocurrency REST API across 50+ digital assets, accelerating data preparation efficiency by 45 percent.',
      'Executed statistical analysis and predictive modeling using Python, SQL, Pandas, and Scikit-learn across 50 financial datasets, surfacing volatility patterns to cut manual assessment time by 60 percent.',
      'Deployed dynamic Power BI visual portals to deliver real-time risk scores to stakeholders, shrinking insight turnaround cycles from 5 hours to under 30 minutes.'
    ],
    skills: ['Python', 'SQL', 'Power BI', 'Pandas', 'Scikit-learn', 'DAX', 'REST APIs', 'Statistical Modeling']
  },
  {
    id: 'fiverr-freelance',
    role: 'Freelance Data Analyst',
    company: 'Fiverr',
    period: 'Ongoing',
    type: 'Freelance',
    badge: 'Global Clients',
    description: [
      'Deliver custom business dashboards, data cleaning, and statistical analytics for global clients.',
      'Work spans Power BI reports, Excel dynamic workbooks, complex SQL queries, and Python exploratory data analysis (EDA).',
      'Help small and medium businesses translate raw transactional data into clear executive decisions.'
    ],
    skills: ['Power BI', 'SQL', 'DAX', 'Advanced Excel', 'Python', 'Stakeholder Reporting']
  }
];

export const educationInfo: EducationItem = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: "MGM's College of Engineering",
  location: 'Nanded, Maharashtra, India',
  period: '2022 – 2026',
  score: 'CGPA: 7.5 / 10',
  highlights: [
    'Database Management Systems (DBMS), MySQL & Advanced SQL',
    'Data Structures & Algorithms in Python & C++',
    'Statistical Methods, Exploratory Data Analysis & Machine Learning',
    'Software Engineering, System Design & RESTful Architecture'
  ]
};

