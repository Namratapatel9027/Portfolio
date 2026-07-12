"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  {
    title: "Math and Statistics For AI, Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_math_stats_np_1781698306149.png",
    link: "https://codebasics.io/certificate/CB-63-393823"
  },
  {
    title: "Python: Beginner to Advanced For Data Professionals",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_python_np_1781698319180.png",
    link: "https://codebasics.io/certificate/CB-48-393823"
  },
  {
    title: "SQL for Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_sql_ds_1781697652189.png",
    link: "https://codebasics.io/certificate/CB-82-393823"
  },
  {
    title: "SQL Beginner to Advanced For Data Professionals",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_sql_adv_1781697664801.png",
    link: "https://codebasics.io/certificate/CB-50-393823"
  },
  {
    title: "Get Job Ready: Power BI Data Analytics for All Levels 3.0",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_powerbi_1781697677649.png",
    link: "https://codebasics.io/certificate/CB-49-393823"
  },
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_excel_1781697689486.png",
    link: "https://codebasics.io/certificate/CB-51-393823"
  },
  {
    title: "Scam Awareness Course",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_scam_1781697702388.png",
    link: "https://codebasics.io/certificate/CB-64-393823"
  },
  {
    title: "Accenture Data Analytics and Visualization Job Simulation",
    issuer: "Accenture",
    date: "2024",
    image: "/images/cert_accenture_1781698026873.png",
    link: "https://files.codebasics.io/uploads/learner-portfolio/certificates/393823/6731e9ab30487/3c4bd05d7f.jpg"
  }
];

export function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !diamondRef.current) return;

    const waypoints = gsap.utils.toArray<HTMLElement>('.waypoint-box');
    if (waypoints.length === 0) return;

    // Helper to get exact x/y of waypoint relative to the container
    const getPos = (el: HTMLElement) => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return {
        x: elRect.left - containerRect.left + elRect.width / 2,
        y: elRect.top - containerRect.top + elRect.height / 2
      };
    };

    // Show diamond
    gsap.set(diamondRef.current, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: waypoints[0],
        endTrigger: waypoints[waypoints.length - 1],
        start: "center center", // animation starts when first waypoint hits center
        end: "center center", // animation ends when last waypoint hits center
        scrub: 0.5, // tighter scrubbing
        invalidateOnRefresh: true, // re-calculate positions if window resizes
      }
    });

    // Make the diamond spin continuously as the user scrolls
    gsap.to(diamondRef.current, {
      rotation: "+=720", // spin 720 degrees over the entire scroll
      ease: "none",
      scrollTrigger: {
        trigger: waypoints[0],
        endTrigger: waypoints[waypoints.length - 1],
        start: "center center",
        end: "center center",
        scrub: 1
      }
    });

    waypoints.forEach((wp, i) => {
      if (i === 0) {
        // Start exactly at the first waypoint
        tl.set(diamondRef.current, {
          x: () => getPos(wp).x,
          y: () => getPos(wp).y,
        });

        // Highlight first waypoint immediately (Scale up and Glow)
        tl.to(wp, { scale: 1.2, borderColor: "rgba(6,182,212,1)", boxShadow: "0 0 30px rgba(6,182,212,0.6)", duration: 0.1 });
      } else {
        // Move to the next waypoint with a smooth easing
        tl.to(diamondRef.current, {
          x: () => getPos(wp).x,
          y: () => getPos(wp).y,
          ease: "power1.inOut",
          duration: 1
        });

        // De-activate the previous waypoint (Scale down and Dim)
        tl.to(waypoints[i - 1], {
          scale: 1,
          borderColor: "rgba(255,255,255,0.2)",
          boxShadow: "none",
          duration: 0.3
        }, "<+0.5");

        // Highlight the new waypoint when the diamond arrives
        tl.to(wp, {
          scale: 1.2,
          borderColor: "rgba(6,182,212,1)",
          boxShadow: "0 0 30px rgba(6,182,212,0.6)",
          duration: 0.3
        }, ">-0.3"); // start slightly before arrival
      }
    });

  }, { scope: containerRef }); // only search for '.waypoint-box' inside containerRef

  return (
    <section id="certifications" className="py-24 relative bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and continuous learning."
        />

        <div ref={containerRef} className="relative mt-24 max-w-5xl mx-auto pb-24">

          {/* The Traveling Diamond */}
          <div
            ref={diamondRef}
            className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-md rotate-45 z-20 shadow-[0_0_30px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 0 }}
          />

          <div className="space-y-32">
            {certifications.map((cert, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* The Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="w-full md:w-1/2 relative z-10"
                  >
                    <div className="glass-card overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-500 hover:border-white/20">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-black/50">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Content Container */}
                      <div className="p-6 flex flex-col flex-grow relative bg-[#11222C]/80 backdrop-blur-md">
                        <div className="absolute -top-6 right-6 p-3 rounded-full bg-accent-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                          <Award className="w-5 h-5" />
                        </div>

                        <p className="text-xs font-bold text-accent-cyan mb-2 uppercase tracking-wider">{cert.date}</p>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                        <p className="text-white/90 font-medium text-[15px] mb-1 tracking-wide">Namrata Patel</p>
                        <p className="text-text-secondary text-sm mb-6 flex-grow">{cert.issuer}</p>

                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center w-full py-3 rounded-xl bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 font-bold"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 text-black group-hover:text-white transition-colors duration-300" />
                          View Credential
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* The Waypoint Dock */}
                  <div className="hidden md:flex w-full md:w-1/2 justify-center items-center relative z-0">
                    <div className="waypoint-box w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-white/20 rounded-xl transition-all duration-300 relative bg-[#11222C]/50 backdrop-blur-sm">
                      {/* Inner dot to show it's a waypoint */}
                      <div className="absolute inset-0 m-auto w-3 h-3 bg-white/20 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
