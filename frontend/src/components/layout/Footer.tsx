"use client";

import React from "react";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a0f52] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/brand/logo.webp"
                alt="Fortschritt Healthcare Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <h3 className="text-2xl font-black italic tracking-tighter decoration-secondary decoration-4">
                FORTSCHRITT
              </h3>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-loose max-w-xs">
              Pioneering precision medicine for a healthier tomorrow. Quality without compromise, healthcare for all.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/Fortschritt-Healthcare-100009673599725"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/fortschritt-healthcare-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3.5 text-white/70 text-sm">
              <li><a href="/" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">About Us</a></li>
              <li><a href="/products" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Products</a></li>
              <li><a href="/careers" className="text-secondary font-semibold hover:text-white transition-colors">Careers →</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Contact Us</a></li>
              <li><a href="/?scroll=infrastructure" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Infrastructure</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Resources & Legal</h4>
            <ul className="space-y-3.5 text-white/70 text-sm">
              <li><a href="/rd-publications" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">R&amp;D Publications</a></li>
              <li><a href="/manufacturing-ethics" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Manufacturing Ethics</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Cookie Policy</a></li>
              <li><a href="/sitemap" className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/30">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Contact Info</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="material-icons text-secondary text-base pt-0.5 flex-shrink-0">location_on</span>
                <span className="leading-relaxed">
                  Plot No. 219, Industrial Area,<br />
                  Phase-I, Baddi,<br />
                  Himachal Pradesh – 173205
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span className="material-icons text-secondary text-base pt-0.5 flex-shrink-0">call</span>
                <span className="leading-relaxed">
                  <a href="tel:+918352810339" className="hover:text-white transition-colors">+91 83528 10339</a><br />
                  <a href="tel:+918580877336" className="hover:text-white transition-colors">+91 85808 77336</a><br />
                  <a href="tel:+9101795350639" className="hover:text-white transition-colors">01795-350639</a>{" "}
                  <span className="text-white/40 text-xs">(General)</span>
                </span>
              </li>

              {/* Emails — grouped cleanly */}
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-secondary text-base flex-shrink-0">mail</span>
                  <a href="mailto:info@fortschritthealthcareltd.com" className="hover:text-white transition-colors text-xs break-all">
                    info@fortschritthealthcareltd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-secondary text-base flex-shrink-0">mail_outline</span>
                  <a href="mailto:fortschritthealthcare@gmail.com" className="hover:text-white transition-colors text-xs break-all">
                    fortschritthealthcare@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-secondary text-base flex-shrink-0">forward_to_inbox</span>
                  <a href="mailto:fortschritthealthcareltdsales@gmail.com" className="hover:text-white transition-colors text-xs break-all">
                    fortschritthealthcareltdsales@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-secondary text-base flex-shrink-0">person</span>
                  <a href="mailto:ceo@fortschritthealthcareltd.com" className="hover:text-white transition-colors text-xs break-all">
                    ceo@fortschritthealthcareltd.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Fortschritt Healthcare Limited. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="/sitemap"        className="hover:text-white transition-colors">Sitemap</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookie-policy"  className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
