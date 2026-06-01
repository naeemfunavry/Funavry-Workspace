import type { ElementType } from "react";
import { WHY_CHOOSE_SPLIT } from "@/app/data/content";
import {
  bodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";

function FeatureRow({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 py-6 first:pt-0 last:pb-0">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-amber-100 bg-amber-50 text-[#D97706]">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#07071A]">
          {title}
        </h4>
        <p className={`mt-2 ${sectionSubheadingClass} text-sm leading-relaxed`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhyChooseSplit() {
  const { eyebrow, title, titleAccent, description, mainImage, insetImage, features } =
    WHY_CHOOSE_SPLIT;

  return (
    <FadeUp delay={0.08} className="mb-16 lg:mb-20">
      <div className="overflow-hidden rounded-3xl border border-[#E8E8F0] bg-[#FAFAF8] shadow-[0_24px_80px_rgba(7,7,26,0.12)]">
        <div className="grid gap-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-14 lg:py-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F59E0B]" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                {eyebrow}
              </span>
            </div>

            <h3
              className={`${sectionHeadingClass} text-[clamp(1.75rem,2vw+1rem,2.5rem)] text-[#07071A]`}>
              {title}{" "}
              <span className="bg-gradient-to-r from-[#3B85C4] to-[#F59E0B] bg-clip-text font-heading italic text-transparent">
                {titleAccent}
              </span>
            </h3>

            <p className={`mt-5 max-w-xl ${bodyTextClass} text-[#4B5563]`}>
              {description}
            </p>

            <div className="mt-8 divide-y divide-[#E5E7EB]">
              {features.map((feature) => (
                <FeatureRow key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[5/6] min-h-[320px] sm:min-h-[400px]">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#07071A]/25 via-transparent to-transparent"
                aria-hidden
              />
              <img
                src={insetImage.src}
                alt={insetImage.alt}
                className="absolute bottom-5 left-5 z-10 h-[38%] w-[42%] max-w-[200px] rounded-xl border-4 border-[#FAFAF8] object-cover shadow-[0_20px_50px_rgba(7,7,26,0.22)] sm:bottom-8 sm:left-8 sm:max-w-[220px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
