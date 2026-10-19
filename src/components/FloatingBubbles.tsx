import React from "react"

interface BubbleConfig {
  size: number
  left: string
  duration: number
  delay: number
  opacity: number
  sway1: string
  sway2: string
}

const defaultBubbles: BubbleConfig[] = [
  { size: 28, left: "7%", duration: 8.5, delay: 0.5, opacity: 0.65, sway1: "12px", sway2: "-10px" },
  { size: 44, left: "18%", duration: 11.0, delay: 3.2, opacity: 0.55, sway1: "-15px", sway2: "12px" },
  { size: 18, left: "28%", duration: 7.2, delay: 1.8, opacity: 0.70, sway1: "8px", sway2: "-14px" },
  { size: 56, left: "40%", duration: 13.5, delay: 5.5, opacity: 0.45, sway1: "-18px", sway2: "15px" },
  { size: 22, left: "52%", duration: 8.0, delay: 0.0, opacity: 0.68, sway1: "14px", sway2: "-8px" },
  { size: 36, left: "64%", duration: 10.2, delay: 4.1, opacity: 0.58, sway1: "-12px", sway2: "16px" },
  { size: 20, left: "75%", duration: 7.8, delay: 2.2, opacity: 0.72, sway1: "10px", sway2: "-12px" },
  { size: 48, left: "85%", duration: 12.0, delay: 6.0, opacity: 0.50, sway1: "-16px", sway2: "10px" },
  { size: 16, left: "93%", duration: 7.0, delay: 1.2, opacity: 0.75, sway1: "6px", sway2: "-8px" },
]

export default function FloatingBubbles({ className = "" }: { className?: string }) {
  return (
    <div className={`floating-bubbles-container ${className}`} aria-hidden="true">
      {defaultBubbles.map((bubble, i) => (
        <span
          key={i}
          className="floating-bubble"
          style={
            {
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              "--bubble-opacity": bubble.opacity,
              "--sway-1": bubble.sway1,
              "--sway-2": bubble.sway2,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
