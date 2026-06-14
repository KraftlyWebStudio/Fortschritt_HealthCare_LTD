"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// High-fidelity product list with detailed specs
const products = [
  // Gynecology Range
  {
    id: "gyn-1",
    name: "Progyn-M 200",
    composition: "Natural Micronized Progesterone",
    strength: "200 mg",
    packaging: "10x10 Softgel Capsules in Alu-Alu",
    indication: "Progesterone supplement for luteal support, prevention of preterm birth, and hormone replacement therapy.",
    category: "gynecology",
    categoryLabel: "Gynecology Range",
    details: "Manufactured under state-of-the-art nitrogen-flushed conditions to ensure high stability of soft gel shells and precise bio-availability.",
    standards: "WHO-GMP, ISO 9001:2015"
  },
  {
    id: "gyn-2",
    name: "Gynocare-F",
    composition: "L-Methylfolate, Pyridoxal-5-Phosphate, Methylcobalamin",
    strength: "1mg + 0.5mg + 1500mcg",
    packaging: "10x10 Tablets in Blister Pack",
    indication: "Active folate supplement during pregnancy to support fetal neural tube development and prevent anemia.",
    category: "gynecology",
    categoryLabel: "Gynecology Range",
    details: "Premium prenatal care tablet formulated with highly bioavailable L-Methylfolate to bypass folate-pathway mutations.",
    standards: "WHO-GMP, ISO 22000"
  },
  {
    id: "gyn-3",
    name: "Clomiprime 50",
    composition: "Clomiphene Citrate",
    strength: "50 mg",
    packaging: "10x10 Tablets in Alu-Alu",
    indication: "Ovulatory stimulant for women with ovulatory dysfunction seeking pregnancy.",
    category: "gynecology",
    categoryLabel: "Gynecology Range",
    details: "Induces ovulation by mimicking low estrogen levels, stimulating gonadotropin release and follicular growth.",
    standards: "WHO-GMP"
  },
  {
    id: "gyn-4",
    name: "Uricare Sachets",
    composition: "Cranberry Extract + D-Mannose + Potassium Citrate",
    strength: "300mg + 600mg + 1000mg",
    packaging: "10x15 Effervescent Sachets",
    indication: "Prevention and adjunct treatment of recurrent Urinary Tract Infections (UTIs).",
    category: "gynecology",
    categoryLabel: "Gynecology Range",
    details: "Sugar-free effervescent granules with high anti-adherence activity against uropathogenic E. coli.",
    standards: "ISO 22000, HACCP"
  },

  // General Medicine
  {
    id: "gen-1",
    name: "Fort-Para 650",
    composition: "Paracetamol (Acetaminophen)",
    strength: "650 mg",
    packaging: "10x15 Tablets in Blister Pack",
    indication: "Fever reduction and temporary relief of mild-to-moderate systemic pain.",
    category: "general",
    categoryLabel: "General Medicine",
    details: "Fast-dissolving formulation with optimized disintegrants for rapid absorption and onset of therapeutic action.",
    standards: "WHO-GMP, ISO 9001:2015"
  },
  {
    id: "gen-2",
    name: "Clavufort 625",
    composition: "Amoxicillin Trihydrate & Potassium Clavulanate",
    strength: "500mg + 125mg",
    packaging: "10x10 Alu-Alu Strip",
    indication: "Treatment of clinical bacterial infections of the respiratory tract, urinary tract, and skin.",
    category: "general",
    categoryLabel: "General Medicine",
    details: "Synergistic beta-lactamase inhibitor combination ensuring high efficacy against resistant bacterial strains.",
    standards: "WHO-GMP, US-FDA compliant facility"
  },
  {
    id: "gen-3",
    name: "Pantofort-40",
    composition: "Pantoprazole Sodium EC",
    strength: "40 mg",
    packaging: "10x10 Alu-Alu Strip",
    indication: "Gastroesophageal Reflux Disease (GERD) and peptic ulcer healing.",
    category: "general",
    categoryLabel: "General Medicine",
    details: "Enteric-coated tablet protects the active ingredient from gastric acidity, ensuring optimal absorption in the duodenum.",
    standards: "WHO-GMP, ISO 9001"
  },
  {
    id: "gen-4",
    name: "Azifort 500",
    composition: "Azithromycin",
    strength: "500 mg",
    packaging: "1x5 Blister Pack",
    indication: "Treatment of community-acquired pneumonia, sinusitis, pharyngitis, and tonsillitis.",
    category: "general",
    categoryLabel: "General Medicine",
    details: "Macrolide antibiotic with extended tissue half-life permitting a convenient 3-to-5 day dosage regimen.",
    standards: "WHO-GMP"
  },

  // Hormonal Tablets
  {
    id: "horm-1",
    name: "Thyrofort 100",
    composition: "Levothyroxine Sodium",
    strength: "100 mcg",
    packaging: "100 Tablets Bottle",
    indication: "Replacement therapy for hypothyroidism of any etiology.",
    category: "hormonal",
    categoryLabel: "Hormonal Tablets",
    details: "Synthetic thyroid hormone T4, bio-identical to naturally secreted hormone, ensuring physiological normalization.",
    standards: "WHO-GMP, ISO 9001:2015"
  },
  {
    id: "horm-2",
    name: "Dexafort 4",
    composition: "Dexamethasone",
    strength: "4 mg",
    packaging: "10x10 Tablets in Alu-Alu",
    indication: "Severe inflammatory conditions, acute allergies, and endocrine disorders.",
    category: "hormonal",
    categoryLabel: "Hormonal Tablets",
    details: "Highly potent glucocorticoid with minimal mineralocorticoid activity, minimizing fluid retention side-effects.",
    standards: "WHO-GMP"
  },
  {
    id: "horm-3",
    name: "Prednifort 10",
    composition: "Prednisolone",
    strength: "10 mg",
    packaging: "10x15 Tablets in Blister Pack",
    indication: "Suppression of inflammatory and allergic disorders; systemic immunosuppressive therapy.",
    category: "hormonal",
    categoryLabel: "Hormonal Tablets",
    details: "Standard glucocorticoid for systemic inflammatory and autoimmune diseases, synthesized to exact international standards.",
    standards: "WHO-GMP, US-FDA compliant"
  },

  // Active Pharma Ingredients (APIs)
  {
    id: "api-1",
    name: "Telmisartan Pure API",
    composition: "Telmisartan",
    strength: "USP/BP Grade Pure API",
    packaging: "25 kg HDPE Drum",
    indication: "Active pharmaceutical ingredient for manufacturing Angiotensin II Receptor Blockers used in hypertension management.",
    category: "api",
    categoryLabel: "APIs",
    details: "High-purity crystalline powder with consistent particle size distribution optimized for direct compression.",
    standards: "CEP, EDQM Compliant, WHO-GMP"
  },
  {
    id: "api-2",
    name: "Atorvastatin Calcium API",
    composition: "Atorvastatin Calcium Trihydrate",
    strength: "IP/EP Grade Pure API",
    packaging: "25 kg HDPE Drum",
    indication: "HMG-CoA reductase inhibitor API for manufacturing cholesterol-reducing formulations.",
    category: "api",
    categoryLabel: "APIs",
    details: "Synthesized under cleanroom ISO-7 environment with strict impurity profiling matching ICH guidelines.",
    standards: "WHO-GMP, DMF Filed"
  },

  // Nutraceuticals
  {
    id: "nutra-1",
    name: "Fort-Whey Protein",
    composition: "Whey Protein Concentrate + Multivitamin Blend",
    strength: "24g Protein per Serving",
    packaging: "1 kg Jar",
    indication: "Protein supplement for muscle recovery and dietary protein bridge.",
    category: "nutra",
    categoryLabel: "Nutraceuticals",
    details: "Enriched with multi-enzyme digestive complexes (DigeZyme) for maximum protein assimilation and zero bloating.",
    standards: "FSSAI, ISO 22000"
  },
  {
    id: "nutra-2",
    name: "Vita-Omega 3",
    composition: "Fish Oil (EPA 180mg, DHA 120mg)",
    strength: "1000 mg",
    packaging: "60 Softgels Bottle",
    indication: "Supports cardiovascular health, cognitive function, and joint elasticity.",
    category: "nutra",
    categoryLabel: "Nutraceuticals",
    details: "Molecularly distilled to eliminate heavy metals, PCBs, and mercury contaminants, leaving no fishy aftertaste.",
    standards: "FSSAI, ISO 9001"
  },

  // Veterinary Products
  {
    id: "vet-1",
    name: "Fiproguard Vet",
    composition: "Fipronil + S-Methoprene",
    strength: "9.8% + 8.8% w/v Spot-on",
    packaging: "0.67 ml Pipette",
    indication: "Treatment and prevention of flea, tick, and chewing lice infestations on dogs and puppies.",
    category: "vet",
    categoryLabel: "Veterinary Products",
    details: "Spot-on topical solution with dual-action formulation targeting adult fleas, ticks, and flea eggs/larvae.",
    standards: "WHO-GMP, Veterinary Drug Board Certified"
  },
  {
    id: "vet-2",
    name: "Cal-Phos Vet Forte",
    composition: "Calcium, Phosphorus, Vitamin D3 & B12",
    strength: "Liquid Nutritional Feed",
    packaging: "1 Litre & 5 Litre Bottles",
    indication: "Liquid feed supplement to improve milk yield, fat percentage, and bone health in cattle and livestock.",
    category: "vet",
    categoryLabel: "Veterinary Products",
    details: "High-absorption oral calcium emulsion for lactating dairy animals preventing milk fever.",
    standards: "GMP (Vet)"
  }
];

