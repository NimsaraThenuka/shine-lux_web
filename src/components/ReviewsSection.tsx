import { useState, useEffect } from "react"
import Eyebrow from "./Eyebrow"
import Icon from "./Icon"

interface Review {
  id: string
  name: string
  location: string
  service: string
  rating: number
  text: string
  initials: string
  tag: string
}

const reviews: Review[] = [
  // Slide 1
  {
    id: "1",
    name: " Jenkins",
    location: "South Yarra, VIC",
    service: "End of Lease Clean",
    rating: 5,
    tag: "Bond Refunded",
    text: "Booked Shine LUX for our 3-bedroom townhouse bond clean in South Yarra. The real estate agent was blown away by the oven and bathroom tiles. 100% full bond refund received with zero disputes.",
    initials: "SJ",
  },
  {
    id: "2",
    name: "David & Michelle T.",
    location: "Paddington, NSW",
    service: "Regular Fortnightly Clean",
    rating: 5,
    tag: "Recurring Client",
    text: "Having Shine LUX come fortnightly has been a lifesaver with two young kids and full-time jobs. Always punctual, thorough, and careful with our timber floors. Coming home on cleaning days is the best feeling.",
    initials: "DT",
  },
  {
    id: "3",
    name: "Marcus Vance",
    location: "Newstead, QLD",
    service: "Commercial Office Clean",
    rating: 5,
    tag: "Corporate Client",
    text: "They manage our 45-desk tech agency office in Brisbane. Everything from boardrooms to kitchenettes is kept immaculately clean. Professional communication, reliable security protocols, and great attention to detail.",
    initials: "MV",
  },
  // Slide 2
  {
    id: "4",
    name: "Chloe Henderson",
    location: "Subiaco, WA",
    service: "Steam & Carpet Clean",
    rating: 5,
    tag: "Carpet Restored",
    text: "Our living room wool carpet had stubborn stains from pets and foot traffic. The team brought it back to life without any harsh chemical smells. Prompt, friendly, and exceptional standard of work.",
    initials: "CH",
  },
  {
    id: "5",
    name: "Liam O'Connor",
    location: "Gold Coast, QLD",
    service: "One-Off Deep Clean",
    rating: 5,
    tag: "Seasonal Reset",
    text: "Booked a seasonal deep clean before hosting family for the holidays. Every window sill, splashback, and fixture was sparkling. Truly elevated service compared to other cleaners we've used in the past.",
    initials: "LO",
  },
  {
    id: "6",
    name: "Rebecca Zhang",
    location: "Norwood, SA",
    service: "Builders Cleaning",
    rating: 5,
    tag: "New Handover",
    text: "Post-renovation fine dust was everywhere across our new extension. Shine LUX meticulously cleared every surface, cabinetry interior, and glass panel before our handover. Flawless execution.",
    initials: "RZ",
  },
  // Slide 3
  {
    id: "7",
    name: "James & Emma Wilson",
    location: "Manly, NSW",
    service: "Window & Glass Clean",
    rating: 5,
    tag: "Crystal Clear",
    text: "Our coastal home gets salt haze and grime quickly on second-storey glass. The team arrived on time with purified water poles and left every pane crystal clear. The ocean views are back to perfection.",
    initials: "JW",
  },
  {
    id: "8",
    name: "Sophie Campbell",
    location: "Hawthorn, VIC",
    service: "School Facility Clean",
    rating: 5,
    tag: "Verified Client",
    text: "Dependable, thorough, and extremely compliant with hygiene standards. They service our tutoring centre and classrooms, always maintaining an immaculate and safe learning environment for children.",
    initials: "SC",
  },
  {
    id: "9",
    name: "Daniel Miller",
    location: "Brisbane, QLD",
    service: "Apartment Handover Clean",
    rating: 5,
    tag: "Deposit Returned",
    text: "Needed an urgent turnaround on an apartment handover on short notice. The Shine LUX team was accommodating, highly communicative, and left the place spotless. Got my full deposit back without hassle.",
    initials: "DM",
  },
]

export default function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768
    }
    return false
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile((prev) => {
        if (prev !== mobile) {
          setCurrentSlide(0)
          return mobile
        }
        return prev
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // On desktop: 3 groups of 3 reviews. On mobile: 9 individual slides (one by one)!
  const slideGroups: Review[][] = isMobile
    ? reviews.map((item) => [item])
    : [
        reviews.slice(0, 3),
        reviews.slice(3, 6),
        reviews.slice(6, 9),
      ]

  const totalSlides = slideGroups.length

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4500)

    return () => clearInterval(timer)
  }, [isPaused, totalSlides, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsPaused(false)
    if (touchStartX === null || touchEndX === null) return
    const distance = touchStartX - touchEndX
    const isLeftSwipe = distance > 40
    const isRightSwipe = distance < -40

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  return (
    <section className="reviews-section-v2 section">
      <div className="reviews-v2-header">
        <div className="reviews-v2-title-area">
          <Eyebrow>Client Experiences</Eyebrow>
          <h2>
            Trusted Across <em>Australian Spaces</em>
          </h2>
          <p>
            Real feedback from homeowners, tenants, and business managers
            experiencing the Shine LUX standard.
          </p>
        </div>

        <div className="reviews-v2-controls">
          <button
            type="button"
            className="reviews-arrow-btn"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <Icon name="arrow" size={18} />
          </button>

          <div className="reviews-dots">
            {slideGroups.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`reviews-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to review slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="reviews-arrow-btn reviews-arrow-next"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>

      <div
        className="reviews-v2-slider-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="reviews-v2-slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideGroups.map((group, groupIndex) => (
            <div className="reviews-v2-group" key={groupIndex}>
              {group.map((item) => (
                <article className="review-box" key={item.id}>
                  <div className="review-box-header">
                    <div className="review-box-stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Icon key={i} name="star" size={15} />
                      ))}
                    </div>
                    <span className="review-box-tag">{item.tag}</span>
                  </div>

                  <p className="review-box-text">
                    "{item.text}"
                  </p>

                  <div className="review-box-footer">
                    <div className="review-box-author">
                      <span className="review-box-avatar">
                        {item.initials}
                      </span>
                      <div className="review-box-author-info">
                        <strong className="review-box-name">{item.name}</strong>
                        <div className="review-box-subline">
                          <span className="review-box-service">{item.service}</span>
                          <span className="review-box-bullet">•</span>
                          <span className="review-box-location">
                            <Icon name="pin" size={11} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-v2-bottom-bar">
        <span>
          <Icon name="check" size={16} /> 100% Bond Back Guarantee Track Record
        </span>
        <span>
          <Icon name="check" size={16} /> Fully Insured & Police-Cleared Team
        </span>
        <span>
          <Icon name="check" size={16} /> Transparent Upfront Pricing
        </span>
      </div>
    </section>
  )
}
