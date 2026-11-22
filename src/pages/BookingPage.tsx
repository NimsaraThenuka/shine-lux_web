import { useState, useEffect } from "react"
import { services } from "../data/services"
import Icon from "../components/Icon"
import Shell from "../components/Shell"
import { Link } from "../components/Navigation"

function RealWhatsAppIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.2 13.8C31.5 11.1 27.9 9.6 24.1 9.6C16.3 9.6 9.9 16 9.9 23.8C9.9 26.3 10.5 28.7 11.8 30.8L9.6 38.4L17.4 36.3C19.4 37.4 21.7 38 24.1 38H24.1C31.9 38 38.3 31.6 38.3 23.8C38.3 20 36.8 16.4 34.2 13.8ZM24.1 35.6C22 35.6 19.9 35 18.1 33.9L17.7 33.7L13.1 34.9L14.3 30.5L14 30C12.8 28.1 12.2 25.9 12.2 23.8C12.2 17.2 17.5 11.9 24.1 11.9C27.3 11.9 30.3 13.1 32.5 15.4C34.8 17.6 36 20.6 36 23.8C36 30.3 30.7 35.6 24.1 35.6ZM30.6 26.6C30.2 26.4 28.4 25.5 28 25.4C27.7 25.3 27.4 25.2 27.2 25.6C27 26 26.2 26.9 26 27.2C25.8 27.4 25.5 27.5 25.1 27.3C24.7 27.1 23.5 26.7 22 25.4C20.9 24.4 20.1 23.1 19.9 22.7C19.7 22.3 19.9 22.1 20.1 21.9C20.3 21.7 20.5 21.4 20.7 21.2C20.9 21 21 20.8 21.1 20.6C21.2 20.4 21.2 20.2 21.1 20C21 19.8 20.3 18.1 20 17.4C19.7 16.7 19.4 16.8 19.2 16.8C19 16.8 18.7 16.8 18.4 16.8C18.1 16.8 17.8 16.9 17.4 17.3C17.1 17.7 16.1 18.6 16.1 20.5C16.1 22.4 17.5 24.2 17.7 24.4C17.9 24.7 20.4 28.6 24.2 30.2C25.1 30.6 25.8 30.8 26.4 31C27.3 31.3 28.2 31.2 28.8 31.1C29.5 31 31 30.2 31.3 29.3C31.6 28.4 31.6 27.7 31.5 27.5C31.4 27.3 31.1 27.1 30.6 26.6Z"
        fill="white"
      />
    </svg>
  )
}

function RealGmailIcon({ size = 32 }: { size?: number }) {
  const height = Math.round(size * (193 / 256))
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 256 193"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        fill="#4285F4"
        d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
      />
      <path
        fill="#34A853"
        d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
      />
      <path
        fill="#EA4335"
        d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
      />
      <path
        fill="#FBBC05"
        d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
      />
      <path
        fill="#C5221F"
        d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
      />
    </svg>
  )
}

function RealCallIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        fill="#FF7A00"
      />
    </svg>
  )
}

const cleanServiceLabels: Record<string, string> = {
  "Builders/ Post - Construction Cleaning": "Builders & Post-Construction",
  "Warehouse & Factory Cleaning": "Warehouse & Factory Cleaning",
  "Commercial Cleaning": "Commercial Cleaning",
  "Residential/ House Cleaning": "Residential & House Cleaning",
  "End of Lease Cleaning": "End of Lease Cleaning",
  "Periodical Cleaning": "Periodical Cleaning",
  "Once - off Cleaning": "Once-off Deep Cleaning",
  "Window Cleaning": "Window Cleaning",
  "Carpet & Steam Cleaning": "Carpet & Steam Cleaning",
  "Healthcare/ Medical Cleaning": "Healthcare & Medical Cleaning",
  "Hotel / Restaurant & Kitchen cleaning": "Hotel, Restaurant & Kitchen",
  "Gym Cleaning": "Gym Cleaning",
  "Aged Care Cleaning": "Aged Care Cleaning",
  "School Cleaning": "School Cleaning",
  "Early Childhood Education Cleaning": "Early Childhood Education",
}

