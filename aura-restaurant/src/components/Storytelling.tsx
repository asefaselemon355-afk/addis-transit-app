import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const textY1 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <section
      id="the-chef"
      ref={containerRef}
      className="py-32 px-6 md:px-12 bg-aura-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content - Left */}
          <div className="lg:col-span-5 z-10">
            <motion.div
              style={{ y: textY1 }}
              className="mb-12"
            >
              <h2 className="text-sm text-aura-gold tracking-[0.2em] uppercase mb-6">Our Philosophy</h2>
              <p className="text-3xl md:text-4xl font-serif leading-tight">
                "WE EXPERIMENT WITH UNUSUAL FLAVOR PROFILES AND DISCIPLINE TO GENERATE DINING EXPERIENCES THAT INTERACT WITH THE SENSES."
              </p>
            </motion.div>

            <motion.div
              style={{ y: textY2 }}
              className="space-y-6 text-aura-white/60 text-sm md:text-base leading-relaxed max-w-md"
            >
              <p>
                Founded in 2026, AURA transcends the traditional boundaries of gastronomy. We believe that a meal is not merely sustenance, but a multi-sensory narrative crafted through meticulous engineering and profound respect for raw materials.
              </p>
              <p>
                Our laboratory kitchen dissects nostalgia and reformulates it using modern technology—from sonic aging processes to precision climate-controlled fermentation.
              </p>
            </motion.div>
          </div>

          {/* Image Content - Right */}
          <div className="lg:col-span-7 h-[60vh] md:h-[80vh] relative w-full group">
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                style={{ scale: imgScale, y: imgY }}
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
                alt="Chef preparing a dish"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-aura-dark via-transparent to-transparent opacity-100 lg:opacity-80" />
            </div>

            {/* Floating Statistic Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12 -left-6 md:-left-12 bg-aura-black/80 backdrop-blur-md border border-aura-white/10 p-6 max-w-[200px]"
            >
              <span className="block text-4xl font-serif text-aura-gold mb-2">03</span>
              <span className="text-xs uppercase tracking-widest text-aura-white/70">Michelin Stars</span>
              <div className="w-full h-[1px] bg-aura-white/20 mt-4 mb-2" />
              <span className="text-[10px] text-aura-white/40">Awarded consecutively since inception.</span>
            </motion.div>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="mt-32 overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="inline-block"
          >
            <span className="text-9xl font-serif font-bold uppercase mx-4">Innovation</span>
            <span className="text-9xl font-serif font-bold uppercase mx-4 text-transparent stroke-text">Discipline</span>
            <span className="text-9xl font-serif font-bold uppercase mx-4">Artistry</span>
            <span className="text-9xl font-serif font-bold uppercase mx-4 text-transparent stroke-text">Precision</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
