import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";

import { FeaturedProjects } from "./components/FeaturedProjects.tsx";
import { ProjectsPage } from "./components/ProjectsPage.tsx";
import { Contact } from "./components/Contact.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Skills } from "./components/Skills.tsx";
import { Footer } from "./components/Footer.tsx";
import { About } from "./components/About.tsx";
import { Hero } from "./components/Hero.tsx";
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
          I started my journey into software development with a passion for
          building interactive digital experiences. Over the years, I've honed
          my skills in the JavaScript ecosystem, moving from basic frontend
          development to architecting complex full-stack applications.
        </p>
        <p>
          My focus on performance optimization and robust data structures comes
          from my interest in web gaming. I believe that a great user experience
          starts with a solid foundation, which is why I spend considerable time
          on API design and database efficiency.
        </p>
        <p>
          When I'm not coding, I'm usually exploring new web technologies or
          experimenting with different design patterns. I value clean code,
          documentation, and the power of collaborative problem-solving.
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
    <Router>
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
