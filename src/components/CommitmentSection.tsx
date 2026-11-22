import Eyebrow from "./Eyebrow"
import Icon from "./Icon"

interface CommitmentPillar {
  number: string
  title: string
  description: string
  icon: () => JSX.Element
}

const pillars: CommitmentPillar[] = [
  {
    number: "01",
    title: "GPS Attendance Tracking",
    description:
      "Our cleaning team’s arrival and departure times are digitally recorded to ensure every service visit is properly monitored and verified.",
    icon: () => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M12 7v-1M12 14v-1M9 10H8M16 10h-1" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cleaning Quality Audits",
    description:
      "Regular inspections are carried out by our supervisors to ensure every cleaning task meets our standards and is completed to the expected level.",
    icon: () => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
        <path d="M9 10h6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Customer Satisfaction Reviews",
    description:
      "We value your feedback and continuously monitor customer satisfaction to improve our service quality and ensure a positive experience.",
    icon: () => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path
          d="M12 7.5l1 2.2 2.4.3-1.8 1.7.5 2.3-2.1-1.2-2.1 1.2.5-2.3-1.8-1.7 2.4-.3 1-2.2z"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Eco-Conscious Cleaning",
    description:
      "We choose environmentally responsible cleaning solutions that support a cleaner, healthier environment for your workplace, home, and surroundings.",
    icon: () => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
]

export default function CommitmentSection() {
  return (
    <section className="section commitment-section">
      <div className="commitment-header">
        <Eyebrow>Quality &amp; Accountability</Eyebrow>
        <h2>
          Our Commitment to <em>Quality &amp; Accountability</em>
        </h2>
        <h3 className="commitment-subtitle">
          Reliable cleaning. Responsible service. Quality you can count on.
        </h3>
        <p className="commitment-lead">
          We take every cleaning job seriously, ensuring our team follows the
          right procedures, maintains high standards, and delivers a dependable
          service every time.
        </p>
      </div>

      <div className="commitment-split-layout">
        {/* Left Side: Professional Cleaning Image matching user reference */}
        <div className="commitment-visual-wrap">
          <img
            src="https://res.cloudinary.com/dyp247eoh/image/upload/v1795321818/full-shot-people-cleaning-office_1_1_dliv1v.jpg"
            alt="Professional cleaner in yellow gloves wiping glass surface with microfiber cloth"
            className="commitment-visual-img"
            loading="lazy"
          />
          <div className="commitment-floating-badge">
            <span className="badge-icon-wrap">
              <Icon name="shield" size={18} />
            </span>
            <div className="badge-text-wrap">
              <strong>Quality Assured Standard</strong>
              <span>Verified &amp; Insured Cleaners</span>
            </div>
          </div>
        </div>

        {/* Right Side: Stacked Points matching user reference */}
        <div className="commitment-points-list">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="commitment-point-item">
              <div className="commitment-icon-wrap">{pillar.icon()}</div>
              <div className="commitment-point-body">
                <div className="commitment-point-header">
                  <h4>{pillar.title}</h4>
                  <span className="commitment-point-number">
                    {pillar.number}
                  </span>
                </div>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
