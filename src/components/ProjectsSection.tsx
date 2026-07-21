"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesBackground } from "./SparklesBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const projectsData = [
  {
    id: "anemia-detection",
    title: "Non-Invasive Anemia Detection",
    problem: "Need for clinically interpretable, non-invasive diagnostic classification to replace traditional blood tests.",
    tech: ["U-Net", "ViT-B/16", "YOLOv8", "Streamlit", "Python"],
    image: "/images/proj_anemia.png",
  },
  {
    id: "tumor-detection",
    title: "Tumor Localization on WSI",
    problem: "Computational pathology system for tumor vs non-tumor classification and localization in Whole Slide Images without pixel-level annotations.",
    tech: ["UNet2", "CLAM", "K-Means", "QuPath", "Python"],
    image: "/images/proj_tumor.png",
  },
  {
    id: "medical-ocr-system",
    title: "Medical Packaging OCR System",
    problem: "Automating manual inspection of medicine boxes to accurately extract medicine name, expiry date, batch number, MRP, and barcodes.",
    tech: ["Python", "YOLOv8", "PaddleOCR", "FastAPI", "Streamlit"],
    image: "/images/proj_medical_ocr.png",
  },
  {
    id: "employee-monitoring",
    title: "Employee Monitoring System",
    problem: "Manual attendance tracking across large corporate facilities is inaccurate and labor-intensive.",
    tech: ["OpenCV", "PyTorch", "YOLOv8", "FaceNet", "Python"],
    image: "/images/proj_employee.png",
  },
  {
    id: "bearing-quality-inspection",
    title: "Automated Bearing Quality Inspection",
    problem: "AI-driven pipeline for detecting defective bearings based on 16-pin count analysis in manufacturing.",
    tech: ["YOLOv8", "Python", "OpenCV", "Streamlit", "PyTorch"],
    image: "/images/proj_bearing_new.png",
  },
  {
    id: "pest-detection",
    title: "Pest Detection in Agriculture",
    problem: "Late detection of crop pests leads to significant agricultural losses and non-sustainable farming practices.",
    tech: ["CNN", "TensorFlow", "Deep Learning", "Python"],
    image: "/images/pest_detection.png",
  },
  {
    id: "atliq-hardware-360",
    title: "AtliQ Hardware - Business Insights 360",
    problem: "Comprehensive 360-degree business intelligence dashboard tracking cross-functional metrics across sales, marketing, and finance.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    image: "/images/proj_hardware.png",
  },
  {
    id: "atliq-grand-hotel",
    title: "AtliQ Grand Hotel Data Analysis",
    problem: "Data-driven analysis of hotel revenue management to optimize occupancy rates and boost overall hospitality profits.",
    tech: ["Python", "Pandas", "Data Analytics"],
    image: "/images/proj_hotel.png",
  },
  {
    id: "sales-finance-report",
    title: "Sales & Finance Report",
    problem: "Dynamic and automated sales and finance tracking reports for evaluating gross margins, net sales, and regional profitability.",
    tech: ["Excel", "Power Query", "Financial Analytics"],
    image: "/images/proj_finance.png",
  }
];

// Only 3 featured projects shown in the deck
const featuredProjects = projectsData.slice(0, 3);

