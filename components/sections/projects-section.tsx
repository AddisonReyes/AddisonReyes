import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectList } from "@/components/projects/project-list";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

type ProjectsSectionProps = {
  id: string;
  kicker: string;
  title: string;
  copy: string;
  projects: Project[];
  showGameCard?: boolean;
};

export function ProjectsSection({
  id,
  kicker,
  title,
  copy,
  projects,
  showGameCard = false,
}: ProjectsSectionProps) {
  return (
    <section id={id} className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader kicker={kicker} title={title} copy={copy} />
        <ProjectList projects={projects} />
        {showGameCard ? <GameDevelopmentCard /> : null}
      </div>
    </section>
  );
}

function GameDevelopmentCard() {
  return (
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
              Games and assets
            </div>
            <div className="font-libre text-white/65 mt-2 leading-relaxed">
              My itch.io portfolio includes indie games, prototypes, pixel art,
              gameplay ideas, graphics experiments, and smaller interactive
              work. Asset packs are also available for game developers and
              hobbyists. Check it out!
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white transition-colors font-libre w-full sm:w-auto">
            <ExternalLink className="w-4 h-4" />
            <span>Itch.io</span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
