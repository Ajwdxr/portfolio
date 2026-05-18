"use client";

import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-space text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              SYSTEM.READY // V1.0
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-space leading-tight">
              Hi, I'm <span className="neon-text-cyan text-neon-cyan">Developer</span>
              <br />
              Building Modern
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed">
              I specialize in creating futuristic portfolio websites, immersive web applications, and scalable systems using cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <NeonButton variant="cyan" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              INITIALIZE_PROJECTS
            </NeonButton>
            <NeonButton variant="purple" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              CONTACT_PROTOCOL
            </NeonButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Cyberpunk Avatar/Graphic placeholder */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/30 border-dashed animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-neon-purple/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-secondary-bg flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(0,245,255,0.2)]">
              <span className="text-4xl text-neon-cyan font-space font-bold animate-pulse">&lt;/&gt;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
