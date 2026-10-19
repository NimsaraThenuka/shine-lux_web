import { useEffect, useState } from "react"

export default function ScrollExperience() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const sectionNodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(.alternating-services-section):not([data-no-scroll-reveal]), main > article:not([data-no-scroll-reveal])",
      ),
    )
    const itemNodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".service-card, .process-step, .reason-card, .values-grid > div, .article-card, .scope-list > div, .finder-card, .faq-item, .contact-points > div, .review-card, .trust-card",
      ),
    )

    sectionNodes.forEach((node) => {
      node.classList.add("scroll-reveal")
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        node.classList.add("is-visible")
      }
    })

    itemNodes.forEach((node, index) => {
      node.classList.add("reveal-item", `reveal-delay-${index % 4}`)
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        node.classList.add("is-visible")
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            // Remove when element leaves view so animation triggers every time on scroll
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold: 0.04, rootMargin: "0px 0px -30px 0px" },
    )

    sectionNodes.forEach((node) => observer.observe(node))
    itemNodes.forEach((node) => observer.observe(node))

    const onScroll = () => {
      const scrollY = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? scrollY / total : 0
      const clampedProgress = Math.min(Math.max(progress, 0), 1)

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${clampedProgress}`,
      )

      setScrollPercent(Math.round(clampedProgress * 100))
      setShowScrollTop(scrollY > 280)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Circular progress calculations for 48px circle
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <button
        type="button"
        className={`scroll-to-top-btn ${showScrollTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        title="Back to Top"
      >
        <svg
          className="scroll-progress-ring"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle
            className="ring-bg"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="2.5"
          />
          <circle
            className="ring-fill"
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="scroll-top-arrow" aria-hidden="true">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </span>
      </button>
    </>
  )
}
