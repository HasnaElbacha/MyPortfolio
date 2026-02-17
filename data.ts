
import { CVData } from './types';

export const portfolioData: CVData = {
  name: "Hasna EL BACHA",
  title: " Data & Software Engineer",
  contact: {
    email: "elbachahasna1@gmail.com",
    phone: "(+212) 6 48 72 06 56",
    location: "Casablanca, Morocco (National Mobility)",
    linkedin: "HASNA EL BACHA"
  },
  summary: "Data & Software Engineer Junior, specialized in Big Data & Cloud Computing, passionate about designing scalable data pipelines and building high-quality full-stack applications. I transform complex data into actionable insights and robust digital solutions using modern technologies such as Python, Spring Boot, React, and cloud platforms. Curious, analytical, and driven by continuous learning, I am committed to delivering reliable and impactful solutions.",
  skills: [
    // Web Development
    { name: "Spring Boot", category: "Web Development" },
    { name: "React.js", category: "Web Development" },
    { name: "Node.js", category: "Web Development" },
    { name: "Next.js", category: "Web Development" },
    { name: "TailwindCSS", category: "Web Development" },
    // Programming
    { name: "Python", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "SQL", category: "Programming" },
    // Data Engineering / ETL
    { name: "BigQuery", category: "Data Engineering" },
    { name: "Snowflake", category: "Data Engineering" },
    { name: "Apache Spark", category: "Data Engineering" },
    { name: "Kafka", category: "Data Engineering" },
    { name: "DBT", category: "Data Engineering" },
    // AI / ML
    { name: "Scikit-learn", category: "AI / ML" },
    { name: "TensorFlow", category: "AI / ML" },
    { name: "PyTorch", category: "AI / ML" },
    { name: "YOLOv9", category: "AI / ML" },
    // Visualization
    { name: "Power BI", category: "Visualization" },
    { name: "Streamlit", category: "Visualization" },
    { name: "Looker", category: "Visualization" },
    // Cloud / DevOps
    { name: "GCP", category: "Cloud / DevOps" },
    { name: "Docker", category: "Cloud / DevOps" },
    { name: "Supabase", category: "Cloud / DevOps" },
    { name: "Gitgub Actions", category: "Cloud / DevOps" },
    { name: "Gitgub", category: "Cloud / DevOps" },
    { name: "Git", category: "Cloud / DevOps" },
  ],
  experience: [
    {
      id: "exp-theodo",
      title: "Software Engineer - End of Studies Internship",
      company: "Theodo Morocco - Casablanca",
      date: "Feb 2025 - Aug 2025",
      description: [
        "Built a mobile app for geolocated field data entry and a web dashboard for map visualization and real-time analytics.",
        "Worked on an e-commerce platform using Spring Boot, Java, and Next.js for backend and frontend integration.",
        "Developed an automated ETL workflow using Python and SQL for multi-source data (Excel & Airtable).",
        "Processed and centralized cleaned data in Snowflake and built Streamlit dashboards for real-time insights.",
        "Applied Lean methodology with sprints and Kanban."
      ],
      techStack: ["Next.js", "React Native", "Supabase", "Spring Boot", "Java", "Python", "SQL", "Snowflake", "Streamlit"],
      type: 'work'
    },
    {
      id: "exp-midatlas",
      title: "Data & Full-Stack Developer - Internship",
      company: "MidAtlas - Canada (Remote)",
      date: "Sept 2025 – Dec 2025",
      description: [
        "Developed Tendly: An automated data platform for web scraping, processing, and visualization.",
        "Built pipelines with Python (Selenium, Playwright) and AI APIs (OpenAI GPT, Claude) to extract product data.",
        "Created COD-Dashboard: Integrated Shopify API and synchronized multi-platform advertising data (TikTok, Snapchat, Google Ads).",
        "Created a web app using ReactJs, TypeScript, Tailwind CSS, and Node.js for KPI dashboards."
      ],
      techStack: ["Python", "Selenium", "OpenAI GPT", "Claude API", "PostgreSQL", "ReactJs", "Node.js", "Shopify API"],
      type: 'work'
    },
    {
      id: "exp-freelance",
      title: "Full-Stack Developer - Freelance Project",
      company: "Healthcare Application",
      date: "Aug 2025 - Sept 2025",
      description: [
        "Developed a healthcare app helping patients connect with nearby nurses.",
        "Built responsive web and mobile interfaces and implemented a RESTful API.",
        "Managed database design and real-time geolocation features for user matching."
      ],
      techStack: ["React.js", "Node.js", "React Native", "PostgreSQL"],
      type: 'work'
    },
    {
      id: "exp-3dsmart",
      title: "AI Engineer - Internship",
      company: "3D SMART FACTORY - Mohammedia",
      date: "Aug 2024 – Sept 2024",
      description: [
        "Enhanced a YOLOv9-based platform for detecting personal protective equipment.",
        "Developed a real-time alert system to ensure workplace safety using Computer Vision."
      ],
      techStack: ["YOLOv9", "Python", "Computer Vision", "Pygame", "Streamlit"],
      type: 'work'
    },
    {
      id: "exp-ccis",
      title: "Full-Stack Developer - Internship",
      company: "CCIS - Essaouira",
      date: "July 2024 – August 2024",
      description: [
        "Expanded an application to automate CCIS services and performed data analysis with graphical visualizations."
      ],
      techStack: ["React.js", "Node.js", "Python", "Excel", "Git", "Github"],
      type: 'work'
    },
    {
      id: "exp-redal",
      title: "Full-Stack Developer - Internship",
      company: "REDAL AGENCY - Rabat",
      date: "July 2023 – August 2023",
      description: [
        "Built a task management application to optimize employee task assignment and tracking."
      ],
      techStack: ["React.js", "PHP", "SQL", "MySQL", "Git", "Github"],
      type: 'work'
    },
    {
      id: "exp-cpm",
      title: "Full-Stack Developer - Internship",
      company: "CPM - Essaouira",
      date: "April 2022 – June 2022",
      description: [
        "Improved a desktop application ensuring full traceability of daily agent server connections.",
        "Enhanced network security and connection monitoring features."
      ],
      techStack: ["Python", "Tkinter", "SQL", "MySQL", "Git", "Github"],
      type: 'work'
    },
    {
      id: "exp-urban",
      title: "Full-Stack Developer - Internship",
      company: "Urban Agency - Essaouira",
      date: "June 2021 – July 2021",
      description: [
        "Designed and created the agency’s official website."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Git", "SQL", "MySQL"],
      type: 'work'
    }
  ],
  projects: [
     {
      id: "proj-taxi",
      title: "DNYC Taxi ETL",
      date: "2024",
      description: ["Implemented an ETL pipeline on BigQuery to transform and model New York City taxi data, with visualization on Looker."],
      techStack: ["BigQuery", "Looker", "SQL"],
      type: 'personal'
    },
    {
      id: "proj-recommend",
      title: "Clothing Style Recommendation System",
      date: "2024",
      description: ["Developed a deep learning-based recommendation system capable of suggesting personalized clothing styles."],
      techStack: ["Python", "Deep Learning", "TensorFlow"],
      type: 'personal'
    },
    {
      id: "proj-chatbot",
      title: "Customer Support Chatbot",
      date: "2024",
      description: ["Built an intelligent NLP-based chatbot to automate responses to user requests."],
      techStack: ["NLP", "Python", "API Integration"],
      type: 'personal'
    },
    {
      id: "proj-protectnet",
      title: "ProtectNet",
      date: "2023",
      description: ["Developed a machine learning-based platform for detecting network intrusions."],
      techStack: ["Machine Learning", "Python", "Network Security"],
      type: 'personal'
    }
  ],
  education: [
    {
      degree: "Engineering Diploma - Computer Engineering Big Data & Cloud Computing",
      institution: "ENSET Mohammedia - Morocco",
      year: "2022 - 2025"
    },
    {
      degree: "University Diploma of Technology - Computer Engineering",
      institution: "EST Essaouira - Morocco",
      year: "2020 - 2022"
    }
  ],
  certifications: [
    { name: "Exploratory Data Analysis", issuer: "IBM", date: "April 2024" },
    { name: "Python for Data Science", issuer: "IBM", date: "Feb 2024" },
    { name: "Certification MongoDB Atlas", issuer: "MongoDB", date: "Dec 2023" },
    { name: "English for IT 1", issuer: "Cisco Networking Academy", date: "Dec 2023" },
    { name: "IT Essentials", issuer: "Cisco Networking Academy", date: "May 2023" },
    { name: "NDG Linux Essentials", issuer: "Cisco Networking Academy", date: "May 2023" },
    { name: "Networking Essentials", issuer: "Cisco Networking Academy", date: "Feb 2023" }
  ],
  languages: [
    { name: "Arabic", level: "Natif" },
    { name: "French", level: "Conversational" },
    { name: "English", level: "Professional proficiency" }
  ],
  softSkills: [
    "Analytical Thinking / Problem Solving", "Attention to Detail", 
    "Teamwork & Collaboration", "Adaptability / Learning Agility"
  ]
};
