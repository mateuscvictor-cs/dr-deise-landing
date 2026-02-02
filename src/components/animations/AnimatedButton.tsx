"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "white"
  className?: string
  disabled?: boolean
  type?: "button" | "submit"
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}: AnimatedButtonProps) {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-colors"
  
  const variantStyles = {
    primary: "bg-accent text-primary hover:bg-accent-light",
    secondary: "bg-transparent text-white border-2 border-accent hover:bg-accent hover:text-primary",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary border border-accent/30 hover:border-accent",
  }

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        boxShadow: disabled ? "none" : "0 10px 40px rgba(208, 162, 87, 0.3)",
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </MotionComponent>
  )
}
