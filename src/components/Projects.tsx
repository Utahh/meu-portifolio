import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { company, projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative border-y border-navy-700 bg-navy-950/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Selected work" title="Projetos & produtos" />

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-terracotta-500/30 bg-gradient-to-br from-navy-800 via-navy-800/80 to-navy-900 p-8 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-300">
              {company.role}
            </span>
            <h3 className="mt-2 font-display text-3xl font-bold text-mist-100">
              {company.name}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist-300">
              {company.description}
            </p>
          </div>
        </Reveal>

        {/* Adicione logos/prints em /public/projects e referencie via Project["image"] quando disponíveis */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={0.15 + index * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-700 bg-navy-800/40 p-7 transition-colors hover:border-sky-500/40">
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-70 ${
                    project.accent === "sky" ? "bg-sky-500/20" : "bg-terracotta-500/20"
                  }`}
                />
                <div className="relative">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      project.accent === "sky" ? "text-sky-300" : "text-terracotta-300"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <h4 className="mt-2 font-display text-xl font-semibold text-mist-100">
                    {project.name}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-mist-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
