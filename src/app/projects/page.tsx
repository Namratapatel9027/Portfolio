"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ArrowLeft, LayoutGrid, Eye, Brain, BarChart3, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/components/ProjectsSection";

// ── Category definitions ────────────────────────────────────────────────────
const categories = [
  {
    key: "all",
    label: "All Projects",
    value: projectsData.length,
    icon: LayoutGrid,
    ids: projectsData.map((p) => p.id),
  },
  {
    key: "cv",
    label: "Computer Vision",
    value: 3,
    icon: Eye,
    ids: ["employee-monitoring", "pest-detection", "bearing-quality-inspection"],
  },
  {
    key: "medical",
    label: "Medical AI",
    value: 1,
    icon: Activity,
    ids: ["anemia-detection"],
  },
  {
    key: "data",
    label: "Data & Analytics",
    value: 3,
    icon: BarChart3,
    ids: ["atliq-grand-hotel", "atliq-hardware-360", "sales-finance-report"],
  },
  {
    key: "ai",
    label: "AI / ML",
    value: 4,
    icon: Brain,
    ids: ["employee-monitoring", "pest-detection", "anemia-detection", "bearing-quality-inspection"],
  },
];

// ── Animation variants ───────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.25, duration: 0.6 },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const activeCat = categories.find((c) => c.key === activeCategory)!;
  const filtered = projectsData.filter((p) => activeCat.ids.includes(p.id));

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">

      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-12 flex flex-col items-center text-center px-4">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-accent-cyan/8 blur-[130px] rounded-full pointer-events-none" />

        {/* Back link */}
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 font-mono text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Portfolio
        </Link>

        {/* Badge */}
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
          {projectsData.length} intelligent systems — click a category to filter.
        </motion.p>
      </section>

      {/* ── Clickable Filter Tabs ────────────────────────────────────────────── */}
      <section className="relative px-4 max-w-5xl mx-auto mb-14">
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
                  ${
                    isActive
                      ? "border-accent-cyan bg-accent-cyan/10 shadow-[0_0_24px_rgba(0,242,254,0.15)]"
                      : "border-white/8 bg-white/[0.02] hover:border-accent-cyan/40 hover:bg-accent-cyan/5"
                  }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabDot"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent-cyan"
                    transition={{ type: "spring", bounce: 0.4 }}
                  />
                )}

                <Icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? "text-accent-cyan" : "text-text-secondary group-hover:text-accent-cyan"
                  }`}
                />

                <span
                  className={`text-2xl font-black tracking-tight ${
                    isActive
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint"
                      : "text-white"
                  }`}
                >
                  {cat.value}
                </span>

                <span
                  className={`text-[10px] font-mono uppercase tracking-widest text-center leading-tight ${
                    isActive ? "text-accent-cyan" : "text-text-secondary"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── Active filter label ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 mb-8 flex items-center justify-between">
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

      {/* ── Projects Grid — 2 per row ─────────────────────────────────────────── */}
      <section className="relative px-4 pb-32 max-w-5xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                className="group relative bg-[#11222C] rounded-3xl overflow-hidden border border-white/5 hover:border-accent-cyan/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,242,254,0.07)] flex flex-col"
              >
                {/* Index badge */}
                <div className="absolute top-5 left-5 z-20 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md border border-accent-cyan/30 flex items-center justify-center">
                  <span className="text-accent-cyan font-mono text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Image — taller for larger cards */}
                <div className="relative w-full h-64 overflow-hidden border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11222C] via-[#11222C]/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">

                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-4 text-accent-cyan font-mono text-xs uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.id.replace(/-/g, " ")}</span>
                  </div>

                  <h2 className="text-2xl font-black text-white mb-4 leading-tight tracking-tight group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 border-l-2 border-accent-cyan/30 pl-4 flex-1">
                    {project.problem}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-accent-mint/40 hover:border-accent-mint text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(79,172,254,0.25)] text-sm"
                  >
                    Explore Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
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
