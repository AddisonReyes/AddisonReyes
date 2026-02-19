import React from "react";
import { motion } from "motion/react";
import { Dock, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Library API",
    description:
      "A RESTful API built with TypeScript, Express, and MongoDB for managing a library system with books, authors, and loan operations.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/AddisonReyes/library-api",
  },
];

export const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="bg-[#121212] py-20 px-6 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-16 text-center"
        >
          Featured projects
        </motion.h3>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-['Libre_Baskerville'] text-fuchsia-400 text-2xl font-bold">
                    {project.title}
                  </h4>
                  <p className="text-white/80 font-['Libre_Baskerville'] leading-relaxed italic">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-fuchsia-900/20 text-fuchsia-300 text-xs rounded-full border border-fuchsia-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      className="text-white hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-['Libre_Baskerville'] font-bold"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-white hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-['Libre_Baskerville'] font-bold"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
