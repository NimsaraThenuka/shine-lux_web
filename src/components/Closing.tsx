import Eyebrow from "./Eyebrow"
import { Button } from "./Navigation"

export default function Closing() {
  return (
    <section className="closing section">
      <Eyebrow>Ready for a fresh start?</Eyebrow>
      <h2>Let Your Space Shine with Shine LUX</h2>
      <p>
        Start with a few details about your space and take the first step
        towards a cleaner, more comfortable environment.
      </p>
      <div className="actions">
        <Button to="/contact" light>
          Request a Quote
        </Button>
        <Button to="/services" light outline>
          View Services
        </Button>
      </div>
    </section>
  )
}
