export type IconName =
  | "home"
  | "calendar"
  | "key"
  | "building"
  | "layers"
  | "window"
  | "hammer"
  | "school"
  | "check"
  | "arrow"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "menu"
  | "close"
  | "star"
  | "shield"
  | "leaf"
  | "award"
  | "user"
  | "sparkles"
  | "heart"
  | "sun"
  | "chevron"

export type IconProps = {
  name: IconName
  size?: number
}

export type Service = {
  slug: string
  title: string
  price: string
  icon: IconName
  tagline: string
  description: string
  inclusions: string[]
  category?: string
  ideal?: string[]
  scope?: string[]
  planning?: string
  closing?: string
  image: string
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  sections: [string, string][]
}
