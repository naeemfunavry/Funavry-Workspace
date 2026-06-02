import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, SlidersHorizontal } from "lucide-react";
import { HERO_BG_IMAGES, STATS } from "@/app/data/content";
import { heroHeadingClass } from "@/app/lib/styles";
import { scrollTo } from "@/app/lib/scroll";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import {
  HeroScrollIndicator,
  MarqueeTicker,
} from "@/app/components/interactive";

type HeroSectionProps = {
  onBookTour: () => void;
};

export function HeroSection({ onBookTour }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => setActiveSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 6000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[#07071A] overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setCarouselApi}
          opts={{ align: "start", loop: true }}
          className="h-full w-full">
          <CarouselContent className="ml-0 h-full">
            {HERO_BG_IMAGES.map((image, i) => (
              <CarouselItem key={i} className="pl-0 basis-full h-full">
                <div className="relative h-full min-h-screen overflow-hidden">
                  <motion.div
                    className="absolute -inset-y-[12%] inset-x-0"
                    style={{ y: bgY }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.30]"
                    />
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-6 right-5 lg:right-8 z-[2] pointer-events-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/45">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest tabular-nums">
                {activeSlide + 1} / {HERO_BG_IMAGES.length}
              </span>
            </div>
            <CarouselPrevious
              variant="outline"
              className="static left-auto top-auto translate-y-0 size-9 rounded-full border-white/[0.18] bg-white/[0.09] text-white hover:bg-white/[0.14] hover:text-white disabled:opacity-30"
            />
            <CarouselNext
              variant="outline"
              className="static right-auto top-auto translate-y-0 size-9 rounded-full border-white/[0.18] bg-white/[0.09] text-white hover:bg-white/[0.14] hover:text-white disabled:opacity-30"
            />
          </div>
        </Carousel>

        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#07071A]/85 via-[#07071A]/55 to-[#07071A] pointer-events-none" /> */}
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[15%] -left-40 w-[500px] h-[500px] bg-[#F59E0B]/[0.10] rounded-full blur-[100px]" />
        <div className="absolute top-[25%] -right-32 w-[420px] h-[420px] bg-[#2E7BC4]/[0.14] rounded-full blur-[90px]" />
        <div className="absolute bottom-[15%] left-[40%] w-[700px] h-[280px] bg-amber-500/[0.10] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-5 lg:px-8 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-5 mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${heroHeadingClass} text-white mb-6`}>
                Work Smarter in
                <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent mx-2">
                  {"Islamabad's "}
                </span>
                Most Inspiring Space
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52 }}
                className="text-lg sm:text-xl text-white/75 font-light max-w-6xl mx-auto mb-10 leading-relaxed">
                Welcome to Funavry a modern workspace built for freelancers,
                startups, remote teams, and growing IT companies. Located
                adjacent to Srinagar Highway and steps from the Metro Bus
                Terminal, we combine accessibility, comfort, and productivity in
                one vibrant environment. A place where great ideas truly find a
                home.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.67 }}
                className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <button
                  onClick={onBookTour}
                  className="cursor-pointer group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-normal uppercase text-sm hover:shadow-2xl hover:shadow-amber-500/45 transition-all duration-300 hover:scale-105 active:scale-95">
                  Book a Tour
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo("services")}
                  className="cursor-pointer flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.09] text-white font-normal uppercase text-sm border border-white/[0.18] hover:bg-white/[0.14] backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95">
                  Explore Plans
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.88 }}
          className="w-full max-w-3xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.09] rounded-2xl py-5 px-4 text-center hover:bg-white/[0.09] transition-colors duration-300">
              <div className="font-heading text-[28px] font-extrabold text-white tracking-tight mb-0.5">
                {s.value}
              </div>
              <div className="text-[11px] text-white/40 font-medium uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>

      <HeroScrollIndicator />
      <MarqueeTicker />
    </section>
  );
}
