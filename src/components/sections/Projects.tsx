"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface ArchiveProject {
  id: string;
  title: string;
  category: "saas" | "webapp" | "website";
  categoryLabel: string;
  type: string;
  description: string;
  tech: string[];
  liveUrl: string;
  year: string;
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
    id: "rembayung",
    tag: "Restaurant Showcase",
    index: "[06]",
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

const allProjects: ArchiveProject[] = [
  {
    id: "PRJ-001",
    title: "PromptMatrix",
    category: "saas",
    categoryLabel: "SaaS & AI",
    type: "AI SaaS Platform",
    description: "AI prompt architect and prompt optimization SaaS with CRT shader visual aesthetics and instant LLM synthesis.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
    liveUrl: "https://promptmatrix.ajwdxr.com",
    year: "2024",
  },
  {
    id: "PRJ-002",
    title: "BellyBeats",
    category: "webapp",
    categoryLabel: "Web App & PWA",
    type: "Parenting Tracker PWA",
    description: "Baby kick tracker with real-time movement logging, trend analytics, and offline service worker sync.",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://bellybeats.ajwdxr.com",
    year: "2024",
  },
  {
    id: "PRJ-003",
    title: "AttendX",
    category: "webapp",
    categoryLabel: "Web App & PWA",
    type: "Attendance System",
    description: "Smart attendance platform with biometric facial recognition and GPS geolocation check-in fencing.",
    tech: ["Next.js", "Tailwind CSS", "Face Recognition", "Geolocation", "PWA"],
    liveUrl: "https://attendx.ajwdxr.com",
    year: "2024",
  },
  {
    id: "PRJ-004",
    title: "ARROWLOG",
    category: "webapp",
    categoryLabel: "Web App & PWA",
    type: "Archery Scoring & Session Tracker",
    description: "Shoot. Score. Share. Real-time archery session scoring, arrow tracking, and shared practice logs for archery communities.",
    tech: ["Next.js", "Tailwind CSS", "PWA", "Session Sync"],
    liveUrl: "https://archerlog.vercel.app/",
    year: "2024",
  },
  {
    id: "PRJ-005",
    title: "E-Masjid",
    category: "webapp",
    categoryLabel: "Web App & PWA",
    type: "Community Portal",
    description: "Digital hub for Masjid Al Rahmah Mergong. Automated prayer times, announcements, and digital Quran.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "PWA"],
    liveUrl: "https://e-masjid.taufec.workers.dev",
    year: "2024",
  },
  {
    id: "PRJ-006",
    title: "KafeKiro",
    category: "website",
    categoryLabel: "Websites",
    type: "Artisan Coffee Landing",
    description: "Artisan coffee shop landing page featuring handcrafted drink menus, photo galleries, and booking modals.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "Vite"],
    liveUrl: "https://kafekiro.vercel.app",
    year: "2024",
  },
  {
    id: "PRJ-007",
    title: "Rembayung",
    category: "website",
    categoryLabel: "Websites",
    type: "Restaurant Showcase",
    description: "Malaysian cuisine showcase for Rembayung by Khairul Aming with dynamic theme switching.",
    tech: ["Tailwind CSS", "JavaScript", "PHP", "Theme Engine"],
    liveUrl: "https://ajwdxr.free.nf/rembayung/",
    year: "2024",
  },
  {
    id: "PRJ-008",
    title: "Afif Azman",
    category: "website",
    categoryLabel: "Websites",
    type: "Property Consultant",
    description: "Real estate consultant portal for industrial, commercial, and residential listings in Johor with WhatsApp consultation.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "PHP", "PWA"],
    liveUrl: "https://afifazman.com/",
    year: "2024",
  },
];

type CategoryFilter = "all" | "saas" | "webapp" | "website";

export function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredArchive = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [filter]);

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

      {/* Complete Project Archive Header & Filters */}
      <div className="mt-8 pt-8 border-t border-[#e2e3e1] dark:border-[#232836] flex flex-col gap-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              Complete Archive
            </span>
            <h3 className="font-newsreader text-[26px] md:text-[30px] text-[#000000] dark:text-[#ffffff] font-normal transition-colors">
              All deployed projects &amp; websites
            </h3>
            <p className="text-[13px] text-[#444748] dark:text-[#9ea5b3] transition-colors">
              Browse through my full list of SaaS products, mobile PWAs, and client websites.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All Work" },
              { id: "saas", label: "SaaS & AI" },
              { id: "webapp", label: "Web Apps & PWAs" },
              { id: "website", label: "Websites" },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as CategoryFilter)}
                  className={`px-3 py-1 rounded-full font-mono text-[11px] transition-colors border ${
                    isActive
                      ? "bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] border-[#000000] dark:border-[#ffffff]"
                      : "bg-[#ffffff] dark:bg-[#14171f] text-[#444748] dark:text-[#9ea5b3] border-[#e2e3e1] dark:border-[#232836] hover:bg-[#f4f4f2] dark:hover:bg-[#191d26]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Archive Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredArchive.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-[#ffffff] dark:bg-[#14171f] p-5 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_1px_6px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-4 hover:border-[#1a1c1b]/30 dark:hover:border-white/20 transition-all group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">
                      {item.categoryLabel} · {item.year}
                    </span>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded bg-[#f4f4f2] dark:bg-[#191d26] text-[#444748] dark:text-[#9ea5b3] hover:text-[#000000] dark:hover:text-[#ffffff] hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-colors"
                      title="Open Live Deployment"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="font-sans text-[16px] font-semibold text-[#000000] dark:text-[#ffffff] group-hover:text-[#5e5e5e] dark:group-hover:text-[#cbd5e1] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-[13px] text-[#444748] dark:text-[#9ea5b3] leading-relaxed line-clamp-2 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#eeeeec] dark:border-[#272d3d] transition-colors">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 bg-[#f4f4f2] dark:bg-[#191d26] rounded text-[#5e5e5e] dark:text-[#9ea5b3] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
