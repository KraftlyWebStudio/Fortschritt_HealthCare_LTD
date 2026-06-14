"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeUp, FadeIn, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const teamMembers = [
  {
    name: "Naveen Chandra Kandpal",
    role: "CEO and Founder",
    bio: "A visionary leader with over 15 years of industry experience, driving regulatory compliance and global market expansion.",
    image: "/CEOImage.png",
  },
  {
    name: "Chander Negi",
    role: "Operational Director",
    bio: "Exacting operations manager overseeing the Baddi plant infrastructure, manufacturing excellence, and logistics.",
    image: "/OperationalDirectorImage.png",
  },
];

const departments = [
  {
    name: "Formulation R&D",
    description: "Our core scientific team of formulation chemists working on drug stability, delivery optimization, and generic equivalents.",
    icon: "biotech",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600",
  },
  {
    name: "QA & QC Auditing",
    description: "Rigorous analysts conducting raw material assays, packaging audits, and multi-stage compliance checks under WHO-GMP.",
    icon: "verified",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600",
  },
  {
    name: "Regulatory Affairs",
    description: "Specialized team drafting CTD/eCTD dossiers and securing export compliances for over 45+ international regions.",
    icon: "gavel",
    color: "from-amber-500/10 to-orange-500/10 text-amber-600",
  },
  {
    name: "Global Logistics",
    description: "Managing seamless cold-chain logistics and shipping schedules for wholesale distributors worldwide.",
    icon: "local_shipping",
    color: "from-purple-500/10 to-pink-500/10 text-purple-600",
  },
];

