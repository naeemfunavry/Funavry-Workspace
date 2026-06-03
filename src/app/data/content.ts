import type { ElementType } from "react";
import {
  Lock,
  Monitor,
  Building2,
  Globe,
  Users,
  Cpu,
  MapPin as MapPinIcon,
  Gem,
  Lightbulb,
  SlidersHorizontal,
} from "lucide-react";
import {
  HighSpeedInternetIcon,
  PowerSupplyIcon,
  MeetingRoomsIcon,
  JanitorialIcon,
  SupportTeamIcon,
  SecurityIcon,
  ReceptionIcon,
  ValetParkingIcon,
  SeatingIcon,
  EventSpaceIcon,
  HotBeveragesIcon,
} from "@/app/components/sections/AmenityIcons";
import hero1 from "@/assets/images/hero1.avif";
import hero2 from "@/assets/images/hero2.avif";
import hero3 from "@/assets/images/hero3.avif";
import hero4 from "@/assets/images/hero4.avif";
import hero5 from "@/assets/images/hero5.avif";
import gallery1 from "@/assets/images/gallery/1.avif";
import gallery2 from "@/assets/images/gallery/2.avif";
import gallery3 from "@/assets/images/gallery/3.avif";
import gallery4 from "@/assets/images/gallery/4.avif";
import gallery5 from "@/assets/images/gallery/5.avif";
import gallery6 from "@/assets/images/gallery/6.avif";
import gallery7 from "@/assets/images/gallery/7.avif";
import gallery8 from "@/assets/images/gallery/8.avif";
import gallery9 from "@/assets/images/gallery/9.avif";
import gallery10 from "@/assets/images/gallery/10.avif";
import gallery11 from "@/assets/images/gallery/11.avif";
import gallery12 from "@/assets/images/gallery/12.avif";
import gallery13 from "@/assets/images/gallery/13.avif";
import gallery14 from "@/assets/images/gallery/14.avif";
import gallery15 from "@/assets/images/gallery/15.avif";
import gallery16 from "@/assets/images/gallery/16.avif";
import gallery17 from "@/assets/images/gallery/17.avif";
import gallery18 from "@/assets/images/gallery/18.avif";
import gallery19 from "@/assets/images/gallery/19.avif";
import gallery20 from "@/assets/images/gallery/20.avif";
import gallery21 from "@/assets/images/gallery/21.avif";
import gallery22 from "@/assets/images/gallery/22.avif";

// Why Choose Images
import whyChoose1 from "@/assets/images/why-choose/1.avif";
import whyChoose2 from "@/assets/images/why-choose/2.avif";
import whyChoose3 from "@/assets/images/why-choose/3.avif";
import whyChoose4 from "@/assets/images/why-choose/4.avif";
import whyChoose5 from "@/assets/images/why-choose/5.avif";
import whyChoose6 from "@/assets/images/why-choose/6.avif";

export const HERO_BG_IMAGES = [
  {
    src: hero1,
    alt: "Funavry coworking interior",
  },
  {
    src: hero2,
    alt: "Modern open workspace",
  },
  {
    src: hero3,
    alt: "Collaborative office lounge",
  },
  {
    src: hero4,
    alt: "Team working in shared space",
  },
  {
    src: hero5,
    alt: "Premium workstation setup",
  },
] as const;

export const HERO_BG = HERO_BG_IMAGES[0].src;

export const TESTIMONIALS_BG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&auto=format";

export const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "50+", label: "Partner Companies" },
  { value: "15,000", label: "Sq. Ft. Space" },
  { value: "3", label: "Prime Locations" },
];

export const MARQUEE_ITEMS = [
  "Premium Coworking",
  "High-Speed Fiber Internet",
  "Metro-Adjacent Location",
  "24/7 Secure Access",
  "Meeting Rooms",
  "Event Space",
  "Hot Beverages Bar",
  "Dedicated Desks",
  "Private Offices",
  "Startup-Friendly Plans",
  "Book a Tour Today",
];

