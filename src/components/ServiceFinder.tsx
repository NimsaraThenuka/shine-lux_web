import { useState, useEffect, useCallback } from "react"
import { services } from "../data/services"
import Eyebrow from "./Eyebrow"
import Icon from "./Icon"
import { Button } from "./Navigation"

export default function ServiceFinder() {
  const options = [
    {
      label: "Maintain my home",
      title: "A reliable rhythm for everyday life",
      text: "Regular cleaning helps keep recurring household tasks from building up around a busy schedule.",
      service: services[1],
    },
    {
      label: "Refresh my space",
      title: "Focused attention, exactly when needed",
      text: "A one-off clean is a practical choice before guests, after a busy period or for a seasonal reset.",
      service: services[0],
    },
    {
      label: "Prepare to move",
      title: "A clearer path to property handover",
      text: "End of lease cleaning is shaped around the property condition, timing and documented priorities.",
      service: services[2],
    },
    {
      label: "Care for a workplace",
      title: "A more welcoming professional environment",
      text: "Explore planned cleaning for offices, schools and other shared commercial spaces.",
      service: services[3],
    },
  ]
  const [selected, setSelected] = useState(0)
  const [cycle, setCycle] = useState(0)

  const handleNext = useCallback(() => {
    setSelected((prev) => (prev + 1) % options.length)
    setCycle((c) => c + 1)
  }, [options.length])

  const handleSelect = (index: number) => {
    setSelected(index)
    setCycle((c) => c + 1)
  }

  // Safety fallback in case animation events are delayed (e.g. background tab or reduced motion)
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      handleNext()
    }, 4800)

    return () => clearTimeout(safetyTimer)
  }, [selected, cycle, handleNext])

  const active = options[selected]

  return (
    <section className="service-finder section">
      <div className="finder-heading">
        <Eyebrow>Find your service</Eyebrow>
        <h2>
          Start With What You <em>Want to Achieve</em>
        </h2>
        <p>
          You do not need to know the industry terminology. Choose the outcome
          that sounds most like your situation.
        </p>
      </div>
      <div className="finder-shell">
        <div className="finder-tabs" role="tablist" aria-label="Cleaning needs">
          {options.map((option, index) => {
            const isActive = selected === index
            return (
              <button
                key={option.label}
                className={isActive ? "active" : ""}
                onClick={() => handleSelect(index)}
                role="tab"
                aria-selected={isActive}
              >
                {isActive && (
                  <span className="tab-timer-track" aria-hidden="true">
                    <span
                      className="tab-timer-fill"
                      key={`timer-${selected}-${cycle}`}
                      onAnimationEnd={handleNext}
                    />
                  </span>
                )}
                <span className="tab-num">0{index + 1}</span>
                {option.label}
                <Icon name="arrow" size={18} />
              </button>
            )
          })}
        </div>
        <div className="finder-result" role="tabpanel">
          <span className="icon-box" key={`icon-${selected}`}>
            <Icon name={active.service.icon} />
          </span>
          <div key={`content-${selected}`}>
            <small>Recommended starting point</small>
            <h3>{active.title}</h3>
            <p>{active.text}</p>
            <Button to={`/services/${active.service.slug}`}>
              Explore {active.service.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
