import { useEffect, useRef, useState } from "react"

interface StatItem {
  target: number
  prefix?: string
  suffix?: string
  label: string
}

const stats: StatItem[] = [
  { target: 500, suffix: "+", label: "Happy Clients" },
  { target: 10, suffix: "+", label: "Years of Industry Experience" },
  { target: 100, suffix: "%", label: "Satisfaction Rate" },
  { target: 7, suffix: " Days", label: "A Week Service" },
]

export default function StatsCounter() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true)
          } else {
            setHasStarted(false)
            setCounts([0, 0, 0, 0])
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000 // 2.0s smooth ease
    let startTime: number | null = null
    let animId: number

    // Smooth exponential deceleration
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }

    const step = (now: number) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeOutExpo(progress)

      setCounts(
        stats.map((item) => Math.floor(ease * item.target))
      )

      if (progress < 1) {
        animId = requestAnimationFrame(step)
      } else {
        setCounts(stats.map((item) => item.target))
      }
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [hasStarted])

  return (
    <section
      ref={sectionRef}
      className="stats-counter-section"
      data-no-scroll-reveal="true"
    >
      <div className="stats-container">
        {/* Top luminous blue gradient accent line */}
        <div className="stats-top-accent-line" aria-hidden="true" />

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-accent-bar" aria-hidden="true" />
              <div className="stat-number-wrap">
                <span className="stat-number">
                  {stat.prefix || ""}
                  {counts[index]}
                </span>
                <span className="stat-suffix">{stat.suffix || ""}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom subtle blue gradient accent line */}
        <div className="stats-bottom-accent-line" aria-hidden="true" />
      </div>
    </section>
  )
}
