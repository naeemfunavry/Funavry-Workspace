import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Building2, Check, Sparkles, Zap } from "lucide-react";
import { SERVICES, type Service } from "@/app/data/content";
import { headingFont, sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { cn } from "@/app/components/ui/utils";
import { ServiceButton } from "./ServiceButton";

type ServicesSectionProps = {
  onBook: (service: string) => void;
};

const INCLUDED = [
  "High-speed fiber",
  "Premium coffee bar",
  "24/7 security",
  "Reception services",
];

function ServiceCard({
  service,
  index,
  onBook,
}: {
  service: Service;
  index: number;
  onBook: (title: string) => void;
}) {
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
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
              <span
                className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#07071A]/20"
                style={headingFont}>
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
            <h3
              className="text-[22px] font-bold leading-tight text-[#07071A]"
              style={headingFont}>
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
                )}
                style={headingFont}>
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

export function ServicesSection({ onBook }: ServicesSectionProps) {
  const primaryTiers = SERVICES.slice(0, 3);
  const secondaryTiers = SERVICES.slice(3);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F8FD] px-5 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[#3B85C4]/[0.07] blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-[#F59E0B]/[0.06] blur-[120px]"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,7,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,7,26,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          pill={
            <>
              <Building2 className="h-3 w-3" />
              Plans & Pricing
            </>
          }
          description={`Transparent pricing for every stage — from solo freelancers to enterprise teams building Islamabad's future.`}
          afterDescription={
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Zap, label: "From PKR 10K/mo" },
                { icon: Sparkles, label: "5 flexible tiers" },
              ].map(({ icon: BadgeIcon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#374151] shadow-sm backdrop-blur-sm">
                  <BadgeIcon className="h-3.5 w-3.5 text-[#3B85C4]" />
                  {label}
                </span>
              ))}
            </div>
          }>
          Workspace tiers for
          <br />
          <span className={sectionHeadingGradient}>every ambition</span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {primaryTiers.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onBook={onBook}
            />
          ))}
        </div>

        <div className="mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {secondaryTiers.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i + 3}
              onBook={onBook}
            />
          ))}
        </div>

        <FadeUp delay={0.15} className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/60 p-6 shadow-[0_8px_40px_-12px_rgba(7,7,26,0.08)] backdrop-blur-md sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B85C4]/[0.04] via-transparent to-[#F59E0B]/[0.04]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <motion.div>
                <p
                  className="text-sm font-bold text-[#07071A]"
                  style={headingFont}>
                  Every plan includes
                </p>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  Premium amenities at no extra cost — focus on your work, not
                  logistics.
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-2.5">
                {INCLUDED.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.05] bg-white px-3 py-1.5 text-xs font-medium text-[#4B5563]">
                    <Check className="h-3 w-3 text-[#3B85C4]" strokeWidth={3} />
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onBook("Book a Tour")}
                className="group inline-flex flex-shrink-0 items-center gap-2 rounded-2xl bg-[#07071A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#07071A]/90 hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]">
                Book a tour
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
