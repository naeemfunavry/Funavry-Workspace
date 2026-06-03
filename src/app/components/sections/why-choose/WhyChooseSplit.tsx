import { useMemo, useState } from "react";
import { WHY_CHOOSE_SPLIT, WHY_ITEMS } from "@/app/data/content";
import { FadeUp } from "@/app/components/shared/FadeUp";

export function WhyChooseSplit() {
  const { mainImage, features } = WHY_CHOOSE_SPLIT;
  const [activeIndex, setActiveIndex] = useState(0);

  const featureCards = useMemo(
    () =>
      features.map((feature, index) => ({
        ...feature,
        image:
          WHY_ITEMS[index]?.image != null
            ? {
                src: WHY_ITEMS[index].image,
                alt: WHY_ITEMS[index].title,
              }
            : mainImage,
        number: String(index + 1).padStart(2, "0"),
      })),
    [features, mainImage],
  );

  return (
    <FadeUp delay={0.08} className="mb-16 lg:mb-20">
      <div className="">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="flex flex-col">
            <div className="space-y-2">
              {featureCards.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={`${feature.title}-${feature.number}`}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full rounded-lg border p-5 text-left transition-all duration-300 ease-out sm:p-6 ${
                      isActive
                        ? "border-[#F59E0B] bg-[#FFFBEB]/80"
                        : "border-black/[0.06] hover:bg-black/[0.02]"
                    }`}>
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-heading text-2xl leading-none tracking-tight transition-colors duration-300 sm:text-[1.6rem] ${
                          isActive ? "text-[#D97706]" : "text-[#D1D5DB]"
                        }`}>
                        {feature.number}
                      </span>
                      <div className="min-w-0 pt-1">
                        <h4 className="text-[1.03rem] font-medium tracking-tight text-[#07071A] sm:text-[1.08rem]">
                          {feature.title}
                        </h4>
                        {/* <p className="mt-2 text-sm leading-relaxed text-[#C3C8D6]">
                          {feature.description}
                        </p> */}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#F5F5FF] shadow-[0_20px_50px_rgba(7,7,26,0.08)]">
            {featureCards.map((feature, index) => (
              <img
                key={`${feature.title}-${feature.number}`}
                src={feature.image.src}
                alt={feature.image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.02] opacity-0"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07071A]/50 via-[#07071A]/15 to-transparent"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[20px] border border-white/80 bg-white/80 p-5 shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-6">
              <h3 className="text-lg font-medium leading-tight text-[#07071A] sm:text-[1.5rem]">
                {featureCards[activeIndex]?.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
                {featureCards[activeIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
