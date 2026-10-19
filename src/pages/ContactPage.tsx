import { FormEvent, useState } from "react"
import { images } from "../data/constants"
import { services } from "../data/services"
import Eyebrow from "../components/Eyebrow"
import Faq from "../components/Faq"
import Icon from "../components/Icon"
import PageHero from "../components/PageHero"
import Shell from "../components/Shell"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
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
                  Full name
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
                <label>
                  Service type
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Property type
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select property
                    </option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Office</option>
                    <option>School</option>
                    <option>Commercial site</option>
                  </select>
                </label>
              </div>
              <div className="field-row">
                <label>
                  Suburb / postcode
                  <input required name="suburb" placeholder="Your suburb" />
                </label>
                <label>
                  Preferred date
                  <input name="date" type="date" />
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
                <input type="checkbox" required />I agree to be contacted about
                this enquiry.
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
