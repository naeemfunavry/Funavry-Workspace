import { Monitor } from "lucide-react";
import { GALLERY_ITEMS } from "@/app/data/content";
import { sectionHeadingGradient } from "@/app/lib/styles";
import { FadeUp } from "@/app/components/shared/FadeUp";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

export function GallerySection() {
  return (
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
          description="Every corner of Funavry was designed with purpose — to inspire concentration, conversation, and creativity.">
          Designed for
          <br />
          <span className={sectionHeadingGradient}>deep, focused work</span>
        </SectionHeading>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: "220px" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <FadeUp
              key={i}
              delay={i * 0.07}
              className={`relative group rounded-2xl overflow-hidden bg-[#1A1A30] cursor-pointer ${
                item.tall ? "row-span-2" : ""
              } ${item.wide ? "col-span-2" : ""}`}>
              <img
                src={item.url}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
