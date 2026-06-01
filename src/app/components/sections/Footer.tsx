import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import funavryLogo from "@/imports/Funavry_Coworking_Space-logo.svg";
import { FOOTER_NAV_IDS } from "@/app/data/content";
import { scrollTo } from "@/app/lib/scroll";

export function Footer() {
  return (
    <footer className="bg-[#07071A] pt-16 pb-8 px-5 lg:px-8 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="px-3 py-1.5 inline-block">
                <ImageWithFallback
                  src={funavryLogo}
                  alt="Funavry Coworking Space"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/38 text-sm leading-relaxed max-w-xs">
              {"Islamabad's"} most inspiring coworking space. Built for
              builders, designers, founders, and the teams that shape tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white/70 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/38 hover:text-white/65 text-sm capitalize transition-colors">
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white/70 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/38">
              <li>G8/1, Sector G-8</li>
              <li>Islamabad, Pakistan</li>
              <li>+92 51 234 5678</li>
              <li>hello@funavry.pk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-xs">
            © 2026 Funavry. All rights reserved.
          </p>
          <p className="text-white/22 text-xs">
            {"Islamabad's"} premier coworking destination.
          </p>
        </div>
      </div>
    </footer>
  );
}
