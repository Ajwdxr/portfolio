"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BrainCircuit, Cpu, Layout, Sparkles } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description: "Architecting logical solutions to complex digital challenges with clean algorithmic thinking.",
    color: "#38BDF8", // sky / ice
    glowColor: "rgba(56, 189, 248, 0.12)",
    borderColor: "rgba(56, 189, 248, 0.3)",
    statLabel: "Algorithmic Efficiency",
    statValue: "O(1) // Optimal",
    progress: 95,
    tags: ["Data Structures", "Optimization", "Logic Flow"]
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing scalable, resilient backends, RESTful APIs, and cloud microservices.",
    color: "#E2E8F0", // titanium platinum
    glowColor: "rgba(226, 232, 240, 0.12)",
    borderColor: "rgba(226, 232, 240, 0.3)",
    statLabel: "System Reliability",
    statValue: "99.99% Uptime",
    progress: 92,
    tags: ["REST APIs", "PostgreSQL", "Docker", "Edge Functions"]
  },
  {
    icon: Layout,
    title: "Liquid UI / UX Focus",
    description: "Crafting tactile, fluid interfaces with micro-interactions, responsive layouts, and rich aesthetics.",
    color: "#7DD3FC", // frost cyan
    glowColor: "rgba(125, 211, 252, 0.12)",
    borderColor: "rgba(125, 211, 252, 0.3)",
    statLabel: "Animation Framerate",
    statValue: "60 FPS Fluid",
    progress: 98,
    tags: ["Framer Motion", "Tailwind CSS", "Liquid Glass", "Next.js"]
  }
];

export function About() {
  return (
    <section id="about" className="py-28 relative z-10 bg-[#080b10] overflow-hidden border-t border-white/[0.06]">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-slate-300/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio & Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-space text-sky-300 text-xs tracking-wider uppercase">About The Creator</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-space font-bold text-white tracking-tight mb-4">
                Philosophy & Craft<span className="text-sky-400">.</span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed font-inter">
                I combine strong full-stack software fundamentals with modern design sensibilities. Every line of code is structured for performance, responsiveness, and clean maintainability.
              </p>
            </div>

            {/* Frosted Glass Creator Dossier */}
            <div className="p-6 rounded-2xl bg-[#0d121f]/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative overflow-hidden space-y-4">
              {/* Top Specular Line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-space font-semibold text-white tracking-wide">Developer Dossier</span>
                <span className="text-[10px] font-inter px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                  Active // Ready
                </span>
              </div>

              <div className="space-y-3 text-xs font-inter">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Name:</span>
                  <span className="font-medium text-white">Ajwad</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Role:</span>
                  <span className="font-medium text-sky-200">Full Stack Web Developer</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Design Aesthetic:</span>
                  <span className="font-medium text-slate-200">Nordic Frost & Liquid Titanium</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Based in:</span>
                  <span className="font-medium text-white">Alor Setar, Kedah, Malaysia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <GlassCard 
                  key={i}
                  style={{ 
                    '--spotlight-color': feature.glowColor,
                  } as React.CSSProperties}
                  className={`p-6 relative group ${i === 2 ? 'sm:col-span-2' : ''}`}
                >
                  {/* Top Specular Line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                      style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-space text-slate-500 tracking-wider">
                      MOD_0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-space font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {feature.description}
                  </p>

                  {/* Progress / Stat */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                    <div className="flex justify-between text-[10px] font-inter">
                      <span className="text-slate-400">{feature.statLabel}</span>
                      <span className="font-semibold text-white">{feature.statValue}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.05]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${feature.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: feature.color,
                          boxShadow: `0 0 10px ${feature.color}50`
                        }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3">
                    {feature.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-inter px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-300"
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
