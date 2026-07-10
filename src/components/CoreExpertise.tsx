"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Microscope, Network, Server, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

const expertiseAreas = [
  {
    title: "Healthcare AI",
    description: "Developing intelligent diagnostic systems for healthcare, specializing in pathology and medical imaging analysis.",
    icon: <Microscope className="w-6 h-6 text-accent-blue" />,
    tech: ["U-Net", "ResNet18", "ViT"]
  },
  {
    title: "Computer Vision",
    description: "Building robust visual recognition pipelines for defect detection, object tracking, and image segmentation.",
    icon: <Cpu className="w-6 h-6 text-accent-cyan" />,
    tech: ["OpenCV", "YOLOv8", "YOLOv10"]
  },
  {
    title: "Deep Learning",
    description: "Architecting and training complex neural networks and Vision Transformers for specialized applications.",
    icon: <Network className="w-6 h-6 text-accent-purple" />,
    tech: ["PyTorch", "TensorFlow", "Keras"]
  },
  {
    title: "Data Analytics",
    description: "End-to-end data processing, automated cleaning, and extracting insights using statistical visualization.",
    icon: <Database className="w-6 h-6 text-accent-cyan" />,
    tech: ["Pandas", "SQL", "Seaborn"]
  }
];

export function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Core Expertise"
          subtitle="Specialized domains where I build production-ready intelligent systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-glow" />
              <div className="relative h-full glass-card p-6 flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
