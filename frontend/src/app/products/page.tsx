"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, type ProductItem } from "@/data/productsData";

const divisionTabs = [
  { id: "all", label: "All Formulations", count: PRODUCTS.length, icon: "grid_view", color: "from-blue-600 to-indigo-600" },
  { id: "General", label: "General Pharma", count: PRODUCTS.filter(p => p.division === "General").length, icon: "medication", color: "from-blue-600 to-sky-600" },
  { id: "Hormones", label: "Hormones & Endocrine", count: PRODUCTS.filter(p => p.division === "Hormones").length, icon: "monitor_heart", color: "from-purple-600 to-indigo-600" },
  { id: "Nutraceuticals", label: "Nutraceuticals & Powders", count: PRODUCTS.filter(p => p.division === "Nutraceuticals").length, icon: "local_pharmacy", color: "from-emerald-600 to-teal-600" },
  { id: "Softgel", label: "Softgel Capsules", count: PRODUCTS.filter(p => p.division === "Softgel").length, icon: "water_drop", color: "from-amber-500 to-sky-500" },
];

const dosageForms = ["All", "Tablet", "Capsule", "Softgel", "Sachet", "Protein Powder"];
const categories = [
  "All",
  "Gynaecology & Endocrinology",
  "Cardiology & Hypertension",
  "Neurology & Psychiatry",
  "Gastroenterology",
  "Pain & Orthopedics",
  "Anti-Infective & Antibiotic",
  "Dermatology & Cosmeceuticals",
  "Nutraceuticals & Wellness"
];

