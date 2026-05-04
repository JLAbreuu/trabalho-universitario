"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface LiquidGlassCardProps extends HTMLMotionProps<"div"> {
  accentColor?: string;
  isHovered?: boolean;
  interactive?: boolean; // if true, uses spring physics for hover/tap
}

export const LiquidGlassCard = forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  (
    {
      className = "",
      style,
      accentColor,
      children,
      isHovered = false,
      interactive = true,
      whileHover,
      whileTap,
      transition,
      ...props
    },
    ref
  ) => {
    // Spring physics configuration following Apple HIG
    const springConfig = { type: "spring", stiffness: 350, damping: 25 };

    // Default hover and tap animations if interactive is true and not manually overridden
    const defaultWhileHover = interactive && !isHovered ? { 
      scale: 1.02, 
      y: -4,
      zIndex: 10,
      backgroundColor: accentColor ? `${accentColor}08` : "rgba(255,255,255,0.04)",
      backgroundImage: accentColor 
        ? `radial-gradient(circle at center, ${accentColor}20 0%, transparent 70%)` 
        : `radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)`,
      boxShadow: accentColor 
        ? `0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px ${accentColor}30, 0 0 40px -10px ${accentColor}15` 
        : `0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.15), 0 0 40px -10px rgba(255,255,255,0.05)`
    } : undefined;
    const defaultWhileTap = interactive ? { scale: 0.97 } : undefined;

    return (
      <motion.div
        ref={ref}
        className={`liquid-glass ${className}`}
        whileHover={whileHover !== undefined ? whileHover : defaultWhileHover}
        whileTap={whileTap !== undefined ? whileTap : defaultWhileTap}
        transition={{
          scale: springConfig,
          y: springConfig,
          boxShadow: springConfig,
          backgroundColor: springConfig,
          backgroundImage: springConfig,
          ...(transition as any),
        }}
        style={{
          borderRadius: "var(--radius-xl)",
          backgroundColor: isHovered && accentColor ? `${accentColor}08` : "rgba(255,255,255,0.02)",
          zIndex: isHovered ? 10 : 1,
          backgroundImage: isHovered && accentColor 
            ? `radial-gradient(circle at center, ${accentColor}20 0%, transparent 70%)` 
            : `radial-gradient(circle at center, rgba(255,255,255,0) 0%, transparent 70%)`,
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          boxShadow:
            isHovered && accentColor
              ? `0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px ${accentColor}30, 0 0 40px -10px ${accentColor}15`
              : "0 10px 30px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.05)",
          borderLeft:
            accentColor && isHovered
              ? `3px solid ${accentColor}`
              : accentColor
              ? `1px solid ${accentColor}30`
              : "1px solid rgba(255,255,255,0.1)",
          overflow: "visible",
          ...style,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

LiquidGlassCard.displayName = "LiquidGlassCard";
