"use client";

import { motion } from "framer-motion";

const educationDetails = [
  {
    institution: "Dr. Babasaheb Ambedkar Technological University (DBATU), Shahada",
    degree: "Bachelor of Technology - Computer Science",
    duration: "Nov 2022 - Aug 2025",
    details: "CGPA: 7.7"
  },
  {
    institution: "Maharashtra State Board of Technical Education (MSBTE), Shahada",
    degree: "Diploma - Computer Science",
    duration: "Nov 2019 - Jun 2022",
    details: "Percentage: 82.91%"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="pt-12 md:pt-16 pb-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">My <span className="text-gradient">Education</span></h2>
          <p className="mt-4 text-xl text-text-secondary">Academic background and qualifications.</p>
        </div>

        <div className="space-y-8">
          {educationDetails.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#11222C]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.degree}</h3>
                <h4 className="text-base sm:text-lg text-text-secondary">{item.institution}</h4>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 min-w-[150px]">
                <span className="text-sm font-bold text-accent-cyan uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                  {item.duration}
                </span>
                <span className="text-white font-mono font-medium bg-accent-mint/10 text-accent-mint px-3 py-1 rounded-md">
                  {item.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
