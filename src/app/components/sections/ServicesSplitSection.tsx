import { motion } from "motion/react";
import { ArrowRight, Building2, Check, Sparkles, Zap } from "lucide-react";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { ServicesSplit } from "@/app/components/sections/services";

type ServicesSplitSectionProps = {
  onBook: (service: string) => void;
};
const INCLUDED = [
  "High-speed fiber",
  "Premium coffee bar",
  "24/7 security",
  "Reception services",
];

export function ServicesSplitSection({ onBook }: ServicesSplitSectionProps) {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#ffffff] px-5 py-28 lg:px-8">
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
              Compare Plans
            </>
          }
          description={`Hover a tier on the right to preview the full plan card on the left same pricing, features, and booking in one glance.`}
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
          Explore workspace
          <br />
          <span className={sectionHeadingGradient}>tiers interactively</span>
        </SectionHeading>

        <FadeUp delay={0.08}>
          <ServicesSplit onBook={onBook} />
        </FadeUp>
        <FadeUp delay={0.15} className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/60 p-6 shadow-[0_8px_40px_-12px_rgba(7,7,26,0.08)] backdrop-blur-md sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B85C4]/[0.04] via-transparent to-[#F59E0B]/[0.04]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <motion.div>
                <p className="service-title font-heading text-sm font-bold text-[#07071A]">
                  Every plan includes
                </p>
                <p className="mt-1 text-[13px] text-[#6B7280]">
                  Premium amenities at no extra cost focus on your work, not
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
                className="cursor-pointer group inline-flex flex-shrink-0 items-center gap-2 rounded-2xl bg-[#07071A] px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#07071A]/90 hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]">
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
