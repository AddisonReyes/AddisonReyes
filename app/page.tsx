import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectList } from "@/components/project-list";
import { Reveal } from "@/components/reveal";
import { externalProjects, projects } from "@/data/projects";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="site-shell min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-grow flex flex-col gap-8">
        <section
          id="home"
          className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col items-center justify-center"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Reveal as="h1" immediate className="font-libre text-white mb-3 md:text-5xl text-3xl font-bold">
              Addison Amin Reyes Cedano
            </Reveal>
            <Reveal
              as="h2"
              immediate
              delayClass="delay-100"
              className="font-libre text-fuchsia-400 mb-6 md:text-2xl text-xl tracking-wide"
            >
              Fullstack Software Engineer
            </Reveal>
            <Reveal
              as="p"
              immediate
              delayClass="delay-200"
              className="text-white/80 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-libre"
            >
              I build production-ready web applications with TypeScript on the
              frontend and primarily Python on the backend, using Rust for
              performance-critical parts when speed and reliability matter, from
              responsive product interfaces to clean APIs, data models,
              automation, AI-assisted workflows, BI/reporting tools, and
              Docker-based deployment.
            </Reveal>

            <Reveal
              immediate
              delayClass="delay-300"
              className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center"
            >
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email Addison Reyes"
                className="col-span-2 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition-colors font-libre"
              >
                <Mail className="w-[18px] h-[18px]" />
                Contact Me
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Addison Reyes resume PDF"
                className="col-span-1 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 border border-white/40 rounded-full text-white hover:bg-white/10 transition-all font-libre"
              >
                <FileText className="w-[18px] h-[18px]" />
                Resume
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Addison Reyes on LinkedIn"
                className="col-span-1 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 border border-white/40 rounded-full text-white hover:bg-white/10 transition-all font-libre"
              >
                <Linkedin className="w-[18px] h-[18px]" />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Addison Reyes on GitHub"
                className="col-span-1 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 border border-white/40 rounded-full text-white hover:bg-white/10 transition-all font-libre"
              >
                <Github className="w-[18px] h-[18px]" />
                GitHub
              </a>
            </Reveal>
          </div>
        </section>

        <AboutSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <EducationSection />

        <section id="projects" className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              kicker="Selected work"
              title="Featured projects"
              copy="Selected projects that show my approach to frontend interfaces, backend systems, product logic, and maintainable implementation."
            />
            <ProjectList projects={projects} />

            <Reveal className="mt-14">
              <a
                href="https://dakotitah.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Addison Reyes game development projects on itch.io"
                className="block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-fuchsia-950/10 p-8 md:p-10 hover:border-fuchsia-500/25 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-400/80 font-nav font-semibold">
                      itch.io
                    </div>
                    <div className="font-libre text-white text-2xl md:text-3xl mt-3">
                      Game development
                    </div>
                    <div className="font-libre text-white/65 mt-2 leading-relaxed">
                      A separate space for prototypes and smaller interactive
                      projects exploring gameplay, graphics, tools, and systems.
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white transition-colors font-libre w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4" />
                    <span>Itch.io</span>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </section>

        <section id="client-work" className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              kicker="External work"
              title="Client and freelance work"
              copy="External web projects built for other teams and businesses, showing that I can work from requirements to launch-ready implementation."
            />
            <ProjectList projects={externalProjects} />
          </div>
        </section>

        <section id="contact" className="py-20 px-6 border-t border-white/5 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              kicker="Contact"
              title="Get in touch"
              copy="Available for fullstack and backend roles, backend-heavy product work, remote opportunities, AI-enabled automation, game development collaborations, and freelance work."
              compact
            />
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  copy,
  compact = false
}: {
  kicker: string;
  title: string;
  copy?: string;
  compact?: boolean;
}) {
  return (
    <>
      <Reveal className="text-xs uppercase tracking-[0.35em] text-fuchsia-400/80 font-nav font-semibold mb-4 text-center">
        {kicker}
      </Reveal>
      <Reveal as="h3" className="font-libre text-white text-3xl mb-5 text-center">
        {title}
      </Reveal>
      {copy ? (
        <Reveal
          as="p"
          className={`text-white/65 font-libre text-center max-w-2xl mx-auto ${compact ? "mb-12" : "mb-16"} leading-relaxed`}
        >
          {copy}
        </Reveal>
      ) : null}
    </>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-fuchsia-400/80 font-nav font-semibold mb-4 text-center md:text-left">
          Background
        </Reveal>
        <Reveal as="h3" className="font-libre text-white text-3xl mb-10 text-center md:text-left">
          About me
        </Reveal>

        <Reveal className="space-y-6 text-white/90 text-lg font-libre leading-relaxed">
          <p>
            I&apos;m a software engineer and fullstack developer focused on
            building reliable products end to end: responsive frontend
            interfaces, backend services, clear domain logic, automation, and
            deploy-ready systems that can move beyond a local machine.
          </p>
          <p>
            I use TypeScript for frontend product interfaces and Python as my
            main backend language, with Django and FastAPI for services, REST
            APIs, automation, reporting tools, data models, authentication, and
            server-side architecture. I use Rust for performance-critical
            systems where efficiency and reliability are worth the extra
            control.
          </p>
          <p>
            I care about writing maintainable software that is practical,
            scalable, and pleasant to use. Alongside product and backend
            engineering, I keep a strong long-term interest in systems-oriented
            work,{" "}
            <a
              href="https://dakotitah.itch.io/"
              className="text-fuchsia-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              game development
            </a>
            , and graphics programming.
          </p>
          <p>
            I&apos;m currently pursuing a Software Engineering degree at
            UNICARIBE in the Dominican Republic after completing an Associate&apos;s
            Degree in Artificial Intelligence at ITLA, and I&apos;m open to
            fullstack roles, backend roles, remote opportunities,
            collaborations, and freelance product work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Fullstack product development",
      copy: "Responsive TypeScript interfaces with React and Next.js, connected to backend APIs, authentication, database-backed features, and polished user workflows."
    },
    {
      title: "Backend systems and APIs",
      copy: "Clean Python services with Django and FastAPI, readable architecture, PostgreSQL and MongoDB data modeling, validation, auth flows, OpenAPI/Swagger docs, maintainable REST APIs, and Rust where performance-critical paths need tighter control."
    },
    {
      title: "AI, automation, and tooling",
      copy: "AI-assisted development, process automation, recommendation logic, reporting dashboards, model-training experiments, and internal tools that reduce manual work without hiding the underlying engineering."
    },
    {
      title: "Deployment-ready delivery",
      copy: "Dockerized applications, production-oriented configuration, Git/Linux workflows, CI/CD basics, AWS familiarity, static and cloud deployments, and projects prepared to run outside my local development environment."
    }
  ];

  return (
    <section id="capabilities" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          kicker="What I can do"
          title="Practical engineering from idea to deployment"
          copy="I fit best on teams that need someone who can understand the product, build the interface, design the backend, automate the repetitive parts, and ship a maintainable system."
          compact
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item) => (
            <Reveal key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h4 className="font-libre text-white text-xl mb-3">{item.title}</h4>
              <p className="font-libre text-white/65 leading-relaxed">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const roles = [
    {
      date: "May 2024 - Present",
      title: "Software Developer, SEMS SRL",
      copy: "Full-time hybrid role building backend services, business logic, RESTful APIs, Django systems, automated reporting, data exchange workflows, and internal business intelligence tools for production company operations."
    },
    {
      date: "Feb 2024 - May 2024",
      title: "Data Analyst Intern, SEMS SRL",
      copy: "Developed data analysis workflows, visualization dashboards, and automated reporting processes to improve operational visibility and reduce manual data handling."
    },
    {
      date: "Sep 2020 - Aug 2025",
      title: "IT Support Specialist, OXSIS SRL",
      copy: "Supported systems in a logistics and customs environment, including troubleshooting, maintenance, data management, process automation initiatives, and operational reliability."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-fuchsia-400/80 font-nav font-semibold mb-4 text-center md:text-left">
          Experience
        </Reveal>
        <Reveal as="h3" className="font-libre text-white text-3xl mb-10 text-center md:text-left">
          Professional experience
        </Reveal>
        <Reveal className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-400/80 font-nav font-semibold mb-3">
                {role.date}
              </div>
              <h4 className="font-libre text-white text-xl mb-3">{role.title}</h4>
              <p className="font-libre text-white/65 leading-relaxed">{role.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      date: "Apr 2025 - Present",
      title: "Software Engineering, UNICARIBE",
      copy: "Pursuing an engineering degree while continuing to build production-style web, backend, database, automation, and interactive software projects."
    },
    {
      date: "Aug 2021 - Dec 2023",
      title: "Artificial Intelligence, ITLA",
      copy: "Completed an Associate's Degree focused on artificial intelligence, with project work that supports my interest in recommendation logic, automation, and model-driven tools."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-fuchsia-400/80 font-nav font-semibold mb-4 text-center md:text-left">
          Education
        </Reveal>
        <Reveal as="h3" className="font-libre text-white text-3xl mb-10 text-center md:text-left">
          Academic background
        </Reveal>
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-400/80 font-nav font-semibold mb-3">
                {item.date}
              </div>
              <h4 className="font-libre text-white text-xl mb-3">{item.title}</h4>
              <p className="font-libre text-white/65 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
