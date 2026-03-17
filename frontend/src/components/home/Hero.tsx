"use client";

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden bg-slate-100">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern Pharmaceutical Laboratory"
          className="w-full h-full object-cover"
          src="/images/home/hero-lab-v2.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Established 2012
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Advancing Human Health Through <span className="text-primary">Precision Medicine</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            Fortschritt Healthcare Limited is a global leader in pharmaceutical manufacturing, committed to delivering high-quality, accessible, and life-saving medicinal solutions since 2012.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
            >
              Explore Portfolio <span className="material-icons">arrow_forward</span>
            </a>
            <a
              href="#about"
              className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              Our Legacy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
