import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  dark?: boolean;
};

export function Pill({ children, dark = true }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase ${
        dark
          ? "bg-white/[0.08] text-amber-400 border border-white/[0.12]"
          : "bg-amber-50 text-amber-600 border border-amber-100"
      }`}>
      {children}
    </span>
  );
}
