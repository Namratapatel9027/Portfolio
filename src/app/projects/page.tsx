"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, ArrowLeft, LayoutGrid,
  Eye, Brain, BarChart3, Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/components/ProjectsSection";

// ── Category definitions ─────────────────────────────────────────────────────
const categories = [
  { key: "all",     label: "All Projects",    value: projectsData.length, icon: LayoutGrid,
    ids: projectsData.map((p) => p.id) },
  { key: "cv",      label: "Computer Vision", value: 3, icon: Eye,
    ids: ["employee-monitoring", "pest-detection", "bearing-quality-inspection"] },
  { key: "medical", label: "Medical AI",       value: 1, icon: Activity,
    ids: ["anemia-detection"] },
  { key: "data",    label: "Data & Analytics", value: 3, icon: BarChart3,
    ids: ["atliq-grand-hotel", "atliq-hardware-360", "sales-finance-report"] },
  { key: "ai",      label: "AI / ML",          value: 4, icon: Brain,
    ids: ["employee-monitoring", "pest-detection", "anemia-detection", "bearing-quality-inspection"] },
];

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  globalIndex,
}: {
  project: (typeof projectsData)[0];
  index: number;
  globalIndex: number;
}) {
  const [hovered, setHovered] = useState(false);
  // Even cards: image slides LEFT, details emerge from right
  // Odd cards:  image slides RIGHT, details emerge from left
  const slideDir = globalIndex % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ delay: index * 0.09, duration: 0.55, type: "spring", bounce: 0.18 }}
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Card: visible border, very rounded
      className="relative w-full h-[440px] md:h-[500px] rounded-[2rem] overflow-hidden
        border border-accent-cyan/25 hover:border-accent-cyan/60
        shadow-[0_4px_32px_rgba(0,0,0,0.4)]
        hover:shadow-[0_8px_48px_rgba(0,242,254,0.12)]
        transition-shadow duration-500 cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      {/* ─── LAYER 1: Details panel — always "behind" the image ─── */}
      <div className="absolute inset-0 bg-[#0A1920] rounded-[2rem] z-0 flex items-center">

        {/* Ambient glow inside details */}
        <div className={`absolute w-72 h-72 rounded-full blur-[100px] opacity-30 pointer-events-none
          ${slideDir === -1 ? "right-0 bg-accent-mint/30" : "left-0 bg-accent-cyan/30"}`} />

        <AnimatePresence>
          {hovered && (
            <motion.div
              key="details"
              // "From the back" — starts small + blurry (feels like depth/far away)
              initial={{ scale: 0.88, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1,    opacity: 1, filter: "blur(0px)" }}
              exit={{    scale: 0.92, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col gap-5"
            >
              {/* Badge */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent-cyan/15 border border-accent-cyan/50 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0 shadow-[0_0_12px_rgba(0,242,254,0.25)]">
                  {String(globalIndex + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.id.replace(/-/g, " ")}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                {project.title}
              </h2>

              {/* Problem */}
              <p className="text-text-secondary text-sm leading-relaxed border-l-2 border-accent-cyan/50 pl-4 max-w-lg">
                {project.problem}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t}
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${project.id}`}
                className="group/btn mt-1 inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-white w-fit
                  bg-gradient-to-r from-accent-cyan/25 to-accent-mint/25
                  border border-accent-cyan/60 hover:border-accent-cyan
                  transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,242,254,0.3)]"
              >
                Explore Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── LAYER 2: Image — slides sideways on hover, revealing details behind ─── */}
      <motion.div
        animate={{
          x: hovered ? `${slideDir * 62}%` : "0%",
          scale: hovered ? 0.96 : 1,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-10 rounded-[2rem] overflow-hidden
          border border-white/8"
      >
        {/* Image */}
        <div className="absolute inset-0 bg-[#080E11]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
          />
        </div>

        {/* Dark gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E11]/90 via-[#080E11]/20 to-transparent pointer-events-none" />

        {/* Resting text — fades out as image slides */}
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
        >
          {/* Hover hint */}
          <p className={`absolute top-6 flex items-center gap-1.5 text-white/35 text-[10px] font-mono uppercase tracking-widest
            ${slideDir === -1 ? "right-8" : "left-8"}`}>
            {slideDir === -1
              ? <><ArrowRight className="w-3 h-3 rotate-180" /><span>Hover to reveal</span></>
              : <><span>Hover to reveal</span><ArrowRight className="w-3 h-3" /></>}
          </p>

          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0">
              {String(globalIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-accent-cyan font-mono text-xs uppercase tracking-widest">
              {project.id.replace(/-/g, " ")}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t}
                className="text-xs px-3 py-1 rounded-full bg-black/50 border border-white/15 text-white/65 font-bold">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const activeCat = categories.find((c) => c.key === activeCategory)!;
  const filtered = projectsData.filter((p) => activeCat.ids.includes(p.id));

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">

      {/* Header */}
      <section className="relative pt-28 pb-12 flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-accent-cyan/8 blur-[130px] rounded-full pointer-events-none" />

        <Link href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/8 text-accent-cyan font-mono text-xs uppercase tracking-widest mb-6">
          <LayoutGrid className="w-3.5 h-3.5" />
          Project Archive
        </div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10">
          All{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">Projects</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-5 text-lg text-text-secondary font-light max-w-xl relative z-10">
          {projectsData.length} intelligent systems — hover a card to reveal details.
        </motion.p>
      </section>

      {/* ── Filter Tabs — more visible colors ── */}
      <section className="relative px-4 max-w-4xl mx-auto mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
                className={`group relative flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${isActive
                    // Active: solid cyan tint, bright border, strong glow
                    ? "border-accent-cyan bg-accent-cyan/20 shadow-[0_0_28px_rgba(0,242,254,0.2)] text-accent-cyan"
                    // Inactive: visible dark bg with subtle border — NOT fully transparent
                    : "border-white/20 bg-[#0E1F27] hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
                  }`}>
                {isActive && (
                  <motion.div layoutId="activeTabDot"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,242,254,0.8)]"
                    transition={{ type: "spring", bounce: 0.4 }} />
                )}
                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-accent-cyan" : "text-white/60 group-hover:text-accent-cyan"}`} />
                <span className={`text-2xl font-black tracking-tight ${isActive
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint"
                  : "text-white"}`}>
                  {cat.value}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest text-center leading-tight ${isActive ? "text-accent-cyan" : "text-white/50 group-hover:text-white/80"}`}>
                  {cat.label}
                </span>
              </button>
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

      {/* Cards */}
      <section className="relative px-4 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const globalIndex = projectsData.findIndex((p) => p.id === project.id);
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  globalIndex={globalIndex}
                />
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
