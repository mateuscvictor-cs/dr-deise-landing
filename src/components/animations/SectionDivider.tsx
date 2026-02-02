"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve"
  from?: "dark" | "light"
  to?: "dark" | "light"
  className?: string
}

export function SectionDivider({
  variant = "wave",
  from = "dark",
  to = "light",
  className = "",
}: SectionDividerProps) {
  const fromColor = from === "dark" ? "var(--color-primary)" : "var(--color-secondary)"
  const toColor = to === "dark" ? "var(--color-primary)" : "var(--color-secondary)"

  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    angle: "M0,0L1440,96L1440,0L0,0Z",
    curve: "M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z",
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ marginTop: "-1px" }}>
      <motion.svg
        viewBox="0 0 1440 96"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d={paths[variant]}
          fill={fromColor}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  )
}