export default function ProductsPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [selectedForm, setSelectedForm] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const divTarget = params.get("div") || params.get("cat");
    if (divTarget) {
      if (["General", "Hormones", "Nutraceuticals", "Softgel"].includes(divTarget)) {
        setSelectedDivision(divTarget);
      }
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Division Filter
      if (selectedDivision !== "all" && product.division !== selectedDivision) {
        return false;
      }
      // Dosage Form Filter
      if (selectedForm !== "All" && product.dosageForm !== selectedForm) {
        return false;
      }
      // Therapeutic Category Filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchComp = product.composition.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchStrengths = product.availableStrengths.some(s => s.toLowerCase().includes(query));
        return matchName || matchComp || matchCat || matchStrengths;
      }
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedDivision, selectedForm, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Header (Full Screen Viewport Layout - Zero White Space at Bottom) */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#101b3b] pt-28 pb-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "36px 36px" }} />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-primary-accent/20 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-sky-300 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            WHO-GMP Approved Product Portfolio (IP / BP / USP)
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl mx-auto">
            Precision Formulations for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-100">
              Global Healthcare Demand
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Explore 280+ WHO-GMP compliant formulations spanning General Medicines, Hormones &amp; Endocrinology, Nutraceuticals, Sachets, Protein Powders, and Softgel Capsules.
          </motion.p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-5xl mx-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">verified</span>
              <div>
                <div className="text-white text-xs font-bold">280+ Formulations</div>
                <div className="text-slate-400 text-[11px]">WHO-GMP Certified</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">science</span>
              <div>
                <div className="text-white text-xs font-bold">4 Key Divisions</div>
                <div className="text-slate-400 text-[11px]">Pharma &amp; Softgels</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">public</span>
              <div>
                <div className="text-white text-xs font-bold">Global Export</div>
                <div className="text-slate-400 text-[11px]">50+ Countries</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-2xl text-left backdrop-blur-md">
              <span className="material-icons text-sky-400 text-xl">security</span>
              <div>
                <div className="text-white text-xs font-bold">100% Quality</div>
                <div className="text-slate-400 text-[11px]">COA &amp; Stability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Division Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {divisionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDivision(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-extrabold transition-all duration-300 ${
                selectedDivision === tab.id
                  ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105 border border-primary/20"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:border-primary/40 hover:text-primary shadow-sm"
              }`}
            >
              <span className="material-icons text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                selectedDivision === tab.id ? "bg-white/25 text-white" : "bg-slate-100 text-slate-700"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Sub-Filters: Search Bar + Dosage Form + Therapeutic Area (Location 1) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md mb-12 flex flex-col gap-6">
          {/* Main Search Input Bar inside Location 1 */}
          <div className="relative w-full flex items-center">
            <span className="material-icons absolute left-4 text-primary text-xl">search</span>
            <input
              type="text"
              placeholder="Search product name, active ingredient or molecule (e.g., Aceclofenac, Progesterone, Telmisartan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-4 bg-slate-50 border border-slate-200/90 rounded-2xl text-slate-900 placeholder:text-slate-400 text-sm font-semibold outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-4 text-slate-400 hover:text-slate-600 font-bold p-1 rounded-full hover:bg-slate-100 transition-colors"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sub-Filter Controls: Dosage Form & Therapy */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pt-2 border-t border-slate-100">
            {/* Dosage Form Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Dosage Form:</span>
              {dosageForms.map((form) => (
                <button
                  key={form}
                  onClick={() => setSelectedForm(form)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedForm === form
                      ? "bg-secondary text-white shadow-md shadow-secondary/20 scale-105"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-100"
                  }`}
                >
                  {form}
                </button>
              ))}
            </div>

            {/* Therapeutic Category Selector */}
            <div className="flex items-center gap-3 min-w-[240px]">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">Therapy:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-primary cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          <div>
            <h3 className="text-2xl font-black text-primary">
              Formulations ({filteredProducts.length})
            </h3>
            <p className="text-slate-500 text-xs font-medium mt-1">
              WHO-GMP certified pharmaceutical formulations matching active parameters
            </p>
          </div>

          {(selectedDivision !== "all" || selectedForm !== "All" || selectedCategory !== "All" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedForm("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 border border-sky-100"
            >
              <span className="material-icons text-sm">restart_alt</span> Reset All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(30,58,138,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Colored Division Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  product.division === 'General' ? 'bg-blue-600' :
                  product.division === 'Hormones' ? 'bg-purple-600' :
                  product.division === 'Nutraceuticals' ? 'bg-emerald-600' : 'bg-amber-500'
                }`} />

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {product.division}
                    </span>

                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                      product.regulatoryType === 'DRUG' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {product.regulatoryType} {product.phRef ? `(${product.phRef})` : ''}
                    </span>
                  </div>

                  {/* Title (Max 2 lines, truncated with ...) */}
                  <h3 
                    onClick={() => setActiveModalProduct(product)}
                    className="text-lg font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug line-clamp-2 h-[3.25rem] cursor-pointer"
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  {/* Therapy Tag */}
                  <div className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-1 truncate">
                    <span className="material-icons text-sm text-secondary flex-shrink-0">label_important</span>
                    <span className="truncate">{product.category}</span>
                  </div>

                  {/* Composition Block */}
                  <div className="bg-slate-50/80 rounded-2xl p-3.5 mb-4 border border-slate-100 h-[110px] flex flex-col justify-start">
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">Active Formulation</div>
                    {product.ingredients && product.ingredients.length > 0 ? (
                      <ul className="space-y-1.5 overflow-hidden">
                        {product.ingredients.slice(0, 3).map((ing, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span className="truncate">{ing}</span>
                          </li>
                        ))}
                        {product.ingredients.length > 3 && (
                          <li className="text-[10px] font-extrabold text-secondary tracking-wide pt-0.5">
                            + {product.ingredients.length - 3} more active ingredients
                          </li>
                        )}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-700 font-semibold leading-relaxed line-clamp-3">
                        {product.composition}
                      </p>
                    )}
                  </div>

                  {/* Strengths Badges */}
                  <div className="mb-4 h-[52px]">
                    {product.availableStrengths && product.availableStrengths.length > 0 ? (
                      <>
                        <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">Available Dosages</div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {product.availableStrengths.slice(0, 3).map((st, idx) => (
                            <span key={idx} className="text-[11px] font-extrabold bg-primary/5 text-primary px-2.5 py-0.5 rounded-lg border border-primary/10">
                              {st}
                            </span>
                          ))}
                          {product.availableStrengths.length > 3 && (
                            <span className="text-[10px] font-extrabold text-slate-400 self-center">
                              +{product.availableStrengths.length - 3} more
                            </span>
                          )}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold text-slate-400">{product.dosageForm}</span>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-secondary transition-colors flex items-center gap-1.5 shadow-md shadow-primary/10"
                  >
                    Enquire Now
                    <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[2rem] border border-slate-200 border-dashed">
            <span className="material-icons text-6xl text-slate-300 mb-4">search_off</span>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No matching formulations found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              No product matched your selected filter parameters. Reset filters to view all WHO-GMP approved products.
            </p>
            <button
              onClick={() => {
                setSelectedDivision("all");
                setSelectedForm("All");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-xs hover:bg-secondary transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Interactive Detail & Order Enquiry Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProduct(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 border border-slate-100 max-h-[90vh] sm:max-h-[85vh] flex flex-col my-auto"
            >
              {/* Header (Fixed at top) */}
              <div className="flex-shrink-0 relative pr-10 mb-4">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="absolute top-0 right-0 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors font-bold z-20"
                >
                  ✕
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {activeModalProduct.division} Division
                  </span>
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {activeModalProduct.regulatoryType} {activeModalProduct.phRef ? `(${activeModalProduct.phRef})` : ''}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-primary mb-2 leading-tight">
                  {activeModalProduct.name}
                </h2>
                <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5 flex-wrap">
                  <span className="material-icons text-base text-secondary">category</span>
                  <span>{activeModalProduct.category}</span>
                  <span>•</span>
                  <span>Form: {activeModalProduct.dosageForm}</span>
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto min-h-0 pr-1.5 space-y-4 my-2">
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                  <h4 className="text-[11px] font-extrabold uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="material-icons text-sm text-secondary">science</span>
                    Key Active Ingredients &amp; Formulation
                  </h4>
                  {activeModalProduct.ingredients && activeModalProduct.ingredients.length > 0 ? (
                    <ul className="space-y-2.5">
                      {activeModalProduct.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs">
                          <span className="material-icons text-emerald-500 text-sm mt-0.5 flex-shrink-0">check_circle</span>
                          <span className="leading-snug break-words">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed break-words">
                      {activeModalProduct.composition}
                    </p>
                  )}
                </div>

                {activeModalProduct.availableStrengths.length > 0 && (
                  <div className="bg-sky-50/60 p-4 sm:p-5 rounded-2xl border border-sky-100">
                    <h4 className="text-[11px] font-bold uppercase text-secondary tracking-wider mb-2">Available Dosage Strengths</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProduct.availableStrengths.map((st, i) => (
                        <span key={i} className="text-xs font-extrabold bg-white text-primary px-3.5 py-1.5 rounded-xl border border-sky-200 shadow-sm">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl">
                  <strong>Quality Assurance:</strong> Manufactured under WHO-GMP certified facilities with complete analytical COA support and stability compliance.
                </div>
              </div>

              {/* Footer Action Buttons (Fixed at bottom) */}
              <div className="flex-shrink-0 pt-4 mt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white">
                <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <span className="material-icons text-xs text-primary">verified</span> WHO-GMP Certified Manufacturing
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/918352810339?text=${encodeURIComponent(`Hello Fortschritt Healthcare, I am inquiring about product: ${activeModalProduct.name} (${activeModalProduct.dosageForm}). Please provide manufacturing & commercial terms.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-3 bg-[#25D366] text-white font-bold rounded-2xl text-xs hover:bg-[#1db954] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    <span className="material-icons text-sm">chat</span> WhatsApp Sales
                  </a>
                  <a
                    href={`mailto:fortschritthealthcareltdsales@gmail.com?subject=Product Inquiry: ${encodeURIComponent(activeModalProduct.name)}`}
                    className="flex-1 sm:flex-none px-5 py-3 bg-primary text-white font-bold rounded-2xl text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    <span className="material-icons text-sm">mail</span> Email Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
