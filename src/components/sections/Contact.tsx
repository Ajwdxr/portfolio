"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, MessageSquare, Terminal, ShieldCheck, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const SubmitButton = ({ status }: { status: string }) => {
  return (
    <button
      type="submit"
      disabled={status !== "idle"}
      className="relative w-full group overflow-hidden rounded-lg p-[1px] font-space uppercase tracking-widest text-sm"
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
      
      {/* Inner Button Content */}
      <div className="relative bg-[#080c16] px-8 py-4 rounded-lg flex items-center justify-center gap-3 border border-transparent group-hover:border-neon-cyan/20 transition-all">
        {status === "idle" && (
          <>
            <span className="text-neon-cyan font-bold group-hover:text-white transition-colors">TRANSMIT_DATA</span>
            <Terminal className="w-4 h-4 text-neon-cyan group-hover:text-white transition-colors" />
          </>
        )}
        {status === "submitting" && (
          <span className="text-neon-purple font-bold animate-pulse">TRANSMITTING...</span>
        )}
        {status === "success" && (
          <span className="text-pink-glow font-bold">TRANSMISSION_SUCCESSFUL</span>
        )}
      </div>
    </button>
  );
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate Supabase submission
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative z-10 bg-[#070b14] overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cpu className="w-6 h-6 text-neon-cyan" />
            <span className="font-mono text-neon-cyan text-sm tracking-widest uppercase">sys.comms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
              ESTABLISH_CONNECTION
            </span>
          </h2>
          <div className="relative flex items-center justify-center w-full max-w-md mx-auto mt-4 mb-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-1 bg-neon-cyan rounded-full shadow-[0_0_15px_#00F5FF]" />
          </div>
          <p className="text-text-secondary font-space text-lg max-w-2xl mx-auto">
            Ready to initiate your next digital project? Send a secure transmission.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* HUD Connection Line */}
            <div className="absolute left-[52px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/20 to-neon-purple/0 hidden lg:block" />

            {/* Direct Email */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="relative group p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-transparent transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-[#080c16]/95 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6 border border-white/5 group-hover:border-neon-cyan/30 transition-colors z-10">
                  <div className="p-4 bg-neon-cyan/10 text-neon-cyan rounded-xl border border-neon-cyan/20 shadow-[0_0_15px_rgba(0,245,255,0.1)] group-hover:scale-110 group-hover:bg-neon-cyan/20 transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">Direct Email</p>
                    <p className="font-space font-bold text-lg text-white group-hover:text-neon-cyan transition-colors">hello@developer.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="relative group p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-transparent transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-[#080c16]/95 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6 border border-white/5 group-hover:border-neon-purple/30 transition-colors z-10">
                  <div className="p-4 bg-neon-purple/10 text-neon-purple rounded-xl border border-neon-purple/20 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:scale-110 group-hover:bg-neon-purple/20 transition-all duration-300">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-1">WhatsApp CTA</p>
                    <p className="font-space font-bold text-lg text-white group-hover:text-neon-purple transition-colors">+1 (555) 019-2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="relative group p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-transparent transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-glow to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-[#080c16]/95 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-6 border border-white/5 group-hover:border-pink-glow/30 transition-colors z-10">
                  <div className="p-4 bg-pink-glow/10 text-pink-glow rounded-xl border border-pink-glow/20 shadow-[0_0_15px_rgba(255,77,157,0.1)] group-hover:scale-110 group-hover:bg-pink-glow/20 transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Location Base</p>
                      <div className="flex items-center gap-1.5 bg-neon-cyan/10 border border-neon-cyan/20 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.1)]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon-cyan"></span>
                        </span>
                        <span className="text-[8px] text-neon-cyan font-mono tracking-widest font-bold">ONLINE</span>
                      </div>
                    </div>
                    <p className="font-space font-bold text-lg text-white group-hover:text-pink-glow transition-colors">Cyber City, Sector 7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative group rounded-3xl p-[1px] overflow-hidden min-h-[450px]">
              {/* Animated Border Beam */}
              <div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00F5FF_50%,transparent_100%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              {/* Form Container */}
              <div className="relative w-full h-full rounded-3xl bg-[#080c16]/95 backdrop-blur-xl border border-white/10 group-hover:border-transparent transition-colors z-10 p-8 lg:p-10">
                
                {/* HUD Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors z-10 pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors z-10 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors z-10 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/30 group-hover:border-neon-cyan transition-colors z-10 pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-neon-cyan" />
                    <span className="text-[10px] sm:text-xs font-mono text-neon-cyan tracking-widest">SECURE_CHANNEL_OPEN</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-white/30">ID: CONN-8094</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group/input">
                      <label className="text-[10px] font-mono text-text-secondary tracking-widest group-focus-within/input:text-neon-cyan transition-colors">NAME_</label>
                      <input 
                        required
                        className="w-full bg-[#0a1120] border border-white/10 rounded-lg p-4 text-white font-space focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:bg-[#0a1120]/80 transition-all placeholder:text-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2 group/input">
                      <label className="text-[10px] font-mono text-text-secondary tracking-widest group-focus-within/input:text-neon-cyan transition-colors">EMAIL_</label>
                      <input 
                        type="email"
                        required
                        className="w-full bg-[#0a1120] border border-white/10 rounded-lg p-4 text-white font-space focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:bg-[#0a1120]/80 transition-all placeholder:text-white/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group/input">
                    <label className="text-[10px] font-mono text-text-secondary tracking-widest group-focus-within/input:text-neon-cyan transition-colors">TRANSMISSION_PAYLOAD_</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full bg-[#0a1120] border border-white/10 rounded-lg p-4 text-white font-space focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:bg-[#0a1120]/80 transition-all resize-none placeholder:text-white/20"
                      placeholder="Describe your project requirements..."
                    />
                  </div>

                  <div className="pt-4">
                    <SubmitButton status={status} />
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
