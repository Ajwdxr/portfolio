"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal, Activity, Globe, Cpu, Smartphone, Sparkles, X, Orbit, Home, ArrowUpRight, Server, Shield, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { getProjects } from "@/lib/supabase";

const iconMap: Record<string, any> = {
  Activity,
  Globe,
  Cpu,
  Smartphone,
  Home,
  Server,
  Shield,
  Layers
};

export interface OrbitTier {
  id: "all" | "saas" | "webapp" | "system" | "landing";
  label: string;
  ringIndex: number;
  radiusPercent: number; // percentage of container width
  duration: number; // animation duration in seconds
  reverse?: boolean;
}

const ORBIT_TIERS: OrbitTier[] = [
  { id: "saas", label: "SaaS & AI", ringIndex: 1, radiusPercent: 28, duration: 24, reverse: false },
  { id: "webapp", label: "Web App & PWA", ringIndex: 2, radiusPercent: 50, duration: 36, reverse: true },
  { id: "system", label: "Systems & APIs", ringIndex: 3, radiusPercent: 72, duration: 48, reverse: false },
  { id: "landing", label: "Landing Pages", ringIndex: 4, radiusPercent: 94, duration: 62, reverse: true },
];

const DEFAULT_PROJECTS = [
  // TIER 1: SAAS & AI PLATFORMS
  {
    id: "PRJ-001",
    title: "PromptMatrix",
    tier: "saas",
    category: "SaaS",
    type: "AI SaaS Platform",
    version: "v2.1.0",
    uptime: "99.95%",
    description: "Next-generation AI prompt architect and prompt optimization SaaS. Elevates rough thoughts into structured, high-fidelity prompts for modern LLMs.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "CRT Shader", "Supabase"],
    color: "#38BDF8", // Ice Sky
    icon: Cpu,
    icon_name: "Cpu",
    live: "https://promptmatrix.ajwdxr.com",
    github: null
  },

  // TIER 2: WEB APPS & PWAS
  {
    id: "PRJ-002",
    title: "BellyBeats",
    tier: "webapp",
    category: "Web App",
    type: "PWA // Mobile App",
    version: "v1.2.0",
    uptime: "99.99%",
    description: "A premium glassmorphism baby kick tracker PWA for parents, featuring real-time telemetry logging, trend analytics, and offline service worker sync.",
    tech: ["Next.js", "PWA", "Tailwind CSS", "Framer Motion"],
    color: "#7DD3FC", // Frost Cyan
    icon: Activity,
    icon_name: "Activity",
    live: "https://bellybeats.ajwdxr.com",
    github: null
  },
  {
    id: "PRJ-003",
    title: "AttendX",
    tier: "webapp",
    category: "Web App",
    type: "Attendance PWA",
    version: "v1.0.0",
    uptime: "100.0%",
    description: "Smart attendance platform with biometric facial recognition verification, GPS geolocation check-in fencing, and real-time dashboard analytics.",
    tech: ["Next.js", "Tailwind CSS", "Face Recognition", "Geolocation", "PWA"],
    color: "#38BDF8", // Sky Blue
    icon: Smartphone,
    icon_name: "Smartphone",
    live: "https://attendx.ajwdxr.com",
    github: null
  },
  {
    id: "PRJ-004",
    title: "E-Masjid",
    tier: "webapp",
    category: "Web App",
    type: "Community Portal",
    version: "v1.3.1",
    uptime: "99.98%",
    description: "Digital hub for Masjid Al Rahmah Mergong. Features automated prayer time calculations, community announcements, digital library, and online Quran.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "PWA"],
    color: "#38BDF8",
    icon: Globe,
    icon_name: "Globe",
    live: "https://e-masjid.taufec.workers.dev",
    github: null
  },

  // TIER 3: SYSTEMS & APIS
  {
    id: "PRJ-005",
    title: "Nexus Core Engine",
    tier: "system",
    category: "System",
    type: "Distributed API Engine",
    version: "v4.0.1",
    uptime: "99.999%",
    description: "High-throughput microservices architecture with distributed Postgres connection pooling, automated JWT auth state propagation, and telemetry streaming.",
    tech: ["Node.js", "Docker", "PostgreSQL", "Redis", "TypeScript"],
    color: "#E2E8F0", // Titanium Platinum
    icon: Server,
    icon_name: "Server",
    live: null,
    github: null
  },

  // TIER 4: LANDING PAGES & WEBSITES
  {
    id: "PRJ-006",
    title: "KafeKiro",
    tier: "landing",
    category: "Landing Page",
    type: "Artisan Coffee Landing",
    version: "v1.0.4",
    uptime: "99.9%",
    description: "Dark aesthetic artisan coffee shop landing page featuring handcrafted menus, interactive galleries, and custom modal booking transitions.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "Vite"],
    color: "#CBD5E1", // Titanium Silver
    icon: Globe,
    icon_name: "Globe",
    live: "https://kafekiro.vercel.app",
    github: null
  },
  {
    id: "PRJ-007",
    title: "Rembayung",
    tier: "landing",
    category: "Landing Page",
    type: "Restaurant Showcase",
    version: "v1.1.0",
    uptime: "99.95%",
    description: "Authentic Malaysian cuisine restaurant landing page for Rembayung by Khairul Aming. Features dynamic theme switching and culinary showcases.",
    tech: ["Tailwind CSS", "JavaScript", "PHP", "Theme Engine"],
    color: "#94A3B8", // Muted Titanium
    icon: Globe,
    icon_name: "Globe",
    live: "https://ajwdxr.free.nf/rembayung/",
    github: null
  },
  {
    id: "PRJ-008",
    title: "Afif Azman",
    tier: "landing",
    category: "Landing Page",
    type: "Property Consultant",
    version: "v1.0.0",
    uptime: "99.9%",
    description: "Real estate property consultant portal for industrial, commercial, and residential listings in Johor with integrated WhatsApp consultation.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "PHP", "PWA"],
    color: "#7DD3FC",
    icon: Home,
    icon_name: "Home",
    live: "https://afifazman.com/",
    github: null
  }
];

