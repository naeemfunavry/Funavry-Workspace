import type { ElementType } from "react";
import { Sparkles } from "lucide-react";
import { AMENITIES } from "@/app/data/content";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import "./amenities-grid.css";

function AmenityCard({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <div className="group flex h-full flex-col items-start p-6 text-left sm:p-7 lg:p-8 transition-colors duration-300 hover:bg-white/[0.04]">
      <div className="mb-4 flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.08] transition-colors duration-300 group-hover:bg-white/[0.12]">
        <Icon className="h-10 w-10 flex-shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-105" />
      </div>
      <p className="text-base font-light leading-snug text-white/80">{label}</p>
    </div>
  );
}

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-[#0B0B20] px-5 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[560px] w-[560px] rounded-full bg-[#ffffff]/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[560px] w-[560px] rounded-full bg-[#2E7BC4]/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          dark
          pill={
            <>
              <Sparkles className="h-3 w-3" />
              Amenities
            </>
          }
          description="From high-speed connectivity to on-site support every detail is managed so you can focus entirely on your work.">
          Everything included
          <br />
          <span className={sectionHeadingGradient}>in your workspace</span>
        </SectionHeading>

        <div className="amenities-grid">
          {AMENITIES.map((amenity, i) => (
            <FadeUp
              key={amenity.label}
              delay={i * 0.05}
              className="amenity-cell h-full">
              <AmenityCard icon={amenity.icon} label={amenity.label} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
