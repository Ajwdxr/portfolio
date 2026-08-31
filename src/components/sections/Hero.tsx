"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Layers, Cpu } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";
import { getProfile, Profile } from "@/lib/supabase";

export function Hero() {
  const [profile, setProfile] = useState<Profile>({
    name: "Ajwad",
    role: "Full Stack Developer",
    tagline: "Building Modern Digital Experiences",
    bio: "I specialize in crafting high-performance web applications, fluid interfaces, and scalable architectures with minimalist aesthetics and liquid glass precision.",
    email: "ajwadxara99@gmail.com",
    whatsapp: "+60 11-1063 8176",
    location: "Alor Setar, Kedah",
    status: "ONLINE",
  });

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();
      if (data) {
        setProfile(data);
      }
    }
    loadProfile();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Nordic Frost Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-sky-400/10 via-slate-400/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-400/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-300/5 rounded-full blur-[130px]" />
        {/* Delicate noise / grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_20%,transparent_100%)] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                profile.status === "ONLINE"
                  ? "bg-sky-400"
                  : profile.status === "AWAY"
                  ? "bg-amber-400"
                  : "bg-rose-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                profile.status === "ONLINE"
                  ? "bg-sky-400"
                  : profile.status === "AWAY"
                  ? "bg-amber-500"
                  : "bg-rose-500"
              }`} />
            </span>
            <span className="text-xs font-inter font-medium text-slate-300 tracking-wide">
              {profile.status === "ONLINE" ? "Available for New Projects" : `Status: ${profile.status}`}
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-space tracking-tight text-white leading-[1.1]">
              Crafting fluid <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
                digital experiences
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl font-inter leading-relaxed pt-2">
              {profile.bio}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NeonButton
              variant="frost"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </NeonButton>

            <NeonButton
              variant="titanium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5"
            >
              <span>Get In Touch</span>
            </NeonButton>
          </div>

          {/* Quick Metrics / Tech Pill Strip */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-inter">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span className="text-slate-300">Full Stack Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-300" />
              <span className="text-slate-300">Liquid Glass UI / UX</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-300" />
              <span className="text-slate-300">High-Performance APIs</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Liquid Titanium Core Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Ambient Refraction Glows */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/15 via-slate-400/10 to-transparent blur-3xl" />

            {/* Liquid Titanium Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-white/[0.09] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-sky-400/[0.18] border-dashed animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full border border-white/[0.06]" />

            {/* Orbiting Satellite Node */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="absolute top-0 w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_15px_#7dd3fc]" />
            </motion.div>

            {/* Central Liquid Glass Core Sphere */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-white/[0.1] via-[#0d121e]/90 to-[#080b10]/95 backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.35)] flex flex-col items-center justify-center overflow-hidden group">
              {/* Internal Specular Glass Highlight */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/25 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(56,189,248,0.2)]">
                  <Sparkles className="w-6 h-6 text-sky-400 animate-pulse" />
                </div>
                <span className="text-xs font-space font-bold tracking-widest text-white uppercase">
                  {profile.name}
                </span>
                <span className="text-[10px] font-inter text-slate-400 tracking-wider">
                  Full Stack
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