export type Service = {
  id: number;
  icon: ElementType;
  title: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  accent: string;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: Monitor,
    title: "Flexible Desk",
    tagline: "Work on your schedule",
    description:
      "Access any open desk in our shared workspace. Ideal for freelancers and remote workers who value maximum flexibility.",
    price: "28,000",
    period: "/ month",
    features: [
      "Daily, weekly & monthly rates",
      "Shared premium amenities",
      "High-speed fiber internet",
      "Lounge & coffee access",
    ],
    accent: "#2B7BC8",
  },
  {
    id: 2,
    icon: Building2,
    title: "Dedicated Desk",
    tagline: "Your permanent community spot",
    description:
      "A reserved desk exclusively yours. Leave your setup and return to your personalized workspace every single day.",
    price: "35,000",
    period: "/ month",
    features: [
      "Personal reserved desk",
      "Storage locker included",
      "24/7 building access",
      "Mail & parcel handling",
    ],
    accent: "#F59E0B",
    popular: true,
  },
  {
    id: 3,
    icon: Lock,
    title: "Private Office",
    tagline: "Furnished, move-in ready",
    description:
      "Fully furnished private offices for teams of 2–4. A professional environment with all infrastructure in place from day one.",
    price: "40,000",
    period: "/ month",
    features: [
      "Furnished private space",
      "2–4 person capacity",
      "Dedicated phone line",
      "Priority meeting rooms",
    ],
    accent: "#06B6D4",
  },
  {
    id: 4,
    icon: Globe,
    title: "Virtual Office",
    tagline: "Premium presence, zero overhead",
    description:
      "Establish your business at Islamabad's premier address with mail handling and professional call forwarding.",
    price: "10,000",
    period: "/ month",
    features: [
      "Premium business address",
      "Mail handling & forwarding",
      "Call answering service",
      "Monthly day passes included",
    ],
    accent: "#F59E0B",
  },
  {
    id: 5,
    icon: Users,
    title: "Enterprise Office",
    tagline: "Tailored for large teams",
    description:
      "Scalable office solutions for teams of 15 or more. Fully customizable to reflect your brand identity and culture.",
    price: "Custom",
    period: "pricing",
    features: [
      "15+ person capacity",
      "Full brand customization",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    accent: "#10B981",
  },
];

export const AMENITIES = [
  {
    icon: HighSpeedInternetIcon,
    label: "High speed internet",
  },
  {
    icon: PowerSupplyIcon,
    label: "Round the clock uninterrupted power supply",
  },
  {
    icon: MeetingRoomsIcon,
    label: "On-demand meeting rooms",
  },
  {
    icon: JanitorialIcon,
    label: "Regular disinfection and janitorial support",
  },
  {
    icon: SupportTeamIcon,
    label: "On-site support team",
  },
  {
    icon: SecurityIcon,
    label: "Robust security and fire safety",
  },
  {
    icon: ReceptionIcon,
    label: "Staffed reception and postal mail management",
  },

  {
    icon: SeatingIcon,
    label: "Comfortable seating and modern furniture",
  },
  {
    icon: EventSpaceIcon,
    label: "Event space",
  },
  {
    icon: HotBeveragesIcon,
    label: "Unlimited hot beverages",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ahmed Khalid",
    role: "CEO",
    company: "NovaTech Solutions",
    avatar:
      "../assets/images/testimonials/ahmed-khalid.jpg",
    text: "Funavry completely changed how we work. We moved in as a 3-person startup with no idea what we were doing, and within 6 months the community, mentors, and sheer energy of the space helped us close our first seed round. This isn't just a desk it's a launchpad.",
    rating: 5,
  },
  {
    name: "Sana Rehman",
    role: "Creative Director",
    company: "Pixel & Co.",
    avatar:
      "../assets/images/testimonials/sana-rehman.jpg",
    text: "We were skeptical about co-working for a 12-person software house, but Funavry's private office suite exceeded every expectation. The enterprise-grade internet alone saved us from switching our ISP. The team is professional, responsive, and genuinely invested in our success.",
    rating: 5,
  },
  {
    name: "Usman Baig",
    role: "Founder",
    company: "Launchpad PK",
    avatar:
      "../assets/images/testimonials/usman-baig.jpg",
    text: "Working from home was killing my productivity. CalmKaaj gave me structure, a professional background for my client calls, and honestly the best chai in Islamabad. I've landed three international clients just by networking with people I met in the lounge here.",
    rating: 5,
  },
  {
    name: "Maria Zaidi",
    role: "Founder",
    company: "Business Coach",
    avatar:
      "../assets/images/testimonials/maria-zaidi.jpg",
    text: "I've used co-working spaces in Dubai and Kuala Lumpur, and Funavry honestly belongs in the same conversation. The ergonomic setup, the quiet zones, the meeting rooms everything is thoughtfully designed. My investors were genuinely impressed when I hosted them here.",
    rating: 5,
  },
  {
    name: "Tariq Nawaz",
    role: "Founder",
    company: "Business Coach",
    avatar:
      "../assets/images/testimonials/tariq-nawaz.jpg",
    text: "Our Singapore-based company needed a Islamabad base for our local team. Funavry's virtual office and dedicated desks were the perfect solution professional address, reception, and a team that handles everything. Our remote setup has never felt so smooth.",
    rating: 5,
  },
  {
    name: "Faisal Karimi",
    role: "Strategy Consultant & Business Coach",
    company: "Business Coach",
    avatar:
      "../assets/images/testimonials/faisal-karimi.jpg",
    text: "Before Funavry, I was running my consultancy from home and coffee shops. Now I have a proper address, a professional boardroom for client meetings, and a community of like-minded people to think out loud with. It's the best professional investment I've made this year.",
    rating: 5,
  },
  {
    name: "Hassan Mirza",
    role: "CTO",
    company: "CloudNest Systems",
    avatar:
      "../assets/images/testimonials/hassan-mirza.jpg",
    text: "We scaled from 5 to 18 people within the same building without missing a beat. Funavry handled the transition seamlessly new office, new layout, zero downtime for our dev team. The generator backup means load-shedding is now completely off our radar.",
    rating: 5,
  },
];

