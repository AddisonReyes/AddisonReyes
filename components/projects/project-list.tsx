import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-24">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="group">
      <div className="project-grid grid grid-cols-1 gap-8 items-center">
        <ProjectMedia project={project} flipped={index % 2 === 1} />
        <div
          className={`space-y-4 ${index % 2 === 1 ? "project-copy-first" : ""}`}
        >
          <h4 className="font-libre text-white text-3xl xl:text-[3rem] font-bold leading-none">
            {project.name}
          </h4>
          <p className="text-white/72 font-libre text-lg leading-relaxed max-w-xl">
            {project.description || project.summary}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/68 text-xs font-nav tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            {project.codeUrl ? (
              <ProjectLink
                href={project.codeUrl}
                label="Source"
                projectName={project.name}
              />
            ) : null}
            {project.docsUrl ? (
              <ProjectLink
                href={project.docsUrl}
                label="API Docs"
                projectName={project.name}
              />
            ) : null}
            {project.liveUrl ? (
              <ProjectLink
                href={project.liveUrl}
                label="Website"
                projectName={project.name}
                primary
              />
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectMedia({
  project,
  flipped,
}: {
  project: Project;
  flipped: boolean;
}) {
  return (
    <div
      className={`project-media relative aspect-[2/1] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_12px_28px_rgba(0,0,0,0.1)] ${
        flipped ? "project-media-last" : ""
      }`}
    >
      {project.image ? (
        <>
          <Image
            src={project.image.src}
            alt=""
            fill
            aria-hidden
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-3xl saturate-125"
          />
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="relative z-[1] object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </>
      ) : (
        <div className="relative z-[1] flex aspect-[16/9] w-full flex-col justify-between bg-gradient-to-br from-white/[0.05] via-fuchsia-950/20 to-white/[0.02] p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/80 font-nav font-semibold">
            Client Project
          </div>
          <div className="max-w-[16rem] font-libre text-3xl md:text-4xl leading-tight text-white">
            {project.name}
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-fuchsia-400/60 to-transparent" />
        </div>
      )}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function ProjectLink({
  href,
  label,
  projectName,
  primary = false,
}: {
  href: string;
  label: string;
  projectName: string;
  primary?: boolean;
}) {
  const Icon = label === "Source" ? Github : ExternalLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${projectName}`}
      className={
        primary
          ? "inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-fuchsia-700"
          : "inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-nav font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-fuchsia-500/25 hover:text-fuchsia-300"
      }
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}
