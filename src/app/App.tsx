import { HashRouter as Router, Routes, Route, useLocation } from "react-router";
import React from "react";

import { FeaturedProjects } from "./components/FeaturedProjects.js";
import { ProjectsPage } from "./components/ProjectsPage.js";
import { Contact } from "./components/Contact.js";
import { Navbar } from "./components/Navbar.js";
import { Skills } from "./components/Skills.js";
import { Footer } from "./components/Footer.js";
import { About } from "./components/About.js";
import { Hero } from "./components/Hero.js";
import { useEffect } from "react";
import { Toaster } from "sonner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main className="bg-[#121212] flex-grow">
    <Hero />
    <About />
    <Skills />
    <FeaturedProjects />
    <Contact />
  </main>
);

const AboutPage = () => (
  <main className="bg-[#121212] pt-32 pb-20 flex-grow">
    <About />
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="font-['Libre_Baskerville'] text-fuchsia-500 text-3xl mb-10">
        My Story
      </h3>
      <div className="space-y-6 text-white/90 text-lg font-['Libre_Baskerville'] leading-relaxed italic">
        <p>
          I began my software development journey in 2021, learning through
          books and online courses. My first programming language was C++,
          guided by Deitel & Deitel's "C++ How to Program" and YouTube channels
          like "Programación ATS". After grasping the fundamentals, I moved on
          to Python for data science and machine learning when I enrolled at
          ITLA to study Artificial Intelligence — though I soon discovered that
          my true passion lay in game development and full-stack development.
        </p>
        <p>
          Today, I am pursuing a Software Engineering degree at UNICARIBE
          (Universidad del Caribe, Dominican Republic), and I specialize in
          full-stack development, with a strong focus on TypeScript, React,
          Node.js, and Express. I am passionate about writing clean, efficient
          code and am always eager to learn new technologies and best practices.
          I also have a deep interest in game development — currently exploring
          the Kaplay.js library for HTML5 games — and plan to contribute to open
          source game projects in the future.
        </p>
      </div>
    </div>
  </main>
);

const ContactPage = () => (
  <main className="bg-[#121212] pt-32 flex-grow min-h-[calc(100vh-80px)]">
    <Contact />
  </main>
);

export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#121212]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </div>
    </Router>
  );
}
