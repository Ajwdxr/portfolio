"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 sm:py-6 px-4 pointer-events-none transition-all duration-300">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "w-full max-w-5xl rounded-full px-5 py-3 flex items-center justify-between pointer-events-auto transition-all duration-500",
          scrolled
            ? "bg-[#0a0e17]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            : "bg-[#0a0e17]/45 backdrop-blur-xl border border-white/[0.07]"
        )}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          onClick={() => setActive("Home")}
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center group-hover:border-sky-300/50 group-hover:bg-sky-400/10 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            <Sparkles className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-space font-semibold text-base tracking-tight text-white group-hover:text-sky-200 transition-colors">
            Ajwad<span className="text-sky-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300",
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="liquid-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={() => setActive("Contact")}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-white/[0.06] text-slate-200 border border-white/15 hover:bg-sky-500/15 hover:text-sky-200 hover:border-sky-400/40 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle Navigation"
          className="md:hidden p-2 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="md:hidden fixed top-24 inset-x-4 max-w-md mx-auto bg-[#0a0e17]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl pointer-events-auto flex flex-col gap-3"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.name);
                setMobileMenuOpen(false);
              }}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                active === item.name
                  ? "bg-white/[0.08] text-sky-300 font-semibold border border-white/15"
                  : "text-slate-300 hover:bg-white/[0.04]"
              )}
            >
              <span>{item.name}</span>
              {active === item.name && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            Get In Touch
          </a>
        </motion.div>
      )}
    </header>
  );
}
