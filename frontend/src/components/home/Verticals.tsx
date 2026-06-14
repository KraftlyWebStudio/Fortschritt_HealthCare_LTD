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
            1. OUR EXPERTISE: Product Categories
           ========================================================================= */}
        <div className="mb-24">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Product Categories
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gynecology Products */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(219,39,119,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md group flex flex-col h-full"
            >
              <div className="h-44 bg-gradient-to-br from-pink-50 to-pink-100/50 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-icons text-4xl">favorite</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-pink-600 transition-colors">
                    Gynecology Products
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    Women's healthcare formulations including gynecological tablets and specialized products.
                  </p>
                </div>
                <Link
                  href="/products#gynecology"
                  className="inline-flex items-center gap-2 text-pink-600 font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  Explore Range
                  <span className="material-icons text-lg">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* General Medicine */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(14,165,233,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md group flex flex-col h-full"
            >
              <div className="h-44 bg-gradient-to-br from-sky-50 to-sky-100/50 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-icons text-4xl">medication</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-sky-600 transition-colors">
                    General Medicine
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    Comprehensive pharmaceutical products including tablets, capsules, and healthcare formulations.
                  </p>
                </div>
                <Link
                  href="/products#general"
                  className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  Explore Range
                  <span className="material-icons text-lg">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            {/* Hormonal Tablets */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(16,185,129,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md group flex flex-col h-full"
            >
              <div className="h-44 bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-icons text-4xl">monitor_heart</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-emerald-600 transition-colors">
                    Hormonal Tablets
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    Manufactured as per market demand and client specifications with precise formulations.
                  </p>
                </div>
                <Link
                  href="/products#hormonal"
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  Explore Range
                  <span className="material-icons text-lg">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </StaggerGrid>
        </div>

        {/* =========================================================================
            2. Detailed Product Range
           ========================================================================= */}
        <div className="mb-16 pt-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
              Detailed Product Range
            </h2>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gynecology Range List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                    <span className="material-icons">favorite</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Gynecology Range</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Women's healthcare formulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Gynecological tablets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Specialized healthcare products</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* General Medicine List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
                    <span className="material-icons">medication</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">General Medicine</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Tablets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Capsules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Healthcare formulations</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Hormonal Tablets List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <span className="material-icons">monitor_heart</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Hormonal Tablets</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Hormonal formulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Demand-based manufacturing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons text-emerald-500 text-lg mt-0.5">check</span>
                    <span className="text-slate-600 font-medium text-[15px]">Customized production</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </StaggerGrid>
        </div>

        {/* =========================================================================
            3. View All Products CTA Link
           ========================================================================= */}
        <FadeUp delay={0.2} className="text-center mt-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/95 hover-lift transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <span>View All Products</span>
            <span className="material-icons text-xl">arrow_forward</span>
          </Link>
        </FadeUp>

      </div>
    </section>
  );
};

export default Verticals;
