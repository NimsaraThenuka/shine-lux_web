import { images } from "../data/constants"
import Closing from "../components/Closing"
import Eyebrow from "../components/Eyebrow"
import Icon from "../components/Icon"
import { Link } from "../components/Navigation"
import PageHero from "../components/PageHero"
import Process from "../components/Process"
import Shell from "../components/Shell"

export default function WhyPage() {
  const reasons = [
    [
      "Cleaning shaped around your space",
      "A compact apartment, family home, professional office and school all require different priorities.",
    ],
    [
      "Clear conversations from the start",
      "Understand proposed tasks, practical arrangements and exclusions before committing.",
    ],
    [
      "Options for different stages of life",
      "From recurring upkeep to moving, renovating and managing a workplace.",
    ],
    [
      "Attention to everyday details",
      "Floors, fixtures, kitchens, bathrooms, glass and common areas shape how a space feels.",
    ],
    [
      "A polished, approachable experience",
      "Premium should feel welcoming, considered and easy to navigate.",
    ],
    [
      "Residential and commercial coverage",
      "One recognisable brand with options for home and work-related environments.",
    ],
  ]
  return (
    <Shell>
      <PageHero
        eyebrow="The Shine LUX difference"
        title="A More Considered Way to Clean"
        text="Choosing a cleaning provider is about feeling comfortable with the process, understanding what is included and knowing your priorities have been heard."
        image={images.why}
      />
      <section className="section">
        <div className="reason-grid">
          {reasons.map(([t, p], i) => (
            <div className="reason-card" key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{p}</p>
              <Link to="/contact" className="text-link">
                Ask about our services <Icon name="arrow" size={17} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Process />
      <section className="value section">
        <div>
          <Eyebrow>Beyond the checklist</Eyebrow>
          <h2>A Service Experience Designed Around Clarity</h2>
        </div>
        <p>
          Shine LUX differentiates through clear service descriptions, visible
          inclusions, practical FAQs, helpful enquiry forms and consistent
          presentation—so customers can make informed decisions.
        </p>
      </section>
      <Closing />
    </Shell>
  )
}
