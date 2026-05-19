export type Project = {
  name: string;
  summary?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  tags: string[];
  codeUrl?: string;
  docsUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "MiniFT",
    summary:
      "A production-style personal finance tracker with a Rust backend, PostgreSQL schema design, authentication, Dockerized deployment, and a TypeScript dashboard for transactions, budgets, and financial habits.",
    image: {
      src: "/img/minift.webp",
      alt: "MiniFT dashboard interface"
    },
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Rust",
      "Rocket",
      "PostgreSQL",
      "Docker"
    ],
    liveUrl: "https://minift.net/"
  },
  {
    name: "AnimeSR",
    summary:
      "A recommendation-oriented anime catalog that combines backend filtering, search, and machine-learning-assisted discovery with a responsive TypeScript interface.",
    image: {
      src: "/img/anime-sr.webp",
      alt: "AnimeSR anime recommendation interface"
    },
    tags: ["TypeScript", "Next.js", "React", "FastAPI", "Scikit-learn", "Docker"],
    codeUrl: "https://github.com/AddisonReyes/AnimeSR",
    docsUrl: "https://animesr.up.railway.app/docs",
    liveUrl: "https://animesr.pages.dev/"
  },
  {
    name: "EasyToDo",
    summary:
      "A local-first TypeScript productivity app focused on fast state handling, clean product logic, responsive UI, and a minimal workflow for managing tasks and habits.",
    image: {
      src: "/img/easy-to-do.webp",
      alt: "EasyToDo task and habit tracker interface"
    },
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    codeUrl: "https://github.com/AddisonReyes/easy-to-do",
    liveUrl: "https://easy-to-do.pages.dev/"
  }
];

export const externalProjects: Project[] = [
  {
    name: "Team Logistics",
    description:
      "Built and shipped a responsive business website for a Dominican logistics operator, focused on clear service presentation, mobile performance, and launch-ready implementation.",
    image: {
      src: "/img/team-logistics.webp",
      alt: "Team Logistics website interface"
    },
    tags: ["TypeScript", "Astro", "TailwindCSS"],
    liveUrl: "https://teamlogistics.pages.dev/"
  },
  {
    name: "Oxsis",
    description:
      "Built and shipped a responsive web presence for a Santo Domingo logistics and customs brokerage company operating from Las Americas International Airport.",
    image: {
      src: "/img/oxsis.webp",
      alt: "Oxsis website interface"
    },
    tags: ["TypeScript", "Astro", "TailwindCSS"],
    liveUrl: "https://oxsis.pages.dev/"
  }
];
