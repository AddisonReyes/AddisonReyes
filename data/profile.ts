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
    "I'm a software engineer from the Dominican Republic. I build backend systems, APIs, tooling, and indie games. I care about clean code, performance, and understanding how things work behind the scenes.",
};

export const navItems = [
  { label: "HOME", target: "home" },
  { label: "ABOUT", target: "about" },
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
  "I started programming in 2021 with How to Program in C++ by Deitel & Deitel and got hooked on the mix of creativity and problem solving. I liked being able to build something from scratch, run it, and immediately see the result.",
  "I enjoy solving problems that involve building systems, optimizing performance, and creating tools that make other people's lives easier. I also like creative problem solving in game development, like designing mechanics or improving user experience.",
  "On the backend side, I enjoy APIs, architecture, reliability, automation, integrations, databases, and deployments. I like building systems that are clear to understand and useful for the people working with them.",
  "Game Development is a important part of how I think as a developer. I build small creative games, pixel art, tools, mechanics, and the details behind engines, rendering, animation, shaders, ECS, and procedural generation. I enjoy designing mechanics, improving user experience, and learning how things work.",
  "Currently focused on Rust backend systems, Bevy, Vulkan, and rendering fundamentals. Rust is my favorite language right now because it gives me low-level control while still providing safety and modern features. The ownership system helps prevent bugs and makes it easier to write concurrent code. I also enjoy the vibrant Rust community and ecosystem.",
];

export const capabilities: Capability[] = [
  {
    title: "Backend systems & APIs",
    description:
      "APIs, data modeling, authentication, business logic, automation, and backend services built to stay clear and reliable as they grow.",
  },
  {
    title: "Game & engine development",
    description:
      "Indie games, gameplay systems, engine concepts, tools, pixel art, and the lower-level details that make interactive projects work.",
  },
  {
    title: "Graphics & systems programming",
    description:
      "Rust, Bevy, Vulkan, rendering ideas, and systems work where performance, control, and careful design matter.",
  },
  {
    title: "Useful web interfaces",
    description:
      "Simple TypeScript interfaces connected to backend APIs, with a focus on clear workflows and practical implementation.",
  },
  {
    title: "Automation and tooling",
    description:
      "Internal tools, scripts, reporting workflows, and small systems that remove repetitive work and make operations easier to understand.",
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
