"use client"

import { motion } from "framer-motion"

interface TechElementsProps {
  variant?: "hero" | "section"
  className?: string
}

export function TechElements({ variant = "section", className = "" }: TechElementsProps) {
  const isHero = variant === "hero"

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* DNA Helix / Data Stream Lines */}
      <svg className="absolute top-0 right-0 w-1/3 h-full opacity-10" viewBox="0 0 100 400">
        <defs>
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d0a257" stopOpacity="0" />
            <stop offset="50%" stopColor="#d0a257" stopOpacity="1" />
            <stop offset="100%" stopColor="#d0a257" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`data-line-${i}`}
            x1={20 + i * 10}
            y1="0"
            x2={20 + i * 10}
            y2="400"
            stroke="url(#dataGradient)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Hexagon Grid Pattern */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {[...Array(6)].map((_, row) => (
            [...Array(6)].map((_, col) => {
              const x = col * 35 + (row % 2 === 0 ? 0 : 17.5)
              const y = row * 30
              return (
                <motion.polygon
                  key={`hex-${row}-${col}`}
                  points={`${x},${y + 10} ${x + 8.7},${y + 5} ${x + 8.7},${y - 5} ${x},${y - 10} ${x - 8.7},${y - 5} ${x - 8.7},${y + 5}`}
                  fill="none"
                  stroke="#89b6c8"
                  strokeWidth="0.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    delay: (row + col) * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              )
            })
          ))}
        </svg>
      </div>

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Tech Brackets */}
      {isHero && (
        <>
          <svg className="absolute top-20 left-8 w-16 h-16 opacity-20" viewBox="0 0 50 50">
            <motion.path
              d="M0 15 L0 0 L15 0"
              fill="none"
              stroke="#d0a257"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.path
              d="M0 35 L0 50 L15 50"
              fill="none"
              stroke="#d0a257"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </svg>
          <svg className="absolute top-20 right-8 w-16 h-16 opacity-20" viewBox="0 0 50 50">
            <motion.path
              d="M50 15 L50 0 L35 0"
              fill="none"
              stroke="#d0a257"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
            <motion.path
              d="M50 35 L50 50 L35 50"
              fill="none"
              stroke="#d0a257"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </svg>
        </>
      )}

      {/* Floating Data Points */}
      {[...Array(isHero ? 12 : 6)].map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-1 h-1 bg-accent rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* Binary/Code Rain Effect - Subtle */}
      <div className="absolute top-0 left-1/4 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-accent whitespace-nowrap"
            style={{ left: `${i * 40}px` }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 500, opacity: [0, 0.8, 0] }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>

      {/* Pulse Rings */}
      {isHero && (
        <div className="absolute bottom-1/4 right-1/4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute w-32 h-32 border border-accent/20 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{
                scale: [0.5, 2, 2.5],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 1.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
