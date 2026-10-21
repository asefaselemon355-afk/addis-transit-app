import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function Header({ onReserveClick }: { onReserveClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-aura-black/80 backdrop-blur-md border-b border-aura-white/10" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold tracking-widest text-aura-white">
          AURA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Menu", "The Chef", "Atmosphere"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs font-mono tracking-widest text-aura-white/70 hover:text-aura-white transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={onReserveClick}
          className="px-6 py-2 bg-aura-white text-aura-black font-semibold text-xs font-mono uppercase tracking-widest rounded-none hover:bg-aura-gold hover:text-aura-black transition-colors duration-300"
        >
          Reserve a Table
        </button>
      </div>
    </motion.header>
  );
}
