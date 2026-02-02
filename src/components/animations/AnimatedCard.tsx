"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "border" | "none"
  delay?: number
}

export function AnimatedCard({
  children,
  className = "",
  hoverEffect = "lift",
  delay = 0,
}: AnimatedCardProps) {
  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return {
          y: -8,
          boxShadow: "0 20px 40px rgba(13, 31, 61, 0.15), 0 0 0 1px rgba(208, 162, 87, 0.1)",
        }
      case "glow":
        return {
          boxShadow: "0 0 30px rgba(208, 162, 87, 0.2), 0 10px 40px rgba(13, 31, 61, 0.1)",
        }
      case "border":
        return {
          boxShadow: "0 0 0 2px rgba(208, 162, 87, 0.5), 0 10px 30px rgba(13, 31, 61, 0.1)",
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={hoverEffect !== "none" ? getHoverStyles() : undefined}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedCardDarkProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCardDark({
  children,
  className = "",
  delay = 0,
}: AnimatedCardDarkProps) {
  return (
    <motion.div
      className={`bg-primary-light rounded-2xl p-6 md:p-8 border border-white/10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        borderColor: "rgba(208, 162, 87, 0.3)",
        boxShadow: "0 0 30px rgba(208, 162, 87, 0.1)",
      }}
    >
      {children}
    </motion.div>
  )
}
