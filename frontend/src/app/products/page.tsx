"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const categories = [
  {
    id: "softgel",
    icon: "medication",
    title: "Soft Gel Capsules",
    subtitle: "Allopathic / Nutraceuticals",
    description: "Our state-of-the-art soft gelatin manufacturing facility produces high-quality capsules for both Allopathic treatments and Nutraceutical supplements, ensuring optimal bioavailability and stability.",
    products: ["Allopathic Softgels", "Nutraceutical Softgels", "Vitamin D3 Softgels", "Omega-3 Softgels", "Evening Primrose Oil", "Custom Formulations"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "solid-oral",
    icon: "tablets",
    title: "Solid Oral Doses",
    subtitle: "Tabs / Caps (Allopathic / Hormonal / Nutra)",
    description: "We excel in the manufacturing of solid oral dosage forms. Our facility features dedicated sections for General and Hormonal tablets, maintaining the highest standards of containment and quality.",
    products: ["Hormonal Tablets (Most Selling)", "General Tablets", "Hard Gelatin Capsules", "Sustained Release Tabs", "Mouth Dissolving Tabs", "Coated Tablets"],
    color: "bg-amber-500/10 text-amber-600",
    isBestseller: true,
  },
  {
    id: "oral-liquids",
    icon: "water_drop",
    title: "Oral Liquids",
    subtitle: "Suspensions / Syrups (Allopathic / Nutra)",
    description: "Equipped with high-capacity mixing and filling lines, our liquids section produces stable and palatable suspensions and syrups for a wide range of therapeutic categories.",
    products: ["Cough Syrups", "Antacid Suspensions", "Vitamin Syrups", "Pediatric Drops", "Nutraceutical Liquids", "Digestive Enzymes"],
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: "dry-powder",
    icon: "science",
    title: "Dry Powder & Injectables",
    subtitle: "Allopathic / Nutraceutical",
    description: "Our specialized sections for Dry Powder Syrups and Injectables operate under stringent sterile and environmental conditions to ensure the safety and efficacy of every dose.",
    products: ["Dry Powder Syrups", "Liquid Injectables", "Lyophilized Injections", "Cephalosporin Injections", "Nutritional Injections", "Antibiotic Dry Syrups"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: "topicals",
    icon: "clean_hands",
    title: "Ointment / Cream / Spray",
    subtitle: "Allopathic / Cosmetic",
    description: "From therapeutic ointments to premium cosmetic creams and topical sprays, our topical section utilizes advanced emulsification technology for superior texture and absorption.",
    products: ["Antifungal Creams", "Pain Relief Gels", "Moisturizing Lotions", "Topical Sprays", "Cosmetic Formulations", "Medicated Shampoos"],
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    id: "sachet",
    icon: "inventory_2",
    title: "Sachets",
    subtitle: "Single Dose Packaging",
    description: "High-speed sachet packing lines for powders, granules, and liquids, providing convenient and accurate single-dose solutions for patients and consumers.",
    products: ["ORS Sachets", "Probiotic Sachets", "Collagen Powders", "Pre-workout Sachets", "Vitamin Granules", "Energy Powders"],
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    id: "protein",
    icon: "fitness_center",
    title: "Protein Powder",
    subtitle: "High-Quality Nutraceuticals",
    description: "Dedicated protein powder manufacturing facility producing a range of supplements for sports nutrition, general wellness, and clinical nutrition requirements.",
    products: ["Whey Protein", "Plant Protein", "Weight Gainers", "Meal Replacements", "Amino Acid Blends", "BCAA Formulations"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    id: "syrup-extra",
    icon: "vaccines",
    title: "Health Syrups",
    subtitle: "Nutraceutical Formulations",
    description: "Specialized focus on health-promoting syrups and liquid supplements designed for daily wellness and targeted nutritional support.",
    products: ["Iron Tonics", "Calcium Suspensions", "B-Complex Syrups", "Liver Tonics", "Ayurvedic Syrups", "Immunity Boosters"],
    color: "bg-rose-500/10 text-rose-600",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-icons text-sm">inventory_2</span>
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Product Portfolio
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            High-quality pharmaceutical formulations across multiple therapeutic segments, manufactured to international standards.
          </p>
          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/20">
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {categories.map((cat, idx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                {cat.isBestseller && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-amber-500/20 animate-bounce">
                    <span className="material-icons text-sm">auto_awesome</span>
                    Global Bestseller
                  </div>
                )}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${cat.color}`}>
                  <span className="material-icons text-sm">{cat.icon}</span>
                  {cat.subtitle}
                </div>
                <h2 className="text-4xl font-extrabold text-primary mb-6">{cat.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">{cat.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {cat.products.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-slate-600 font-medium p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                      <span className="material-icons text-primary text-base group-hover:scale-110 transition-transform">check_circle</span>
                      {p}
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:gap-4 shadow-xl shadow-primary/20">
                  <span className="material-icons text-sm">mail_outline</span>
                  Enquire Now
                </Link>
              </div>
              <div className={`relative bg-primary/5 rounded-[40px] p-12 flex items-center justify-center ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {cat.isBestseller && (
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-60 animate-pulse" />
                )}
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 mx-auto rounded-[40px] bg-white shadow-2xl flex items-center justify-center text-primary mb-6 border border-slate-50 group hover:rotate-6 transition-transform duration-500">
                    <span className="material-icons text-7xl">{cat.icon}</span>
                  </div>
                  <p className="text-primary font-bold text-2xl">{cat.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{cat.subtitle}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-extrabold text-white mb-4">Want the Full Product Catalog?</h2>
          <p className="text-white/70 mb-8">Get in touch with our team for detailed specifications, pricing, and regulatory documentation.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Contact Our Team
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
