"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ArrowLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/components/ProjectsSection";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">
      {/* ── Header ── */}
      <section className="relative pt-28 pb-16 flex flex-col items-center text-center px-4">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

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
          All Projects
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          Full{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">
            Project
          </span>{" "}
          Archive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-xl text-text-secondary font-light max-w-2xl relative z-10"
        >
          {projectsData.length} intelligent systems spanning Computer Vision, Medical AI,
          Data Analytics, and Business Intelligence.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-6 relative z-10"
        >
          {[
            { label: "Total Projects", value: projectsData.length },
            { label: "Computer Vision", value: 3 },
            { label: "Data & Analytics", value: 3 },
            { label: "Medical AI", value: 1 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm"
            >
              <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">
                {stat.value}
              </span>
              <span className="text-xs text-text-secondary font-mono uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="relative px-4 pb-32 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-[#11222C] rounded-3xl overflow-hidden border border-white/5 hover:border-accent-cyan/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,254,0.08)] flex flex-col"
            >
              {/* Index badge */}
              <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                <span className="text-accent-cyan font-mono text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11222C] via-[#11222C]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Category label */}
                <div className="flex items-center gap-2 mb-3 text-accent-cyan font-mono text-xs uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{project.id.replace(/-/g, " ")}</span>
                </div>

                <h2 className="text-xl font-black text-white mb-3 leading-tight tracking-tight group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="text-text-secondary text-sm leading-relaxed mb-5 border-l-2 border-accent-cyan/30 pl-4 flex-1">
                  {project.problem}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold px-3 py-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/projects/${project.id}`}
                  className="group/btn relative inline-flex items-center justify-center px-6 py-3 bg-transparent border border-accent-mint/40 hover:border-accent-mint text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,172,254,0.3)] text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
