import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SlidersHorizontal, Star } from "lucide-react";
import { TESTIMONIALS } from "@/app/data/content";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { cn } from "@/app/components/ui/utils";

const AUTOPLAY_DELAY = 4000;
const VISIBLE_RADIUS = 2;
const ITEM_GAP = 88;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getCurveStyles(offset: number) {
  const abs = Math.abs(offset);
  const scale = offset === 0 ? 1 : abs === 1 ? 0.78 : abs === 2 ? 0.58 : 0.42;
  const opacity = offset === 0 ? 1 : abs === 1 ? 0.72 : abs === 2 ? 0.42 : 0.18;
  const translateX = 8 + abs * abs * 14;
  const grayscale = offset === 0 ? 0 : abs === 1 ? 0.35 : 0.7;

  return {
    scale,
    opacity,
    translateX,
    filter: `grayscale(${grayscale})`,
    zIndex: 10 - abs,
  };
}

function CurvedPath({ height }: { height: number }) {
  const w = 48;
  const h = height;
  const cx = 12;
  const path = `M ${cx} 0 Q ${w} ${h * 0.5} ${cx} ${h}`;

  return (
    <svg
      className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#E5E7EB]"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden>
      <path d={path} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ReviewerRail({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const length = TESTIMONIALS.length;
  const railHeight = VISIBLE_RADIUS * 2 * ITEM_GAP;

  const visibleItems = useMemo(() => {
    const items: { index: number; offset: number }[] = [];
    for (let o = -VISIBLE_RADIUS; o <= VISIBLE_RADIUS; o++) {
      const index = wrapIndex(activeIndex + o, length);
      items.push({ index, offset: o });
    }
    return items;
  }, [activeIndex, length]);

  return (
    <div
      className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
      style={{ height: railHeight }}>
      <CurvedPath height={railHeight} />

      <div className="relative h-full">
        {visibleItems.map(({ index, offset }) => {
          const t = TESTIMONIALS[index];
          const styles = getCurveStyles(offset);
          const isActive = offset === 0;
          const top = `calc(50% + ${offset * ITEM_GAP}px)`;

          return (
            <motion.button
              key={`${index}-${offset}`}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`View testimonial from ${t.name}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "absolute left-0 flex w-full max-w-[320px] -translate-y-1/2 items-center gap-4 text-left outline-none",
                "focus-visible:ring-2 focus-visible:ring-[#3B85C4]/40 focus-visible:ring-offset-2 rounded-xl",
                isActive ? "cursor-default" : "cursor-pointer",
              )}
              style={{
                top,
                zIndex: styles.zIndex,
                filter: styles.filter,
              }}
              animate={{
                x: styles.translateX,
                scale: styles.scale,
                opacity: styles.opacity,
              }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}>
              <Avatar
                className={cn(
                  "shrink-0 border-2 border-white shadow-md transition-shadow duration-300",
                  isActive ? "size-[72px] shadow-lg" : "size-[52px]",
                )}>
                <AvatarImage src={t.avatar} alt={t.name} />
                <AvatarFallback className="bg-[#ebf2f9]/100 text-sm font-semibold text-[#3B85C4]">
                  {getInitials(t.name)}
                </AvatarFallback>
              </Avatar>

              <div
                className={cn(
                  "min-w-0 flex-1 transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-80",
                )}>
                <p
                  className={cn(
                    "font-heading truncate text-[#07071A]",
                    isActive ? "text-lg font-semibold" : "text-sm font-medium",
                  )}>
                  {t.name}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                  <Star
                    className="size-3 shrink-0 fill-amber-500 text-amber-500"
                    aria-hidden
                  />
                  <span>
                    {t.rating}.0 · {t.role}, {t.company}
                  </span>
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function QuotePanel({ activeIndex }: { activeIndex: number }) {
  const t = TESTIMONIALS[activeIndex];

  return (
    <div className="relative flex min-h-[280px] flex-col justify-center px-2 sm:px-6 lg:px-10">
      <span
        className="pointer-events-none absolute -top-2 left-0 font-serif text-[120px] leading-none text-[#E8EAED] select-none sm:text-[140px] lg:left-6"
        aria-hidden>
        &ldquo;
      </span>

      <AnimatePresence mode="wait">
        <motion.blockquote
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[1]">
          <p className="font-serif text-xl italic leading-[1.75] text-[#6B7280] sm:text-2xl sm:leading-[1.7] lg:text-[1.4rem]">
            {t.text}
          </p>
          {/* <footer className="mt-8 hidden sm:block">
            <cite className="not-italic">
              <span className="text-sm font-semibold text-[#07071A]">
                {t.name}
              </span>
              <span className="mt-0.5 block text-xs text-[#9CA3AF]">
                {t.role}, {t.company}
              </span>
            </cite>
          </footer> */}
        </motion.blockquote>
      </AnimatePresence>
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex(wrapIndex(index, TESTIMONIALS.length));
  }, []);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(goNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, goNext]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      tabIndex={0}
      className="relative overflow-hidden bg-white py-24 px-5 outline-none lg:px-8 lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-label="Testimonials">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,133,196,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          pill={
            <>
              <SlidersHorizontal className="h-3 w-3" />
              Testimonials
            </>
          }
          description="Hear from the founders, creatives, and teams who call Funavry their professional home.">
          {"Islamabad's"} builders
          <br />
          <span className={sectionHeadingGradient}>trust Funavry</span>
        </SectionHeading>

        <FadeUp delay={0.1}>
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(280px,38%)_1fr] lg:gap-8 xl:gap-16">
            <ReviewerRail activeIndex={activeIndex} onSelect={goTo} />
            <QuotePanel activeIndex={activeIndex} />
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 lg:justify-center lg:pl-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === index
                    ? "w-8 bg-[#3B85C4]"
                    : "w-1.5 bg-[#07071A]/12 hover:bg-[#3B85C4]/40",
                )}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
