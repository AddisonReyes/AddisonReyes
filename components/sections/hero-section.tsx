import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { hero, primaryLinks } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";

const heroActions = [
  {
    label: "Contact Me",
    href: primaryLinks.email,
    ariaLabel: "Email Addison Reyes",
    icon: Mail,
    primary: true
  },
  {
    label: "Resume",
    href: primaryLinks.resume,
    ariaLabel: "Open Addison Reyes resume PDF",
    icon: FileText
  },
  {
    label: "LinkedIn",
    href: primaryLinks.linkedin,
    ariaLabel: "Open Addison Reyes on LinkedIn",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: primaryLinks.github,
    ariaLabel: "Open Addison Reyes on GitHub",
    icon: Github
  }
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Reveal
          as="h1"
          immediate
          className="font-libre text-white mb-3 md:text-5xl text-3xl font-bold"
        >
          {hero.name}
        </Reveal>
        <Reveal
          as="h2"
          immediate
          delayClass="delay-100"
          className="font-libre text-fuchsia-400 mb-6 md:text-2xl text-xl tracking-wide"
        >
          {hero.role}
        </Reveal>
        <Reveal
          as="p"
          immediate
          delayClass="delay-200"
          className="text-white/80 max-w-3xl mx-auto mb-10 text-lg leading-relaxed font-libre"
        >
          {hero.summary}
        </Reveal>

        <Reveal
          immediate
          delayClass="delay-300"
          className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center"
        >
          {heroActions.map((action) => (
            <HeroAction key={action.label} {...action} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function HeroAction({
  label,
  href,
  ariaLabel,
  icon: Icon,
  primary = false
}: (typeof heroActions)[number]) {
  return (
    <a
      href={href}
      target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
      rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={
        primary
          ? "col-span-2 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white transition-colors font-libre"
          : "col-span-1 flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-2 border border-white/40 rounded-full text-white hover:bg-white/10 transition-all font-libre"
      }
    >
      <Icon className="w-[18px] h-[18px]" />
      {label}
    </a>
  );
}
