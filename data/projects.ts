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
  // {
  //   name: "Invoice Scanner",
  //   summary:
  //     "Invoice Scanner helps accountants upload invoices, scan them to extract relevant data, organize them by company, review expenses, and keep a shared workspace with clear visibility into the current month.",
  //   image: {
  //     src: "/img/invoice-scanner.webp",
  //     alt: "Invoice Scanner website",
  //   },
  //   tags: [
  //     "TypeScript",
  //     "Next.js",
  //     "React",
  //     "Expo",
  //     "React Native",
  //     "Tailwind CSS",
  //     "Python",
  //     "Django",
  //     "PostgreSQL",
  //     "Docker",
  //   ],
  //   liveUrl: "https://invoice-scanner.dakotitah.com/",
  // },
  // {
  //   name: "Simple Algorithm",
  //   summary:
  //     "A web app for visualizing and understanding common algorithms. It features interactive visualizations of sorting algorithms, pathfinding algorithms, and more, with a focus on simplicity and clarity.",
  //   image: {
  //     src: "/img/simple-algorithm.webp",
  //     alt: "Simple Algorithm website",
  //   },
  //   tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
  //   liveUrl: "https://simple-algorithm.dakotitah.com/",
  // },
  {
    name: "Done Loop",
    summary:
      "Done Loop is a free, open source, mobile productivity app for habits, tasks, calendar context, reminders, and lightweight daily planning.",
    image: {
      src: "/img/done-loop.webp",
      alt: "Done Loop website",
    },
    tags: ["TypeScript", "Expo", "React Native", "SQLite"],
    codeUrl: "https://github.com/AddisonReyes/done-loop",
    liveUrl: "https://done-loop.pages.dev/",
  },
  {
    name: "Mini Finance Tracker - MiniFT",
    summary:
      "A minimalistic finance app that helps users track their spending and manage their finances. Was built with minimalism in mind, to be simple and easy to use. The backend is built with Rust, PostgreSQL, and Rocket, and the dashboard is built with TypeScript, React, and Tailwind CSS.",
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
    codeUrl: "https://github.com/AddisonReyes/MiniFT",
    docsUrl: "https://minift-backend.up.railway.app/docs",
  },
  {
    name: "Anime System Recommendation - AnimeSR",
    summary:
      "A simple platform for recommending anime based on user preferences. It features a FastAPI backend with search and ML-assisted discovery, and a TypeScript interface for browsing and managing recommendations.",
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
];
