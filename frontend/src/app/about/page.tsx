"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeUp, FadeIn, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cultureGallery = [
  {
    title: "Blister Strip Sealing Line",
    description: "Our skilled technician operates the automated blister strip sealing machine, ensuring every tablet batch is hermetically packed and export-ready under GMP standards.",
    image: "/working/with_machine1.jpeg",
  },
  {
    title: "Capsule Filling & Dosing",
    description: "Hands-on operation of the capsule filling machine — precision-dosing active pharmaceutical ingredients at our Baddi manufacturing facility.",
    image: "/working/with_machine2.jpeg",
  },
  {
    title: "Tablet Strip Packaging",
    description: "Experienced operator managing the D-3130 strip packaging line, maintaining speed and sterility across high-volume production batches.",
    image: "/working/with_machine3.jpeg",
  },
  {
    title: "Operations & Admin Team",
    description: "Our dedicated operations and administrative staff managing orders, documentation, and client coordination from our modern Baddi office.",
    image: "/working/seating_area.jpeg",
  },
];

const pastEvents = [
  {
    title: "Industry Recognition & Excellence Award",
    date: "2024",
    category: "Industry Award",
    icon: "emoji_events",
    image: "/event/award1.jpeg",
    description: "Fortschritt Healthcare was honoured at the Jagran industry felicitation ceremony, receiving recognition from senior government dignitaries for outstanding contribution to the pharmaceutical manufacturing sector in Himachal Pradesh."
  },
  {
    title: "Annual Staff Celebration & Team Felicitation",
    date: "2024",
    category: "Team Event",
    icon: "celebration",
    image: "/event/group1.jpeg",
    description: "Our entire Baddi plant team came together for our annual celebration, honouring hardworking operators, packaging staff, and administrative personnel for their year-round dedication and excellence in GMP-compliant manufacturing."
  },
  {
    title: "CPhI & P-MEC India Participation",
    date: "November 2025",
    category: "Global Expo",
    icon: "public",
    image: "/event-cphi.png",
    description: "Represented Fortschritt Healthcare at South Asia's premier pharma event, presenting our advanced hormonal tablet formulations to international buyers from 20+ countries."
  },
  {
    title: "Annual Plant Safety & Festive Awards",
    date: "December 2025",
    category: "Workforce",
    icon: "workspace_premium",
    image: "/event-festive.png",
    description: "Celebrated 1200+ consecutive safe production days at our Baddi facility, presenting performance awards to our machine operators and supervisor teams during Diwali celebrations."
  }
];

