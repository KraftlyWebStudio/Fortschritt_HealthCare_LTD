"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "manufacturing",
    icon: "factory",
    title: "Manufacturing Plant",
    subtitle: "WHO-GMP Certified Facility",
    description: "Our state-of-the-art production site in Baddi, Himachal Pradesh features end-to-end lines for multiple dosage forms. We maintain rigorous standards, utilizing custom nitrogen-flushed operations and automated filling technology to assure the highest purity and output consistency.",
    highlights: [
      "Dedicated sections: Soft Gel, Tablets & Capsules",
      "Specialized facilities: General, Beta-Lactam, Cephalosporins",
      "Specialized lines: Anti-TB & Effervescent dosage forms",
      "Mass Capacity: Production of 1800+ formulation products",
      "Controlled environments: Class 100,000 cleanrooms",
      "Fully automated packaging and stability-pack strip sealers"
    ]
  },
  {
    id: "rnd",
    icon: "biotech",
    title: "Research & Development",
    subtitle: "Formulation Innovation & Bioavailability",
    description: "Our R&D division is the scientific engine of Fortschritt Healthcare. Staffed by industrial chemists and formulation scientists, we design next-generation dosage forms, optimize drug release profiles, and conduct rigorous stability analyses.",
    highlights: [
      "Advanced analytical lab: HPLC, Gas Chromatography, Mass Spec",
      "Preformulation & excipient compatibility analysis",
      "Stability testing chambers (fully ICH guideline compliant)",
      "Dedicated API synthesis & dosage replication laboratory",
      "Pilot-scale batch creation for pre-clinical evaluation",
      "Intellectual support for dossiers and CTD registration"
    ]
  },
  {
    id: "quality",
    icon: "verified",
    title: "Quality Control",
    subtitle: "Zero-Compromise Compliance",
    description: "Quality is embedded in every phase of our operations. Working independently from production, our QA and QC departments monitor raw materials, test in-process batches, and run complete validation audits to ensure absolute standard adherence.",
    highlights: [
      "Strict in-process control checks at every stage",
      "Validated analytical testing methods (ICH Q2 compliance)",
      "State-of-the-art microbiology & sterility testing chambers",
      "Post-marketing retained sample repository room",
      "Full digital batch-traceability & document-control system",
      "Regular internal audits & DCGI compliance validation"
    ]
  },
  {
    id: "certifications",
    icon: "workspace_premium",
    title: "Certifications",
    subtitle: "Quality Assurance Standards",
    description: "Quality is at the heart of everything we do. Our manufacturing processes and facilities adhere to the most stringent international standards, validated by regulatory bodies to ensure safety, efficacy, and reliability in every batch.",
    certifications: [
      { title: "WHO-GMP", description: "Compliance with World Health Organization Good Manufacturing Practices ensuring consistent quality.", code: "WHO" },
      { title: "ISO 9001:2015", description: "International standard for quality management systems ensuring customer satisfaction and safety.", code: "ISO" },
      { title: "DCGI Approved", description: "Regulatory compliance and approval from the Drug Controller General of India.", code: "DCGI" },
      { title: "US-FDA Compliance", description: "Adherence to stringent international standards for global pharmaceutical distribution.", code: "US-FDA" },
    ]
  }
];

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <section id="infrastructure" className="py-24 bg-slate-50 overflow-hidden border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Facilities & Standards
          </div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">
            Infrastructure & Quality Standards
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            World-class manufacturing capability, formulation research, and absolute quality validation combined under international regulatory benchmarks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-[2rem] shadow-md border border-slate-100 grid grid-cols-2 md:flex md:flex-row gap-2 max-w-4xl w-full">
            {sections.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2.5 px-4.5 py-4 rounded-[22px] text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-slate-500 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  <span className="material-icons text-lg sm:text-xl">{tab.icon}</span>
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {/* Top Row: Description */}
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider">
                  <span className="material-icons text-sm">{activeSection.icon}</span>
                  {activeSection.subtitle}
                </span>
                <h3 className="text-3xl font-extrabold text-primary">
                  {activeSection.title}
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  {activeSection.description}
                </p>
              </div>

              {/* Bottom Row: Grid of Highlights / Certifications */}
              <div className="max-w-6xl mx-auto">
                {activeSection.certifications ? (
                  // Custom rendering for Certifications tab - 4 columns on desktop
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activeSection.certifications.map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -5, borderColor: "rgba(30,58,138,0.15)" }}
                        className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 flex flex-col h-full text-left"
                      >
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-4 font-bold text-xs">
                          {item.code}
                        </div>
                        <h4 className="font-bold text-primary mb-2 text-[15px]">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Standard rendering for other tabs - 3 columns on desktop, 2 on tablet, 1 on mobile
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeSection.highlights?.map((highlight) => (
                      <div
                        key={highlight}
                        className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300 text-left"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-icons text-sm">check</span>
                        </div>
                        <span className="text-slate-600 text-sm font-semibold leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;
