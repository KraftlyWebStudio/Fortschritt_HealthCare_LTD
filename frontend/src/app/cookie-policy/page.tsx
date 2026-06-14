"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FadeUp, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CookiePolicyPage() {
  const sections = [
    { 
      title: "What Are Cookies?", 
      content: "Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience." 
    },
    { 
      title: "How We Use Cookies", 
      content: "We use cookies to keep the site functioning correctly (essential cookies), remember your preferences (functional cookies), and understand how visitors interact with our content (analytics cookies). We do not use cookies for advertising." 
    },
    { 
      title: "Types of Cookies We Use", 
      content: "Essential Cookies: Required for the website to function properly — cannot be disabled. Functional Cookies: Remember your preferences such as language and region. Analytics Cookies: Help us understand website traffic and usage patterns (anonymized)." 
    },
    { 
      title: "Managing Cookies", 
      content: "You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website. Most browsers allow you to refuse cookies entirely or to accept cookies from specific websites." 
    },
    { 
      title: "Third-Party Cookies", 
      content: "Some pages on our website may include content from third-party services (such as Google Analytics). These third parties may set their own cookies subject to their own privacy policies." 
    },
    { 
      title: "Updates to This Policy", 
      content: "We may update this Cookie Policy as our website or applicable laws change. Any updates will be posted here with a new effective date." 
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary pb-24 pt-40">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="material-icons text-[14px] text-secondary">cookie</span>
            Website Compliance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Effective Date: July 2026 · Last Updated: July 2026
          </motion.p>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeUp className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 md:p-16 space-y-10">
          {sections.map((s, i) => (
            <div key={s.title} className="group">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary text-sm font-black">
                  {i + 1}
                </span>
                {s.title}
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium pl-11">
                {s.content}
              </p>
            </div>
          ))}
        </FadeUp>

        <FadeUp className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/5 text-primary font-bold rounded-2xl hover:bg-primary/10 transition-colors"
          >
            <span className="material-icons text-sm">mail_outline</span>
            Contact Us With Questions
          </Link>
        </FadeUp>
      </main>

      <Footer />
    </div>
  );
}
