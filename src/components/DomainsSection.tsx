"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Factory,
  Store,
  Sprout,
  Building,
  ShieldCheck
} from "lucide-react";
import { SparklesBackground } from "./SparklesBackground";
import { ShootingStars } from "./ShootingStars";

const domains = [
  {
    title: "Medical Pathology & WSI",
    description: "AI-driven diagnostics, tumor localization, and medical OCR systems.",
    icon: HeartPulse,
    projects: 3,
    iconColor: "text-rose-400",
    bgLight: "bg-rose-500/10",
    border: "border-rose-500/20",
    hoverBorder: "hover:border-rose-400/50"
  },
  {
    title: "Manufacturing",
    description: "Automated quality inspection and defect detection in production lines.",
    icon: Factory,
    projects: 2,
    iconColor: "text-blue-400",
    bgLight: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/50"
  },
  {
    title: "Retail & Sales",
    description: "Business intelligence and 360-degree sales analytics dashboards.",
    icon: Store,
    projects: 2,
    iconColor: "text-amber-400",
    bgLight: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-400/50"
  },
  {
    title: "Agriculture",
    description: "Early pest detection systems for sustainable crop management.",
    icon: Sprout,
    projects: 1,
    iconColor: "text-emerald-400",
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/50"
  },

  {
    title: "Pharmaceuticals",
    description: "Regulatory-compliant inspection systems ensuring accurate counting, proper labeling, and pack integrity",
    icon: Sprout,
    projects: 1,
    iconColor: "text-emerald-400",
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/50"
  },

  {
    title: "Corporate & Security",
    description: "Automated employee monitoring and facial recognition systems.",
    icon: ShieldCheck,
    projects: 1,
    iconColor: "text-indigo-400",
    bgLight: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hoverBorder: "hover:border-indigo-400/50"
  }
];

export function DomainsSection() {
  return (
    <section id="domains" className="relative py-24 bg-gradient-to-b from-[#000000] via-[#020408] to-[#050810] z-20 overflow-hidden shadow-2xl">
      <SparklesBackground count={100} />
      <ShootingStars count={3} direction="right-to-left" />
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-mint/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-text-secondary uppercase">Industry Impact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Domains of <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-text-secondary font-light max-w-2xl mx-auto"
          >
            Delivering AI-driven solutions and analytics across diverse industry verticals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-[#11222C]/80 backdrop-blur-sm border ${domain.border} ${domain.hoverBorder} transition-all duration-500 overflow-hidden shadow-lg`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${domain.bgLight} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                    <domain.icon className={`w-7 h-7 ${domain.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {domain.projects} Project{domain.projects !== 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {domain.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {domain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
