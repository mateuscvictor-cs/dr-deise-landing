"use client"

import React from "react"

const leftCircuits = [
  { path: "M -20 300 H 150 L 180 270 H 300 L 330 300 H 450", dots: [[150, 300], [180, 270], [300, 270], [330, 300], [450, 300]] },
  { path: "M -20 320 H 120 L 150 350 H 250 L 280 320 H 400", dots: [[120, 320], [150, 350], [250, 350], [280, 320], [400, 320]] },
  { path: "M -20 280 H 100 L 130 250 H 220 L 250 280 H 350", dots: [[100, 280], [130, 250], [220, 250], [250, 280], [350, 280]] },
  { path: "M -20 340 H 200 L 230 370 H 350 L 380 340 H 420", dots: [[200, 340], [230, 370], [350, 370], [380, 340], [420, 340]] },
  { path: "M -20 260 H 180 L 210 230 H 300 L 330 260 H 380", dots: [[180, 260], [210, 230], [300, 230], [330, 260], [380, 260]] },
  { path: "M -20 360 H 100 L 130 390 H 200 L 230 360 H 300", dots: [[100, 360], [130, 390], [200, 390], [230, 360], [300, 360]] },
  { path: "M -20 240 H 80 L 110 210 H 250 L 280 240 H 320", dots: [[80, 240], [110, 210], [250, 210], [280, 240], [320, 240]] },
  { path: "M -20 380 H 160 L 190 410 H 280 L 310 380 H 360", dots: [[160, 380], [190, 410], [280, 410], [310, 380], [360, 380]] },
  { path: "M -20 220 H 140 L 170 190 H 220", dots: [[140, 220], [170, 190], [220, 190]] },
  { path: "M -20 400 H 220 L 250 430 H 300", dots: [[220, 400], [250, 430], [300, 430]] }
]

export function QuizCircuitBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%)"
      }}
    >
      <div className="absolute inset-0 opacity-[0.09] md:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="quiz-dot-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="var(--color-primary-medium)" />
            <circle cx="50" cy="40" r="1.5" fill="var(--color-primary-medium)" />
            <circle cx="30" cy="70" r="2.5" fill="var(--color-primary-medium)" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#quiz-dot-pattern)" />
        </svg>
      </div>

      <svg width="0" height="0" className="hidden">
        <defs>
          <filter id="quiz-circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute top-1/2 -left-8 md:left-0 h-[620px] md:h-[800px] w-[78vw] md:w-full max-w-none md:max-w-[45vw] -translate-y-1/2 opacity-90 md:opacity-70"
        viewBox="0 0 500 600"
        preserveAspectRatio="xMinYMid slice"
        fill="none"
      >
        <g
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#quiz-circuit-glow)"
        >
          {leftCircuits.map((circuit, i) => (
            <React.Fragment key={`l-circ-${i}`}>
              <path d={circuit.path} className="opacity-50 md:opacity-30" />
              {circuit.dots.map((dot, j) => {
                const isEndNode = j === circuit.dots.length - 1
                return (
                  <circle
                    key={`l-dot-${i}-${j}`}
                    cx={dot[0]}
                    cy={dot[1]}
                    r={isEndNode ? "3.5" : "1.5"}
                    fill="var(--color-accent)"
                    className={isEndNode ? "animate-pulse" : "opacity-90 md:opacity-70"}
                  />
                )
              })}
            </React.Fragment>
          ))}
        </g>
      </svg>

      <svg
        className="absolute top-1/2 -right-8 md:right-0 h-[620px] md:h-[800px] w-[78vw] md:w-full max-w-none md:max-w-[45vw] -translate-y-1/2 opacity-90 md:opacity-70 scale-x-[-1]"
        viewBox="0 0 500 600"
        preserveAspectRatio="xMinYMid slice"
        fill="none"
      >
        <g
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#quiz-circuit-glow)"
        >
          {leftCircuits.map((circuit, i) => (
            <React.Fragment key={`r-circ-${i}`}>
              <path d={circuit.path} className="opacity-50 md:opacity-30" />
              {circuit.dots.map((dot, j) => {
                const isEndNode = j === circuit.dots.length - 1
                return (
                  <circle
                    key={`r-dot-${i}-${j}`}
                    cx={dot[0]}
                    cy={dot[1]}
                    r={isEndNode ? "3.5" : "1.5"}
                    fill="var(--color-accent)"
                    className={isEndNode ? "animate-pulse" : "opacity-90 md:opacity-70"}
                  />
                )
              })}
            </React.Fragment>
          ))}
        </g>
      </svg>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[80vw] h-[75vh] md:h-[80vh] blur-[100px] rounded-[100%] opacity-[0.05] md:opacity-[0.03]"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </div>
  )
}
