import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import type { Service } from "@/app/data/content";
import { cardTitleClass } from "@/app/lib/styles";
import { cn } from "@/app/components/ui/utils";
import { ServiceButton } from "../ServiceButton";

type ServiceCardProps = {
  service: Service;
  index: number;
  onBook: (title: string) => void;
  animateOnView?: boolean;
};

export function ServiceCard({
  service,
  index,
  onBook,
  animateOnView = true,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const Icon = service.icon;
  const isPopular = Boolean(service.popular);
  const isEnterprise = service.price === "Custom";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
      initial={animateOnView ? { opacity: 0, y: 32 } : false}
      whileInView={animateOnView ? { opacity: 1, y: 0 } : undefined}
      viewport={animateOnView ? { once: true, margin: "-40px" } : undefined}
      transition={
        animateOnView
          ? {
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }
          : undefined
      }
      className={cn("group relative h-full", isPopular && "lg:z-10 lg:-my-3")}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative h-full rounded-[28px] p-[1px] transition-shadow duration-500",
          isPopular
            ? "bg-gradient-to-b from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-[0_24px_80px_-12px_rgba(245,158,11,0.35)]"
            : "bg-gradient-to-b from-black/[0.08] to-black/[0.03] hover:from-black/[0.12] hover:to-black/[0.05] hover:shadow-[0_20px_60px_-16px_rgba(7,7,26,0.12)]",
        )}>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-500"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `radial-gradient(520px circle at ${spotlight.x}px ${spotlight.y}px, ${service.accent}18, transparent 42%)`,
          }}
        />

        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, ${service.accent}22, transparent 50%)`,
          }}
        />

        <motion.div
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-[27px] p-7 sm:p-8",
            isPopular
              ? "bg-gradient-to-b from-[#FFFBEB] via-white to-white"
              : "bg-white/90 backdrop-blur-sm",
          )}>
          {isPopular && (
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          )}

          <motion.div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `${service.accent}12`,
              opacity: isPopular ? 0.8 : 0.4,
            }}
          />

          <motion.div className="relative mb-6 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.04] shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{ background: `${service.accent}14` }}>
                <Icon
                  className="h-[19px] w-[19px]"
                  style={{ color: service.accent }}
                />
              </motion.div>
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-[#07071A]/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {isPopular && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-amber-500/25">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </span>
            )}
          </motion.div>

          <div className="relative flex-1">
            <h3 className={`${cardTitleClass} text-[#07071A]`}>
              {service.title}
            </h3>
            <p
              className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: service.accent }}>
              {service.tagline}
            </p>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#6B7280]">
              {service.description}
            </p>

            <div className="mt-7 flex items-end gap-1.5 border-b border-black/[0.06] pb-7">
              {service.price !== "Custom" && (
                <span className="mb-1 text-xs font-medium text-[#9CA3AF]">
                  PKR
                </span>
              )}
              <span
                className={cn(
                  "font-extrabold tracking-tight text-[#07071A]",
                  isEnterprise ? "text-[28px]" : "text-[40px] leading-none",
                )}>
                {service.price}
              </span>
              <span className="mb-1 text-sm text-[#9CA3AF]">
                {service.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {service.features.map((feature, fi) => (
                <li
                  key={fi}
                  className="flex items-start gap-3 text-[13.5px] leading-snug text-[#4B5563]">
                  <span
                    className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${service.accent}16` }}>
                    <Check
                      className="h-2.5 w-2.5"
                      style={{ color: service.accent }}
                      strokeWidth={3}
                    />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8">
            <ServiceButton
              accent={service.accent}
              price={service.price}
              onClick={() => onBook(service.title)}
            />
            <p className="mt-3 space-y-1 text-[11px] leading-snug text-[#9CA3AF]">
              <span className="block">
                *Price is per seat and exclusive of sales tax
              </span>
              <span className="block">
                *Electricity and Power Backup surcharge may apply
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
