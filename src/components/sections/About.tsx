"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BrainCircuit, Cpu, Layout, Terminal } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description: "Architecting logical solutions to complex digital challenges.",
    color: "text-neon-cyan",
    glowColor: "rgba(0, 245, 255, 0.12)",
    borderColor: "#00F5FF",
    hoverGlow: "rgba(0, 245, 255, 0.08)",
    statLabel: "ALGO_EFFICIENCY",
    statValue: "OPTIMAL // O(1)",
    progress: 95,
    tags: ["DSA", "Optimization", "Logic"]
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing scalable, high-performance backends and APIs.",
    color: "text-neon-purple",
    glowColor: "rgba(139, 92, 246, 0.12)",
    borderColor: "#8B5CF6",
    hoverGlow: "rgba(139, 92, 246, 0.08)",
    statLabel: "UPTIME_DESIGN",
    statValue: "99.999% READY",
    progress: 90,
    tags: ["APIs", "Microservices", "Docker"]
  },
  {
    icon: Layout,
    title: "UI/UX Focus",
    description: "Crafting immersive, pixel-perfect user interfaces.",
    color: "text-pink-glow",
    glowColor: "rgba(255, 77, 157, 0.12)",
    borderColor: "#FF4D9D",
    hoverGlow: "rgba(255, 77, 157, 0.08)",
    statLabel: "RENDER_PERF",
    statValue: "60 FPS // FLUID",
    progress: 98,
    tags: ["Framer Motion", "Tailwind v4", "Aesthetics"]
  }
];

export function About() {
  return (
    <section id="about" className="py-32 relative z-10 overflow-hidden">
      <style>{`
        .cyber-about-card {
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .cyber-about-card:hover {
          border-color: var(--hover-border) !important;
          box-shadow: 0 0 25px var(--hover-glow), inset 0 0 10px var(--hover-glow) !important;
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bio & Cyber Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-neon-cyan" />
                <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">sys.operator_info</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold mb-6 flex flex-wrap items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                  DATA_LOG
                </span>
                <span className="text-white/40 mx-3">//</span>
                <span>ABOUT_ME</span>
                <span className="w-3 h-6 bg-neon-cyan ml-2 animate-pulse" />
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-space">
                I am a system operator specializing in constructing high-performance backends and interactive, immersive user interfaces. My design process merges aesthetic logic with telemetry validation.
              </p>
            </div>

            {/* Cyberpunk Dossier Widget */}
            <div className="border border-white/10 rounded-lg p-5 bg-[#080c16]/50 font-mono text-sm text-text-secondary max-w-lg relative overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Scanlines Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-20" />
              
              {/* Corner tech dots */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-neon-cyan/50" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-neon-purple/50" />

              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 bg-neon-cyan rounded-full animate-ping" />
                <span className="text-white font-bold tracking-widest text-xs uppercase">[SYS_OPERATOR_DOSSIER]</span>
              </div>

              <div className="space-y-2.5 relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-1.5 gap-0.5 sm:gap-0">
                  <span className="text-white/40 text-xs sm:text-sm">OPERATOR:</span>
                  <span className="text-white font-bold tracking-wide text-xs sm:text-sm">AJWAD // FULLSTACK</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-1.5 gap-0.5 sm:gap-0">
                  <span className="text-white/40 text-xs sm:text-sm">COGNITION:</span>
                  <span className="text-neon-purple font-semibold text-xs sm:text-sm">CYBERPUNK_AESTHETICS</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-1.5 gap-0.5 sm:gap-0">
                  <span className="text-white/40 text-xs sm:text-sm">LOCATION:</span>
                  <span className="text-neon-cyan font-semibold text-xs sm:text-sm">MALAYSIA_BASE // SECTOR_01</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-1.5 gap-0.5 sm:gap-0">
                  <span className="text-white/40 text-xs sm:text-sm">STATUS:</span>
                  <div className="flex items-center gap-2 mt-0.5 sm:mt-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold text-xs sm:text-sm">ACTIVE_ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <GlassCard 
                  key={i} 
                  style={{ 
                    '--spotlight-color': feature.glowColor,
                    '--hover-border': feature.borderColor,
                    '--hover-glow': feature.hoverGlow
                  } as React.CSSProperties}
                  className={`cyber-about-card p-6 relative transition-all duration-500 hover:scale-[1.02] ${i === 2 ? 'sm:col-span-2' : ''}`}
                >
                  {/* Header/Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Icon className={`w-10 h-10 ${feature.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_var(--hover-border)]`} style={{ '--hover-border': feature.borderColor } as React.CSSProperties} />
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">SYS.MOD_0{i+1}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>

                  {/* Telemetry Stats & Progress Bar */}
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-white/40">{feature.statLabel}</span>
                      <span className="text-white/85 font-semibold" style={{ color: feature.borderColor }}>{feature.statValue}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r"
                        style={{ 
                          backgroundImage: `linear-gradient(to right, ${feature.borderColor}, #ffffff)`,
                          boxShadow: `0 0 8px ${feature.borderColor}` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                    {feature.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/5 bg-white/5 text-white/60 group-hover:text-white group-hover:border-white/15 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
