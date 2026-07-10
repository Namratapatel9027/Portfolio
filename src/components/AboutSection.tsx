"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the sticky 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate top-to-bottom wipe percentage (0 to 100)
  // We start filling slightly after scrolling starts, and finish slightly before it ends
  const clipPercentage = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);
  
  // Create a dynamic CSS polygon that expands downward
  const clipPath = useMotionTemplate`polygon(0 0, 100% 0, 100% ${clipPercentage}%, 0 ${clipPercentage}%)`;

  // Scale and blur the whole section for a cinematic entrance when it first pins
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 0.2], [5, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;

  return (
    <section id="about" ref={containerRef} className="relative h-[200vh] bg-transparent">
      {/* Sticky wrapper locks the content in the center of the screen while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ scale, filter }} 
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative origin-center"
        >
          
          {/* Subtle decorative orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/20 blur-[120px] rounded-full pointer-events-none z-0" />

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 md:mb-16 relative z-10 drop-shadow-2xl max-w-4xl mx-auto leading-tight">
            Every great engineer <br className="hidden md:block" /> begins with an <span className="text-gradient">even better story.</span>
          </h2>

          <div className="relative text-base sm:text-lg md:text-xl font-bold leading-[1.8] md:leading-[2] tracking-wide text-center max-w-4xl mx-auto">
            
            {/* BACKGROUND TEXT (Faded/Muted) */}
            <div className="text-white/[0.05] absolute inset-0 pointer-events-none z-0">
              Every image contains information. The challenge is uncovering it.<br/><br/>
              <span className="text-white/[0.05]">Machine Learning</span> and <span className="text-white/[0.05]">Computer Vision</span> provide an opportunity to transform visual data into meaningful insights through image analysis, object detection, classification systems, and medical imaging applications.<br/><br/>
              Complex problems, hidden patterns, and real-world impact are what make this field exciting. <span className="text-white/[0.05]">Healthcare</span>, <span className="text-white/[0.05]">manufacturing</span>, and image-based analysis offer opportunities to build solutions that improve accuracy, efficiency, and decision-making.<br/><br/>
              A constant journey of exploring new techniques, refining approaches, and discovering better ways to solve <span className="text-white/[0.05]">visual intelligence challenges</span>.
            </div>
            
            {/* FOREGROUND TEXT (Highlighted, Revealed by Scroll) */}
            <motion.div 
              style={{ clipPath }}
              className="text-text-secondary relative z-10"
            >
              Every image contains information. The challenge is uncovering it.<br/><br/>
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Machine Learning</span> and <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Computer Vision</span> provide an opportunity to transform visual data into meaningful insights through image analysis, object detection, classification systems, and medical imaging applications.<br/><br/>
              Complex problems, hidden patterns, and real-world impact are what make this field exciting. <span className="text-accent-purple drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Healthcare</span>, <span className="text-accent-mint drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">manufacturing</span>, and image-based analysis offer opportunities to build solutions that improve accuracy, efficiency, and decision-making.<br/><br/>
              A constant journey of exploring new techniques, refining approaches, and discovering better ways to solve <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">visual intelligence challenges</span>.
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
