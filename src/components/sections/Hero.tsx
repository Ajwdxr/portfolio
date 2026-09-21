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

      {/* Browser Frame Hero Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="w-full mt-4 rounded-xl bg-[#ffffff] dark:bg-[#14171f] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-[#e2e3e1] dark:border-[#232836] overflow-hidden transition-colors"
      >
        {/* Browser Top Bar */}
        <div className="w-full bg-[#f4f4f2] dark:bg-[#191d26] px-4 py-3 flex items-center justify-between border-b border-[#e2e3e1] dark:border-[#232836]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dadad8] dark:bg-[#333b4d] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dadad8] dark:bg-[#333b4d] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dadad8] dark:bg-[#333b4d] inline-block"></span>
          </div>

          <div className="px-4 py-1 bg-[#ffffff] dark:bg-[#14171f] rounded border border-[#e2e3e1] dark:border-[#272d3d] text-[#444748] dark:text-[#9ea5b3] font-mono text-[10px] text-center min-w-[240px] sm:min-w-[280px] shadow-sm">
            promptmatrix.ajwdxr.com — production live preview
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3] tracking-wider">HTTPS</span>
          </div>
        </div>

        {/* Mockup Viewport */}
        <div className="w-full p-4 md:p-6 bg-[#ffffff] dark:bg-[#14171f]">
          <div className="w-full aspect-[16/9] max-h-[460px] bg-[#0d121f] rounded-lg border border-[#232d42] p-6 flex flex-col justify-between overflow-hidden relative shadow-inner">
            {/* Terminal Top Accent */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 font-medium tracking-wider">PROMPTMATRIX // AI CORE ACTIVE</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">MODEL: GPT-4o / CLAUDE 3.5</span>
            </div>

            {/* Simulated Live UI Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto">
              <div className="md:col-span-6 bg-white/[0.04] p-4 rounded-lg border border-white/10 flex flex-col gap-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Input: Raw Prompt Stream</span>
                <p className="font-mono text-xs text-slate-200">
                  &gt; Design an enterprise role-based auth flow with zero manual reconciliation bottlenecks...
                </p>
              </div>
              <div className="md:col-span-6 bg-sky-950/30 p-4 rounded-lg border border-sky-500/20 flex flex-col gap-2">
                <span className="font-mono text-[10px] text-sky-300 uppercase">Synthesized High-Fidelity Prompt</span>
                <p className="font-mono text-xs text-sky-200">
                  [SYSTEM ARCHITECT]: Execute RBAC security matrix with automated token rotation, strict schema validation, and audit trail telemetry.
                </p>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono">
              <span className="text-slate-400">Latency: 28ms · Tokens/sec: 84 · Status: Online</span>
              <a 
                href="https://promptmatrix.ajwdxr.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 hover:text-sky-300 underline font-medium"
              >
                Launch App →
              </a>
            </div>
          </div>
        </div>

        {/* Browser Caption Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#f4f4f2] dark:bg-[#191d26] border-t border-[#e2e3e1] dark:border-[#232836] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] font-mono">
          <span className="text-[#444748] dark:text-[#9ea5b3]">
            PromptMatrix — AI Prompt Architect &amp; Optimization SaaS
          </span>
          <span className="text-[#000000] dark:text-[#ffffff] font-medium whitespace-nowrap">
            Production v2.1.0 · 99.95% Uptime
          </span>
        </div>
      </motion.div>
    </section>
  );
}
