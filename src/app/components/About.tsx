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
            I am a software engineer specialized in full stack development, I
            write code since 2021, my favorite programming languages are
            TypeScript and Python. Passionate about writing robust and efficient
            code, constantly applying best practices and learning new things.
          </p>
          <p>
            I have experience working with a variety of technologies and
            frameworks, including React, Node.js, Express, and MongoDB. I am
            always eager to take on new challenges and collaborate with other
            developers to create innovative solutions.
          </p>
          <p>
            Aside full stack development, I have a strong interest in game
            development and art, I have experience working with Godot Engine,
            Pygame and Kaplay.js, and I am always looking for ways to combine my
            passion for coding with my love for creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
