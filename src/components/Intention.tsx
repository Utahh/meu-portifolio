import { Reveal } from "./ui/Reveal";

export function Intention() {
  return (
    <section id="proposito" className="relative border-y border-navy-700 bg-navy-950/60 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-sky-400">
            Por que eu faço isso
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 font-display text-2xl font-semibold leading-snug text-mist-100 sm:text-3xl lg:text-4xl">
            Gosto de <span className="text-terracotta-400">facilitar a vida das pessoas</span> e
            resolver problemas.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            Sou movido por curiosidade e aprendizado constante — e uso isso para
            transformar dados brutos em soluções simples, consistentes e confiáveis,
            que realmente resolvem problemas reais para quem depende deles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
