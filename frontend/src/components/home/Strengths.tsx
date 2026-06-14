"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const strengths = [
  {
    title: "Quality Manufacturing",
    desc: "Stringent quality control at every stage of production ensuring pharmaceutical excellence.",
    icon: "verified",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Modern Facilities",
    desc: "State-of-the-art production facilities equipped with latest manufacturing technology.",
    icon: "factory",
    color: "from-sky-500 to-blue-500"
  },
  {
    title: "Custom Development",
    desc: "Tailored product development solutions based on your specific requirements.",
    icon: "design_services",
    color: "from-primary-accent to-primary"
  },
  {
    title: "Timely Delivery",
    desc: "Consistent on-time delivery with efficient supply chain management.",
    icon: "local_shipping",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Client-Centric",
    desc: "Dedicated support and transparent communication throughout your project.",
    icon: "support_agent",
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Competitive Pricing",
    desc: "Cost-effective manufacturing solutions without compromising on quality.",
    icon: "price_check",
    color: "from-amber-500 to-orange-500"
  }
];

const Strengths = () => {
  return (
    <section id="strengths" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeUp className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Our Strengths
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 lg:p-10 group hover:bg-white hover:border-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container with Gradient */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-md group-hover:scale-110 transition-transform duration-500`}>
                <span className="material-icons text-2xl">{item.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>

      </div>
    </section>
  );
};

export default Strengths;
