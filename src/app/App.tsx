import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BookingModal } from "@/app/components/BookingModal";
import {
  CustomGoldCursor,
  MarqueeTicker,
  RevealSection,
} from "@/app/components/interactive";
import {
  Navbar,
  HeroSection,
  ServicesSection,
  ServicesSplitSection,
  WhyChooseSection,
  AmenitiesSection,
  TestimonialsSection,
  GallerySection,
  ContactSection,
  Footer,
} from "@/app/components/sections";

export default function App() {
  const [modal, setModal] = useState<string | null>(null);

  const openBooking = (service = "Book a Tour") => setModal(service);
  const closeBooking = () => setModal(null);

  return (
    <div className="min-h-screen">
      <style>{`html { scroll-behavior: smooth; } ::-webkit-scrollbar { display: none; }`}</style>

      <CustomGoldCursor />
      <Navbar onBookTour={() => openBooking()} />
      <HeroSection onBookTour={() => openBooking()} />

      {/* <RevealSection>
        <ServicesSection onBook={openBooking} />
      </RevealSection> */}
      <RevealSection delay={0.05}>
        <ServicesSplitSection onBook={openBooking} />
      </RevealSection>
      <RevealSection delay={0.05}>
        <WhyChooseSection />
      </RevealSection>

      <RevealSection delay={0.05}>
        <AmenitiesSection />
      </RevealSection>
      <RevealSection delay={0.05}>
        <GallerySection />
      </RevealSection>
      <RevealSection delay={0.05}>
        <TestimonialsSection />
      </RevealSection>
      <RevealSection delay={0.05}>
        <ContactSection />
      </RevealSection>
      <RevealSection delay={0.05}>
        <Footer />
      </RevealSection>

      <AnimatePresence>
        {modal && (
          <BookingModal key="modal" service={modal} onClose={closeBooking} />
        )}
      </AnimatePresence>
    </div>
  );
}
