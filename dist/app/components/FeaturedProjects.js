import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
const projects = [
    {
        title: "Project 1",
        description: "A high-performance interactive web application built with React and Node.js. Optimized for seamless user experience and robust data architecture.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        tech: ["React", "TypeScript", "Node.js", "MongoDB"],
        github: "#",
        live: "#"
    },
    {
        title: "Project 2",
        description: "An interactive web-based game focused on performance and complex logic. Utilizing HTML5 Canvas and specialized optimization techniques.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        tech: ["Canvas API", "JavaScript", "Express", "PostgreSQL"],
        github: "#",
        live: "#"
    }
];
export const FeaturedProjects = () => {
    return (_jsx("section", { id: "projects", className: "bg-[#121212] py-20 px-6 border-t border-white/5", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx(motion.h3, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-16 text-center", children: "Featured projects" }), _jsx("div", { className: "space-y-24", children: projects.map((project, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "group", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center", children: [_jsxs("div", { className: "relative overflow-hidden rounded-lg", children: [_jsx(ImageWithFallback, { src: project.image, alt: project.title, className: "w-full h-64 object-cover transform transition-transform group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-['Libre_Baskerville'] text-fuchsia-400 text-2xl font-bold", children: project.title }), _jsx("p", { className: "text-white/80 font-['Libre_Baskerville'] leading-relaxed italic", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: project.tech.map((tech, i) => (_jsx("span", { className: "px-3 py-1 bg-fuchsia-900/20 text-fuchsia-300 text-xs rounded-full border border-fuchsia-500/20", children: tech }, i))) }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsxs("a", { href: project.github, className: "text-white hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-['Libre_Baskerville'] font-bold", children: [_jsx(Github, { size: 16 }), " Code"] }), _jsxs("a", { href: project.live, className: "text-white hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-['Libre_Baskerville'] font-bold", children: [_jsx(ExternalLink, { size: 16 }), " Live"] })] })] })] }) }, index))) })] }) }));
};
//# sourceMappingURL=FeaturedProjects.js.map