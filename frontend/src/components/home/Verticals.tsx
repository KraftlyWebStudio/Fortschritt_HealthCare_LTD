"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const verticals = [
  { title: "Soft Gel Capsules", description: "State-of-the-art manufacturing of Allopathic and Nutraceutical soft gelatin capsules.", icon: "medication", image: "/home/capsules.webp", tag: "Allopathic/Nutra" },
  { title: "Solid Oral Doses", description: "Best-in-class manufacturing of Hormonal Tablets, General Tablets, and Capsules.", icon: "tablets", image: "/home/tablets.webp", tag: "Hormonal/General" },
  { title: "Oral Liquids", description: "Comprehensive range of Suspensions and Syrups for Allopathic and Nutraceutical segments.", icon: "water_drop", image: "/home/injectables.webp", tag: "Susp/Syrup" },
  { title: "Dry Powder & Injectables", description: "Specialized sections for Dry Powder Syrups and Injectable formulations.", icon: "science", image: "/home/hero-lab.webp", tag: "Dry Powder/Inj" },
  { title: "Ointments & Creams", description: "Production of Ointments, Creams, and Topical Sprays for Allopathic and Cosmetic use.", icon: "clean_hands", image: "/home/shampoo.webp", tag: "Topical/Cosmetic" },
  { title: "Specialty Formulations", description: "Dedicated manufacturing for Sachets, Protein Powders, and Nutraceutical Syrups.", icon: "health_and_safety", image: "/home/soap.webp", tag: "Sachet/Protein" },
];

const Verticals = () => {
  return (
    <section id="verticals" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Core Therapeutic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Verticals</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Our state-of-the-art facilities produce a wide range of therapeutic formulations across multiple delivery systems.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {verticals.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute top-6 right-6 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary shadow-xl border border-white/40">
                  <span className="material-icons text-3xl">{item.icon}</span>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest bg-primary/80 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  {item.tag}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium line-clamp-3">
                  {item.description}
                </p>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  Explore Range
                  <span className="material-icons text-lg">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default Verticals;
