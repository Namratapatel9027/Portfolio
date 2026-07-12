"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ArrowLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/components/ProjectsSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  { key: "all",     label: "All Projects",    value: projectsData.length, ids: projectsData.map((p) => p.id) },
  { key: "cv",      label: "Computer Vision", value: 3, ids: ["employee-monitoring", "pest-detection", "bearing-quality-inspection"] },
  { key: "medical", label: "Medical AI",       value: 1, ids: ["anemia-detection"] },
  { key: "data",    label: "Data & Analytics", value: 3, ids: ["atliq-grand-hotel", "atliq-hardware-360", "sales-finance-report"] },
  { key: "ai",      label: "AI / ML",          value: 4, ids: ["employee-monitoring", "pest-detection", "anemia-detection", "bearing-quality-inspection"] },
];

const SPARKLES = [
  { top: "10%",  left: "-2%",   delay: 0 },
  { top: "80%",  left: "0%",    delay: 0.1 },
  { top: "20%",  right: "-2%",  delay: 0.05 },
  { top: "70%",  right: "0%",   delay: 0.15 },
  { top: "-3%",  left: "30%",   delay: 0.08 },
  { top: "103%", left: "60%",   delay: 0.12 },
];

function ProjectCard({ project, globalIndex }: { project: (typeof projectsData)[0]; globalIndex: number }) {
  const slideLeft = globalIndex % 2 === 0;

  return (
    <div className="relative w-full h-auto md:h-[460px] flex flex-col md:flex-row md:items-center md:justify-center perspective-[1200px] gap-6 md:gap-0">
      
      {/* Glitter glow behind card */}
      <div className="card-glitter absolute w-[95%] h-full rounded-[2rem] pointer-events-none z-0 hidden md:block opacity-0 scale-95"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,242,254,0.18) 0%, rgba(79,172,254,0.1) 50%, transparent 80%)",
          filter: "blur(20px)",
        }}
      />

      {/* DETAILS CARD (Behind initially) */}
      <div className="card-details relative md:absolute w-full md:w-[48%] h-auto md:h-full rounded-[2rem] overflow-hidden
          bg-[#0D1E26] border border-accent-cyan/25 shadow-[0_4px_24px_rgba(0,0,0,0.45)] z-0
          flex flex-col justify-center px-6 md:px-10 py-8 opacity-100 md:opacity-0 scale-100 md:scale-95 order-2 md:order-none"
          data-slide={slideLeft ? "right" : "left"} 
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-64 h-64 bg-accent-cyan/8 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-accent-cyan/15 border border-accent-cyan/50 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0">
              {String(globalIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              {project.id.replace(/-/g, " ")}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
            {project.title}
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed border-l-2 border-accent-cyan/40 pl-4">
            {project.problem}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-full bg-accent-cyan/12 border border-accent-cyan/25 text-accent-cyan">
                {t}
              </span>
            ))}
          </div>
          <Link href={`/projects/${project.id}`}
            onClick={() => sessionStorage.setItem(`scroll_${window.location.pathname}`, window.scrollY.toString())}
            className="btn-17 group/btn px-6 py-3 font-bold text-sm text-white w-fit bg-gradient-to-r from-accent-cyan/18 to-accent-mint/18 border border-accent-cyan/45 shadow-[0_0_20px_rgba(0,242,254,0.1)]"
            style={{ '--btn-fill': '#4FACFE', '--btn-speed': '0.35s', '--btn-skew': '-0.2' } as React.CSSProperties}>
            <span className="text-container flex items-center justify-center">
              <span className="text flex items-center gap-2">
                Explore Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* IMAGE CARD (Front initially) */}
      <div className="card-image relative md:absolute w-full md:w-[48%] h-[250px] md:h-full rounded-[2rem] overflow-hidden
          bg-[#080E11] border border-accent-cyan/25 z-10 shadow-[0_24px_64px_rgba(0,242,254,0.2)] order-1 md:order-none"
          data-slide={slideLeft ? "left" : "right"} 
      >
        <div className="absolute inset-0">
          <Image src={project.image} alt={project.title} fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E11]/90 via-[#080E11]/20 to-transparent pointer-events-none hidden md:block" />

        {/* Resting text on image */}
        <div className="resting-text absolute inset-0 hidden md:flex flex-col justify-end p-8 pointer-events-none">
          <p className="absolute top-6 right-8 flex items-center gap-1.5 text-white/35 text-[10px] font-mono uppercase tracking-widest">
            <span>Scroll to split</span><ArrowRight className="w-3 h-3" />
          </p>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0">
              {String(globalIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-accent-cyan font-mono text-xs uppercase tracking-widest">{project.id.replace(/-/g, " ")}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">{project.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const activeCat = categories.find((c) => c.key === activeCategory)!;
  const filtered = projectsData.filter((p) => activeCat.ids.includes(p.id));

  useGSAP(() => {
    // Immediately scroll to top if we don't have a saved scroll position for this specific page
    // This prevents a flash of being scrolled down when navigating from another long page
    const savedScroll = sessionStorage.getItem(`scroll_${window.location.pathname}`);
    if (!savedScroll) {
      window.scrollTo(0, 0);
    }

    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === containerRef.current) t.kill();
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card-3d');
      if (!containerRef.current || cards.length === 0) return;

      const N = cards.length;

      // Initial setup: stack them visually
      cards.forEach((card, i) => {
        gsap.set(card, {
          scale: 1 - i * 0.05,
          y: i * 30, // Each card is slightly lower
          zIndex: N - i, // Top card has highest z-index
          opacity: i === 0 ? 1 : Math.max(0, 1 - i * 0.2),
          filter: `blur(${i * 1.5}px)`,
          transformOrigin: "top center",
        });
        // Ensure children are reset if category changes
        gsap.set(card.querySelector('.card-image'), { xPercent: 0, scale: 1, boxShadow: "0 24px 64px rgba(0,242,254,0.2)" });
        gsap.set(card.querySelector('.card-details'), { xPercent: 0, scale: 0.95, opacity: 0 });
        gsap.set(card.querySelector('.card-glitter'), { opacity: 0, scale: 0.95 });
        gsap.set(card.querySelector('.resting-text'), { opacity: 1 });
      });

      if (N > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center", 
            end: `+=${N * 150}%`, // Longer scroll to read
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        for (let step = 0; step < N; step++) {
          const activeCard = cards[step];
          const slideImageLeft = activeCard.querySelector('.card-image')?.getAttribute('data-slide') === 'left';
          
          // PHASE 1: SPLIT
          tl.to(activeCard.querySelector('.card-image'), {
            xPercent: slideImageLeft ? -54 : 54,
            scale: 1.02,
            boxShadow: "0 12px 32px rgba(0,242,254,0.4)",
            duration: 1,
            ease: "power2.inOut"
          }, `step${step}_split`);
          
          tl.to(activeCard.querySelector('.resting-text'), {
            opacity: 0,
            duration: 0.5,
          }, `step${step}_split`);
          
          tl.to(activeCard.querySelector('.card-details'), {
            xPercent: slideImageLeft ? 54 : -54,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
          }, `step${step}_split`);
          
          tl.to(activeCard.querySelector('.card-glitter'), {
            opacity: 1,
            scale: 1.1,
            duration: 1,
            ease: "power2.inOut"
          }, `step${step}_split`);

          // Give some reading time while scrolling
          tl.to({}, {duration: 0.5}); 

          // PHASE 2: OUT & NEXT (only if there are next cards)
          if (step < N - 1) {
            tl.to(activeCard, {
              y: -150,
              scale: 1.1,
              opacity: 0,
              filter: "blur(10px)",
              duration: 1,
              ease: "power2.in",
            }, `step${step}_out`);

            // Bring remaining cards forward
            for (let j = step + 1; j < N; j++) {
              const pos = j - step - 1; // 0 means it becomes the front card
              tl.to(cards[j], {
                scale: 1 - pos * 0.05,
                y: pos * 30,
                opacity: pos === 0 ? 1 : Math.max(0, 1 - pos * 0.2),
                filter: `blur(${pos * 1.5}px)`,
                duration: 1,
                ease: "power1.inOut",
              }, `step${step}_out`);
            }
          }
        }
      }
    });
    
    // Force layout refresh and restore scroll if returning from a project detail page
    gsap.delayedCall(0.1, () => {
      ScrollTrigger.refresh(true);
      const savedScroll = sessionStorage.getItem(`scroll_${window.location.pathname}`);
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll, 10));
        sessionStorage.removeItem(`scroll_${window.location.pathname}`);
      } else {
        window.scrollTo(0, 0);
      }
    });

  }, { dependencies: [filtered] });

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">

      {/* Header */}
      <section className="relative pt-28 pb-16 flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

        <button onClick={() => router.back()}
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </button>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan font-mono text-xs uppercase tracking-widest mb-6">
          <LayoutGrid className="w-3.5 h-3.5" />
          All Projects
        </div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10">
          Full{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">Project</span>
          {" "}Archive
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-xl text-text-secondary font-light max-w-2xl relative z-10">
          {projectsData.length} intelligent systems spanning Computer Vision, Medical AI,
          Data Analytics, and Business Intelligence.
        </motion.p>
      </section>

      {/* Filter Tabs */}
      <section className="relative px-4 max-w-4xl mx-auto mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ y: -4, scale: 1.03, boxShadow: "0 0 24px rgba(0,242,254,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border transition-colors duration-300 cursor-pointer
                  ${isActive
                    ? "border-accent-cyan bg-accent-cyan/20 text-accent-cyan shadow-[0_0_24px_rgba(0,242,254,0.2)]"
                    : "border-white/20 bg-[#0E1F27] hover:border-accent-cyan/50 hover:bg-[#122A35]"
                  }`}
              >
                {isActive && (
                  <motion.div layoutId="activeTabDot"
                    className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,254,0.9)]"
                    transition={{ type: "spring", bounce: 0.4 }} />
                )}
                <span className={`text-2xl font-black tracking-tight ${isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint"
                  : "text-white"}`}>
                  {cat.value}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest text-center leading-tight ${isActive ? "text-accent-cyan" : "text-white/55"}`}>
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      {/* Filter label */}
      <section className="max-w-4xl mx-auto px-4 mb-8 flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.p key={activeCategory}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25 }}
            className="text-text-secondary text-sm font-mono">
            Showing <span className="text-accent-cyan font-bold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeCategory !== "all" && <> in <span className="text-white">{activeCat.label}</span></>}
          </motion.p>
          {activeCategory !== "all" && (
            <button onClick={() => setActiveCategory("all")}
              className="text-xs font-mono text-text-secondary hover:text-accent-cyan transition-colors uppercase tracking-widest">
              Clear filter ×
            </button>
          )}
        </AnimatePresence>
      </section>

      {/* GSAP Scroll Stacking Container */}
      <section className="relative w-full max-w-4xl mx-auto px-4 pb-[10vh] md:pb-[30vh]">
        <div ref={containerRef} className="relative w-full h-auto md:h-[500px] flex flex-col md:block items-center justify-center gap-12 md:gap-0">
          {filtered.length > 0 ? (
            filtered.map((project) => {
              const globalIndex = projectsData.findIndex((p) => p.id === project.id);
              return (
                <div key={project.id} className="project-card-3d relative md:absolute w-full top-0 left-0">
                  <ProjectCard project={project} globalIndex={globalIndex} />
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <LayoutGrid className="w-12 h-12 text-text-secondary mb-4" />
              <p className="text-text-secondary text-lg">No projects in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
