import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/contact/contact-section";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="site-shell min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-grow flex flex-col gap-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection
          id="projects"
          kicker="Selected work"
          title="Featured projects"
          copy="A few projects around backend systems, product logic, deployment, and simple interfaces."
          projects={projects}
          showGameCard
        />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
