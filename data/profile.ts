import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL
} from "@/lib/constants";

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
    "I build production-ready web applications with TypeScript on the frontend and primarily Python on the backend, using Rust for performance-critical parts when speed and reliability matter, from responsive product interfaces to clean APIs, data models, automation, AI-assisted workflows, BI/reporting tools, and Docker-based deployment."
};

export const navItems = [
  { label: "HOME", target: "home" },
  { label: "ABOUT", target: "about" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "PROJECTS", target: "projects" },
  { label: "CLIENT WORK", target: "client-work" },
  { label: "CONTACT", target: "contact" }
] as const;

export const primaryLinks = {
  email: `mailto:${EMAIL}`,
  resume: RESUME_URL,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL
};

export const aboutParagraphs = [
  "I'm a software engineer and fullstack developer focused on building reliable products end to end: responsive frontend interfaces, backend services, clear domain logic, automation, and deploy-ready systems that can move beyond a local machine.",
  "I use TypeScript for frontend product interfaces and Python as my main backend language, with Django and FastAPI for services, REST APIs, automation, reporting tools, data models, authentication, and server-side architecture. I use Rust for performance-critical systems where efficiency and reliability are worth the extra control.",
  "I'm currently pursuing a Software Engineering degree at UNICARIBE in the Dominican Republic after completing an Associate's Degree in Artificial Intelligence at ITLA, and I'm open to fullstack roles, backend roles, remote opportunities, collaborations, and freelance product work."
];

export const capabilities: Capability[] = [
  {
    title: "Fullstack product development",
    description:
      "Responsive TypeScript interfaces with React and Next.js, connected to backend APIs, authentication, database-backed features, and polished user workflows."
  },
  {
    title: "Backend systems and APIs",
    description:
      "Clean Python services with Django and FastAPI, readable architecture, PostgreSQL and MongoDB data modeling, validation, auth flows, OpenAPI/Swagger docs, maintainable REST APIs, and Rust where performance-critical paths need tighter control."
  },
  {
    title: "AI, automation, and tooling",
    description:
      "AI-assisted development, process automation, recommendation logic, reporting dashboards, model-training experiments, and internal tools that reduce manual work without hiding the underlying engineering."
  },
  {
    title: "Deployment-ready delivery",
    description:
      "Dockerized applications, production-oriented configuration, Git/Linux workflows, CI/CD basics, AWS familiarity, static and cloud deployments, and projects prepared to run outside my local development environment."
  }
];

export const experience: TimelineItem[] = [
  {
    date: "May 2024 - Present",
    title: "Software Developer, SEMS SRL",
    description:
      "Full-time hybrid role building backend services, business logic, RESTful APIs, Django systems, automated reporting, data exchange workflows, and internal business intelligence tools for production company operations."
  },
  {
    date: "Feb 2024 - May 2024",
    title: "Data Analyst Intern, SEMS SRL",
    description:
      "Developed data analysis workflows, visualization dashboards, and automated reporting processes to improve operational visibility and reduce manual data handling."
  },
  {
    date: "Sep 2020 - Aug 2025",
    title: "IT Support Specialist, OXSIS SRL",
    description:
      "Supported systems in a logistics and customs environment, including troubleshooting, maintenance, data management, process automation initiatives, and operational reliability."
  }
];

export const education: TimelineItem[] = [
  {
    date: "Apr 2025 - Present",
    title: "Software Engineering, UNICARIBE",
    description:
      "Pursuing an engineering degree while continuing to build production-style web, backend, database, automation, and interactive software projects."
  },
  {
    date: "Aug 2021 - Dec 2023",
    title: "Artificial Intelligence, ITLA",
    description:
      "Completed an Associate's Degree focused on artificial intelligence, with project work that supports my interest in recommendation logic, automation, and model-driven tools."
  }
];

export const footerLinks = [
  { label: "Certifications", href: "https://certificates-4fx.pages.dev/" },
  { label: "LeetCode", href: "https://leetcode.com/u/AddisonReyes/" },
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Resume", href: RESUME_URL }
] as const;
