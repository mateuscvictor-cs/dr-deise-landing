"use client"

import { motion } from "framer-motion"

interface SectionLabelProps {
  children: string
  variant?: "lines" | "brackets" | "dot"
  className?: string
  dark?: boolean
}

export function SectionLabel({ 
  children, 
  variant = "lines", 
  className = "",
  dark = false 
}: SectionLabelProps) {
  const textColor = dark ? "text-white/70" : "text-primary/70"
  const lineColor = dark ? "bg-accent/50" : "bg-accent"

  const variants = {
    lines: (
      <motion.div 
        className={`flex items-center gap-4 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className={`h-px w-8 ${lineColor}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0 }}
        />
        <span className={`text-sm font-medium tracking-[0.2em] uppercase ${textColor}`}>
          {children}
        </span>
        <motion.span 
          className={`h-px w-8 ${lineColor}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 1 }}
        />
      </motion.div>
    ),
    brackets: (
      <motion.div 
        className={`flex items-center gap-2 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent font-light">[</span>
        <span className={`text-sm font-medium tracking-[0.15em] uppercase ${textColor}`}>
          {children}
        </span>
        <span className="text-accent font-light">]</span>
      </motion.div>
    ),
    dot: (
      <motion.div 
        className={`flex items-center gap-3 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="w-2 h-2 rounded-full bg-accent"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        <span className={`text-sm font-medium tracking-[0.15em] uppercase ${textColor}`}>
          {children}
        </span>
      </motion.div>
    ),
  }

  return variants[variant]
}
