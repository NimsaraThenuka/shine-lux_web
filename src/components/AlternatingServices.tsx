import { useEffect, useRef } from "react"
import { services } from "../data/services"
import Eyebrow from "./Eyebrow"
import Icon from "./Icon"
import { Button } from "./Navigation"

export default function AlternatingServices() {
  const rowRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const checkInitial = () => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      rowRefs.current.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= windowHeight * 0.92 && rect.bottom >= 0) {
          el.classList.add("is-inview")
        } else {
          el.classList.remove("is-inview")
        }
      })

      if (typeof window !== "undefined" && window.location.hash) {
        const hashEl = document.querySelector(window.location.hash)
        if (hashEl) {
          hashEl.classList.add("is-inview")
        }
      }
    }

    checkInitial()
    const timer = setTimeout(checkInitial, 150)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview")
          } else {
            entry.target.classList.remove("is-inview")
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: "-20px 0px -40px 0px",
      }
    )

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="editorial-services-section section" data-no-scroll-reveal="true">
      <div className="center-heading">
        <Eyebrow>Comprehensive Care • Transparent Pricing</Eyebrow>
        <h2>
          Our Specialised <em>Cleaning Services</em>
        </h2>
        <p>
          Thirteen distinct cleaning solutions tailored around your space,
          schedule, and highest standards. All services backed by vetted,
          insured Australian professionals.
        </p>
      </div>

      <div className="editorial-services-container">
        {services.map((service, index) => {
          const numberFormatted =
            index + 1 < 10 ? `0${index + 1}` : `${index + 1}`

          return (
            <article
              key={service.slug}
              id={service.slug}
              ref={(el) => {
                rowRefs.current[index] = el
              }}
              className={`editorial-service-row ${
                index % 2 === 1 ? "row-reversed" : ""
              }`}
            >
              {/* Left Column: Landscape Rounded Photo with Bottom-Left Price Tag */}
              <div className="editorial-media-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="editorial-image"
                />

                {/* Top-Left: Service Index Badge */}
                <div className="editorial-number-pill">
                  <Icon name={service.icon} size={14} />
                  <span>0{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                </div>

                {/* Bottom-Left: White Pill Price Badge (Matches User Reference Image) */}
                <div className="editorial-price-pill">
                  <span>{service.price.toLowerCase().startsWith("from") ? service.price : `From ${service.price}`}</span>
                </div>
              </div>

              {/* Right Column: Clean Editorial Content */}
              <div className="editorial-content-wrap">
                <span className="editorial-kicker">
                  Shine LUX • Service {numberFormatted}
                </span>

                <h3 className="editorial-title">{service.title}</h3>

                <p className="editorial-desc">{service.description}</p>

                {/* 2-Column Inclusions Checklist (Matches Reference Image) */}
                <div className="editorial-inclusions-grid">
                  {service.inclusions.map((point) => (
                    <div key={point} className="editorial-inclusion-item">
                      <span className="editorial-check" aria-hidden="true">
                        <Icon name="check" size={13} />
                      </span>
                      <span className="editorial-point-text">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row: Pill Button + Trust Note */}
                <div className="editorial-action-row">
                  <Button
                    to={`/contact?service=${service.slug}`}
                    className="editorial-book-btn"
                  >
                    Book This Service
                  </Button>
                  <div className="editorial-trust-tag">
                    <Icon name="shield" size={15} />
                    <span>100% Insured & Police Vetted</span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
