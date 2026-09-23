"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
} from "lucide-react";

export type ProjectCategory = "all" | "saas" | "pwa" | "client";

export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  tag: string;
  category: "saas" | "pwa" | "client";
  isFeatured?: boolean;
  isDemo?: boolean;
  index: string;
  year: string;
  status: string;
  title: string;
  description: string;
  metricTitle: string;
  metricValue: string;
  liveUrl: string;
  tech: string[];
  screenshots: ProjectScreenshot[];
}

const allProjects: ProjectItem[] = [
  {
    id: "kiraloop",
    tag: "Business Suite & Invoicing SaaS",
    category: "saas",
    isFeatured: true,
    index: "[01]",
    year: "2024",
    status: "Live Deployment",
    title: "KiraLoop",
    description:
      "End-to-end business document workflow SaaS tailored for Malaysian freelancers and SMEs. Consolidates proposals (SOW), quotations, tax invoices, and automated receipts into one seamless flow with instant FPX checkout via Bayarcash without recurring subscription fees.",
    metricTitle: "Financial Workflow & Checkout",
    metricValue: "Complete 4-in-1 document cycle · FPX Payment gateway integration · Instant WhatsApp delivery",
    liveUrl: "https://kiraloop.ajwdxr.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Bayarcash FPX", "Supabase"],
    screenshots: [
      { url: "/projects/kiraloop/1.png", caption: "Hero & Document Suite" },
      { url: "/projects/kiraloop/2.png", caption: "Quotation & Invoice Workflow" },
      { url: "/projects/kiraloop/3.png", caption: "Mobile Checkout Experience" },
    ],
  },
  {
    id: "qrgenz",
    tag: "Next-Gen QR & Dynamic Link SaaS",
    category: "saas",
    isFeatured: true,
    index: "[02]",
    year: "2024",
    status: "Live Deployment",
    title: "QR GenZ",
    description:
      "Next-gen QR code generator and dynamic QR manager built with modern cyber aesthetic. Offers custom styling, dot patterns, SVG/PNG export, existing QR image decoding, dynamic destination routing, and real-time scan telemetry dashboard.",
    metricTitle: "Dynamic Routing & Telemetry",
    metricValue: "Dynamic URL redirection · Scan telemetry · Vector SVG & PNG export · 99.9% availability",
    liveUrl: "https://qrgenz.ajwdxr.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    screenshots: [
      { url: "/projects/qrgenz/1.png", caption: "Generator Studio & Patterns" },
      { url: "/projects/qrgenz/2.png", caption: "Dynamic Routing Dashboard" },
      { url: "/projects/qrgenz/3.png", caption: "Mobile Responsive Scanner" },
    ],
  },
  {
    id: "promptmatrix",
    tag: "SaaS & AI Platform",
    category: "saas",
    isFeatured: true,
    index: "[03]",
    year: "2024",
    status: "Live Deployment",
    title: "PromptMatrix",
    description:
      "Next-generation AI prompt architect and prompt optimization SaaS. Transforms rough creative thoughts into structured, high-fidelity prompts for modern LLMs with real-time token streaming and retro-futuristic CRT aesthetic.",
    metricTitle: "Platform Architecture",
    metricValue: "OpenAI API streaming · CRT aesthetic · Instant prompt synthesis · 99.95% uptime",
    liveUrl: "https://promptmatrix.ajwdxr.com",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "CRT Shader", "Supabase"],
    screenshots: [
      { url: "/projects/promptmatrix/1.png", caption: "Terminal Architecture & CRT" },
      { url: "/projects/promptmatrix/2.png", caption: "AI Prompt Optimization Studio" },
      { url: "/projects/promptmatrix/3.png", caption: "Mobile Synthesis Interface" },
    ],
  },
  {
    id: "bellybeats",
    tag: "Health & Parenting PWA",
    category: "pwa",
    isFeatured: true,
    index: "[04]",
    year: "2024",
    status: "Live Deployment",
    title: "BellyBeats",
    description:
      "A baby kick tracker progressive web application for expectant parents, featuring real-time movement telemetry logging, kick trend analytics, and offline-first service worker sync.",
    metricTitle: "Telemetry & Performance",
    metricValue: "Offline-first PWA · Real-time kick telemetry · 99.99% local availability",
    liveUrl: "https://bellybeats.ajwdxr.com",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Framer Motion", "Service Workers"],
    screenshots: [
      { url: "/projects/bellybeats/1.png", caption: "Telemetry Dashboard & Counter" },
      { url: "/projects/bellybeats/2.png", caption: "Kick Movement Analytics" },
      { url: "/projects/bellybeats/3.png", caption: "Mobile PWA Experience" },
    ],
  },
  {
    id: "attendx",
    tag: "Smart Attendance PWA",
    category: "pwa",
    isFeatured: false,
    index: "[05]",
    year: "2024",
    status: "Live Deployment",
    title: "AttendX",
    description:
      "Workforce attendance platform featuring biometric facial recognition verification, GPS geolocation check-in fencing, and real-time dashboard tracking.",
    metricTitle: "Security & Verification",
    metricValue: "Biometric Face Recognition · GPS Geofencing · Zero manual check-in fraud",
    liveUrl: "https://attendx.ajwdxr.com",
    tech: ["Next.js", "Tailwind CSS", "Face Recognition", "Geolocation", "PWA"],
    screenshots: [
      { url: "/projects/attendx/1.png", caption: "Attendance Portal Overview" },
      { url: "/projects/attendx/2.png", caption: "Biometric Face Verification" },
      { url: "/projects/attendx/3.png", caption: "Mobile Check-in & Geofence" },
    ],
  },
  {
    id: "archerlog",
    tag: "Archery Scoring PWA",
    category: "pwa",
    isFeatured: false,
    index: "[06]",
    year: "2024",
    status: "Live Deployment",
    title: "ARROWLOG",
    description:
      "A dedicated archery scoring and telemetry tracking web application. Shoot, score, and share practice sessions with real-time arrow hit tracking, round history, and collaborative session sharing.",
    metricTitle: "Community & Sports Telemetry",
    metricValue: "End-by-end scoring · Multi-archer session sharing · Offline-capable PWA",
    liveUrl: "https://archerlog.vercel.app/",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Session Telemetry"],
    screenshots: [
      { url: "/projects/archerlog/1.png", caption: "Arrow Scoring & Target Telemetry" },
      { url: "/projects/archerlog/2.png", caption: "Session Summary & Round History" },
      { url: "/projects/archerlog/3.png", caption: "Mobile Practice Logger" },
    ],
  },
  {
    id: "bondacare",
    tag: "Postpartum Care Platform",
    category: "pwa",
    isFeatured: false,
    isDemo: true,
    index: "[07]",
    year: "2024",
    status: "Interactive Demo",
    title: "BondaCare",
    description:
      "Maternal healthcare concierge web application connecting new mothers with certified postpartum confinement specialists, tailored wellness recovery packages, and postnatal care scheduling.",
    metricTitle: "Maternal Care Concierge",
    metricValue: "Specialist booking workflow · Custom recovery packages · Responsive care UI",
    liveUrl: "https://cl-app-seven.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    screenshots: [
      { url: "/projects/bondacare/1.png", caption: "Maternal Concierge Platform" },
      { url: "/projects/bondacare/2.png", caption: "Postnatal Confinement Packages" },
      { url: "/projects/bondacare/3.png", caption: "Mobile Care Specialist Booking" },
    ],
  },
  {
    id: "ccportfolio",
    tag: "Creator Media Kit & Showcase",
    category: "client",
    isFeatured: false,
    isDemo: true,
    index: "[08]",
    year: "2024",
    status: "Interactive Demo",
    title: "Arif Danial",
    description:
      "Official media kit and digital portfolio for Malaysian content creator and storyteller Arif Danial. Showcases interactive audience analytics, brand collaboration case studies, dynamic rate cards, and instant engagement enquiries.",
    metricTitle: "Creator Analytics & Editorial",
    metricValue: "Dynamic audience demographics · Rate card engine · High-craft editorial typography",
    liveUrl: "https://ccportfolio-sigma.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    screenshots: [
      { url: "/projects/ccportfolio/1.png", caption: "Creator Showcase & Media Kit" },
      { url: "/projects/ccportfolio/2.png", caption: "Audience Demographics & Case Studies" },
      { url: "/projects/ccportfolio/3.png", caption: "Mobile Rate Card & Enquiries" },
    ],
  },
  {
    id: "e-masjid",
    tag: "Community Portal",
    category: "client",
    isFeatured: false,
    index: "[09]",
    year: "2024",
    status: "Live Deployment",
    title: "E-Masjid",
    description:
      "Digital community hub for Masjid Al Rahmah Mergong. Features automated prayer time calculations, community announcements, digital library, and online Quran reader.",
    metricTitle: "Reach & Availability",
    metricValue: "Edge deployed on Cloudflare Workers · Sub-100ms global latency · PWA ready",
    liveUrl: "https://e-masjid.taufec.workers.dev",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "PWA"],
    screenshots: [
      { url: "/projects/e-masjid/1.png", caption: "Digital Community Portal" },
      { url: "/projects/e-masjid/2.png", caption: "Prayer Times & Digital Library" },
      { url: "/projects/e-masjid/3.png", caption: "Mobile Community Hub" },
    ],
  },
  {
    id: "afifazman",
    tag: "Property Consultant Portal",
    category: "client",
    isFeatured: false,
    index: "[10]",
    year: "2024",
    status: "Live Deployment",
    title: "Afif Azman",
    description:
      "Real estate consultant portal for industrial, commercial, and residential property listings across Johor with interactive property showcases and instant WhatsApp enquiry integration.",
    metricTitle: "Conversion & Lead Capture",
    metricValue: "Direct WhatsApp lead capture · Clean listing UX · Fast responsive load",
    liveUrl: "https://afifazman.com/",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "PHP", "PWA"],
    screenshots: [
      { url: "/projects/afifazman/1.png", caption: "Property Consultant Showcase" },
      { url: "/projects/afifazman/2.png", caption: "Commercial & Industrial Listings" },
      { url: "/projects/afifazman/3.png", caption: "Mobile Listing Experience" },
    ],
  },
];

