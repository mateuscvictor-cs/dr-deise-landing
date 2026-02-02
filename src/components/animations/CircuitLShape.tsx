"use client"

import { motion } from "framer-motion"

const paths = [
  "M 8 0 v 120 h 70",
  "M 28 20 v 90 h 50",
  "M 48 40 v 70 h 30",
  "M 8 140 v 100 h 60 v 30",
  "M 28 160 v 80 h 50 v 20",
  "M 48 180 v 60 h 30",
]

const dots = [
  { cx: 8, cy: 0 }, { cx: 8, cy: 120 }, { cx: 78, cy: 120 },
  { cx: 28, cy: 20 }, { cx: 28, cy: 110 }, { cx: 78, cy: 110 },
  { cx: 48, cy: 40 }, { cx: 48, cy: 110 }, { cx: 78, cy: 110 },
  { cx: 8, cy: 140 }, { cx: 8, cy: 240 }, { cx: 68, cy: 240 }, { cx: 68, cy: 270 },
  { cx: 28, cy: 160 }, { cx: 28, cy: 240 }, { cx: 78, cy: 240 }, { cx: 78, cy: 260 },
  { cx: 48, cy: 180 }, { cx: 48, cy: 240 }, { cx: 78, cy: 240 },
]

export function CircuitLShape({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <svg
        className="absolute left-0 top-0 h-full w-auto max-w-[45%] opacity-40"
        viewBox="0 0 100 320"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id="circuit-l-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-accent-light)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#circuit-l-gold)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.4, delay: i * 0.12, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: i * 0.12 },
              }}
            />
          ))}
        </g>
        <g fill="url(#circuit-l-gold)">
          {dots.map((pos, i) => (
            <motion.circle
              key={i}
              r="2.2"
              cx={pos.cx}
              cy={pos.cy}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.8 + i * 0.04 }}
            />
          ))}
        </g>
        <g fill="none" stroke="url(#circuit-l-gold)" strokeWidth="1" strokeOpacity="0.6">
          {dots.filter((_, i) => i % 3 === 0).map((pos, i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="5"
              cx={pos.cx}
              cy={pos.cy}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, delay: 2 + i * 0.4, repeat: Infinity, repeatDelay: 0.5 }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
