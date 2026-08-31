import { Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07090e] py-12 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <span className="font-space font-medium text-white text-sm tracking-tight">
            Ajwad<span className="text-sky-400">.</span>dev
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs font-inter text-center md:text-left">
          © {new Date().getFullYear()} Ajwad. Crafted with precision, minimalist aesthetics & liquid glass.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {[
            { icon: FaGithub, href: "https://github.com", label: "GitHub" },
            { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: FaWhatsapp, href: "https://wa.me/601110638176", label: "WhatsApp" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
