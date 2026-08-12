import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedStat({ value, suffix = "", label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <motion.span className="font-display text-3xl font-bold text-mist-100 sm:text-4xl">
        {display}
        <span className="text-terracotta-400">{suffix}</span>
      </motion.span>
      <span className="font-mono text-xs uppercase tracking-wider text-mist-500">{label}</span>
    </div>
  );
}
