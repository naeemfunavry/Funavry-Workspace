import { ArrowUpRight } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/app/components/ui/utils";

export type WhyChoosePanelProps = {
  index: number;
  title: string;
  summary: string;
  image: string;
  accent: string;
  isMobile: boolean;
  isActiveMobile: boolean;
  onActivateMobile: () => void;
  id: string;
};

const BRAND_ACCENT = "#ff004f";

export const WhyChoosePanel = forwardRef<
  HTMLButtonElement,
  WhyChoosePanelProps
>(function WhyChoosePanel(
  {
    index,
    title,
    summary,
    image,
    accent,
    isMobile,
    isActiveMobile,
    onActivateMobile,
    id,
  },
  ref,
) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      ref={ref}
      type="button"
      id={id}
      role="tab"
      aria-selected={isMobile ? isActiveMobile : undefined}
      aria-expanded={isMobile ? isActiveMobile : undefined}
      data-active={isMobile && isActiveMobile ? "true" : undefined}
      onClick={isMobile ? onActivateMobile : undefined}
      className="why-accordion-card group">
      <div
        className="why-panel-image"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />

      <div
        className="why-panel-overlay why-panel-overlay--gradient"
        aria-hidden
      />
      <div
        className="why-panel-overlay why-panel-overlay--accent bg-gradient-to-b from-[#07071A]/50 via-[#07071A]/0 to-[#07071A]"
        // style={{
        //   background: `linear-gradient(135deg, ${accent}22 0%, transparent 55%, ${accent}18 100%)`,
        // }}
        aria-hidden
      />

      <p className="why-panel-collapsed-title" aria-hidden>
        {title}
      </p>

      <div className="why-panel-inner">
        <div className="why-panel-badge">{number}</div>

        <p className={cn("why-panel-mobile-title")}>{title}</p>

        <div className="why-panel-expanded">
          <h3 className="why-panel-title">{title}</h3>
          <p className="why-panel-summary">{summary}</p>
          <span className="why-panel-cta" aria-hidden>
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </button>
  );
});
