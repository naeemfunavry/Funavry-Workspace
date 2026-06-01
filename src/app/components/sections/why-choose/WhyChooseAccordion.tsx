"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WHY_ITEMS } from "@/app/data/content";
import { cn } from "@/app/components/ui/utils";
import { WhyChoosePanel } from "./WhyChoosePanel";
import "./why-choose-accordion.css";

const PANEL_COUNT = WHY_ITEMS.length;
const SWIPE_THRESHOLD = 48;

export function WhyChooseAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % PANEL_COUNT) + PANEL_COUNT) % PANEL_COUNT);
  }, []);

  const focusTab = useCallback((index: number) => {
    const el = tabRefs.current[index];
    if (el) el.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const focusedIdx = tabRefs.current.findIndex(
      (el) => el === document.activeElement,
    );

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown": {
        e.preventDefault();
        const next =
          ((focusedIdx >= 0 ? focusedIdx : activeIndex) + 1) % PANEL_COUNT;
        if (isMobile) goTo(next);
        else focusTab(next);
        break;
      }
      case "ArrowLeft":
      case "ArrowUp": {
        e.preventDefault();
        const prev =
          ((focusedIdx >= 0 ? focusedIdx : activeIndex) - 1 + PANEL_COUNT) %
          PANEL_COUNT;
        if (isMobile) goTo(prev);
        else focusTab(prev);
        break;
      }
      case "Home":
        e.preventDefault();
        if (isMobile) goTo(0);
        else focusTab(0);
        break;
      case "End":
        e.preventDefault();
        if (isMobile) goTo(PANEL_COUNT - 1);
        else focusTab(PANEL_COUNT - 1);
        break;
      default:
        break;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) return;
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isMobile || touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    const focusedIdx = tabRefs.current.findIndex(
      (el) => el === document.activeElement,
    );
    const current = focusedIdx >= 0 ? focusedIdx : 0;
    const next =
      delta < 0
        ? (current + 1) % PANEL_COUNT
        : (current - 1 + PANEL_COUNT) % PANEL_COUNT;
    focusTab(next);
  };

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Why choose Funavry"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "why-accordion",
          isMobile ? "why-accordion--mobile" : "why-accordion--desktop",
        )}>
        {WHY_ITEMS.map((item, i) => (
          <WhyChoosePanel
            key={item.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`why-tab-${i}`}
            index={i}
            title={item.title}
            summary={item.summary}
            image={item.image}
            accent={item.accent}
            isMobile={isMobile}
            isActiveMobile={activeIndex === i}
            onActivateMobile={() => goTo(i)}
          />
        ))}
      </div>

      {isMobile && (
        <div
          className="flex items-center justify-center gap-2"
          role="group"
          aria-label="Feature navigation">
          {WHY_ITEMS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to feature ${i + 1}`}
              aria-current={activeIndex === i ? "true" : undefined}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-[width,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                activeIndex === i
                  ? "w-8 bg-[#ff004f]"
                  : "w-2 bg-white/25 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {isMobile
          ? `Showing feature ${activeIndex + 1} of ${PANEL_COUNT}: ${WHY_ITEMS[activeIndex]?.title}`
          : "Hover or use arrow keys to explore features"}
      </p>
    </div>
  );
}
