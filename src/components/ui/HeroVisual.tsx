import { motion } from "framer-motion";

const chips = [
  { label: "SQL", className: "left-[-6%] top-[12%]", delay: 0 },
  { label: "Power BI", className: "right-[-8%] top-[28%]", delay: 1.2 },
  { label: "Python", className: "left-[-2%] bottom-[18%]", delay: 0.6 },
  { label: "Azure", className: "right-[-4%] bottom-[6%]", delay: 1.8 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-sky-500/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-dashed border-terracotta-500/25"
      />

      {/* Substitua o miolo abaixo por <img src="/profile.jpg" className="h-full w-full rounded-full object-cover" /> quando a foto estiver disponível */}
      <div className="absolute inset-[14%] flex items-center justify-center rounded-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 shadow-2xl shadow-black/40 ring-1 ring-sky-500/20">
        <span className="font-display text-6xl font-bold text-mist-100">
          C<span className="text-terracotta-400">L</span>
        </span>
      </div>

      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: chip.delay, ease: "easeInOut" }}
          className={`absolute ${chip.className} rounded-full border border-navy-600 bg-navy-800/90 px-4 py-2 font-mono text-xs text-mist-300 shadow-lg backdrop-blur-sm`}
        >
          {chip.label}
        </motion.div>
      ))}

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute -right-2 top-2 flex items-center gap-2 rounded-full bg-navy-950 px-3 py-1.5 ring-1 ring-sky-500/40"
      >
        <span className="h-2 w-2 rounded-full bg-sky-400" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-sky-300">
          Disponível
        </span>
      </motion.div>
    </div>
  );
}
