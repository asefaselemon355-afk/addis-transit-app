import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const MENU_ITEMS = [
  {
    id: "01",
    title: "Liquid Nitrogen Spherified Truffle",
    tag: "Chef's Selection",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80",
    description: "Alba white truffle encapsulated in a delicate nitrogen shell, exploding with umami upon contact. Served over compressed charcoal earth.",
    ingredients: "White Truffle, Activated Charcoal, Molecular Cream",
    price: "$125",
  },
  {
    id: "02",
    title: "Bioluminescent Ocean Flora",
    tag: "Seasonal Harvest",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80",
    description: "Deep-sea algae cured in citrus, presenting a natural bioluminescence. Paired with line-caught sea bass and a yuzu foam.",
    ingredients: "Sea Bass, Glowing Algae, Yuzu, Sea Salt",
    price: "$95",
  },
  {
    id: "03",
    title: "Deconstructed Wagyu Nebula",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80",
    description: "A5 Wagyu beef lightly smoked with cherry wood, presented as a celestial array with fermented berry dust and aged balsamic caviar.",
    ingredients: "A5 Wagyu, Cherry Smoke, Fermented Berry, Balsamic",
    price: "$180",
  },
  {
    id: "04",
    title: "Crystalline Honeycomb Dessert",
    tag: "Finale",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e40?auto=format&fit=crop&q=80",
    description: "A geometric interpretation of nature. Spun sugar glass, wild honey gelato, and a lavender-infused smoke that dissipates upon serving.",
    ingredients: "Wild Honey, Spun Sugar, Lavender Smoke, Vanilla",
    price: "$65",
  },
];

export function MenuShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="menu" className="py-32 px-6 md:px-12 bg-aura-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-aura-gold tracking-[0.2em] uppercase mb-4">Culinary Architecture</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-aura-white">The Collection</h3>
          </motion.div>
          <motion.p
            className="text-aura-white/50 max-w-sm text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Each dish is engineered to provoke a specific emotion, utilizing cutting-edge techniques while honoring ancient ingredients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group h-[500px] bg-aura-gray overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black via-aura-black/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-sm"
                />
              </div>

              {/* Default Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-aura-gold">#{item.id}</span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-aura-white/20 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                  <div className="w-8 h-[1px] bg-aura-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

              {/* Hover Content */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-full p-6 z-30 pt-0"
                  >
                    <p className="text-sm text-aura-white/80 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="block text-[10px] uppercase text-aura-white/50 mb-1">Origin Elements</span>
                        <span className="text-xs text-aura-white">{item.ingredients}</span>
                      </div>
                      <span className="font-serif text-xl text-aura-gold">{item.price}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interaction Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="w-12 h-12 rounded-full border border-aura-white/30 flex items-center justify-center backdrop-blur-md">
                  <Plus className="text-aura-white w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
