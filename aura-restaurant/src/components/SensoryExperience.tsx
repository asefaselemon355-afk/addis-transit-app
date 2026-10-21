import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Droplets, Wind } from "lucide-react";
import { cn } from "../utils/cn";

const EXPERIENCES = [
  {
    id: "acoustic",
    title: "Sub-Harmonic Acoustic Dining",
    icon: Waves,
    description: "Low-frequency soundscapes designed to interact with the resonance of the tableware, enhancing the perception of umami and bitter notes.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    color: "from-blue-900/40",
  },
  {
    id: "lighting",
    title: "Custom Crafted Atmosphere",
    icon: Wind,
    description: "Bioluminescent and chromatic lighting that shifts based on the course being served, manipulating visual perception to alter taste expectations.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80",
    color: "from-purple-900/40",
  },
  {
    id: "wine",
    title: "Intelligent Wine Matrix",
    icon: Droplets,
    description: "Algorithmic decanting and temperature control systems ensuring each pour matches the exact molecular state of the paired dish.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
    color: "from-red-900/40",
  },
];

const getRandomStat = (base: number, variance: number) => {
  return Math.random() * variance + base;
};

export function SensoryExperience() {
  const [activeExp, setActiveExp] = useState(EXPERIENCES[0]);

  const stats = useMemo(() => [
    { label: "Intensity", value: getRandomStat(60, 40) },
    { label: "Resonance", value: getRandomStat(40, 40) },
    { label: "Synchronization", value: getRandomStat(80, 20) },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [activeExp.id]);

  return (
    <section id="atmosphere" className="relative py-32 min-h-screen flex items-center bg-aura-black overflow-hidden">
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeExp.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeExp.image}
            alt={activeExp.title}
            className="w-full h-full object-cover opacity-40"
          />
          {/* Dynamic Color Overlay based on active experience */}
          <div className={cn("absolute inset-0 bg-gradient-to-r to-aura-black z-10", activeExp.color)} />
          <div className="absolute inset-0 bg-aura-black/60 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-16">
          <h2 className="text-sm text-aura-gold tracking-[0.2em] uppercase mb-4">Environmental Control</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-aura-white">Sensory Matrix</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls UI */}
          <div className="lg:col-span-5 space-y-4">
            {EXPERIENCES.map((exp) => {
              const isActive = activeExp.id === exp.id;
              const Icon = exp.icon;

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp)}
                  className={cn(
                    "w-full text-left p-6 border transition-all duration-500 backdrop-blur-sm group flex items-start gap-4",
                    isActive
                      ? "border-aura-gold bg-aura-gold/10"
                      : "border-aura-white/10 hover:border-aura-white/30 bg-transparent"
                  )}
                >
                  <div className={cn(
                    "p-3 border rounded-none transition-colors duration-500",
                    isActive ? "border-aura-gold text-aura-gold" : "border-aura-white/20 text-aura-white/50 group-hover:text-aura-white"
                  )}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className={cn(
                      "font-serif text-lg md:text-xl mb-2 transition-colors duration-500",
                      isActive ? "text-aura-white" : "text-aura-white/50 group-hover:text-aura-white"
                    )}>
                      {exp.title}
                    </h4>

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm text-aura-white/70 overflow-hidden"
                        >
                          {exp.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visualizer / Data Readout (Tech-forward UI) */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md border border-aura-white/10 bg-aura-black/50 backdrop-blur-md p-8 relative">
              {/* Decorative Tech Elements */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-aura-gold" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-aura-gold" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-aura-gold" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-aura-gold" />

              <div className="flex justify-between items-center mb-8 border-b border-aura-white/10 pb-4">
                <span className="text-[10px] uppercase font-mono text-aura-gold tracking-widest">System Status</span>
                <span className="text-[10px] uppercase font-mono text-green-500 tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Online
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="font-serif text-2xl mb-6">{activeExp.title}</h5>

                  {/* Mock Data Bars */}
                  <div className="space-y-4">
                    {stats.map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-mono text-aura-white/50 mb-1">
                          <span>{stat.label}</span>
                          <span>{stat.value.toFixed(1)}%</span>
                        </div>
                        <div className="h-1 w-full bg-aura-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-aura-gold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
