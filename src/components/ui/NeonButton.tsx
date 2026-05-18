import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "cyan" | "purple" | "pink";
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", children, ...props }, ref) => {
    const colorClasses = {
      cyan: "border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10 neon-border-cyan",
      purple: "border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 neon-border-purple",
      pink: "border-[#FF4D9D] text-[#FF4D9D] hover:bg-[#FF4D9D]/10",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative px-6 py-3 rounded-lg border-2 font-space tracking-wider uppercase text-sm font-bold transition-colors duration-300",
          colorClasses[variant],
          className
        )}
        {...props}
      >
        {children as React.ReactNode}
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";
