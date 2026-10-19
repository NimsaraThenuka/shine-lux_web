import { images } from "../data/constants"
import { services } from "../data/services"
import AlternatingServices from "../components/AlternatingServices"
import AssuranceBand from "../components/AssuranceBand"
import Closing from "../components/Closing"
import ExperienceSection from "../components/ExperienceSection"
import Eyebrow from "../components/Eyebrow"
import { Button } from "../components/Navigation"
import PageHero from "../components/PageHero"
import Process from "../components/Process"
import Shell from "../components/Shell"

export default function ServicesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Our cleaning services"
        title="Cleaning Solutions for Homes, Workplaces and Everything In Between"
        text="Explore a flexible range of residential and commercial cleaning services. Every enquiry begins with understanding your property, preferred timing and priorities."
        image={images.kitchen}
      />
      <AssuranceBand />
      <AlternatingServices />
      <ExperienceSection />
      <section className="brief section">
        <Eyebrow>Clear expectations</Eyebrow>
        <h2>A Good Clean Starts With a Good Brief</h2>
        <p>
          Before confirming a booking, discuss inclusions, exclusions, access,
          preferred products, timing, equipment and special surface
          requirements.
        </p>
        <Button to="/contact" light>
          Enquire Now
        </Button>
      </section>
      <Process />
      <Closing />
    </Shell>
  )
}
