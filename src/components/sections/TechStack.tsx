"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaDocker, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql, SiPostgresql, SiVercel, SiPostman } from "react-icons/si";
import { Hexagon, Database, Wrench, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const customClipPath = 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)';

const HexTile = ({ icon: Icon, title, color, isLarge = false, delay = 0, className }: any) => {
  const width = isLarge ? 140 : 110;
  const height = isLarge ? 160 : 126;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.06 }}
      className={cn("relative lg:absolute group cursor-pointer z-10 flex-shrink-0 m-2 lg:m-0", className)}
      style={{ width, height, filter: `drop-shadow(0 0 12px ${color}20)` }}
    >
      {/* Outer Hexagon Border with Gradient Sheen */}
      <div 
        className="absolute inset-0 transition-all duration-300 opacity-40 group-hover:opacity-100"
        style={{ 
          background: `linear-gradient(135deg, ${color}, rgba(255, 255, 255, 0.4), ${color})`,
          clipPath: customClipPath
        }}
      />

      {/* Inner Frosted Liquid Glass Body */}
      <div 
        className="absolute inset-[1.5px] md:inset-[2px] bg-[#0c111e]/90 backdrop-blur-2xl transition-all duration-300 group-hover:bg-[#101728]/95"
        style={{ 
          clipPath: customClipPath,
          boxShadow: `inset 0 0 20px ${color}10, inset 0 1px 0 rgba(255,255,255,0.2)`
        }}
      >
        {/* Specular Light Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon & Label */}
        <div className="flex flex-col items-center justify-center w-full h-full relative z-10 p-2">
          <Icon 
            className={cn("mb-2 transition-all duration-300 group-hover:scale-110", isLarge ? "w-11 h-11" : "w-7 h-7")} 
            style={{ color, filter: `drop-shadow(0 0 8px ${color}60)` }} 
          />
          <span className={cn("font-space text-slate-300 group-hover:text-white uppercase tracking-wider text-center font-medium", isLarge ? "text-xs font-bold" : "text-[10px]")}>
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const frontendTechs = [
  { icon: SiNextdotjs, title: "Next.js", color: "#F8FAFC", pos: "lg:left-[0px] lg:top-[0px]" },
  { icon: FaReact, title: "React", color: "#38BDF8", pos: "lg:left-[85px] lg:top-[65px]" },
  { icon: SiTypescript, title: "TypeScript", color: "#7DD3FC", pos: "lg:left-[0px] lg:top-[130px]" },
  { icon: SiTailwindcss, title: "Tailwind", color: "#38BDF8", pos: "lg:left-[85px] lg:top-[195px]" },
];

const backendTechs = [
  { icon: FaNodeJs, title: "Node.js", color: "#E2E8F0", pos: "lg:left-[85px] lg:top-[0px]", isLarge: true },
  { icon: SiMysql, title: "MySQL", color: "#CBD5E1", pos: "lg:left-[0px] lg:top-[110px]" },
  { icon: SiPostgresql, title: "PostgreSQL", color: "#38BDF8", pos: "lg:left-[200px] lg:top-[110px]" },
  { icon: FaPhp, title: "PHP", color: "#94A3B8", pos: "lg:left-[100px] lg:top-[190px]" },
];

const toolsTechs = [
  { icon: FaGithub, title: "GitHub", color: "#F8FAFC", pos: "lg:left-[0px] lg:top-[0px]" },
  { icon: FaDocker, title: "Docker", color: "#38BDF8", pos: "lg:left-[85px] lg:top-[65px]" },
  { icon: SiVercel, title: "Vercel", color: "#F8FAFC", pos: "lg:left-[0px] lg:top-[130px]" },
  { icon: SiPostman, title: "Postman", color: "#CBD5E1", pos: "lg:left-[85px] lg:top-[195px]" },
];

const FrontendConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 55 63 L 140 128 L 55 193 L 140 258" 
      stroke="#38BDF8" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 6px rgba(56,189,248,0.5))' }}
    />
    {[ [55,63], [140,128], [55,193], [140,258] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#38BDF8" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 6px #38BDF8)' }} />
    ))}
  </svg>
);

const BackendConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 155 80 L 55 173 L 155 253 L 255 173 Z" 
      stroke="#7DD3FC" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 6px rgba(125,211,252,0.5))' }}
    />
    <circle cx="155" cy="80" r="5" fill="#E2E8F0" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 8px #E2E8F0)' }} />
    {[ [55,173], [155,253], [255,173] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#7DD3FC" style={{ filter: 'drop-shadow(0 0 6px #7DD3FC)' }} />
    ))}
  </svg>
);

const ToolsConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 55 63 L 140 128 L 55 193 L 140 258" 
      stroke="#94A3B8" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 6px rgba(148,163,184,0.5))' }}
    />
    {[ [55,63], [140,128], [55,193], [140,258] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#94A3B8" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 6px #94A3B8)' }} />
    ))}
  </svg>
);

export function TechStack() {
  return (
    <section id="tech" className="py-24 lg:py-32 relative z-10 bg-[#080b10] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/[0.02] rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-10 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-space text-sky-300 text-xs tracking-wider uppercase">Technical Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-space font-bold text-white tracking-tight mb-3">
            Beehive Architecture<span className="text-sky-400">.</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base font-inter leading-relaxed">
            Interconnected honeycomb clusters engineered for fluid frontends, resilient APIs, and seamless deployments.
          </p>
        </motion.div>

        {/* Honeycomb Clusters */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-24 lg:gap-16 w-full max-w-6xl mx-auto pb-16">
          
          {/* Frontend Honeycomb Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[195px] lg:h-[320px] flex flex-col items-center">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <FrontendConnectors />
              {frontendTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Hexagon className="w-4 h-4 text-sky-400" />
                <h3 className="font-space font-bold text-lg text-white">Frontend</h3>
              </div>
              <p className="text-slate-400 text-xs font-inter">Rich, responsive user experiences</p>
            </div>
          </div>

          {/* Backend Honeycomb Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[310px] lg:h-[320px] flex flex-col items-center lg:-mt-10 z-20">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <BackendConnectors />
              {backendTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1 + 0.2} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Database className="w-4 h-4 text-slate-200" />
                <h3 className="font-space font-bold text-lg text-white">Backend</h3>
              </div>
              <p className="text-slate-400 text-xs font-inter">Scalable APIs & robust server logic</p>
            </div>
          </div>

          {/* Tools Honeycomb Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[195px] lg:h-[320px] flex flex-col items-center">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <ToolsConnectors />
              {toolsTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1 + 0.4} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Wrench className="w-4 h-4 text-slate-300" />
                <h3 className="font-space font-bold text-lg text-white">Tools & DevOps</h3>
              </div>
              <p className="text-slate-400 text-xs font-inter">Streamlined tooling & deployment</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
