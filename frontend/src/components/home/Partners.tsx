"use client";

import React from "react";
import { FadeIn, motion } from "@/utils/animations";

const partners = [
  { name: "Akumentis Healthcare Ltd.", type: "Strategic Partner", logo: "/partners/akumentis.webp" },
  { name: "Koye Pharmaceuticals", type: "Manufacturing Partner", logo: "/partners/koye.webp" },
  { name: "Wanbury Limited", type: "Strategic Partner", logo: "/partners/wanbury.webp" },
  { name: "Tirupati Medicare", type: "Manufacturing Partner", logo: "/partners/tirupati.webp" },
  { name: "SUREMED", type: "Healthcare Partner", logo: "/partners/suremed.webp" },
  { name: "UNIMARK", type: "Pharma Client", logo: "/partners/unimarck.webp" },
  { name: "Menschlich Healthcare", type: "Collaborator", logo: "/partners/menschlich.webp" },
  { name: "Symulux Pharmaceuticals", type: "Export Partner", logo: "/partners/symlux.webp" },
  { name: "Atlanta Biological USA", type: "International Client", logo: "/partners/atlanta.webp" },
  { name: "VHA Pharma", type: "Pharma Partner", logo: "/partners/vha.webp" },
  { name: "Ruan Life Sciences", type: "Export Partner", logo: "/partners/ruan.webp" },
  { name: "Britannia Biological", type: "Manufacturing Client", logo: "/partners/britannia.webp" },
  { name: "Keita Pharma", type: "Strategic Client", logo: "/partners/keita.webp" },
  { name: "Megacare Life Sciences", type: "Strategic Partner", logo: "/partners/mega.webp" },
  { name: "Triglobal Biosciences", type: "Biosciences Partner", logo: "/partners/triglobal.webp" },
  { name: "Servocare Lifesciences", type: "Healthcare Client", logo: "/partners/servocare.webp" },
  { name: "NOVALAB HEALTH CARE", type: "Pharma Partner", logo: "/partners/novalab.webp" },
  { name: "Prowill Pharma", type: "Collaborator", logo: "/partners/akumentis.webp" },
  { name: "Ramburg Pharma", type: "Manufacturing Partner", logo: "/partners/akumentis.webp" },
  { name: "Vitaglobal", type: "Strategic Client", logo: "/partners/akumentis.webp" },
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
        <div className="flex animate-scroll hover:[animation-play-state:paused] py-8">
          {[...partners, ...partners].map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex-shrink-0 w-64 mx-10 flex flex-col items-center justify-center text-center"
            >
              <div className="w-40 h-24 mb-6 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 hover:scale-110 mix-blend-multiply"
                />
              </div>
              <p className="text-primary font-bold text-sm mb-1 line-clamp-1">{partner.name}</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{partner.type}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-336px * 20)); }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
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
