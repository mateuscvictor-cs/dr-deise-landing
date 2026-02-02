"use client"

import { motion } from "framer-motion"

interface Node {
  x: number
  y: number
  connections: number[]
}

interface CircuitBackgroundProps {
  variant?: "hero" | "section" | "footer"
  className?: string
}

export function CircuitBackground({ variant = "section", className = "" }: CircuitBackgroundProps) {
  const nodes: Node[] = [
    { x: 5, y: 15, connections: [1, 3] },
    { x: 18, y: 8, connections: [2] },
    { x: 32, y: 18, connections: [4] },
    { x: 12, y: 35, connections: [4, 5] },
    { x: 28, y: 42, connections: [5] },
    { x: 45, y: 32, connections: [6] },
    { x: 58, y: 22, connections: [7] },
    { x: 72, y: 12, connections: [8] },
    { x: 85, y: 28, connections: [] },
    { x: 65, y: 52, connections: [10] },
    { x: 78, y: 65, connections: [11] },
    { x: 92, y: 48, connections: [] },
    { x: 15, y: 68, connections: [13] },
    { x: 35, y: 75, connections: [14] },
    { x: 52, y: 68, connections: [9] },
    { x: 3, y: 52, connections: [12] },
    { x: 48, y: 5, connections: [7] },
    { x: 68, y: 82, connections: [10] },
    { x: 95, y: 75, connections: [] },
    { x: 25, y: 92, connections: [13] },
    { x: 82, y: 92, connections: [18] },
  ]

  const getOpacity = () => {
    switch (variant) {
      case "hero": return 0.12
      case "footer": return 0.06
      default: return 0.08
    }
  }

  const nodeSize = 0.4
  const pulseSize = 0.8

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity: getOpacity() }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#89b6c8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d0a257" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node, i) => (
          node.connections.map((targetIndex, j) => {
            const target = nodes[targetIndex]
            if (!target) return null
            return (
              <motion.line
                key={`line-${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#lineGradient)"
                strokeWidth="0.15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  pathLength: { duration: 2.5, delay: i * 0.15, ease: "easeInOut" },
                  opacity: { duration: 10, delay: i * 0.15, repeat: Infinity, repeatDelay: 3 },
                }}
              />
            )
          })
        ))}

        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={nodeSize}
              fill="#d0a257"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.1, 1],
                opacity: [0, 0.9, 0.7, 0.9],
              }}
              transition={{
                duration: 4,
                delay: i * 0.12,
                repeat: Infinity,
                repeatDelay: 6,
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={pulseSize}
              fill="transparent"
              stroke="#d0a257"
              strokeWidth="0.08"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 2.5, 3],
                opacity: [0.4, 0.15, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.12 + 0.5,
                repeat: Infinity,
                repeatDelay: 7,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
