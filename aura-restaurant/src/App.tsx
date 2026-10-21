import { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MenuShowcase } from "./components/MenuShowcase";
import { Storytelling } from "./components/Storytelling";
import { SensoryExperience } from "./components/SensoryExperience";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative bg-aura-black min-h-screen text-aura-white font-sans selection:bg-aura-gold selection:text-aura-black">
      <CustomCursor />
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero />
        <MenuShowcase />
        <Storytelling />
        <SensoryExperience />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