const ProjectPreview = ({ project }: { project: any }) => {
  if (project.category === "Mobile App" || project.type.includes("Mobile")) {
    return (
      <div className="hidden lg:block absolute right-8 -bottom-6 w-64 h-80 rounded-3xl border border-white/15 bg-[#090d18]/90 backdrop-blur-2xl shadow-2xl overflow-hidden group-hover:-translate-y-4 transition-transform duration-700 z-0">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
          <div className="w-24 h-4 bg-white/10 rounded-b-xl" />
        </div>
        <div className="mt-10 px-4 space-y-4">
          <div 
            className="w-full h-32 rounded-xl border border-white/10"
            style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}
          />
          <div className="w-3/4 h-3 bg-white/10 rounded-full" />
          <div className="w-1/2 h-3 bg-white/5 rounded-full" />
        </div>
      </div>
    );
  }

  if (project.category === "System") {
    return (
      <div className="hidden lg:block absolute right-0 -bottom-8 w-[115%] h-64 rounded-tl-2xl border-t border-l border-white/15 bg-[#090d18]/95 backdrop-blur-2xl shadow-2xl overflow-hidden z-0">
        <div className="h-8 bg-white/[0.04] border-b border-white/10 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
        </div>
        <div className="p-4 font-mono text-xs text-sky-200/80 space-y-2">
          <p>{">"} root@nexus-cluster:~# ./orchestrate_services.sh</p>
          <p>{">"} [INFO] Initializing Microservices Cluster v4.0.1...</p>
          <p>{">"} [OK] Distributed PostgreSQL Replica Pool: Active</p>
          <p>{">"} [OK] Telemetry WebSockets: Listening on :8080</p>
          <p className="animate-pulse">{">"} System health: 99.999% Optimal_</p>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block absolute right-0 -bottom-10 w-[115%] h-72 rounded-tl-2xl border-t border-l border-white/15 bg-[#090d18]/90 backdrop-blur-2xl shadow-2xl overflow-hidden group-hover:-translate-y-4 transition-all duration-700 z-0">
      <div className="h-8 bg-white/[0.04] border-b border-white/10 flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-sky-400/40" />
      </div>
      <div className="p-6">
        <div 
          className="w-full h-36 rounded-xl border border-white/10" 
          style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)`, borderColor: `${project.color}35` }} 
        />
      </div>
    </div>
  );
};

export function Projects() {
  const [projects, setProjects] = useState<any[]>(DEFAULT_PROJECTS);
  const [selectedTier, setSelectedTier] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      if (data && data.length > 0) {
        const mapped = data.map(p => {
          let tier = "webapp";
          const cat = (p.category || "").toLowerCase();
          const typ = (p.type || "").toLowerCase();
          if (cat.includes("saas") || typ.includes("saas") || typ.includes("ai")) tier = "saas";
          else if (cat.includes("system") || typ.includes("system")) tier = "system";
          else if (cat.includes("landing") || cat.includes("website") || typ.includes("website")) tier = "landing";
          else tier = "webapp";

          return {
            ...p,
            tier,
            icon: iconMap[p.icon_name] || Globe,
            live: p.live_url || null,
            github: p.github_url || null
          };
        });
        setProjects(mapped);
      }
    }
    loadProjects();
  }, []);

  // Group projects by tier
  const projectsByTier = useMemo(() => {
    const map: Record<string, any[]> = {
      saas: [],
      webapp: [],
      system: [],
      landing: []
    };
    projects.forEach(p => {
      const t = p.tier || "webapp";
      if (map[t]) map[t].push(p);
      else map["webapp"].push(p);
    });
    return map;
  }, [projects]);

  return (
    <section id="projects" className="py-28 relative z-10 bg-[#080b10] overflow-hidden min-h-screen flex flex-col justify-center border-t border-white/[0.06]">
      <style>{`
        @keyframes orbit-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-cw {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes counter-ccw {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .orbit-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Nordic Frost Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-300/5 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header & Multi-Orbit Filter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <Orbit className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: "14s" }} />
              <span className="font-space text-sky-300 text-xs tracking-wider uppercase">Concentric Multi-Orbit System</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-space font-bold text-white tracking-tight mb-3">
              Project Galaxies<span className="text-sky-400">.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-inter leading-relaxed">
              Explore projects organized across 4 concentric orbital planes: <strong>SaaS</strong>, <strong>Web Apps</strong>, <strong>Systems</strong>, and <strong>Landing Pages</strong>.
            </p>
          </motion.div>

          {/* Orbit Focus Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0c111e]/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-2xl">
            <button
              onClick={() => setSelectedTier("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer",
                selectedTier === "all"
                  ? "bg-white/[0.12] text-white border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] font-semibold"
                  : "text-slate-400 hover:text-white"
              )}
            >
              All Orbits
            </button>
            {ORBIT_TIERS.map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5",
                  selectedTier === tier.id
                    ? "bg-sky-500/20 text-sky-200 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] font-semibold"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                <span>{tier.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Multi-Ring Concentric Solar Orbit Canvas */}
        <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[680px] md:h-[680px] lg:w-[780px] lg:h-[780px] mx-auto mt-8 flex items-center justify-center">
          
          {/* Central Core Sun Sphere */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-white/[0.12] via-[#0d121e]/95 to-[#080b10] backdrop-blur-3xl border border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center z-30">
            <div className="absolute inset-0 bg-sky-400/15 rounded-full blur-md" />
            <div className="relative flex flex-col items-center z-10">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-sky-400 mb-1" />
              <span className="text-[7px] md:text-[9px] font-space text-slate-200 font-bold tracking-widest uppercase">SYS.CORE</span>
            </div>
          </div>

          {/* Render 4 Concentric Orbit Rings */}
          {ORBIT_TIERS.map((tier) => {
            const isDimmed = selectedTier !== "all" && selectedTier !== tier.id;
            const isHighlighted = selectedTier === tier.id;
            const tierProjects = projectsByTier[tier.id] || [];
            const ringDiameterPercent = tier.radiusPercent;

            return (
              <div
                key={tier.id}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 pointer-events-none",
                  isDimmed && "opacity-20 blur-[0.5px]",
                  isHighlighted && "opacity-100 ring-2 ring-sky-400/30 shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                )}
                style={{
                  width: `${ringDiameterPercent}%`,
                  height: `${ringDiameterPercent}%`,
                }}
              >
                {/* Visual Orbit Track Line */}
                <div 
                  className={cn(
                    "absolute inset-0 rounded-full border transition-colors duration-500",
                    isHighlighted ? "border-sky-400/50 shadow-[inset_0_0_20px_rgba(56,189,248,0.1)]" : "border-white/[0.08] hover:border-white/20"
                  )}
                />

                {/* Subtle Ring Label */}
                <div 
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#080b10]/90 border border-white/10 text-[8px] sm:text-[9px] font-space tracking-widest text-slate-400 uppercase pointer-events-none select-none"
                >
                  {tier.label}
                </div>

                {/* Rotating Container for Satellites on this specific ring */}
                <div
                  className={cn("absolute inset-0 pointer-events-none", isPaused && "orbit-paused")}
                  style={{
                    animation: `${tier.reverse ? 'orbit-ccw' : 'orbit-cw'} ${tier.duration}s linear infinite`,
                  }}
                >
                  {tierProjects.map((project, idx) => {
                    // Position evenly along the circle
                    const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / Math.max(tierProjects.length, 1);
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);
                    const style = { '--glow-color': project.color } as React.CSSProperties;

                    return (
                      <div
                        key={project.id}
                        className={cn("absolute flex items-center justify-center w-0 h-0 pointer-events-auto", isPaused && "orbit-paused")}
                        style={{
                          top: `${y.toFixed(1)}%`,
                          left: `${x.toFixed(1)}%`,
                          animation: `${tier.reverse ? 'counter-ccw' : 'counter-cw'} ${tier.duration}s linear infinite`,
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        {/* Interactive Satellite Node */}
                        <div className="cursor-pointer" onClick={() => setActiveProject(project)}>
                          
                          {/* Desktop Pill Card (Hidden on small screens) */}
                          <div 
                            className="hidden md:flex relative group w-44 p-2.5 rounded-xl bg-[#0d121f]/90 backdrop-blur-2xl border border-white/[0.09] hover:border-sky-300/50 hover:scale-105 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.6)] items-center gap-2.5"
                            style={style}
                          >
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                            <div 
                              className="p-2 rounded-lg border border-white/10 flex-shrink-0"
                              style={{ backgroundColor: `${project.color}15`, color: project.color }}
                            >
                              <project.icon className="w-4 h-4" />
                            </div>

                            <div className="flex-1 overflow-hidden text-left">
                              <h4 className="text-xs font-semibold text-white truncate group-hover:text-sky-200 transition-colors">
                                {project.title}
                              </h4>
                              <p className="text-[9px] font-inter text-slate-400 truncate">
                                {project.type}
                              </p>
                            </div>

                            {project.live ? (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-sky-400/20 text-slate-400 hover:text-sky-300 transition-colors z-20 flex-shrink-0 border border-white/5 hover:border-sky-400/30"
                                title="Open Live Site"
                              >
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mr-1"
                                style={{ backgroundColor: project.color, boxShadow: `0 0 6px ${project.color}` }}
                              />
                            )}
                          </div>

                          {/* Mobile Satellite Bubble */}
                          <div 
                            className="md:hidden relative group w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#0d121f]/95 backdrop-blur-xl border border-white/15 hover:scale-110 transition-transform duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
                            style={{ 
                              boxShadow: `0 0 15px ${project.color}25, inset 0 1px 0 rgba(255,255,255,0.25)`
                            }}
                          >
                            <project.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: project.color }} />
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Expanded Liquid Glass Inspection Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Soft Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-[#04060a]/80 backdrop-blur-xl"
              onClick={() => setActiveProject(null)}
            />
            
            {/* Liquid Glass Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative w-full max-w-4xl my-auto z-10 rounded-3xl bg-[#0c111e]/95 backdrop-blur-3xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)] p-6 sm:p-10 overflow-hidden"
              style={{ '--glow-color': activeProject.color } as React.CSSProperties}
            >
              {/* Top Specular Line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                aria-label="Close Project Modal"
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10 transition-all z-50 shadow-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Ambient Blob inside modal */}
              <div 
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none"
                style={{ backgroundColor: activeProject.color }}
              />

              {/* Background Mockup */}
              <ProjectPreview project={activeProject} />

              {/* Modal Content */}
              <div className="relative z-10 flex flex-col max-w-xl">
                {/* Header info */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-3 rounded-2xl border border-white/15 shadow-md"
                    style={{ backgroundColor: `${activeProject.color}15`, color: activeProject.color }}
                  >
                    <activeProject.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-inter text-slate-400">[{activeProject.id}]</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProject.color, boxShadow: `0 0 8px ${activeProject.color}` }} />
                      <span className="text-xs font-inter font-medium text-slate-300">{activeProject.type}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-4xl font-space font-bold text-white mb-4 tracking-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 bg-white/[0.03] p-5 rounded-2xl border border-white/[0.06] backdrop-blur-md">
                  {activeProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tech.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="text-xs font-inter text-slate-300 bg-white/[0.04] px-3.5 py-1.5 border border-white/10 rounded-full flex items-center gap-1.5 shadow-sm"
                    >
                      <Terminal className="w-3.5 h-3.5 text-slate-400" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <span>Visit Live Deployment</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] text-white border border-white/15 font-medium text-xs hover:bg-white/[0.12] transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
