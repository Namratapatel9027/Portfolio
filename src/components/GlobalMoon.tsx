"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function GlobalMoon() {
  const { scrollYProgress } = useScroll();
  // Maps 0-1 scroll progress to a vertical translation.
  // 80vh starts it near the bottom. -20vh moves it out of the top by the end of the page.
  const y = useTransform(scrollYProgress, [0, 1], ["80vh", "-30vh"]);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (typeof window !== "undefined") {
      // Find elements exactly in the vertical center, but slightly offset to the right where the moon is
      const elements = document.elementsFromPoint(window.innerWidth * 0.8, window.innerHeight / 2);
      
      const isNightSky = elements.some(el => {
        const id = el.id || el.closest('section')?.id;
        return ['about', 'projects', 'fun-facts', 'domains', 'explore'].includes(id as string);
      });
      
      setIsVisible(isNightSky);
    }
  });

  if (!isMounted) return null;

  return (
    <motion.div 
      className="fixed top-0 right-6 md:right-12 pointer-events-none z-[30]"
      style={{ y }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.8 } }}
    >
      <Moon 
        className="w-16 h-16 md:w-24 md:h-24 text-white/90" 
        fill="currentColor" 
        strokeWidth={0}
        style={{
          filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) blur(0.5px)",
          transform: "rotate(-15deg)"
        }} 
      />
    </motion.div>
  );
}
