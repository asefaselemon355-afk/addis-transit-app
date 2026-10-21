import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleWave } from "./ParticleWave";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-aura-black">
      {/* Background Video */}
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        {/* Placeholder video from a reliable source */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
        >
          {/* Using a placeholder food/fire video. In a real scenario, this would be a high-end custom asset. */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-chef-cooking-in-a-pan-with-fire-22879-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Particle Effect */}
      <ParticleWave />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-aura-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-semibold"
        >
          Michelin-Starred Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl text-aura-white font-bold leading-tight"
        >
          TASTE <br className="md:hidden" />
          <span className="italic font-light">WITHOUT</span> <br className="md:hidden" />
          BOUNDARIES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-aura-white/50">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-aura-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
