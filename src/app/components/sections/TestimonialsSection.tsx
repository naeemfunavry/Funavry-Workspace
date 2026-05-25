import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote, SlidersHorizontal, Star } from "lucide-react";
import { TESTIMONIALS, TESTIMONIALS_BG } from "@/app/data/content";
import { headingFont, sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { cn } from "@/app/components/ui/utils";

const AUTOPLAY_DELAY = 5000;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({
  name,
  role,
  company,
  text,
  rating,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/70 bg-white/95 p-8 shadow-[0_8px_30px_rgba(7,7,26,0.06)] backdrop-blur-sm transition-all duration-300">
      <Quote
        className="absolute top-6 right-6 size-9 text-[#3B85C4]/12 transition-colors duration-300 group-hover:text-[#3B85C4]/20"
        aria-hidden
      />
      {/* <motion.div
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#3B85C4] to-[#F59E0B] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        layout={false}
      /> */}
      <motion.div
        className="flex gap-0.5 mb-5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}>
        {Array.from({ length: rating }).map((_, si) => (
          <Star key={si} className="size-4 text-amber-400 fill-amber-400" />
        ))}
      </motion.div>
      <p className="relative z-[1] flex-1 text-[15px] leading-[1.75] text-[#374151] mb-8">
        &ldquo;{text}&rdquo;
      </p>
      <motion.div
        className="flex items-center gap-3.5 border-t border-black/[0.06] pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}>
        <Avatar className="size-12 ring-2 ring-[#3B85C4]/10 ring-offset-2 ring-offset-white">
          <AvatarFallback className="bg-gradient-to-br from-[#3B85C4] to-[#2E6DA8] text-sm font-semibold text-white">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}>
          <motion.div
            className="text-sm font-semibold text-[#07071A]"
            style={headingFont}>
            {name}
          </motion.div>
          <motion.div className="mt-0.5 text-xs text-[#9CA3AF]">
            {role}, {company}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setSlideCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [api, isPaused]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-28 px-5 lg:px-8">
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-y-[14%] inset-x-0"
            style={{ y: bgY }}>
            <img
              src={TESTIMONIALS_BG}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 bg-[#F5F5FF]/88"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5FF]/40 via-transparent to-[#F5F5FF]/60" />
      </motion.div>

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

        <FadeUp delay={0.1} className="mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}>
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full px-12">
              <CarouselContent className="-ml-5 md:-ml-6">
                {TESTIMONIALS.map((t, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-5 md:pl-6 basis-full md:basis-1/2">
                    <TestimonialCard {...t} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                variant="outline"
                className="left-0 top-1/2 -translate-y-1/2 size-11 rounded-full border-black/[0.08] bg-white/95 text-[#07071A] shadow-md backdrop-blur-sm hover:bg-white hover:text-[#3B85C4] disabled:opacity-30 cursor-pointer transition-colors"
              />
              <CarouselNext
                variant="outline"
                className="right-0 top-1/2 -translate-y-1/2 size-11 rounded-full border-black/[0.08] bg-white/95 text-[#07071A] shadow-md backdrop-blur-sm hover:bg-white hover:text-[#3B85C4] disabled:opacity-30 cursor-pointer transition-colors"
              />
            </Carousel>

            {slideCount > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to testimonial slide ${index + 1}`}
                    aria-current={current === index ? "true" : undefined}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 cursor-pointer",
                      current === index
                        ? "w-8 bg-[#3B85C4]"
                        : "w-2 bg-[#07071A]/15 hover:bg-[#3B85C4]/40",
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
