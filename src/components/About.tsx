import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const facts = [
  { label: "Nome", value: "Cauan Lima" },
  { label: "Atuação", value: "Dados, BI & Produtos digitais" },
  { label: "Foco atual", value: "Cloud computing · Azure & Data Factory" },
  { label: "Disponibilidade", value: "Aberto a novas oportunidades" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Sobre mim" title="Dados, contexto e um pouco de curiosidade." />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-mist-300 sm:text-lg">
              <p>
                Sou um profissional de dados com mais de{" "}
                <span className="text-mist-100">3 anos de experiência</span> em Business
                Intelligence, análise de dados e integração de sistemas. Tenho domínio
                prático de SQL e Excel no dia a dia, além de conhecimento em Power BI e
                Python (Pandas, NumPy) — ferramentas que venho aprimorando por meio de
                estudos contínuos e projetos próprios.
              </p>
              <p>
                Atualmente, estou me especializando em soluções de{" "}
                <span className="text-sky-300">cloud computing</span>, com foco em
                Microsoft Azure e Data Factory. Atuo na modelagem de dados, automação de
                relatórios e geração de insights para apoiar decisões estratégicas, com
                experiência em DevExpress, bancos NoSQL (MongoDB), sistemas de CRM e
                projetos de migração de infraestrutura.
              </p>
              <p>
                Busco oportunidades para aplicar e expandir minhas habilidades em
                ambientes orientados por dados e inovação.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-navy-700 bg-navy-800/50 p-8">
              <dl className="space-y-6">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 border-b border-navy-700 pb-4 last:border-0 last:pb-0">
                    <dt className="font-mono text-xs uppercase tracking-wider text-mist-500">
                      {fact.label}
                    </dt>
                    <dd className="font-display text-lg text-mist-100">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
