import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/constants";

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type Capability = {
  title: string;
  description: string;
};

export const hero = {
  name: "Addison Amin Reyes Cedano",
  role: "Software Engineer",
  summary:
    "I build backend systems, APIs, and games. I work comfortably across frontend, systems, and ML/AI roles, but backend engineering and game development are where I'm strongest. My deepest interests are game engine development, graphics programming, pixel art and 3D.",
};

export const navItems = [
  { label: "HOME", target: "home" },
  { label: "ABOUT", target: "about" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "PROJECTS", target: "projects" },
  { label: "CONTACT", target: "contact" },
] as const;

export const primaryLinks = {
  email: `mailto:${EMAIL}`,
  resume: RESUME_URL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
};

export const aboutParagraphs = [
  "I'm a software engineer who moves across roles depending on what the project needs. I'm comfortable working as a frontend, backend, fullstack, game developer, systems engineer, or ML/AI engineer. My strongest areas are backend engineering and game development, where I have the most hands-on experience and confidence.",
  "I use TypeScript for frontend interfaces and Python as my main backend language, especially with Django and FastAPI for REST APIs, authentication, reporting tools, data models, and server-side architecture. I use Rust as a systems and performance language for work where speed, control, and reliability matter most.",
  "I'm currently pursuing a Software Engineering degree at UNICARIBE in the Dominican Republic after completing an Associate's Degree in Artificial Intelligence at ITLA. I'm open to backend, frontend, fullstack, game development, systems, ML/AI, remote, and freelance opportunities.",
  "Outside of professional work, my deepest interests are engine programming, graphics programming, game development, pixel art, and 3D art. These are the areas I invest personal time in and care about most.",
];

export const capabilities: Capability[] = [
  {
    title: "Backend systems & APIs",
    description:
      "Python services with Django and FastAPI, PostgreSQL and MongoDB data modeling, validation, auth flows, OpenAPI/Swagger docs, business logic, and maintainable REST APIs built for production.",
  },
  {
    title: "Game & engine development",
    description:
      "Game logic, entity systems, simulation loops, tooling, and engine-level work. Comfortable building from scratch or integrating into existing engines, with a strong interest in how games work at a low level.",
  },
  {
    title: "Graphics & systems programming",
    description:
      "Rust and low-level systems work for performance-sensitive paths, graphics programming concepts, rendering pipelines, and domains where speed, control, and reliability justify the extra complexity.",
  },
  {
    title: "Frontend & product interfaces",
    description:
      "Responsive TypeScript interfaces with React and Next.js, connected to backend APIs, authentication, database-backed features, and clear user workflows.",
  },
  {
    title: "Automation, Data, and AI",
    description:
      "Process automation, data analysis workflows, BI/reporting dashboards, recommendation logic, AI-assisted development, and internal tools that reduce manual work.",
  },
  {
    title: "Self-directed learning",
    description:
      "Autodidact by nature, always learning new tools, patterns, and technologies, with an open mindset for adapting to the stack a project or team needs.",
  },
];

export const experience: TimelineItem[] = [
  {
    date: "May 2024 - Present",
    title: "Software Developer, SEMS SRL",
    description:
      "Full-time hybrid role building Odoo 16 addons, FastAPI/Django backend services, flutter mobile apps, TypeScript/React frontends, business logic, RESTful APIs, automated reporting, data exchange workflows, and internal business intelligence tools for production operations.",
  },
  {
    date: "Feb 2024 - May 2024",
    title: "Data Analyst Intern, SEMS SRL",
    description:
      "Developed data analysis workflows, visualization dashboards, and automated reporting processes to improve operational visibility and reduce manual data handling.",
  },
  {
    date: "Sep 2020 - Aug 2025",
    title: "IT Support Specialist, OXSIS SRL",
    description:
      "Supported systems in a logistics and customs environment, including troubleshooting, maintenance, data management, process automation initiatives, and operational reliability.",
  },
];

export const education: TimelineItem[] = [
  {
    date: "Apr 2025 - Present",
    title: "Software Engineering, UNICARIBE",
    description:
      "Pursuing an engineering degree while continuing to build production-style web, backend, database, automation, and games projects.",
  },
  {
    date: "Aug 2021 - Dec 2023",
    title: "Artificial Intelligence, ITLA",
    description:
      "Completed an Associate's Degree focused on artificial intelligence, with project work that supports my interest in algorithmic logic, automation, machine learning, reinforcement learning, and model-driven tools.",
  },
];

export const footerLinks = [
  { label: "Certifications", href: "https://certificates-4fx.pages.dev/" },
  { label: "LeetCode", href: "https://leetcode.com/u/AddisonReyes/" },
  { label: "GitHub", href: GITHUB_URL },
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Resume", href: RESUME_URL },
] as const;

export const footerLinkGroups = [
  {
    title: "Work",
    links: [
      { label: "Resume", href: RESUME_URL },
      { label: "Certifications", href: "https://certificates-4fx.pages.dev/" },
      { label: "LeetCode", href: "https://leetcode.com/u/AddisonReyes/" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: `mailto:${EMAIL}` },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: "GitHub", href: GITHUB_URL },
    ],
  },
] as const;
