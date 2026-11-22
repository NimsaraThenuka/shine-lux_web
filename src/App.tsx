import { useEffect, useState } from "react"
import { articles } from "./data/articles"
import { getServiceDetail } from "./data/serviceDetails"
import AboutPage from "./pages/AboutPage"
import ArticlePage from "./pages/ArticlePage"
import BlogPage from "./pages/BlogPage"
import BookingPage from "./pages/BookingPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ServiceDetailPage from "./pages/ServiceDetailPage"
import ServicesPage from "./pages/ServicesPage"
import WhyPage from "./pages/WhyPage"

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  useEffect(() => {
    let title = "ShineLux | Professional Cleaning Services Across Australia"
    let description =
      "Premium residential, commercial, and industrial cleaning services across Australia. Transparent pricing, police-vetted cleaners, and guaranteed quality."
    const baseUrl = "https://shinelux.com.au"
    const currentUrl = `${baseUrl}${path === "/" ? "" : path}`

    if (path.startsWith("/services/") && path !== "/services") {
      const detailSlug = path.replace("/services/", "")
      const detail = getServiceDetail(detailSlug)
      if (detail) {
        title = `${detail.title} | ShineLux Cleaning Services`
        description = detail.hero.description
      }
    } else if (path === "/") {
      title = "ShineLux | Professional Cleaning Services Across Australia"
      description =
        "Premium residential, commercial, and industrial cleaning services across Australia. 15 specialised cleaning categories with upfront pricing."
    } else if (path === "/services" || path.startsWith("/services")) {
      title = "Residential & Commercial Cleaning Services | ShineLux"
      description =
        "Explore our complete suite of 15 professional cleaning services across Australia. Upfront pricing from $90. Builders, commercial, residential, end of lease and more."
    } else if (path === "/about") {
      title = "About ShineLux | Cleaning with Care & Integrity"
      description =
        "Learn about ShineLux. Australia's trusted cleaning professionals committed to meticulous standards, fully insured cleaners, and sparkling results."
    } else if (path === "/why-choose-us") {
      title = "Why Choose ShineLux | The Difference You Can Feel"
      description =
        "Transparent pricing, experienced cleaners, satisfaction guaranteed, and responsive service. Discover why homes and businesses across Australia choose ShineLux."
    } else if (path === "/blog") {
      title = "Cleaning Tips, Advice & Guides | ShineLux Journal"
      description =
        "Expert cleaning advice, moving house checklists, and routine tips from Australia's leading professional cleaning specialists."
    } else if (path === "/contact") {
      title = "Request a Free Cleaning Quote | Contact ShineLux"
      description =
        "Get a quick, free, obligation-free quote for residential or commercial cleaning across Australia. Contact ShineLux today."
    } else if (path === "/book" || path === "/booking") {
      title = "Book a Cleaning Service | ShineLux Australia"
      description =
        "Book your ShineLux professional cleaning service in 2 easy steps. Select your service, date, and confirm your booking via WhatsApp, Email, or Call."
    } else if (path.startsWith("/blog/")) {
      const match = articles.find((a) => `/blog/${a.slug}` === path)
      if (match) {
        title = `${match.title} | ShineLux Journal`
        description = match.excerpt
      }
    }

    document.title = title

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement("meta")
      metaDesc.setAttribute("name", "description")
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute("content", description)

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", description)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute("content", currentUrl)

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", currentUrl)

    // Scroll to top smoothly on route change if not a hash link
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [path])

  const article = path.startsWith("/blog/")
    ? articles.find((a) => `/blog/${a.slug}` === path)
    : undefined

  const serviceDetail =
    path.startsWith("/services/") && path !== "/services"
      ? getServiceDetail(path.replace("/services/", ""))
      : undefined

  if (article) return <ArticlePage article={article} />
  if (serviceDetail) return <ServiceDetailPage detail={serviceDetail} />
  if (path === "/services" || path.startsWith("/services")) return <ServicesPage />
  if (path === "/about") return <AboutPage />
  if (path === "/why-choose-us") return <WhyPage />
  if (path === "/blog") return <BlogPage />
  if (path === "/contact") return <ContactPage />
  if (path === "/book" || path === "/booking") return <BookingPage />
  return <HomePage />
}
