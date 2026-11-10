import { useState, useEffect, useRef } from "react"
import { LOGO } from "../data/constants"
import { services } from "../data/services"
import Icon from "./Icon"
import { Button, Link } from "./Navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [headerBottom, setHeaderBottom] = useState(72)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  )

  const updateHeaderBottom = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect()
      setHeaderBottom(Math.round(rect.bottom))
    }
  }

  const closeDrawer = () => {
    setOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    const update = () => {
      setCurrentPath(window.location.pathname)
      closeDrawer()
    }
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  useEffect(() => {
    if (open) {
      updateHeaderBottom()
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
      if (navRef.current) {
        navRef.current.scrollTop = 0
      }
    } else {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      setMobileServicesOpen(false)
      if (navRef.current) {
        navRef.current.scrollTop = 0
      }
    }
    return () => {
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!mobileServicesOpen && navRef.current) {
      navRef.current.scrollTop = 0
    }
  }, [mobileServicesOpen])

  useEffect(() => {
    if (!open) return

    const handleTouchMove = (e: TouchEvent) => {
      // If services dropdown is closed, lock all touch scrolling
      if (!mobileServicesOpen) {
        e.preventDefault()
      }
    }

    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    return () => {
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [open, mobileServicesOpen])

  useEffect(() => {
    if (!open) return
    window.addEventListener("resize", updateHeaderBottom)
    window.addEventListener("scroll", updateHeaderBottom, { passive: true })
    return () => {
      window.removeEventListener("resize", updateHeaderBottom)
      window.removeEventListener("scroll", updateHeaderBottom)
    }
  }, [open])

  const isHome = currentPath === "/"
  const isServices = currentPath.startsWith("/services")
  const isAbout = currentPath === "/about"
  const isWhy = currentPath === "/why-choose-us"
  const isBlog = currentPath.startsWith("/blog")
  const isBlogDetail =
    currentPath.startsWith("/blog/") && currentPath !== "/blog"
  const isContact = currentPath === "/contact"

  const backTarget = isBlogDetail ? "/blog" : null
  const backLabelShort = "Articles"

  return (
    <>
      <div className="announcement">
        Professional Cleaning Services Across&nbsp;Australia{" "}
        <span>• Request a Free Quote Today</span>
      </div>
      <header className="header" ref={headerRef}>
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={closeDrawer}>
            <img src={LOGO} alt="Shine LUX" />
          </Link>
        </div>

        <nav
          ref={navRef}
          className={`nav ${open ? "open" : ""} ${
            mobileServicesOpen ? "services-expanded" : "services-collapsed"
          }`}
          style={
            open
              ? {
                  top: `${headerBottom}px`,
                  height: `calc(100dvh - ${headerBottom}px)`,
                  overflowY: mobileServicesOpen ? "auto" : "hidden",
                  touchAction: mobileServicesOpen ? "pan-y" : "none",
                }
              : undefined
          }
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`nav-link ${isHome ? "active" : ""}`}
            onClick={closeDrawer}
          >
            Home
          </Link>
          <div className="nav-services">
            {/* Desktop Link (Navigates directly on Desktop) */}
            <Link
              to="/services"
              className={`nav-link desktop-services-link ${
                isServices ? "active" : ""
              }`}
            >
              Services
            </Link>

            {/* Mobile Trigger Button (Toggles normal sub-menu dropdown on mobile) */}
            <button
              type="button"
              className={`nav-link mobile-services-trigger ${
                isServices ? "active" : ""
              } ${mobileServicesOpen ? "is-open" : ""}`}
              onClick={(e) => {
                e.stopPropagation()
                setMobileServicesOpen((prev) => !prev)
              }}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <span
                className={`mobile-chevron-wrap ${
                  mobileServicesOpen ? "rotate" : ""
                }`}
              >
                <Icon name="chevron" size={16} />
              </span>
            </button>

            {/* Desktop Mega Dropdown (Hover-based) */}
            <div className="dropdown">
              <div className="dropdown-mega-top">
                <div className="dropdown-mega-label">
                  <span className="dropdown-mega-dot" />
                  <span>Our Cleaning Services</span>
                </div>
                <Link to="/services" className="dropdown-mega-viewall">
                  <span>View All Services</span>
                  <Icon name="arrow" size={13} />
                </Link>
              </div>

              <div className="dropdown-mega-grid">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services#${service.slug}`}
                    className="dropdown-link"
                  >
                    <span className="dropdown-icon-chip">
                      <Icon name={service.icon} size={15} />
                    </span>
                    <span className="dropdown-title-text">{service.title}</span>
                  </Link>
                ))}
              </div>

              <div className="dropdown-mega-footer">
                <div className="dropdown-footer-badge">
                  <span className="dropdown-footer-badge-icon">
                    <Icon name="shield" size={13} />
                  </span>
                  <span>100% Insured & Police Vetted Cleaners</span>
                </div>
                <Link to="/contact" className="dropdown-footer-cta">
                  <span>Get a Free Quote</span>
                  <span className="cta-arrow">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Mobile Services Normal Dropdown (One by one, No icons) */}
            {mobileServicesOpen && (
              <div className="mobile-services-dropdown-list">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services#${service.slug}`}
                    className="mobile-services-dropdown-item"
                    onClick={closeDrawer}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/about"
            className={`nav-link ${isAbout ? "active" : ""}`}
            onClick={closeDrawer}
          >
            About Us
          </Link>
          <Link
            to="/why-choose-us"
            className={`nav-link ${isWhy ? "active" : ""}`}
            onClick={closeDrawer}
          >
            Why Choose Us
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isBlog ? "active" : ""}`}
            onClick={closeDrawer}
          >
            Journal
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isContact ? "active" : ""}`}
            onClick={closeDrawer}
          >
            Contact
          </Link>
          <Button
            to="/contact"
            className="mobile-drawer-quote-btn"
            onClick={closeDrawer}
          >
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
                onClick={closeDrawer}
              >
                <span className="back-arrow-icon">
                  <Icon name="arrow" size={14} />
                </span>
                <span>{backLabelShort}</span>
              </Link>
            )}
            <button
              className="menu-button"
              onClick={() => {
                if (open) {
                  closeDrawer()
                } else {
                  updateHeaderBottom()
                  setOpen(true)
                }
              }}
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
