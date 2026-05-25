import { Star } from "lucide-react";
import { WHY_ITEMS } from "@/app/data/content";
import { headingFont, sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

export function WhyChooseSection() {
  return (
    <section
      id="why"
      className="relative bg-[#0B0B20] py-28 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-[#2E7BC4]/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[560px] h-[560px] bg-[#F59E0B]/[0.07] rounded-full blur-[120px]" />
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
          description="More than just office space — an environment where ambitious professionals and innovative companies build, connect, and grow together in the heart of Islamabad.">
          Why choose
          <br />
          <span className={sectionHeadingGradient}>Funavry?</span>
        </SectionHeading>

        <div className="border-t border-white/[0.07]">
          {WHY_ITEMS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.055}>
              <div className="group relative border-b border-white/[0.07] grid grid-cols-1 lg:grid-cols-[80px_minmax(220px,_1fr)_minmax(0,_1.5fr)_56px] gap-y-3 lg:gap-x-10 items-center py-8 lg:py-10 pl-5 pr-4 -mx-5 hover:bg-white/[0.026] transition-colors duration-300 rounded-2xl cursor-default overflow-hidden">
                <div
                  className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  style={{ background: item.accent }}
                />

                <div className="hidden lg:flex items-center justify-center pl-2">
                  <span
                    className="text-[52px] font-black leading-none select-none text-white/[0.07] group-hover:text-white/[0.15] transition-colors duration-300"
                    style={headingFont}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-center gap-3 lg:block">
                  <span
                    className="lg:hidden text-[11px] font-bold uppercase tracking-[0.14em] flex-shrink-0 px-2 py-0.5 rounded-full border"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}40`,
                      background: `${item.accent}12`,
                    }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-[16px] lg:text-[18px] font-bold leading-snug text-white/70 group-hover:text-white transition-colors duration-300"
                    style={headingFont}>
                    {item.title}
                  </h3>
                </div>

                <p className="text-[13.5px] leading-[1.85] text-white/36 group-hover:text-white/54 transition-colors duration-300 lg:col-start-3">
                  {item.body}
                </p>

                <div className="hidden lg:flex justify-end pr-1">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `${item.accent}18`,
                      boxShadow: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        `0 0 20px ${item.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "none";
                    }}>
                    <item.icon
                      className="w-[18px] h-[18px]"
                      style={{ color: item.accent }}
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.12} className="mt-14">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E7BC4]/20 via-[#F59E0B]/12 to-[#D97706]/08" />
            <div className="relative px-8 py-10 sm:px-14 sm:py-12 flex flex-col sm:flex-row items-center gap-6">
              <div
                className="text-5xl text-white/10 font-black leading-none flex-shrink-0 select-none"
                style={headingFont}>
                "
              </div>
              <p
                className="text-white/80 text-[17px] sm:text-lg leading-relaxed"
                style={headingFont}>
                At Funavry, we offer more than just office space — an
                environment where ambitious professionals and innovative
                companies can{" "}
                <span className="text-white font-semibold">
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
