"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell me what's going on.",
    description:
      "You explain the problem, idea or process you are grappling with. No tech jargon required.",
  },
  {
    num: "02",
    title: "We figure out what makes sense.",
    description:
      "I help turn the idea into a practical, lean scope with fixed estimates and unambiguous milestones.",
  },
  {
    num: "03",
    title: "I build it.",
    description:
      "Design, development, and direct weekly staging previews. You inspect working code at every stage.",
  },
  {
    num: "04",
    title: "You use it.",
    description:
      "Smooth deployment, team onboarding, production monitoring, and iterative post-launch fine tuning.",
  },
];

export function Process() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-8" id="process">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
          03 / METHODOLOGY
        </span>
        <h2 className="font-newsreader text-[32px] md:text-[36px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
          How we work
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#444748] dark:text-[#9ea5b3] transition-colors">
          Simple, transparent, and direct.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)] flex flex-col gap-4 transition-colors"
          >
            <span className="font-mono text-[13px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
              {step.num}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans text-[17px] font-semibold text-[#000000] dark:text-[#ffffff] leading-snug transition-colors">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#444748] dark:text-[#cbd5e1] leading-relaxed transition-colors">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
