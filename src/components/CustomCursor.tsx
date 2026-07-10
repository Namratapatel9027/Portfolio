"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  directionX: number;
  directionY: number;
}

// Portfolio Theme Colors for bubbles
const COLORS = [
  "rgba(0, 242, 254, 0.15)",   // Cyan
  "rgba(79, 172, 254, 0.15)",  // Mint
  "rgba(139, 92, 246, 0.15)",  // Purple
];

const BORDER_COLORS = [
  "rgba(0, 242, 254, 0.6)",
  "rgba(79, 172, 254, 0.6)",
  "rgba(139, 92, 246, 0.6)",
];

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  
  const bubbleIdRef = useRef(0);
  const lastBubblePosRef = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const createBubble = (x: number, y: number, isBurst = false): Bubble => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    // Burst bubbles are bigger and fly faster
    const size = isBurst ? Math.random() * 25 + 10 : Math.random() * 15 + 5;
    
    return {
      id: bubbleIdRef.current++,
      x,
      y,
      size,
      color: COLORS[colorIndex],
      duration: Math.random() * 0.8 + 0.6, // 0.6s to 1.4s
      directionX: isBurst ? (Math.random() - 0.5) * 200 : (Math.random() - 0.5) * 80,
      directionY: isBurst ? (Math.random() - 0.5) * 200 : -(Math.random() * 100 + 40),
    };
  };

  useEffect(() => {
    setMounted(true);

    const updatePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      const dx = clientX - lastBubblePosRef.current.x;
      const dy = clientY - lastBubblePosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Spawn a bubble every 12 pixels of movement for a dense trail
      if (distance > 12) {
        lastBubblePosRef.current = { x: clientX, y: clientY };
        const newBubble = createBubble(clientX, clientY);

        setBubbles((prev) => [...prev.slice(-35), newBubble]);

        setTimeout(() => {
          setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
        }, newBubble.duration * 1000);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Spawn burst of 8 bubbles in all directions
      const burstBubbles = Array.from({ length: 8 }).map(() => createBubble(e.clientX, e.clientY, true));
      
      setBubbles((prev) => [...prev.slice(-30), ...burstBubbles]);
      
      burstBubbles.forEach((bubble) => {
        setTimeout(() => {
          setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
        }, bubble.duration * 1000);
      });
    };

    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* Dynamic tracking dot with elasticity */}
      <motion.div 
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isClicking ? 24 : 10,
          height: isClicking ? 24 : 10,
          opacity: mousePosition.x === 0 ? 0 : 1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 700, 
          damping: 25,
          mass: 0.1 
        }} 
      />

      {/* Floating Bubbles Trail */}
      <AnimatePresence>
        {bubbles.map((bubble) => {
          const colorIndex = COLORS.indexOf(bubble.color);
          return (
            <motion.div
              key={bubble.id}
              initial={{ 
                opacity: 0, 
                scale: 0.2, 
                x: bubble.x, 
                y: bubble.y 
              }}
              animate={{ 
                opacity: [0, 1, 0], // Smooth fade in and out
                scale: [0.5, 1.5, 2.5], // Pop outward
                x: bubble.x + bubble.directionX, 
                y: bubble.y + bubble.directionY 
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: bubble.duration, ease: "easeOut" }}
              className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] shadow-[inset_0_0_8px_rgba(255,255,255,0.4)] backdrop-blur-[2px]"
              style={{
                width: bubble.size,
                height: bubble.size,
                marginLeft: -bubble.size / 2,
                marginTop: -bubble.size / 2,
                backgroundColor: bubble.color,
                border: `1px solid ${BORDER_COLORS[colorIndex]}`
              }}
            />
          );
        })}
      </AnimatePresence>
    </>
  );
}
