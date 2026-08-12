import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";
import { AmbientBlobs } from "./ui/AmbientBlobs";
import { contact } from "../data/contact";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden py-28">
      <AmbientBlobs />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-sky-400">
            Vamos conversar
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-mist-100 sm:text-5xl">
            Tem um problema de dados para resolver?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            Se você precisa transformar dados em decisões — ou construir um produto do
            zero — vamos conversar sobre como posso ajudar.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-9 flex justify-center">
          <MagneticButton href={`mailto:${contact.email}`}>{contact.email}</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
