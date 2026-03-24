import React from "react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-[#121212] py-20 px-6 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-10 text-center md:text-left"
        >
          About me
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/90 text-lg font-['Libre_Baskerville'] leading-relaxed"
        >
          <p>
            I am a software engineer specialized in backend development. I have
            been writing code since 2021, my primary programming languages are
            TypeScript, Rust, and Python. I am passionate about building robust
            and efficient systems, consistently applying best practices and
            continuously learning new technologies.
          </p>
          <p>
            I have experience working with a wide range of technologies and
            frameworks. Although I am capable of full-stack development, I
            primarily focus on backend engineering. You can see examples of my
            frontend work on this website. I am always eager to take on new
            challenges and collaborate with other developers to create
            innovative solutions.
          </p>
          <p>
            In addition to backend development, I have a strong interest in game
            development and art. I am always looking for ways to combine my
            passion for coding with my creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