export default function AboutPage() {
  const router = useRouter();

  // ── Drag-to-scroll for the events marquee ──────────────────────
  // Uses Pointer Events (mouse + touch unified) + setPointerCapture so
  // dragging stays smooth even when cursor leaves the container.
  // On drag start we REMOVE the CSS animation entirely (not just pause)
  // so inline transform has sole control with zero CSS-vs-inline conflict.
  const marqueeWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef          = useRef<HTMLDivElement>(null);
  const isDragging        = useRef(false);
  const dragStartX        = useRef(0);
  const dragBaseX         = useRef(0); // track translateX at drag start
  const DURATION          = 35;        // must match CSS animation duration

  /** Read the current translateX (px) from computed style. */
  const getTrackX = useCallback((): number => {
    if (!trackRef.current) return 0;
    const m = new DOMMatrix(window.getComputedStyle(trackRef.current).transform);
    return m.m41;
  }, []);

  /** Keep offset looping in [-2×oneSet, 0] for seamless infinity. */
  const wrapX = useCallback((x: number): number => {
    if (!trackRef.current) return x;
    const oneSet = trackRef.current.scrollWidth / 3;
    if (oneSet <= 0) return x;
    while (x < -2 * oneSet) x += oneSet;
    while (x > 0)           x -= oneSet;
    return x;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current || !marqueeWrapperRef.current) return;
    // Capture so pointer events keep firing even outside the element
    e.currentTarget.setPointerCapture(e.pointerId);

    // Read position BEFORE killing the animation
    const currentX = getTrackX();
    dragBaseX.current   = currentX;
    dragStartX.current  = e.clientX;
    isDragging.current  = true;

    // Fully remove CSS animation → inline transform has sole ownership
    trackRef.current.style.animation = 'none';
    trackRef.current.style.transform = `translateX(${currentX}px)`;
    marqueeWrapperRef.current.style.cursor = 'grabbing';
  }, [getTrackX]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - dragStartX.current;
    const newX  = wrapX(dragBaseX.current + delta);
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [wrapX]);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current || !marqueeWrapperRef.current) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDragging.current = false;

    // Compute how far through one cycle we are to resume from that point
    const oneSet    = trackRef.current.scrollWidth / 3;
    const currentX  = getTrackX();
    const progress  = oneSet > 0 ? Math.abs(currentX % oneSet) / oneSet : 0;
    const delay     = -(progress * DURATION);

    // Clear inline styles, then restore animation starting at the right offset
    trackRef.current.style.transform = '';
    trackRef.current.style.animation =
      `marquee-rtl ${DURATION}s linear ${delay}s infinite`;

    marqueeWrapperRef.current.style.cursor = 'grab';
  }, [getTrackX]);

  // Cancel behaves same as up (e.g. touch cancelled by OS)
  const onPointerCancel = onPointerUp;

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

      {/* ── CEO's Message Section ─────────────────────────────── */}
      <section id="ceo" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* CEO Portrait */}
            <FadeIn direction="left" className="w-full lg:w-5/12 max-w-md lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative overflow-hidden rounded-[36px] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(30,58,138,0.2)] bg-slate-100 aspect-[3/4]">
                  <img
                    src="/team/CEOImage.png"
                    alt="Naveen Chandra Kandpal - Managing Director, Fortschritt Healthcare"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-1">Managing Director</p>
                    <h4 className="text-xl font-bold text-white">Naveen Chandra Kandpal</h4>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CEO Message Content */}
            <FadeIn direction="right" className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                Managing Director's Message
              </div>
              <div className="relative">
                <span className="absolute -top-12 -left-8 text-[120px] font-serif text-primary/5 pointer-events-none select-none">“</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 relative z-10">
                  Delivering Quality Healthcare with Trust &amp; Precision
                </h3>
              </div>

              <div className="space-y-5 text-slate-600 text-base leading-relaxed font-medium">
                <p>
                  {"Mr. Naveen Kandpal is a seasoned pharmaceutical industry professional with nearly three decades of experience in business leadership, operations, and strategic management."}
                </p>
                <p>
                  {"He began his career in 1998 with "}
                  <strong className="text-primary">Rhydburg Pharmaceuticals</strong>
                  {", where he built a strong foundation in industry operations and business development. In 2000, he joined "}
                  <strong className="text-primary">Maiden Pharmaceuticals Ltd.</strong>
                  {" (Maiden Group of Companies), contributing significantly to the company's growth and expansion, and building extensive expertise in pharmaceutical manufacturing, marketing, and corporate management."}
                </p>
                <p>
                  {"In 2010, Mr. Kandpal moved to "}
                  <strong className="text-primary">Salus Pharmaceuticals</strong>
                  {", where he further strengthened his leadership credentials and played an important role in driving organizational development and business excellence."}
                </p>
                <p>
                  {"Since "}
                  <strong className="text-primary">2014</strong>
                  {", he has been associated with Fortschritt Ltd. as "}
                  <strong className="text-primary">Managing Director</strong>
                  {". Under his leadership, the company has focused on innovation, quality, operational efficiency, and sustainable growth. His strategic vision and commitment to excellence have been instrumental in advancing the organization's position in the pharmaceutical sector."}
                </p>
              </div>

              {/* Career timeline pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { year: "1998", org: "Rhydburg Pharmaceuticals" },
                  { year: "2000", org: "Maiden Pharmaceuticals" },
                  { year: "2010", org: "Salus Pharmaceuticals" },
                  { year: "2014", org: "Fortschritt Ltd." },
                ].map((step) => (
                  <div key={step.year} className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
                    <span className="text-xs font-extrabold text-primary">{step.year}</span>
                    <span className="text-[11px] text-slate-500 font-semibold">{step.org}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="text-xl font-extrabold text-primary">Naveen Chandra Kandpal</div>
                <div className="text-sm font-bold text-primary-accent uppercase tracking-wider mt-1">Managing Director</div>
                <div className="text-xs text-slate-400 mt-1">Fortschritt Healthcare Limited &nbsp;·&nbsp; Est. 2014</div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Our Team & Culture Section ────────────────────────── */}
      <section id="team" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeUp className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Our Culture & Team
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Our Workforce in Action
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              A glimpse into the daily focus, research collaboration, sterile packing, and dispatch operations at our Baddi plant.
            </p>
          </FadeUp>

          {/* Workforce Gallery Grid */}
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {cultureGallery.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative rounded-[32px] overflow-hidden border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Visual */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent opacity-65" />
                </div>
                
                {/* Overlay Text info */}
                <div className="p-6 md:p-8 bg-white relative z-10 border-t border-slate-50">
                  <h4 className="text-lg font-bold text-primary group-hover:text-primary-accent transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ── Past Events Section ────────────────────────────────── */}
      <section id="events" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Events & Highlights
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Company Highlights & Activities
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              Explore our participations, compliance milestones, and corporate social responsibility (CSR) drives.
            </p>
          </FadeUp>
        </div>

        {/* Full-width Marquee Container */}
        <FadeUp delay={0.15}>
          <div className="relative w-full py-4">
            {/* Gradient overlays — siblings to scroll area, always fixed */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            {/* Drag surface — overflow-hidden clips the track, touch-action:none */}
            {/* prevents browser scroll hijacking on mobile                        */}
            <div
              ref={marqueeWrapperRef}
              className="overflow-hidden cursor-grab select-none"
              style={{ touchAction: 'none' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
            >
              {/* will-change:transform hints the browser to GPU-composite this layer */}
              <div
                ref={trackRef}
                className="flex w-max gap-8 animate-marquee-rtl px-8"
                style={{ willChange: 'transform' }}
              >
                {[...pastEvents, ...pastEvents, ...pastEvents].map((evt, idx) => (
                  <div
                    key={`${evt.title}-${idx}`}
                    className="group w-[300px] sm:w-[420px] flex-shrink-0 rounded-[32px] overflow-hidden border border-slate-100 bg-white hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                        <img
                          src={evt.image}
                          alt={evt.title}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="p-8">
                        <div className="flex justify-between items-center mb-5">
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-primary/5 text-primary px-3 py-1 rounded-full">
                            {evt.category}
                          </span>
                          <span className="text-xs font-semibold text-slate-400 tabular-nums">
                            {evt.date}
                          </span>
                        </div>

                        <div className="flex items-start gap-3.5 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <span className="material-icons text-lg">{evt.icon}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-primary group-hover:text-primary-accent transition-colors pt-1.5">
                            {evt.title}
                          </h4>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed pl-14 font-medium">
                          {evt.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
