import { Reveal } from "./reveal";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
  compact?: boolean;
};

export function SectionHeader({
  kicker,
  title,
  copy,
  align = "center",
  compact = false
}: SectionHeaderProps) {
  const alignment = align === "left" ? "text-center md:text-left" : "text-center";

  return (
    <>
      <Reveal
        className={`text-xs uppercase tracking-[0.35em] text-fuchsia-400/80 font-nav font-semibold mb-4 ${alignment}`}
      >
        {kicker}
      </Reveal>
      <Reveal as="h3" className={`font-libre text-white text-3xl mb-5 ${alignment}`}>
        {title}
      </Reveal>
      {copy ? (
        <Reveal
          as="p"
          className={`text-white/65 font-libre ${alignment} max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${compact ? "mb-12" : "mb-16"} leading-relaxed`}
        >
          {copy}
        </Reveal>
      ) : null}
    </>
  );
}
