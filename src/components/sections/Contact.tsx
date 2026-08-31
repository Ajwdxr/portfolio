"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, MessageSquare, Sparkles, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProfile } from "@/lib/supabase";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [name, setName] = useState("");
  const [clientWhatsapp, setClientWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState<any>({
    email: "ajwadxara99@gmail.com",
    whatsapp: "+60 11-1063 8176",
    location: "Alor Setar, Kedah",
    status: "ONLINE"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const cleanNumber = profile.whatsapp.replace(/\D/g, "");
    const text = `Hi Ajwad,\n\nMy name is ${name} (WhatsApp: ${clientWhatsapp}).\n\nProject Enquiry:\n${message}`;
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
      
      setName("");
      setClientWhatsapp("");
      setMessage("");
      
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 relative z-10 bg-[#080b10] overflow-hidden border-t border-white/[0.06]">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-slate-300/5 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-space text-sky-300 text-xs tracking-wider uppercase">Let's Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-space font-bold text-white tracking-tight mb-3">
            Start a Conversation<span className="text-sky-400">.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-inter leading-relaxed">
            Have an idea or project in mind? Reach out directly via WhatsApp or email, and let's craft something remarkable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block p-5 rounded-2xl bg-[#0d121f]/70 backdrop-blur-2xl border border-white/[0.08] hover:border-sky-400/30 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-inter text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-200 transition-colors">{profile.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block p-5 rounded-2xl bg-[#0d121f]/70 backdrop-blur-2xl border border-white/[0.08] hover:border-sky-400/30 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] text-slate-200 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-inter text-slate-400 uppercase tracking-wider block mb-0.5">WhatsApp</span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-200 transition-colors">{profile.whatsapp}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </motion.a>

            {/* Location & Status Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl bg-[#0d121f]/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-300 border border-sky-400/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-inter text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-inter px-2 py-0.2 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      {profile.status}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white">{profile.location}</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Liquid Glass Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d121f]/80 backdrop-blur-3xl border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Top Specular Line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              <h3 className="text-xl font-space font-bold text-white mb-2">Send an Enquiry</h3>
              <p className="text-xs text-slate-400 mb-6 font-inter">Fill out the form below to auto-generate a direct message to WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-inter text-slate-300">Your Name</label>
                    <input 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-inter text-slate-300">Your WhatsApp Number</label>
                    <input 
                      type="tel"
                      value={clientWhatsapp}
                      onChange={(e) => setClientWhatsapp(e.target.value)}
                      required
                      placeholder="+60 12-345 6789"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-inter text-slate-300">Project Details / Message</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Tell me about your project goals, timeline, and requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                >
                  {status === "idle" && (
                    <>
                      <span>Transmit via WhatsApp</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {status === "submitting" && (
                    <span>Opening WhatsApp...</span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2 text-sky-600 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      Redirected Successfully!
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
