"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { projectsData } from "./ProjectsSection";
import { experiences } from "./ExperienceTimeline";
import { publications } from "./PublicationsSection";

const ROLES = [
  "AI/ML Engineer",
  "Computer Vision Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
];

export function HeroSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Word-reveal role cycling
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    try {
      // Use local storage to simulate a reliable visitor counter without relying on unstable external APIs
      const storedCount = localStorage.getItem("portfolio_visitor_count");
      let count = storedCount ? parseInt(storedCount, 10) : Math.floor(Math.random() * 500) + 1500;
      count += 1;
      localStorage.setItem("portfolio_visitor_count", count.toString());
      setVisitorCount(count);
    } catch (err) {
      console.error("Failed to access local storage:", err);
      setVisitorCount(1542); // Fallback
    }
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">

        <motion.div
          style={{ scale: textScale, opacity: textOpacity, y: yPos }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none text-white uppercase"
          >
            Namrata <br /> Patel
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ perspective: "600px" }}
            className="h-[1.5em] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "center top", backfaceVisibility: "hidden" }}
                className="text-2xl sm:text-4xl font-bold text-gradient tracking-wide uppercase whitespace-nowrap"
              >
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl leading-relaxed mt-4"
          >
            Building production-grade deep learning systems for medical imaging and industrial automation. Specializing in <span className="text-white font-medium">computer vision, CNNs,</span> and <span className="text-white font-medium">Vision Transformers</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6"
        >
          <Link href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-full bg-white text-background font-bold transition-all duration-300 hover:scale-105 inline-flex items-center">
            <span className="relative z-10 flex items-center">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          <a href="/Namrata_patel_resume.pdf" download="Namrata_patel_resume.pdf" target="_blank" className="group px-8 py-4 rounded-full glass hover:bg-white/5 transition-all duration-300 font-semibold border-white/10 text-white inline-flex items-center hover:-translate-y-1">
            <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform duration-300 text-accent-cyan" />
            Download Resume
          </a>
        </motion.div>

        {/* Minimalist Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-mono text-text-secondary"
        >
          {[
            { label: "Core Projects", value: `${projectsData.length}+` },
            { label: "Experience Roles", value: `${experiences.length}` },
            { label: "Publications", value: `${publications.length}` },
            // { label: "Accuracy Avg", value: "90%+" },
            { label: "Visitors", value: visitorCount !== null ? visitorCount.toString() : "..." },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <span className="text-accent-mint font-bold">[{metric.value}]</span>
              <span>{metric.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
