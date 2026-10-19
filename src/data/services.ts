import { Service } from "../types"
import { images } from "./constants"

export const services: Service[] = [
  {
    slug: "one-off-cleaning",
    title: "One-Off Cleaning",
    icon: "home",
    tagline: "A Refreshing Reset for the Space You Love",
    description:
      "Some weeks call for more than a quick tidy. A one-off clean gives your home or workspace focused attention without committing to a recurring schedule.",
    ideal: [
      "Hosting family or friends",
      "Seasonal refreshes",
      "Pre-event preparation",
      "Post-event tidy-up",
    ],
    scope: [
      "Kitchen surfaces, sinks and splashbacks",
      "Bathroom fixtures and mirrors",
      "Reachable dusting",
      "Vacuuming and mopping suitable floors",
    ],
    planning:
      "Tell us which rooms to prioritise, the level of attention needed and any delicate finishes or access constraints.",
    closing: "Make Room for What Matters",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395392/cleaning-worker-doing-dry-cleaning-furniture_274679-58087_gpuoal.jpg",
  },
  {
    slug: "regular-cleaning",
    title: "Regular Cleaning",
    icon: "calendar",
    tagline: "The Comfort of a Consistently Cared-For Home",
    description:
      "Regular cleaning helps keep familiar tasks from piling up and creates more breathing room in your routine, with a rhythm that works around your household.",
    ideal: [
      "Busy households",
      "Professionals with limited free time",
      "Families",
      "Shared living spaces",
    ],
    scope: [
      "Kitchen bench and exterior surface wiping",
      "Bathroom cleaning",
      "General dusting",
      "Vacuuming and mopping suitable floors",
    ],
    planning:
      "Discuss visit frequency, property size, priorities, pets, access and whether rotating deeper tasks should be quoted separately.",
    closing: "Keep Life Moving. Keep Your Home Feeling Fresh.",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395575/chores-woman-cleaning-table-surfcase-with-disinfector_kcv8yi.jpg",
  },
  {
    slug: "end-of-lease-cleaning",
    title: "End of Lease Cleaning",
    icon: "key",
    tagline: "A Thorough Clean for Your Next Chapter",
    description:
      "Prepare a rental property for inspection or handover with a detailed scope agreed against the condition and requirements of the premises.",
    ideal: [
      "Tenants moving out",
      "Rental property handovers",
      "Landlords",
      "Property managers",
    ],
    scope: [
      "Accessible cabinetry and kitchen surfaces",
      "Bathrooms and fixtures",
      "Skirting boards and ledges",
      "Floors and agreed internal windows",
    ],
    planning:
      "Provide the property size, vacate date, condition report priorities, access details and any required specialist extras.",
    closing: "Leave the Cleaning Checklist Behind",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395626/african-american-man-vacuuming-floors-living-room-cleaning-apartment-with-girlfriend-young-adult-using-vacuum-cleaner-woman-wiping-shelves-with-all-purpose-cleaner-tripod-shot_prxmp6.jpg",
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    icon: "building",
    tagline: "A Cleaner Workplace Starts Here",
    description:
      "Maintain shared spaces, workstations, meeting areas and amenities so your workplace feels organised, professional and welcoming.",
    ideal: [
      "Corporate offices",
      "Small businesses",
      "Professional suites",
      "Shared workspaces",
    ],
    scope: [
      "Reception and common-area surfaces",
      "Suitable desk exteriors",
      "Kitchenettes and washrooms",
      "Floors, bins and touchpoints",
    ],
    planning:
      "Tell us site size, occupancy, access rules, security protocols, desired frequency, operating hours and restricted areas.",
    closing: "Present Your Business at Its Best",
    image: images.office,
  },
  {
    slug: "steam-carpet-cleaning",
    title: "Steam & Carpet Cleaning",
    icon: "layers",
    tagline: "Bring Freshness Back Underfoot",
    description:
      "A suitable professional cleaning method can help lift accumulated soil and refresh the look and feel of textile flooring.",
    ideal: [
      "High-traffic rooms",
      "Periodic carpet maintenance",
      "Preparing for occupants",
      "Suitable upholstery",
    ],
    scope: [
      "Pre-inspection and suitability discussion",
      "Accessible carpeted areas",
      "Spot and stain assessment",
      "Drying and post-clean care guidance",
    ],
    planning:
      "Share the carpet material, approximate area, stain history, furniture needs and access to power or water.",
    closing: "Step Into a Fresher Space",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395706/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home_ublczo.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    icon: "window",
    tagline: "Let the Light Back In",
    description:
      "Window cleaning helps reduce visible marks, dust and everyday build-up so natural light can do its work.",
    ideal: [
      "Residential windows",
      "Office glass",
      "Pre-event refreshes",
      "Periodic maintenance",
    ],
    scope: [
      "Accessible internal and external glass",
      "Agreed frames and edges",
      "Reachable sills",
      "Glass doors and visible marks",
    ],
    planning:
      "Confirm the number of windows, floors, height, access conditions, flyscreens, tracks and any specialised high-access work.",
    closing: "See Your Space in a New Light",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395738/people-housework-housekeeping-concept-happy-woman-gloves-cleaning-window-with-rag-cleanser-spray-home_231208-575_q1zo4y.jpg",
  },
  {
    slug: "builders-cleaning",
    title: "Builders Cleaning",
    icon: "hammer",
    tagline: "From Construction Site to Finished Space",
    description:
      "A completed build or renovation deserves a clean that helps reveal the finished result, adapted to the project stage.",
    ideal: [
      "New builds",
      "Residential renovations",
      "Fit-outs",
      "Handover preparation",
    ],
    scope: [
      "Accessible dust and debris",
      "Agreed cabinetry",
      "Skirting and fixtures",
      "Suitable floors and reachable glass",
    ],
    planning:
      "Provide the project stage, site safety status, services available, sensitive finishes, access and target handover date.",
    closing: "Make the Final Reveal Worth It",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395841/three-men-are-cleaning-room-with-blue-mop_981168-12060_ugyn3v.jpg",
  },
  {
    slug: "school-cleaning",
    title: "School Cleaning",
    icon: "school",
    tagline: "Thoughtful Cleaning for Learning Spaces",
    description:
      "A considered cleaning plan helps maintain tidy classrooms, staff areas, amenities and shared spaces while respecting site procedures.",
    ideal: [
      "Primary and secondary schools",
      "Tutoring centres",
      "Training facilities",
      "Administration areas",
    ],
    scope: [
      "Classroom surfaces",
      "Corridors and entry points",
      "Washrooms and staffrooms",
      "Suitable floors and agreed touchpoints",
    ],
    planning:
      "Confirm safeguarding requirements, screening obligations, permitted hours, product requirements and written site specifications.",
    closing: "A Cleaner Setting for Every School Day",
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792396339/two-men-are-cleaning-floor-school_1286328-2677_er8zv0.jpg",
  },
]
