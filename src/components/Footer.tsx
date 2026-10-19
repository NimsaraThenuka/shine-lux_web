import { LOGO } from "../data/constants"
import { services } from "../data/services"
import { Button, Link } from "./Navigation"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={LOGO} alt="Shine LUX" />
          <h2>Make Space for a Better Day.</h2>
          <p>
            Residential and commercial cleaning services designed around the
            needs of Australian properties.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/services">All Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-choose-us">Why Choose Us</Link>
          <Link to="/blog">Journal</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
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
