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
  role: "Fullstack Software Engineer",
  summary:
    "I build production-ready web applications with TypeScript frontends, Python backends, clean APIs, automation, data workflows, and AI-assisted tools. When performance matters, I use Rust for backend services that need extra speed, reliability, and control.",
};

export const navItems = [
  { label: "HOME", target: "home" },
  { label: "ABOUT", target: "about" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "PROJECTS", target: "projects" },
  { label: "CLIENT WORK", target: "client-work" },
  { label: "CONTACT", target: "contact" },
] as const;

export const primaryLinks = {
  email: `mailto:${EMAIL}`,
  resume: RESUME_URL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
};

export const aboutParagraphs = [
  "I'm a fullstack software engineer focused on building reliable products end to end: responsive interfaces, backend services, domain logic, automation, data workflows, and deploy-ready systems.",
  "I use TypeScript for frontend product interfaces and Python as my main backend language, especially with Django and FastAPI for REST APIs, authentication, reporting tools, data models, and server-side architecture. I use Rust as a second backend language for performance-critical work where efficiency and reliability justify the extra control.",
  "I'm currently pursuing a Software Engineering degree at UNICARIBE in the Dominican Republic after completing an Associate's Degree in Artificial Intelligence at ITLA. I'm open to fullstack roles, backend roles, remote opportunities, automation work, Data/AI projects, and freelance product development.",
];

export const capabilities: Capability[] = [
  {
    title: "Fullstack product development",
    description:
      "Responsive TypeScript interfaces with React and Next.js, connected to backend APIs, authentication, database-backed features, and clear user workflows.",
  },
  {
    title: "Python backend systems",
    description:
      "Python services with Django and FastAPI, readable architecture, PostgreSQL and MongoDB data modeling, validation, auth flows, OpenAPI/Swagger docs, and maintainable REST APIs.",
  },
  {
    title: "Automation, Data, and AI",
    description:
      "Process automation, data analysis workflows, BI/reporting dashboards, recommendation logic, AI-assisted development, and internal tools that reduce manual work.",
  },
  {
    title: "Rust for performance",
    description:
      "Rust backend services for performance-sensitive paths, strongly typed domain logic, efficient data handling, and systems where speed and reliability matter.",
  },
  {
    title: "Deployment-ready delivery",
    description:
      "Dockerized applications, production-oriented configuration, Git/Linux workflows, CI/CD basics, static exports, and cloud deployments.",
  },
];

export const experience: TimelineItem[] = [
  {
    date: "May 2024 - Present",
    title: "Software Developer, SEMS SRL",
    description:
      "Full-time hybrid role building Python/Django backend services, business logic, RESTful APIs, automated reporting, data exchange workflows, and internal business intelligence tools for production operations.",
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
      "Pursuing an engineering degree while continuing to build production-style web, backend, database, automation, and interactive software projects.",
  },
  {
    date: "Aug 2021 - Dec 2023",
    title: "Artificial Intelligence, ITLA",
    description:
      "Completed an Associate's Degree focused on artificial intelligence, with project work that supports my interest in recommendation logic, automation, and model-driven tools.",
  },
];

export const footerLinks = [
  { label: "Certifications", href: "https://certificates-4fx.pages.dev/" },
  { label: "LeetCode", href: "https://leetcode.com/u/AddisonReyes/" },
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Resume", href: RESUME_URL },
] as const;
