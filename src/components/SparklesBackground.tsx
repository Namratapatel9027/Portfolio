"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const createSparkles = (count: number) => {
  // Determine screen size to adjust density
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const responsiveCount = isMobile ? Math.floor(count / 2) : count;

  return Array.from({ length: responsiveCount }).map((_, i) => {
    const depth = Math.random(); // 0 (far) to 1 (near)
    const size = depth * 3 + 1; // 1px (distant) to 4px (close)
    return {
      id: i,
      size,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 1.5, // Faster Twinkle duration (1.5s to 3.5s)
      delay: Math.random() * 2,
      moveX: (Math.random() * 20 - 10) * depth, // Very slow drift
      moveY: (Math.random() * 20 - 10) * depth,
      blur: (1 - depth) * 1, // Subtle blur for distant stars
    };
  });
};

export function SparklesBackground({ count = 150 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    setSparkles(createSparkles(count));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-white rounded-full"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(255, 255, 255, 0.8)`, // Realistic star glow
            filter: `blur(${sparkle.blur}px)`, // Depth blur
          }}
          animate={{
            opacity: [0, 0.5, 1, 0.5, 0],
            scale: [0.8, 1, 1.2, 1, 0.8],
            x: [0, sparkle.moveX],
            y: [0, sparkle.moveY],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
