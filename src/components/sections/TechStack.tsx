"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaDocker, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql, SiPostgresql, SiVercel, SiPostman } from "react-icons/si";
import { Hexagon, Database, Wrench } from "lucide-react";
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
      whileHover={{ y: -5, scale: 1.05 }}
      className={cn("relative lg:absolute group cursor-pointer z-10 flex-shrink-0 m-2 lg:m-0", className)}
      style={{ width, height, filter: `drop-shadow(0 0 10px ${color}30)` }}
    >
      <div 
        className="absolute inset-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
        style={{ 
          background: `linear-gradient(135deg, ${color}, ${color}40, ${color})`,
          clipPath: customClipPath
        }}
      />
      <div 
        className="absolute inset-[1px] md:inset-[2px] bg-[#080c16]/95 backdrop-blur-xl transition-all duration-300"
        style={{ 
          clipPath: customClipPath,
          boxShadow: `inset 0 0 20px ${color}15`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex flex-col items-center justify-center w-full h-full relative z-10">
          <Icon className={cn("mb-2 transition-all duration-300 group-hover:scale-110", isLarge ? "w-12 h-12" : "w-8 h-8")} style={{ color, filter: `drop-shadow(0 0 8px ${color}80)` }} />
          <span className={cn("font-space text-text-secondary group-hover:text-white uppercase tracking-wider text-center", isLarge ? "text-xs font-bold" : "text-[10px]")}>
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const frontendTechs = [
  { icon: SiNextdotjs, title: "Next.js", color: "#ffffff", pos: "lg:left-[0px] lg:top-[0px]" },
  { icon: FaReact, title: "React", color: "#00F5FF", pos: "lg:left-[85px] lg:top-[65px]" },
  { icon: SiTypescript, title: "TypeScript", color: "#3178C6", pos: "lg:left-[0px] lg:top-[130px]" },
  { icon: SiTailwindcss, title: "Tailwind", color: "#38BDF8", pos: "lg:left-[85px] lg:top-[195px]" },
];

const backendTechs = [
  { icon: FaNodeJs, title: "Node.js", color: "#22c55e", pos: "lg:left-[85px] lg:top-[0px]", isLarge: true },
  { icon: SiMysql, title: "MySQL", color: "#f59e0b", pos: "lg:left-[0px] lg:top-[110px]" },
  { icon: SiPostgresql, title: "PostgreSQL", color: "#3b82f6", pos: "lg:left-[200px] lg:top-[110px]" },
  { icon: FaPhp, title: "PHP", color: "#8b5cf6", pos: "lg:left-[100px] lg:top-[190px]" },
];

const toolsTechs = [
  { icon: FaGithub, title: "GitHub", color: "#ffffff", pos: "lg:left-[0px] lg:top-[0px]" },
  { icon: FaDocker, title: "Docker", color: "#38BDF8", pos: "lg:left-[85px] lg:top-[65px]" },
  { icon: SiVercel, title: "Vercel", color: "#ffffff", pos: "lg:left-[0px] lg:top-[130px]" },
  { icon: SiPostman, title: "Postman", color: "#ff6c37", pos: "lg:left-[85px] lg:top-[195px]" },
];

const FrontendConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 55 63 L 140 128 L 55 193 L 140 258" 
      stroke="#00F5FF" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 5px #00F5FF)' }}
    />
    {[ [55,63], [140,128], [55,193], [140,258] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#00F5FF" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px #00F5FF)' }} />
    ))}
  </svg>
)

const BackendConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 155 80 L 55 173 L 155 253 L 255 173 Z" 
      stroke="#f59e0b" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 5px #f59e0b)' }}
    />
    <circle cx="155" cy="80" r="6" fill="#f59e0b" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 8px #f59e0b)' }} />
    {[ [55,173], [155,253], [255,173] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#f59e0b" style={{ filter: 'drop-shadow(0 0 5px #f59e0b)' }} />
    ))}
  </svg>
)

const ToolsConnectors = () => (
  <svg className="absolute inset-0 w-full h-full hidden lg:block -z-10 pointer-events-none">
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M 55 63 L 140 128 L 55 193 L 140 258" 
      stroke="#a855f7" strokeWidth="2" fill="none"
      style={{ filter: 'drop-shadow(0 0 5px #a855f7)' }}
    />
    {[ [55,63], [140,128], [55,193], [140,258] ].map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#a855f7" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px #a855f7)' }} />
    ))}
  </svg>
)

export function TechStack() {
  return (
    <section id="tech" className="py-32 relative z-10 bg-[#070b14] overflow-hidden border-y border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-[0_0_10px_rgba(0,245,255,0.3)]">
              Technical Arsenal
            </span>
          </h2>
          
          <div className="relative flex items-center justify-center w-full max-w-md mx-auto mt-8">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-neon-cyan rounded-full shadow-[0_0_15px_#00F5FF]" 
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-24 lg:gap-16 w-full max-w-6xl mx-auto pb-16">
          
          {/* Frontend Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[195px] lg:h-[320px] flex flex-col items-center">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <FrontendConnectors />
              {frontendTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Hexagon className="w-5 h-5 text-cyan-400" />
                <h3 className="font-space font-bold text-xl text-white">Frontend</h3>
              </div>
              <p className="text-text-secondary text-sm">Build rich, responsive user experiences</p>
            </div>
          </div>

          {/* Backend Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[310px] lg:h-[320px] flex flex-col items-center lg:-mt-12 z-20">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <BackendConnectors />
              {backendTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1 + 0.2} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-5 h-5 text-amber-500" />
                <h3 className="font-space font-bold text-xl text-white">Backend</h3>
              </div>
              <p className="text-text-secondary text-sm">Powerful APIs and robust server logic</p>
            </div>
          </div>

          {/* Tools Cluster */}
          <div className="relative w-full max-w-[340px] lg:w-[195px] lg:h-[320px] flex flex-col items-center">
            <div className="relative flex flex-wrap justify-center gap-4 lg:block w-full h-full z-10">
              <ToolsConnectors />
              {toolsTechs.map((tech, i) => (
                <HexTile key={tech.title} {...tech} delay={i * 0.1 + 0.4} className={tech.pos} />
              ))}
            </div>
            <div className="mt-8 lg:absolute lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 text-center w-[250px]">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-purple-500" />
                <h3 className="font-space font-bold text-xl text-white">Tools</h3>
              </div>
              <p className="text-text-secondary text-sm">Streamline development and deployment</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
