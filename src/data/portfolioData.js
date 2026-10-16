// Data file for Dev Path Portfolio Website
// All customizable portfolio metrics, tech cards, roadmap stages, and project details reside here.

export const portfolioInfo = {
  title: "Dev Path",
  tagline: "Learn. Build. Grow.",
  heading: "Building My Future, One Line of Code at a Time.",
  subheading: "Welcome to Dev Path — my journey through web development, full-stack technologies, and practical software projects.",
  statusLabel: "Learning • Building • Improving",
};

export const statistics = [
  {
    id: "tech-count",
    value: "12",
    label: "Technologies Explored",
    description: "Frontend, Backend, DB & AI tools",
    icon: "Layers",
  },
  {
    id: "modules-count",
    value: "24+",
    label: "Learning Modules",
    description: "Core topics & practical exercises",
    icon: "BookOpen",
  },
  {
    id: "projects-count",
    value: "2",
    label: "Projects Built",
    description: "Hands-on web applications",
    icon: "Code",
  },
  {
    id: "learning-focus",
    value: "Full-Stack & AI",
    label: "Current Learning Focus",
    description: "React, Node.js & AI workflows",
    icon: "Target",
  },
];

export const learningPathStages = [
  {
    stage: 1,
    title: "Web Fundamentals",
    status: "Explored",
    description: "Mastering the structural and visual backbone of the web with semantic markup and modern CSS layout techniques.",
    technologies: ["HTML5", "CSS3", "Semantic Web", "Flexbox & Grid"],
    icon: "Globe",
    color: "from-blue-500 to-cyan-400",
  },
  {
    stage: 2,
    title: "Frontend Development",
    status: "Practicing",
    description: "Building interactive, user-centric interfaces with modern JavaScript syntax, React component state, and utility-first styling.",
    technologies: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "Vite"],
    icon: "Layout",
    color: "from-purple-500 to-indigo-500",
  },
  {
    stage: 3,
    title: "Backend Development",
    status: "Practicing",
    description: "Designing server-side application logic, handling HTTP requests, routing, middleware, and crafting RESTful APIs.",
    technologies: ["Node.js", "Express.js", "REST APIs", "Middleware"],
    icon: "Server",
    color: "from-indigo-500 to-purple-600",
  },
  {
    stage: 4,
    title: "Databases & Authentication",
    status: "In Progress",
    description: "Understanding persistent data storage, NoSQL/SQL database management, and basic authentication workflows.",
    technologies: ["MongoDB", "Supabase", "Firebase", "Mongoose"],
    icon: "Database",
    color: "from-cyan-500 to-blue-600",
  },
  {
    stage: 5,
    title: "AI-Assisted Development",
    status: "In Progress",
    description: "Leveraging cutting-edge AI tools to accelerate prototyping, code review, test generation, and repository management.",
    technologies: ["Google Antigravity", "Google Jules", "AI Prompting", "Code Refactoring"],
    icon: "Cpu",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    stage: 6,
    title: "Practical Projects",
    status: "In Progress",
    description: "Synthesizing individual skills into full-featured, user-ready web software projects with deployment readiness.",
    technologies: ["Expense Tracker", "Dev Path Portfolio", "Full-Stack Integration"],
    icon: "Rocket",
    color: "from-emerald-500 to-teal-400",
  },
];

