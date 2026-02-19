import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
const ProjectSection = ({ title, projects }) => (_jsxs("div", { className: "mb-32", children: [_jsx(motion.h4, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: "font-['Libre_Baskerville'] text-white text-3xl mb-12 border-b border-white/10 pb-4", children: title }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: projects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "group", children: [_jsx("div", { className: "relative overflow-hidden rounded-lg mb-6 aspect-video", children: _jsx(ImageWithFallback, { src: project.image, alt: project.title, className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" }) }), _jsx("h5", { className: "font-['Libre_Baskerville'] text-fuchsia-400 text-2xl font-bold mb-3 italic", children: project.title }), _jsx("p", { className: "text-white/60 font-['Libre_Baskerville'] leading-relaxed mb-6 italic", children: project.description }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("a", { href: project.github, className: "text-white/40 hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold", children: [_jsx(Github, { size: 14 }), " GitHub"] }), _jsxs("a", { href: project.live, className: "text-white/40 hover:text-fuchsia-400 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold", children: [_jsx(ExternalLink, { size: 14 }), " Live Demo"] })] })] }, index))) })] }));
export const ProjectsPage = () => {
    const productionProjects = [
        {
            title: "FinTech Dashboard",
            description: "A production-grade financial analytics dashboard with real-time data streaming and complex visualizations.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            github: "#",
            live: "#"
        },
        {
            title: "E-Commerce Engine",
            description: "Custom headless e-commerce backend built with Node.js and MongoDB, supporting high-concurrency transactions.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            github: "#",
            live: "#"
        }
    ];
    const personalProjects = [
        {
            title: "Retro Arcade Engine",
            description: "A lightweight game engine built with HTML5 Canvas and TypeScript for classic arcade-style web games.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            github: "#",
            live: "#"
        },
        {
            title: "Portfolio v1",
            description: "A minimalist portfolio design experiment exploring typography and motion in a single-page application.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            github: "#",
            live: "#"
        }
    ];
    return (_jsx("div", { className: "bg-[#121212] pt-32 pb-20 px-6 min-h-screen", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx(motion.h3, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-24 text-center font-bold", children: "Projects" }), _jsx(ProjectSection, { title: "Projects in production", projects: productionProjects }), _jsx(ProjectSection, { title: "Personal projects", projects: personalProjects }), _jsx("div", { className: "mt-20 text-center", children: _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "inline-flex items-center gap-4 p-8 border border-white/10 rounded-2xl bg-white/5", children: [_jsxs("div", { className: "text-left", children: [_jsx("p", { className: "text-white/40 text-sm uppercase tracking-widest font-bold mb-1", children: "Want to see more?" }), _jsx("h4", { className: "text-white text-xl font-['Libre_Baskerville']", children: "Check out my full GitHub profile" })] }), _jsx("a", { href: "https://github.com", className: "w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center text-white hover:bg-fuchsia-700 transition-colors", children: _jsx(ArrowRight, { size: 20 }) })] }) })] }) }));
};
//# sourceMappingURL=ProjectsPage.js.map