"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const MissionValues = () => {
  return (
    <section id="values" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.12)" }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm group hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-4 group-hover:text-primary-accent transition-colors">
              Our Mission
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-medium flex-grow">
              To provide high-quality pharmaceutical manufacturing solutions that meet industry standards and client expectations, contributing to better healthcare outcomes.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.12)" }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm group hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-4 group-hover:text-primary-accent transition-colors">
              Our Vision
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-medium flex-grow">
              To become a trusted pharmaceutical manufacturing partner recognized for quality, innovation, and reliability across the Indian pharmaceutical industry.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.12)" }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm group hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons text-3xl">verified</span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-6 group-hover:text-primary-accent transition-colors">
              Core Values
            </h3>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {["Quality", "Integrity", "Innovation", "Customer Satisfaction", "Excellence"].map((val) => (
                <span 
                  key={val} 
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100/80 text-slate-600 text-xs font-bold shadow-sm"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>
        </StaggerGrid>
      </div>
    </section>
  );
};

export default MissionValues;
