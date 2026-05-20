"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Terminal, Activity, Globe, Cpu, Smartphone, Code2, X, Orbit } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "PRJ-001",
    title: "NeuroNet Dashboard",
    category: "Web App",
    type: "WEB_APP",
    version: "v2.4.0",
    uptime: "99.99%",
    description: "A futuristic AI analytics dashboard with real-time data visualization and neural network monitoring capabilities.",
    tech: ["Next.js", "Supabase", "Framer Motion"],
    color: "#00F5FF", // cyan
    icon: Activity
  },
  {
    id: "PRJ-002",
    title: "CyberCommerce",
    category: "Website",
    type: "WEBSITE",
    version: "v1.2.5",
    uptime: "99.95%",
    description: "High-performance headless e-commerce storefront for digital assets with crypto payment integration.",
    tech: ["React", "Tailwind", "Stripe"],
    color: "#38BDF8", // blue
    icon: Globe
  },
  {
    id: "PRJ-003",
    title: "Nexus Core API",
    category: "System",
    type: "SYSTEM",
    version: "v4.0.1",
    uptime: "99.999%",
    description: "Scalable microservices architecture handling thousands of concurrent connections securely.",
    tech: ["Node.js", "PostgreSQL", "Docker"],
    color: "#F97316", // orange
    icon: Cpu
  },
  {
    id: "PRJ-004",
    title: "Quantum Sync",
    category: "Mobile App",
    type: "MOBILE_APP",
    version: "v1.0.0",
    uptime: "99.9%",
    description: "Cross-platform mobile application for secure encrypted messaging and quantum-safe file transfers.",
    tech: ["Flutter", "Firebase", "WebRTC"],
    color: "#A855F7", // purple
    icon: Smartphone
  }
];

