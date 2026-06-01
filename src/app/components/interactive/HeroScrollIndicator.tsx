import { motion } from "motion/react";
import { scrollTo } from "@/app/lib/scroll";

export function HeroScrollIndicator() {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => scrollTo("services")}
      className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-3 data-cursor-hover"
      aria-label="Scroll to explore plans">
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 transition-colors group-hover:text-amber-400/80">
        Scroll
      </span>
      <div className="scroll-indicator-line relative h-14 w-px overflow-hidden rounded-full bg-white/10">
        <div className="scroll-indicator-flow absolute inset-x-0 top-0 h-full w-full" />
      </div>
    </motion.button>
  );
}
