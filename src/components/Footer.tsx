import { LOGO } from "../data/constants"
import { services } from "../data/services"
import Icon from "./Icon"
import { Button, Link } from "./Navigation"

export default function Footer() {
  const servicesCol1 = services.slice(0, 8)
  const servicesCol2 = services.slice(8)

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Column 1: Brand, Tagline & Trust */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={LOGO} alt="ShineLux" className="footer-logo-img" />
          </Link>
          <h2>Let Your Space Shine with ShineLux</h2>
          <p>
            Residential, commercial, and industrial cleaning services designed
            around the needs of Australian properties.
          </p>
          <div className="footer-trust-badge">
            <Icon name="shield" size={15} />
            <span>100% Insured & Police Vetted</span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-explore">
          <h3>Explore</h3>
          <Link to="/services">All Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-choose-us">Why Choose Us</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/book">Book Online</Link>
          <Link to="/contact">Instant Quote</Link>
        </div>

        {/* Column 3 & 4: Two balanced services columns with level headings */}
        <div className="footer-services-section">
          <div className="footer-services-grid">
            <div className="footer-services-col">
              <h3>Services</h3>
              {servicesCol1.map((s) => (
                <Link key={s.slug} to={`/services#${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </div>
            <div className="footer-services-col">
              <h3>Specialised Care</h3>
              {servicesCol2.map((s) => (
                <Link key={s.slug} to={`/services#${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Column 5: Start Here & Direct Contact */}
        <div className="footer-cta-col">
          <h3>Start Here</h3>
          <p className="footer-cta-desc">
            Tell us about your property, preferred timing and priorities.
          </p>
          <div className="footer-cta-btn-wrap">
            <Button to="/contact" light>
              Request a Quote
            </Button>
          </div>

          <div className="footer-contact-info">
            <a href="tel:0435920515" className="footer-contact-item">
              <Icon name="phone" size={15} />
              <span>0435920515</span>
            </a>
            <a href="mailto:info@shinelux.com.au" className="footer-contact-item">
              <Icon name="mail" size={15} />
              <span>info@shinelux.com.au</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-brand-display">
        <div className="footer-brand-glow" aria-hidden="true" />
        <div className="footer-wordmark-wrap">
          <span className="footer-giant-wordmark">ShineLux</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 ShineLux. All rights reserved.</span>
        <span>A Higher Standard of Clean.</span>
      </div>
    </footer>
  )
}
