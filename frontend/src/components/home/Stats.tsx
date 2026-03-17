"use client";

import React from "react";

const stats = [
  {
    label: "Employees",
    value: "500+",
    icon: "groups",
    color: "primary",
  },
  {
    label: "Global Markets",
    value: "45+",
    icon: "public",
    color: "secondary",
  },
  {
    label: "Years Exp.",
    value: "14+",
    icon: "history_edu",
    color: "primary",
  },
  {
    label: "Global Awards",
    value: "25+",
    icon: "workspace_premium",
    color: "secondary",
  },
];

const Stats = () => {
  return (
    <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-slate-100 p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                  stat.color === "primary"
                    ? "bg-primary/5 text-primary"
                    : "bg-secondary/5 text-secondary"
                }`}
              >
                <span className="material-icons text-2xl">
                  {stat.icon}
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-0.5 leading-none">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
