"use client";

import { motion } from "framer-motion";

export const experiences = [
  {
    company: "Pixonate Lab Pvt. Ltd. (On-site)",
    location: "Pune, India",
    role: "AI/ML Engineer",
    duration: "June 2025 - June 2026",
    achievements: [
      "Leading research-based projects utilizing Vision Transformers (ViT) for high-accuracy medical analysis and non-invasive diagnostics.",
      "Implementing YOLO (v8/v10) for real-time object detection and integrating vision systems into industrial automation workflows.",
      "Developing complex classification and segmentation models for medical imaging, focusing on diagnostic reliability and interpretability."
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">My <span className="text-gradient">Story</span></h2>
          <p className="mt-4 text-xl text-text-secondary">Professional Experience</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-white/10" />

              {/* Timeline Dot (Animated) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="hidden md:block absolute left-[8.5rem] top-4 w-3 h-3 rounded-full bg-accent-cyan -translate-x-[5px] shadow-[0_0_15px_rgba(0,242,254,0.8)] z-10"
              />

              <div className="md:grid md:grid-cols-[8rem_1fr] md:gap-12" style={{ perspective: "1000px" }}>

                <div className="mb-4 md:mb-0 pt-3 relative z-10">
                  <span className="text-sm font-bold text-accent-cyan uppercase tracking-wider block drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]">
                    {exp.duration}
                  </span>
                  <span className="text-xs text-text-secondary mt-1 block">
                    {exp.location}
                  </span>
                </div>

                {/* 3D Animated Card */}
                <motion.div
                  initial={{ opacity: 0, rotateX: 40, y: 80, scale: 0.9, z: -100 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1, z: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: -2,
                    rotateX: 2,
                    boxShadow: "0 25px 50px -12px rgba(0, 242, 254, 0.15)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-[#11222C]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 cursor-pointer relative group overflow-hidden"
                >
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors duration-300 relative z-10">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-text-secondary mb-6 relative z-10">{exp.company}</h4>

                  <ul className="space-y-4 relative z-10">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                        className="flex items-start text-text-secondary text-base leading-relaxed group/item"
                      >
                        <span className="mt-2 mr-4 w-1.5 h-1.5 rounded-full bg-accent-mint flex-shrink-0 group-hover/item:scale-150 group-hover/item:bg-accent-cyan transition-all duration-300 shadow-[0_0_5px_rgba(74,222,128,0.5)]" />
                        <span className="group-hover/item:text-white transition-colors duration-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
