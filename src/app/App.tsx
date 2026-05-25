import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BookingModal } from "@/app/components/BookingModal";
import {
  Navbar,
  HeroSection,
  ServicesSection,
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

      <Navbar onBookTour={() => openBooking()} />
      <HeroSection onBookTour={() => openBooking()} />
      <ServicesSection onBook={openBooking} />
      <WhyChooseSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      <AnimatePresence>
        {modal && (
          <BookingModal
            key="modal"
            service={modal}
            onClose={closeBooking}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
