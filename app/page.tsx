import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { externalProjects, projects } from "@/data/projects";
import { education, experience } from "@/data/profile";

export default function Home() {
  return (
    <div className="site-shell min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-grow flex flex-col gap-8">
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <TimelineSection
          id="experience"
          kicker="Experience"
          title="Professional experience"
          items={experience}
        />
        <TimelineSection
          id="education"
          kicker="Education"
          title="Academic background"
          items={education}
          columns
        />
        <ProjectsSection
          id="projects"
          kicker="Selected work"
          title="Featured projects"
          copy="Selected projects that show my approach to frontend interfaces, backend systems, product logic, and maintainable implementation."
          projects={projects}
          showGameCard
        />
        <ProjectsSection
          id="client-work"
          kicker="External work"
          title="Client and freelance work"
          copy="External web projects built for other teams and businesses, showing that I can work from requirements to launch-ready implementation."
          projects={externalProjects}
        />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
