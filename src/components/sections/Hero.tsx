"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full pt-8 pb-12 md:pb-16 flex flex-col items-start gap-7">
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 bg-[#f4f4f2] dark:bg-[#14171f] px-3.5 py-1.5 rounded-full border border-[#e2e3e1] dark:border-[#232836] transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-[#ffe25c] shadow-sm"></span>
        <span className="font-mono text-[10px] text-[#1a1c1b] dark:text-[#f1f2f4] tracking-wider uppercase font-medium">
          Based in Malaysia · Available for selected projects
        </span>
      </motion.div>

      {/* Hero Typography */}
      <div className="max-w-3xl flex flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-newsreader text-[34px] sm:text-[42px] md:text-[56px] leading-[1.12] text-[#000000] dark:text-[#ffffff] tracking-tight font-normal transition-colors"
        >
          I build digital products that make work easier.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-newsreader text-[18px] md:text-[20px] leading-relaxed text-[#5e5e5e] dark:text-[#9ea5b3] transition-colors"
        >
          Websites, business systems and applications for businesses and organisations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[14px] md:text-[15px] text-[#444748] dark:text-[#cbd5e1] font-medium transition-colors"
        >
          I build practical digital solutions around the way your business works.
        </motion.p>
      </div>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-3 pt-1"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-6 py-3 rounded-lg hover:bg-[#5e5e5e] dark:hover:bg-[#e2e3e1] transition-colors duration-150 shadow-sm"
        >
          <span className="font-medium">Start a Project</span>
          <span>→</span>
        </a>

        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-[#ffffff] dark:bg-[#14171f] text-[#1a1c1b] dark:text-[#f1f2f4] text-[13px] px-6 py-3 rounded-lg border border-[#e2e3e1] dark:border-[#232836] hover:bg-[#f4f4f2] dark:hover:bg-[#191d26] transition-colors duration-150 shadow-sm"
        >
          <span className="font-medium">View Work</span>
        </a>
      </motion.div>
    </section>
  );
}
