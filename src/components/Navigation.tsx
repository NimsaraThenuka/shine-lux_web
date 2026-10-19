import { ReactNode } from "react"
import Icon from "./Icon"

export function go(path: string) {
  window.history.pushState({}, "", path)
  window.dispatchEvent(new PopStateEvent("popstate"))
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function Link({
  to,
  children,
  className = "",
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
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
}: {
  to: string
  children: ReactNode
  light?: boolean
  outline?: boolean
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`button ${light ? "button-light" : ""} ${
        outline ? "button-outline" : ""
      } ${className}`}
    >
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  )
}
