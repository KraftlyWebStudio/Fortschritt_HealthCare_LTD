"use client";

import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Strategic Business Partners
          </h2>
          <p className="text-slate-600 mb-6">
            We collaborate with global healthcare leaders and research institutions to drive innovation and maintain the highest standards of pharmaceutical excellence.
          </p>
          <a
            href="#"
            className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-4 decoration-primary/20 hover:decoration-primary"
          >
            Partner With Us <span className="material-icons">arrow_forward</span>
          </a>
        </div>
        
        <div className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center gap-3">
            <img 
              src="/images/brand/logo.png" 
              alt="Fortschritt Healthcare" 
              className="h-10 w-auto"
            />
            <span className="text-slate-900 font-bold text-sm tracking-tight">FORTSCHRITT</span>
          </div>
          
          {[
            { name: "Global Pharma", type: "Research" },
            { name: "Himachal Bio", type: "Manufacturing" },
            { name: "Apex Labs", type: "Quality" },
            { name: "LifeCare", type: "Distribution" },
            { name: "EuroHealth", type: "Supply" }
          ].map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-2 group-hover:bg-primary/5 transition-colors">
                  <span className="material-icons text-slate-400 text-2xl">business</span>
               </div>
               <div className="text-slate-900 font-bold text-sm leading-tight">{partner.name}</div>
               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mt-1">{partner.type}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
