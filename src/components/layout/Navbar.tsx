"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Sync if OS system preference changes and no explicit theme preference is set
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const sysDark = e.matches;
        setIsDark(sysDark);
        if (sysDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;

    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }

    setIsDark(nextDark);

    // Dynamically update mobile browser theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", nextDark ? "#0c0e12" : "#f9f9f7");
    }
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#f9f9f7]/90 dark:bg-[#0c0e12]/90 backdrop-blur-md transition-all duration-200 border-b ${
        scrolled
          ? "shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-[#e2e3e1] dark:border-[#232836]"
          : "border-transparent"
      }`}
    >
      <div className="h-20 max-w-[1120px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2 group" href="#">
            <div className="w-8 h-8 rounded-md bg-[#1c1b1b] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] flex items-center justify-center font-mono text-xs font-bold tracking-wider transition-colors">
              AJ
            </div>
            <span className="font-mono text-xs tracking-wider uppercase text-[#1a1c1b] dark:text-[#f1f2f4] group-hover:text-[#5e5e5e] dark:group-hover:text-[#9ea5b3] transition-colors font-medium">
              AJWDXR
            </span>
          </a>
        </div>

        {/* Right: Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
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
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="w-8 h-8 rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#ffe25c] flex items-center justify-center hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-all cursor-pointer"
              title={
                mounted
                  ? isDark
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                  : "Toggle Theme"
              }
            >
              {mounted ? (
                isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-3.5 sm:px-4 py-2 rounded-lg hover:bg-[#5f5e5e] dark:hover:bg-[#e2e3e1] transition-colors shadow-sm"
            >
              <span className="font-medium">Start a Project</span>
              <span>→</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#f1f2f4] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f9f7] dark:bg-[#0c0e12] border-b border-[#e2e3e1] dark:border-[#232836] px-6 py-4 flex flex-col gap-3 shadow-md animate-in fade-in duration-150">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] py-1.5 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-[#e2e3e1] dark:border-[#232836] flex items-center justify-between">
            <span className="text-[13px] text-[#444748] dark:text-[#9ea5b3]">Appearance</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 text-[12px] font-mono px-3 py-1.5 rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#f1f2f4] cursor-pointer"
            >
              {mounted && isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#ffe25c]" />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#5e5e5e]" />
                  <span>Light</span>
                </>
              )}
            </button>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="sm:hidden inline-flex items-center justify-center gap-1.5 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-4 py-2.5 rounded-lg font-medium mt-1 shadow-sm"
          >
            <span>Start a Project</span>
            <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
