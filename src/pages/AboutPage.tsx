import { images } from "../data/constants"
import Closing from "../components/Closing"
import Eyebrow from "../components/Eyebrow"
import { Button } from "../components/Navigation"
import PageHero from "../components/PageHero"
import Shell from "../components/Shell"
import CeoMessage from "../components/CeoMessage"

export default function AboutPage() {
  const values = [
    ["Care", "Paying attention to the environment we are invited into."],
    ["Clarity", "Discussing the scope before work begins."],
    ["Respect", "Treating homes, workplaces and schedules thoughtfully."],
    ["Consistency", "Working towards dependable service expectations."],
    [
      "Pride",
      "Caring about the finishing touches that help a room feel renewed.",
    ],
  ]
  return (
    <Shell>
      <PageHero
        eyebrow="The story behind ShineLux"
        title="Cleaning with Care. Spaces with Character."
        text="ShineLux is built around a simple belief: clean spaces make room for better days."
        image={images.detail}
      />
      <section className="split-feature section">
        <div className="feature-image">
          <img src={images.home} alt="A warm, welcoming and cared-for home" />
        </div>
        <div className="feature-copy">
          <Eyebrow>Our philosophy</Eyebrow>
          <h2>
            The Difference Is in <em>the Details</em>
          </h2>
          <p>
            A welcoming space is more than just a spotless surface;
            it's the feeling of freshness, comfort and care. At <strong>ShineLux</strong>,
            we make everyday living and working easier with professional cleaning services,
            personalised solutions and reliable service you can trust. We take pride in making every space shine.
          </p>
          <Button to="/contact">Talk to Our Team</Button>
        </div>
      </section>

      {/* Executive Leadership & CEO Message */}
      <CeoMessage />
      <section className="mission section">
        <div>
          <Eyebrow>What drives us</Eyebrow>
          <h2>Our Mission</h2>
          <p>
            To make every space shine by delivering reliable,
            professional and consistently exceptional cleaning services.
          </p>
        </div>
        <div>
          <Eyebrow>Looking ahead</Eyebrow>
          <h2>Our Vision</h2>
          <p>
            To set a new standard in cleaning through quality,
            care and excellence.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="center-heading">
          <Eyebrow>What matters to us</Eyebrow>
          <h2>
            The Principles Behind <em>the Name</em>
          </h2>
        </div>
        <div className="values-grid">
          {values.map(([t, p], i) => (
            <div key={t}>
              <span>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <Closing />
    </Shell>
  )
}