// The "View All" card is the 4th card in the deck
// Total deck size = 3 featured + 1 CTA card = 4
const DECK_SIZE = featuredProjects.length + 1;

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.project-card-3d');
    if (!containerRef.current || cards.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const N = cards.length; // 4 total cards

      // Initial positioning
      cards.forEach((card, i) => {
        gsap.set(card, {
          scale: 1 - i * 0.05,
          y: i * 25,
          x: 0,
          rotation: 0,
          zIndex: N - i,
          opacity: i < 4 ? 1 - i * 0.25 : 0,
          borderColor: i === 0 ? "rgba(0, 242, 254, 0.5)" : "rgba(255, 255, 255, 0.05)",
          boxShadow: i === 0 ? "0 20px 50px rgba(0,242,254,0.15)" : "none",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(N - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        }
      });

      for (let step = 0; step < N - 1; step++) {
        const activeIndex = step;

        const isEven = activeIndex % 2 === 0;
        const xOffset = isEven ? -800 : 800;
        const rotationAngle = isEven ? -45 : 45;

        tl.to(cards[activeIndex], {
          x: xOffset,
          y: -800,
          rotation: rotationAngle,
          scale: 1.1,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in"
        }, `step${step}`);

        tl.set(cards[activeIndex], {
          y: (N - 1) * 25,
          x: 0,
          rotation: 0,
          scale: 1 - (N - 1) * 0.05,
          zIndex: -step,
          borderColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "none"
        });

        tl.to(cards[activeIndex], {
          opacity: N < 4 ? 0.25 : 0,
          duration: 0.5,
          ease: "power1.out"
        });

        for (let j = 0; j < N; j++) {
          if (j === activeIndex) continue;

          const currentSlot = (j - step + N) % N;
          const nextSlot = currentSlot - 1;

          if (nextSlot >= 0) {
            tl.to(cards[j], {
              y: nextSlot * 25,
              scale: 1 - nextSlot * 0.05,
              opacity: nextSlot < 4 ? 1 - nextSlot * 0.25 : 0,
              borderColor: nextSlot === 0 ? "rgba(0, 242, 254, 0.5)" : "rgba(255, 255, 255, 0.05)",
              boxShadow: nextSlot === 0 ? "0 20px 50px rgba(0,242,254,0.15)" : "none",
              duration: 1,
              ease: "power1.inOut"
            }, `step${step}`);
          }
        }
      }

      // Force layout refresh after rendering
      gsap.delayedCall(0.1, () => {
        ScrollTrigger.refresh(true);
      });
    });

    // Restore scroll position if returning from a project detail page (works on all devices)
    const savedScroll = sessionStorage.getItem(`scroll_${window.location.pathname}`);
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem(`scroll_${window.location.pathname}`);
    }

  }, { scope: containerRef });

  return (
    <section id="projects" className="relative bg-gradient-to-b from-[#000000] via-[#020408] to-[#050810] z-20 shadow-2xl overflow-hidden">
      <SparklesBackground count={100} />
      <div ref={containerRef} className="py-16 md:py-20 w-full min-h-screen flex flex-col justify-center relative z-10">

        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          {/* Intro Heading */}
          <div className="flex flex-col items-center justify-center text-center mb-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none"
            />
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-6 text-xl text-text-secondary font-light max-w-2xl px-4 relative z-10">
              A collection of intelligent systems architected to solve real-world industry challenges.
            </p>
          </div>

          {/* 3D Stacking Deck Container — 3 project cards + 1 "View All" CTA card */}
          <div className="relative w-full max-w-5xl mx-auto h-auto md:h-[480px] flex flex-col md:block gap-8 md:gap-0 justify-center perspective-[2000px] px-4">

            {/* ── Featured project cards (first 3) ── */}
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card-3d relative md:absolute top-0 left-0 right-0 mx-auto w-full max-w-4xl bg-[#11222C] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[380px] border border-white/5"
                style={{ transformOrigin: "top center" }}
              >
                {/* Image Block */}
                <div className="w-full md:w-[45%] h-[200px] md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Block */}
                <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center relative">
                  <div className="flex items-center space-x-2 mb-2 md:mb-4 text-accent-cyan font-mono text-xs uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    <span>{project.id.replace(/-/g, ' ')}</span>
                  </div>

                  <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-4 md:mb-6 border-l-2 border-accent-cyan/30 pl-4">
                    {project.problem}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      onClick={() => sessionStorage.setItem(`scroll_${window.location.pathname}`, window.scrollY.toString())}
                      className="btn-17 group/btn px-8 py-3 bg-[#11222C] border border-accent-mint/50 text-white font-bold shadow-[0_0_20px_rgba(79,172,254,0.1)]"
                      style={{ '--btn-fill': '#00F2FE', '--btn-speed': '0.35s', '--btn-skew': '0.25' } as React.CSSProperties}
                    >
                      <span className="text-container flex items-center justify-center">
                        <span className="text flex items-center text-sm">
                          Explore Project
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* ── 4th card: "View All Projects" CTA ── */}
            <div
              className="project-card-3d relative md:absolute top-0 left-0 right-0 mx-auto w-full max-w-4xl bg-[#11222C] rounded-3xl overflow-hidden shadow-2xl h-auto md:h-[380px] border border-white/5"
              style={{ transformOrigin: "top center" }}
            >
              {/* Glow orbs inside the card */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent-cyan/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-mint/10 rounded-full blur-[80px]" />
              </div>

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] rounded-3xl"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,242,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,254,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 py-12 md:py-0">
                {/* Icon badge */}
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30">
                  <LayoutGrid className="w-9 h-9 text-accent-cyan" />
                </div>

                {/* Counter */}
                <p className="text-accent-cyan font-mono text-xs uppercase tracking-widest mb-3">
                  {projectsData.length} Projects Total
                </p>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                  Want to see{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">
                    more?
                  </span>
                </h3>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  Explore the full collection — spanning Computer Vision, Data Analytics, and Business Intelligence.
                </p>

                <Link
                  href="/projects"
                  onClick={() => sessionStorage.setItem(`scroll_${window.location.pathname}`, window.scrollY.toString())}
                  className="btn-17 group/cta px-10 py-4 font-bold text-base bg-white text-black hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-colors duration-300"
                  style={{ '--btn-fill': '#000000', '--btn-speed': '0.45s', '--btn-skew': '-0.15' } as React.CSSProperties}
                >
                  <span className="text-container flex items-center justify-center">
                    <span className="text flex items-center gap-3">
                      <LayoutGrid className="w-5 h-5 group-hover/cta:rotate-12 transition-transform duration-300" />
                      View All Projects
                      <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

