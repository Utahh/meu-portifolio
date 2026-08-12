import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function MagneticButton({ children, href, variant = "solid", className = "" }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-sky-500 text-navy-950 hover:bg-sky-400"
      : "border border-mist-500/40 text-mist-100 hover:border-terracotta-400 hover:text-terracotta-300";

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
