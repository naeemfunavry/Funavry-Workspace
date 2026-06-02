"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Monitor,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Images,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { GALLERY_ITEMS } from "@/app/data/content";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

const VISIBLE_COUNT = 8;
const remainingCount = GALLERY_ITEMS.length - VISIBLE_COUNT;

/** Full image visible, aspect ratio preserved, never stretched or cropped */
const galleryImageClass =
  "absolute inset-0 w-full h-full object-cover object-center";

type ModalView = null | "grid" | "lightbox";

function getGridClass(index: number): string {
  if (index === 0) return "col-span-2 md:row-span-2";
  if (index === VISIBLE_COUNT - 1) return "col-span-2 md:col-span-2";
  return "";
}

export function GallerySection() {
  const [modalView, setModalView] = useState<ModalView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setModalView("lightbox");
  }, []);

  const openGrid = useCallback(() => {
    setModalView("grid");
  }, []);

  const closeModal = useCallback(() => {
    setModalView(null);
  }, []);

  const backToGrid = useCallback(() => {
    setModalView("grid");
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    );
  }, []);

  useEffect(() => {
    if (modalView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalView]);

  useEffect(() => {
    if (modalView !== "lightbox") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") backToGrid();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalView, goNext, goPrev, backToGrid]);

  useEffect(() => {
    if (modalView !== "grid") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalView, closeModal]);

  useEffect(() => {
    if (modalView !== "lightbox" || !thumbsRef.current) return;
    const el = thumbsRef.current.children[activeIndex] as HTMLElement;
    el?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, modalView]);

  const visibleItems = GALLERY_ITEMS.slice(0, VISIBLE_COUNT);

  return (
    <>
      {/* ── Gallery Section ── */}
      <section
        id="gallery"
        className="relative bg-[#0D0D24] py-28 px-5 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#2E7BC4]/[0.12] rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#F59E0B]/[0.10] rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            dark
            pill={
              <>
                <Monitor className="h-3 w-3" />
                Our Space
              </>
            }
            description="Every corner of Funavry was designed with purpose to inspire concentration, conversation, and creativity.">
            Designed for
            <br />
            <span className={sectionHeadingGradient}>deep, focused work</span>
          </SectionHeading>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
            style={{ gridAutoRows: "200px" }}>
            {visibleItems.map((item, i) => {
              const isOverlay = i === VISIBLE_COUNT - 1 && remainingCount > 0;

              return (
                <FadeUp
                  key={i}
                  delay={i * 0.07}
                  className={`${getGridClass(i)} min-h-0`}>
                  <div
                    className="relative group rounded-xl overflow-hidden bg-[#1A1A30] cursor-pointer h-full"
                    onClick={() => (isOverlay ? openGrid() : openLightbox(i))}>
                    <img
                      src={item.url}
                      alt={item.alt}
                      className={galleryImageClass}
                    />

                    {isOverlay ? (
                      <div className="absolute inset-0 bg-black/55 flex items-center justify-center transition-colors group-hover:bg-black/40">
                        <div className="text-center">
                          <Images className="w-8 h-8 text-white/80 mx-auto mb-2" />
                          <span className="font-heading text-white text-xl font-bold">
                            +{remainingCount} photos
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          {item.alt}
                        </p>
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All Photos Grid Modal ── */}
      <AnimatePresence>
        {modalView === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#080818] flex flex-col">
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/[0.08] flex-shrink-0">
              <h2 className="font-heading text-white font-semibold text-lg">
                Gallery
                <span className="text-white/40 text-sm font-normal ml-2">
                  {GALLERY_ITEMS.length} photos
                </span>
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-white/[0.08] text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 max-w-6xl mx-auto">
                {GALLERY_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="relative group rounded-xl overflow-hidden bg-[#1A1A30] cursor-pointer aspect-[4/3]"
                    onClick={() => openLightbox(i)}>
                    <img
                      src={item.url}
                      alt={item.alt}
                      className={galleryImageClass}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <p className="text-white text-xs font-medium">
                        {item.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox Viewer ── */}
      <AnimatePresence>
        {modalView === "lightbox" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-[#080818] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/[0.08] flex-shrink-0">
              <button
                onClick={backToGrid}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" />
                Gallery
              </button>
              <span className="text-white font-semibold text-sm hidden sm:block">
                Funavry Workspace
              </span>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-white/[0.08] text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main image area */}
            <div className="flex-1 relative flex items-center justify-center px-4 md:px-16 py-4 min-h-0 overflow-hidden">
              <button
                onClick={goPrev}
                className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white/70 hover:text-white transition-all">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={GALLERY_ITEMS[activeIndex].url}
                  alt={GALLERY_ITEMS[activeIndex].alt}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="max-h-full max-w-full w-auto h-auto object-contain object-center rounded-lg select-none"
                  draggable={false}
                />
              </AnimatePresence>

              <button
                onClick={goNext}
                className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-white/70 hover:text-white transition-all">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="text-center px-4 py-2 flex-shrink-0">
              <span className="text-white/40 text-sm tabular-nums">
                {activeIndex + 1} / {GALLERY_ITEMS.length}
              </span>
              <span className="mx-2 text-white/20">&middot;</span>
              <span className="text-white text-sm font-medium">
                {GALLERY_ITEMS[activeIndex].alt}
              </span>
            </div>

            {/* Thumbnail strip */}
            <div className="border-t border-white/[0.08] bg-[#060614] px-3 py-2.5 flex-shrink-0">
              <div
                ref={thumbsRef}
                className="flex gap-1.5 overflow-x-auto justify-center"
                style={{ scrollbarWidth: "none" }}>
                {GALLERY_ITEMS.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex-shrink-0 w-[72px] h-[52px] rounded overflow-hidden bg-[#1A1A30] transition-all duration-200 border-2 ${
                      i === activeIndex
                        ? "border-amber-400 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-75"
                    }`}>
                    <img
                      src={item.url}
                      alt={item.alt}
                      className={galleryImageClass}
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
