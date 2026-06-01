import type { ReactNode } from "react";
import {
  sectionHeadingDark,
  sectionHeadingLight,
  sectionSubheadingClass,
  sectionSubheadingDark,
} from "@/app/lib/styles";
import { FadeUp } from "./FadeUp";
import { Pill } from "./Pill";

type SectionHeadingProps = {
  children: ReactNode;
  pill: ReactNode;
  description: string;
  dark?: boolean;
  afterDescription?: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  pill,
  description,
  dark = false,
  afterDescription,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 lg:mb-20 ${className}`.trim()}>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <FadeUp>
            <Pill dark={dark}>{pill}</Pill>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className={dark ? sectionHeadingDark : sectionHeadingLight}>
              {children}
            </h2>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-5 lg:max-w-sm lg:pb-1">
          <FadeUp delay={0.1}>
            <p className={dark ? sectionSubheadingDark : sectionSubheadingClass}>
              {description}
            </p>
          </FadeUp>
          {afterDescription ? (
            <FadeUp delay={0.15}>{afterDescription}</FadeUp>
          ) : null}
        </div>
      </div>
    </div>
  );
}
