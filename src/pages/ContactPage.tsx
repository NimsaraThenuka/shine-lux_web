import { FormEvent, useState, useRef, useEffect } from "react"
import { images } from "../data/constants"
import { services } from "../data/services"
import Eyebrow from "../components/Eyebrow"
import Faq from "../components/Faq"
import Icon from "../components/Icon"
import PageHero from "../components/PageHero"
import Shell from "../components/Shell"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const initialService =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("service")
      : null

  const matchedService = services.find((s) => s.slug === initialService)
  const defaultServiceVal = matchedService ? matchedService.title : ""

  const [selectedService, setSelectedService] = useState(defaultServiceVal)
  const [serviceSelectOpen, setServiceSelectOpen] = useState(false)
  const serviceSelectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedService(defaultServiceVal)
  }, [defaultServiceVal])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        serviceSelectRef.current &&
        !serviceSelectRef.current.contains(e.target as Node)
      ) {
        setServiceSelectOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function submit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }
  return (
    <Shell>
      <PageHero
        eyebrow="Contact Shine LUX"
        title="Let’s Make Your Space Shine"
        text="Tell us what you need, where the property is located and when you would like the service. We will use those details to discuss the next steps."
        image={images.contact}
      />
      <section className="contact section">
        <div className="contact-copy">
          <Eyebrow>Request a quote</Eyebrow>
          <h2>
            A Few Details. <em>A Better Starting Point.</em>
          </h2>
          <p>
            You do not need to have every detail worked out. Share what you know
            and we can help identify the information needed.
          </p>
          <div className="contact-points">
            <div>
              <Icon name="phone" />
              <span>
                <small>Call us</small>Phone confirmed during enquiry
              </span>
            </div>
            <div>
              <Icon name="mail" />
              <span>
                <small>Email us</small>Use the enquiry form
              </span>
            </div>
            <div>
              <Icon name="pin" />
              <span>
                <small>Service areas</small>Australian locations by confirmation
              </span>
            </div>
            <div>
              <Icon name="clock" />
              <span>
                <small>Availability</small>Discuss your preferred date
              </span>
            </div>
          </div>
        </div>
        <form className="quote-form" onSubmit={submit}>
          {sent ? (
            <div className="success">
              <span className="icon-box">
                <Icon name="check" />
              </span>
              <h3>Thanks for reaching out to Shine LUX.</h3>
              <p>
                Your enquiry has been received. We will review the details and
                respond using the contact information you provided.
              </p>
              <button type="button" onClick={() => setSent(false)}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="field-row">
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </label>
              </div>
              <label>
                Email address
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <div className="field-row">
                <div className="custom-select-field">
                  <span className="field-label">Service type</span>
                  <div className="custom-select-wrap" ref={serviceSelectRef}>
                    <input
                      tabIndex={-1}
                      className="visually-hidden-required"
                      required
                      name="service"
                      value={selectedService}
                      onChange={() => {}}
                    />
                    <button
                      type="button"
                      className={`custom-select-trigger ${
                        serviceSelectOpen ? "is-open" : ""
                      } ${selectedService ? "has-value" : ""}`}
                      onClick={() => setServiceSelectOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={serviceSelectOpen}
                    >
                      <span className="custom-select-text">
                        {selectedService || "Select a service"}
                      </span>
                      <span
                        className={`custom-select-chevron ${
                          serviceSelectOpen ? "rotate" : ""
                        }`}
                      >
                        <Icon name="chevron" size={14} />
                      </span>
                    </button>

                    {serviceSelectOpen && (
                      <div className="custom-select-dropdown" role="listbox">
                        {services.map((s) => {
                          const isSelected = selectedService === s.title
                          return (
                            <div
                              key={s.slug}
                              className={`custom-select-option ${
                                isSelected ? "is-selected" : ""
                              }`}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedService(s.title)
                                setServiceSelectOpen(false)
                              }}
                            >
                              <span className="custom-option-title">
                                {s.title}
                              </span>
                              {isSelected && (
                                <span className="custom-option-check">
                                  <Icon name="check" size={13} />
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <label>
                  Suburb / postcode
                  <input required name="suburb" placeholder="Your suburb" />
                </label>
              </div>
              <div className="field-row">
                <label>
                  Preferred date
                  <input name="date" type="date" />
                </label>
                <label>
                  Preferred time
                  <input name="time" type="time" />
                </label>
              </div>
              <label>
                Tell us about your priorities
                <textarea
                  required
                  rows={5}
                  placeholder="Property size, current condition, priority rooms, access notes and anything else we should know…"
                />
              </label>
              <label className="consent">
                <input type="checkbox" required />
                <span>I agree to be contacted about this enquiry.</span>
              </label>
              <button className="submit" type="submit">
                Submit My Enquiry <Icon name="arrow" size={18} />
              </button>
              <p className="privacy-note">
                Your details are used only to respond to your enquiry. Please
                ensure no sensitive information is included.
              </p>
            </>
          )}
        </form>
      </section>
      <Faq />
    </Shell>
  )
}
