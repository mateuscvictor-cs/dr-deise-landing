"use client"

import { motion } from "framer-motion"

interface FloatingElementsProps {
  variant?: "light" | "dark"
  className?: string
}

export function FloatingElements({ variant = "dark", className = "" }: FloatingElementsProps) {
  const isLight = variant === "light"
  
  const elements = [
    { size: 300, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 200, x: "80%", y: "60%", duration: 25, delay: 2 },
    { size: 150, x: "60%", y: "10%", duration: 18, delay: 1 },
    { size: 250, x: "20%", y: "70%", duration: 22, delay: 3 },
    { size: 100, x: "90%", y: "30%", duration: 15, delay: 0.5 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: isLight 
              ? "radial-gradient(circle, rgba(208,162,87,0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(137,182,200,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute w-px h-32 origin-top"
        style={{
          left: "15%",
          top: "40%",
          background: isLight 
            ? "linear-gradient(to bottom, transparent, rgba(208,162,87,0.2), transparent)"
            : "linear-gradient(to bottom, transparent, rgba(137,182,200,0.15), transparent)",
          transform: "rotate(45deg)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-px h-24 origin-top"
        style={{
          right: "25%",
          bottom: "30%",
          background: isLight 
            ? "linear-gradient(to bottom, transparent, rgba(208,162,87,0.15), transparent)"
            : "linear-gradient(to bottom, transparent, rgba(137,182,200,0.1), transparent)",
          transform: "rotate(-30deg)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
