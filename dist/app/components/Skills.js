import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'motion/react';
const SkillCategory = ({ title, skills, index }) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "mb-10", children: [_jsx("h4", { className: "font-['Libre_Baskerville'] text-fuchsia-400 text-xl font-bold mb-4 border-b border-fuchsia-900/30 pb-2", children: title }), _jsx("ul", { className: "space-y-2 list-none text-white/80 font-['Libre_Baskerville']", children: skills.map((skill, i) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-fuchsia-500", children: "\u2022" }), skill] }, i))) })] }));
export const Skills = () => {
    const skillData = [
        {
            title: "Programing",
            skills: ["TypeScript", "JavaScript", "Python"]
        },
        {
            title: "Frontend",
            skills: ["React.js", "HTML", "CSS"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "FastAPI"]
        },
        {
            title: "Database",
            skills: ["PostgreSQL", "MongoDB"]
        }
    ];
    return (_jsx("section", { id: "skills", className: "bg-[#121212] py-20 px-6 border-t border-white/5", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx(motion.h3, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-16 text-center", children: "Skills" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: skillData.map((category, index) => (_jsx(SkillCategory, { ...category, index: index }, index))) })] }) }));
};
//# sourceMappingURL=Skills.js.map