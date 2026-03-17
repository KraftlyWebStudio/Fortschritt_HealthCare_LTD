"use client";

import React from "react";

const Welcome = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome To <span className="text-secondary">Fortschritt</span>
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Fortschritt Healthcare Limited is a rapidly growing pharmaceutical force. 
                Currently ranked among the trusted names in the Indian healthcare landscape, 
                Fortschritt is backed by a robust network of business units and a dedicated 
                workforce committed to medical excellence.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Established in 2012, our company stands as a beacon of quality 
                and innovation. Registered with the Registrar of Companies, we have 
                consistently delivered excellence in therapeutic solutions across India.
              </p>
            </div>
            <button className="mt-10 bg-gradient-to-r from-secondary to-pink-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
              Read More
            </button>
          </div>

          {/* Visual Side with 3D Card Flip */}
          <div className="lg:w-1/2 relative group perspective-[2000px]">
            {/* Flip Container */}
            <div className="relative w-full aspect-[4/3] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/about-facility.png" 
                  alt="Modern Pharmaceutical Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/home/hero-scientist.png" 
                  alt="Medical Research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
              </div>

              {/* Decorative Accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-400/10 transition-colors"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl -z-10 group-hover:bg-secondary/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
