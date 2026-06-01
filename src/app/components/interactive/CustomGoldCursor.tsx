import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label[for], [data-cursor-hover], .cursor-pointer, [tabindex]:not([tabindex="-1"])';

export function CustomGoldCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hoveringRef = useRef(false);
  const visibleRef = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive =
        el?.closest(INTERACTIVE) ?? el?.closest("[class*='cursor-pointer']");
      const isHover = Boolean(interactive);
      if (hoveringRef.current !== isHover) {
        hoveringRef.current = isHover;
        setHovering(isHover);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      const ease = hoveringRef.current ? 0.22 : 0.14;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      const t = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      if (cursorRef.current) cursorRef.current.style.transform = t;
      if (ringRef.current) ringRef.current.style.transform = t;
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={`gold-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] transition-[width,height,opacity,border-color] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${hovering ? "gold-cursor-ring--hover" : ""}`}
      />
      <div
        ref={cursorRef}
        aria-hidden
        className={`gold-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] transition-[width,height,opacity] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${hovering ? "gold-cursor-dot--hover" : ""}`}
      />
    </>
  );
}
