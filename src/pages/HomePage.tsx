import { images } from "../data/constants"
import { services } from "../data/services"
import AssuranceBand from "../components/AssuranceBand"
import Closing from "../components/Closing"
import CommitmentSection from "../components/CommitmentSection"
import ExperienceSection from "../components/ExperienceSection"
import Eyebrow from "../components/Eyebrow"
import Faq from "../components/Faq"
import Icon from "../components/Icon"
import { Button, Link } from "../components/Navigation"
import Process from "../components/Process"
import ReviewsSection from "../components/ReviewsSection"
import ServiceFinder from "../components/ServiceFinder"
import Shell from "../components/Shell"
import StatsCounter from "../components/StatsCounter"
import TextType from "../components/TextType"
import TrustMarquee from "../components/TrustMarquee"

export default function HomePage() {
  return (
    <Shell>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>Professional Cleaning Across Australia</Eyebrow>
          <h1>
            A Higher Standard of Clean.{" "}
            <span className="headline-secondary">
              <TextType
                as="span"
                text={[
                  "Trusted Across Australia.",
                  "For Residential & Workplaces.",
                  "Care You Can Count On.",
                ]}
                typingSpeed={65}
                pauseDuration={2200}
                deletingSpeed={35}
                deleteMode="backspace"
                cursorStyle="underscore"
                cursorGlide
                showCursor
                cursorColor="var(--royal)"
                className="hero-typing"
              />
            </span>
          </h1>
          <p>
            At <strong>ShineLux</strong>, we provide reliable,
            professional cleaning services for residential and commercial properties. We deliver exceptional results with care and attention to detail.

          </p>
          <div className="hero-cta-prompt">
            <span className="hero-cta-sparkle">
              <Icon name="sparkles" size={16} />
            </span>
            <span className="hero-cta-text">
              Let Your Space Shine with <strong>ShineLux</strong>
            </span>
          </div>
          <div className="actions">
            <Button to="/contact">Get a Free Quote</Button>
            <Button to="/services" outline>
              Explore Our Services
            </Button>
          </div>
          <div className="trust-line desktop-trust-line">
            <span>
              <Icon name="check" size={18} />
              Australian Owned & Operated
            </span>
            <span>
              <Icon name="check" size={18} />
              End of Lease & Bond Ready
            </span>
            <span>
              <Icon name="check" size={18} />
              Fully Vetted & Insured Cleaners
            </span>
            <span>
              <Icon name="check" size={18} />
              Eco-Friendly Products
            </span>
            <span>
              <Icon name="check" size={18} />
              Same Day Booking Available
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={images.hero}
            alt="Professional cleaner caring for a bright modern Australian home"
          />
          <div className="hero-note">
            <strong>Trusted Across Australia.</strong>
            <span>Clean spaces, better days.</span>
          </div>
        </div>
        <div className="trust-line mobile-trust-line">
          <span>
            <Icon name="check" size={18} />
            Australian Owned & Operated
          </span>
          <span>
            <Icon name="check" size={18} />
            End of Lease & Bond Ready
          </span>
          <span>
            <Icon name="check" size={18} />
            Fully Vetted & Insured Cleaners
          </span>
          <span>
            <Icon name="check" size={18} />
            Eco-Friendly Products
          </span>
          <span>
            <Icon name="check" size={18} />
            Same Day Booking Available
          </span>
        </div>
      </section>

      <AssuranceBand />

      <section className="intro section">
        <div>
          <Eyebrow>Clean spaces, clear minds</Eyebrow>
          <h2>
            Cleaning That Fits <em>Real Life</em>
          </h2>
        </div>
        <div>
          <p>
            Life is busy. Your cleaning service should make it simpler, not more
            complicated. Tell us what needs attention, and we will help you
            explore a practical solution that fits.
          </p>
          <Button to="/about" outline>
            Discover ShineLux
          </Button>
        </div>
      </section>

      <StatsCounter />

      <CommitmentSection />

      <ServiceFinder />

      <section className="section services-section">
        <div className="section-heading">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2>
              The Right Clean for <em>Every Space</em>
            </h2>
          </div>
          <p>
            Fifteen specialised cleaning categories, each designed around a
            distinct need with transparent pricing.
          </p>
        </div>
        <div className="service-grid visual">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className="service-card reveal-item"
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="service-number-badge">
                  {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}
                </span>
                <span className="service-price-chip">
                  {service.price.toLowerCase().startsWith("from")
                    ? `From $${service.price.replace(/[^0-9]/g, "")}`
                    : `From ${service.price}`}
                </span>
              </div>
              <span className="icon-box">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.shortDescription || service.description}</p>
              <span className="text-link">
                View service & pricing <Icon name="arrow" size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <TrustMarquee />

      <section className="split-feature section">
        <div className="feature-image">
          <img
            src={images.home}
            alt="Light-filled, beautifully maintained Australian living room"
          />
        </div>
        <div className="feature-copy">
          <Eyebrow>For the spaces you call home</Eyebrow>
          <h2>
            More Time Living. <em>Less Time Cleaning.</em>
          </h2>
          <p>
            Your home is where the everyday happens: busy mornings, quiet
            evenings, family meals and well-earned weekends. Our residential
            cleaning categories help you manage routine upkeep, tackle a
            neglected list or prepare for a fresh chapter.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" />A scope shaped around your priorities
            </li>
            <li>
              <Icon name="check" />
              One-off and recurring options
            </li>
            <li>
              <Icon name="check" />
              Clear practical arrangements
            </li>
          </ul>
          <Button to="/services">Explore Home Cleaning</Button>
        </div>
      </section>

      <section className="split-feature reverse section">
        <div className="feature-image">
          <img
            src={images.office}
            alt="Clean modern workplace with welcoming shared spaces"
          />
        </div>
        <div className="feature-copy">
          <Eyebrow>For the places where work happens</Eyebrow>
          <h2>
            Make a Lasting Impression, <em>Every Working Day.</em>
          </h2>
          <p>
            Clean shared spaces contribute to a more welcoming experience for
            staff, clients and visitors. We welcome enquiries for offices,
            schools and post-construction environments.
          </p>
          <Button to="/contact">Discuss Commercial Cleaning</Button>
        </div>
      </section>

      <Process withTeam />
      <ReviewsSection />

      <section className="story section">
        <div className="story-card">
          <Eyebrow>When life gets busy</Eyebrow>
          <h2>Your Weekend Is Worth More Than a Cleaning Checklist</h2>
          <p>
            Picture a Saturday without rushing from room to room with a vacuum
            and mop. The right cleaning solution starts with your priorities and
            gives you more room for everything else.
          </p>
          <Button to="/services#residential-house-cleaning" light>
            Ask About Regular Cleaning
          </Button>
        </div>
        <img
          src={images.calm}
          alt="Calm and beautifully presented contemporary home"
        />
      </section>

      <ExperienceSection />
      <Faq />
      <Closing />
    </Shell>
  )
}