const ProjectPreview = ({ project }: { project: any }) => {
  if (project.category === "Mobile App") {
    return (
      <div className="hidden lg:block absolute right-10 -bottom-10 w-64 h-80 rounded-3xl border-[6px] border-[#0f172a] bg-[#070b14] shadow-2xl overflow-hidden group-hover:-translate-y-6 transition-transform duration-700 z-0 opacity-80 group-hover:opacity-100">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
          <div className="w-24 h-5 bg-[#0f172a] rounded-b-2xl" />
        </div>
        <div className="mt-10 px-4 space-y-4">
          <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl border border-purple-500/30" />
          <div className="w-3/4 h-4 bg-white/5 rounded" />
          <div className="w-1/2 h-4 bg-white/5 rounded" />
        </div>
      </div>
    );
  }
  
  if (project.category === "System") {
    return (
      <div className="hidden lg:block absolute right-0 -bottom-8 w-[120%] h-56 rounded-xl border border-white/10 bg-[#070b14] shadow-2xl overflow-hidden group-hover:-translate-y-4 group-hover:rotate-2 transition-all duration-700 z-0 opacity-70 group-hover:opacity-100">
        <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="p-4 font-mono text-xs text-orange-400/80 space-y-2">
          <p>{">"} root@nexus-core:~# ./init_cluster.sh</p>
          <p>{">"} INFO: Initializing Nexus Core v4.0.1...</p>
          <p>{">"} SUCCESS: Connected to distributed DB Cluster.</p>
          <p>{">"} SUCCESS: Docker containers orchestrated.</p>
          <p className="animate-pulse">{">"} Awaiting socket connections_</p>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block absolute right-0 -bottom-12 w-[120%] h-80 rounded-tl-xl border-t border-l border-white/10 bg-[#070b14]/90 backdrop-blur-md shadow-2xl overflow-hidden group-hover:-translate-y-6 group-hover:-rotate-1 transition-all duration-700 z-0 opacity-70 group-hover:opacity-100">
       <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>
      <div className="p-6">
        <div 
          className="w-full h-40 bg-gradient-to-br from-white/10 to-transparent rounded-lg border border-white/20 opacity-30" 
          style={{ background: `linear-gradient(to bottom right, ${project.color}30, transparent)`, borderColor: `${project.color}50` }} 
        />
      </div>
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Positions for 4 projects at 0, 90, 180, 270 degrees
  const orbitalPositions = [
    { top: "0%", left: "50%" },
    { top: "50%", left: "100%" },
    { top: "100%", left: "50%" },
    { top: "50%", left: "0%" },
  ];

  return (
    <section id="projects" className="py-32 relative z-10 bg-[#070b14] overflow-hidden border-y border-white/5 min-h-screen flex flex-col justify-center">
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 40s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 40s linear infinite;
        }
        .orbit-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative z-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Orbit className="w-6 h-6 text-neon-cyan animate-pulse" />
            <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">sys.orbital_grid</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-space font-bold mb-4 tracking-tight flex flex-wrap items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-pink-glow drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              FEATURED_PROJECTS
            </span>
          </h2>
          
          <div className="h-[1px] w-full max-w-xl bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent opacity-50 mb-4" />
          <p className="text-text-secondary text-base sm:text-lg font-space max-w-2xl">
            Select an orbiting module to inspect system architecture.
          </p>
        </motion.div>

        {/* 3D Orbital System */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] mx-auto mt-16 md:mt-10">
          
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-white/5 border-dashed" />
          <div className="absolute inset-6 sm:inset-8 md:inset-16 rounded-full border border-white/5" />
          <div className="absolute inset-12 sm:inset-16 md:inset-32 rounded-full border border-white/5 border-dashed" />

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-[#080c16] border-2 border-neon-cyan shadow-[0_0_40px_rgba(0,245,255,0.2)] flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-md animate-pulse" />
            <div className="relative flex flex-col items-center">
              <Code2 className="w-6 h-6 md:w-8 md:h-8 text-neon-cyan mb-1 animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-mono text-white font-bold tracking-widest">SYS.CORE</span>
            </div>
          </div>

          {/* Rotating Container */}
          <div className={cn("absolute inset-0 animate-orbit", isPaused && "orbit-paused")}>
            {projects.map((project, idx) => {
              const pos = orbitalPositions[idx];
              const style = { '--glow-color': project.color } as React.CSSProperties;

              return (
                <div
                  key={project.id}
                  className={cn("absolute animate-counter-orbit flex items-center justify-center w-0 h-0", isPaused && "orbit-paused")}
                  style={{ top: pos.top, left: pos.left }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Responsive Satellite Button */}
                  <div className="cursor-pointer" onClick={() => setActiveProject(project)}>
                    
                    {/* Desktop Satellite Card (md and up) */}
                    <div 
                      className="hidden md:flex relative group w-56 flex-shrink-0 p-[1px] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                      style={style}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--glow-color)] to-transparent opacity-20 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="relative bg-[#080c16]/90 backdrop-blur-md rounded-xl p-4 border border-white/10 group-hover:border-[var(--glow-color)]/50 transition-colors flex items-center gap-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] w-full">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[var(--glow-color)]">
                          <project.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 overflow-hidden text-left">
                          <h4 className="text-base font-bold text-white truncate group-hover:text-[var(--glow-color)] transition-colors">{project.title}</h4>
                          <p className="text-[10px] font-mono text-white/50 tracking-widest truncate">{project.type}</p>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--glow-color)] animate-pulse" />
                      </div>
                    </div>

                    {/* Mobile Satellite Node (less than md) */}
                    <div 
                      className="md:hidden relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border border-white/10 hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      style={{ 
                        backgroundColor: '#080c16',
                        boxShadow: `0 0 15px ${project.color}20, inset 0 0 5px ${project.color}20`,
                        borderColor: `${project.color}30`
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-[var(--glow-color)] opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-colors" style={{ color: project.color }} />
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--glow-color)] animate-pulse" />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Expanded Forward Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-[#04060a]/90 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl my-auto z-10"
              style={{ '--glow-color': activeProject.color } as React.CSSProperties}
            >
              <div className="relative group rounded-3xl p-[1px] overflow-hidden min-h-[500px] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                {/* Animated Border Beam */}
                <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--glow-color)_50%,transparent_100%)] opacity-100 z-0" />
                
                {/* Glassmorphism Inner Card */}
                <div className="relative w-full h-full rounded-3xl bg-[#080c16]/95 backdrop-blur-3xl border border-white/10 z-10 overflow-hidden flex flex-col p-6 sm:p-10">
                  
                  {/* Close Button */}
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-white/50 hover:text-red-400 border border-transparent hover:border-red-500/50 transition-all z-50"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Inner Ambient Glow */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
                       style={{ backgroundColor: activeProject.color }} />

                  {/* HUD Corner Brackets */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--glow-color)] pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--glow-color)] pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--glow-color)] pointer-events-none" />
                  
                  {/* Background Preview Mockups */}
                  <ProjectPreview project={activeProject} />

                  {/* Content */}
                  <div className="relative z-20 flex-grow flex flex-col pointer-events-none">
                    <div className="flex justify-between items-start mb-8 pointer-events-auto">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[var(--glow-color)]">
                          <activeProject.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-white/40 tracking-wider">[{activeProject.id}]</span>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[var(--glow-color)] animate-pulse shadow-[0_0_10px_var(--glow-color)]" />
                            <span className="text-[10px] font-mono text-[var(--glow-color)] tracking-wider">STATUS: ACTIVE // CONN_ESTABLISHED</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mr-12">
                        <a href={activeProject.github || "#"} className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors shadow-lg">
                          <FaGithub className="w-5 h-5" />
                        </a>
                        <a href={activeProject.live || "#"} className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--glow-color)] hover:text-white hover:bg-[var(--glow-color)]/20 hover:border-[var(--glow-color)] transition-colors shadow-lg">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <div className="mb-6 pointer-events-auto max-w-xl">
                      <span className="text-xs font-space text-[var(--glow-color)] border border-[var(--glow-color)]/30 bg-[var(--glow-color)]/10 px-3 py-1.5 rounded-full mb-4 inline-block font-bold tracking-wider shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        {activeProject.type}
                      </span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        {activeProject.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed bg-[#080c16]/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 flex flex-wrap gap-3 pointer-events-auto">
                      {activeProject.tech.map((tech: string) => (
                        <span key={tech} className="text-sm font-mono text-white/90 bg-[#080c16]/80 px-4 py-2 border border-white/10 rounded-lg flex items-center gap-2 hover:border-[var(--glow-color)]/50 transition-colors shadow-lg backdrop-blur-md">
                          <Terminal className="w-4 h-4 text-[var(--glow-color)]" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
