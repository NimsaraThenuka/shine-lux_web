import { useState } from "react"
import { ServiceDetail } from "../data/serviceDetails"
import { services } from "../data/services"
import Icon from "../components/Icon"
import Shell from "../components/Shell"
import { Button, Link } from "../components/Navigation"

interface ServiceDetailPageProps {
  detail: ServiceDetail
}

export default function ServiceDetailPage({ detail }: ServiceDetailPageProps) {
  const [activeTabId, setActiveTabId] = useState(1)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const activeTab = detail.tabs.find((t) => t.id === activeTabId) || detail.tabs[0]

  // All other services for moving showcase
  const otherServices = services.filter((s) => s.slug !== detail.slug)

  // Match the exact same image used on the /services page for this service
  const matchingService = services.find(
    (s) =>
      s.slug === detail.slug ||
      (detail.slug === "restaurant-kitchen-cleaning" && s.slug === "hotel-restaurant-kitchen-cleaning") ||
      (detail.slug === "hotel-restaurant-kitchen-cleaning" && s.slug === "restaurant-kitchen-cleaning")
  )
  const headerImage = matchingService?.image || detail.hero.image

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <Shell>
      {/* 1. Breadcrumbs */}
      <nav className="detail-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="detail-container">
          <ol className="detail-breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="active" aria-current="page">
              {detail.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="detail-hero-section">
        <div className="detail-container">
          <div className="detail-hero-grid">
            <div className="detail-hero-content">
              <span className="detail-eyebrow-pill">
                <Icon name="sparkles" size={14} />
                <span>{detail.hero.eyebrow}</span>
              </span>

              <h1 className="detail-hero-title">{detail.hero.headline}</h1>

              <p className="detail-hero-desc">{detail.hero.description}</p>

              <div className="detail-hero-actions">
                <Button
                  to={`/contact?service=${detail.slug}`}
                  className="detail-primary-btn"
                >
                  <span className="detail-btn-desktop-text">{detail.hero.ctaText}</span>
                  <span className="detail-btn-mobile-text">Request Quote</span>
                </Button>
                <a href="#in-depth-tabs" className="detail-secondary-btn">
                  <span>Explore Service Scopes</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="detail-trust-pills">
                <div className="detail-trust-item">
                  <Icon name="shield" size={15} />
                  <span>100% Fully Insured</span>
                </div>
                <div className="detail-trust-item">
                  <Icon name="user" size={15} />
                  <span>Police-Vetted Cleaners</span>
                </div>
                <div className="detail-trust-item">
                  <Icon name="star" size={15} />
                  <span>500+ 5 Star Reviews</span>
                </div>
              </div>
            </div>

            <div className="detail-hero-media">
              <div className="detail-hero-img-wrap">
                <img
                  src={headerImage}
                  alt={detail.hero.headline}
                  className="detail-hero-img"
                  loading="eager"
                />
                <div className="detail-hero-badge">
                  <span className="detail-badge-dot" />
                  <span>ShineLux Certified Clean</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. IN-DEPTH CLEANING SERVICES — TABS */}
      <section id="in-depth-tabs" className="detail-tabs-section">
        <div className="detail-container">
          <div className="detail-section-intro text-center">
            <span className="detail-section-kicker">
              <Icon name="layers" size={14} />
              <span>Comprehensive Coverage</span>
            </span>
            <h2 className="detail-section-heading">In-Depth Cleaning Services</h2>
            <p className="detail-section-sub">
              Switch through our specialized cleaning scopes below to see the dedicated care and visible results we deliver for every area.
            </p>
          </div>

          {/* Tab Navigation Pill Bar */}
          <div className="detail-tab-nav" role="tablist" aria-label="Cleaning Scopes">
            {detail.tabs.map((tab) => {
              const isActive = tab.id === activeTabId
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.id}`}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`detail-tab-btn ${isActive ? "active" : ""}`}
                >
                  <span className="detail-tab-num">0{tab.id}</span>
                  <span className="detail-tab-label-desktop">{tab.label}</span>
                  <span className="detail-tab-label-mobile">
                    {tab.shortLabel || tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tab Content Display Area with Dynamic Image Transition */}
          <div
            id={`tab-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-btn-${activeTab.id}`}
            className="detail-tab-panel"
          >
            <div className="detail-tab-grid">
              {/* Left Column: Scope Info */}
              <div className="detail-tab-info-card">
                <div className="detail-tab-pill-badge">
                  <span>Scope 0{activeTab.id} of 0{detail.tabs.length}</span>
                </div>

                <h3 className="detail-tab-title">{activeTab.title}</h3>

                {activeTab.subtitle && (
                  <p className="detail-tab-subtitle">{activeTab.subtitle}</p>
                )}

                <p className="detail-tab-description">{activeTab.description}</p>

                {/* What this service includes - Matching SkillCity */}
                <div className="detail-tab-includes-box">
                  <h4 className="detail-tab-includes-heading">
                    What this service includes
                  </h4>
                  <div className="detail-tab-bullets-grid">
                    {activeTab.bullets && activeTab.bullets.map((bullet, idx) => (
                      <div key={idx} className="detail-tab-bullet-row">
                        <span className="detail-bullet-dot" />
                        <span className="detail-bullet-text">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-tab-cta-wrap">
                  <Button
                    to={`/contact?service=${detail.slug}&scope=${encodeURIComponent(activeTab.label)}`}
                    className="detail-tab-book-btn"
                  >
                    <span>{activeTab.ctaText || "Book This Scope"}</span>
                  </Button>
                </div>
              </div>

              {/* Right Column: Dynamic Image for this Tab */}
              <div className="detail-tab-image-wrapper">
                <div className="detail-tab-image-inner">
                  <img
                    key={activeTab.image}
                    src={activeTab.image}
                    alt={`${detail.title} - ${activeTab.label}`}
                    className="detail-tab-img"
                    loading="lazy"
                  />
                  <div className="detail-tab-img-overlay">
                    <span className="detail-tab-img-caption">
                      <span className="caption-desktop">
                        {detail.title} • {activeTab.label}
                      </span>
                      <span className="caption-mobile">
                        {activeTab.label}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="detail-process-section">
        <div className="detail-container">
          <div className="detail-section-intro text-center">
            <span className="detail-section-kicker">
              <Icon name="clock" size={14} />
              <span>Step-by-Step Delivery</span>
            </span>
            <h2 className="detail-section-heading">Our Proven 4-Step Process</h2>
            <p className="detail-section-sub">
              From our first walkthrough to the final sparkle, we handle every detail with precision, integrity, and care.
            </p>
          </div>

          <div className="detail-process-grid">
            {detail.process.map((stepItem, idx) => (
              <div key={idx} className="detail-process-card">
                <div className="detail-process-card-top">
                  <span className="detail-step-number">{stepItem.step}</span>
                  <div className="detail-step-dot" />
                </div>
                <h3 className="detail-step-title">{stepItem.title}</h3>
                <p className="detail-step-desc">{stepItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="detail-faq-section">
        <div className="detail-container">
          <div className="detail-section-intro text-center">
            <span className="detail-section-kicker">
              <Icon name="sparkles" size={14} />
              <span>Clear Answers</span>
            </span>
            <h2 className="detail-section-heading">Frequently Asked Questions</h2>
            <p className="detail-section-sub">
              Have questions about our {detail.title}? Here are answers to the most common queries.
            </p>
          </div>

          <div className="detail-faq-list">
            {detail.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className={`detail-faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="detail-faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="detail-faq-question-text">{faq.question}</span>
                    <span className="detail-faq-icon" aria-hidden="true">
                      <Icon name="chevron" size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="detail-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="detail-cta-banner">
        <div className="detail-container">
          <div className="detail-cta-box">
            <div className="detail-cta-content">
              <span className="detail-cta-eyebrow">Ready for a Spotless Space?</span>
              <h2 className="detail-cta-heading">
                Book Your {detail.title} with ShineLux Today
              </h2>
              <p className="detail-cta-text">
                Get an instant, transparent quote with zero hidden fees. Australian owned, fully insured, and guaranteed to impress.
              </p>
              <div className="detail-cta-buttons">
                <Button
                  to={`/contact?service=${detail.slug}`}
                  light
                  className="detail-cta-main-btn"
                >
                  Request a Free Quote
                </Button>
                <Button to="/services" className="detail-cta-back-btn">
                  View All 15 Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OTHER SERVICES NAVIGATION - INFINITE MOVING SHOWCASE */}
      <section className="detail-more-services" aria-label="Explore All Specialised Services">
        <div className="detail-container">
          <div className="detail-more-header">
            <div>
              <span className="detail-section-kicker">
                <Icon name="sparkles" size={14} />
                <span>Continuous Moving Showcase</span>
              </span>
              <h3 className="detail-more-title">Explore All Specialised Services</h3>
            </div>
            <Link to="/services" className="detail-view-all-link">
              <span>See all 15 services</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Full-width continuous sliding track with edge fades */}
        <div className="detail-more-marquee-wrapper">
          <div className="detail-more-marquee-track">
            {/* Group 1 */}
            <div className="detail-more-marquee-group">
              {otherServices.map((s, idx) => (
                <Link
                  key={`group1-${s.slug}-${idx}`}
                  to={`/services/${s.slug}`}
                  className="detail-more-card"
                >
                  <div className="detail-more-img-wrap">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="detail-more-img"
                      loading="lazy"
                    />
                    <div className="detail-more-img-badge">
                      <span>{s.price}</span>
                    </div>
                  </div>
                  <div className="detail-more-body">
                    <span className="detail-more-category">{s.category}</span>
                    <h4 className="detail-more-card-title">{s.title}</h4>
                    <p className="detail-more-card-tagline">{s.tagline}</p>
                    <div className="detail-more-card-footer">
                      <span className="detail-more-action-label">Explore Scope</span>
                      <span className="detail-more-arrow" aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Group 2 (Duplicate for infinite seamless loop) */}
            <div className="detail-more-marquee-group" aria-hidden="true">
              {otherServices.map((s, idx) => (
                <Link
                  key={`group2-${s.slug}-${idx}`}
                  to={`/services/${s.slug}`}
                  className="detail-more-card"
                  tabIndex={-1}
                >
                  <div className="detail-more-img-wrap">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="detail-more-img"
                      loading="lazy"
                    />
                    <div className="detail-more-img-badge">
                      <span>{s.price}</span>
                    </div>
                  </div>
                  <div className="detail-more-body">
                    <span className="detail-more-category">{s.category}</span>
                    <h4 className="detail-more-card-title">{s.title}</h4>
                    <p className="detail-more-card-tagline">{s.tagline}</p>
                    <div className="detail-more-card-footer">
                      <span className="detail-more-action-label">Explore Scope</span>
                      <span className="detail-more-arrow" aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Shell>
  )
}
