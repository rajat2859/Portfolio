import { Project, Experience, SkillCategory } from "../types";

export const PERSONAL_INFO = {
  name: "Rajat Verma",
  shortTitle: "Full Stack Developer",
  tagline: "Building high-performance, responsive full-stack web applications with precision layout & clean code.",
  aboutMe: "I am a Full Stack Web Developer at Digital Web Solutions specializing in SEO and performance-driven web applications. I am highly proficient in JavaScript, React.js, Next.js, Python, PHP, and PostgreSQL, focusing on API integrations and back-end optimization. I am skilled at translating complex Figma designs into pixel-perfect, responsive interfaces that drive real engagement and business growth.",
  contact: {
    email: "rajatverma3804@gmail.com",
    phone: "+91 9818391472",
    location: "5/62 Shivaji Nagar, Gurgaon, Haryana, India",
    githubUrl: "https://github.com/rajat2859",
    linkedinUrl: "#", // placeholder that can be customized
  },
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Annamalai University, Chennai",
      duration: "2017 - 2021",
    },
    {
      degree: "Full Stack Web Developer Certification",
      institution: "Udemy",
      duration: "Completed 2025",
    }
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Digital Web Solutions",
    role: "Full Stack Web Developer",
    location: "Phase-1 Udyog Vihar, Gurgaon",
    duration: "Present",
    highlights: [
      "Developed dynamic, mobile-first, and highly-performant UIs using React.js and Next.js from high-fidelity Figma designs.",
      "Built and optimized robust backend systems and relational databases using PHP, Python, and PostgreSQL.",
      "Increased organic website traffic significantly through comprehensive technical SEO, performance fine-tuning, and structured JSON-LD schema markup.",
      "Automated complex application workflows and synchronization routines by integrating external third-party RESTful APIs.",
      "Collaborated cross-functionally across engineering, design, and marketing teams to deliver complex client projects strictly on schedule."
    ],
    tags: ["React.js", "Next.js", "PostgreSQL", "PHP", "Python", "Technical SEO"]
  },
  {
    id: "exp-2",
    company: "Freelance Client Solutions",
    role: "Graphic Designer & Full-Stack Developer",
    location: "Remote / Gurgaon",
    duration: "2021 - 2024",
    highlights: [
      "Engineered bespoke Python automation bots and utility tools to streamline digital operations and client business workflows.",
      "Delivered diverse, end-to-end client applications managing the complete project lifecycle from initial mockups to live cloud hosting.",
      "Produced engaging multi-media creative layout assets, blending technical delivery with sharp corporate visual identity strategies.",
      "Adapted continuously to client constraints by building performant solutions in whatever stack suited the goals best."
    ],
    tags: ["Python Automation", "Full Stack Development", "Brand Identity", "Cloud Hosting"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Frontend",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend & Databases",
    skills: ["Python", "PHP", "PostgreSQL", "RESTful APIs", "SQL", "Database Optimization"]
  },
  {
    title: "SEO & Performance",
    skills: ["Technical SEO", "Speed Optimization", "Structured Data (JSON-LD)", "Figma translation", "Web Analytics"]
  },
  {
    title: "Workflows & Automation",
    skills: ["Python Scripting", "Process Automation", "Git & GitHub", "Workflow Engineering", "Debugging & QA"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Marine Compliance Dashboard",
    description: "A highly responsive compliance tracking and audit simulation platform built for maritime logistics.",
    longDescription: "This advanced React and Next.js dashboard helps logistics coordinators track real-time vessel checklists and audit reports. It reduces simulated compliance tracking time by 25% through lazy data rendering and robust client-side caching.",
    tags: ["React.js", "Next.js", "Material-UI", "REST APIs", "State Management"],
    githubUrl: "https://github.com/rajat3804/marine-compliance-dashboard",
    liveUrl: "https://github.com/rajat3804/marine-compliance-dashboard", // demo anchor
    role: "Lead Full Stack Engineer",
    client: "RK Marine Operations (Simulation)",
    duration: "October 2025",
    features: [
      "Interactive, color-coded vessel safety checklists with progress persistence.",
      "Real-time audit updates using custom state models and dynamic JSON hooks.",
      "Dynamic data rendering with optimization hooks reducing page load time by 25%.",
      "Comprehensive compliance reports generated on-the-fly for maritime inspectors."
    ],
    imageSource: "marine_compliance_dashboard"
  },
  {
    id: "project-2",
    title: "API-Driven Enterprise SEO Hub",
    description: "An optimization and performance engine built to boost organic rankings of large content networks.",
    longDescription: "A custom-tailored web experience designed to automate standard technical SEO tasks. This platform scans layouts, auto-generates semantic structured JSON-LD schemas, and pre-renders indexable pages so crawler budget is fully utilized.",
    tags: ["Next.js", "SEO", "JSON-LD", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/rajat2859",
    liveUrl: "#",
    role: "SEO Architect / Developer",
    client: "Digital Web Solutions clients",
    duration: "November 2025",
    features: [
      "Automated structured schema JSON-LD validator and injector.",
      "Sitemap generator engine keeping index files synchronized with new layout updates.",
      "Lighthouse performance tracking dashboard scoring above 95 in Core Web Vitals.",
      "Responsive minimal interface optimized for simple cross-device monitoring."
    ],
    imageSource: "seo_hub"
  },
  {
    id: "project-3",
    title: "Python Automation Workflow Bot Suite",
    description: "A comprehensive backend suite of scripts and automated scrapers executing daily cron jobs.",
    longDescription: "Designed for a major digital marketing business, this automation suite connects multiple third-party APIs (Google Search Console, social channels, and PostgreSQL databases) to run reporting, notify managers, and extract intelligence.",
    tags: ["Python", "API Integration", "PostgreSQL", "Workflow Automation"],
    githubUrl: "https://github.com/rajat2859",
    liveUrl: "#",
    role: "Script Architect & Automation Dev",
    client: "Freelance",
    duration: "August 2025",
    features: [
      "Secured API connectors interfacing with several enterprise dashboard services.",
      "Scheduled reporting engines syncing data sets directly into local PostgreSQL instances.",
      "Discord and Telegram alert modules triggering on critical process errors.",
      "High-speed data cleansing scripts designed to format raw logs into pristine analytics."
    ],
    imageSource: "python_bot_suite"
  }
];