const milestones = [
  {
    year: "2014",
    title: "The Genesis (B2 Operations)",
    description: "Began our operations in Baddi, Himachal Pradesh, with a focused line of general medicine formulations.",
  },
  {
    year: "2015",
    title: "Fortschritt Healthcare Founded",
    description: "Officially incorporated Fortschritt Healthcare Limited and launched export pathways to regional and global buyers.",
  },
  {
    year: "2018",
    title: "R&D Facility Dedication",
    description: "Commissioned a state-of-the-art laboratory in Baddi to drive in-house formulation development and stability studies.",
  },
  {
    year: "2023",
    title: "Hormone Tablet Division",
    description: "Expanded our operational footprint to 1800+ formulations and launched our advanced hormonal dosage section.",
  },
  {
    year: "2026 & Beyond",
    title: "Regulatory Scaling & Automation",
    description: "Implementing automated high-throughput blistering lines and acquiring approvals for advanced international markets.",
  },
];

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get("scroll");
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
      router.replace("/about");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#fdfdfe] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pb-24 pt-40">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="material-icons text-[14px] text-secondary">info_outline</span>
            Know Our Journey
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-[1.15] mb-6"
          >
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              Fortschritt Healthcare
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Delivering quality formulations, building trusted B2B relationships, and improving patient outcomes worldwide.
          </motion.p>
        </div>
      </section>

      {/* ── Company Overview Section ─────────────────────────── */}
      <section id="about" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Side */}
            <FadeIn direction="left" className="lg:w-1/2 relative w-full">
              <div className="relative z-10 w-11/12 md:w-4/5 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/about-facility.webp"
                  alt="Fortschritt Facility Baddi"
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 w-3/5 z-20 rounded-[24px] overflow-hidden shadow-2xl border-8 border-white hidden md:block">
                <img
                  src="/home/hero-scientist.webp"
                  alt="R&D Lab Testing"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="absolute top-1/2 -right-8 translate-y-[-50%] z-30 glass p-6 rounded-3xl shadow-xl hidden lg:block border border-white/50">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-primary mb-1">WHO-GMP</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Certified <br /> Manufacturing</div>
                </div>
              </div>
            </FadeIn>

            {/* Content Side */}
            <FadeIn direction="right" className="lg:w-1/2 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                Company Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">
                Pioneering Pharmaceutical <br />
                <span className="text-primary-accent">Contract Manufacturing</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-base">
                <p>
                  Fortschritt Healthcare Limited operates a state-of-the-art formulation facility based in Baddi, Himachal Pradesh. As an emerging leader in B2B pharmaceutical services, we specialize in high-efficiency contract manufacturing and customized formulation developments.
                </p>
                <p>
                  With certified WHO-GMP and ISO compliance, our output spans critical healthcare verticals—including Gynecology solutions, general medicines, hormonal oral formulations, and active ingredients—serviced by highly experienced production leads and regulatory affairs agents.
                </p>
                <p>
                  Our mission is anchored in reliability: delivering high-purity dosage forms that allow healthcare companies around the world to optimize their distribution pipelines safely.
                </p>
              </div>

              {/* Stats Block */}
              <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-100">
                {[
                  { value: "10+", label: "Years of Trust" },
                  { value: "1800+", label: "Formulations" },
                  { value: "45+", label: "Export Nations" },
                  { value: "100%", label: "WHO-GMP Compliant" },
                ].map((stat, idx) => (
                  <motion.div key={stat.label} variants={staggerItem} className="space-y-1">
                    <div className={`text-2xl md:text-3xl font-extrabold ${idx === 0 ? "text-primary" : idx === 1 ? "text-primary-accent" : idx === 2 ? "text-secondary" : "text-emerald-500"}`}>
                      {stat.value}
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </StaggerGrid>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CEO's Message Section ─────────────────────────────── */}
      <section id="ceo" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* CEO Portrait */}
            <FadeIn direction="left" className="w-full lg:w-5/12 max-w-md lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative overflow-hidden rounded-[36px] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(30,58,138,0.2)] bg-slate-100 aspect-[3/4]">
                  <img
                    src="/CEOImage.png"
                    alt="Naveen Chandra Kandpal - CEO Fortschritt Healthcare"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-1">Chairman & Founder</p>
                    <h4 className="text-xl font-bold text-white">Naveen Chandra Kandpal</h4>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CEO Message Content */}
            <FadeIn direction="right" className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                CEO's Vision
              </div>
              <div className="relative">
                <span className="absolute -top-12 -left-8 text-[120px] font-serif text-primary/5 pointer-events-none select-none">“</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 relative z-10">
                  Delivering Quality Healthcare with Trust & Precision
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  "Welcome to Fortschritt Healthcare. From the very beginning of our journey in 2014, we established this organization with a clear and singular ambition: to provide pharmaceutical formulations that meet the highest international benchmarks of safety, quality, and efficacy."
                </p>
                <p>
                  "Over the past decade, Baddi has evolved into India's primary pharmaceutical hub, and Fortschritt has grown alongside it. By continually investing in modern manufacturing blocks, strict Quality Assurance protocols, and responsive B2B custom formulation cycles, we have built lasting partnerships with leading healthcare brands and distributors globally."
                </p>
                <p>
                  "Our B2B contract manufacturing relies on total transparency and absolute compliance. We recognize that our clients place their reputation in our hands. Every tablet, capsule, and dosage form manufactured at Fortschritt is a testament to that trust. We look forward to scaling new regulatory heights and expanding our therapeutic capabilities to serve patient health everywhere."
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="text-xl font-extrabold text-primary">Naveen Chandra Kandpal</div>
                <div className="text-sm font-bold text-primary-accent uppercase tracking-wider mt-1">Founder, CEO & Chairman</div>
                <div className="text-xs text-slate-400 mt-1">Fortschritt Healthcare Limited</div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Our Team Section ──────────────────────────────────── */}
      <section id="team" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeUp className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Leadership & Team
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              The Experts Behind Fortschritt
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Combining administrative foresight, operational efficiency, and deep pharmaceutical expertise.
            </p>
          </FadeUp>

          {/* Executive Leadership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-12 mb-24">
            {teamMembers.map((member) => (
              <FadeUp key={member.name} className="group">
                <div className="relative mb-6 overflow-hidden rounded-[28px] aspect-[4/5] bg-slate-100 shadow-lg border-4 border-white hover:scale-[1.01] transition-transform duration-350">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-slate-200 text-xs font-bold tracking-widest uppercase mb-1">{member.role}</p>
                    <h4 className="text-white text-xl font-bold">{member.name}</h4>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                  <p className="text-primary-accent font-bold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <hr className="border-slate-100 max-w-5xl mx-auto mb-24" />

          {/* Departmental Operations Intro */}
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-extrabold text-primary mb-4">Departmental Strength</h3>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              We employ over 120+ skilled personnel in specialized divisions to maintain reliable wholesale manufacturing cycles.
            </p>
          </FadeUp>

          {/* Department Cards Grid */}
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                variants={staggerItem}
                className="p-8 rounded-[28px] border border-slate-100 bg-white hover:-translate-y-2 hover:shadow-xl hover:border-transparent transition-all duration-300 group shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-icons text-3xl">{dept.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-3">{dept.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{dept.description}</p>
              </motion.div>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ── Legacy & Milestones Section ───────────────────────── */}
      <section id="legacy" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Column Sticky info */}
            <FadeIn direction="left" className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                A Decade of Growth <br />
                <span className="text-primary-accent">& Global Footprint</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
                Since starting our early operational runs in 2014, Fortschritt Healthcare has scaled consistently, achieving new milestones in compliance, formulation ranges, and client satisfaction.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "star_border", color: "primary", label: "Founded January 2014" },
                  { icon: "public", color: "secondary", label: "Exporter to 45+ Countries" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color === "primary" ? "bg-primary/5 text-primary" : "bg-secondary/5 text-secondary"}`}>
                      <span className="material-icons">{item.icon}</span>
                    </div>
                    <div className="text-primary font-bold text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Right Column Timeline */}
            <FadeIn direction="right" className="lg:w-2/3 relative pl-12">
              {/* Vertical line indicator */}
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary via-primary-accent to-transparent rounded-full opacity-20" />
              
              <div className="space-y-16">
                {milestones.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease }}
                    className="relative group"
                  >
                    {/* Circle Dot indicator */}
                    <div className="absolute -left-[54px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary transition-all group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] shadow-sm" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                      <span className="text-primary font-black text-3xl tabular-nums tracking-tighter">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-primary-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
