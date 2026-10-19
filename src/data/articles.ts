import { Article } from "../types"
import { images } from "./constants"

export const articles: Article[] = [
  {
    slug: "how-often-should-you-clean",
    title: "How Often Should You Clean Your Home?",
    excerpt:
      "A practical Australian household guide to building a routine around how your home is really used.",
    image: images.home,
    sections: [
      [
        "Start with how your home is used",
        "There is no single cleaning schedule that suits every household. Identify the spaces that see the most activity and build a routine around them.",
      ],
      [
        "Focus on daily touchpoints",
        "Kitchen benches, dining surfaces and frequently used sinks benefit from regular wiping with suitable products.",
      ],
      [
        "Plan weekly maintenance",
        "Many households allocate time for bathrooms, vacuuming, mopping appropriate floors and dusting accessible surfaces.",
      ],
      [
        "Make room for deeper tasks",
        "Inside cupboards, skirting boards, window tracks and less accessible corners can be reviewed periodically.",
      ],
      [
        "Final thought",
        "A good cleaning routine should make life easier, not become another source of pressure. Start small and adapt as your household changes.",
      ],
    ],
  },
  {
    slug: "end-of-lease-checklist",
    title: "End of Lease Cleaning Checklist",
    excerpt:
      "What to prepare before moving out, from lease documents to the final inspection.",
    image: images.kitchen,
    sections: [
      [
        "Begin with your lease documents",
        "Review your tenancy agreement, entry condition report and written instructions from your property manager.",
      ],
      [
        "Create a room-by-room plan",
        "List kitchens, bathrooms, bedrooms, living areas, laundries and outdoor spaces where applicable.",
      ],
      [
        "Clear the property before cleaning",
        "Where practical, move belongings and dispose of rubbish before the cleaning visit.",
      ],
      [
        "Check specialist tasks early",
        "Carpet cleaning, window access or other requirements may need separate arrangements.",
      ],
      [
        "A realistic expectation",
        "A thorough clean supports presentation, but no cleaning company can guarantee the return of a rental bond.",
      ],
    ],
  },
  {
    slug: "office-cleaning-essentials",
    title: "Office Cleaning Essentials",
    excerpt:
      "Build a more welcoming workplace with a clear, practical maintenance plan.",
    image: images.office,
    sections: [
      [
        "First impressions begin at the entrance",
        "Visitors notice reception areas, glass doors, floors and the condition of shared spaces.",
      ],
      [
        "Think beyond individual desks",
        "Kitchenettes, meeting rooms, washrooms and communal tables often need more attention.",
      ],
      [
        "Create a practical task schedule",
        "Separate frequent tasks from periodic work such as detailed floor care and internal glass cleaning.",
      ],
      [
        "Plan around operations",
        "Consider opening hours, alarm procedures, restricted rooms and security requirements.",
      ],
      [
        "Make responsibilities clear",
        "A written scope helps everyone understand included tasks and how concerns should be communicated.",
      ],
    ],
  },
]
