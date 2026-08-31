"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "solid" | "pill";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, onMouseMove, variant = "default", ...props }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
      if (onMouseMove) {
        onMouseMove(e);
      }
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-300",
          "bg-[#0d121f]/50 backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18]",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {/* Subtle Top Refraction Specular Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

        {/* Dynamic Interactive Liquid Cursor Spotlight */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--spotlight-color, rgba(255, 255, 255, 0.06)), transparent 80%)`
          }}
        />

        {/* Liquid Surface Sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/20 pointer-events-none" />

        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
