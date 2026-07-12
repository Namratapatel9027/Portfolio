"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { useState } from "react";

// The "Periodic Table" Elements for Tech Skills
const elements = [
  // Languages & Data (Mint)
  { id: 1, symbol: "Py", name: "Python", cat: "Languages", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/python" },
  { id: 2, symbol: "C+", name: "C++", cat: "Languages", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/cplusplus" },
  { id: 3, symbol: "Pd", name: "Pandas", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/pandas" },
  { id: 4, symbol: "Np", name: "NumPy", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/numpy" },
  { id: 5, symbol: "Sk", name: "Scikit-Learn", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/scikitlearn" },
  { id: 6, symbol: "Jp", name: "Jupyter", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.simpleicons.org/jupyter" },
  { id: 7, symbol: "Mp", name: "Matplotlib", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { id: 8, symbol: "Ex", name: "Excel", cat: "Data", bg: "bg-accent-mint/10", border: "border-accent-mint/30", text: "text-accent-mint", shadow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]", logo: "/tech-icons/excel.png" },

  // AI, GenAI & Deep Learning (Purple)
  { id: 9, symbol: "Pt", name: "PyTorch", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/pytorch" },
  { id: 10, symbol: "Tf", name: "TensorFlow", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/tensorflow" },
  { id: 11, symbol: "Ml", name: "Machine Learning", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/scikitlearn" },
  { id: 12, symbol: "Dl", name: "Deep Learning", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/keras" },
  { id: 13, symbol: "Gn", name: "GenAI", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "/tech-icons/genai.png" },
  { id: 14, symbol: "Lm", name: "LLMs", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/meta/white" },
  { id: 15, symbol: "Rg", name: "RAG", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/langchain/white" },
  { id: 16, symbol: "Hf", name: "Hugging Face", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/huggingface" },
  { id: 17, symbol: "Cn", name: "CNNs", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/tensorflow" },
  { id: 18, symbol: "Vi", name: "ViT", cat: "AI & DL", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]", logo: "https://cdn.simpleicons.org/huggingface" },

  // Computer Vision (Cyan)
  { id: 19, symbol: "Cv", name: "OpenCV", cat: "Computer Vision", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]", logo: "https://cdn.simpleicons.org/opencv" },
  { id: 20, symbol: "Y8", name: "YOLOv8", cat: "Computer Vision", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]", logo: "https://cdn.simpleicons.org/roboflow" },
  { id: 21, symbol: "Un", name: "U-Net", cat: "Computer Vision", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]", logo: "https://cdn.simpleicons.org/pytorch" },
  { id: 22, symbol: "Ws", name: "WSI Analysis", cat: "Computer Vision", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]", logo: "https://cdn.simpleicons.org/fastai/white" },
  { id: 23, symbol: "Os", name: "OpenSlide", cat: "Computer Vision", bg: "bg-accent-cyan/10", border: "border-accent-cyan/30", text: "text-accent-cyan", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]", logo: "https://cdn.simpleicons.org/scipy" },

  // Tools & MLOps (Blue)
  { id: 24, symbol: "Aw", name: "AWS", cat: "Tools", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", logo: "/tech-icons/aws.png" },
  { id: 25, symbol: "Gt", name: "Git", cat: "Tools", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", logo: "https://cdn.simpleicons.org/git" },
  { id: 26, symbol: "St", name: "Streamlit", cat: "Tools", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", logo: "https://cdn.simpleicons.org/streamlit" },
  { id: 27, symbol: "Lx", name: "Linux", cat: "Tools", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", logo: "https://cdn.simpleicons.org/linux" },
  { id: 28, symbol: "Qp", name: "QuPath", cat: "Tools", bg: "bg-accent-blue/10", border: "border-accent-blue/30", text: "text-accent-blue", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]", logo: "/tech-icons/qupath.jpeg" },
];

export function TechStack() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="tech-stack" className="py-32 relative bg-transparent overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/5 via-background to-background pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Heading */}
        <div className="mb-20">
          <SectionHeading
            title={<><span className="text-gradient">TECH</span> <span className="text-white">&</span> <span className="text-gradient">SKILLS</span></>}
            subtitle="My core expertise, structured as a periodic table of intelligent systems."
          />
        </div>

        {/* The Periodic Table Grid */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 max-w-5xl mx-auto">
            {elements.map((el, idx) => (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.03,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative flex flex-col items-center justify-center p-4 md:p-6 
                  aspect-square rounded-xl cursor-default transition-all duration-300
                  ${el.bg} border ${el.border} ${el.shadow}
                  ${hoveredId === el.id ? 'scale-110 z-20 bg-opacity-30' : 'scale-100 z-10'}
                  ${hoveredId !== null && hoveredId !== el.id ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100'}
                `}
              >
                {/* Atomic Number (ID) */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-white/50">
                  {el.id}
                </span>

                {/* Logo or Symbol */}
                {el.logo ? (
                  <div className="w-8 h-8 md:w-10 md:h-10 mb-2 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={el.logo} alt={el.name} className="w-full h-full object-contain filter drop-shadow-md" />
                  </div>
                ) : (
                  <span className={`text-3xl md:text-4xl font-black ${el.text} tracking-tighter mb-1`}>
                    {el.symbol}
                  </span>
                )}

                {/* Full Name */}
                <span className="text-[10px] md:text-xs font-bold text-white text-center uppercase tracking-widest line-clamp-1 w-full truncate">
                  {el.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-accent-purple/20 border border-accent-purple/50" />
            <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Deep Learning</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-accent-cyan/20 border border-accent-cyan/50" />
            <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Computer Vision</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-accent-mint/20 border border-accent-mint/50" />
            <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Languages & Data</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-accent-blue/20 border border-accent-blue/50" />
            <span className="text-sm font-bold text-white/70 uppercase tracking-wider">Tools & Deployment</span>
          </div>
        </div>

      </div>
    </section>
  );
}
