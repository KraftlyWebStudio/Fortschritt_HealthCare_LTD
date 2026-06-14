"use client";

import React from "react";
import Link from "next/link";
import { FadeIn, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const Welcome = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Visual Side */}
          <FadeIn direction="left" className="lg:w-1/2 relative">
            <div className="relative z-10 w-4/5 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white hover-lift">
              <img
                src="/about-facility.webp"
                alt="State-of-the-Art Facility"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>

            <div className="absolute -bottom-10 -right-0 w-3/5 z-20 rounded-[24px] overflow-hidden shadow-2xl border-8 border-white animate-float hidden md:block">
              <img
                src="/home/hero-scientist.webp"
                alt="Pharmaceutical Research"
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Glass Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/2 -right-12 translate-y-[-50%] z-30 glass p-6 rounded-3xl shadow-xl hidden lg:block border border-white/50"
            >
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary mb-1">10+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Years of <br /> Excellence</div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="right" className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              About Our Company
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-[1.15]">
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-accent">
                Pharmaceutical Manufacturing
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Fortschritt Healthcare Limited is a premier pharmaceutical manufacturing company based in Baddi, Himachal Pradesh, one of India's leading manufacturing hubs.
              </p>

              <p className="text-slate-500 text-base leading-relaxed">
                Specializing in contract and third-party manufacturing, we deliver customized, high-quality formulations across Gynecology, General Medicine, and Hormonal Tablet segments, ensuring every product meets the highest pharmaceutical benchmarks.
              </p>
            </div>

            {/* Stats Grid */}
            <StaggerGrid className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-100">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "100+", label: "Products" },
                { value: "50+", label: "Clients" },
                { value: "3", label: "Segments" }
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  variants={staggerItem}
                  className="space-y-1"
                >
                  <div className={`text-3xl font-extrabold ${
                    idx === 0 ? "text-primary" :
                    idx === 1 ? "text-primary-accent" :
                    idx === 2 ? "text-secondary" :
                    "text-emerald-500"
                  }`}>
                    {stat.value}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </StaggerGrid>

            <div className="mt-12">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("verticals")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group cursor-pointer bg-transparent border-none outline-none"
              >
                Explore Our Capabilities
                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
