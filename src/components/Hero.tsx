import { motion } from "framer-motion";
import { AmbientBlobs } from "./ui/AmbientBlobs";
import { MagneticButton } from "./ui/MagneticButton";
import { AnimatedStat } from "./ui/AnimatedStat";
import { HeroVisual } from "./ui/HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <AmbientBlobs />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy-600 bg-navy-800/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-sky-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-400" />
            Dados & BI · Fundador da ADDAI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-mist-100 sm:text-6xl lg:text-7xl"
          >
            Cauan Lima
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-display text-xl text-sky-300 sm:text-2xl"
          >
            Transformo dados em decisões.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg"
          >
            Combino Business Intelligence, automação e inteligência artificial para
            simplificar processos e entregar clareza a quem precisa decidir rápido —
            com soluções simples, consistentes e confiáveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projetos">Ver projetos</MagneticButton>
            <MagneticButton href="#contato" variant="outline">
              Fale comigo
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-8 border-t border-navy-700 pt-8 sm:grid-cols-4"
          >
            <AnimatedStat value={3} suffix="+" label="Anos de experiência" />
            <AnimatedStat value={5} suffix="" label="Produtos & sistemas" />
            <AnimatedStat value={80} suffix="%" label="Menos tarefas manuais" />
            <AnimatedStat value={38} suffix="%" label="Ganho de performance" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
