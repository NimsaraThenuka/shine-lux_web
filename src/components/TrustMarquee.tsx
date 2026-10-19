import Icon from "./Icon"
import { IconName } from "../types"

interface MarqueeItem {
  icon: IconName
  title: string
  highlight: string
}

const marqueeItems: MarqueeItem[] = [
  {
    icon: "clock",
    title: "Same Day Booking Available",
    highlight: "Fast Response",
  },
  {
    icon: "shield",
    title: "Fully Insured Cleaners",
    highlight: "Police Checked & Vetted",
  },
  {
    icon: "award",
    title: "100% Bond Back Guarantee",
    highlight: "Inspection Approved",
  },
  {
    icon: "leaf",
    title: "Eco-Friendly Products",
    highlight: "Pet & Family Safe",
  },
  {
    icon: "star",
    title: "5-Star Rated Across Australia",
    highlight: "500+ Happy Clients",
  },
  {
    icon: "check",
    title: "Transparent Upfront Pricing",
    highlight: "No Hidden Fees",
  },
]

export default function TrustMarquee() {
  return (
    <section className="trust-marquee-section" aria-label="Why Choose Shine LUX">
      <div className="trust-marquee-track">
        <div className="trust-marquee-group">
          {marqueeItems.map((item, idx) => (
            <div key={`group1-${idx}`} className="trust-marquee-item">
              <span className="marquee-icon-box" aria-hidden="true">
                <Icon name={item.icon} size={15} />
              </span>
              <div className="marquee-text-group">
                <span className="marquee-title">{item.title}</span>
                <span className="marquee-highlight">• {item.highlight}</span>
              </div>
              <span className="marquee-divider" aria-hidden="true">✦</span>
            </div>
          ))}
        </div>
        <div className="trust-marquee-group" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <div key={`group2-${idx}`} className="trust-marquee-item">
              <span className="marquee-icon-box" aria-hidden="true">
                <Icon name={item.icon} size={15} />
              </span>
              <div className="marquee-text-group">
                <span className="marquee-title">{item.title}</span>
                <span className="marquee-highlight">• {item.highlight}</span>
              </div>
              <span className="marquee-divider" aria-hidden="true">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
