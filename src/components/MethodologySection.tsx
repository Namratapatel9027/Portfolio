"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Database, Layers, Cpu, Zap, Rocket } from "lucide-react";

const methodologySteps = [
  {
    id: "requirements",
    step: "STEP 1",
    title: "Requirements & Scoping",
    description: "Deeply analyze business objectives, define success metrics, and assess technical feasibility for AI integration.",
    icon: Search,
  },
  {
    id: "data-collection",
    step: "STEP 2",
    title: "Data Collection",
    description: "Source high-quality datasets, perform rigorous cleaning, and manage precise labeling for robust computer vision tasks.",
    icon: Database,
  },
  {
    id: "preprocessing",
    step: "STEP 3",
    title: "Data Preprocessing",
    description: "Apply advanced augmentation, normalization, and exploratory data analysis to prepare resilient training pipelines.",
    icon: Layers,
  },
  {
    id: "modeling",
    step: "STEP 4",
    title: "Model Architecture",
    description: "Design and train state-of-the-art architectures (CNNs, ViTs, YOLO) tailored to specific computational constraints.",
    icon: Cpu,
  },
  {
    id: "optimization",
    step: "STEP 5",
    title: "Optimization & Eval",
    description: "Rigorous performance testing and optimization using techniques like TensorRT and quantization for edge hardware.",
    icon: Zap,
  },
  {
    id: "deployment",
    step: "STEP 6",
    title: "Deployment & MLOps",
    description: "Seamlessly deploy intelligent systems into production with continuous monitoring, scaling, and feedback loops.",
    icon: Rocket,
  }
];

export function MethodologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For animating the central vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="methodology" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-24 md:mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter relative z-10 leading-tight md:leading-[1.1] py-2">
              End-to-End <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-mint">Project Lifecycle</span>
            </h2>
            <p className="mt-6 text-xl text-text-secondary font-light max-w-2xl mx-auto relative z-10">
              A comprehensive blueprint for transforming business requirements into scalable AI solutions.
            </p>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          
          {/* Background vertical line (dim) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          <div className="md:hidden absolute left-[31px] top-0 bottom-0 w-[2px] bg-white/5" />

          {/* Animated vertical line (bright) */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-mint to-transparent -translate-x-1/2 z-0"
            style={{ height: lineHeight }}
          />
          <motion.div 
            className="md:hidden absolute left-[31px] top-0 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-mint to-transparent z-0"
            style={{ height: lineHeight }}
          />

          {methodologySteps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={step.id} className="relative w-full mb-20 md:mb-32">
                
                {/* --- MOBILE LAYOUT --- */}
                <div className="md:hidden flex flex-col w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                    className="flex items-center w-full h-16 relative z-10"
                  >
                    <motion.div 
                      initial={{ boxShadow: "0 0 0px rgba(0,242,254,0)", backgroundColor: "#0D1E26", color: "#00F2FE", scale: 0.8 }}
                      whileInView={{ 
                        boxShadow: ["0 0 0px rgba(0,242,254,0)", "0 0 40px rgba(0,242,254,1)", "0 0 20px rgba(0,242,254,0.3)"],
                        backgroundColor: ["#0D1E26", "rgba(0,242,254,0.2)", "#0D1E26"],
                        color: ["#00F2FE", "#FFFFFF", "#00F2FE"],
                        scale: [0.8, 1.1, 1]
                      }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: false, margin: "-50px" }}
                      className="w-16 h-16 rounded-full border-2 border-accent-cyan flex items-center justify-center shrink-0 relative z-20"
                    >
                      <step.icon size={24} />
                    </motion.div>
                    <div className="flex-1 border-b-2 border-dashed border-accent-cyan/30 ml-4 mr-4" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="pl-20 pt-6"
                  >
                    <p className="text-[11px] font-mono font-bold text-text-secondary tracking-widest uppercase mb-2">{step.step}</p>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:flex w-full relative z-10">
                  {isEven ? (
                    /* LEFT STEP */
                    <div className="w-1/2 pr-0 relative flex flex-col">
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex items-center w-full h-16 relative"
                      >
                        <motion.div 
                          initial={{ boxShadow: "0 0 0px rgba(0,242,254,0)", backgroundColor: "#0D1E26", color: "#00F2FE", scale: 0.8 }}
                          whileInView={{ 
                            boxShadow: ["0 0 0px rgba(0,242,254,0)", "0 0 50px rgba(0,242,254,1)", "0 0 20px rgba(0,242,254,0.3)"],
                            backgroundColor: ["#0D1E26", "rgba(0,242,254,0.2)", "#0D1E26"],
                            color: ["#00F2FE", "#FFFFFF", "#00F2FE"],
                            scale: [0.8, 1.15, 1]
                          }}
                          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                          viewport={{ once: false, margin: "-50px" }}
                          className="w-16 h-16 rounded-full border-2 border-accent-cyan flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
                        >
                          <step.icon size={24} />
                        </motion.div>
                        <div className="flex-1 border-b-2 border-dashed border-accent-cyan/30 mx-4" />
                        <div className="w-4 h-4 rounded-full bg-accent-cyan absolute right-[-8px] shadow-[0_0_15px_rgba(0,242,254,0.8)] border-4 border-[#080E11]" />
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        className="flex justify-end mt-8 pr-16"
                      >
                        <div className="max-w-[380px] text-right">
                          <p className="text-[12px] font-mono font-bold text-accent-cyan tracking-widest uppercase mb-2">{step.step}</p>
                          <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                          <p className="text-text-secondary text-base leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* RIGHT STEP */
                    <div className="w-full flex">
                      <div className="w-1/2" />
                      <div className="w-1/2 pl-0 relative flex flex-col">
                        <motion.div 
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-50px" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="flex items-center w-full h-16 relative"
                        >
                          <div className="w-4 h-4 rounded-full bg-accent-cyan absolute left-[-8px] shadow-[0_0_15px_rgba(0,242,254,0.8)] border-4 border-[#080E11]" />
                          <div className="flex-1 border-b-2 border-dashed border-accent-cyan/30 mx-4" />
                          <motion.div 
                            initial={{ boxShadow: "0 0 0px rgba(0,242,254,0)", backgroundColor: "#0D1E26", color: "#00F2FE", scale: 0.8 }}
                            whileInView={{ 
                              boxShadow: ["0 0 0px rgba(0,242,254,0)", "0 0 50px rgba(0,242,254,1)", "0 0 20px rgba(0,242,254,0.3)"],
                              backgroundColor: ["#0D1E26", "rgba(0,242,254,0.2)", "#0D1E26"],
                              color: ["#00F2FE", "#FFFFFF", "#00F2FE"],
                              scale: [0.8, 1.15, 1]
                            }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: false, margin: "-50px" }}
                            className="w-16 h-16 rounded-full border-2 border-accent-cyan flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
                          >
                            <step.icon size={24} />
                          </motion.div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                          className="flex justify-start mt-8 pl-16"
                        >
                          <div className="max-w-[380px] text-left">
                            <p className="text-[12px] font-mono font-bold text-accent-cyan tracking-widest uppercase mb-2">{step.step}</p>
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-text-secondary text-base leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
