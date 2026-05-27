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
      "A production-style personal finance tracker with a performance-oriented Rust backend, PostgreSQL schema design, authentication, Dockerized deployment, and a TypeScript dashboard for transactions, budgets, and financial habits.",
    image: {
      src: "/img/minift.webp",
      alt: "MiniFT dashboard interface",
    },
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Rust",
      "Rocket",
      "PostgreSQL",
      "Docker",
    ],
    liveUrl: "https://minift.net/",
  },
  {
    name: "AnimeSR",
    summary:
      "A recommendation-oriented catalog that combines FastAPI backend filtering, search, and machine-learning-assisted discovery with a responsive TypeScript interface.",
    image: {
      src: "/img/anime-sr.webp",
      alt: "AnimeSR anime recommendation interface",
    },
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "FastAPI",
      "Scikit-learn",
      "Docker",
    ],
    codeUrl: "https://github.com/AddisonReyes/AnimeSR",
    docsUrl: "https://animesr.up.railway.app/docs",
    liveUrl: "https://animesr.pages.dev/",
  },
  {
    name: "EasyToDo",
    summary:
      "A local-first TypeScript productivity app focused on fast state handling, clean product logic, responsive UI, and a minimal workflow for managing tasks and habits.",
    image: {
      src: "/img/easy-to-do.webp",
      alt: "EasyToDo task and habit tracker interface",
    },
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    codeUrl: "https://github.com/AddisonReyes/easy-to-do",
    liveUrl: "https://easy-to-do.pages.dev/",
  },
];
