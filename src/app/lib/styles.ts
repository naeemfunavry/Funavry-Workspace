/** Raleway headings, display, section titles */
export const fontHeading = "font-heading";

/** Hero: 56–72px desktop, scales down on tablet/mobile */
export const heroHeadingClass =
  "hero-title font-heading font-normal text-[clamp(2.5rem,3.5vw+1rem,3.5rem)] leading-[1.08] tracking-[-0.02em]";

/** Section titles: 40–48px */
export const sectionHeadingClass =
  "section-title font-heading font-normal mt-5 text-[clamp(2.25rem,2.5vw+1rem,3rem)] leading-[1.12] tracking-[-0.02em]";

export const sectionHeadingLight = `${sectionHeadingClass} text-[#07071A]`;

export const sectionHeadingDark = `${sectionHeadingClass} text-white`;

export const sectionHeadingGradient =
  "bg-gradient-to-r from-[#3B85C4] to-[#F59E0B] bg-clip-text text-transparent";

/** Card / service titles: 24–32px */
export const cardTitleClass =
  "service-title font-heading font-normal text-[clamp(1.5rem,1vw+1rem,2rem)] leading-[1.25] tracking-[-0.015em]";

/** Body copy: 16–18px */
export const bodyTextClass =
  "text-base sm:text-md font-normal leading-[1.65] tracking-[0.01em]";

export const sectionSubheadingClass =
  `${bodyTextClass} text-[#6B7280]`;

export const sectionSubheadingDark =
  `${bodyTextClass} text-white/45`;

/** Small text: 14px */
export const smallTextClass =
  "text-sm font-normal leading-[1.6] tracking-[0.01em]";

/** Buttons & primary CTAs: 16px, Outfit 600 */
export const buttonTextClass =
  "text-base font-semibold leading-normal tracking-[0.01em]";
