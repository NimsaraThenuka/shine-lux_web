import { LOGO } from "../data/constants"
import { services } from "../data/services"
import { Button, Link } from "./Navigation"

export default function Footer() {
  const servicesCol1 = services.slice(0, 7)
  const servicesCol2 = services.slice(7)

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={LOGO} alt="Shine LUX" />
          <h2>Make Space for a Better Day.</h2>
          <p>
            Residential, commercial, and industrial cleaning services designed
            around the needs of Australian properties.
          </p>
        </div>
        <div className="footer-explore">
          <h3>Explore</h3>
          <Link to="/services">All Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-choose-us">Why Choose Us</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-services-section">
          <h3>Services</h3>
          <div className="footer-services-grid">
            <div className="footer-services-col">
              {servicesCol1.map((s) => (
                <Link key={s.slug} to={`/services#${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </div>
            <div className="footer-services-col">
              {servicesCol2.map((s) => (
                <Link key={s.slug} to={`/services#${s.slug}`}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-cta-col">
          <h3>Start here</h3>
          <p>Tell us about your property, preferred timing and priorities.</p>
          <Button to="/contact" light>
            Request a Quote
          </Button>
        </div>
      </div>

      <div className="footer-brand-display">
        <div className="footer-brand-glow" aria-hidden="true" />
        <div className="footer-wordmark-wrap">
          <span className="footer-giant-wordmark">SHINE LUX</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Shine LUX. All rights reserved.</span>
        <span>A Higher Standard of Clean.</span>
      </div>
    </footer>
  )
}
