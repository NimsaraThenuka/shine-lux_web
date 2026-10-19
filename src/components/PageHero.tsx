import { images } from "../data/constants"
import Eyebrow from "./Eyebrow"
import FloatingBubbles from "./FloatingBubbles"
import { Button } from "./Navigation"

export default function PageHero({
  eyebrow,
  title,
  text,
  image = images.calm,
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
}) {
  return (
    <section className="page-hero">
      <FloatingBubbles />
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button to="/contact">Request a Tailored Quote</Button>
      </div>
      <img src={image} alt="Beautifully maintained modern interior" />
    </section>
  )
}
