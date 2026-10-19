import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import ScrollExperience from "./ScrollExperience"

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollExperience />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