export const technologies = [
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    status: "Explored",
    progress: 90,
    icon: "FileCode",
    description: "Structure and semantic markup for web pages.",
    topics: ["Elements", "Forms", "Semantic HTML", "Accessibility Basics"],
    modalContent: {
      overview: "HTML5 is the foundational standard for structuring content on the modern web. Learning HTML5 focused on semantic elements, accessibility best practices, and structured data.",
      keyConcepts: [
        "Semantic structure (<header>, <nav>, <main>, <section>, <footer>)",
        "Accessible forms with semantic input types and labels",
        "WAI-ARIA accessibility roles and attributes",
        "Audio, video, and canvas elements"
      ],
      practicalApplication: "Utilized semantic HTML structure across all portfolio sections and practical project forms to ensure high accessibility and SEO readiness.",
      learningGoals: "Deepen understanding of microdata, web components, and advanced accessibility standards (WCAG 2.1 AAA)."
    }
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    status: "Explored",
    progress: 85,
    icon: "Palette",
    description: "Styling, layout, and responsive interfaces.",
    topics: ["Flexbox", "Grid", "Positioning", "Transitions", "Responsive Design"],
    modalContent: {
      overview: "CSS3 enables modern web styling, layout architecture, animations, and responsive screen adaptation across mobile, tablet, and desktop viewports.",
      keyConcepts: [
        "Modern layouts using CSS Grid and Flexbox",
        "CSS variables (custom properties) and theme switching",
        "Media queries and mobile-first responsive design strategy",
        "Transitions, keyframe animations, and hardware-accelerated transforms"
      ],
      practicalApplication: "Crafted custom responsive layouts, dark glassmorphism effects, and smooth transitions for portfolio components.",
      learningGoals: "Master advanced CSS architecture patterns (BEM/Utility hybrid) and complex UI animations."
    }
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    status: "Practicing",
    progress: 80,
    icon: "Code2",
    description: "Programming fundamentals and interactive web applications.",
    topics: ["Variables", "Functions", "Arrays", "Objects", "DOM", "Events", "Asynchronous JavaScript"],
    modalContent: {
      overview: "JavaScript powers client-side interactivity, dynamic content rendering, DOM manipulation, asynchronous network requests, and complex logic.",
      keyConcepts: [
        "ES6+ syntax: arrow functions, destructuring, spread/rest operators, modules",
        "Asynchronous JavaScript: Promises, async/await, and Fetch API",
        "DOM selection, event handling, and event delegation",
        "Array methods (.map, .filter, .reduce) and object manipulation"
      ],
      practicalApplication: "Implemented interactive state logic, array filtering, modal management, and dynamic contact interaction on Dev Path.",
      learningGoals: "Advance knowledge in TypeScript, closures, event loop internals, and performance optimization."
    }
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    status: "Explored",
    progress: 85,
    icon: "Wind",
    description: "Utility-first styling for fast and consistent UI development.",
    topics: ["Utility Classes", "Responsive Modifiers", "Layouts", "Spacing", "Customization"],
    modalContent: {
      overview: "Tailwind CSS is a utility-first CSS framework that enables rapid interface styling directly in markup while maintaining high visual consistency.",
      keyConcepts: [
        "Utility class compositions for layout, flexbox, grid, and typography",
        "Responsive breakpoints (sm, md, lg, xl)",
        "Hover, focus, active, and arbitrary variant modifiers",
        "Tailwind v4 integration with Vite"
      ],
      practicalApplication: "Styled the entire Dev Path application with Tailwind utility classes, custom theme glassmorphism, and responsive breakpoints.",
      learningGoals: "Master custom plugin creation and design system tokens in Tailwind config."
    }
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    status: "Practicing",
    progress: 75,
    icon: "Atom",
    description: "Building reusable component-based interfaces.",
    topics: ["Components", "Props", "State", "Hooks", "Lists", "Forms", "API Integration"],
    modalContent: {
      overview: "React is a component-based JavaScript library for building scalable, declarative user interfaces with efficient virtual DOM rendering.",
      keyConcepts: [
        "Functional components and JSX syntax",
        "State management with useState and side effects with useEffect",
        "Component composition, prop drilling prevention, and custom hooks",
        "Controlled form inputs and dynamic list rendering"
      ],
      practicalApplication: "Architected Dev Path into modular React components (Navbar, Hero, TechGrid, TechModal, Projects, Dashboard).",
      learningGoals: "Explore Context API, React Query/SWR for server state, and Next.js for SSR."
    }
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    status: "Practicing",
    progress: 65,
    icon: "Terminal",
    description: "Running JavaScript on the server.",
    topics: ["Modules", "npm", "Asynchronous Programming", "Environment Variables"],
    modalContent: {
      overview: "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JS code on the server side.",
      keyConcepts: [
        "Non-blocking, event-driven asynchronous I/O model",
        "CommonJS and ES Module imports/exports",
        "Package management using npm and package.json lifecycle",
        "Reading environment variables with process.env"
      ],
      practicalApplication: "Created local backend scripts and API routes for the Expense Tracker learning project.",
      learningGoals: "Deepen understanding of Node streams, buffer operations, file system access, and microservices."
    }
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    status: "Practicing",
    progress: 60,
    icon: "Server",
    description: "Creating backend applications and REST APIs.",
    topics: ["Routes", "Middleware", "Controllers", "HTTP Requests", "Error Handling"],
    modalContent: {
      overview: "Express is a flexible Node.js web application framework providing a robust suite of features for web and mobile RESTful applications.",
      keyConcepts: [
        "Routing algorithms for HTTP verbs (GET, POST, PUT, DELETE)",
        "Custom middleware functions (logging, cors, body parsing, auth)",
        "Controller separation for clean business logic",
        "Centralized error handling middleware"
      ],
      practicalApplication: "Structured REST endpoints for financial transaction management in the Expense Tracker project.",
      learningGoals: "Implement JWT authentication middleware, rate limiting, and OpenAPI/Swagger documentation."
    }
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    status: "Practicing",
    progress: 55,
    icon: "Database",
    description: "Working with document-based databases.",
    topics: ["Collections", "Documents", "CRUD Operations", "Mongoose Basics"],
    modalContent: {
      overview: "MongoDB is a NoSQL document database designed for flexibility and scalability, storing data in JSON-like BSON documents.",
      keyConcepts: [
        "Collections and JSON document hierarchy",
        "CRUD operations (find, insertOne, updateOne, deleteMany)",
        "Mongoose ODM schemas and model definition",
        "Indexing and query filtering"
      ],
      practicalApplication: "Designed schema models for expense transactions including categories, dates, and amounts.",
      learningGoals: "Master MongoDB aggregation pipelines, document references, and database deployment on MongoDB Atlas."
    }
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Database",
    status: "Explored",
    progress: 50,
    icon: "Zap",
    description: "Backend services built around PostgreSQL, authentication, and data access.",
    topics: ["Tables", "SQL Basics", "CRUD Operations", "Authentication", "Row Level Security (RLS)"],
    modalContent: {
      overview: "Supabase is an open-source Firebase alternative offering PostgreSQL database capabilities, real-time subscriptions, and auto-generated REST APIs.",
      keyConcepts: [
        "Relational database schemas, primary/foreign keys",
        "SQL queries and Supabase JavaScript client",
        "Row Level Security (RLS) policies for data protection",
        "User authentication workflows"
      ],
      practicalApplication: "Explored cloud relational database creation, table relations, and Row Level Security configuration.",
      learningGoals: "Integrate Supabase Auth and Realtime subscriptions into a full-stack project."
    }
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Database",
    status: "Explored",
    progress: 60,
    icon: "Flame",
    description: "Google platform for application development and web hosting.",
    topics: ["Firebase Projects", "Hosting", "Deployment Fundamentals"],
    modalContent: {
      overview: "Firebase provides a comprehensive set of web application services, including static hosting, Firestore NoSQL database, and auth tools.",
      keyConcepts: [
        "Firebase project configuration and CLI tooling",
        "Static and Single Page Application (SPA) Hosting",
        "Production deployment workflows (firebase deploy)",
        "Security rules and public directory routing"
      ],
      practicalApplication: "Configured Firebase Hosting deployment configuration (firebase.json SPA rewrites) for Dev Path portfolio.",
      learningGoals: "Utilize Firebase Cloud Functions and Firestore real-time listeners."
    }
  },
  {
    id: "google-antigravity",
    name: "Google Antigravity",
    category: "AI Tools",
    status: "Explored",
    progress: 70,
    icon: "Sparkles",
    description: "Exploring AI-assisted application development.",
    topics: ["Prompting", "Code Generation", "Project Setup", "Debugging Workflows"],
    modalContent: {
      overview: "Google Antigravity provides modern AI agent capabilities for rapid application setup, automated scaffolding, and architectural refinement.",
      keyConcepts: [
        "Context-rich prompt engineering for frontend architecture",
        "Automated project bootstrapping and boilerplate reduction",
        "Iterative code debugging with AI guidance",
        "Best practice verification and modular refactoring"
      ],
      practicalApplication: "Leveraged AI-assisted development tools to plan, structure, and refine portfolio component modularity.",
      learningGoals: "Develop automated testing scripts and workflow automations using AI agents."
    }
  },
  {
    id: "google-jules",
    name: "Google Jules",
    category: "AI Tools",
    status: "Explored",
    progress: 75,
    icon: "Bot",
    description: "AI-assisted coding workflows with repository-based development.",
    topics: ["Exploring Coding Tasks", "Reviewing Proposed Changes", "Working with GitHub Repositories"],
    modalContent: {
      overview: "Google Jules is an AI-powered developer assistant integrated with software repositories, aiding in task execution, code generation, and pull request reviews.",
      keyConcepts: [
        "Repository context analysis and task planning",
        "Automated search-and-replace code updates",
        "Reviewing git merge diffs and proposed changes",
        "Pre-commit checks, linting, and quality verification"
      ],
      practicalApplication: "Utilized Jules workflows for structured step-by-step development, plan validation, and clean component execution.",
      learningGoals: "Integrate Jules into complex multi-repository full-stack development cycles."
    }
  }
];

