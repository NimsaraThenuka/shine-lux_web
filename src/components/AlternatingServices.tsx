import { useEffect, useRef, useState } from "react"
import { services } from "../data/services"
import { Service } from "../types"
import Eyebrow from "./Eyebrow"
import Icon from "./Icon"
import { Link } from "./Navigation"

export default function AlternatingServices() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const revealIndex = (index: number) => {
      setVisibleIndices((prev) => (prev.includes(index) ? prev : [...prev, index]))
    }

    const hideIndex = (index: number) => {
      setVisibleIndices((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : prev))
    }

    const checkVisibility = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      itemRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= windowHeight * 0.90 && rect.bottom >= windowHeight * 0.05) {
          revealIndex(index)
        } else {
          hideIndex(index)
        }
      })
    }

    // Run check on mount
    requestAnimationFrame(checkVisibility)
    const timer = setTimeout(checkVisibility, 200)

    // IntersectionObserver triggering as each card scrolls into view
    let observer: IntersectionObserver | null = null
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"))
            if (!isNaN(index)) {
              if (entry.isIntersecting) {
                revealIndex(index)
              } else {
                hideIndex(index)
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px",
        }
      )

      itemRefs.current.forEach((el) => {
        if (el && observer) observer.observe(el)
      })
    }

    // Backup passive scroll & resize listener
    const handleScroll = () => {
      requestAnimationFrame(checkVisibility)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Helper to render the primary service card (with photo, title, ideal for)
  const renderMainCard = (service: Service, index: number, isLeft: boolean) => (
    <article className="timeline-service-card">
      <Link to={`/services/${service.slug}`} className="card-media-wrap">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="card-media-img"
        />
        <div className="card-media-badges">
          <span className="card-icon-pill">
            <Icon name={service.icon} size={16} />
            <span>0{index + 1}</span>
          </span>
          <span className="card-side-tag">
            {isLeft ? "Residential & More" : "Specialised Care"}
          </span>
        </div>
      </Link>

      <div className="card-body-wrap">
        <div className="card-eyebrow-row">
          <span className="card-tagline-text">{service.tagline}</span>
        </div>

        <h3 className="card-service-title">
          <Link to={`/services/${service.slug}`}>{service.title}</Link>
        </h3>

        <p className="card-desc-text">{service.description}</p>

        {/* Ideal for pills */}
        <div className="card-highlights">
          <span className="highlights-label">Ideal For:</span>
          <div className="highlights-pills">
            {service.ideal.slice(0, 3).map((item) => (
              <span key={item} className="highlight-pill">
                <Icon name="check" size={13} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Link */}
        <div className="card-footer-action">
          <Link to={`/services/${service.slug}`} className="card-action-link">
            <span>Explore Service Details</span>
            <span className="card-action-circle" aria-hidden="true">
              <Icon name="arrow" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  )

  // Helper to render the complementary details card (filling the white space with scope, advice & facts)
  const renderDetailsCard = (service: Service, index: number) => (
    <div className="timeline-details-card">
      <div className="details-card-header">
        <div className="details-badge-group">
          <span className="details-kicker-badge">
            <Icon name="check" size={13} />
            Scope & Standards
          </span>
          <span className="details-service-ref">0{index + 1} • Inclusions</span>
        </div>
        <h4 className="details-card-title">
          What's Included in {service.title}
        </h4>
      </div>

      {/* Scope Checklist */}
      <div className="details-scope-section">
        <span className="details-sublabel">Core Inclusions Checklist</span>
        <ul className="details-scope-list">
          {service.scope.map((item) => (
            <li key={item}>
              <span className="details-check-icon">
                <Icon name="check" size={13} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Planning Note */}
      {service.planning && (
        <div className="details-planning-box">
          <p className="planning-box-text">{service.planning}</p>
        </div>
      )}

      {/* Trust Badges */}
      <div className="details-trust-bar">
        <span className="trust-badge-item">
          <Icon name="shield" size={15} />
          <span>100% Insured</span>
        </span>
        <span className="trust-badge-dot" aria-hidden="true">•</span>
        <span className="trust-badge-item">
          <Icon name="leaf" size={15} />
          <span>Safe Supplies</span>
        </span>
        <span className="trust-badge-dot" aria-hidden="true">•</span>
        <span className="trust-badge-item">
          <Icon name="award" size={15} />
          <span>Quality Guarantee</span>
        </span>
      </div>

      {/* Footer Quote Action */}
      <div className="details-card-footer">
        <Link to="/contact" className="details-quote-btn">
          <span>Get a Free Quote for {service.title}</span>
          <Icon name="arrow" size={15} />
        </Link>
      </div>
    </div>
  )

  return (
    <section
      className="alternating-services-section section"
      data-no-scroll-reveal="true"
    >
      <div className="center-heading">
        <Eyebrow>Comprehensive Care</Eyebrow>
        <h2>
          Not Sure Which <em>Clean You Need?</em>
        </h2>
        <p>
          Scroll down to explore each specialised service. Each solution is
          tailored around your property, preferred timing and priorities.
        </p>
      </div>

      <div className="services-timeline-wrap">
        {/* Vertical Central Spine Track */}
        <div className="timeline-spine-track" aria-hidden="true">
          <div className="timeline-spine-glow" />
        </div>

        <div className="services-timeline-items">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0
            const isVisible = visibleIndices.includes(index)

            return (
              <div
                key={service.slug}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`timeline-row ${isLeft ? "row-left" : "row-right"} ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                {/* Center Timeline Node Marker */}
                <div className="timeline-center-node" aria-hidden="true">
                  <div className="node-arm-left" />
                  <div className="node-ring">
                    <span className="node-number">0{index + 1}</span>
                  </div>
                  <div className="node-arm-right" />
                </div>

                {/* Left Side Column */}
                <div
                  className={`timeline-card-col timeline-col-left ${
                    isLeft ? "main-col" : "details-col"
                  }`}
                >
                  {isLeft
                    ? renderMainCard(service, index, true)
                    : renderDetailsCard(service, index)}
                </div>

                {/* Right Side Column */}
                <div
                  className={`timeline-card-col timeline-col-right ${
                    isLeft ? "details-col" : "main-col"
                  }`}
                >
                  {isLeft
                    ? renderDetailsCard(service, index)
                    : renderMainCard(service, index, false)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
