import { TimelineItem } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

type TimelineSectionProps = {
  id: string;
  kicker: string;
  title: string;
  items: TimelineItem[];
  columns?: boolean;
};

export function TimelineSection({
  id,
  kicker,
  title,
  items,
  columns = false
}: TimelineSectionProps) {
  return (
    <section id={id} className="py-20 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SectionHeader kicker={kicker} title={title} align="left" />

        <Reveal className={columns ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-fuchsia-400/80 font-nav font-semibold mb-3">
                {item.date}
              </div>
              <h4 className="font-libre text-white text-xl mb-3">{item.title}</h4>
              <p className="font-libre text-white/65 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
