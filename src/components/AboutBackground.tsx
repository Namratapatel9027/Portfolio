"use client";

import { motion } from "framer-motion";

export function AboutBackground() {
  return (
    <div 
      className="absolute inset-0 w-full h-full -z-10 overflow-hidden opacity-60 pointer-events-none"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
      }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* The inner part of the SVG */}
          <g mask="url(#SvgjsMask1000)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M-108.17 379.55L-108.17 379.55" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-108.17 379.55L-96.43 500.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-108.17 379.55L79.75 398.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-108.17 379.55L93.89 495.01" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-108.17 379.55L46.12 656.77" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L-96.43 500.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L93.89 495.01" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L79.75 398.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L46.12 656.77" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M-96.43 500.65L194.51 694.13" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M79.75 398.65L79.75 398.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M79.75 398.65L93.89 495.01" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M79.75 398.65L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M79.75 398.65L251.06 357.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M93.89 495.01L93.89 495.01" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M93.89 495.01L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M93.89 495.01L46.12 656.77" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M93.89 495.01L251.06 357.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M46.12 656.77L46.12 656.77" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M46.12 656.77L194.51 694.13" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M46.12 656.77L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M46.12 656.77L79.75 398.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M251.06 357.2L251.06 357.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M251.06 357.2L370.82 351.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M251.06 357.2L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M211.18 507.86L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M211.18 507.86L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M194.51 694.13L194.51 694.13" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M194.51 694.13L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M194.51 694.13L392.97 709.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M194.51 694.13L93.89 495.01" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M194.51 694.13L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M370.82 351.87L370.82 351.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M370.82 351.87L530.2 375.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M370.82 351.87L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M370.82 351.87L518.75 518.47" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M370.82 351.87L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M396.26 512.87L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M396.26 512.87L518.75 518.47" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M396.26 512.87L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L392.97 709.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L518.75 518.47" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L211.18 507.86" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M392.97 709.58L684.62 667.96" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M530.2 375.74L530.2 375.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M530.2 375.74L651.87 369.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M530.2 375.74L518.75 518.47" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M530.2 375.74L396.26 512.87" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M518.75 518.47L518.75 518.47" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M518.75 518.47L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M518.75 518.47L646.6 530.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M518.75 518.47L651.87 369.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M524.06 644.26L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M666.49 236.31L666.49 236.31" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M666.49 236.31L651.87 369.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M666.49 236.31L804.84 230.66" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M666.49 236.31L530.2 375.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M666.49 236.31L961.05 249.51" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M651.87 369.65L651.87 369.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M646.6 530.58L646.6 530.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M646.6 530.58L684.62 667.96" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M684.62 667.96L684.62 667.96" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M684.62 667.96L818.29 678.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M684.62 667.96L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M684.62 667.96L843.73 533.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M804.84 230.66L804.84 230.66" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M804.84 230.66L961.05 249.51" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M804.84 230.66L962.57 342.89" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M804.84 230.66L651.87 369.65" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M804.84 230.66L980.37 105.75" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M843.73 533.23L843.73 533.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M843.73 533.23L958.11 549.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M843.73 533.23L818.29 678.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M843.73 533.23L942.91 700.46" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M843.73 533.23L646.6 530.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M818.29 678.23L818.29 678.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M818.29 678.23L942.91 700.46" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M818.29 678.23L958.11 549.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M818.29 678.23L646.6 530.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M818.29 678.23L524.06 644.26" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M980.37 105.75L980.37 105.75" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M980.37 105.75L1087.64 81.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M980.37 105.75L961.05 249.51" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M980.37 105.75L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M961.05 249.51L961.05 249.51" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M961.05 249.51L962.57 342.89" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M961.05 249.51L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M962.57 342.89L962.57 342.89" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M962.57 342.89L1125.63 342.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M962.57 342.89L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M958.11 549.2L958.11 549.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M958.11 549.2L942.91 700.46" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M942.91 700.46L942.91 700.46" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M942.91 700.46L1121.12 685.41" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M942.91 700.46L1113.6 560.94" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1110.97 -109.74L1110.97 -109.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1110.97 -109.74L1087.64 81.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1110.97 -109.74L1308.55 -93.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1110.97 -109.74L1287.66 60.69" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1087.64 81.58L1087.64 81.58" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1087.64 81.58L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1094.12 234.48L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1094.12 234.48L1125.63 342.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1125.63 342.27L1125.63 342.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1113.6 560.94L1113.6 560.94" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1113.6 560.94L1121.12 685.41" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1113.6 560.94L958.11 549.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1113.6 560.94L1264.1 497.49" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1113.6 560.94L1125.63 342.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1121.12 685.41L1121.12 685.41" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1121.12 685.41L1291.93 692.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1121.12 685.41L958.11 549.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1121.12 685.41L1264.1 497.49" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1308.55 -93.2L1308.55 -93.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1308.55 -93.2L1395.92 -49.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1308.55 -93.2L1287.66 60.69" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1287.66 60.69L1287.66 60.69" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1287.66 60.69L1311.56 200.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1287.66 60.69L1395.92 -49.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1311.56 200.74L1311.56 200.74" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1311.56 200.74L1411.27 253.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1311.56 200.74L1446.98 84.14" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1311.56 200.74L1413.04 363.39" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1311.56 200.74L1094.12 234.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1264.1 497.49L1264.1 497.49" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1264.1 497.49L1420.57 509.04" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1264.1 497.49L1291.93 692.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1264.1 497.49L1413.04 363.39" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1291.93 692.44L1291.93 692.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1291.93 692.44L1389.73 700.5" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1291.93 692.44L1113.6 560.94" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1291.93 692.44L1420.57 509.04" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1395.92 -49.44L1395.92 -49.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1395.92 -49.44L1446.98 84.14" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1446.98 84.14L1446.98 84.14" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1446.98 84.14L1555.74 103.54" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1446.98 84.14L1287.66 60.69" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1446.98 84.14L1411.27 253.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1446.98 84.14L1562.32 227.34" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1411.27 253.48L1411.27 253.48" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1411.27 253.48L1413.04 363.39" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1411.27 253.48L1562.32 227.34" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1411.27 253.48L1577.86 347.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1411.27 253.48L1555.74 103.54" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1413.04 363.39L1413.04 363.39" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1413.04 363.39L1420.57 509.04" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1413.04 363.39L1577.86 347.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1420.57 509.04L1420.57 509.04" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1420.57 509.04L1567.97 528.19" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1420.57 509.04L1389.73 700.5" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1389.73 700.5L1389.73 700.5" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1389.73 700.5L1264.1 497.49" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1594.25 -91.23" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1555.74 103.54" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1395.92 -49.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1446.98 84.14" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1308.55 -93.2" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1594.25 -91.23L1562.32 227.34" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1555.74 103.54L1555.74 103.54" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1555.74 103.54L1562.32 227.34" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1555.74 103.54L1395.92 -49.44" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1562.32 227.34L1562.32 227.34" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1562.32 227.34L1577.86 347.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1577.86 347.27L1577.86 347.27" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1577.86 347.27L1567.97 528.19" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1567.97 528.19L1567.97 528.19" stroke="#132e65" strokeWidth="1.5"></path>
        <path d="M1567.97 528.19L1413.04 363.39" stroke="#132e65" strokeWidth="1.5"></path>
        <circle r="5" cx="-108.17" cy="379.55" fill="#132e65"></circle>
        <circle r="5" cx="-96.43" cy="500.65" fill="#132e65"></circle>
        <circle r="5" cx="79.75" cy="398.65" fill="#132e65"></circle>
        <circle r="5" cx="93.89" cy="495.01" fill="#132e65"></circle>
        <circle r="5" cx="46.12" cy="656.77" fill="#132e65"></circle>
        <circle r="5" cx="251.06" cy="357.2" fill="#132e65"></circle>
        <circle r="5" cx="211.18" cy="507.86" fill="#132e65"></circle>
        <circle r="5" cx="194.51" cy="694.13" fill="#132e65"></circle>
        <circle r="5" cx="370.82" cy="351.87" fill="#132e65"></circle>
        <circle r="5" cx="396.26" cy="512.87" fill="#132e65"></circle>
        <circle r="5" cx="392.97" cy="709.58" fill="#132e65"></circle>
        <circle r="5" cx="530.2" cy="375.74" fill="#132e65"></circle>
        <circle r="5" cx="518.75" cy="518.47" fill="#132e65"></circle>
        <circle r="5" cx="524.06" cy="644.26" fill="#132e65"></circle>
        <circle r="5" cx="666.49" cy="236.31" fill="#132e65"></circle>
        <circle r="5" cx="651.87" cy="369.65" fill="#132e65"></circle>
        <circle r="5" cx="646.6" cy="530.58" fill="#132e65"></circle>
        <circle r="5" cx="684.62" cy="667.96" fill="#132e65"></circle>
        <circle r="5" cx="804.84" cy="230.66" fill="#132e65"></circle>
        <circle r="5" cx="843.73" cy="533.23" fill="#132e65"></circle>
        <circle r="5" cx="818.29" cy="678.23" fill="#132e65"></circle>
        <circle r="5" cx="980.37" cy="105.75" fill="#132e65"></circle>
        <circle r="5" cx="961.05" cy="249.51" fill="#132e65"></circle>
        <circle r="5" cx="962.57" cy="342.89" fill="#132e65"></circle>
        <circle r="5" cx="958.11" cy="549.2" fill="#132e65"></circle>
        <circle r="5" cx="942.91" cy="700.46" fill="#132e65"></circle>
        <circle r="5" cx="1110.97" cy="-109.74" fill="#132e65"></circle>
        <circle r="5" cx="1087.64" cy="81.58" fill="#132e65"></circle>
        <circle r="5" cx="1094.12" cy="234.48" fill="#132e65"></circle>
        <circle r="5" cx="1125.63" cy="342.27" fill="#132e65"></circle>
        <circle r="5" cx="1113.6" cy="560.94" fill="#132e65"></circle>
        <circle r="5" cx="1121.12" cy="685.41" fill="#132e65"></circle>
        <circle r="5" cx="1308.55" cy="-93.2" fill="#132e65"></circle>
        <circle r="5" cx="1287.66" cy="60.69" fill="#132e65"></circle>
        <circle r="5" cx="1311.56" cy="200.74" fill="#132e65"></circle>
        <circle r="5" cx="1264.1" cy="497.49" fill="#132e65"></circle>
        <circle r="5" cx="1291.93" cy="692.44" fill="#132e65"></circle>
        <circle r="5" cx="1395.92" cy="-49.44" fill="#132e65"></circle>
        <circle r="5" cx="1446.98" cy="84.14" fill="#132e65"></circle>
        <circle r="5" cx="1411.27" cy="253.48" fill="#132e65"></circle>
        <circle r="5" cx="1413.04" cy="363.39" fill="#132e65"></circle>
        <circle r="5" cx="1420.57" cy="509.04" fill="#132e65"></circle>
        <circle r="5" cx="1389.73" cy="700.5" fill="#132e65"></circle>
        <circle r="5" cx="1594.25" cy="-91.23" fill="#132e65"></circle>
        <circle r="5" cx="1555.74" cy="103.54" fill="#132e65"></circle>
        <circle r="5" cx="1562.32" cy="227.34" fill="#132e65"></circle>
        <circle r="5" cx="1577.86" cy="347.27" fill="#132e65"></circle>
        <circle r="5" cx="1567.97" cy="528.19" fill="#132e65"></circle>
        <path d="M387.2 557.53L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M387.2 557.53L385.15 676.57" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M548.89 706.18L548.89 706.18" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M548.89 706.18L663.35 642.72" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M548.89 706.18L385.15 676.57" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M548.89 706.18L504.65 498.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M548.89 706.18L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M711.01 405.85L711.01 405.85" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M711.01 405.85L703.58 514.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M711.01 405.85L835.78 406.8" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M703.58 514.1L703.58 514.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M703.58 514.1L793.04 519.99" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1305.12 -102.1L1305.12 -102.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1305.12 -102.1L1443.24 -89.19" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1305.12 -102.1L1289.58 73.14" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1307.76 512.69L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1307.76 512.69L1290.06 408.45" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1450.34 204.63L1450.34 204.63" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1450.34 204.63L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1450.34 204.63L1575.76 208.34" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1450.34 204.63L1456.88 386.09" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1461.14 541.78L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1461.14 541.78L1391.53 645" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1461.14 541.78L1591.57 534.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L-42.53 527.42" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L43.39 513.27" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L-109.47 695.15" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L69.49 694.37" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L199.42 491.01" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-42.53 527.42L260.47 682" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-109.47 695.15L-109.47 695.15" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-109.47 695.15L69.49 694.37" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-109.47 695.15L43.39 513.27" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-109.47 695.15L260.47 682" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M-109.47 695.15L199.42 491.01" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M43.39 513.27L43.39 513.27" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M69.49 694.37L69.49 694.37" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M69.49 694.37L43.39 513.27" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M69.49 694.37L260.47 682" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M199.42 491.01L199.42 491.01" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M199.42 491.01L43.39 513.27" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M199.42 491.01L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M199.42 491.01L260.47 682" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M199.42 491.01L69.49 694.37" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M260.47 682L260.47 682" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M260.47 682L385.15 676.57" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M260.47 682L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M385.15 676.57L385.15 676.57" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M531.56 409.56L531.56 409.56" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M531.56 409.56L504.65 498.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M531.56 409.56L711.01 405.85" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M531.56 409.56L703.58 514.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M531.56 409.56L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M504.65 498.1L504.65 498.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M504.65 498.1L387.2 557.53" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M504.65 498.1L703.58 514.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M504.65 498.1L663.35 642.72" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M663.35 642.72L663.35 642.72" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M663.35 642.72L703.58 514.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M835.78 406.8L835.78 406.8" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M835.78 406.8L793.04 519.99" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M793.04 519.99L793.04 519.99" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M793.04 519.99L808.11 641.66" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M793.04 519.99L711.01 405.85" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M808.11 641.66L808.11 641.66" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M808.11 641.66L663.35 642.72" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M808.11 641.66L971.2 638.13" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M971.2 638.13L971.2 638.13" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M971.2 638.13L1092.21 685.88" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M971.2 638.13L793.04 519.99" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1150.51 88.81" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1150.87 194.98" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1289.58 73.14" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1305.12 -102.1" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.51 88.81L1151.81 400.6" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.87 194.98L1150.87 194.98" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.87 194.98L1289.58 73.14" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.87 194.98L1151.81 400.6" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.87 194.98L1290.06 408.45" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1150.87 194.98L1450.34 204.63" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1151.81 400.6L1151.81 400.6" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1151.81 400.6L1290.06 408.45" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1151.81 400.6L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1092.21 685.88L1092.21 685.88" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1092.21 685.88L1293.61 689.82" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1289.58 73.14L1289.58 73.14" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1289.58 73.14L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1290.06 408.45L1290.06 408.45" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1290.06 408.45L1456.88 386.09" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1290.06 408.45L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1293.61 689.82" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1391.53 645" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1540.53 665.89" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1293.61 689.82L1290.06 408.45" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1443.24 -89.19L1443.24 -89.19" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1443.24 -89.19L1565.79 -55.9" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1459.15 98.02L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1456.88 386.09L1456.88 386.09" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1456.88 386.09L1579.38 409.42" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1456.88 386.09L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1456.88 386.09L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1391.53 645L1391.53 645" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1391.53 645L1540.53 665.89" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1391.53 645L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1565.79 -55.9L1565.79 -55.9" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1565.79 -55.9L1572.96 59.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1572.96 59.21L1572.96 59.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1572.96 59.21L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1575.76 208.34L1575.76 208.34" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1575.76 208.34L1572.96 59.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1575.76 208.34L1459.15 98.02" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1575.76 208.34L1579.38 409.42" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1575.76 208.34L1456.88 386.09" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1579.38 409.42L1579.38 409.42" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1579.38 409.42L1591.57 534.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1579.38 409.42L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1579.38 409.42L1450.34 204.63" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1591.57 534.21L1591.57 534.21" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1591.57 534.21L1540.53 665.89" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1591.57 534.21L1456.88 386.09" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1591.57 534.21L1391.53 645" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1591.57 534.21L1307.76 512.69" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1540.53 665.89L1540.53 665.89" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <path d="M1540.53 665.89L1461.14 541.78" stroke="hsl(228.5, 77.2%, 51.5%)" strokeWidth="1.5"></path>
        <circle r="25" cx="387.2" cy="557.53" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="548.89" cy="706.18" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="711.01" cy="405.85" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="703.58" cy="514.1" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="1305.12" cy="-102.1" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="1307.76" cy="512.69" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="1450.34" cy="204.63" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="25" cx="1461.14" cy="541.78" fill="url(#SvgjsRadialGradient1001)"></circle>
        <circle r="5" cx="-42.53" cy="527.42" fill="#8b9ad9"></circle>
        <circle r="5" cx="-109.47" cy="695.15" fill="#8b9ad9"></circle>
        <circle r="5" cx="43.39" cy="513.27" fill="#8b9ad9"></circle>
        <circle r="5" cx="69.49" cy="694.37" fill="#8b9ad9"></circle>
        <circle r="5" cx="199.42" cy="491.01" fill="#8b9ad9"></circle>
        <circle r="5" cx="260.47" cy="682" fill="#8b9ad9"></circle>
        <circle r="5" cx="385.15" cy="676.57" fill="#8b9ad9"></circle>
        <circle r="5" cx="531.56" cy="409.56" fill="#8b9ad9"></circle>
        <circle r="5" cx="504.65" cy="498.1" fill="#8b9ad9"></circle>
        <circle r="5" cx="663.35" cy="642.72" fill="#8b9ad9"></circle>
        <circle r="5" cx="835.78" cy="406.8" fill="#8b9ad9"></circle>
        <circle r="5" cx="793.04" cy="519.99" fill="#8b9ad9"></circle>
        <circle r="5" cx="808.11" cy="641.66" fill="#8b9ad9"></circle>
        <circle r="5" cx="971.2" cy="638.13" fill="#8b9ad9"></circle>
        <circle r="5" cx="1150.51" cy="88.81" fill="#8b9ad9"></circle>
        <circle r="5" cx="1150.87" cy="194.98" fill="#8b9ad9"></circle>
        <circle r="5" cx="1151.81" cy="400.6" fill="#8b9ad9"></circle>
        <circle r="5" cx="1092.21" cy="685.88" fill="#8b9ad9"></circle>
        <circle r="5" cx="1289.58" cy="73.14" fill="#8b9ad9"></circle>
        <circle r="5" cx="1290.06" cy="408.45" fill="#8b9ad9"></circle>
        <circle r="5" cx="1293.61" cy="689.82" fill="#8b9ad9"></circle>
        <circle r="5" cx="1443.24" cy="-89.19" fill="#8b9ad9"></circle>
        <circle r="5" cx="1459.15" cy="98.02" fill="#8b9ad9"></circle>
        <circle r="5" cx="1456.88" cy="386.09" fill="#8b9ad9"></circle>
        <circle r="5" cx="1391.53" cy="645" fill="#8b9ad9"></circle>
        <circle r="5" cx="1565.79" cy="-55.9" fill="#8b9ad9"></circle>
        <circle r="5" cx="1572.96" cy="59.21" fill="#8b9ad9"></circle>
        <circle r="5" cx="1575.76" cy="208.34" fill="#8b9ad9"></circle>
        <circle r="5" cx="1579.38" cy="409.42" fill="#8b9ad9"></circle>
        <circle r="5" cx="1591.57" cy="534.21" fill="#8b9ad9"></circle>
        <circle r="5" cx="1540.53" cy="665.89" fill="#8b9ad9"></circle>
    </g>
    <defs>
        <mask id="SvgjsMask1000">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <radialGradient id="SvgjsRadialGradient1001">
            <stop stopColor="#ffffff" offset="0.1"></stop>
            <stop stopColor="#1735b3" offset="0.2"></stop>
            <stop stopColor="rgba(23, 53, 179, 0)" offset="1"></stop>
        </radialGradient>
    </defs>

        </motion.svg>
      </motion.div>
    </div>
  );
}
