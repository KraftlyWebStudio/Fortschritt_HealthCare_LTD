"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const verticals = [
  { 
    title: "Soft Gel Capsules", 
    description: "State-of-the-art manufacturing of Allopathic and Nutraceutical soft gelatin capsules with precision dosing.", 
    icon: "medication", 
    image: "/home/capsules.webp", 
    tag: "Allopathic/Nutra" 
  },
  { 
    title: "Solid Oral Doses", 
    description: "Specialized in Hormonal Tablets, General Tablets, and Capsules with advanced coating technologies.", 
    icon: "tablets", 
    image: "/home/tablets.webp", 
    tag: "Hormonal/General",
    isBestseller: true,
    bestsellerText: "Most Selling: Hormonal Tablets"
  },
  { 
    title: "Oral Liquids", 
    description: "Comprehensive range of Suspensions and Syrups for Allopathic and Nutraceutical therapeutic segments.", 
    icon: "water_drop", 
    image: "/home/injectables.webp", 
    tag: "Susp/Syrup" 
  },
  { 
    title: "Dry Powder & Injectables", 
    description: "Strict environmental controls for Dry Powder Syrups and high-purity Injectable formulations.", 
    icon: "science", 
    image: "/home/hero-lab.webp", 
    tag: "Dry Powder/Inj" 
  },
  { 
    title: "Ointments & Topicals", 
    description: "Production of Ointments, Creams, and Topical Sprays for Allopathic and Cosmetic applications.", 
    icon: "clean_hands", 
    image: "/home/shampoo.webp", 
    tag: "Topical/Cosmetic" 
  },
  { 
    title: "Specialized Sachets", 
    description: "Precision-filled sachets for convenient dosing across various therapeutic and health segments.", 
    icon: "inventory_2", 
    image: "/home/hero-packaging.webp", 
    tag: "Sachet" 
  },
  { 
    title: "Protein Powders", 
    description: "High-grade nutritional supplements and protein formulations manufactured under FSSAI standards.", 
    icon: "fitness_center", 
    image: "/home/hero-scientist.webp", 
    tag: "Nutraceutical" 
  },
  { 
    title: "Nutraceutical Syrups", 
    description: "Deliciously formulated health syrups enriched with essential vitamins and mineral complexes.", 
    icon: "vaccines", 
    image: "/home/soap.webp", 
    tag: "Syrup" 
  },
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

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                {item.isBestseller && (
                  <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 text-center shadow-lg border-b border-amber-300/30 backdrop-blur-sm animate-pulse">
                      🌟 {item.bestsellerText} 🌟
                    </div>
                  </div>
                )}

                <div className="absolute top-6 right-6 w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary shadow-2xl border border-white/40 group-hover:rotate-12 transition-transform duration-500">
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-primary/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  {item.tag}
                </div>
              </div>

              <div className="p-8 relative">
                {item.isBestseller && (
                  <div className="absolute -top-4 right-8 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                    <span className="material-icons text-xl">trending_up</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium line-clamp-2">
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
