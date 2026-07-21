"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const publications = [
  {
    title: "ML/DL Pest Detection in Precision Agriculture",
    publisher: "Indian Journal of Agriculture Engineering (IJAE)",
    date: "2025",
    description: "Engineered a multi-stage CNN pipeline using 2D convolution and maxpooling for accurate pest detection. The system enables early identification to reduce crop losses and support sustainable farming, validated using Accuracy, Precision, Recall, and F1-score.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5590275",
    tags: ["CNN", "Precision Agriculture", "Deep Learning"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const backgroundVariants = {
  hidden: { scaleX: 0, scaleY: 0.05, opacity: 0, borderRadius: "100%" },
  visible: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    borderRadius: "24px",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const // Custom snappy easing
    }
  }
};

const leftColVariants = {
  hidden: { x: -80, opacity: 0, filter: "blur(15px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring" as const, bounce: 0.5 }
  }
};

const rightColVariants = {
  hidden: { x: 80, opacity: 0, filter: "blur(15px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring" as const, bounce: 0.5 }
  }
};

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Selected <span className="text-gradient">Publications</span></h2>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group relative p-8 sm:p-12"
            >
              {/* Dynamic Transforming Background Layer */}
              <motion.div
                variants={backgroundVariants}
                className="absolute inset-0 bg-[#11222C]/80 backdrop-blur-sm border border-white/10 group-hover:border-accent-cyan/50 transition-colors duration-500 origin-center -z-10"
              />

              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-[80px] group-hover:bg-accent-cyan/10 transition-colors duration-500 pointer-events-none -z-10" />

              <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                {/* Left Column Slam-in */}
                <motion.div variants={leftColVariants} className="lg:col-span-3 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent-cyan">
                      {pub.date}
                    </span>
                    <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                      {pub.publisher}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-lg text-text-secondary leading-relaxed font-light">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface border border-white/5 rounded-full text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Right Column Slam-in */}
                <motion.div variants={rightColVariants} className="lg:col-span-2 flex flex-col justify-center items-center lg:items-end w-full border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
                  <div className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-[0_0_30px_rgba(0,242,254,0.2)] group-hover:shadow-[0_0_40px_rgba(0,242,254,0.4)] transition-shadow duration-500">
                    <Image
                      src="/images/pest_detection.png"
                      alt="Pest Detection AI Dashboard"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {pub.link && pub.link !== "#" && (
                    <Link
                      href={pub.link}
                      target="_blank"
                      className="btn-17 group/btn px-8 py-4 bg-white text-black hover:text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors duration-300"
                      style={{ '--btn-fill': '#000000', '--btn-speed': '0.4s', '--btn-skew': '0.3' } as React.CSSProperties}
                    >
                      <span className="text-container flex items-center justify-center">
                        <span className="text flex items-center">
                          Read Paper
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </span>
                    </Link>
                  )}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
