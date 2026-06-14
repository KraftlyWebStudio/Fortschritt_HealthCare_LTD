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
    color: "from-blue-500/10 to-sky-500/5",
    links: [
      { label: "Home",              href: "/",        description: "Welcome & hero overview" },
      { label: "About Us",         href: "/about",   description: "Our story, vision & team" },
      { label: "Products",         href: "/products",description: "Full product portfolio" },
      { label: "Contact Us",       href: "/contact", description: "Get in touch with us" },
      { label: "Careers",          href: "/careers", description: "Join our growing team" },
    ],
  },
  {
    section: "Products Portfolio",
    icon: "inventory_2",
    color: "from-violet-500/10 to-purple-500/5",
    links: [
      { label: "All Products",               href: "/products",                description: "Browse complete catalogue" },
      { label: "Gynecology Range",           href: "/products?cat=gynecology", description: "Women's health & reproductive care" },
      { label: "General Medicine",           href: "/products?cat=general",    description: "Tablets, capsules & injectables" },
      { label: "Hormonal Tablets",           href: "/products?cat=hormonal",   description: "Endocrine & hormone therapy" },
      { label: "Active Pharma Ingredients",  href: "/products?cat=api",        description: "High-purity API manufacturing" },
      { label: "Nutraceuticals",             href: "/products?cat=nutra",      description: "Wellness & dietary supplements" },
      { label: "Veterinary Products",        href: "/products?cat=vet",        description: "Animal healthcare solutions" },
    ],
  },
  {
    section: "Company & Leadership",
    icon: "domain",
    color: "from-emerald-500/10 to-teal-500/5",
    links: [
      { label: "Company Overview",      href: "/?scroll=about",         description: "Mission, vision & values" },
      { label: "CEO's Message",         href: "/about?scroll=ceo",      description: "Leadership vision & direction" },
      { label: "Our Team",              href: "/about?scroll=team",     description: "Meet the experts behind us" },
      { label: "Events & Highlights",   href: "/about?scroll=events",   description: "CPhI expos & company milestones" },
      { label: "Legacy & Milestones",   href: "/?scroll=legacy",        description: "10+ years of healthcare impact" },
    ],
  },
  {
    section: "Infrastructure",
    icon: "factory",
    color: "from-orange-500/10 to-amber-500/5",
    links: [
      { label: "Infrastructure Overview",  href: "/?scroll=infrastructure",  description: "Plant & facility layout" },
      { label: "Manufacturing Facility",   href: "/manufacturing-ethics",     description: "GMP-compliant production" },
      { label: "R&D Publications",         href: "/rd-publications",          description: "Scientific research & studies" },
      { label: "Quality Standards",        href: "/?scroll=infrastructure",   description: "WHO-GMP & ISO certifications" },
    ],
  },
  {
    section: "Resources",
    icon: "menu_book",
    color: "from-rose-500/10 to-pink-500/5",
    links: [
      { label: "R&D Publications",      href: "/rd-publications",       description: "Research papers & white papers" },
      { label: "Manufacturing Ethics",  href: "/manufacturing-ethics",  description: "Our production ethics charter" },
      { label: "Sitemap",              href: "/sitemap",                description: "Full site navigation index" },
    ],
  },
  {
    section: "Legal & Policies",
    icon: "gavel",
    color: "from-slate-500/10 to-gray-500/5",
    links: [
      { label: "Privacy Policy",    href: "/privacy-policy",    description: "How we handle your data" },
      { label: "Terms of Service",  href: "/terms-of-service",  description: "Rules governing site use" },
      { label: "Cookie Policy",     href: "/cookie-policy",     description: "Our cookie & tracking policy" },
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

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { value: sitemapData.length, label: "Sections" },
              { value: sitemapData.reduce((acc, s) => acc + s.links.length, 0), label: "Pages" },
              { value: "100%", label: "Indexed" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-3 text-center">
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs font-semibold tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((group) => (
            <motion.div
              key={group.section}
              variants={staggerItem}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Section header */}
              <div className={`flex items-center gap-3.5 mb-6 pb-5 border-b border-slate-100`}>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-primary border border-primary/10`}>
                  <span className="material-icons text-xl">{group.icon}</span>
                </div>
                <div>
                  <h2 className="font-extrabold text-primary text-base leading-tight">{group.section}</h2>
                  <p className="text-slate-400 text-[11px] font-medium mt-0.5">{group.links.length} pages</p>
                </div>
              </div>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-start gap-2.5 text-slate-600 hover:text-primary transition-colors group"
                    >
                      <span className="material-icons text-[15px] text-primary/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5 flex-shrink-0">
                        chevron_right
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGrid>

        {/* Bottom note */}
        <FadeUp delay={0.3} className="text-center mt-16">
          <p className="text-slate-400 text-sm font-medium">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline underline-offset-4">
              Contact our team
            </Link>{" "}
            and we&apos;ll help you navigate.
          </p>
        </FadeUp>
      </main>

      <Footer />
    </div>
  );
}
