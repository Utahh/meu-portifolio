import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#proposito", label: "Propósito" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-950/80 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-mist-100">
          C<span className="text-terracotta-400">L</span>
          <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-400 align-middle" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-mist-300 transition-colors hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden rounded-full border border-mist-500/40 px-5 py-2 font-mono text-xs uppercase tracking-wider text-mist-100 transition-colors hover:border-terracotta-400 hover:text-terracotta-300 md:inline-block"
        >
          Vamos conversar
        </a>

        <button
          aria-label="Abrir menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-px w-6 bg-mist-100"
          />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-px w-6 bg-mist-100" />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-px w-6 bg-mist-100"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-navy-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-display text-lg text-mist-100 border-b border-navy-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-sky-500 px-5 py-3 text-center font-display text-sm font-semibold text-navy-950"
              >
                Vamos conversar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
