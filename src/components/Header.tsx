import { useState, useEffect } from "react"
import { LOGO } from "../data/constants"
import { services } from "../data/services"
import Icon from "./Icon"
import { Button, Link } from "./Navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  )

  useEffect(() => {
    const update = () => {
      setCurrentPath(window.location.pathname)
      setOpen(false)
    }
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  const isHome = currentPath === "/"
  const isServices = currentPath.startsWith("/services")
  const isServiceDetail =
    currentPath.startsWith("/services/") && currentPath !== "/services"
  const isAbout = currentPath === "/about"
  const isWhy = currentPath === "/why-choose-us"
  const isBlog = currentPath.startsWith("/blog")
  const isBlogDetail =
    currentPath.startsWith("/blog/") && currentPath !== "/blog"
  const isContact = currentPath === "/contact"

  const backTarget = isServiceDetail
    ? "/services"
    : isBlogDetail
    ? "/blog"
    : null
  const backLabelFull = isServiceDetail ? "All Services" : "All Articles"
  const backLabelShort = isServiceDetail ? "Services" : "Articles"

  return (
    <>
      <div className="announcement">
        Professional Cleaning Services Across&nbsp;Australia{" "}
        <span>• Request a Free Quote Today</span>
      </div>
      <header className="header">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src={LOGO} alt="Shine LUX" />
          </Link>
        </div>

        <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
          <Link to="/" className={`nav-link ${isHome ? "active" : ""}`}>
            Home
          </Link>
          <div className="nav-services">
            <Link
              to="/services"
              className={`nav-link ${isServices ? "active" : ""}`}
            >
              Services
            </Link>
            <div className="dropdown">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`dropdown-link ${
                    currentPath === `/services/${service.slug}` ? "active" : ""
                  }`}
                >
                  <Icon name={service.icon} size={18} />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className={`nav-link ${isAbout ? "active" : ""}`}>
            About Us
          </Link>
          <Link
            to="/why-choose-us"
            className={`nav-link ${isWhy ? "active" : ""}`}
          >
            Why Choose Us
          </Link>
          <Link to="/blog" className={`nav-link ${isBlog ? "active" : ""}`}>
            Journal
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isContact ? "active" : ""}`}
          >
            Contact
          </Link>
          <Button to="/contact" className="mobile-drawer-quote-btn">
            Get a Free Quote
          </Button>
        </nav>

        <div className="header-right">
          <Button to="/contact" className="desktop-header-quote-btn">
            Get a Free Quote
          </Button>
          <div className="header-actions">
            {backTarget && (
              <Link
                to={backTarget}
                className="header-back-btn header-back-btn-mobile"
                aria-label={`Back to ${backLabelShort}`}
              >
                <span className="back-arrow-icon">
                  <Icon name="arrow" size={14} />
                </span>
                <span>{backLabelShort}</span>
              </Link>
            )}
            <button
              className="menu-button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
