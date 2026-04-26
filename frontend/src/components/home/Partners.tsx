"use client";

import React from "react";
import { FadeIn, motion } from "@/utils/animations";

const partners = [
  { name: "Akumentis Healthcare Ltd.", type: "Pharmaceutical Partner", icon: "science" },
  { name: "Koye Pharmaceuticals", type: "Manufacturing Client", icon: "factory" },
  { name: "Wanbury Ltd.", type: "Strategic Partner", icon: "verified" },
  { name: "Tirupati Medicare", type: "Collaborator", icon: "biotech" },
  { name: "SUREMED", type: "Healthcare Partner", icon: "health_and_safety" },
  { name: "Unimark", type: "Pharma Client", icon: "inventory" },
  { name: "Menschlich Healthcare", type: "Manufacturing Partner", icon: "medication" },
  { name: "Symulux Pharmaceuticals", type: "Export Partner", icon: "public" },
  { name: "Atlanta Biological USA", type: "International Client", icon: "language" },
  { name: "VHA Pharma", type: "Manufacturing Client", icon: "precision_manufacturing" },
  { name: "Ruan Life Sciences", type: "Pharma Collaborator", icon: "science" },
  { name: "Britannia Biological", type: "Biological Partner", icon: "coronavirus" },
  { name: "Keita Pharma", type: "Strategic Client", icon: "business_center" },
  { name: "Megacare Life Sciences", type: "Pharma Partner", icon: "medical_services" },
  { name: "Triglobal Biosciences", type: "Biosciences Partner", icon: "biotech" },
  { name: "Servocare Lifesciences", type: "Collaborator", icon: "health_and_safety" },
  { name: "Novalab Healthcare", type: "Healthcare Client", icon: "medication" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <FadeIn direction="left" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              Collaborations
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-6">
              Strategic Pharmaceutical <span className="text-primary-accent text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Partnerships</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              We collaborate with healthcare leaders and research institutions to drive innovation and maintain the highest standards of pharmaceutical excellence across the nation.
            </p>
          </FadeIn>

          <FadeIn direction="right">
            <motion.a
              href="/contact"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(30,58,138,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex items-center gap-4 bg-white px-8 py-4 rounded-2xl font-bold text-slate-700 hover:text-primary transition-all border border-slate-200 shadow-sm"
            >
              Partner With Us
              <span className="material-icons text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </motion.a>
          </FadeIn>
        </div>
      </div>

      {/* Infinite Scroll Logo Cloud */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 py-4">
          {[...partners, ...partners].map((p, idx) => (
            <motion.div
              key={`${idx}-${p.name}`}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-64 glass p-8 rounded-[24px] border border-white/50 group cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all shadow-sm">
                  <span className="material-icons text-3xl">{p.icon}</span>
                </div>
                <div>
                  <div className="text-primary font-bold text-base tracking-tight group-hover:text-primary-accent transition-colors">{p.name}</div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">{p.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-256px * 17 - 32px * 17)); }
        }
        .animate-scroll {
          animation: scroll 110s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
