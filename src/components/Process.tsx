import Eyebrow from "./Eyebrow"
import { Button } from "./Navigation"

export default function Process({ withTeam = false }: { withTeam?: boolean }) {
  const steps = [
    [
      "01",
      "Enquire",
      "Tell us about your property, preferred service and priorities.",
    ],
    [
      "02",
      "Clarify",
      "We discuss the proposed scope and practical requirements.",
    ],
    [
      "03",
      "Confirm",
      "Agree on quote, timing, access and important property notes.",
    ],
    [
      "04",
      "Clean & review",
      "The scheduled work follows the scope, then you can share feedback.",
    ],
  ]

  return (
    <section className={`process section ${withTeam ? "process-with-team" : ""}`}>
      {withTeam ? (
        <div className="process-split-container">
          <div className="process-content-col">
            <div className="process-heading-wrap">
              <Eyebrow>Simple from the first message</Eyebrow>
              <h2>
                A Straightforward Path to a <em>Cleaner Space</em>
              </h2>
              <p className="process-subtext">
                From your initial enquiry to the final walk-through, our reliable
                team ensures a smooth, clear, and consistent cleaning experience.
              </p>
            </div>

            <div className="process-steps-grid">
              {steps.map(([n, t, p]) => (
                <div className="process-step-card" key={n}>
                  <div className="step-card-header">
                    <span className="step-badge">{n}</span>
                  </div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>

            <div className="process-action-left">
              <Button to="/contact">Request Your Quote</Button>
            </div>
          </div>

          <div className="process-visual-col">
            <div className="process-team-frame">
              {/* Soft ambient radial backdrop glow */}
              <div className="process-team-glow" aria-hidden="true" />

              <img
                src="/images/australian-cleaning-team.png"
                alt="Professional Shine LUX Australian Cleaning Team"
                className="process-team-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="center-heading">
            <Eyebrow>Simple from the first message</Eyebrow>
            <h2>
              A Straightforward Path to a <em>Cleaner Space</em>
            </h2>
          </div>
          <div className="process-grid">
            {steps.map(([n, t, p]) => (
              <div className="process-step" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="center-action">
            <Button to="/contact">Request Your Quote</Button>
          </div>
        </>
      )}
    </section>
  )
}

