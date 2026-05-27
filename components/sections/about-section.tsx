import { aboutParagraphs } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionHeader kicker="Background" title="About me" align="left" />

        <Reveal className="space-y-6 text-white/90 text-lg font-libre leading-relaxed">
          <p>{aboutParagraphs[0]}</p>
          <p>{aboutParagraphs[1]}</p>
          <p>{aboutParagraphs[2]}</p>
          <p>{aboutParagraphs[3]}</p>
          <p>{aboutParagraphs[4]}</p>
        </Reveal>
      </div>
    </section>
  );
}