export const GALLERY_ITEMS = [
  {
    url: gallery1,
    alt: "Funavry building on G8/1 Islamabad",
    wide: true,
  },
  {
    url: gallery2,
    alt: "Office Entrance",
  },
  {
    url: gallery3,
    alt: "Reception Area",
    tall: true,
  },
  {
    url: gallery4,
    alt: "Entrance & Quote Wall",
  },
  {
    url: gallery5,
    alt: "Conference Room",
  },
  {
    url: gallery6,
    alt: "Glass Meeting Room",
  },
  {
    url: gallery7,
    alt: "Open Workspace",
    tall: true,
  },
  {
    url: gallery8,
    alt: "Inspiration Meet Pods",
    wide: true,
  },
  {
    url: gallery9,
    alt: "Collaborative Workspace",
  },
  {
    url: gallery10,
    alt: "Executive Office & Lounge",
  },
  {
    url: gallery11,
    alt: "Boardroom",
    wide: true,
  },
  {
    url: gallery12,
    alt: "Executive Boardroom",
  },
  {
    url: gallery13,
    alt: "Game Room",
    tall: true,
  },
  {
    url: gallery14,
    alt: "Automation Corridor",
  },
  {
    url: gallery15,
    alt: "Open Plan Office",
    wide: true,
  },
  {
    url: gallery16,
    alt: "Breakout Lounge",
  },
  {
    url: gallery17,
    alt: "Funavry Conference Room",
    wide: true,
  },
  {
    url: gallery18,
    alt: "Co-Working Hall",
    wide: true,
  },
  {
    url: gallery19,
    alt: "Glass Meeting Room",
    wide: true,
  },
  {
    url: gallery20,
    alt: "Event & Collaboration Space",
    wide: true,
  },
  {
    url: gallery21,
    alt: " Islamabad Skyline View",
    wide: true,
  },
  {
    url: gallery22,
    alt: " Hot Desk Area",
    wide: true,
  },
];

