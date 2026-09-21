"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-8" id="about">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
          04 / BACKGROUND
        </span>
        <h2 className="font-newsreader text-[32px] md:text-[36px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
          Hi, I'm Ajwad.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Story Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 sm:p-8 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] flex flex-col gap-4 transition-colors"
          >
            <p className="font-newsreader text-[19px] leading-relaxed text-[#1a1c1b] dark:text-[#f1f2f4] transition-colors">
              I'm a software developer based in Malaysia, building websites, applications and business systems.
            </p>
            <p className="font-newsreader text-[19px] leading-relaxed text-[#1a1c1b] dark:text-[#f1f2f4] transition-colors">
              I enjoy taking complicated or manual processes and turning them into something simpler to use.
            </p>

            <div className="bg-[#f4f4f2] dark:bg-[#191d26] p-4 sm:p-5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] my-1 transition-colors">
              <p className="font-newsreader italic text-[20px] text-[#000000] dark:text-[#ffffff] leading-snug transition-colors">
                “Is there a better way to do this?”
              </p>
              <span className="text-[13px] text-[#444748] dark:text-[#cbd5e1] mt-1.5 block transition-colors">
                Most of the things I build start with this simple question.
              </span>
            </div>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#5e5e5e] dark:text-[#9ea5b3] transition-colors">
              Rather than introducing unnecessary layers of technology, I work directly with clients to understand their daily operational bottlenecks and build software tailored to their exact requirements.
            </p>
          </motion.div>

          {/* Off-screen interests */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 sm:p-8 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] flex flex-col gap-4 transition-colors"
          >
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              When I'm not coding
            </span>
            <p className="text-[14px] md:text-[15px] text-[#1a1c1b] dark:text-[#f1f2f4] transition-colors">
              Off-screen disciplines keep my thinking grounded and deliberate:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                  Kamen Rider Collecting
                </span>
                <span className="text-[13px] text-[#5e5e5e] dark:text-[#cbd5e1] leading-snug transition-colors">
                  Vintage Showa &amp; Heisei figures and driver belt engineering.
                </span>
              </div>

              <div className="p-3.5 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                  Traditional Archery
                </span>
                <span className="text-[13px] text-[#5e5e5e] dark:text-[#cbd5e1] leading-snug transition-colors">
                  Instinctive shooting practice focused on stillness and patience.
                </span>
              </div>

              <div className="p-3.5 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                  Hardware Tinkering
                </span>
                <span className="text-[13px] text-[#5e5e5e] dark:text-[#cbd5e1] leading-snug transition-colors">
                  Custom microcontrollers, home automation, and sensor benches.
                </span>
              </div>

              <div className="p-3.5 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                  Local Coffee Discovery
                </span>
                <span className="text-[13px] text-[#5e5e5e] dark:text-[#cbd5e1] leading-snug transition-colors">
                  Exploring independent roasters across the Klang Valley and beyond.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meta Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] flex flex-col gap-5 transition-colors"
          >
            <div className="flex items-center gap-3 pb-2 border-b border-[#eeeeec] dark:border-[#272d3d]">
              <div className="w-10 h-10 rounded-full bg-[#000000] dark:bg-[#ffffff] flex items-center justify-center text-white dark:text-[#0c0e12] font-mono text-xs font-semibold transition-colors">
                AJ
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[17px] font-semibold text-[#000000] dark:text-[#ffffff] leading-tight transition-colors">
                  Ajwad
                </span>
                <span className="font-mono text-[11px] text-[#5e5e5e] dark:text-[#9ea5b3]">
                  Software Craftsman
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-baseline py-2 bg-[#f4f4f2]/70 dark:bg-[#191d26] px-3 rounded border border-[#eeeeec] dark:border-[#272d3d] transition-colors">
                <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Location</span>
                <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">Malaysia (UTC+8)</span>
              </div>

              <div className="flex justify-between items-baseline py-2 bg-[#f4f4f2]/70 dark:bg-[#191d26] px-3 rounded border border-[#eeeeec] dark:border-[#272d3d] transition-colors">
                <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Role</span>
                <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">Independent Developer</span>
              </div>

              <div className="flex justify-between items-baseline py-2 bg-[#f4f4f2]/70 dark:bg-[#191d26] px-3 rounded border border-[#eeeeec] dark:border-[#272d3d] transition-colors">
                <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Specialisation</span>
                <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">Web · Systems · Mobile</span>
              </div>

              <div className="flex justify-between items-baseline py-2 bg-[#f4f4f2]/70 dark:bg-[#191d26] px-3 rounded border border-[#eeeeec] dark:border-[#272d3d] transition-colors">
                <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Availability</span>
                <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffe25c]"></span>
                  Freelance &amp; Contract
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f4f4f2] dark:bg-[#191d26] p-6 rounded-xl border border-[#e2e3e1] dark:border-[#272d3d] shadow-sm flex flex-col gap-2 transition-colors"
          >
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              Philosophy
            </span>
            <p className="text-[13px] text-[#444748] dark:text-[#cbd5e1] leading-relaxed transition-colors">
              I don't deliver black boxes. You receive cleanly documented, standard-compliant code bases that your internal team can operate and evolve without lock-in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
