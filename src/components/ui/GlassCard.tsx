import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, onMouseMove, ...props }, ref) => {
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
          "glass-card rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-white/10",
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {/* Cyberpunk corner brackets */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 opacity-30 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ borderColor: 'var(--hover-border, rgba(255,255,255,0.15))' }} />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-30 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ borderColor: 'var(--hover-border, rgba(255,255,255,0.15))' }} />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-30 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ borderColor: 'var(--hover-border, rgba(255,255,255,0.15))' }} />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 opacity-30 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ borderColor: 'var(--hover-border, rgba(255,255,255,0.15))' }} />

        {/* Subtle default gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Dynamic spotlight gradient using CSS variables */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(250px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--spotlight-color, rgba(255, 255, 255, 0.05)), transparent 80%)`
          }}
        />
        
        <div className="relative z-10">{children as React.ReactNode}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
