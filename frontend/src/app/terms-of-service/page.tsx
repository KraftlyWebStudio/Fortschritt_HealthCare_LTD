"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FadeUp, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TermsPage() {
  const sections = [
    { 
      title: "Acceptance of Terms", 
      content: "By accessing and using the Fortschritt Healthcare Limited website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website." 
    },
    { 
      title: "Use of the Website", 
      content: "This website is provided for informational purposes only. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website." 
    },
    { 
      title: "Intellectual Property", 
      content: "All content on this website — including text, graphics, logos, images, and software — is the property of Fortschritt Healthcare Limited and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our express written permission." 
    },
    { 
      title: "Medical Disclaimer", 
      content: "The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical guidance. Our products are prescription-only unless otherwise specified and must be used under medical supervision." 
    },
    { 
      title: "Product Information", 
      content: "Product descriptions and specifications are subject to change. While we strive for accuracy, we do not warrant that product information is complete, current, or error-free. Availability may vary by region and applicable regulations." 
    },
    { 
      title: "Limitation of Liability", 
      content: "Fortschritt Healthcare Limited shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of, or inability to use, this website or its content, to the maximum extent permitted by law." 
    },
    { 
      title: "Third-Party Links", 
      content: "This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them." 
    },
    { 
      title: "Governing Law", 
      content: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Himachal Pradesh, India." 
    },
    { 
      title: "Changes to Terms", 
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the website after changes constitutes your acceptance of the revised terms." 
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
            <span className="material-icons text-[14px] text-secondary">gavel</span>
            User Agreement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold"
          >
            Effective Date: July 2026 · Last Updated: July 2026
          </motion.p>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeUp className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 md:p-16 space-y-10">
          <p className="text-slate-600 leading-relaxed mb-10 text-lg font-semibold border-b border-slate-100 pb-8">
            Please read these Terms of Service carefully before using the Fortschritt Healthcare Limited website. These terms govern your access to and use of our website and services.
          </p>
          <div className="space-y-10">
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
          </div>
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
