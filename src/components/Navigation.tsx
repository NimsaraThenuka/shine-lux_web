import { ReactNode } from "react"
import Icon from "./Icon"

export function go(path: string) {
  const [pathname, hash] = path.split("#")
  const currentPath = window.location.pathname

  if (pathname && pathname !== currentPath) {
    window.history.pushState({}, "", path)
    window.dispatchEvent(new PopStateEvent("popstate"))
  } else if (hash) {
    window.history.pushState({}, "", path)
  }

  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 120)
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export function Link({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string
  children: ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        // If external link or special protocol, let default handler handle it
        if (to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:")) {
          return
        }
        e.preventDefault()
        go(to)
      }}
    >
      {children}
    </a>
  )
}

export function Button({
  to,
  children,
  light = false,
  outline = false,
  className = "",
  onClick,
}: {
  to: string
  children: ReactNode
  light?: boolean
  outline?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      className={`button ${light ? "button-light" : ""} ${
        outline ? "button-outline" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  )
}