// All categories for filter tabs
const categories = [
  { id: "all", label: "All Categories", icon: "grid_view" },
  { id: "gynecology", label: "Gynecology Range", icon: "favorite" },
  { id: "general", label: "General Medicine", icon: "medication" },
  { id: "hormonal", label: "Hormonal Tablets", icon: "monitor_heart" },
  { id: "api", label: "APIs", icon: "science" },
  { id: "nutra", label: "Nutraceuticals", icon: "local_pharmacy" },
  { id: "vet", label: "Veterinary Products", icon: "pets" }
];

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catTarget = params.get("cat");
    if (catTarget) {
      if (["gynecology", "general", "hormonal", "api", "nutra", "vet"].includes(catTarget)) {
        setSelectedCategory(catTarget);
      }
      router.replace("/products");
    }

    const handleCategoryChange = (e: Event) => {
      const cat = (e as CustomEvent).detail;
      if (["gynecology", "general", "hormonal", "api", "nutra", "vet"].includes(cat)) {
        setSelectedCategory(cat);
      }
    };

    window.addEventListener("changeCategory", handleCategoryChange);
    return () => {
      window.removeEventListener("changeCategory", handleCategoryChange);
    };
  }, []);

  // Filtered and searched products list
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.indication.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-secondary/20 rounded-full translate-x-1/3 -translate-y-1/3 blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
            <span className="material-icons text-sm">inventory_2</span>
            Fortschritt Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Our Healthcare Formulations
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art formulations across major therapeutic ranges, manufactured to meet stringent quality standards and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Search & Filter Control Center */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-primary/5 p-6 border border-slate-100/60">
          <div className="flex flex-col gap-6">

            {/* Search and Filter Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  type="text"
                  placeholder="Search by brand name, composition, or therapeutic indication..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium transition-all"
                />
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all ${isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-primary"
                      }`}
                  >
                    <span className="material-icons text-base">{cat.icon}</span>
                    {cat.label}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Product Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  {/* Category Pill header */}
                  <div className="p-8 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${product.category === "gynecology" ? "bg-pink-50 text-pink-600" :
                          product.category === "general" ? "bg-sky-50 text-sky-600" :
                            product.category === "hormonal" ? "bg-emerald-50 text-emerald-600" :
                              product.category === "api" ? "bg-purple-50 text-purple-600" :
                                product.category === "nutra" ? "bg-amber-50 text-amber-600" :
                                  "bg-teal-50 text-teal-600"
                        }`}>
                        {product.categoryLabel}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                        <span className="material-icons text-xs">verified</span>
                        {product.standards.split(",")[0]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-primary mb-2 group-hover:text-primary-accent transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mb-4">
                      Composition
                    </p>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100/50">
                      {product.composition}
                    </p>

                    <div className="space-y-2 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="material-icons text-slate-400 text-sm">scale</span>
                        <span>Strength: {product.strength}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-icons text-slate-400 text-sm">inventory_2</span>
                        <span>Packing: {product.packaging}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-8 pt-0 border-t border-slate-50 mt-6 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-3 bg-slate-50 hover:bg-slate-100 text-primary font-bold text-xs rounded-xl transition-all"
                    >
                      View Details
                    </button>
                    <a
                      href={`mailto:fortschritthealthcare@gmail.com?subject=Enquiry for ${product.name} (${product.composition})`}
                      className="flex-1 py-3 bg-primary text-white hover:bg-primary-accent text-center font-bold text-xs rounded-xl transition-all shadow-md shadow-primary/10"
                    >
                      Enquire Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[2rem] border border-slate-200 border-dashed max-w-xl mx-auto shadow-sm">
            <span className="material-icons text-5xl text-slate-300 mb-4 font-light">search_off</span>
            <h3 className="text-xl font-bold text-slate-600 mb-2">No formulations found</h3>
            <p className="text-slate-400 font-medium px-6">We couldn't find any products matching your search or filter combination. Please try refining your criteria.</p>
          </div>
        )}
      </section>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProduct(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-2xl relative max-w-2xl w-full z-10 overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Top Accent Gradient */}
              <div className={`h-2 w-full ${activeModalProduct.category === "gynecology" ? "bg-pink-500" :
                  activeModalProduct.category === "general" ? "bg-sky-500" :
                    activeModalProduct.category === "hormonal" ? "bg-emerald-500" :
                      activeModalProduct.category === "api" ? "bg-purple-500" :
                        activeModalProduct.category === "nutra" ? "bg-amber-500" :
                          "bg-teal-500"
                }`} />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <span className="material-icons text-xl">close</span>
              </button>

              <div className="p-8 lg:p-10 overflow-y-auto flex-1">
                {/* Modal Title & Category */}
                <div className="mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-3 ${activeModalProduct.category === "gynecology" ? "bg-pink-50 text-pink-600" :
                      activeModalProduct.category === "general" ? "bg-sky-50 text-sky-600" :
                        activeModalProduct.category === "hormonal" ? "bg-emerald-50 text-emerald-600" :
                          activeModalProduct.category === "api" ? "bg-purple-50 text-purple-600" :
                            activeModalProduct.category === "nutra" ? "bg-amber-50 text-amber-600" :
                              "bg-teal-50 text-teal-600"
                    }`}>
                    {activeModalProduct.categoryLabel}
                  </span>
                  <h2 className="text-3xl font-extrabold text-primary leading-tight">
                    {activeModalProduct.name}
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Active Composition details */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Active Composition</h4>
                    <p className="text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-semibold text-base leading-relaxed">
                      {activeModalProduct.composition}
                    </p>
                  </div>

                  {/* Specification Table */}
                  <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-6">
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dosage/Strength</h5>
                      <p className="text-slate-800 font-bold text-sm">{activeModalProduct.strength}</p>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Packaging Info</h5>
                      <p className="text-slate-800 font-bold text-sm">{activeModalProduct.packaging}</p>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Quality Standards</h5>
                      <p className="text-slate-800 font-bold text-sm">{activeModalProduct.standards}</p>
                    </div>
                  </div>

                  {/* Indication details */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Therapeutic Indications</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {activeModalProduct.indication}
                    </p>
                  </div>

                  {/* Product details description */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Description & Quality notes</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {activeModalProduct.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="px-6 py-4 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl transition-all"
                >
                  Close
                </button>
                <a
                  href={`mailto:fortschritthealthcare@gmail.com?subject=Enquiry for ${activeModalProduct.name} (${activeModalProduct.composition})`}
                  className="px-8 py-4 bg-primary hover:bg-primary-accent text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  <span className="material-icons text-sm">mail_outline</span>
                  Send Enquiry
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Manufacturing Services */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
              Manufacturing Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Third-Party Manufacturing", desc: "Customized pharmaceutical manufacturing solutions for your brand.", icon: "business" },
              { title: "Contract Manufacturing", desc: "Production according to your exact specifications and requirements.", icon: "assignment" },
              { title: "Bulk Manufacturing", desc: "Large-scale pharmaceutical production with consistent quality.", icon: "widgets" },
              { title: "Private Label", desc: "Customized branding and packaging support for your products.", icon: "local_offer" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-slate-50 hover:bg-white rounded-[24px] p-8 border border-slate-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6">
                  <span className="material-icons text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Order Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
              Our Order Process
            </h2>
          </div>

          <div className="relative">
            {/* Process connector line (desktop only) */}
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-slate-200 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { step: 1, title: "Requirement Discussion", active: false },
                { step: 2, title: "Product Finalization", active: false },
                { step: 3, title: "Manufacturing", active: false },
                { step: 4, title: "Quality Testing", active: false },
                { step: 5, title: "Packaging", active: false },
                { step: 6, title: "Delivery", active: true },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center group">
                  <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-md ${item.active
                      ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                      : "bg-primary text-white group-hover:scale-105"
                    }`}>
                    {item.step}
                  </div>
                  <h4 className="mt-4 text-[13px] sm:text-[14px] font-extrabold text-primary px-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Catalog Enquiry Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">Need our Full Regulatory Catalog?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-medium">
            Contact our business development department to request specific dossiers, COAs, and stability studies for our formulations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-lg shadow-black/15">
              Contact Business Team
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
