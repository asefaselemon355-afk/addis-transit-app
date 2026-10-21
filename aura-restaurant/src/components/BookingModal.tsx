import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      onClose();
      setTimeout(() => setStep("form"), 500); // Reset after close animation
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-aura-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal / Slide-over */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-aura-dark border-l border-aura-white/10 z-[101] overflow-y-auto"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-serif text-aura-white">Reservation</h2>
                <button
                  onClick={onClose}
                  className="p-2 border border-aura-white/10 hover:bg-aura-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {step === "form" ? (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    <div>
                      <label className="block text-xs uppercase text-aura-white/50 tracking-widest mb-2 font-mono">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-transparent border-b border-aura-white/30 py-2 text-aura-white focus:outline-none focus:border-aura-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-aura-white/50 tracking-widest mb-2 font-mono">
                        Time
                      </label>
                      <select
                        required
                        className="w-full bg-aura-dark border-b border-aura-white/30 py-2 text-aura-white focus:outline-none focus:border-aura-gold transition-colors appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-aura-white/50 tracking-widest mb-2 font-mono">
                        Guests
                      </label>
                      <select
                        required
                        className="w-full bg-aura-dark border-b border-aura-white/30 py-2 text-aura-white focus:outline-none focus:border-aura-gold transition-colors appearance-none"
                      >
                        <option value="">Select Guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-aura-white/50 tracking-widest mb-2 font-mono">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-aura-white/30 py-2 text-aura-white focus:outline-none focus:border-aura-gold transition-colors placeholder:text-aura-white/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-aura-white/50 tracking-widest mb-2 font-mono">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-aura-white/30 py-2 text-aura-white focus:outline-none focus:border-aura-gold transition-colors placeholder:text-aura-white/20"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-[10px] text-aura-white/40 mb-6 font-mono leading-relaxed">
                      By proceeding, you agree to our strict cancellation policy. Modifications are not permitted within 48 hours of the reservation.
                    </p>
                    <button
                      type="submit"
                      className="w-full py-4 bg-aura-white text-aura-black font-semibold text-sm uppercase tracking-widest hover:bg-aura-gold hover:text-aura-black transition-colors duration-300"
                    >
                      Request Table
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-aura-gold flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-2 h-2 rounded-full bg-aura-gold"
                    />
                  </div>
                  <h3 className="text-2xl font-serif text-aura-white mb-2">Request Received</h3>
                  <p className="text-sm text-aura-white/60">
                    Your reservation is currently pending structural alignment. A confirmation will be sent to your coordinates shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