export default function BookingPage() {
  const [step, setStep] = useState<1 | 2>(1)

  // Form Fields
  const [service, setService] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [suburb, setSuburb] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")

  // Validation
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Minimum date = today
  const todayStr = new Date().toISOString().split("T")[0]

  useEffect(() => {
    // Check if query param ?service=... is passed
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const serviceParam = params.get("service")
      if (serviceParam) {
        const found = services.find(
          (s) =>
            s.slug === serviceParam ||
            s.title.toLowerCase() === serviceParam.toLowerCase()
        )
        if (found) {
          setService(found.title)
        }
      }
    }
  }, [])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!service) newErrors.service = "Please select a service"
    if (!name.trim()) newErrors.name = "Full name is required"
    if (!email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!phone.trim()) newErrors.phone = "Phone number is required"
    if (!suburb.trim()) newErrors.suburb = "Your suburb is required"
    if (!date) newErrors.date = "Please select a preferred date"
    if (!time) newErrors.time = "Please select a preferred time"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({
      service: true,
      name: true,
      email: true,
      phone: true,
      suburb: true,
      date: true,
      time: true,
    })

    if (validate()) {
      setStep(2)
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  // Format Date for Summary
  const formattedDate = date
    ? new Date(date + "T00:00:00").toLocaleDateString("en-AU", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : ""

  // Format Time for Clock Display & Messages
  const formatTimeDisplay = (timeVal: string) => {
    if (!timeVal) return ""
    const parts = timeVal.split(":")
    if (parts.length >= 2) {
      let hours = parseInt(parts[0], 10)
      const minutes = parts[1]
      const ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12
      hours = hours ? hours : 12
      return `${hours}:${minutes} ${ampm}`
    }
    return timeVal
  }

  const displayTime = formatTimeDisplay(time)

  // WhatsApp Message
  const generateWhatsAppLink = () => {
    const text =
      `Hi ShineLux! 👋\nI would like to book a cleaning service:\n\n` +
      `📋 *Service:* ${service}\n` +
      `👤 *Customer:* ${name}\n` +
      `📍 *Suburb:* ${suburb}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `📅 *Preferred Date:* ${formattedDate || date}\n` +
      `⏰ *Preferred Time:* ${displayTime || time}\n` +
      (notes.trim() ? `📝 *Notes:* ${notes.trim()}\n\n` : `\n`) +
      `Please confirm availability and quote details. Thank you!`
    return `https://wa.me/61435920515?text=${encodeURIComponent(text)}`
  }

  // Email Mailto Link
  const generateEmailLink = () => {
    const subject = `Booking Request: ${service} - ${name} (${suburb})`
    const body =
      `Hi ShineLux Team,\n\nI would like to request a booking for the following service:\n\n` +
      `• Service: ${service}\n` +
      `• Customer Name: ${name}\n` +
      `• Suburb / Location: ${suburb}\n` +
      `• Phone Number: ${phone}\n` +
      `• Email Address: ${email}\n` +
      `• Preferred Date: ${formattedDate || date}\n` +
      `• Preferred Time: ${displayTime || time}\n` +
      (notes.trim() ? `• Additional Notes / Instructions:\n${notes.trim()}\n\n` : `\n`) +
      `Please reply with confirmation and any further details needed.\n\nThank you,\n${name}`
    return `mailto:info@shinelux.com.au?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <Shell>
      <div className="booking-page">
        {/* HERO SECTION */}
        <section className="booking-hero-section">
          <div className="booking-container">
            {/* Back button */}
            <div className="booking-back-row">
              <Link to="/" className="booking-back-pill">
                <span aria-hidden="true">&larr;</span>
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Hero Content */}
            <div className="booking-hero-content">
              <div className="booking-eyebrow-pill">
                <Icon name="sparkles" size={14} />
                <span>BOOK ONLINE</span>
              </div>

              <h1 className="booking-hero-title">
                Book Your <span className="booking-brand-highlight">ShineLux</span> Clean
              </h1>

              <p className="booking-hero-desc">
                Book in 2 easy steps. Select your service, then choose how you want to confirm your booking.
              </p>
            </div>

            {/* 2-STEP PROGRESS STEPPER */}
            <div className="booking-stepper-wrap">
              <div className="booking-stepper">
                {/* Step 1 Pill */}
                <button
                  type="button"
                  className={`booking-step-item ${
                    step === 1 ? "is-active" : "is-completed"
                  }`}
                  onClick={() => setStep(1)}
                  aria-label="Step 1: Booking Details"
                >
                  <span className="booking-step-badge">
                    {step === 2 ? <Icon name="check" size={13} /> : "1"}
                  </span>
                  <span className="booking-step-name">
                    <span className="step-label-desktop">Booking Details</span>
                    <span className="step-label-mobile">Details</span>
                  </span>
                </button>

                {/* Connecting Line */}
                <div
                  className={`booking-step-divider ${
                    step === 2 ? "is-filled" : ""
                  }`}
                />

                {/* Step 2 Pill */}
                <div
                  className={`booking-step-item ${
                    step === 2 ? "is-active" : "is-upcoming"
                  }`}
                >
                  <span className="booking-step-badge">2</span>
                  <span className="booking-step-name">
                    <span className="step-label-desktop">Confirm Method</span>
                    <span className="step-label-mobile">Confirm</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN FORM CONTAINER */}
        <section className="booking-content-section">
          <div className="booking-container">
            <div className="booking-card">
              {/* STEP 1: SERVICE & PERSONAL INFO */}
              {step === 1 && (
                <form
                  onSubmit={handleContinue}
                  className="booking-form"
                  noValidate
                >
                  {/* Card Header */}
                  <div className="booking-card-header">
                    <div className="booking-card-title-row">
                      <Icon name="sparkles" size={20} />
                      <h2>Select Service & Info</h2>
                    </div>
                    <p className="booking-card-subtitle">
                      All fields marked with <span className="req">*</span> are required to get an accurate booking.
                    </p>
                  </div>

                  {/* Field 1: Service Required */}
                  <div className="booking-field-group">
                    <label htmlFor="service-select" className="booking-label">
                      SERVICE REQUIRED <span className="req">*</span>
                    </label>
                    <div
                      className={`booking-input-wrap ${
                        touched.service && errors.service ? "has-error" : ""
                      }`}
                    >
                      <select
                        id="service-select"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value)
                          if (errors.service) {
                            setErrors({ ...errors, service: "" })
                          }
                        }}
                        className="booking-select"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => {
                          const label = cleanServiceLabels[s.title] || s.title
                          return (
                            <option key={s.slug} value={label}>
                              {label}
                            </option>
                          )
                        })}
                      </select>
                      <span className="booking-select-chevron">
                        <Icon name="chevron" size={16} />
                      </span>
                    </div>
                    {touched.service && errors.service && (
                      <span className="booking-error-msg">{errors.service}</span>
                    )}
                  </div>

                  {/* Row 2: Full Name & Email */}
                  <div className="booking-grid-2">
                    <div className="booking-field-group">
                      <label htmlFor="full-name" className="booking-label">
                        FULL NAME <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.name && errors.name ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="user" size={16} />
                        </span>
                        <input
                          id="full-name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value)
                            if (errors.name) setErrors({ ...errors, name: "" })
                          }}
                          placeholder="e.g. Sarah Jenkins"
                          className="booking-input"
                        />
                      </div>
                      {touched.name && errors.name && (
                        <span className="booking-error-msg">{errors.name}</span>
                      )}
                    </div>

                    <div className="booking-field-group">
                      <label htmlFor="email-address" className="booking-label">
                        EMAIL ADDRESS <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.email && errors.email ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="mail" size={16} />
                        </span>
                        <input
                          id="email-address"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email) setErrors({ ...errors, email: "" })
                          }}
                          placeholder="e.g. sarah@email.com"
                          className="booking-input"
                        />
                      </div>
                      {touched.email && errors.email && (
                        <span className="booking-error-msg">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Phone Number & Your Suburb */}
                  <div className="booking-grid-2">
                    <div className="booking-field-group">
                      <label htmlFor="phone-number" className="booking-label">
                        PHONE NUMBER <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.phone && errors.phone ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="phone" size={16} />
                        </span>
                        <input
                          id="phone-number"
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value)
                            if (errors.phone) setErrors({ ...errors, phone: "" })
                          }}
                          placeholder="e.g. 0435 920 515"
                          className="booking-input"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <span className="booking-error-msg">{errors.phone}</span>
                      )}
                    </div>

                    <div className="booking-field-group">
                      <label htmlFor="suburb" className="booking-label">
                        YOUR SUBURB <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.suburb && errors.suburb ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="pin" size={16} />
                        </span>
                        <input
                          id="suburb"
                          type="text"
                          value={suburb}
                          onChange={(e) => {
                            setSuburb(e.target.value)
                            if (errors.suburb)
                              setErrors({ ...errors, suburb: "" })
                          }}
                          placeholder="e.g. Port Melbourne, VIC"
                          className="booking-input"
                        />
                      </div>
                      {touched.suburb && errors.suburb && (
                        <span className="booking-error-msg">{errors.suburb}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Preferred Date & Preferred Time */}
                  <div className="booking-grid-2">
                    <div className="booking-field-group">
                      <label htmlFor="preferred-date" className="booking-label">
                        PREFERRED DATE <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.date && errors.date ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="calendar" size={16} />
                        </span>
                        <input
                          id="preferred-date"
                          type="date"
                          min={todayStr}
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value)
                            if (errors.date) setErrors({ ...errors, date: "" })
                          }}
                          className="booking-input"
                        />
                      </div>
                      {touched.date && errors.date && (
                        <span className="booking-error-msg">{errors.date}</span>
                      )}
                    </div>

                    <div className="booking-field-group">
                      <label htmlFor="preferred-time" className="booking-label">
                        PREFERRED TIME <span className="req">*</span>
                      </label>
                      <div
                        className={`booking-input-wrap ${
                          touched.time && errors.time ? "has-error" : ""
                        }`}
                      >
                        <span className="booking-input-icon">
                          <Icon name="clock" size={16} />
                        </span>
                        <input
                          id="preferred-time"
                          type="time"
                          value={time}
                          onChange={(e) => {
                            setTime(e.target.value)
                            if (errors.time) setErrors({ ...errors, time: "" })
                          }}
                          className="booking-input booking-time-input"
                        />
                      </div>
                      {touched.time && errors.time && (
                        <span className="booking-error-msg">{errors.time}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Additional Details / Notes */}
                  <div className="booking-field-group">
                    <label htmlFor="notes" className="booking-label">
                      ADDITIONAL DETAILS / NOTES
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your property size, specific requirements, preferred dates..."
                      className="booking-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="booking-btn-row">
                    <button type="submit" className="booking-submit-btn">
                      <span>Continue to Confirm Step</span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: CONFIRMATION METHOD */}
              {step === 2 && (
                <div className="booking-confirm-wrapper">
                  {/* Header with back button */}
                  <div className="booking-card-header">
                    <button
                      type="button"
                      className="booking-back-to-step1"
                      onClick={() => setStep(1)}
                    >
                      <span aria-hidden="true">&larr;</span>
                      <span>Choose Booking Method</span>
                    </button>
                    <p className="booking-card-subtitle">
                      Choose a channel below to send your structured details to ShineLux.
                    </p>
                  </div>

                  {/* BOOKING SUMMARY BOX */}
                  <div className="booking-summary-card">
                    <div className="booking-summary-kicker">BOOKING SUMMARY</div>
                    <div className="booking-summary-grid">
                      <div className="booking-summary-row">
                        <span className="summary-label">Service:</span>
                        <span className="summary-value font-bold">{service}</span>
                      </div>
                      <div className="booking-summary-row">
                        <span className="summary-label">Customer:</span>
                        <span className="summary-value">
                          {name} {suburb ? `(${suburb})` : ""}
                        </span>
                      </div>
                      <div className="booking-summary-row">
                        <span className="summary-label">Date & Time:</span>
                        <span className="summary-value">
                          {formattedDate || date} at {displayTime || time}
                        </span>
                      </div>
                      <div className="booking-summary-row">
                        <span className="summary-label">Phone:</span>
                        <span className="summary-value">{phone}</span>
                      </div>
                      <div className="booking-summary-row">
                        <span className="summary-label">Email:</span>
                        <span className="summary-value summary-email-value">{email}</span>
                      </div>
                      {notes.trim() && (
                        <div className="booking-summary-row">
                          <span className="summary-label">Notes:</span>
                          <span className="summary-value summary-notes-text">
                            {notes.trim()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Choose Channel Banner */}
                  <div className="booking-channel-prompt">
                    <span>Please choose one of the options below to confirm your booking details:</span>
                  </div>

                  {/* 3 CHANNELS GRID */}
                  <div className="booking-channels-grid">
                    {/* 1. WhatsApp */}
                    <div className="booking-channel-card channel-whatsapp">
                      <div className="channel-icon-wrap whatsapp-bg">
                        <RealWhatsAppIcon size={34} />
                      </div>
                      <h3 className="channel-title">Book via WhatsApp</h3>
                      <p className="channel-desc">
                        Sends a structured chat message directly to our staff.
                      </p>
                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-action-btn whatsapp-action"
                      >
                        <span>SEND CHAT</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>

                    {/* 2. Email */}
                    <div className="booking-channel-card channel-email">
                      <div className="channel-icon-wrap email-bg">
                        <RealGmailIcon size={32} />
                      </div>
                      <h3 className="channel-title">Book via Email</h3>
                      <p className="channel-desc">
                        Pre-fills an email with your details to send to support.
                      </p>
                      <a
                        href={generateEmailLink()}
                        className="channel-action-btn email-action"
                      >
                        <span>SEND EMAIL</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>

                    {/* 3. Call */}
                    <div className="booking-channel-card channel-call">
                      <div className="channel-icon-wrap call-bg">
                        <RealCallIcon size={24} />
                      </div>
                      <h3 className="channel-title">Book via Call</h3>
                      <p className="channel-desc">
                        Quick direct dial to our Australian booking center.
                      </p>
                      <a
                        href="tel:0435920515"
                        className="channel-action-btn call-action"
                      >
                        <span>CALL HOTLINE</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TRUST HIGHLIGHTS */}
            <div className="booking-trust-strip">
              <div className="booking-trust-item">
                <Icon name="shield" size={16} />
                <span>100% Insured & Police Vetted</span>
              </div>
              <div className="booking-trust-item">
                <Icon name="clock" size={16} />
                <span>Fast Response Within 15 Min</span>
              </div>
              <div className="booking-trust-item">
                <Icon name="star" size={16} />
                <span>500+ 5 Star Reviews</span>
              </div>
              <div className="booking-trust-item">
                <Icon name="check" size={16} />
                <span>Transparent Upfront Pricing</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  )
}
