type IconProps = {
  className?: string;
};

const stroke = "#F5A623";

export function HighSpeedInternetIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M32 48c-2.5 0-4.5 2-4.5 4.5S29.5 57 32 57s4.5-2 4.5-4.5S34.5 48 32 48z"
        fill={stroke}
      />
      <path
        d="M32 38c-5.5 0-10.5 2.2-14.1 5.8l3.2 3.2c2.8-2.8 6.6-4.5 10.9-4.5s8.1 1.7 10.9 4.5l3.2-3.2C42.5 40.2 37.5 38 32 38z"
        fill={stroke}
      />
      <path
        d="M32 28c-8.3 0-15.8 3.4-21.2 8.8l3.2 3.2C18.8 35.6 25 33 32 33s13.2 2.6 18 7l3.2-3.2C47.8 31.4 40.3 28 32 28z"
        fill={stroke}
      />
      <path
        d="M32 18c-11 0-21 4.5-28.2 11.7l3.2 3.2C13.4 26.8 22.2 23 32 23s18.6 3.8 25 9.9l3.2-3.2C53 22.5 43 18 32 18z"
        fill={stroke}
      />
    </svg>
  );
}

export function PowerSupplyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <rect
        x="14"
        y="18"
        width="36"
        height="28"
        rx="4"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path
        d="M50 26v12"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 24v16l-6-6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MeetingRoomsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <ellipse cx="32" cy="42" rx="18" ry="6" stroke={stroke} strokeWidth="2.5" />
      <circle cx="20" cy="30" r="5" stroke={stroke} strokeWidth="2.5" />
      <circle cx="32" cy="26" r="5" stroke={stroke} strokeWidth="2.5" />
      <circle cx="44" cy="30" r="5" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M20 35v4M32 31v6M44 35v4"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JanitorialIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M22 18c0-4 3-7 7-7h6c4 0 7 3 7 7v8H22V18z"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path
        d="M18 26h28l-4 24H22L18 26z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M38 14l8-4"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M44 10v8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SupportTeamIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <circle cx="32" cy="22" r="6" stroke={stroke} strokeWidth="2.5" />
      <circle cx="18" cy="26" r="5" stroke={stroke} strokeWidth="2.5" />
      <circle cx="46" cy="26" r="5" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M32 28v4M18 31v3M46 31v3"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 44c2-4 6-6 10-6s8 2 10 6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 46c1.5-3 4.5-5 8-5M54 46c-1.5-3-4.5-5-8-5"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SecurityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M32 10L14 18v14c0 12 8 20 18 24 10-4 18-12 18-24V18L32 10z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M32 10v44" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M32 10L14 18l18 8 18-8-18-8z"
        fill={stroke}
        fillOpacity="0.35"
      />
    </svg>
  );
}

export function ReceptionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <rect
        x="12"
        y="34"
        width="40"
        height="8"
        rx="2"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path
        d="M12 42v8h40v-8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="22" r="6" stroke={stroke} strokeWidth="2.5" />
      <path
        d="M32 28v6"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ValetParkingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M32 8c-10 0-18 8-18 18 0 13 18 30 18 30s18-17 18-30c0-10-8-18-18-18z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 30h12l-2 10H26l-2-10z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="42" r="2" fill={stroke} />
      <circle cx="38" cy="42" r="2" fill={stroke} />
    </svg>
  );
}

export function SeatingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M22 22c0-6 4-10 10-10s10 4 10 10v14H22V22z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 36h28v8c0 4-3 7-7 7H25c-4 0-7-3-7-7v-8z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M28 51v5M36 51v5"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 56h16"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EventSpaceIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M32 8c-10 0-18 8-18 18 0 13 18 30 18 30s18-17 18-30c0-10-8-18-18-18z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect
        x="24"
        y="24"
        width="16"
        height="12"
        rx="2"
        stroke={stroke}
        strokeWidth="2.5"
      />
      <path
        d="M28 36h8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HotBeveragesIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true">
      <path
        d="M16 24h28v22c0 4-3 7-7 7H23c-4 0-7-3-7-7V24z"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 28h4c4 0 7 3 7 7s-3 7-7 7h-4"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 20c0-2 1.5-4 4-4"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 14v8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="28"
        y="30"
        width="8"
        height="10"
        rx="1"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
