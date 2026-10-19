import { images } from "../data/constants"
import Eyebrow from "./Eyebrow"

export default function ExperienceSection() {
  const points = [
    [
      "A scope shaped around the property",
      "The spaces, surfaces and access conditions are considered before the work is confirmed.",
    ],
    [
      "Priorities made visible",
      "Highlight the rooms, touchpoints and outcomes that matter most to you.",
    ],
    [
      "Useful preparation guidance",
      "Know what information helps, from property size and timing to specialist surface notes.",
    ],
  ]
  return (
    <section className="experience section">
      <div className="experience-visual">
        <img
          src={images.kitchen}
          alt="Bright modern kitchen prepared with care"
        />
        <div className="experience-caption">
          <span>Shine LUX principle</span>
          <strong>Clarity before cleaning.</strong>
        </div>
      </div>
      <div className="experience-copy">
        <Eyebrow>A more considered experience</Eyebrow>
        <h2>
          Professional Care Starts <em>Before the First Visit</em>
        </h2>
        <p>
          A polished outcome begins with a useful conversation. We encourage
          clear expectations, realistic planning and a scope that reflects how
          your space is actually used.
        </p>
        <div className="experience-points">
          {points.map(([title, text], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
