"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  {
    title: "Math and Statistics For AI, Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_math_stats_np_1781698306149.png",
    link: "https://codebasics.io/certificate/CB-63-393823",
  },
  {
    title: "Python: Beginner to Advanced For Data Professionals",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_python_np_1781698319180.png",
    link: "https://codebasics.io/certificate/CB-48-393823",
  },
  {
    title: "SQL for Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_sql_ds_1781697652189.png",
    link: "https://codebasics.io/certificate/CB-82-393823",
  },
  {
    title: "SQL Beginner to Advanced For Data Professionals",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_sql_adv_1781697664801.png",
    link: "https://codebasics.io/certificate/CB-50-393823",
  },
  {
    title: "Get Job Ready: Power BI Data Analytics for All Levels 3.0",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_powerbi_1781697677649.png",
    link: "https://codebasics.io/certificate/CB-49-393823",
  },
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_excel_1781697689486.png",
    link: "https://codebasics.io/certificate/CB-51-393823",
  },
  {
    title: "Scam Awareness Course",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_scam_1781697702388.png",
    link: "https://codebasics.io/certificate/CB-64-393823",
  },
  {
    title: "Accenture Data Analytics and Visualization Job Simulation",
    issuer: "Accenture",
    date: "2024",
    image: "/images/cert_accenture_1781698026873.png",
    link: "https://files.codebasics.io/uploads/learner-portfolio/certificates/393823/6731e9ab30487/3c4bd05d7f.jpg",
  },
];

function CertificationsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !diamondRef.current) return;

    const waypoints = gsap.utils.toArray<HTMLElement>(".waypoint-box");
    if (waypoints.length === 0) return;

    const getPos = (el: HTMLElement) => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return {
        x: elRect.left - containerRect.left + elRect.width / 2,
        y: elRect.top - containerRect.top + elRect.height / 2,
      };
    };

    gsap.set(diamondRef.current, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: waypoints[0],
        endTrigger: waypoints[waypoints.length - 1],
        start: "center center",
        end: "center center",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    gsap.to(diamondRef.current, {
      rotation: "+=720",
      ease: "none",
      scrollTrigger: {
        trigger: waypoints[0],
        endTrigger: waypoints[waypoints.length - 1],
        start: "center center",
        end: "center center",
        scrub: 1,
      },
    });

    waypoints.forEach((wp, i) => {
      if (i === 0) {
        tl.set(diamondRef.current, {
          x: () => getPos(wp).x,
          y: () => getPos(wp).y,
        });
        tl.to(wp, {
          scale: 1.2,
          borderColor: "rgba(6,182,212,1)",
          boxShadow: "0 0 30px rgba(6,182,212,0.6)",
          duration: 0.1,
        });
      } else {
        tl.to(diamondRef.current, {
          x: () => getPos(wp).x,
          y: () => getPos(wp).y,
          ease: "power1.inOut",
          duration: 1,
        });
        tl.to(
          waypoints[i - 1],
          {
            scale: 1,
            borderColor: "rgba(255,255,255,0.2)",
            boxShadow: "none",
            duration: 0.3,
          },
          "<+0.5"
        );
        tl.to(
          wp,
          {
            scale: 1.2,
            borderColor: "rgba(6,182,212,1)",
            boxShadow: "0 0 30px rgba(6,182,212,0.6)",
            duration: 0.3,
          },
          ">-0.3"
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative mt-24 max-w-5xl mx-auto pb-24">
      {/* Traveling Diamond */}
      <div
        ref={diamondRef}
        className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-md rotate-45 z-20 shadow-[0_0_30px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      />

      <div className="space-y-32">
        {certifications.map((cert, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="w-full md:w-1/2 relative z-10"
              >
                <div className="glass-card overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-500 hover:border-white/20">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-black/50">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow relative bg-[#11222C]/80 backdrop-blur-md">
                    <div className="absolute -top-6 right-6 p-3 rounded-full bg-accent-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <Award className="w-5 h-5" />
                    </div>

                    <p className="text-xs font-bold text-accent-cyan mb-2 uppercase tracking-wider">
                      {cert.date}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/90 font-medium text-[15px] mb-1 tracking-wide">
                      Namrata Patel
                    </p>
                    <p className="text-text-secondary text-sm mb-6 flex-grow">{cert.issuer}</p>

                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-white/5 hover:bg-accent-purple/20 border border-white/10 hover:border-accent-purple/50 text-white transition-all font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 text-accent-purple" />
                      View Credential
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Waypoint dock */}
              <div className="hidden md:flex w-full md:w-1/2 justify-center items-center relative z-0">
                <div className="waypoint-box w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-white/20 rounded-xl transition-all duration-300 relative bg-[#11222C]/50 backdrop-blur-sm">
                  <div className="absolute inset-0 m-auto w-3 h-3 bg-white/20 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden">
      {/* ── Header ── */}
      <section className="relative pt-28 pb-4 flex flex-col items-center text-center px-4">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-purple/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Back link */}
        <button onClick={() => router.back()}
          className="group mb-10 inline-flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors duration-300 font-mono text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple font-mono text-xs uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Credentials
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          All{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-cyan">
            Certifications
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-xl text-text-secondary font-light max-w-2xl relative z-10"
        >
          {certifications.length} verified credentials spanning AI, Data Science, Business
          Intelligence, and more.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-wrap justify-center gap-6 relative z-10"
        >
          {[
            { label: "Total Certs", value: certifications.length },
            { label: "Codebasics", value: 7 },
            { label: "Accenture", value: 1 },
            { label: "Year", value: "2024" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm"
            >
              <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-cyan">
                {stat.value}
              </span>
              <span className="text-xs text-text-secondary font-mono uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Full Certifications — GSAP diamond animation (same as original) ── */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <CertificationsContent />
        </div>
      </section>
    </main>
  );
}
