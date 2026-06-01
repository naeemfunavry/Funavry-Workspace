import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import funavryLogo from "@/imports/Funavry_Coworking_Space-logo.svg";
import { NAV_LINKS } from "@/app/data/content";
import { scrollTo } from "@/app/lib/scroll";

type NavbarProps = {
  onBookTour: () => void;
};

export function Navbar({ onBookTour }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-frosted bg-[#07071A]/72 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}>
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group cursor-pointer">
          <div className=" px-3 py-1.5 ">
            <ImageWithFallback
              src={funavryLogo}
              alt="Funavry Coworking Space"
              className="h-8 w-auto object-contain"
            />
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-4 py-2 text-white/55 hover:text-white text-sm font-semibold transition-colors rounded-lg hover:bg-white/[0.06] cursor-pointer">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onBookTour}
            className="cursor-pointer px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-base font-semibold hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-300 hover:scale-105 active:scale-95">
            Book a Tour
          </button>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white p-2 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden overflow-hidden bg-[#07071A]/96 backdrop-blur-2xl border-t border-white/[0.07]">
            <div className="px-5 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    scrollTo(l.id);
                    setOpen(false);
                  }}
                  className="text-white/60 hover:text-white text-base font-semibold text-left py-2.5 px-3 rounded-xl hover:bg-white/[0.05] transition-colors cursor-pointer">
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onBookTour();
                  setOpen(false);
                }}
                className="mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-base text-center cursor-pointer">
                Book a Tour
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