const categoryTabs: { key: ProjectCategory; label: string; count: number }[] = [
  { key: "all", label: "All Projects", count: allProjects.length },
  {
    key: "saas",
    label: "SaaS & AI Platforms",
    count: allProjects.filter((p) => p.category === "saas").length,
  },
  {
    key: "pwa",
    label: "Web & PWA Apps",
    count: allProjects.filter((p) => p.category === "pwa").length,
  },
  {
    key: "client",
    label: "Client & Showcases",
    count: allProjects.filter((p) => p.category === "client").length,
  },
];

// Interactive Visual Showcase inside Featured Card
function ProjectFeaturedVisual({
  project,
  onOpenLightbox,
}: {
  project: ProjectItem;
  onOpenLightbox: (index: number) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeScreenshot = project.screenshots[activeIdx] || project.screenshots[0];

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Mockup Browser Window Frame */}
      <div className="overflow-hidden rounded-xl border border-[#e2e3e1] dark:border-[#272d3d] bg-[#f8f9fa] dark:bg-[#101319] shadow-sm">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#f0f1f0] dark:bg-[#141720] border-b border-[#e2e3e1] dark:border-[#232836]">
          {/* Window Traffic Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90" />
          </div>

          {/* Simulated URL Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ffffff] dark:bg-[#0c0e12] border border-[#e2e3e1] dark:border-[#272d3d] text-[11px] font-mono text-[#5e5e5e] dark:text-[#9ea5b3] max-w-[200px] sm:max-w-xs truncate shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="truncate">
              {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
            </span>
          </div>

          {/* Quick Expand Button */}
          <button
            type="button"
            onClick={() => onOpenLightbox(activeIdx)}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5e5e5e] dark:text-[#9ea5b3] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            title="Open in Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Screenshot Viewport */}
        <div
          onClick={() => onOpenLightbox(activeIdx)}
          className="relative aspect-[16/10] bg-[#0c0e12] overflow-hidden cursor-zoom-in group/viewport"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <img
                src={activeScreenshot.url}
                alt={`${project.title} - ${activeScreenshot.caption}`}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/viewport:scale-[1.015]"
                loading="lazy"
              />
              {/* Subtle hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover/viewport:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3.5 text-white">
                <span className="text-[12px] font-mono drop-shadow font-medium">
                  {activeScreenshot.caption}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
                  <Maximize2 className="w-3 h-3" /> Zoom
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3-View Thumbnail Switcher */}
      <div className="grid grid-cols-3 gap-2">
        {project.screenshots.map((s, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2 p-1.5 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? "border-[#000000] dark:border-[#ffffff] bg-[#ffffff] dark:bg-[#1a1e28] shadow-xs"
                  : "border-[#e2e3e1] dark:border-[#232836] bg-[#f4f4f2]/70 dark:bg-[#141720]/60 hover:bg-[#ffffff] dark:hover:bg-[#191d26] opacity-80 hover:opacity-100"
              }`}
            >
              <div className="w-9 h-6 sm:w-11 sm:h-7 rounded overflow-hidden shrink-0 border border-black/10 dark:border-white/10 bg-black">
                <img
                  src={s.url}
                  alt={s.caption}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[9px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
                  0{idx + 1}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#1a1c1b] dark:text-[#f1f2f4] truncate font-medium">
                  {s.caption.split(" ")[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Lightbox Modal for Fullscreen Exploration
function ProjectLightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: ProjectItem;
  initialIndex: number;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(initialIndex);
  const count = project.screenshots.length;

  const prev = useCallback(() => {
    setPhotoIndex((prevIdx) => (prevIdx - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setPhotoIndex((prevIdx) => (prevIdx + 1) % count);
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, prev, next]);

  const current = project.screenshots[photoIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl max-h-[92vh] bg-[#0c0e12] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#12161f]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] bg-white/10 text-white px-2.5 py-1 rounded">
              {project.index} {project.title}
            </span>
            <span className="text-white/60 text-[13px] font-mono hidden sm:inline">
              — {current.caption}
            </span>
            <span className="font-mono text-[11px] text-white/40">
              ({photoIndex + 1}/{count})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-mono text-white/80 hover:text-white px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-hidden min-h-[350px] sm:min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={photoIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full max-h-[72vh]"
            >
              <img
                src={current.url}
                alt={`${project.title} - ${current.caption}`}
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            title="Previous (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            title="Next (Right arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom thumbnail navigator */}
        <div className="flex items-center justify-center gap-3 px-4 py-3 bg-[#12161f] border-t border-white/10">
          {project.screenshots.map((s, idx) => {
            const isActive = idx === photoIndex;
            return (
              <button
                key={idx}
                onClick={() => setPhotoIndex(idx)}
                className={`relative w-16 h-10 sm:w-20 sm:h-12 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                  isActive ? "border-white scale-105 shadow-md" : "border-white/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={s.url}
                  alt={s.caption}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [lightbox, setLightbox] = useState<{ project: ProjectItem; index: number } | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  // In "all" mode, split into featured highlights and compact secondary works
  const featuredStack =
    activeTab === "all"
      ? allProjects.filter((p) => p.isFeatured)
      : filteredProjects;

  const notableSecondary =
    activeTab === "all" ? allProjects.filter((p) => !p.isFeatured) : [];

  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-10" id="work">
      {/* Section Header */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
            01 / PORTFOLIO
          </span>
          <h2 className="font-newsreader text-[32px] md:text-[38px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
            A few things I've built.
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#444748] dark:text-[#9ea5b3] transition-colors max-w-2xl">
            Real products, real problems, real users across SaaS platforms, progressive web apps, and bespoke client systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 text-[12px] font-mono px-3.5 py-1.5 rounded-full transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? "bg-[#000000] text-white dark:bg-[#ffffff] dark:text-[#0c0e12] border-[#000000] dark:border-[#ffffff] shadow-sm font-semibold"
                    : "bg-[#ffffff] dark:bg-[#14171f] text-[#5e5e5e] dark:text-[#9ea5b3] border-[#e2e3e1] dark:border-[#232836] hover:bg-[#f4f4f2] dark:hover:bg-[#191d26] hover:text-[#000000] dark:hover:text-[#ffffff]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white dark:bg-black/15 dark:text-[#0c0e12]"
                      : "bg-[#eeeeec] dark:bg-[#1f2430] text-[#747878] dark:text-[#9ea5b3]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured / Active Projects Highlight Stack */}
      <div className="flex flex-col gap-8 md:gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8 md:gap-10"
          >
            {featuredStack.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-[#ffffff] dark:bg-[#14171f] rounded-xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] border border-[#e2e3e1] dark:border-[#232836] flex flex-col gap-6 hover:bg-[#f4f4f2]/40 dark:hover:bg-[#191d26]/50 transition-colors duration-150"
              >
                {/* Meta header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] bg-[#eeeeec] dark:bg-[#1f2430] px-2.5 py-1 rounded text-[#1a1c1b] dark:text-[#f1f2f4] font-medium uppercase transition-colors">
                      {project.tag}
                    </span>
                    <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3]">
                      {project.index} · {project.year}
                    </span>
                    {project.isFeatured && activeTab === "all" && (
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded uppercase font-semibold">
                        <Sparkles className="w-2.5 h-2.5" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        project.isDemo ? "bg-amber-400" : "bg-emerald-500"
                      }`}
                    />
                    <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content & Visual Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left Column: Details & Tech Specifications */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#000000] dark:text-[#ffffff] tracking-tight transition-colors">
                        {project.title}
                      </h3>
                      {project.isDemo && (
                        <span className="font-mono text-[10px] bg-[#f4f4f2] dark:bg-[#1f2430] text-[#747878] dark:text-[#9ea5b3] px-2 py-0.5 rounded border border-[#e2e3e1] dark:border-[#272d3d]">
                          Interactive Demo
                        </span>
                      )}
                    </div>

                    <p className="text-[14px] md:text-[15px] leading-relaxed text-[#444748] dark:text-[#cbd5e1] transition-colors">
                      {project.description}
                    </p>

                    {/* Metric Box */}
                    <div className="bg-[#f4f4f2] dark:bg-[#191d26] p-3.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex flex-col gap-1 transition-colors">
                      <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">
                        {project.metricTitle}
                      </span>
                      <span className="font-mono text-[12px] text-[#000000] dark:text-[#ffffff] font-medium transition-colors">
                        {project.metricValue}
                      </span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-col gap-2 pt-1">
                      <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] rounded text-[#1a1c1b] dark:text-[#f1f2f4] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#e2e3e1] dark:border-[#272d3d]">
                      <a
                        className="inline-flex items-center gap-1.5 text-[13px] text-[#000000] dark:text-[#ffffff] font-medium underline underline-offset-4 hover:text-[#5e5e5e] dark:hover:text-[#9ea5b3] transition-colors"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{project.isDemo ? "View Interactive Demo" : "Visit Live Site"}</span>
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

                  {/* Right Column: Interactive Browser Showcase & Thumbnail Switcher */}
                  <div className="lg:col-span-6 flex flex-col justify-start">
                    <ProjectFeaturedVisual
                      project={project}
                      onOpenLightbox={(idx) => setLightbox({ project, index: idx })}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Secondary Noteworthy Projects (Rendered only on 'all' view to prevent vertical clutter) */}
      {activeTab === "all" && notableSecondary.length > 0 && (
        <div className="flex flex-col gap-6 pt-4 border-t border-[#e2e3e1] dark:border-[#232836]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#747878] dark:text-[#9ea5b3]" />
                <span className="font-mono text-[11px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
                  Archive &amp; Client Projects
                </span>
              </div>
              <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-[#000000] dark:text-[#ffffff] tracking-tight">
                Other Noteworthy Works ({notableSecondary.length})
              </h3>
            </div>
            <p className="text-[13px] text-[#747878] dark:text-[#9ea5b3]">
              Specialized tools, client showcases &amp; community applications
            </p>
          </div>

          {/* Compact 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {notableSecondary.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-[#ffffff] dark:bg-[#14171f] p-5 sm:p-6 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex flex-col justify-between gap-4 hover:border-[#b0b3b2] dark:hover:border-[#3b4256] transition-all duration-150"
              >
                <div className="flex flex-col gap-3.5">
                  {/* Screenshot Preview with 3-shot indicator */}
                  <div
                    onClick={() => setLightbox({ project, index: 0 })}
                    className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#e2e3e1] dark:border-[#272d3d] bg-[#0c0e12] cursor-zoom-in group/cardimg"
                  >
                    <img
                      src={project.screenshots[0].url}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/cardimg:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 font-mono text-[10px] bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded border border-white/20">
                      <ImageIcon className="w-3 h-3" />
                      <span>{project.screenshots.length} shots</span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cardimg:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-[12px] gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Gallery</span>
                    </div>
                  </div>

                  {/* Header metadata */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] bg-[#eeeeec] dark:bg-[#1f2430] px-2 py-0.5 rounded text-[#1a1c1b] dark:text-[#f1f2f4] uppercase font-medium">
                      {project.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.isDemo ? "bg-amber-400" : "bg-emerald-500"
                        }`}
                      />
                      <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans text-[17px] font-semibold text-[#000000] dark:text-[#ffffff] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#747878] dark:text-[#9ea5b3] group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h4>
                    <p className="text-[13px] leading-relaxed text-[#5e5e5e] dark:text-[#9ea5b3] mt-1.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-[#eeeeec] dark:border-[#232836]">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] rounded text-[#444748] dark:text-[#cbd5e1]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12px] font-mono text-[#000000] dark:text-[#ffffff] hover:underline font-medium"
                    >
                      <span>{project.isDemo ? "Launch Interactive Demo" : "Open Live Deployment"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setLightbox({ project, index: 0 })}
                      className="font-mono text-[11px] text-[#747878] dark:text-[#9ea5b3] hover:text-[#000000] dark:hover:text-[#ffffff] cursor-pointer flex items-center gap-1"
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>Screenshots</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Global Fullscreen Lightbox Modal */}
      {lightbox && (
        <ProjectLightbox
          project={lightbox.project}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
