"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sitemapData = [
  {
    section: "Main Pages",
    icon: "home",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "History & Journey", href: "/?scroll=legacy" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    section: "Products Portfolio",
    icon: "inventory_2",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products?cat=general" },
      { label: "Active Pharma Ingredients", href: "/products?cat=api" },
      { label: "Nutraceuticals", href: "/products?cat=nutra" },
      { label: "Veterinary Products", href: "/products?cat=vet" },
    ],
  },
  {
    section: "Our Infrastructure",
    icon: "factory",
    links: [
      { label: "Infrastructure Overview", href: "/?scroll=infrastructure" },
      { label: "Research & Development", href: "/?scroll=infrastructure" },
      { label: "Manufacturing Facility", href: "/?scroll=infrastructure" },
      { label: "Quality Control Standards", href: "/?scroll=infrastructure" },
    ],
  },
  {
    section: "Company & Leadership",
    icon: "domain",
    links: [
      { label: "Company Overview", href: "/?scroll=about" },
      { label: "CEO's Message", href: "/about?scroll=ceo" },
      { label: "Our Team", href: "/about?scroll=team" },
      { label: "Events & Highlights", href: "/about?scroll=events" },
      { label: "R&D Publications", href: "/rd-publications" },
      { label: "Manufacturing Ethics", href: "/manufacturing-ethics" },
    ],
  },
  {
    section: "Legal & Policies",
    icon: "gavel",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function SitemapPage() {
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
            <span className="material-icons text-[14px] text-secondary">explore</span>
            Site Navigator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Sitemap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Access any page, product segment, or company policy directly from our master sitemap.
          </motion.p>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((group) => (
            <motion.div
              key={group.section}
              variants={staggerItem}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-50">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-icons text-xl">{group.icon}</span>
                </div>
                <h2 className="font-extrabold text-primary text-lg">{group.section}</h2>
              </div>
              
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors text-sm font-semibold group"
                    >
                      <span className="material-icons text-[16px] text-primary/40 group-hover:translate-x-0.5 transition-transform">
                        chevron_right
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGrid>
      </main>

      <Footer />
    </div>
  );
}
