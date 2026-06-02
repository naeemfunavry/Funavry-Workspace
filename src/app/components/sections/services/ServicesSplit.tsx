import { useState } from "react";
import { SERVICES } from "@/app/data/content";
import { cn } from "@/app/components/ui/utils";
import { ServiceCard } from "./ServiceCard";

type ServicesSplitProps = {
  onBook: (service: string) => void;
};

export function ServicesSplit({ onBook }: ServicesSplitProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
      <div className="relative grid">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={cn(
              "col-start-1 row-start-1 transition-opacity duration-500 ease-out",
              activeIndex === index
                ? "relative z-10 opacity-100"
                : "pointer-events-none opacity-0",
            )}>
            <ServiceCard
              service={service}
              index={index}
              onBook={onBook}
              animateOnView={false}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center">
        <div className="space-y-3 h-full flex flex-col justify-between">
          {SERVICES.map((service, index) => {
            const isActive = index === activeIndex;
            const isEnterprise = service.price === "Custom";

            return (
              <button
                key={service.id}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative w-full h-full rounded-lg border p-5 text-left transition-all duration-300 ease-out sm:p-6",
                  isActive
                    ? "border-[#F59E0B] bg-[#FFFBEB]/80"
                    : "border-black/[0.06] hover:bg-black/[0.02]",
                )}>
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "font-heading text-2xl leading-none tracking-tight transition-colors duration-300 sm:text-[1.6rem]",
                      isActive ? "text-[#D97706]" : "text-[#D1D5DB]",
                    )}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 flex justify-between items-center">
                    <h4 className="text-[1.03rem] font-medium tracking-tight text-[#07071A] sm:text-[1.08rem]">
                      {service.title}
                    </h4>
                    <div
                      className={cn(
                        "flex flex-wrap items-baseline gap-1.5 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-80",
                      )}>
                      {service.price !== "Custom" && (
                        <span className="text-xs font-normal uppercase tracking-wide text-[#9CA3AF]">
                          PKR
                        </span>
                      )}
                      <span
                        className={cn(
                          "tracking-tight text-[#07071A]",
                          isEnterprise ? "text-lg" : "text-xl",
                        )}
                        style={
                          isActive ? { color: service.accent } : undefined
                        }>
                        {service.price}
                      </span>
                      <span className="text-xs font-normal text-[#9CA3AF]">
                        {service.period}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
