import MainLayout from "../layout/MainLayout";

import SkillContainer from "../components/ui/SkillContainer";
import { ReactNode } from "react";

type skill = { title: string; skills: string[] };
const skillSet: skill[] = [
  { title: "Programing", skills: ["TypeScript", "JavaScript", "Python"] },
  { title: "Frontend", skills: ["React.js", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
  { title: "Database", skills: ["PostgreSQL", "MongoDB"] },
];

function Home() {
  const skillsList: ReactNode[] = [];
  skillSet.forEach((skill) => {
    skillsList.push(
      <SkillContainer title={skill.title} skills={skill.skills} />,
    );
  });

  return (
    <MainLayout title="Home">
      <section id="hero">
        <h1>Full Stack Developer</h1>
        <h3>Addison Amin Reyes Cedano</h3>
        <p>
          Full Stack Developer specializing in TypeScript, React.js, Express.js,
          Node.js, and MongoDB. I build end-to-end web applications with a focus
          on robust APIs, efficient data architecture, and seamless
          integrations. Particularly interested in interactive web experiences
          and web-based games, where performance optimization and complex logic
          meet engaging user experiences.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/AddisonReyes"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/addison-reyes-9aa017208/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </section>

      <section id="about">
        <h2>About me</h2>
        <p>
          I am a software engineer specialized in full stack development, I
          write code since 2021, my favorite programming languajes are
          TypeScript and Python
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        {skillsList}
      </section>

      <section id="featured-projects">
        <h2>Featured projects</h2>
        <div>
          <h3>Project 1</h3>
          <p>Description</p>
        </div>
      </section>

      <section id="contact">
        <h2>Get in touch</h2>
        <p>Let's build something amazing together</p>
        <ul>
          <li>
            <a
              href="https://github.com/AddisonReyes"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/addison-reyes-9aa017208/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default Home;
