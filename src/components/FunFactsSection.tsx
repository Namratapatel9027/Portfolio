"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Award, Cpu } from "lucide-react";
import { SparklesBackground } from "./SparklesBackground";
import { ShootingStars } from "./ShootingStars";

const funFacts = [
  {
    icon: Coffee,
    stat: "∞",
    title: "Coffee Cups",
    description: "Daily fuel for coding",
  },
  {
    icon: Code,
    stat: "100K+",
    title: "Lines of Code",
    description: "Written and counting",
  },
  {
    icon: Award,
    stat: "5K+",
    title: "Followers",
    description: "Linkedin Growth",
  },
  {
    icon: Cpu,
    stat: "15+",
    title: "Technologies",
    description: "Mastered and learning",
  },
];

export function FunFactsSection() {
  return (
    <section id="fun-facts" className="relative py-20 bg-gradient-to-b from-[#000000] via-[#020408] to-[#050810] z-20 flex justify-center px-4 shadow-2xl overflow-hidden">
      <SparklesBackground count={100} />
      <ShootingStars count={3} />
      <div className="w-full max-w-6xl relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tighter"
          >
            FUN <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">FACTS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(0, 242, 254, 0.4)" }}
              className="bg-[#11222C]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-6">
                <fact.icon size={24} />
              </div>
              <h3 className="text-4xl font-black text-white mb-2">{fact.stat}</h3>
              <p className="text-sm font-bold text-accent-cyan tracking-widest uppercase mb-1">
                {fact.title}
              </p>
              <p className="text-xs text-text-secondary">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
