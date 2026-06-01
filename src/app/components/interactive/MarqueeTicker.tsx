import { MARQUEE_ITEMS } from "@/app/data/content";

function MarqueeTrack() {
  return (
    <div className="marquee-track flex shrink-0 items-center gap-0">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="marquee-item flex shrink-0 items-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text sm:text-base">
            {item}
          </span>
          <span
            className="marquee-separator mx-8 sm:mx-12 text-amber-500/50"
            aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeTicker() {
  return (
    <div
      className="relative z-20 overflow-hidden border-y border-amber-500/15 bg-[#07071A]/50 py-3.5 backdrop-blur-md"
      aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#07071A] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#07071A] to-transparent sm:w-24" />
      <div className="marquee-viewport flex">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
