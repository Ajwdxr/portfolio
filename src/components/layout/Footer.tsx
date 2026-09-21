export function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f2] dark:bg-[#0c0e12] mt-12 border-t border-[#e2e3e1] dark:border-[#232836] transition-colors">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-[#1a1c1b] dark:text-[#f1f2f4] font-medium tracking-wider">
                AJWDXR
              </span>
              <span className="text-[#747878] dark:text-[#9ea5b3]">/</span>
              <span className="text-[13px] text-[#444748] dark:text-[#9ea5b3]">Websites · Systems · Apps</span>
            </div>
            <p className="text-[13px] text-[#444748] dark:text-[#9ea5b3] leading-relaxed">
              Based in Malaysia · Available for selected projects worldwide.
            </p>
          </div>

          {/* Index Col */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              Index
            </span>
            <nav className="flex flex-col gap-1.5">
              <a className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="#work">Work</a>
              <a className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="#services">Services</a>
              <a className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="#process">Process</a>
              <a className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="#about">About</a>
              <a className="text-[13px] text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="#contact">Contact</a>
            </nav>
          </div>

          {/* Direct Contact Col */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              Direct Contact
            </span>
            <div className="flex flex-col gap-1.5 text-[13px]">
              <a className="text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="mailto:ajwadxara99@gmail.com">
                Email
              </a>
              <a className="text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="https://wa.me/601110638176" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a className="text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="https://linkedin.com/in/ajwdxr" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="text-[#444748] dark:text-[#9ea5b3] hover:text-[#1a1c1b] dark:hover:text-[#ffffff] transition-colors" href="https://github.com/ajwdxr" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-6 border-t border-[#e2e3e1] dark:border-[#232836] transition-colors">
          <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3]">
            Built with too much coffee. © {new Date().getFullYear()} AJWDXR
          </span>
          <span className="font-mono text-[10px] text-[#444748] dark:text-[#9ea5b3]">
            Kuala Lumpur, MY
          </span>
        </div>
      </div>
    </footer>
  );
}
