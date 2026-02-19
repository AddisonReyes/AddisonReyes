import React from 'react';
import { motion } from 'motion/react';

const SkillCategory = ({ title, skills, index }: { title: string, skills: string[], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="mb-10"
  >
    <h4 className="font-['Libre_Baskerville'] text-fuchsia-400 text-xl font-bold mb-4 border-b border-fuchsia-900/30 pb-2">
      {title}
    </h4>
    <ul className="space-y-2 list-none text-white/80 font-['Libre_Baskerville']">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="text-fuchsia-500">•</span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

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

  return (
    <section id="skills" className="bg-[#121212] py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-16 text-center"
        >
          Skills
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillData.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
