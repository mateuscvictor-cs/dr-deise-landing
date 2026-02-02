"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface HighlightTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function HighlightText({ children, className = "", delay = 0 }: HighlightTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </span>
  )
}

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

interface AnimatedUnderlineProps {
  children: ReactNode
  className?: string
}

export function AnimatedUnderline({ children, className = "" }: AnimatedUnderlineProps) {
  return (
    <span className={`relative inline-block group ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </span>
  )
}
