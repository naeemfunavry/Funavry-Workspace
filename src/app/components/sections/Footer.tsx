import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import funavryLogo from "@/imports/Funavry_Coworking_Space-logo.svg";
import { FOOTER_NAV_IDS, NAV_LINKS } from "@/app/data/content";
import { scrollTo } from "@/app/lib/scroll";

const footerNavLinks = NAV_LINKS.filter((link) =>
  FOOTER_NAV_IDS.includes(link.id as (typeof FOOTER_NAV_IDS)[number]),
);

const footerLabelClass =
  "font-heading text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border px-5 lg:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto py-7 sm:py-8">
        <div className="flex flex-col gap-6 sm:gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="lg:max-w-[260px]">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="inline-flex cursor-pointer mb-2 group"
              aria-label="Back to top">
              <ImageWithFallback
                src={funavryLogo}
                alt="Funavry Coworking Space"
                className="h-6 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </button>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {"Islamabad's"} most inspiring coworking space. Built for
              builders, designers, founders, and the teams that shape tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10 lg:gap-x-14 lg:shrink-0">
            <div>
              <h4 className={footerLabelClass}>Navigation</h4>
              <ul className="flex flex-col gap-1.5">
                {footerNavLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className="cursor-pointer text-[11px] uppercase tracking-wide text-white/45 transition-colors hover:text-amber-500">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={footerLabelClass}>Contact</h4>
              <ul className="flex flex-col gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
                <li>G8/1, Sector G-8</li>
                <li>Islamabad, Pakistan</li>
                <li>+92 51 234 5678</li>
                <li>hello@funavry.pk</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 pt-4 border-t border-border flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/25 tracking-wide">
            © 2026 Funavry. All rights reserved.
          </p>
          <p className="text-sm text-white/25 tracking-wide">
            {"Islamabad's"} premier coworking destination.
          </p>
        </div>
      </div>
    </footer>
  );
}
