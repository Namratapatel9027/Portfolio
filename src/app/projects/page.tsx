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
  { key: "all",     label: "All Projects",     value: projectsData.length, icon: LayoutGrid,
    ids: projectsData.map((p) => p.id) },
  { key: "cv",      label: "Computer Vision",  value: 3, icon: Eye,
    ids: ["employee-monitoring", "pest-detection", "bearing-quality-inspection"] },
  { key: "medical", label: "Medical AI",        value: 1, icon: Activity,
    ids: ["anemia-detection"] },
  { key: "data",    label: "Data & Analytics",  value: 3, icon: BarChart3,
    ids: ["atliq-grand-hotel", "atliq-hardware-360", "sales-finance-report"] },
  { key: "ai",      label: "AI / ML",           value: 4, icon: Brain,
    ids: ["employee-monitoring", "pest-detection", "anemia-detection", "bearing-quality-inspection"] },
];

// ── Single project card with slide-reveal info panel ─────────────────────────
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

  // Alternate: even global index → panel slides LEFT→RIGHT
  //            odd  global index → panel slides RIGHT→LEFT
  const fromLeft = globalIndex % 2 === 0;

  const panelVariants = {
    hidden: { x: fromLeft ? "-100%" : "100%", opacity: 0.6 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 260, damping: 28 },
    },
    exit: {
      x: fromLeft ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.08, duration: 0.5, type: "spring", bounce: 0.2 }}
      layout
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden border border-white/5 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Background image ── */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="100vw"
        className={`object-cover transition-all duration-700 ${
          hovered ? "scale-110 brightness-50" : "scale-100 brightness-75"
        }`}
      />

      {/* ── Permanent dark gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080E11]/90 via-[#080E11]/30 to-transparent pointer-events-none z-10" />

      {/* ── Always-visible content (number + title) ── */}
      <div
        className={`absolute inset-0 z-20 flex flex-col justify-end p-8 transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
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
            <span
              key={t}
              className="text-xs font-bold px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hover hint arrow */}
        <div
          className={`absolute bottom-8 flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
            fromLeft ? "left-8" : "right-8"
          }`}
        >
          {fromLeft ? (
            <>
              <span>Hover for details</span>
              <ArrowRight className="w-3.5 h-3.5 animate-bounce-x" />
            </>
          ) : (
            <>
              <ArrowRight className="w-3.5 h-3.5 rotate-180 animate-bounce-x" />
              <span>Hover for details</span>
            </>
          )}
        </div>
      </div>

      {/* ── Slide-in info panel ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute inset-y-0 z-30 w-full md:w-[62%] flex flex-col justify-center p-8 md:p-10
              bg-[#0B1317]/95 backdrop-blur-xl border-r-0
              ${fromLeft
                ? "left-0 border-r border-accent-cyan/20"
                : "right-0 border-l border-accent-cyan/20"
              }`}
          >
            {/* Glow edge */}
            <div
              className={`absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/60 to-transparent
                ${fromLeft ? "right-0" : "left-0"}`}
            />

            {/* Number + category */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold shrink-0">
                {String(globalIndex + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.id.replace(/-/g, " ")}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight tracking-tight">
              {project.title}
            </h2>

            {/* Problem */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6 border-l-2 border-accent-cyan/40 pl-4">
              {project.problem}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/projects/${project.id}`}
              className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm text-white
                bg-gradient-to-r from-accent-cyan/20 to-accent-mint/20
                border border-accent-cyan/50 hover:border-accent-cyan
                transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,242,254,0.25)] w-fit"
            >
              Explore Project
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
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

      {/* ── Header ── */}
      <section className="relative pt-28 pb-12 flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-accent-cyan/8 blur-[130px] rounded-full pointer-events-none" />

        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan font-mono text-xs uppercase tracking-widest mb-6">
          <LayoutGrid className="w-3.5 h-3.5" />
          Project Archive
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          All{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">
            Projects
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-5 text-lg text-text-secondary font-light max-w-xl relative z-10"
        >
          {projectsData.length} intelligent systems — hover a card to reveal details.
        </motion.p>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="relative px-4 max-w-6xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`group relative flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "border-accent-cyan bg-accent-cyan/10 shadow-[0_0_24px_rgba(0,242,254,0.15)]"
                    : "border-white/8 bg-white/[0.02] hover:border-accent-cyan/40 hover:bg-accent-cyan/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabDot"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent-cyan"
                    transition={{ type: "spring", bounce: 0.4 }}
                  />
                )}
                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-accent-cyan" : "text-text-secondary group-hover:text-accent-cyan"}`} />
                <span className={`text-2xl font-black tracking-tight ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint" : "text-white"}`}>
                  {cat.value}
                </span>
                <span className={`text-[10px] font-mono uppercase tracking-widest text-center leading-tight ${isActive ? "text-accent-cyan" : "text-text-secondary"}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── Filter label ── */}
      <section className="max-w-6xl mx-auto px-4 mb-8 flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25 }}
            className="text-text-secondary text-sm font-mono"
          >
            Showing{" "}
            <span className="text-accent-cyan font-bold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeCategory !== "all" && (
              <> in <span className="text-white">{activeCat.label}</span></>
            )}
          </motion.p>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-xs font-mono text-text-secondary hover:text-accent-cyan transition-colors uppercase tracking-widest"
            >
              Clear filter ×
            </button>
          )}
        </AnimatePresence>
      </section>

      {/* ── Project Cards — 1 per row with slide reveal ── */}
      <section className="relative px-4 pb-32 max-w-6xl mx-auto">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <LayoutGrid className="w-12 h-12 text-text-secondary mb-4" />
            <p className="text-text-secondary text-lg">No projects in this category yet.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
