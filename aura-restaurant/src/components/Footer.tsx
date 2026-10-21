export function Footer() {
  return (
    <footer className="bg-aura-black border-t border-aura-white/10 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-widest mb-6">AURA</h2>
            <p className="text-aura-white/50 text-sm max-w-sm">
              Generating dining experiences that interact with the senses through relentless experimentation and discipline.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-aura-gold uppercase tracking-widest mb-6 font-mono">Location</h4>
            <address className="not-italic text-sm text-aura-white/70 space-y-2">
              <p>Neo-Kyoto District, Sector 4</p>
              <p>Level 88, The Spire</p>
              <p className="pt-4 font-mono text-xs">LAT: 35.0116 N / LON: 135.7681 E</p>
            </address>
          </div>

          <div>
            <h4 className="text-xs text-aura-gold uppercase tracking-widest mb-6 font-mono">Operations</h4>
            <div className="text-sm text-aura-white/70 space-y-2">
              <p>Wednesday — Sunday</p>
              <p>18:00 — 23:00</p>
              <p className="pt-4 text-xs italic text-aura-white/40">
                Reservations released 60 days in advance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-aura-white/10 text-xs text-aura-white/40">
          <p>© 2026 AURA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-aura-white transition-colors uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-aura-white transition-colors uppercase tracking-widest">Journal</a>
            <a href="#" className="hover:text-aura-white transition-colors uppercase tracking-widest">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
