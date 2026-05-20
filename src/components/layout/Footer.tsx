import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-neon-cyan font-space font-bold text-xl">
          <Code2 className="w-6 h-6" />
          <span>AJWAD.DEV_</span>
        </div>

        <p className="text-text-secondary text-sm font-space">
          © {new Date().getFullYear()} AJWAD.DEV. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-full border border-white/10 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
