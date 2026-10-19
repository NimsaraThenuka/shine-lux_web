import Eyebrow from "./Eyebrow"
import Icon from "./Icon"

export default function CeoMessage() {
  return (
    <section className="ceo-message-section" data-no-scroll-reveal="true">
      <div className="ceo-message-container">
        {/* Ambient Top Glow Line */}
        <div className="ceo-top-glow-line" aria-hidden="true" />

        <div className="ceo-content-col">
          <div className="ceo-badge-tag">
            <span className="ceo-badge-dot" />
            <span>Executive Leadership</span>
          </div>

          <Eyebrow>A Word from Our Founder</Eyebrow>

          <h2 className="ceo-heading">
            Dedicated to Raising the <em>Standard of Clean</em>
          </h2>

          <div className="ceo-quote-callout">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p className="quote-lead-text">
              We didn't build Shine LUX to just clean surfaces. We built it to
              give Australians their time, peace of mind, and pride in their
              living and working spaces back.
            </p>
          </div>

          <div className="ceo-narrative">
            <p>
              When I started Shine LUX, I saw how hard it was for busy families,
              professionals, and commercial property managers to find cleaners
              who consistently delivered on their promises with genuine care and
              complete dependability.
            </p>
            <p>
              We treat every home as a personal sanctuary and every workplace as
              a place of enterprise. That means carefully vetting every team
              member, using safe premium supplies, and standing behind every
              single clean with an uncompromising standard of service.
            </p>
          </div>

          {/* Key Leadership Commitments */}
          <div className="ceo-commitments">
            <div className="commitment-pill">
              <Icon name="shield" size={16} />
              <span>100% Insured & Police Checked</span>
            </div>
            <div className="commitment-pill">
              <Icon name="award" size={16} />
              <span>Tailored Service Guarantee</span>
            </div>
            <div className="commitment-pill">
              <Icon name="leaf" size={16} />
              <span>Eco-Conscious Australian Care</span>
            </div>
          </div>

          {/* Signature & Executive Sign-off */}
          <div className="ceo-signoff-wrap">
            <div className="ceo-signature-row">
              {/* Handwritten Pen Signature in Brand Blue */}
              <svg
                className="ceo-signature-svg"
                width="150"
                height="42"
                viewBox="0 0 200 55"
                fill="none"
                stroke="var(--royal)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Executive Signature"
              >
                <path d="M15 36c10-20 25-28 38-22 14 6 16 26 8 31-8 6-20-4-12-19 9-18 28-10 38-2 7 6 15 9 24 7 11-3 19-13 25-18m-42 22c14-8 30-15 48-11 12 3 24 9 34 8" />
              </svg>
            </div>
            <div className="ceo-signoff-meta">
              <strong className="ceo-name">Founder & CEO</strong>
              <span className="ceo-title">
                Shine LUX Cleaning Services
              </span>
            </div>
          </div>
        </div>

        {/* Compact Visual Profile Column */}
        <div className="ceo-visual-col">
          <div className="ceo-photo-frame compact-frame">
            <div className="photo-backdrop-glow" aria-hidden="true" />
            
            {/* Executive Profile Avatar Placeholder (Swap with real <img> when ready) */}
            <div className="ceo-profile-placeholder">
              <div className="ceo-profile-icon-circle">
                <Icon name="user" size={48} />
              </div>
              <div className="ceo-profile-info">
                <strong className="ceo-profile-name">Founder & CEO</strong>
                <span className="ceo-profile-role">Shine LUX</span>
              </div>
            </div>

            {/* Corner Decorative Blue Lines */}
            <div className="frame-corner top-left" aria-hidden="true" />
            <div className="frame-corner bottom-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
