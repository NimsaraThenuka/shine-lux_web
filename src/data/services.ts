import { Service } from "../types"
import { images } from "./constants"

export const services: Service[] = [
  {
    slug: "builders-post-construction-cleaning",
    title: "Builders/ Post - Construction Cleaning",
    price: "$250",
    category: "Commercial & Industrial",
    icon: "hammer",
    tagline: "From Construction Site to Finished Space",
    description:
      "Heavy-duty handover cleaning removing fine plaster dust, paint residue, and builder debris for new builds and renovations.",
    inclusions: [
      "Plaster Dust & Paint Removal",
      "Window Tracks & Glass Detailing",
      "Cabinetry Interior & Exterior",
      "Hard Floor Scrubbing & Buffing",
    ],
    scope: [
      "Plaster Dust & Paint Removal",
      "Window Tracks & Glass Detailing",
      "Cabinetry Interior & Exterior",
      "Hard Floor Scrubbing & Buffing",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1794283737/janitor-using-industrial-vacuum-clean-up-debris-dust-from-renovation-process_216520-103638_jmzxyg.jpg",
  },
  {
    slug: "warehouse-factory-cleaning",
    title: "Warehouse & Factory Cleaning",
    price: "$300",
    category: "Commercial & Industrial",
    icon: "building",
    tagline: "Industrial-Grade Hygiene & Safety",
    description:
      "Industrial-grade cleaning for factories, depots, and storage facilities maintaining strict workplace health and safety compliance.",
    inclusions: [
      "Concrete Floor Scrub & Degrease",
      "High-Bay Dusting & Racking",
      "Loading Docks & Forklift Lanes",
      "Amenities & Washroom Sanitisation",
    ],
    scope: [
      "Concrete Floor Scrub & Degrease",
      "High-Bay Dusting & Racking",
      "Loading Docks & Forklift Lanes",
      "Amenities & Washroom Sanitisation",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    price: "from $190",
    category: "Commercial & Industrial",
    icon: "building",
    tagline: "A Cleaner Workplace Starts Here",
    description:
      "Scheduled workplace cleaning for corporate offices, retail spaces, and professional suites to keep daily operations spotless.",
    inclusions: [
      "Workstations & Desk Sanitisation",
      "Kitchenette & Breakout Areas",
      "Restroom Hygiene & Restocking",
      "Carpet Vacuuming & Floor Mopping",
    ],
    scope: [
      "Workstations & Desk Sanitisation",
      "Kitchenette & Breakout Areas",
      "Restroom Hygiene & Restocking",
      "Carpet Vacuuming & Floor Mopping",
    ],
    image: images.office,
  },
  {
    slug: "residential-house-cleaning",
    title: "Residential/ House Cleaning",
    price: "$150",
    category: "Residential & Domestic",
    icon: "home",
    tagline: "The Comfort of a Consistently Cared-For Home",
    description:
      "Dependable routine housekeeping tailored to your household schedule, ensuring a refreshing, healthy living space every visit.",
    inclusions: [
      "Dusting & Surface Polishing",
      "Kitchen Sanitisation & Sinks",
      "Bathroom Deep Clean & Mirrors",
      "Vacuuming & Mopping Floors",
    ],
    scope: [
      "Dusting & Surface Polishing",
      "Kitchen Sanitisation & Sinks",
      "Bathroom Deep Clean & Mirrors",
      "Vacuuming & Mopping Floors",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395575/chores-woman-cleaning-table-surfcase-with-disinfector_kcv8yi.jpg",
  },
  {
    slug: "end-of-lease-cleaning",
    title: "End of Lease Cleaning",
    price: "$190",
    category: "Residential & Domestic",
    icon: "key",
    tagline: "A Thorough Clean for Your Next Chapter",
    description:
      "Comprehensive bond-back guarantee clean tailored to real estate checklists for a smooth, stress-free final handover inspection.",
    inclusions: [
      "Oven & Rangehood Degreasing",
      "Inside & Outside All Cupboards",
      "Bathroom Descaling & Grout Scrub",
      "Skirting Boards, Tracks & Floors",
    ],
    scope: [
      "Oven & Rangehood Degreasing",
      "Inside & Outside All Cupboards",
      "Bathroom Descaling & Grout Scrub",
      "Skirting Boards, Tracks & Floors",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395626/african-american-man-vacuuming-floors-living-room-cleaning-apartment-with-girlfriend-young-adult-using-vacuum-cleaner-woman-wiping-shelves-with-all-purpose-cleaner-tripod-shot_prxmp6.jpg",
  },
  {
    slug: "periodical-cleaning",
    title: "Periodical Cleaning",
    price: "$220",
    category: "Residential & Domestic",
    icon: "calendar",
    tagline: "Scheduled Deep Cleans for Lasting Freshness",
    description:
      "Scheduled deep-cleaning sessions targeting cumulative grime, seasonal refreshes, and rotating high-detail maintenance tasks.",
    inclusions: [
      "Deep Grout & Splashback Scrub",
      "Ceiling Fans & High Vent Dusting",
      "Appliance Exterior & Detailing",
      "Door Frames & Architraves",
    ],
    scope: [
      "Deep Grout & Splashback Scrub",
      "Ceiling Fans & High Vent Dusting",
      "Appliance Exterior & Detailing",
      "Door Frames & Architraves",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1794283950/woman-is-cleaning-floor-with-broom_875765-4615_khtqqg.jpg",
  },
  {
    slug: "once-off-cleaning",
    title: "Once - off Cleaning",
    price: "$250",
    category: "Residential & Domestic",
    icon: "star",
    tagline: "A Refreshing Reset for the Space You Love",
    description:
      "An intensive top-to-bottom reset for your home or workspace before hosting family, after special events, or for a seasonal refresh.",
    inclusions: [
      "Top-to-Bottom Room Sanitisation",
      "Kitchen & Bathroom Deep Scrub",
      "Under-Furniture Vacuuming",
      "High-Touch Surface Disinfection",
    ],
    scope: [
      "Top-to-Bottom Room Sanitisation",
      "Kitchen & Bathroom Deep Scrub",
      "Under-Furniture Vacuuming",
      "High-Touch Surface Disinfection",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395392/cleaning-worker-doing-dry-cleaning-furniture_274679-58087_gpuoal.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    price: "$90",
    category: "Specialised Services",
    icon: "window",
    tagline: "Let the Light Back In",
    description:
      "Streak-free interior and exterior glass cleaning removing fingerprints, hard water mineral deposits, and everyday environmental grime.",
    inclusions: [
      "Interior & Exterior Glass Clean",
      "Flyscreen Dusting & Washing",
      "Window Tracks & Sills Detailing",
      "Sliding Doors & Glass Balconies",
    ],
    scope: [
      "Interior & Exterior Glass Clean",
      "Flyscreen Dusting & Washing",
      "Window Tracks & Sills Detailing",
      "Sliding Doors & Glass Balconies",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395738/people-housework-housekeeping-concept-happy-woman-gloves-cleaning-window-with-rag-cleanser-spray-home_231208-575_q1zo4y.jpg",
  },
  {
    slug: "carpet-steam-cleaning",
    title: "Carpet & Steam Cleaning",
    price: "$140",
    category: "Specialised Services",
    icon: "layers",
    tagline: "Bring Freshness Back Underfoot",
    description:
      "Deep hot-water steam extraction lifting stubborn stains, allergens, pet dander, and embedded bacteria from carpets and rugs.",
    inclusions: [
      "Stain Pre-Treatment & Fibre Test",
      "High-Filtration Deep Vacuuming",
      "Hot-Water Steam Extraction",
      "Fibre Deodorising & Quick Drying",
    ],
    scope: [
      "Stain Pre-Treatment & Fibre Test",
      "High-Filtration Deep Vacuuming",
      "Hot-Water Steam Extraction",
      "Fibre Deodorising & Quick Drying",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792395706/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home_ublczo.jpg",
  },
  {
    slug: "healthcare-medical-cleaning",
    title: "Healthcare/ Medical Cleaning",
    price: "$120",
    category: "Specialised Services",
    icon: "shield",
    tagline: "Clinical-Grade Infection Control & Sanitisation",
    description:
      "Clinical-grade sanitisation adhering strictly to infection control protocols for dental surgeries, medical clinics, and consultation suites.",
    inclusions: [
      "Hospital-Grade EPA Disinfection",
      "Treatment Bed & Chair Sterilisation",
      "Reception & Waiting Area Care",
      "Colour-Coded Microfibre System",
    ],
    scope: [
      "Hospital-Grade EPA Disinfection",
      "Treatment Bed & Chair Sterilisation",
      "Reception & Waiting Area Care",
      "Colour-Coded Microfibre System",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1794284131/hospital-cleaner-walking-down-hallway-with-equipment_255669-4950_xtacwd.jpg",
  },
  {
    slug: "aged-care-cleaning",
    title: "Aged Care Cleaning",
    price: "$120",
    category: "Specialised Services",
    icon: "heart",
    tagline: "Compassionate Care for Senior Living",
    description:
      "Compassionate, gentle cleaning for senior living villages and assisted residences by police-vetted, respectful professionals.",
    inclusions: [
      "Handrails & Grab Bar Sanitisation",
      "Hypoallergenic Eco Supplies",
      "Bathroom Hygiene & Non-Slip Care",
      "Quiet, Non-Disruptive Service",
    ],
    scope: [
      "Handrails & Grab Bar Sanitisation",
      "Hypoallergenic Eco Supplies",
      "Bathroom Hygiene & Non-Slip Care",
      "Quiet, Non-Disruptive Service",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1794284337/nurse-wearing-uniform-taking-care-aged-woman_259150-24_swxx5g.jpg",
  },
  {
    slug: "school-cleaning",
    title: "School Cleaning",
    price: "$150",
    category: "Specialised Services",
    icon: "school",
    tagline: "Thoughtful Cleaning for Learning Spaces",
    description:
      "Reliable educational facility cleaning for schools, colleges, and campuses by Working With Children Check (WWCC) certified cleaners.",
    inclusions: [
      "Classroom Desk & Chair Sanitising",
      "Hallway & Locker Floor Maintenance",
      "Student Amenities Deep Scrub",
      "Waste Removal & Safe Recycling",
    ],
    scope: [
      "Classroom Desk & Chair Sanitising",
      "Hallway & Locker Floor Maintenance",
      "Student Amenities Deep Scrub",
      "Waste Removal & Safe Recycling",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1792396339/two-men-are-cleaning-floor-school_1286328-2677_er8zv0.jpg",
  },
  {
    slug: "early-childhood-education-cleaning",
    title: "Early Childhood Education Cleaning",
    price: "$120",
    category: "Specialised Services",
    icon: "sun",
    tagline: "Safe, Sanitised Environments for Little Learners",
    description:
      "100% child-safe, non-toxic sanitisation for child care centres, preschools, and kindergartens keeping little learners healthy.",
    inclusions: [
      "Child-Safe Non-Toxic Cleaners",
      "Toy, Cot & Play Mat Disinfection",
      "Nappy Change & Potty Sanitisation",
      "Feeding Area & Highchair Hygiene",
    ],
    scope: [
      "Child-Safe Non-Toxic Cleaners",
      "Toy, Cot & Play Mat Disinfection",
      "Nappy Change & Potty Sanitisation",
      "Feeding Area & Highchair Hygiene",
    ],
    image:
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1794284606/Untitled-design-2026-06-18T175232.763-1024x585_b43ujz.webp",
  },
]
