import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-terracotta-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-mist-100 sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
