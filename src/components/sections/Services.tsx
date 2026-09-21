"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Business Websites",
    description:
      "Professional websites that clearly communicate what your business does and make it easy for customers to get in touch. Fast, search-optimised, and easy to maintain.",
    tags: ["Astro", "Tailwind", "SEO Architecture"],
  },
  {
    num: "02",
    title: "Business Systems",
    description:
      "Custom systems for managing data, workflows, users and internal operations. Built around the specific rhythm and hierarchy of your business, not rigid off-the-shelf templates.",
    tags: ["Internal Portals", "Database Modeling", "Role Access (RBAC)"],
  },
  {
    num: "03",
    title: "Web Applications",
    description:
      "Interactive web applications built around your specific business requirements. Capable of handling complex client-side interactions, high-throughput transactions, and deep third-party integrations.",
    tags: ["Vue / React", "Node / Laravel", "Payment Gateways"],
  },
  {
    num: "04",
    title: "Mobile Apps",
    description:
      "Mobile applications and PWAs that give your customers or team access to the services they need anywhere, anytime. Designed for tactile reliability and low-connectivity resilience.",
    tags: ["Flutter", "Offline-first Sync", "PWA"],
  },
];

export function Services() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-8" id="services">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
          02 / EXPERTISE
        </span>
        <h2 className="font-newsreader text-[32px] md:text-[36px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
          What I can help you build.
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((item, index) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 sm:p-8 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] border border-[#e2e3e1] dark:border-[#232836] flex flex-col justify-between gap-6 hover:bg-[#f4f4f2] dark:hover:bg-[#191d26] transition-colors duration-150"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[12px] text-[#747878] dark:text-[#9ea5b3]">
                {item.num}
              </span>
              <h3 className="font-sans text-[18px] md:text-[20px] font-semibold text-[#000000] dark:text-[#ffffff] transition-colors">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#444748] dark:text-[#cbd5e1] transition-colors">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2.5 py-1 bg-[#eeeeec] dark:bg-[#1f2430] rounded text-[#5e5e5e] dark:text-[#9ea5b3] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#f4f4f2] dark:bg-[#191d26] p-6 sm:p-8 rounded-xl border border-[#e2e3e1] dark:border-[#272d3d] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2 transition-colors"
      >
        <div className="flex flex-col gap-1 max-w-xl">
          <h4 className="font-sans text-[17px] md:text-[18px] font-semibold text-[#000000] dark:text-[#ffffff] transition-colors">
            Not sure what you need?
          </h4>
          <p className="text-[14px] text-[#444748] dark:text-[#cbd5e1] transition-colors">
            That's okay. Tell me what you're trying to solve and we'll figure out the right approach together.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-1.5 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-5 py-2.5 rounded-lg hover:bg-[#5e5e5e] dark:hover:bg-[#e2e3e1] transition-colors duration-150 whitespace-nowrap shadow-sm"
          href="#contact"
        >
          <span className="font-medium">Talk About Your Project</span>
          <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}
