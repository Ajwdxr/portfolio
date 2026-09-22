"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProject {
  id: string;
  tag: string;
  index: string;
  year: string;
  status: string;
  title: string;
  description: string;
  metricTitle: string;
  metricValue: string;
  liveUrl: string;
  tech: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "promptmatrix",
    tag: "SaaS & AI Platform",
    index: "[01]",
    year: "2024",
    status: "Live Deployment",
    title: "PromptMatrix",
    description:
      "Next-generation AI prompt architect and prompt optimization SaaS. Transforms rough creative thoughts into structured, high-fidelity prompts for modern LLMs with real-time token streaming.",
    metricTitle: "Platform Architecture",
    metricValue: "OpenAI API streaming · CRT aesthetic · Instant prompt synthesis · 99.95% uptime",
    liveUrl: "https://promptmatrix.ajwdxr.com",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "CRT Shader", "Supabase"],
  },
  {
    id: "bellybeats",
    tag: "Health & Parenting PWA",
    index: "[02]",
    year: "2024",
    status: "Live Deployment",
    title: "BellyBeats",
    description:
      "A baby kick tracker progressive web application for expectant parents, featuring real-time movement telemetry logging, kick trend analytics, and offline-first service worker sync.",
    metricTitle: "Telemetry & Performance",
    metricValue: "Offline-first PWA · Real-time kick telemetry · 99.99% local availability",
    liveUrl: "https://bellybeats.ajwdxr.com",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Framer Motion", "Service Workers"],
  },
  {
    id: "attendx",
    tag: "Smart Attendance PWA",
    index: "[03]",
    year: "2024",
    status: "Live Deployment",
    title: "AttendX",
    description:
      "Workforce attendance platform featuring biometric facial recognition verification, GPS geolocation check-in fencing, and real-time dashboard tracking.",
    metricTitle: "Security & Verification",
    metricValue: "Biometric Face Recognition · GPS Geofencing · Zero manual check-in fraud",
    liveUrl: "https://attendx.ajwdxr.com",
    tech: ["Next.js", "Tailwind CSS", "Face Recognition", "Geolocation", "PWA"],
  },
  {
    id: "archerlog",
    tag: "Archery Scoring PWA",
    index: "[04]",
    year: "2024",
    status: "Live Deployment",
    title: "ARROWLOG",
    description:
      "A dedicated archery scoring and telemetry tracking web application. Shoot, score, and share practice sessions with real-time arrow hit tracking, round history, and collaborative session sharing.",
    metricTitle: "Community & Sports Telemetry",
    metricValue: "End-by-end scoring · Multi-archer session sharing · Offline-capable PWA",
    liveUrl: "https://archerlog.vercel.app/",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Session Telemetry"],
  },
  {
    id: "e-masjid",
    tag: "Community Portal",
    index: "[05]",
    year: "2024",
    status: "Live Deployment",
    title: "E-Masjid",
    description:
      "Digital community hub for Masjid Al Rahmah Mergong. Features automated prayer time calculations, community announcements, digital library, and online Quran reader.",
    metricTitle: "Reach & Availability",
    metricValue: "Edge deployed on Cloudflare Workers · Sub-100ms global latency · PWA ready",
    liveUrl: "https://e-masjid.taufec.workers.dev",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "PWA"],
  },
  {
    id: "afifazman",
    tag: "Property Consultant Portal",
    index: "[06]",
    year: "2024",
    status: "Live Deployment",
    title: "Afif Azman",
    description:
      "Real estate consultant portal for industrial, commercial, and residential property listings across Johor with interactive property showcases and instant WhatsApp enquiry integration.",
    metricTitle: "Conversion & Lead Capture",
    metricValue: "Direct WhatsApp lead capture · Clean listing UX · Fast responsive load",
    liveUrl: "https://afifazman.com/",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "PHP", "PWA"],
  },
  {
    id: "rembayung",
    tag: "Restaurant Showcase",
    index: "[07]",
    year: "2024",
    status: "Live Deployment",
    title: "Rembayung",
    description:
      "Authentic Malaysian cuisine restaurant showcase for Rembayung by Khairul Aming. Built with dynamic theme engines, culinary menus, and interactive customer journeys.",
    metricTitle: "Visual Experience",
    metricValue: "Dynamic Theme Engine · High visual craft · Fast responsive loading",
    liveUrl: "https://ajwdxr.free.nf/rembayung/",
    tech: ["Tailwind CSS", "JavaScript", "PHP", "Theme Engine"],
  },
];

export function Projects() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-10" id="work">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
          01 / PORTFOLIO
        </span>
        <h2 className="font-newsreader text-[32px] md:text-[36px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
          A few things I've built.
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#444748] dark:text-[#9ea5b3] transition-colors">
          Real projects, real problems, real users across businesses and platforms.
        </p>
      </div>

      {/* Featured Projects Highlight Stack */}
      <div className="flex flex-col gap-8 md:gap-10">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-[#ffffff] dark:bg-[#14171f] rounded-xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] border border-[#e2e3e1] dark:border-[#232836] flex flex-col gap-6 hover:bg-[#f4f4f2]/50 dark:hover:bg-[#191d26]/60 transition-colors duration-150"
          >
            {/* Meta header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] bg-[#eeeeec] dark:bg-[#1f2430] px-2.5 py-1 rounded text-[#1a1c1b] dark:text-[#f1f2f4] font-medium uppercase transition-colors">
                  {project.tag}
                </span>
                <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3]">
                  {project.index} · {project.year}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3]">
                {project.status}
              </span>
            </div>

            {/* Content & Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#000000] dark:text-[#ffffff] tracking-tight transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#444748] dark:text-[#cbd5e1] transition-colors">
                  {project.description}
                </p>

                <div className="bg-[#f4f4f2] dark:bg-[#191d26] p-3.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">
                    {project.metricTitle}
                  </span>
                  <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                    {project.metricValue}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    className="inline-flex items-center gap-1.5 text-[13px] text-[#000000] dark:text-[#ffffff] font-medium underline underline-offset-4 hover:text-[#5e5e5e] dark:hover:text-[#9ea5b3] transition-colors"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    className="inline-flex items-center gap-1 text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors"
                    href="#contact"
                  >
                    <span>Discuss Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Tech Spec & Deployment Info */}
              <div className="lg:col-span-5 bg-[#f4f4f2] dark:bg-[#191d26] p-6 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col justify-center gap-4 transition-colors">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#ffffff] dark:bg-[#14171f] border border-[#e2e3e1] dark:border-[#272d3d] rounded text-[#1a1c1b] dark:text-[#f1f2f4] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e2e3e1] dark:border-[#272d3d] flex items-center justify-between transition-colors">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Production URL</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] hover:underline flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{project.liveUrl.replace("https://", "")}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
