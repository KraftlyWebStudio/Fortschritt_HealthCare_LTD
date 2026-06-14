"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import { useRouter } from "next/navigation";

import Welcome from "@/components/home/Welcome";
import Partners from "@/components/home/Partners";
import Verticals from "@/components/home/Verticals";
import MissionValues from "@/components/home/MissionValues";
import Strengths from "@/components/home/Strengths";
import Infrastructure from "@/components/home/Infrastructure";
import Timeline from "@/components/home/Timeline";
import Leadership from "@/components/home/Leadership";
import BrochureCTA from "@/components/home/BrochureCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
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
      }, 150);
      router.replace("/");
    }

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      router.replace("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />

        <Welcome />
        <MissionValues />
        <Partners />
        <Verticals />
        <Strengths />
        <Timeline />
        <Leadership />
        <Infrastructure />
        <BrochureCTA />
      </main>
      <Footer />
    </div>
  );
}
