"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, User } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#f9f9f7]/90 dark:bg-[#0c0e12]/90 backdrop-blur-md transition-all duration-200 border-b ${scrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-[#e2e3e1] dark:border-[#232836]" : "border-transparent"}`}>
      <div className="h-20 max-w-[1120px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left: Logo & Status */}
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2 group" href="#">
            {/* Monogram / Brand mark */}
            <div className="w-8 h-8 rounded-md bg-[#1c1b1b] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] flex items-center justify-center font-mono text-xs font-bold tracking-wider transition-colors">
              AJ
            </div>
            <span className="font-mono text-xs tracking-wider uppercase text-[#1a1c1b] dark:text-[#f1f2f4] group-hover:text-[#5e5e5e] dark:group-hover:text-[#9ea5b3] transition-colors font-medium">
              AJWDXR
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 bg-[#f4f4f2] dark:bg-[#14171f] px-3 py-1 rounded-full border border-[#e2e3e1] dark:border-[#232836] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe25c] animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase text-[#444748] dark:text-[#9ea5b3] tracking-wider">
              Available for selected projects · Malaysia
            </span>
          </div>
        </div>

        {/* Right: Navigation & Action */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors font-normal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="w-8 h-8 rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#ffe25c] flex items-center justify-center hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-all"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-3.5 sm:px-4 py-2 rounded-lg hover:bg-[#5f5e5e] dark:hover:bg-[#e2e3e1] transition-colors"
            >
              <span className="font-medium">Start a Project</span>
              <span>→</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#f1f2f4]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9f7] dark:bg-[#0c0e12] border-b border-[#e2e3e1] dark:border-[#232836] px-6 py-4 flex flex-col gap-3 shadow-md animate-in fade-in duration-150">
          <div className="flex items-center gap-2 py-1.5 px-3 bg-[#f4f4f2] dark:bg-[#14171f] rounded-full w-fit mb-1 border border-[#e2e3e1] dark:border-[#232836]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe25c]"></span>
            <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3]">Available for selected projects · Malaysia</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] py-1 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
