import React from 'react';

const GlobalPresence = () => {
  return (
    <section id="presence" className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Global Network</h2>
            <h3 className="text-4xl font-extrabold mb-8 font-display">Serving 40+ Nations Worldwide</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              With a robust export network and strategic international alliances, Fortschritt Healthcare products are trusted by healthcare professionals and patients across continents.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Export Countries', value: '45+' },
                { label: 'Global Partners', value: '120+' },
                { label: 'Certifications', value: '15+' },
                { label: 'Product Dossiers', value: '500+' }
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-extrabold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Map Placeholder with markers */}
            <div className="aspect-[4/3] rounded-3xl bg-slate-800/50 border border-white/10 relative overflow-hidden flex items-center justify-center group">
              <span className="material-icons text-8xl text-white/5 group-hover:scale-110 transition-transform">public</span>
              
              {/* Markers */}
              {[
                { t: '20%', l: '30%' },
                { t: '40%', l: '70%' },
                { t: '60%', l: '40%' },
                { t: '30%', l: '60%' },
                { t: '70%', l: '80%' }
              ].map((pos, idx) => (
                <div 
                  key={`${pos.t}-${pos.l}`} 
                  className="absolute animate-pulse" 
                  style={{ top: pos.t, left: pos.l }}
                >
                  <div className="h-4 w-4 bg-secondary rounded-full shadow-[0_0_15px_rgba(33,134,195,0.8)]"></div>
                </div>
              ))}
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-sm italic text-slate-300">
                  "Our expanding footprint is a testament to our commitment to global wellness."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
