"use client"

import { motion } from "framer-motion"

interface NeuralNetworkProps {
  className?: string
}

export function NeuralNetwork({ className = "" }: NeuralNetworkProps) {
  const layers = [
    { nodes: 4, x: 15 },
    { nodes: 6, x: 35 },
    { nodes: 8, x: 55 },
    { nodes: 6, x: 75 },
    { nodes: 3, x: 95 },
  ]

  const getNodeY = (layerNodes: number, nodeIndex: number) => {
    const spacing = 80 / (layerNodes + 1)
    return 10 + spacing * (nodeIndex + 1)
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-15" viewBox="0 0 110 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#89b6c8" />
            <stop offset="50%" stopColor="#d0a257" />
            <stop offset="100%" stopColor="#89b6c8" />
          </linearGradient>
          <filter id="neuralGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections between layers */}
        {layers.map((layer, layerIndex) => {
          if (layerIndex === layers.length - 1) return null
          const nextLayer = layers[layerIndex + 1]
          
          return layer.nodes > 0 && [...Array(layer.nodes)].map((_, nodeIndex) => (
            [...Array(nextLayer.nodes)].map((_, nextNodeIndex) => (
              <motion.line
                key={`conn-${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                x1={layer.x}
                y1={getNodeY(layer.nodes, nodeIndex)}
                x2={nextLayer.x}
                y2={getNodeY(nextLayer.nodes, nextNodeIndex)}
                stroke="url(#neuralGradient)"
                strokeWidth="0.15"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0.2, 0.4, 0],
                  pathLength: 1,
                }}
                transition={{
                  duration: 3,
                  delay: layerIndex * 0.3 + (nodeIndex + nextNodeIndex) * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))
          ))
        })}

        {/* Nodes */}
        {layers.map((layer, layerIndex) => (
          [...Array(layer.nodes)].map((_, nodeIndex) => (
            <motion.g key={`node-${layerIndex}-${nodeIndex}`}>
              <motion.circle
                cx={layer.x}
                cy={getNodeY(layer.nodes, nodeIndex)}
                r="1.2"
                fill="#d0a257"
                filter="url(#neuralGlow)"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 1.2, 1],
                  opacity: [0, 1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  delay: layerIndex * 0.2 + nodeIndex * 0.1,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              <motion.circle
                cx={layer.x}
                cy={getNodeY(layer.nodes, nodeIndex)}
                r="2"
                fill="transparent"
                stroke="#d0a257"
                strokeWidth="0.1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: layerIndex * 0.2 + nodeIndex * 0.1 + 0.5,
                  repeat: Infinity,
                  repeatDelay: 4.5,
                }}
              />
            </motion.g>
          ))
        ))}

        {/* Data flow particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="0.4"
            fill="#d0a257"
            filter="url(#neuralGlow)"
            initial={{ cx: 15, cy: 50, opacity: 0 }}
            animate={{
              cx: [15, 35, 55, 75, 95],
              cy: [
                getNodeY(4, i % 4),
                getNodeY(6, (i + 1) % 6),
                getNodeY(8, (i + 2) % 8),
                getNodeY(6, (i + 1) % 6),
                getNodeY(3, i % 3),
              ],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
