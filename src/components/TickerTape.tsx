"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const items = [
  "COMPUTER VISION",
  "DEEP LEARNING",
  "PYTORCH",
  "COMPUTATIONAL PATHOLOGY",
  "WHOLE SLIDE IMAGES",
  "UNET SEGMENTATION",
  "RESNET",
  "MLOPS"
];

// Helper to wrap values seamlessly
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function TickerTape() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Velocity factor to increase speed when scrolling
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * We need a large enough number of duplicates so that wrapping looks seamless.
   * We wrap x between 0% and -50% to create the infinite loop.
   */
  const tickerItems = [...items, ...items, ...items, ...items];
  
  // When baseX goes below -50, it wraps back to 0
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -0.05 * (delta / 16); // base speed

    // Adjust speed based on scroll velocity
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full bg-[#050505] border-y border-white/5 py-6 overflow-hidden relative flex group">
      <motion.div 
        style={{ x }}
        className="flex whitespace-nowrap w-max"
      >
        {tickerItems.map((item, i) => (
          <span 
            key={i} 
            className="font-mono text-sm sm:text-base text-text-secondary px-8 tracking-[0.2em] uppercase flex items-center hover:text-white transition-colors duration-300 cursor-default"
          >
            {item} <span className="text-accent-cyan ml-16 opacity-30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
