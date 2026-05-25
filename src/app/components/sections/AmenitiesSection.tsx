import type { ElementType } from "react";
import { Sparkles } from "lucide-react";
import { AMENITIES } from "@/app/data/content";
import { headingFont, sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

function AmenityCard({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <div className="group flex h-full flex-col items-center rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/[0.08]">
      <div className="mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100/80">
        <Icon className="h-10 w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
      </div>
      <p
        className="text-sm font-semibold leading-snug text-[#07071A]"
        style={headingFont}>
        {label}
      </p>
    </div>
  );
}

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="overflow-hidden bg-[#F5F5FF] px-5 py-28 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          pill={
            <>
              <Sparkles className="h-3 w-3" />
              Amenities
            </>
          }
          description="From high-speed connectivity to on-site support — every detail is managed so you can focus entirely on your work.">
          Everything included
          <br />
          <span className={sectionHeadingGradient}>in your workspace</span>
        </SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {AMENITIES.map((amenity, i) => (
            <FadeUp key={amenity.label} delay={i * 0.05}>
              <AmenityCard icon={amenity.icon} label={amenity.label} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
