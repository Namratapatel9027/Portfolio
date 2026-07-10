"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ArrowLeft, LayoutGrid, Eye, Brain, BarChart3, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/components/ProjectsSection";

const categories = [
  { key: "all",     label: "All Projects",    value: projectsData.length, ids: projectsData.map((p) => p.id) },
  { key: "cv",      label: "Computer Vision", value: 3, ids: ["employee-monitoring", "pest-detection", "bearing-quality-inspection"] },
  { key: "medical", label: "Medical AI",       value: 1, ids: ["anemia-detection"] },
  { key: "data",    label: "Data & Analytics", value: 3, ids: ["atliq-grand-hotel", "atliq-hardware-360", "sales-finance-report"] },
  { key: "ai",      label: "AI / ML",          value: 4, ids: ["employee-monitoring", "pest-detection", "anemia-detection", "bearing-quality-inspection"] },
];

// Random sparkle positions around the card
const SPARKLES = [
  { top: "10%",  left: "-2%",   delay: 0 },
  { top: "80%",  left: "0%",    delay: 0.1 },
  { top: "20%",  right: "-2%",  delay: 0.05 },
  { top: "70%",  right: "0%",   delay: 0.15 },
  { top: "-3%",  left: "30%",   delay: 0.08 },
  { top: "103%", left: "60%",   delay: 0.12 },
];

function ProjectCard({ project, index, globalIndex }: { project: (typeof projectsData)[0]; index: number; globalIndex: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.08, duration: 0.5, type: "spring", bounce: 0.2 }}
      layout
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glitter glow behind card */}
      <motion.div
        animate={hovered ? { opacity: 1, scale: 1.04 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-[2rem] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(0,242,254,0.18) 0%, rgba(79,172,254,0.12) 50%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />

      {/* Sparkle dots */}
      <AnimatePresence>
        {hovered && SPARKLES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ delay: s.delay, duration: 0.8, repeat: Infinity, repeatDelay: 0.6 }}
            className="absolute w-2 h-2 rounded-full bg-accent-cyan pointer-events-none z-0"
            style={{ ...s, boxShadow: "0 0 8px 3px rgba(0,242,254,0.7)" }}
          />
        ))}
      </AnimatePresence>

      {/* Card */}
      <motion.div
        animate={hovered ? { y: -8, scale: 1.01 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col md:flex-row h-auto md:h-[340px] rounded-[2rem] overflow-hidden
          bg-[#0D1E26] border border-accent-cyan/25
          hover:border-accent-cyan/55
          shadow-[0_4px_24px_rgba(0,0,0,0.45)]
          hover:shadow-[0_16px_48px_rgba(0,242,254,0.14)]
          transition-colors duration-400"
      >
        {/* Image — left side */}
        <div className="relative w-full md:w-[42%] h-48 md:h-full overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/8">
          <div className="absolute inset-0 bg-[#080E11]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className={`object-contain transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1E26]/60 pointer-events-none" />
        </div>

        {/* Details — right side, ALWAYS visible */}
        <div className="flex flex-col justify-center flex-1 px-7 py-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-accent-cyan/12 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0">
              {String(globalIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.id.replace(/-/g, " ")}</span>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight tracking-tight">
            {project.title}
          </h2>

          <p className="text-text-secondary text-sm leading-relaxed mb-4 border-l-2 border-accent-cyan/40 pl-3">
            {project.problem}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan">
                {t}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white w-fit
              bg-gradient-to-r from-accent-cyan/18 to-accent-mint/18
              border border-accent-cyan/45 hover:border-accent-cyan
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.25)]"
          >
            Explore Project
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const activeCat = categories.find((c) => c.key === activeCategory)!;
  const filtered = projectsData.filter((p) => activeCat.ids.includes(p.id));

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">

      {/* Header */}
      <section className="relative pt-28 pb-16 flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

        <Link href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>

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

      {/* Filter Tabs — no icons, glitter lift on hover */}
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

      {/* Cards — 1 per row */}
      <section className="relative px-4 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col gap-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const globalIndex = projectsData.findIndex((p) => p.id === project.id);
              return (
                <ProjectCard key={project.id} project={project} index={index} globalIndex={globalIndex} />
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center">
            <LayoutGrid className="w-12 h-12 text-text-secondary mb-4" />
            <p className="text-text-secondary text-lg">No projects in this category.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
