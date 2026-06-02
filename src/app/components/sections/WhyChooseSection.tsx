import { Star } from "lucide-react";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import {
  WhyChooseAccordion,
  WhyChooseSplit,
} from "@/app/components/sections/why-choose";

export function WhyChooseSection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#0B0B20] py-28 px-5 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[560px] w-[560px] rounded-full bg-[#ffffff]/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[560px] w-[560px] rounded-full bg-[#2E7BC4]/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          dark
          pill={
            <>
              <Star className="h-3 w-3" />
              Why Funavry
            </>
          }
          description="More than office space an environment where ambitious professionals and innovative companies build, connect, and grow together in the heart of Islamabad.">
          Why choose
          <br />
          <span className={sectionHeadingGradient}>Funavry?</span>
        </SectionHeading>

        <FadeUp delay={0.08}>
          <WhyChooseSplit />
        </FadeUp>
        {/* <FadeUp delay={0.05} className="relative left-1/2  -translate-x-1/2">
          <WhyChooseAccordion />
        </FadeUp> */}

        <FadeUp delay={0.12} className="mt-14 lg:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/15 via-[#2E7BC4]/18 to-[#F59E0B]/10" />
            <div className="relative flex flex-col items-center gap-6 px-8 py-10 sm:flex-row sm:px-14 sm:py-12">
              <div className="font-heading flex-shrink-0 select-none text-5xl font-extrabold leading-none text-white/10">
                "
              </div>
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                At Funavry, we offer more than just office space an environment
                where ambitious professionals and innovative companies can{" "}
                <span className="font-semibold text-white">
                  build, connect, and grow
                </span>{" "}
                together in the heart of Islamabad.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
