import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="relative border-y border-navy-700 bg-navy-950/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Trajetória" title="Experiência profissional" />

        <div className="mt-14 space-y-10">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.1}>
              <div className="grid grid-cols-1 gap-6 rounded-2xl border border-navy-700 bg-navy-800/40 p-8 lg:grid-cols-[1fr_2fr]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta-400">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-mist-100">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-mist-500">{item.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist-300">{item.summary}</p>
                </div>

                <ul className="space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
