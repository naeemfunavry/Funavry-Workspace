import { useState } from "react";

type ServiceButtonProps = {
  accent: string;
  price: string;
  onClick: () => void;
};

export function ServiceButton({ accent, price, onClick }: ServiceButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer w-full py-3.5 rounded-2xl text-sm font-normal uppercase transition-all duration-300 active:scale-95 hover:scale-[1.02]"
      style={{
        background: hovered ? accent : `${accent}18`,
        color: hovered ? "#fff" : accent,
        border: `1.5px solid ${hovered ? accent : `${accent}30`}`,
      }}>
      {price === "Custom" ? "Request a Quote" : "Book Now"}
    </button>
  );
}
