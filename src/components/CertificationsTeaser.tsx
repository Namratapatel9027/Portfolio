"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./ui/SectionHeading";

const certifications = [
  {
    title: "Math and Statistics For AI, Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_math_stats_np_1781698306149.png",
  },
  {
    title: "Python: Beginner to Advanced For Data Professionals",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_python_np_1781698319180.png",
  },
  {
    title: "SQL for Data Science",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_sql_ds_1781697652189.png",
  },
  {
    title: "Get Job Ready: Power BI Data Analytics for All Levels 3.0",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_powerbi_1781697677649.png",
  },
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    date: "2024",
    image: "/images/cert_excel_1781697689486.png",
  },
  {
    title: "Accenture Data Analytics and Visualization Job Simulation",
    issuer: "Accenture",
    date: "2024",
    image: "/images/cert_accenture_1781698026873.png",
  },
];

// Only show first 4 as glimpse thumbnails
const previewCerts = certifications.slice(0, 4);

export function CertificationsTeaser() {
  return (
    <section id="certifications" className="py-24 relative bg-surface/20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-purple/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and continuous learning."
        />

        {/* Glimpse layout */}
        <div className="mt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: Stacked cert preview cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative w-full lg:w-1/2 flex justify-center items-center"
          >
            {/* Stacked thumbnails */}
            <div className="relative w-[320px] h-[260px] sm:w-[380px] sm:h-[300px]">
              {previewCerts.map((cert, i) => {
                // Stagger offset for each card
                const offsets = [
                  { rotate: -8, x: -32, y: 12, z: 10 },
                  { rotate: -3, x: -12, y: 6,  z: 20 },
                  { rotate:  2, x:   8, y: 0,  z: 30 },
                  { rotate:  7, x:  28, y: -6, z: 40 },
                ];
                const o = offsets[i];

                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#11222C]"
                    style={{
                      transform: `rotate(${o.rotate}deg) translate(${o.x}px, ${o.y}px)`,
                      zIndex: o.z,
                    }}
                  >
                    {/* Blur overlay on all but the top card */}
                    {i < previewCerts.length - 1 && (
                      <div className="absolute inset-0 bg-[#080E11]/60 backdrop-blur-[2px] z-10 rounded-2xl" />
                    )}
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* Count badge sitting on top */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                className="absolute -top-4 -right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan border-2 border-background shadow-[0_0_20px_rgba(139,92,246,0.6)]"
              >
                <span className="text-white font-black text-lg leading-none">{certifications.length}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col items-start gap-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple font-mono text-xs uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Credentials
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
              {certifications.length} Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-cyan">
                Certifications
              </span>
            </h3>

            <p className="text-text-secondary text-base leading-relaxed max-w-md">
              Spanning AI &amp; Machine Learning, Data Analytics, Business Intelligence, and
              Python — all issued by industry-leading platforms including Codebasics and Accenture.
            </p>

            {/* Quick issuer pills */}
            <div className="flex flex-wrap gap-3">
              {["Codebasics", "Accenture"].map((issuer) => (
                <span
                  key={issuer}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-text-secondary text-sm font-medium"
                >
                  <Award className="w-3.5 h-3.5 text-accent-purple" />
                  {issuer}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/certifications"
              onClick={() => sessionStorage.setItem(`scroll_${window.location.pathname}`, window.scrollY.toString())}
              className="btn-17 group mt-2 px-8 py-4 font-bold text-base bg-white text-black hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-colors duration-300"
              style={{ '--btn-fill': '#000000', '--btn-speed': '0.4s', '--btn-skew': '-0.15' } as React.CSSProperties}
            >
              <span className="text-container flex items-center justify-center">
                <span className="text flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  View All Certifications
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
