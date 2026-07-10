"use client";

import { motion } from "framer-motion";

export const MeshBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-cyan/10 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-mint/10 via-background to-background pointer-events-none" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-cyan/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-accent-mint/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Global Scrolling Watermark */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[8vw] font-black text-white/10 select-none px-8">
            CODE • PASSION • AIML • LEARN • GROW • VISION •
          </span>
          <span className="text-[8vw] font-black text-white/10 select-none px-8">
            CODE • PASSION • AIML • LEARN • GROW • VISION •
          </span>
        </motion.div>
      </div>
    </div>
  );
};
