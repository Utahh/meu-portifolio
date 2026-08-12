import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Marquee } from "./ui/Marquee";
import { skillGroups } from "../data/skills";

const marqueeItems = skillGroups.flatMap((group) => group.items);

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Caixa de ferramentas" title="Skills & tecnologias" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-navy-700 bg-navy-800/40 p-7 transition-colors hover:border-sky-500/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-mist-100">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-terracotta-400">
                    {group.note}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-navy-600 px-3 py-1.5 font-mono text-xs text-mist-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-navy-700">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
