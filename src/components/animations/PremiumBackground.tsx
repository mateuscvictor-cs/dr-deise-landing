"use client"

import { motion } from "framer-motion"

interface PremiumBackgroundProps {
  variant?: "hero" | "section" | "minimal"
  className?: string
}

export function PremiumBackground({ variant = "section", className = "" }: PremiumBackgroundProps) {
  const isHero = variant === "hero"
  const isMinimal = variant === "minimal"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Losango grande - canto superior direito */}
      {!isMinimal && (
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80"
          initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 45, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-full border border-accent/10 rounded-3xl"
            animate={{ 
              borderColor: ["rgba(208, 162, 87, 0.1)", "rgba(208, 162, 87, 0.2)", "rgba(208, 162, 87, 0.1)"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {isHero && (
            <motion.div
              className="absolute inset-8 border border-accent/5 rounded-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}

      {/* Círculo gradiente - canto inferior esquerdo */}
      <motion.div
        className={`absolute ${isHero ? "-bottom-40 -left-40 w-96 h-96" : "-bottom-20 -left-20 w-64 h-64"}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-accent/8 via-accent/3 to-transparent" />
      </motion.div>

      {/* Círculo secundário - canto superior esquerdo (apenas hero) */}
      {isHero && (
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="w-full h-full rounded-full border border-primary-medium/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Pontos decorativos dourados */}
      {!isMinimal && (
        <>
          <motion.div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/40"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-accent/30"
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/20"
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </>
      )}

      {/* Linha decorativa vertical (apenas hero) */}
      {isHero && (
        <motion.div
          className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      )}

      {/* Hexágono sutil - canto inferior direito (apenas section) */}
      {variant === "section" && (
        <motion.svg
          className="absolute bottom-10 right-10 w-24 h-24 opacity-5"
          viewBox="0 0 100 100"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.05, rotate: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="#d0a257"
            strokeWidth="1"
          />
        </motion.svg>
      )}
    </div>
  )
}
