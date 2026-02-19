import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
};

const productionProjects: Project[] = [];

const personalProjects: Project[] = [
  {
    title: "Library API",
    description:
      "A RESTful API built with TypeScript, Express, and MongoDB for managing a library system with books, authors, and loan operations.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // backend / code / server
    github: "https://github.com/AddisonReyes/library-api",
  },
  {
    title: "Store Sales Data Pipeline",
    description:
      "A basic ETL pipeline for processing and analyzing online store sales data. This project demonstrates data engineering fundamentals: extracting, transforming, loading, and analyzing data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // data analytics dashboard
    github: "https://github.com/AddisonReyes/store_sales_data_pipeline",
  },
  {
    title: "ToDo App",
    description:
      "To-do list application built with HTML, CSS, Node.js, TypeScript, Docker, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80", // task planning / notebook
    github: "https://github.com/AddisonReyes/ToDo-App",
  },
  {
    title: "Anime Recommendation System",
    description:
      "A content-based anime recommendation system that suggests titles based on user viewing history and preferences. It applies NLP techniques to analyze anime descriptions and user reviews to identify similar content.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", // streaming / media consumption / recommendation vibe
    github: "https://github.com/AddisonReyes/Anime-System-Recomendations/",
  },
  {
    title: "Intent Recognition Project",
    description:
      "NLP intent recognition project involving web scraping of approximately 1000 reviews, followed by data preprocessing and model training to classify reviews as positive or negative.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80", // NLP / text processing
    github: "https://github.com/AddisonReyes/Proyect-Intent-recognition",
  },
  {
    title: "Patient Classification Project",
    description:
      "A machine learning model that predicts whether a patient is a smoker based on provided clinical and demographic information.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", // healthcare analytics / medical data context
    github: "https://github.com/AddisonReyes/Proyecto-de-clasificacion/",
  },
];

const ProjectSection = ({
  title,
  projects,
}: {
  title: string;
  projects: any[];
}) => (
  <div className="mb-32">
    <motion.h4
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-['Libre_Baskerville'] text-white text-3xl mb-12 border-b border-white/10 pb-4"
    >
      {title}
    </motion.h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h5 className="font-['Libre_Baskerville'] text-fuchsia-400 text-2xl font-bold mb-3 italic">
            {project.title}
          </h5>
          <p className="text-white/60 font-['Libre_Baskerville'] leading-relaxed mb-6 italic">
            {project.description}
          </p>
          <div className="flex gap-4">
            <a
              href={project.github}
              className="text-white/40 hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={project.live}
              className="text-white/40 hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const ProjectsPage = () => {
  return (
    <div className="bg-[#121212] pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-24 text-center font-bold"
        >
          Projects
        </motion.h3>

        {productionProjects.length > 0 && (
          <ProjectSection
            title="Projects in production"
            projects={productionProjects}
          />
        )}

        {personalProjects.length > 0 && (
          <ProjectSection
            title="Personal projects"
            projects={personalProjects}
          />
        )}

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 p-8 border border-white/10 rounded-2xl bg-white/5"
          >
            <div className="text-left">
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold mb-1">
                Want to see more?
              </p>
              <h4 className="text-white text-xl font-['Libre_Baskerville']">
                Check out my full GitHub profile
              </h4>
            </div>
            <a
              href="https://github.com/AddisonReyes"
              title="Visit GitHub profile"
              className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center text-white hover:bg-fuchsia-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
