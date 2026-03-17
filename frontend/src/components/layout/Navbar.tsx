"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    // If we are already on the home page, scroll smoothly
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white border-b border-primary/10 transition-shadow ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="/images/brand/logo.png" 
              alt="Fortschritt Healthcare" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-extrabold text-xl tracking-tight">FORTSCHRITT</span>
              <span className="text-secondary text-[10px] font-semibold tracking-widest uppercase">Healthcare Limited</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              onClick={scrollToTop}
              className="text-slate-600 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <a href="#about" className="text-slate-600 hover:text-primary font-medium transition-colors">About</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium transition-colors">
                Products <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
            <a href="#presence" className="text-slate-600 hover:text-primary font-medium transition-colors">Global Presence</a>
            <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button className="md:hidden text-slate-600">
            <span className="material-icons text-2xl">menu</span>
          </button>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="hidden md:block bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 h-10 text-sm">
            <a href="#" className="sub-nav-link active py-2 font-medium">Overview</a>
            <a href="#" className="sub-nav-link py-2 text-slate-500 hover:text-primary transition-colors">R&D Center</a>
            <a href="#" className="sub-nav-link py-2 text-slate-500 hover:text-primary transition-colors">Manufacturing</a>
            <a href="#" className="sub-nav-link py-2 text-slate-500 hover:text-primary transition-colors">Quality Control</a>
            <a href="#" className="sub-nav-link py-2 text-slate-500 hover:text-primary transition-colors">Certifications</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