export const projects = [
  {
    id: "expense-tracker",
    title: "Expense Tracker Application",
    tagline: "Personal Finance & Budget Tracking Application",
    description: "A practical learning project designed to manage personal finances. It allows users to track income and expenses, organize transactions into custom categories, and view financial summaries.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    implementedFeatures: [
      "Interactive transaction entry form with category tagging",
      "Dynamic real-time summary cards (Income, Expense, Net Balance)",
      "Category and date range transaction filtering",
      "Responsive UI built with reusable Tailwind components"
    ],
    plannedFeatures: [
      "MongoDB persistent database integration with Mongoose ORM",
      "User authentication using JWT tokens and bcrypt password hashing",
      "Visual chart analytics (pie charts for category distribution)",
      "Monthly budget target alerts and CSV export feature"
    ],
    githubUrl: "https://github.com/placeholder/expense-tracker",
    liveDemoUrl: null, // Placeholder or null when demo is pending
    status: "In Active Development",
    featured: true,
  },
  {
    id: "dev-path-portfolio",
    title: "Dev Path — Learning Portfolio",
    tagline: "Modern Developer Learning & Skill Showcase Platform",
    description: "A modern developer portfolio website designed to present learning stages, technical skills, project milestones, and progress metrics to internship supervisors.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Firebase Hosting"],
    implementedFeatures: [
      "Interactive Technology Explorer with search and category filtering",
      "Detailed technology modal dialogs with keyboard accessibility",
      "Structured 6-stage Learning Roadmap with status badges",
      "Learning Progress Dashboard with category percentage metrics",
      "Firebase Hosting production build configuration"
    ],
    plannedFeatures: [
      "Interactive live learning log blog feed",
      "Backend API integration for dynamic comment submission"
    ],
    githubUrl: "https://github.com/placeholder/dev-path-portfolio",
    liveDemoUrl: "https://dev-path-portfolio.web.app",
    status: "Completed & Ready",
    featured: true,
  }
];

