import { useEffect, useState } from "react"
import { articles } from "./data/articles"
import AboutPage from "./pages/AboutPage"
import ArticlePage from "./pages/ArticlePage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import WhyPage from "./pages/WhyPage"

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  // Seamless redirect from any legacy service detail sub-routes to /services#slug
  useEffect(() => {
    if (path.startsWith("/services/") && path !== "/services") {
      const slug = path.replace("/services/", "")
      window.history.replaceState(null, "", `/services#${slug}`)
      setPath("/services")
    }
  }, [path])

  useEffect(() => {
    let title = "Shine LUX | Professional Cleaning Services Across Australia"
    let description =
      "Premium residential, commercial, and industrial cleaning services across Australia. Transparent pricing, police-vetted cleaners, and guaranteed quality."
    const baseUrl = "https://shinelux.com.au"
    const currentUrl = `${baseUrl}${path === "/" ? "" : path}`

    if (path === "/") {
      title = "Shine LUX | Professional Cleaning Services Across Australia"
      description =
        "Premium residential, commercial, and industrial cleaning services across Australia. 13 specialised cleaning categories with upfront pricing."
    } else if (path === "/services" || path.startsWith("/services")) {
      title = "Residential & Commercial Cleaning Services | Shine LUX"
      description =
        "Explore our complete suite of 13 professional cleaning services across Australia. Upfront pricing from $90. Builders, commercial, residential, end of lease and more."
    } else if (path === "/about") {
      title = "About Shine LUX | Cleaning with Care & Integrity"
      description =
        "Learn about Shine LUX. Australia's trusted cleaning professionals committed to meticulous standards, fully insured cleaners, and sparkling results."
    } else if (path === "/why-choose-us") {
      title = "Why Choose Shine LUX | The Difference You Can Feel"
      description =
        "Transparent pricing, experienced cleaners, satisfaction guaranteed, and responsive service. Discover why homes and businesses across Australia choose Shine LUX."
    } else if (path === "/blog") {
      title = "Cleaning Tips, Advice & Guides | Shine LUX Journal"
      description =
        "Expert cleaning advice, moving house checklists, and routine tips from Australia's leading professional cleaning specialists."
    } else if (path === "/contact") {
      title = "Request a Free Cleaning Quote | Contact Shine LUX"
      description =
        "Get a quick, free, obligation-free quote for residential or commercial cleaning across Australia. Contact Shine LUX today."
    } else if (path.startsWith("/blog/")) {
      const match = articles.find((a) => `/blog/${a.slug}` === path)
      if (match) {
        title = `${match.title} | Shine LUX Journal`
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

  if (article) return <ArticlePage article={article} />
  if (path === "/services" || path.startsWith("/services")) return <ServicesPage />
  if (path === "/about") return <AboutPage />
  if (path === "/why-choose-us") return <WhyPage />
  if (path === "/blog") return <BlogPage />
  if (path === "/contact") return <ContactPage />
  return <HomePage />
}
