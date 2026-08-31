"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "cyan" | "purple" | "pink" | "glass" | "primary" | "frost" | "titanium";
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "frost", children, ...props }, ref) => {
    const variantStyles = {
      frost: "bg-sky-500/10 text-sky-200 border-sky-400/25 hover:bg-sky-500/20 hover:border-sky-300/60 shadow-[0_0_20px_rgba(56,189,248,0.12)]",
      titanium: "bg-white/[0.06] text-slate-100 border-white/20 hover:bg-white/[0.12] hover:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
      cyan: "bg-sky-500/10 text-sky-200 border-sky-400/25 hover:bg-sky-500/20 hover:border-sky-300/60 shadow-[0_0_20px_rgba(56,189,248,0.12)]",
      purple: "bg-indigo-500/10 text-indigo-200 border-indigo-400/25 hover:bg-indigo-500/20 hover:border-indigo-300/60 shadow-[0_0_20px_rgba(129,140,248,0.12)]",
      pink: "bg-rose-500/10 text-rose-200 border-rose-400/25 hover:bg-rose-500/20 hover:border-rose-300/60 shadow-[0_0_20px_rgba(251,113,133,0.12)]",
      glass: "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.08] hover:border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
      primary: "bg-white text-slate-950 font-semibold border-white hover:bg-slate-100 shadow-[0_0_25px_rgba(255,255,255,0.25)]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300",
          "backdrop-blur-xl border overflow-hidden group cursor-pointer",
          variantStyles[variant] || variantStyles.frost,
          className
        )}
        {...props}
      >
        {/* Specular Light Reflection on Top */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
        
        {/* Subtle Liquid Shimmer */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />
        
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";
