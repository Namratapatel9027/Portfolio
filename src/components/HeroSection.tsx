"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { projectsData } from "./ProjectsSection";
import { experiences } from "./ExperienceTimeline";
import { publications } from "./PublicationsSection";
import Galaxy from "./Galaxy";

const FULL_NAME = "NAMRATA";
const LETTERS = FULL_NAME.split("");
const COMBINED_WORDS = ["NAMRATA", "PATEL"];

const HeroButton = ({
  href,
  download,
  text,
  icon: Icon,
  isPrimary
}: {
  href: string,
  download?: string,
  text: string,
  icon: any,
  isPrimary: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const innerContent = (
    <div
      className={`relative z-10 flex items-center justify-center w-full h-full transition-colors duration-300 font-bold ${isPrimary
        ? (isHovered ? "text-white" : "text-black")
        : (isHovered ? "text-black" : "text-white")
        }`}
    >
      {isPrimary ? (
        <>
          {text}
          <Icon className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </>
      ) : (
        <>
          <Icon className="w-5 h-5 mr-2 transition-transform duration-300 transform group-hover:-translate-y-1 text-accent-cyan" style={{ color: isHovered ? "black" : undefined }} />
          {text}
        </>
      )}
    </div>
  );

  const buttonClasses = `group relative overflow-hidden flex items-center justify-center rounded-full min-w-[220px] px-8 py-4 transition-all duration-300 border border-white/15 cursor-pointer ${isPrimary
    ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    : "bg-[#11222C]/40 backdrop-blur-md shadow-[0_0_20px_rgba(79,172,254,0.1)]"
    }`;

  const fillAnimation = (
    <motion.div
      initial={{ y: "100%", skewY: 10 }}
      animate={{
        y: isHovered ? "0%" : "100%",
        skewY: isHovered ? 0 : 10
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute inset-0 z-0 ${isPrimary ? "bg-black" : "bg-white"}`}
    />
  );

  if (download) {
    return (
      <a
        href={href}
        download={download}
        className={buttonClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {fillAnimation}
        {innerContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {fillAnimation}
      {innerContent}
    </Link>
  );
};

const ROLES = [
  "AI/ML Engineer",
  "Computer Vision Engineer",
  "Data Scientist",
  "Machine Learning Engineer",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function HeroSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      const storedCount = localStorage.getItem("portfolio_visitor_count");
      let count = storedCount ? parseInt(storedCount, 10) : Math.floor(Math.random() * 500) + 1500;
      count += 1;
      localStorage.setItem("portfolio_visitor_count", count.toString());
      setVisitorCount(count);
    } catch (err) {
      console.error("Failed to access local storage:", err);
      setVisitorCount(1542);
    }
  }, []);

  // Preloader sequence state
  const [introStage] = useState<"flashing" | "merged" | "complete">("complete");
  const [currentLetterIndex] = useState(LETTERS.length);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollY } = useScroll();

  // Fade out hero content as we scroll down so it doesn't collide with the overlapping About section
  const textScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section id="home" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black z-0">

      {/* Absolute Black Overlay for Preloader */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: introStage === "flashing" ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 z-10 bg-black pointer-events-none"
      />

      {/* Galaxy Background */}
      <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 z-0 overflow-hidden">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity: textOpacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 w-full flex flex-col items-center text-center pointer-events-none">

        <motion.div
          style={{ scale: textScale, y: yPos }}
          className="flex flex-col items-center w-full mt-20"
        >
          {/* Title / Preloader Text */}
          <div className="flex flex-col items-center justify-center relative h-[250px] sm:h-[300px] w-full z-20">
            <AnimatePresence mode="wait">
              {introStage === "flashing" && currentLetterIndex < LETTERS.length ? (
                <motion.h1
                  key={`letter-${currentLetterIndex}`}
                  initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)", y: 60 }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 60 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: 60 }}
                  transition={{ duration: 0.12 }}
                  className="text-[30vw] sm:text-[210px] font-black tracking-tighter leading-none text-white absolute uppercase z-50"
                >
                  {LETTERS[currentLetterIndex]}
                </motion.h1>
              ) : (introStage === "merged" || introStage === "complete") && hasMounted ? (
                <motion.div
                  key="full-name"
                  className="flex flex-col -space-y-2 sm:-space-y-1 items-center justify-center z-50 pointer-events-none mt-8 sm:mt-12"
                >
                  {COMBINED_WORDS.map((word, wIdx) => {
                    const xStart = (wIdx === 0 ? -1 : 1) * 200;
                    const yStart = (wIdx === 0 ? -1 : 1) * 100;

                    return (
                      <motion.div
                        key={word}
                        className="flex"
                      >
                        {word.split("").map((letter, i) => {
                          const seed = wIdx * 100 + i * 17;
                          const rX = seededRandom(seed + 1);
                          const rY = seededRandom(seed + 2);
                          const rR = seededRandom(seed + 3);

                          return (
                            <motion.span
                              key={i}
                              initial={{
                                opacity: 0,
                                x: xStart + (rX - 0.5) * 400,
                                y: yStart + (rY - 0.5) * 400,
                                rotate: (rR - 0.5) * 90,
                                scale: 2,
                                filter: "blur(20px)"
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                filter: "blur(0px)"
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.05 + wIdx * 0.2,
                                type: "spring",
                                bounce: 0.4
                              }}
                              className="text-[13vw] sm:text-[63px] lg:text-[112px] font-black tracking-tighter leading-none text-white uppercase inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            >
                              {letter}
                            </motion.span>
                          );
                        })}
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Subheadings and Call to Actions (Fade in when complete) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: introStage === "complete" ? 1 : 0,
              y: introStage === "complete" ? 0 : 30
            }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center space-y-6 mt-2 pointer-events-auto"
          >
            <div
              style={{ perspective: "600px" }}
              className="h-[1.5em] flex items-center justify-center mt-2"
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  style={{ transformOrigin: "center top", backfaceVisibility: "hidden" }}
                  className="text-xl sm:text-3xl md:text-4xl font-bold text-gradient tracking-wide uppercase text-center px-4 w-full"
                >
                  {ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-text-secondary text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mt-4 px-4 text-center">
              Building production-grade deep learning systems for medical imaging and industrial automation. Specializing in <span className="text-white font-medium">computer vision, CNNs,</span> and <span className="text-white font-medium">Vision Transformers</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: introStage === "complete" ? 1 : 0,
            y: introStage === "complete" ? 0 : 30
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 pointer-events-auto w-full px-4"
        >
          <HeroButton
            href="/projects"
            text="View Projects"
            icon={ArrowRight}
            isPrimary={true}
          />
          <HeroButton
            href="/Namrata_patel_resume.pdf"
            download="Namrata_patel_resume.pdf"
            text="Download Resume"
            icon={Download}
            isPrimary={false}
          />
        </motion.div>

        {/* Minimalist Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introStage === "complete" ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-mono text-text-secondary pointer-events-auto mb-20"
        >
          {[
            { label: "Core Projects", value: `${projectsData.length}+` },
            { label: "Year of Experience", value: `${experiences.length}+` },
            { label: "Publications", value: `${publications.length}` },
            { label: "Visitors", value: visitorCount !== null ? visitorCount.toString() : "..." },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <span className="text-accent-mint font-bold">[{metric.value}]</span>
              <span>{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
