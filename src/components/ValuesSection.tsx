"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Heart, Target } from "lucide-react";

const values = [
  {
    title: "Clean Code",
    description: "I believe in writing code that is not only functional but also readable, maintainable, and elegant.",
    icon: Code2,
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices.",
    icon: Brain,
  },
  {
    title: "User-Centered Design",
    description: "Every project starts with understanding user needs and creating solutions that truly make a difference.",
    icon: Heart,
  },
  {
    title: "Problem Solving",
    description: "I thrive on challenging problems and finding innovative solutions through technology.",
    icon: Target,
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-20 bg-transparent flex justify-center px-4">
      <div className="w-full max-w-5xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tighter"
          >
            What I <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">Value</span>
          </motion.h2>
        </div>

        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-10 border-b border-white/10 overflow-hidden cursor-default"
            >
              {/* Sweeping bottom line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-cyan via-accent-mint to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-20" />
              
              {/* Background Highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary/70 group-hover:text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] shrink-0 z-10 relative">
                <value.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              {/* Text */}
              <div className="flex-1 z-10 relative">
                <h3 className="text-2xl md:text-4xl font-black text-white/80 group-hover:text-white transition-all duration-500 mb-3 transform group-hover:translate-x-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary/70 group-hover:text-text-secondary text-sm md:text-lg leading-relaxed max-w-2xl transform group-hover:translate-x-4 transition-all duration-500 delay-75">
                  {value.description}
                </p>
              </div>
              
              {/* Decorative Number */}
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[80px] md:text-[120px] font-black text-white/[0.02] group-hover:text-accent-cyan/[0.05] group-hover:-translate-x-4 transition-all duration-700 pointer-events-none z-0">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
