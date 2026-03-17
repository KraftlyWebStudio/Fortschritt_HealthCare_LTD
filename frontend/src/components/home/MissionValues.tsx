"use client";

import React from "react";

const values = [
  {
    title: "Our Mission",
    description: "To enhance the quality of human life by providing innovative, high-quality, and affordable pharmaceutical products across the globe.",
    icon: "rocket_launch",
  },
  {
    title: "Our Vision",
    description: "To be a globally recognized pharmaceutical leader, admired for our scientific excellence, ethical standards, and patient-centric approach.",
    icon: "visibility",
  },
  {
    title: "Our Values",
    description: "Integrity in Action, Innovation for Patients, Quality Without Compromise, and Social Responsibility.",
    icon: "verified",
  },
];

const MissionValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <a
              key={item.title}
              href="#about"
              className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 group hover:bg-primary transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-white transition-all transform group-hover:rotate-12">
                <span className="material-icons text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors mb-8 flex-grow">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold group-hover:text-white transition-all mt-auto">
                <span className="text-sm uppercase tracking-wider">Learn More</span>
                <span className="material-icons group-hover:translate-x-2 transition-transform">east</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
