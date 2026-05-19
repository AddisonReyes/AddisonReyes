import { capabilities } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function CapabilitiesSection() {
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
            <Reveal
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h4 className="font-libre text-white text-xl mb-3">{item.title}</h4>
              <p className="font-libre text-white/65 leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
