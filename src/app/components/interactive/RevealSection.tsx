import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealSection({
  children,
  className = "",
  delay = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
