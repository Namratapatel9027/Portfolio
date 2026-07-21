"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Direction = "left-to-right" | "right-to-left";

const createShootingStar = (direction: Direction, isMobile: boolean) => {
  const isLeftToRight = direction === "left-to-right";
  // On mobile, travel shorter distances but keep the angle
  const travelDist = isMobile ? 600 : 1200;
  
  return {
    id: Math.random(),
    top: `${Math.random() * 30}%`, // Start in top 30% of screen
    left: isLeftToRight ? `${Math.random() * 40}%` : `${Math.random() * 40 + 60}%`, // Start on respective side
    delay: Math.random() * 4 + 0.5, // 0.5s to 4.5s delay
    duration: Math.random() * 3 + 2.5, // Slower duration: 2.5s to 5.5s
    size: isMobile ? Math.random() * 1.5 + 1.5 : Math.random() * 2 + 2, // Slightly smaller on mobile
    length: isMobile ? Math.random() * 80 + 60 : Math.random() * 150 + 100, // Shorter tail on mobile
    travelX: isLeftToRight ? travelDist : -travelDist,
    travelY: travelDist,
  };
};

export function ShootingStars({ count = 3, direction = "left-to-right" }: { count?: number, direction?: Direction }) {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const responsiveCount = isMobile ? Math.max(1, Math.floor(count / 2)) : count;

    // Generate initial stars
    setStars(Array.from({ length: responsiveCount }).map(() => createShootingStar(direction, isMobile)));
    
    // Periodically refresh stars to make them shoot indefinitely
    const interval = setInterval(() => {
      setStars(Array.from({ length: responsiveCount }).map(() => createShootingStar(direction, isMobile)));
    }, 8000); // Increased reset interval since animation is slower

    return () => clearInterval(interval);
  }, [count, direction]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute flex items-center justify-end"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.length}px`,
            height: `${star.size}px`,
            background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            transformOrigin: "right center",
          }}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
            rotate: direction === "left-to-right" ? 45 : 135, // Travel angle
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, star.travelX], // Travel direction
            y: [0, star.travelY], // Always travel down
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeIn",
          }}
        >
          {/* Glowing head of the meteor */}
          <div 
            className="rounded-full bg-white relative shadow-[0_0_25px_6px_rgba(255,255,255,1)]"
            style={{
              width: `${star.size * 3}px`,
              height: `${star.size * 3}px`,
              right: `-${star.size}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
