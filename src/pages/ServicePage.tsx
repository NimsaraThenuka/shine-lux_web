import { Service } from "../types"
import Eyebrow from "../components/Eyebrow"
import Faq from "../components/Faq"
import FloatingBubbles from "../components/FloatingBubbles"
import Icon from "../components/Icon"
import { Button, Link } from "../components/Navigation"
import Process from "../components/Process"
import Shell from "../components/Shell"

export default function ServicePage({ service }: { service: Service }) {
  return (
    <Shell>
      <section className="service-hero">
        <FloatingBubbles />
        <div>
          <Link
            to="/services"
            className="page-hero-back-btn"
            aria-label="Back to All Services"
          >
            <span className="back-arrow-icon">
              <Icon name="arrow" size={14} />
            </span>
            <span>All Services</span>
          </Link>
          <Eyebrow>Shine LUX {service.title}</Eyebrow>
          <h1>{service.tagline}</h1>
          <p>{service.description}</p>
          <div className="actions">
            <Button to="/contact">Get a Quote</Button>
            <Button to="/contact" outline>
              Ask a Question
            </Button>
          </div>
        </div>
        <img
          src={service.image}
          alt={`${service.title} in a bright, cared-for space`}
        />
      </section>
      <section className="section ideal-grid">
        <div>
          <Eyebrow>Ideal for</Eyebrow>
          <h2>
            Cleaning That Meets <em>the Moment</em>
          </h2>
        </div>
        <div className="pill-list">
          {service.ideal.map((item) => (
            <span key={item}>
              <Icon name="check" size={18} />
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="scope section">
        <div>
          <Eyebrow>What can be included</Eyebrow>
          <h2>Focused on the Details That Matter</h2>
          <p>
            All inclusions are indicative and subject to the agreed quotation
            and property assessment.
          </p>
        </div>
        <div className="scope-list">
          {service.scope.map((item, i) => (
            <div key={item}>
              <span>0{i + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </section>
      <Process />
      <section className="planning section">
        <div className="icon-box">
          <Icon name="check" />
        </div>
        <div>
          <Eyebrow>Before you book</Eyebrow>
          <h2>A Few Details Help Us Quote Accurately</h2>
          <p>{service.planning}</p>
        </div>
        <Button to="/contact">Send Property Details</Button>
      </section>
      <section className="value section">
        <div>
          <Eyebrow>Why this service</Eyebrow>
          <h2>More Than a Quick Surface Clean</h2>
        </div>
        <p>
          The real value of a well-scoped cleaning service is the time it gives
          back and the way a cared-for environment supports daily life. Begin
          with a clear conversation about outcomes, priority areas and realistic
          expectations.
        </p>
      </section>
      <section className="service-close section">
        <Eyebrow>Ready when you are</Eyebrow>
        <h2>{service.closing}</h2>
        <p>
          Let us know what is on your cleaning list and we can help shape a
          scope around the areas that matter most.
        </p>
        <Button to="/contact" light>
          Request Your Quote
        </Button>
      </section>
      <Faq />
    </Shell>
  )
}