export const aboutMeData = {
  heading: "My Journey into Development",
  subheading: "Aspiring Full-Stack Software Engineer",
  paragraphs: [
    "I am a passionate software engineering student actively learning modern full-stack web development through practical projects, hands-on experimentation, and structured learning paths.",
    "My learning spans frontend user interface design with React and Tailwind CSS, backend RESTful API construction with Node.js and Express, database management with MongoDB and Supabase, and leveraging modern AI-assisted development tools like Google Antigravity and Google Jules.",
    "Driven by curiosity, problem-solving, and continuous growth, I treat every line of code as an opportunity to build cleaner, more accessible, and performance-driven applications."
  ],
  personalPlaceholders: {
    name: "[Your Name Placeholder]",
    role: "Full-Stack Development Intern / Student",
    location: "[City / University Placeholder]",
    availability: "Available for Software Engineering Internships",
  },
  coreValues: [
    {
      title: "Hands-on Building",
      description: "Learning concepts by applying them in practical applications rather than just reading documentation.",
      icon: "Code"
    },
    {
      title: "Continuous Curiosity",
      description: "Constantly testing new tools, frameworks, and AI workflows to sharpen problem-solving agility.",
      icon: "Sparkles"
    },
    {
      title: "Clean & Accessible Code",
      description: "Writing readable, modular components with focus on user experience and accessibility standards.",
      icon: "CheckCircle"
    }
  ]
};

export const progressDashboardData = {
  currentFocus: {
    title: "Full-Stack React & Node.js Integration",
    description: "Currently combining React frontend user interfaces with Node/Express REST backend endpoints, database models, and AI-assisted repository workflows.",
    status: "In Progress",
    startDate: "Current Phase"
  },
  categoryMetrics: [
    { category: "Frontend Development", percent: 84, color: "from-purple-500 to-indigo-500" },
    { category: "Backend Development", percent: 62, color: "from-blue-500 to-cyan-500" },
    { category: "Databases & Storage", percent: 55, color: "from-cyan-500 to-emerald-500" },
    { category: "AI Development Tools", percent: 72, color: "from-fuchsia-500 to-pink-500" }
  ],
  recentlyExploredTopics: [
    { topic: "Vite + React 19 Architecture & Component Modularity", date: "Recent", status: "Explored" },
    { topic: "Tailwind CSS Utility Styling & Glassmorphism UI", date: "Recent", status: "Explored" },
    { topic: "Express.js REST API Controller Patterns & Routing", date: "Recent", status: "Practicing" },
    { topic: "Google Jules Repository Workflows & Diff Reviews", date: "Recent", status: "Explored" },
    { topic: "MongoDB Document Schema & Mongoose Validation", date: "Recent", status: "Practicing" }
  ]
};

export const contactData = {
  title: "Let's Connect & Collaborate",
  description: "I am actively looking for software engineering internship opportunities where I can contribute, learn from experienced mentors, and build impactful software.",
  placeholders: {
    email: "student.dev@example.com", // Set your email here
    github: "https://github.com/Aleesha19Ali",
    linkedin: "https://www.linkedin.com/in/aleesha-ali-3bb454307/?isSelfProfile=true",
  },
  note: "Note: The email copy button is functional and social links can be configured with your profile URLs."
};