export const WHY_ITEMS = [
  {
    icon: Cpu,
    title: "Modern Infrastructure Built for IT Companies",
    summary:
      "Experience a workspace engineered for productivity with high-speed uninterrupted internet, ergonomic workstations, smart meeting rooms, reliable power backup, and secure technology infrastructure designed to support modern businesses and growing teams.",
    body: "Experience a workspace engineered for productivity with high-speed uninterrupted internet, ergonomic workstations, smart meeting rooms, reliable power backup, and secure technology infrastructure designed to support modern businesses and growing teams.",
    accent: "#2B7BC8",
    image: whyChoose1,
  },
  {
    icon: MapPinIcon,
    title: "Prime Location with Seamless Accessibility",
    summary:
      "Strategically located adjacent to Srinagar Highway and within walking distance of the Metro Bus Terminal, Funavry offers quick access to key business districts, restaurants, cafés, gyms, banks, and essential professional services.",
    body: "Strategically located adjacent to Srinagar Highway and within walking distance of the Metro Bus Terminal, Funavry offers quick access to key business districts, restaurants, cafés, gyms, banks, and essential professional services.",
    accent: "#F59E0B",
    image: whyChoose2,
  },
  {
    icon: Gem,
    title: "All-Inclusive Premium Amenities",
    summary:
      "From 24/7 security and uninterrupted utilities to housekeeping, refreshments, dedicated support staff, and fully equipped conference spaces, every detail is managed so you can focus entirely on your business.",
    body: "From 24/7 security and uninterrupted utilities to housekeeping, refreshments, dedicated support staff, and fully equipped conference spaces, every detail is managed so you can focus entirely on your business.",
    accent: "#06B6D4",
    image: whyChoose3,
  },
  {
    icon: Users,
    title: "A Collaborative Community of Innovators",
    summary:
      "Join a vibrant ecosystem of freelancers, startups, entrepreneurs, and IT professionals where collaboration, networking, mentorship, and new opportunities happen naturally every day.",
    body: "Join a vibrant ecosystem of freelancers, startups, entrepreneurs, and IT professionals where collaboration, networking, mentorship, and new opportunities happen naturally every day.",
    accent: "#F59E0B",
    image: whyChoose4,
  },
  {
    icon: Lightbulb,
    title: "Designed for Focus, Creativity & Growth",
    summary:
      "Our thoughtfully designed workspaces balance energy and calm featuring collaborative zones for teamwork alongside quiet spaces for deep focus, creativity, and uninterrupted productivity.",
    body: "Our thoughtfully designed workspaces balance energy and calm featuring collaborative zones for teamwork alongside quiet spaces for deep focus, creativity, and uninterrupted productivity.",
    accent: "#10B981",
    image: whyChoose5,
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Workspace Solutions",
    summary:
      "Whether you are an individual freelancer, a remote team, or a scaling technology company, Funavry offers flexible workspace solutions tailored to your evolving business needs.",
    body: "Whether you are an individual freelancer, a remote team, or a scaling technology company, Funavry offers flexible workspace solutions tailored to your evolving business needs.",
    accent: "#EC4899",
    image: whyChoose6,
  },
];

export const WHY_CHOOSE_SPLIT = {
  eyebrow: "Why Funavry",
  title: "More than a desk",
  titleAccent: "a community",
  description:
    "At Funavry, we believe your environment shapes your potential. From silent focus rooms to vibrant collaboration hubs, every corner is designed to fuel creative energy and professional excellence in the F-Sector, Islamabad.",
  mainImage: {
    src: whyChoose1,
    alt: "Modern coworking workspace at Funavry",
  },
  insetImage: {
    src: whyChoose4,
    alt: "Collaborative desk setup at Funavry",
  },
  features: [
    {
      icon: Cpu,
      title: "Modern Infrastructure Built for IT Companies",
      description:
        "Experience a workspace engineered for productivity with high-speed uninterrupted internet, ergonomic workstations, smart meeting rooms, reliable power backup, and secure technology infrastructure designed to support modern businesses and growing teams.",
    },
    {
      icon: Lock,
      title: "Prime Location with Seamless Accessibility",
      description:
        "Strategically located adjacent to Srinagar Highway and within walking distance of the Metro Bus Terminal, Funavry offers quick access to Islamabad’s key business districts, restaurants, cafés, gyms, banks, and essential professional services.",
    },
    {
      icon: Users,
      title: "All-Inclusive Premium Amenities",
      description:
        "From 24/7 security and uninterrupted utilities to housekeeping, refreshments, dedicated support staff, and fully equipped conference spaces, every detail is managed so you can focus entirely on your business.",
    },
    {
      icon: Users,
      title: "A Collaborative Community of Innovators",
      description:
        "Join a vibrant ecosystem of freelancers, startups, entrepreneurs, and IT professionals where collaboration, networking, mentorship, and new opportunities happen naturally every day.",
    },
    {
      icon: Users,
      title: "Designed for Focus, Creativity & Growth",
      description:
        "Our thoughtfully designed workspaces balance energy and calm featuring collaborative zones for teamwork alongside quiet spaces for deep focus, creativity, and uninterrupted productivity.",
    },
    {
      icon: Users,
      title: "Flexible Workspace Solutions",
      description:
        "Whether you are an individual freelancer, a remote team, or a scaling technology company, Funavry offers flexible workspace solutions tailored to your evolving business needs. At Funavry, we offer more than just office space we provide an environment where ambitious professionals and innovative companies can build, connect, and grow together in the heart of Islamabad."
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Amenities", id: "amenities" },
  { label: "Why Us", id: "why" },
  { label: "Gallery", id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export const FOOTER_NAV_IDS = [
  "services",
  "why",
  "amenities",
  "gallery",
  "testimonials",
  "contact",
];
