"use client";

import React from "react";
import Link from "next/link";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const Verticals = () => {
  return (
    <section id="verticals" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. OUR EXPERTISE: Product Divisions
           ========================================================================= */}
        <div className="mb-24">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Approved Manufacturing Spectrum
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Product Divisions
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
              Over 200+ WHO-GMP certified formulations across 4 primary manufacturing divisions.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Pharma */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between h-full"
            >
              <div className="h-40 bg-gradient-to-br from-blue-50 to-indigo-50/60 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-3xl">medication</span>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full uppercase">
                  168 Formulations
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors">
                    General Pharma
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-medium">
                    Film-Coated, Uncoated, Bilayered &amp; SR Tablets, Prolonged Release Capsules (IP / BP / USP).
                  </p>
                </div>
                <Link
                  href="/products?div=General"
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-tight group-hover:text-secondary group-hover:gap-3 transition-all"
                >
                  Explore 168 Products
                  <span className="material-icons text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* Hormones & Endocrine */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(147,51,234,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between h-full"
            >
              <div className="h-40 bg-gradient-to-br from-purple-50 to-indigo-50/60 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-3xl">monitor_heart</span>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full uppercase">
                  12 Formulations
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary mb-2 group-hover:text-purple-600 transition-colors">
                    Hormones &amp; Endocrine
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-medium">
                    Progesterone SR (100-400mg), Thyroxine Sodium, Ulipristal, Clomifene &amp; Gynaecological Care.
                  </p>
                </div>
                <Link
                  href="/products?div=Hormones"
                  className="inline-flex items-center gap-2 text-purple-600 font-bold text-xs tracking-tight group-hover:gap-3 transition-all"
                >
                  Explore Hormones Range
                  <span className="material-icons text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* Nutraceuticals & Powders */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(16,185,129,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between h-full"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-50 to-teal-50/60 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-3xl">local_pharmacy</span>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full uppercase">
                  87 Formulations
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary mb-2 group-hover:text-emerald-600 transition-colors">
                    Nutraceuticals &amp; Powders
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-medium">
                    Essential Amino Acid Sachets, Protein Powders, PCOS Complexes, Bone Minerals &amp; Probiotics.
                  </p>
                </div>
                <Link
                  href="/products?div=Nutraceuticals"
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs tracking-tight group-hover:gap-3 transition-all"
                >
                  Explore Nutraceuticals
                  <span className="material-icons text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* Softgel Capsules */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(245,158,11,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between h-full"
            >
              <div className="h-40 bg-gradient-to-br from-amber-50 to-sky-50/60 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-3xl">water_drop</span>
                </div>
                <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full uppercase">
                  10 Formulations
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary mb-2 group-hover:text-amber-600 transition-colors">
                    Softgel Capsules
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-5 font-medium">
                    Advanced 4G &amp; 9G Multivitamin Softgels, Progesterone Softgels, Calcitriol, Isotretinoin &amp; Co-Q10.
                  </p>
                </div>
                <Link
                  href="/products?div=Softgel"
                  className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs tracking-tight group-hover:gap-3 transition-all"
                >
                  Explore Softgels
                  <span className="material-icons text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </StaggerGrid>
        </div>

        {/* =========================================================================
            2. Detailed Product Breakdown Across Divisions
           ========================================================================= */}
        <div className="mb-16 pt-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
              Detailed Product Range
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              Comprehensive overview of our dosage forms, regulatory standards, and therapeutic specialties.
            </p>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Medicine List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <span className="material-icons">medication</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">General Medicine</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Cardiology &amp; Hypertension (Telmisartan, Amlodipine)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Neurology (Pregabalin 75-300mg, Gabapentin)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Gastroenterology (Rabeprazole, Pantoprazole)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Hormonal & Gynaecology List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <span className="material-icons">monitor_heart</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">Hormones &amp; Gynaecology</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Micronized Progesterone SR (100mg - 400mg)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Thyroxine Sodium (12.5mcg - 150mcg)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Ulipristal Acetate 5mg &amp; Clomifene Citrate</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Nutraceuticals & Powders List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="material-icons">local_pharmacy</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">Nutraceuticals &amp; Sachets</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Amino Acid Powders &amp; Protein Blends</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">PCOS Care (Myo-Inositol + D-Chiro Inositol)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Bone Health (Magnesium Bisglycinate &amp; Vit D3)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Softgel Range List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <span className="material-icons">water_drop</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">Softgel Capsules</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">4G &amp; 9G Advanced Multivitamin Softgels</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Omega-3 EPA/DHA &amp; Antioxidant Softgels</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-icons text-emerald-500 text-base mt-0.5">check</span>
                    <span className="text-slate-600 font-semibold text-xs">Calcitriol, Isotretinoin &amp; Co-Q10 Softgels</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </StaggerGrid>
        </div>

        {/* =========================================================================
            3. View All Products CTA Link
           ========================================================================= */}
        <FadeUp delay={0.2} className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary hover-lift transition-all duration-300 shadow-xl shadow-primary/20"
          >
            <span>Explore Complete Formulations Catalog (200+)</span>
            <span className="material-icons text-xl">arrow_forward</span>
          </Link>
        </FadeUp>

      </div>
    </section>
  );
};

export default Verticals;
