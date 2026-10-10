/**
 * Portfolio Data Configuration - Isha Gupta
 * Minimalist, authentic developer portfolio configuration
 * Synchronized with official Resume details and verified certificate links
 * Text cleaned of unnecessary hyphens (preserved for ROC-AUC)
 */

const PORTFOLIO_DATA = {
    profile: {
        name: "Isha Gupta",
        role: "Computer Science (AI/ML) Student • Data Analyst",
        tagline: "Building machine learning prototypes, exploratory data analysis pipelines, interactive dashboards, and modern web applications.",
        status: {
            available: true,
            text: "Open to AI/ML & Software Engineering Internships"
        },
        shortBio: "Computer Science student specializing in Artificial Intelligence and Machine Learning at JSS Academy of Technical Education, Noida (8.58 CGPA). Hands on experience in Python, machine learning, and data driven application development. Skilled in building ML prototypes, exploratory data analysis, and dashboards, with working knowledge of SQL, Git, GitHub, and RDBMS concepts. Passionate about exploring new technologies and translating research into real world solutions.",
        location: "Noida, India",
        phone: "+91 8303088220",
        email: "gisha825@gmail.com",
        github: "https://github.com/Ishagp",
        linkedin: "https://www.linkedin.com/in/ishagupta25",
        resumeUrl: "assets/resume.html"
    },

    stats: [
        { label: "B.Tech CGPA", value: "8.58", suffix: "/ 10", description: "JSS Academy of Tech Education" },
        { label: "Class 12th (CBSE)", value: "92.80%", suffix: "", description: "L.N. National Sr Secondary School" },
        { label: "Class 10th (CBSE)", value: "93.33%", suffix: "", description: "L.N. National Sr Secondary School" },
        { label: "Volunteering", value: "Akshargyan", suffix: "", description: "Mentoring children since Nov 2023" }
    ],

    about: {
        headline: "",
        paragraphs: [
            "I'm a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at JSS Academy of Technical Education, Noida (2023–2027).",
            "My work focuses on data driven engineering—from cleaning raw datasets to building machine learning models and interactive analytical dashboards. I'm passionate about transforming complex data into meaningful insights and developing solutions that solve real world problems."
        ],
        interests: [
            "Machine Learning & Predictive Modeling",
            "Exploratory Data Analysis (EDA) & Statistical Analysis",
            "Power BI & Business Intelligence Dashboards",
            "Relational Database Systems (SQL & RDBMS)",
            "Component Based Frontend Engineering (React & Vite)",
            "Data Structures, Algorithms & Object Oriented Programming"
        ],
        whatIEnjoy: [
            {
                icon: "brain-circuit",
                title: "Machine Learning & EDA",
                desc: "Conducting thorough exploratory data analysis and training models including Logistic Regression and Random Forest with rigorous ROC-AUC evaluation."
            },
            {
                icon: "bar-chart-3",
                title: "Power BI & Business Intelligence",
                desc: "Designing analytical dashboards with Power Query and custom DAX measures to uncover pricing trends, review patterns, and city wise insights."
            },
            {
                icon: "layout",
                title: "React & Modern Web Engineering",
                desc: "Crafting clean, modular component based applications using React, Vite, and reliable client side state management with localStorage."
            },
            {
                icon: "heart-handshake",
                title: "Community & Education Mentorship",
                desc: "Mentoring children and organizing educational community initiatives as an active volunteer at Akshargyan."
            }
        ]
    },

    skills: [
        {
            category: "Programming Languages",
            icon: "code-2",
            items: [
                { name: "Python", badge: "Primary", iconText: "PY" },
                { name: "C++", badge: "DSA & OOP", iconText: "C++" },
                { name: "C", badge: "Core Systems", iconText: "C" },
                { name: "SQL", badge: "Queries & RDBMS", iconText: "SQL" }
            ]
        },
        {
            category: "Data Science & ML Libraries",
            icon: "sparkles",
            items: [
                { name: "Pandas", badge: "Data Wrangling", iconText: "PD" },
                { name: "NumPy", badge: "Numerical Computing", iconText: "NP" },
                { name: "Scikit Learn", badge: "Machine Learning", iconText: "SKL" },
                { name: "Matplotlib", badge: "Data Visualization", iconText: "MPL" },
                { name: "Seaborn", badge: "Statistical Plots", iconText: "SNS" }
            ]
        },
        {
            category: "Tools & Platforms",
            icon: "wrench",
            items: [
                { name: "Power BI", badge: "Dashboards & DAX", iconText: "PBI" },
                { name: "MS Excel", badge: "Analysis & Modeling", iconText: "XLS" },
                { name: "MySQL", badge: "Relational DB", iconText: "SQL" },
                { name: "Jupyter Notebook", badge: "Research & EDA", iconText: "JUP" },
                { name: "Git & GitHub", badge: "Version Control", iconText: "GIT" }
            ]
        },
        {
            category: "Core Computer Science Concepts",
            icon: "cpu",
            items: [
                { name: "Data Cleaning & EDA", badge: "Data Pipelines", iconText: "EDA" },
                { name: "Data Visualization", badge: "Reports & KPIs", iconText: "VIZ" },
                { name: "Statistical Analysis", badge: "Model Evaluation", iconText: "STAT" },
                { name: "Data Structures & Algorithms", badge: "Problem Solving", iconText: "DSA" },
                { name: "DBMS & Operating Systems", badge: "Core CS", iconText: "CS" },
                { name: "Computer Networks & OOP", badge: "Software Architecture", iconText: "OOP" }
            ]
        },
        {
            category: "Web & Deployment",
            icon: "globe",
            items: [
                { name: "React.js", badge: "Component UI", iconText: "RCT" },
                { name: "Vite", badge: "Fast Bundler", iconText: "VITE" },
                { name: "HTML5 & CSS3", badge: "Responsive Web", iconText: "WEB" },
                { name: "Streamlit", badge: "ML Web Apps", iconText: "ST" },
                { name: "LocalStorage & State", badge: "Client State", iconText: "JS" }
            ]
        }
    ],

    projects: [
        {
            id: "heart-disease-prediction",
            title: "Heart Disease Prediction App",
            subtitle: "Machine Learning Web Application with Real Time Risk Diagnostics",
            category: "ml",
            categoryLabel: "Machine Learning",
            featured: true,
            badge: "88% Accuracy • 0.94 ROC-AUC",
            problem: "Healthcare practitioners require accurate predictive tools to identify cardiovascular risks early from multi dimensional patient biometric indicators.",
            solution: "Performed data cleaning and exploratory data analysis on a clinical healthcare dataset. Trained models including Logistic Regression and Random Forest, achieving 88% accuracy and 0.94 ROC-AUC score. Isolated key indicators such as maximum heart rate, chest pain type, and number of major vessels impacting predictions. Deployed the application using Streamlit for real time user interaction.",
            technologies: ["Python", "Scikit Learn", "Pandas", "NumPy", "Streamlit", "Logistic Regression", "Random Forest", "EDA"],
            metrics: [
                { label: "Accuracy", val: "88%" },
                { label: "ROC-AUC Score", val: "0.94" },
                { label: "Deployment", val: "Streamlit" }
            ],
            features: [
                "Performed data cleaning and exploratory data analysis on healthcare dataset",
                "Trained models including Logistic Regression and Random Forest achieving 88% accuracy and 0.94 ROC-AUC score",
                "Identified key health indicators such as maximum heart rate, chest pain type, and number of vessels impacting predictions",
                "Deployed the model using Streamlit for real time user interaction"
            ],
            githubUrl: "https://github.com/Ishagp",
            demoUrl: "https://heart-disease-prediction-rqlxvdos6v4ajygh2mgyfn.streamlit.app/",
            caseStudyModalId: "heart-disease-prediction"
        },
        {
            id: "airbnb-analytics-dashboard",
            title: "Airbnb Analytics Dashboard",
            subtitle: "Interactive Power BI Dashboard with DAX & Power Query",
            category: "data",
            categoryLabel: "Data & BI",
            featured: true,
            badge: "Power BI & DAX",
            problem: "Short term rental platforms generate complex multi city listings where analysts need clear visibility into pricing trends, host trust, and review seasonality.",
            solution: "Built an interactive Power BI dashboard to analyze Airbnb listings, hosts, reviews, pricing trends, and city wise performance. Performed data cleaning and transformation using Power Query, and authored custom DAX calculations to generate KPIs, visual reports, and business insights. Evaluated market share, ratings, review trends, seasonality, and host trust metrics.",
            technologies: ["Power BI", "DAX", "Power Query", "MS Excel", "Data Visualization", "Data Modeling"],
            metrics: [
                { label: "Transformation", val: "Power Query" },
                { label: "Calculations", val: "Custom DAX" },
                { label: "Scope", val: "City Wise" }
            ],
            features: [
                "Built an interactive Power BI dashboard to analyze Airbnb listings, hosts, reviews, pricing trends, and city wise performance",
                "Performed data cleaning and transformation using Power Query and created KPIs, visual reports, and business insights using DAX",
                "Analyzed market share, ratings, review trends, seasonality, and host trust metrics to support data driven decision making"
            ],
            githubUrl: "https://github.com/Ishagp/Airbnb-PowerBI-Dashboard",
            demoUrl: "https://github.com/Ishagp/Airbnb-PowerBI-Dashboard",
            caseStudyModalId: "airbnb-analytics-dashboard"
        },
        {
            id: "habit-tracker-app",
            title: "Habit Tracker App",
            subtitle: "Responsive Component Based Web Application using React & Vite",
            category: "web",
            categoryLabel: "Web Development",
            featured: true,
            badge: "React & Vite",
            problem: "Users wanting to cultivate positive daily habits need a clean, responsive interface that tracks progress consistently without requiring backend setup.",
            solution: "Built and deployed a responsive, component based web application using React and Vite, following reusable and maintainable coding practices. Implemented client side state management and localStorage based data persistence, ensuring reliable data handling and real time updates without backend dependency. Maintained the application through iterative development using Git and GitHub.",
            technologies: ["React", "Vite", "JavaScript", "CSS3", "HTML5", "LocalStorage", "Git", "GitHub"],
            metrics: [
                { label: "Framework", val: "React + Vite" },
                { label: "Data Storage", val: "LocalStorage" },
                { label: "Architecture", val: "Modular UI" }
            ],
            features: [
                "Built and deployed a responsive, component based web application using React and Vite, following reusable and maintainable coding practices",
                "Implemented client side state management and localStorage based data persistence, ensuring reliable data handling and real time updates without backend dependency",
                "Used Git and GitHub for version control and maintained the application through iterative development and debugging"
            ],
            githubUrl: "https://github.com/Ishagp",
            demoUrl: "https://habit-tracker-puce-chi.vercel.app/",
            caseStudyModalId: "habit-tracker-app"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer Science (AIML)",
            specialization: "Artificial Intelligence & Machine Learning",
            institution: "JSS Academy of Technical Education",
            location: "Noida, India",
            period: "2023 to 2027",
            grade: "CGPA: 8.58 / 10",
            highlight: "Academic Scholar",
            coursework: [
                "Data Structures and Algorithms",
                "Database Management Systems (DBMS)",
                "Operating Systems",
                "Computer Networks",
                "Object Oriented Programming",
                "Statistical Analysis & Exploratory Data Analysis"
            ],
            activities: [
                "Hands on machine learning prototypes and data driven application development",
                "Volunteer at Akshargyan (Mentoring underprivileged children since Nov 2023)"
            ]
        },
        {
            degree: "Class 12th (CBSE)",
            specialization: "Science Stream",
            institution: "L.N. National Sr Secondary School (CBSE)",
            location: "Sikanderpur, India",
            period: "2021 to 2022",
            grade: "Score: 92.80%",
            highlight: "Academic Distinction",
            coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
            activities: ["School Academic Merit"]
        },
        {
            degree: "Class 10th (CBSE)",
            specialization: "General Studies & Sciences",
            institution: "L.N. National Sr Secondary School (CBSE)",
            location: "Sikanderpur, India",
            period: "2019 to 2020",
            grade: "Score: 93.33%",
            highlight: "Academic Honors",
            coursework: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
            activities: ["Academic Top Performer"]
        }
    ],

    extracurricular: [
        {
            role: "Volunteer",
            organization: "Akshargyan",
            period: "Nov 2023 to Present",
            description: "Mentored underprivileged children through structured learning sessions, improving academic engagement and understanding. Collaborated with volunteers to organize educational initiatives and community events, strengthening teamwork and communication skills."
        }
    ],

    certifications: [
        {
            title: "Introduction to MS Excel",
            issuer: "Microsoft",
            date: "Verified",
            link: "https://drive.google.com/file/d/1b8WsWUZVbGEw9UEdA5ojPGW0dCx5q8x5/view?usp=sharing",
            skills: ["MS Excel", "Formulas & Functions", "Data Formatting", "Analysis"]
        },
        {
            title: "The Ultimate Job Ready Data Science Course",
            issuer: "CodeWithHarry",
            date: "Verified",
            link: "https://drive.google.com/file/d/1eJejaEsAxf_oc0KlzeXRA6TyQeBp-_Xm/view?usp=sharing",
            skills: ["Python", "Pandas", "NumPy", "EDA", "Machine Learning"]
        },
        {
            title: "Responsive Web Design",
            issuer: "FreeCodeCamp",
            date: "Verified",
            link: "https://drive.google.com/file/d/10ePtNdq1r-O5qyJ1YXQzkBCqJbh8SdF0/view?usp=drive_link",
            skills: ["HTML5", "CSS3", "Responsive Layouts", "Flexbox & Grid"]
        }
    ]
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
