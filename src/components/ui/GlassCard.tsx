"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlassCardProps {
  children: ReactNode
  variant?: "light" | "dark"
  className?: string
  hover?: boolean
}

export function GlassCard({ 
  children, 
  variant = "light", 
  className = "",
  hover = true 
}: GlassCardProps) {
  const variants = {
    light: "bg-white/70 backdrop-blur-md border-white/50 shadow-[0_8px_32px_rgba(13,31,61,0.08)]",
    dark: "bg-primary/40 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
  }

  const hoverEffect = hover ? {
    boxShadow: variant === "light" 
      ? "0 20px 50px rgba(208, 162, 87, 0.15), 0 0 0 1px rgba(208, 162, 87, 0.2)"
      : "0 20px 50px rgba(208, 162, 87, 0.2), 0 0 0 1px rgba(208, 162, 87, 0.3)",
    y: -4,
  } : {}

  return (
    <motion.div
      className={`
        relative rounded-2xl border p-6
        ${variants[variant]}
        ${className}
      `}
      whileHover={hoverEffect}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export function GlassCardDark({ children, className = "", hover = true }: Omit<GlassCardProps, "variant">) {
  return (
    <GlassCard variant="dark" className={className} hover={hover}>
      {children}
    </GlassCard>
  )
}
