"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BrainCircuit, Cpu, Layout } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description: "Architecting logical solutions to complex digital challenges.",
    color: "text-neon-cyan"
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing scalable, high-performance backends and APIs.",
    color: "text-neon-purple"
  },
  {
    icon: Layout,
    title: "UI/UX Focus",
    description: "Crafting immersive, pixel-perfect user interfaces.",
    color: "text-pink-glow"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-glow to-neon-purple">DATA_LOG</span> // ABOUT_ME
            </h2>
            
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                I am a passionate software developer dedicated to pushing the boundaries of web technology. With a strong foundation in both frontend aesthetics and backend architecture, I build experiences that not only look futuristic but perform flawlessly.
              </p>
              <p>
                My approach to development is heavily influenced by cyberpunk aesthetics—combining high-tech utility with striking visual designs. Every project is an opportunity to craft something unique and immersive.
              </p>
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
                <GlassCard key={i} className={`p-6 ${i === 2 ? 'sm:col-span-2' : ''}`}>
                  <Icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{feature.title}</h3>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
