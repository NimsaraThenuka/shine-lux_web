import { serviceImages } from "./serviceImages"

export interface ServiceDetailTab {
  id: number
  label: string
  shortLabel?: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
  ctaText: string
  image: string
}

export interface ServiceDetailProcessStep {
  step: string
  title: string
  description: string
}

export interface ServiceDetailFAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  serviceId: number
  title: string
  hero: {
    eyebrow: string
    headline: string
    description: string
    ctaText: string
    image: string
  }
  whyTitle: string
  whyType: "paragraph" | "bullets"
  whyContent: string | string[]
  tabs: ServiceDetailTab[]
  process: ServiceDetailProcessStep[]
  faqs: ServiceDetailFAQ[]
}

export const serviceDetails: ServiceDetail[] = [
  // 1. Builders / Post-Construction Cleaning
  {
    slug: "builders-post-construction-cleaning",
    serviceId: 1,
    title: "Builders/ Post - Construction Cleaning",
    hero: {
      eyebrow: "Post-Construction Cleaning",
      headline: "From Construction Site to a Spotless Finish",
      description:
        "Construction may be complete, but the final details make all the difference. ShineLux provides professional post-construction cleaning to remove building dust, residue, and leftover mess, transforming newly built or renovated spaces into clean, presentable environments ready for inspection, occupancy, or handover.",
      ctaText: "Request a Post-Construction Cleaning Quote",
      image: serviceImages["builders-post-construction-cleaning"].hero,
    },
    whyTitle: "Why This Service Matters",
    whyType: "paragraph",
    whyContent:
      "Building and renovation work can leave fine dust, marks, debris, and residue across every part of a property. Our specialised cleaning approach focuses on removing these remnants while carefully detailing surfaces, fixtures, floors, and glass to achieve a polished final result.",
    tabs: [
      {
        id: 1,
        label: "Initial Builders Clean",
        shortLabel: "Initial Clean",
        title: "Clearing dust and construction debris.",
        subtitle: "Heavy-duty clearing post-trade departure.",
        description:
          "We clear coarse dust, leftover materials, and trade debris to prepare the site for defect inspection and final detailing.",
        bullets: [
          "Removal of bulky debris, packaging, and stickers",
          "Sweeping and vacuuming heavy construction dust",
          "Scraping paint splashes and mortar from hard floors",
          "Initial window wipe and frame perimeter clean",
        ],
        ctaText: "Quote Initial Clean",
        image: serviceImages["builders-post-construction-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Final Sparkle Clean",
        shortLabel: "Sparkle Clean",
        title: "Handover-ready perfection.",
        subtitle: "Detailed polish to showcase the build.",
        description:
          "Our sparkle clean delivers the finishing touch before handover, polishing every surface so the property looks showroom-ready.",
        bullets: [
          "Interior and exterior window glass polishing",
          "Fixtures, fittings, and stainless steel detailing",
          "Cabinet and drawer wiping inside and out",
          "Deep vacuuming and professional floor washing",
        ],
        ctaText: "Book Sparkle Clean",
        image: serviceImages["builders-post-construction-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Exterior Wash Down",
        shortLabel: "Exterior Wash",
        title: "Perimeter curb appeal from day one.",
        subtitle: "High-pressure wash for exterior surfaces.",
        description:
          "We pressure-clean exterior walls, pathways, and facades to eliminate render mist, dirt, and mortar wash.",
        bullets: [
          "High-pressure washing of driveways and paths",
          "Washing exterior cladding and brickwork",
          "External window glazing and frame track wash",
          "Clearing building sediment from gutters and drains",
        ],
        ctaText: "Arrange Exterior Wash",
        image: serviceImages["builders-post-construction-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Post-Renovation Clean",
        shortLabel: "Renovation Clean",
        title: "Containing and removing renovation dust.",
        subtitle: "Targeted cleaning for extensions and fit-outs.",
        description:
          "We isolate the renovation area and clean thoroughly, preventing fine drywall and plaster dust from drifting into lived-in spaces.",
        bullets: [
          "HEPA vacuuming of airborne gypsum dust",
          "Grout haze and silicone residue removal",
          "Sanitising new installations and joinery",
          "HVAC vent wipe down to contain dust spread",
        ],
        ctaText: "Schedule Renovation Clean",
        image: serviceImages["builders-post-construction-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Assessment",
        description: "Review the property, cleaning requirements, and project stage.",
      },
      {
        step: "02",
        title: "Initial Removal",
        description: "Clear suitable loose debris and construction residue.",
      },
      {
        step: "03",
        title: "Detailed Cleaning",
        description: "Clean surfaces, fixtures, glass, floors, and affected areas.",
      },
      {
        step: "04",
        title: "Final Inspection",
        description: "Review the completed work and address remaining cleaning details.",
      },
    ],
    faqs: [
      {
        question: "When should post-construction cleaning be booked?",
        answer:
          "It is generally best scheduled once major construction activities have finished and the site is ready for cleaning.",
      },
      {
        question: "Can you clean newly renovated properties?",
        answer:
          "Yes. We can tailor the cleaning scope to residential and commercial renovation projects.",
      },
      {
        question: "Can you prepare the property for handover?",
        answer:
          "Yes. Our cleaning focuses on presentation and cleanliness before handover or occupancy.",
      },
    ],
  },

  // 2. Warehouse & Factory Cleaning
  {
    slug: "warehouse-factory-cleaning",
    serviceId: 2,
    title: "Warehouse & Factory Cleaning",
    hero: {
      eyebrow: "Warehouse & Factory Cleaning",
      headline: "Cleaner Facilities. Safer Work Environments.",
      description:
        "Maintaining a clean industrial facility is essential for smooth operations, workplace safety, and professional standards. ShineLux delivers tailored warehouse and factory cleaning solutions designed to manage dust, dirt, production residue, and everyday industrial buildup.",
      ctaText: "Request a Warehouse Cleaning Quote",
      image: serviceImages["warehouse-factory-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning plans tailored to industrial operations",
      "Flexible service scheduling",
      "Attention to workplace cleanliness and safety",
      "Suitable equipment for larger cleaning areas",
    ],
    tabs: [
      {
        id: 1,
        label: "Dock & Goods",
        shortLabel: "Dock & Goods",
        title: "High-traffic dispatch zones and docks.",
        subtitle: "Safe, slip-free logistics gateways.",
        description:
          "We degrease loading bays and clear pallet debris to ensure safe truck turnaround and WHS compliance.",
        bullets: [
          "Loading dock scrubbing and tyre mark removal",
          "Clearing pallet splinters, wrap, and strapping",
          "Sanitising roller door controls and bollards",
          "Heavy dust extraction across staging bays",
        ],
        ctaText: "Quote Dock Clean",
        image: serviceImages["warehouse-factory-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Aisles & Paths",
        shortLabel: "Aisles & Paths",
        title: "Sweeping and scrubbing warehouse aisles.",
        subtitle: "Clear transit paths for pickers and forklifts.",
        description:
          "Commercial sweeping and scrubbing keep high-density aisles spotless, preventing dust transfer onto pallet stock.",
        bullets: [
          "Ride-on sweeping along high-density pick aisles",
          "Auto-scrubbing for sealed concrete floors",
          "Line marking cleaning and anti-slip care",
          "Lower racking frame dust suppression",
        ],
        ctaText: "Book Aisle Scrubbing",
        image: serviceImages["warehouse-factory-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Mezz & Office",
        shortLabel: "Mezz & Office",
        title: "Mezzanines, offices, and control rooms.",
        subtitle: "Clean spaces bridging admin and operations.",
        description:
          "We keep operational mezzanines, dispatch desks, and supervisor offices clean, preventing dust migration to computers.",
        bullets: [
          "Sanitising dispatch desks, keyboards, and screens",
          "Vacuuming and mopping mezzanine flooring",
          "Stairway, rail, and balustrade degreasing",
          "Interior window cleaning for operational oversight",
        ],
        ctaText: "Schedule Mezz Clean",
        image: serviceImages["warehouse-factory-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Bulk Storage",
        shortLabel: "Bulk Storage",
        title: "High-bay racking and bulk stock reserves.",
        subtitle: "Dust management for protected inventory.",
        description:
          "We vacuum high-level structural beams and sweep racking positions, suppressing dust clouds above warehouse stock.",
        bullets: [
          "High-level beam and cable tray dusting",
          "Sweeping beneath vacant pallet positions",
          "Wall-to-floor junction and perimeter clearance",
          "Spill containment and safe residue wipe",
        ],
        ctaText: "Request Bulk Storage Clean",
        image: serviceImages["warehouse-factory-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Facility Review",
        description: "Assess site dimensions, flooring types, operational hazards, and priority zones.",
      },
      {
        step: "02",
        title: "Cleaning Plan Preparation",
        description: "Develop a bespoke operational schedule and deploy industrial-grade equipment.",
      },
      {
        step: "03",
        title: "Scheduled Cleaning & Detailing",
        description: "Scrub floors, degrease work areas, and sanitize communal facility spaces.",
      },
      {
        step: "04",
        title: "Quality Review & Completion",
        description: "Inspect completed zones against strict safety and cleanliness standards.",
      },
    ],
    faqs: [
      {
        question: "Can cleaning be carried out outside production hours?",
        answer: "Cleaning schedules can be discussed to minimise disruption to your operations.",
      },
      {
        question: "Do you clean large warehouse floors?",
        answer:
          "Yes. Warehouse floor cleaning can be arranged based on the site size, floor type, and cleaning requirements.",
      },
      {
        question: "Can we arrange regular factory cleaning?",
        answer: "Yes. Periodical cleaning programs can be customised to your facility.",
      },
    ],
  },

  // 3. Commercial Cleaning
  {
    slug: "commercial-cleaning",
    serviceId: 3,
    title: "Commercial Cleaning",
    hero: {
      eyebrow: "Commercial Cleaning",
      headline: "A Cleaner Workplace. A Better Business Impression.",
      description:
        "A clean commercial environment reflects the professionalism of your business. ShineLux provides reliable commercial cleaning solutions for workplaces, business premises, and commercial facilities, helping maintain clean, welcoming, and productive surroundings.",
      ctaText: "Request a Commercial Cleaning Quote",
      image: serviceImages["commercial-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning tailored to your business environment",
      "Consistent service standards",
      "Flexible cleaning arrangements",
      "Professional attention to high-traffic areas",
    ],
    tabs: [
      {
        id: 1,
        label: "Open plan & desks",
        shortLabel: "Desks & Work",
        title: "Productive, germ-free workstations.",
        subtitle: "Daily touchpoint disinfection for staff.",
        description:
          "We sanitise shared desks, screens, and chairs with microfibre systems, supporting everyday employee health and focus.",
        bullets: [
          "Microfibre wipe of desks, mice, and monitors",
          "Under-desk vacuuming and cable tray dusting",
          "Chair arm and screen divider disinfection",
          "Emptying and relining office waste bins",
        ],
        ctaText: "Quote Desk Cleaning",
        image: serviceImages["commercial-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Executive & meetings",
        shortLabel: "Meeting Rooms",
        title: "Immaculate boardrooms and meeting suites.",
        subtitle: "Polished spaces ready for client presentations.",
        description:
          "Discreet detailing for boardroom tables, AV consoles, and meeting rooms so your business always makes a great impression.",
        bullets: [
          "High-gloss table polishing and mark removal",
          "AV console and remote sanitisation",
          "Upholstery spot checking and chair alignment",
          "Acoustic panel edging and glass door wipe",
        ],
        ctaText: "Book Meeting Room Care",
        image: serviceImages["commercial-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Washrooms & kitchens",
        shortLabel: "Kitchen & Wash",
        title: "Hygienic kitchens and sanitised washrooms.",
        subtitle: "Hospital-grade touchpoint sanitisation.",
        description:
          "We deep-clean staff kitchens, tea points, and washrooms, eliminating bacteria and replenishing essential supplies.",
        bullets: [
          "Toilet, urinal, and basin descaling and disinfection",
          "Kitchen benchtop, sink, and microwave cleaning",
          "Consumables replenishment (soap, paper, liners)",
          "Mirror polishing and antibacterial floor mopping",
        ],
        ctaText: "Schedule Hygiene Clean",
        image: serviceImages["commercial-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "After-hours & multi-site",
        shortLabel: "After-Hours",
        title: "Discreet evening cleans and multi-site care.",
        subtitle: "Security-vetted teams working around your schedule.",
        description:
          "Our trusted after-hours crews arrive on schedule, carry out thorough cleans, and secure premises with verified alarm protocols.",
        bullets: [
          "Night-time and weekend cleaning windows",
          "Secure lock-up and alarm procedure compliance",
          "Unified service standards across multiple branches",
          "Rapid response for urgent corporate cleanups",
        ],
        ctaText: "Arrange After-Hours Service",
        image: serviceImages["commercial-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand Your Business",
        description: "Evaluate your workspace layout, foot traffic, and specific operating hours.",
      },
      {
        step: "02",
        title: "Define Cleaning Requirements",
        description: "Create an itemised checklist tailored to workstations, washrooms, and floors.",
      },
      {
        step: "03",
        title: "Deliver Scheduled Cleaning",
        description: "Experienced, vetted cleaning professionals maintain your premises consistently.",
      },
      {
        step: "04",
        title: "Review Service Quality",
        description: "Regular quality audits and responsive communication ensure high standards.",
      },
    ],
    faqs: [
      {
        question: "What commercial properties do you clean?",
        answer:
          "We provide cleaning for offices, business premises, commercial buildings, and other workplace environments.",
      },
      {
        question: "Can cleaning be scheduled after business hours?",
        answer: "We can discuss after-hours or suitable time arrangements to minimise disruption.",
      },
      {
        question: "Do you offer ongoing cleaning services?",
        answer:
          "Yes. Regular cleaning schedules can be designed to suit your premises and operational needs.",
      },
    ],
  },

  // 4. Residential / House Cleaning
  {
    slug: "residential-house-cleaning",
    serviceId: 4,
    title: "Residential/ House Cleaning",
    hero: {
      eyebrow: "Residential Cleaning",
      headline: "Enjoy a Cleaner Home Without the Hassle.",
      description:
        "Your home should be a place to relax, not a place where cleaning tasks constantly pile up. ShineLux offers dependable home cleaning services to help keep your living spaces fresh, tidy, and comfortable.",
      ctaText: "Request a Home Cleaning Quote",
      image: serviceImages["residential-house-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning based on your home and priorities",
      "Convenient scheduling options",
      "Detail-focused cleaning",
      "A more comfortable and welcoming home",
    ],
    tabs: [
      {
        id: 1,
        label: "Regular clean",
        shortLabel: "Regular Clean",
        title: "Consistent weekly or fortnightly home care.",
        subtitle: "Reliable maintenance to keep homes sparkling.",
        description:
          "Enjoy coming home to a freshly cleaned house. We take care of dusting, vacuuming, and surface wiping on a regular schedule.",
        bullets: [
          "Dusting furniture, skirtings, and decorations",
          "Carpet vacuuming and hard floor damp mopping",
          "Wiping kitchen counters and dining tables",
          "Sanitising bathroom basins, taps, and toilets",
        ],
        ctaText: "Book Regular Clean",
        image: serviceImages["residential-house-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Kitchen & meals",
        shortLabel: "Kitchen & Meals",
        title: "Grease-free stovetops and dining spaces.",
        subtitle: "Hygienic cooking zones for family meals.",
        description:
          "We degrease cooktops, wipe microwave interiors, and clean splashbacks, leaving your culinary spaces fresh and clean.",
        bullets: [
          "Cooktop and rangehood exterior degreasing",
          "Inside and outside microwave sanitisation",
          "Scrubbing sinks and polishing tapware",
          "Wiping dining tables, breakfast bars, and chairs",
        ],
        ctaText: "Quote Kitchen Detailing",
        image: serviceImages["residential-house-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Bathrooms & wet areas",
        shortLabel: "Bathrooms & Wet",
        title: "Soap-scum removal and fresh wet areas.",
        subtitle: "Deep cleaning for showers, baths, and laundries.",
        description:
          "We remove soap scum and mineral scale from shower screens, bathtubs, and tiles, delivering a spotless, fresh bathroom.",
        bullets: [
          "Intensive shower screen and wall tile scrub",
          "Bathtub and vanity basin descaling",
          "High-shine mirror and tapware polishing",
          "Laundry basin sanitising and floor mopping",
        ],
        ctaText: "Schedule Bathroom Clean",
        image: serviceImages["residential-house-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Custom priorities",
        shortLabel: "Custom Focus",
        title: "Personalised checklists for targeted tasks.",
        subtitle: "Focus our cleaners where you need them most.",
        description:
          "Customise your clean with specific priority tasks, such as deep oven cleaning, fridge wipe-downs, or interior window details.",
        bullets: [
          "Inside oven, grill, and fridge deep cleaning",
          "Interior window panes and sliding door tracks",
          "Bedsheet changing and linen rotation",
          "Custom task list tailored to your home",
        ],
        ctaText: "Customise Home Clean",
        image: serviceImages["residential-house-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discuss Your Home & Requirements",
        description: "Identify your priority rooms, specific preferences, and ideal schedule.",
      },
      {
        step: "02",
        title: "Select Your Cleaning Priorities",
        description: "Customize areas needing extra care, from kitchens to high-touch surfaces.",
      },
      {
        step: "03",
        title: "Complete the Cleaning Service",
        description: "Our police-vetted, insured cleaners meticulously clean your living spaces.",
      },
      {
        step: "04",
        title: "Review & Enjoy Your Fresh Space",
        description: "Return to a sparkling clean, fresh home ready for total relaxation.",
      },
    ],
    faqs: [
      {
        question: "Do I need to be home during the cleaning?",
        answer: "You can discuss access arrangements with our team before the service.",
      },
      {
        question: "Can I choose specific rooms to clean?",
        answer: "Yes. Cleaning priorities and areas can be discussed when arranging your service.",
      },
      {
        question: "Do you offer regular house cleaning?",
        answer: "Yes. Recurring services can be organised to help maintain your home.",
      },
    ],
  },

  // 5. End of Lease Cleaning
  {
    slug: "end-of-lease-cleaning",
    serviceId: 5,
    title: "End of Lease Cleaning",
    hero: {
      eyebrow: "End of Lease Cleaning",
      headline: "Leave Your Property Looking Its Best.",
      description:
        "Moving out can be stressful enough without worrying about the final cleaning. ShineLux provides detailed end-of-lease cleaning services designed to help tenants, property owners, and property managers prepare rental properties for final inspections and the next occupants.",
      ctaText: "Request an End of Lease Cleaning Quote",
      image: serviceImages["end-of-lease-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Detailed move-out cleaning",
      "Property-focused cleaning checklists",
      "Attention to overlooked areas",
      "Cleaning requirements discussed before service",
    ],
    tabs: [
      {
        id: 1,
        label: "Kitchen",
        title: "Oven, rangehood, and cupboard detailing.",
        subtitle: "Agent hotspot detail for bond approval.",
        description:
          "Bond inspections focus heavily on kitchens. We degrease ovens, soak rangehood filters, and wipe cupboards inside-out.",
        bullets: [
          "Oven and cooktop degreased inside and out",
          "Rangehood wire filters and canopy soaked clean",
          "Cupboards, pantry, and drawers wiped inside-out",
          "Sink scrubbed, tapware descaled, and seals wiped",
        ],
        ctaText: "Book Bond Kitchen",
        image: serviceImages["end-of-lease-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Bathrooms",
        title: "Shower screens, grout, and fixtures.",
        subtitle: "Zero soap scum for property handovers.",
        description:
          "We restore bathrooms to landlord-approved standard, removing soap scum, limescale, and surface mould from tiles and screens.",
        bullets: [
          "Shower screen descaling and soap scum removal",
          "Tile grout scrubbing and mould treatment",
          "Vanity, bathtub, and mirror detail polish",
          "Toilet sanitisation and exhaust fan wipedown",
        ],
        ctaText: "Quote Bond Bathroom",
        image: serviceImages["end-of-lease-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Whole property",
        title: "Skirting boards, tracks, and living spaces.",
        subtitle: "Room-by-room preparation for full bond return.",
        description:
          "We detail skirting boards, door frames, switch plates, and carpets throughout the property to ensure your bond return.",
        bullets: [
          "Skirting boards, sills, and architraves wiped",
          "Light switches, door handles, and scuffs cleaned",
          "Full room vacuuming and sliding track detailing",
          "Cobweb removal from corners and light fittings",
        ],
        ctaText: "Schedule Lease Clean",
        image: serviceImages["end-of-lease-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Add-ons",
        title: "Carpet steam, balcony, and garage extras.",
        subtitle: "Satisfying specific tenancy agreement clauses.",
        description:
          "Bundle required lease add-ons into one visit, including carpet steam receipts, balcony washing, and garage floor sweeps.",
        bullets: [
          "Hot water carpet steam clean with receipt",
          "Balcony and patio pressure washing",
          "Garage floor sweeping and cobweb removal",
          "Ground-level external window cleaning",
        ],
        ctaText: "Add Carpet & Extras",
        image: serviceImages["end-of-lease-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Review Property & Requirements",
        description: "Assess property size, condition, and estate agent checklist requirements.",
      },
      {
        step: "02",
        title: "Prepare Cleaning Checklist",
        description: "Confirm agreed scope covering appliances, bathrooms, tracks, and living areas.",
      },
      {
        step: "03",
        title: "Complete Move-Out Cleaning",
        description: "Thorough deep cleaning to make the rental property inspection-ready.",
      },
      {
        step: "04",
        title: "Final Detail Review",
        description: "Check off every room to ensure maximum cleanliness and presentation.",
      },
    ],
    faqs: [
      {
        question: "Does end-of-lease cleaning include everything?",
        answer:
          "Cleaning inclusions depend on the property, its condition, and the agreed service scope.",
      },
      {
        question: "Can I request additional services?",
        answer:
          "Yes. Additional items can be discussed and included in your quote where available.",
      },
      {
        question: "Does this guarantee my bond return?",
        answer:
          "Cleaning can help prepare the property for inspection, but bond outcomes depend on the rental agreement, property condition, and inspection requirements.",
      },
    ],
  },

  // 6. Periodical Cleaning
  {
    slug: "periodical-cleaning",
    serviceId: 6,
    title: "Periodical Cleaning",
    hero: {
      eyebrow: "Periodical Cleaning",
      headline: "Consistent Cleanliness, Every Visit.",
      description:
        "Maintaining a clean property requires consistency. ShineLux offers scheduled cleaning services to keep your premises looking presentable, hygienic, and well-maintained throughout the year. Our regular cleaning programs are designed around your space, usage, and preferred schedule.",
      ctaText: "Set Up a Scheduled Cleaning Program",
      image: serviceImages["periodical-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Reliable scheduled cleaning arrangements",
      "Consistent cleaning routines",
      "Flexible frequency options",
      "Long-term cleanliness maintenance",
    ],
    tabs: [
      {
        id: 1,
        label: "Daily cycle",
        shortLabel: "Daily Cycle",
        title: "Daily sanitation and high-touch reset.",
        subtitle: "Keeping premises fresh and presentable.",
        description:
          "Daily cleaning cycles prevent waste buildup, sanitise door handles, and maintain clean entrance lobbies and kitchenettes.",
        bullets: [
          "Emptying waste baskets and recycling bins",
          "Disinfecting handles, push plates, and lift buttons",
          "Lobby entrance vacuuming and hard floor mopping",
          "Kitchenette surface wipe and supplies reset",
        ],
        ctaText: "Quote Daily Cycle",
        image: serviceImages["periodical-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Weekly rotation",
        shortLabel: "Weekly Rotation",
        title: "Scheduled weekly mid-level rotations.",
        subtitle: "Tackling accumulating dust and partitions.",
        description:
          "We add weekly rotational tasks to deep-dust baseboards, meeting room partitions, and conduct thorough washroom scrubbing.",
        bullets: [
          "Edge vacuuming along walls and corners",
          "Dusting ledges, partitions, and frames",
          "Deep scrubbing washroom tile surrounds",
          "Glass door and partition fingerprint wipe",
        ],
        ctaText: "Arrange Weekly Schedule",
        image: serviceImages["periodical-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Monthly deep maintenance",
        shortLabel: "Monthly Deep",
        title: "Monthly machine scrub and vent care.",
        subtitle: "Long-term maintenance for facility health.",
        description:
          "Intensive monthly routines including machine floor scrubbing and HVAC vent vacuuming preserve surfaces and indoor air quality.",
        bullets: [
          "Rotary machine floor scrubbing and dirt lifting",
          "Ceiling HVAC return and vent vacuuming",
          "Communal staff fridge deep clean",
          "High-reach bulkhead and ledge dusting",
        ],
        ctaText: "Book Monthly Care",
        image: serviceImages["periodical-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Custom schedule",
        shortLabel: "Custom Schedule",
        title: "Flexible schedules aligned with trading.",
        subtitle: "Tailored frequencies for your business.",
        description:
          "We tailor service frequency and scope to your foot traffic and operational calendar, optimizing your maintenance budget.",
        bullets: [
          "Custom service intervals matched to traffic",
          "Seasonal adjustments for winter track-in",
          "Itemised task reporting and SLA tracking",
          "Cost-effective scheduling tailored to budget",
        ],
        ctaText: "Design Custom Schedule",
        image: serviceImages["periodical-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Assessment",
        description: "Inspect traffic flow, surfaces, and key facilities to determine cleaning cadence.",
      },
      {
        step: "02",
        title: "Schedule Planning",
        description: "Design a flexible rota (daily, weekly, fortnightly, or monthly).",
      },
      {
        step: "03",
        title: "Regular Cleaning Visits",
        description: "Dependable, uniformed cleaners carry out methodical, checklist-driven routines.",
      },
      {
        step: "04",
        title: "Ongoing Quality Monitoring",
        description: "Periodic audits ensure your standard of cleanliness remains consistently high.",
      },
    ],
    faqs: [
      {
        question: "How often can cleaning be scheduled?",
        answer:
          "Cleaning can be arranged daily, weekly, fortnightly, monthly, or according to your requirements.",
      },
      {
        question: "Can the schedule be changed?",
        answer: "Schedule adjustments can be discussed depending on service availability.",
      },
      {
        question: "Is periodical cleaning suitable for commercial properties?",
        answer:
          "Yes. It is ideal for offices, commercial buildings, residential properties, and other premises requiring ongoing maintenance.",
      },
    ],
  },

  // 7. Once-Off Cleaning
  {
    slug: "once-off-cleaning",
    serviceId: 7,
    title: "Once - off Cleaning",
    hero: {
      eyebrow: "Once-Off Cleaning",
      headline: "A Fresh Start, Whenever You Need It.",
      description:
        "Sometimes your property needs more than its usual cleaning routine. ShineLux offers one-off cleaning services for those occasions when you need a complete refresh, extra attention, or a fresh start without committing to a regular cleaning schedule.",
      ctaText: "Book a Once-Off Clean",
      image: serviceImages["once-off-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "No ongoing cleaning commitment",
      "Customisable cleaning priorities",
      "Suitable for special occasions",
      "Flexible one-time service arrangements",
    ],
    tabs: [
      {
        id: 1,
        label: "Spring clean",
        title: "Annual home refresh and deep grime reset.",
        subtitle: "Top-to-bottom reset for every room.",
        description:
          "Clear away months of dust and grime. We reach behind furniture and into corners that regular cleaning cycles miss.",
        bullets: [
          "Vacuuming and washing beneath movable furniture",
          "Wiping door frames, architraves, and sills",
          "Kitchen cabinet fronts and splashback degrease",
          "Bathroom tile scrub and tapware descaling",
        ],
        ctaText: "Book Spring Clean",
        image: serviceImages["once-off-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Post-event",
        title: "Fast recovery for parties and corporate functions.",
        subtitle: "Restoring order quickly after events.",
        description:
          "Enjoy your function without stress. Our crews clear catering rubbish, scrub floors, and restore venues rapidly.",
        bullets: [
          "Rapid clearing of party cups, bottles, and waste",
          "Immediate spot treatment for beverage spills",
          "Mopping dance floors and entertainment areas",
          "Washroom sanitising and toiletries replenishment",
        ],
        ctaText: "Quote Event Cleanup",
        image: serviceImages["once-off-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Pre-sale",
        title: "Showcase presentation for real estate inspections.",
        subtitle: "Spotless detailing to impress buyers.",
        description:
          "First impressions drive buyer value. We detail glass, kitchens, and bathrooms to create photo-ready open-home presentation.",
        bullets: [
          "Polishing architectural glass and mirrors",
          "Detailing kitchen counters, sinks, and appliances",
          "Eliminating bathroom limescale and grout marks",
          "Wiping entrance scuffs for strong curb appeal",
        ],
        ctaText: "Book Pre-Sale Detail",
        image: serviceImages["once-off-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Custom blitz",
        title: "Targeted multi-cleaner burst for urgent areas.",
        subtitle: "Rapid results on your priority list.",
        description:
          "When time is limited, our agile team focuses on your specific pain points to deliver an immediate transformation.",
        bullets: [
          "Rapid team deployment for priority tasks",
          "Intensive focus on neglected rooms or laundries",
          "Sanitising and deodorising before visitors arrive",
          "Urgent prep for landlord and audit walkthroughs",
        ],
        ctaText: "Schedule Custom Blitz",
        image: serviceImages["once-off-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Tell Us What Needs Cleaning",
        description: "Share the property size, specific tasks, and timing for your one-time clean.",
      },
      {
        step: "02",
        title: "Arrange a Suitable Visit",
        description: "Choose a day and time that seamlessly fits around your schedule or event.",
      },
      {
        step: "03",
        title: "Complete the Cleaning Tasks",
        description: "Our dedicated team tackles stubborn dirt, high-traffic grime, and detailing.",
      },
      {
        step: "04",
        title: "Final Review & Completion",
        description: "Walk through the results and enjoy your refreshed, sparkling space.",
      },
    ],
    faqs: [
      {
        question: "Do I have to book a recurring service?",
        answer:
          "No. Once-off cleaning is designed for customers who need a single cleaning visit.",
      },
      {
        question: "Can I request a deep clean?",
        answer:
          "Yes. You can request a detailed cleaning service based on the condition and requirements of your property.",
      },
      {
        question: "What if I only need certain areas cleaned?",
        answer: "Specific rooms or cleaning tasks can be discussed before the service.",
      },
    ],
  },

  // 8. Window Cleaning
  {
    slug: "window-cleaning",
    serviceId: 8,
    title: "Window Cleaning",
    hero: {
      eyebrow: "Window Cleaning",
      headline: "Crystal-Clear Windows. Brighter Spaces.",
      description:
        "Clean windows make a noticeable difference to the appearance of any property. ShineLux provides residential, commercial, and high-rise window cleaning services to remove dirt, dust, smudges, watermarks, and everyday buildup, ensuring crystal-clear clarity at any height.",
      ctaText: "Request a Window Cleaning Quote",
      image: serviceImages["window-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Streak-conscious cleaning methods",
      "High-rise & multi-storey equipment capability",
      "Attention to glass edges and frames",
      "Residential and commercial solutions",
      "Suitable cleaning methods for different glass surfaces",
    ],
    tabs: [
      {
        id: 1,
        label: "Interior glass",
        shortLabel: "Interior Glass",
        title: "Streak-free interior pane washing.",
        subtitle: "Maximum natural light without smudges.",
        description:
          "We wash interior glass using professional squeegees and lint-free microfibre, removing pet prints and cooking haze without drips.",
        bullets: [
          "Streak-free squeegee technique on all panes",
          "Removal of fingerprints, pet smudges, and haze",
          "Lint-free edge detailing along timber sills",
          "Zero-drip methods protecting floor surfaces",
        ],
        ctaText: "Quote Interior Windows",
        image: serviceImages["window-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Exterior windows",
        shortLabel: "Exterior Glass",
        title: "High-rise & exterior purified water washing.",
        subtitle: "Specialised multi-storey & high-rise window access.",
        description:
          "Using water-fed carbon poles and purified deionised water, we clean high-rise and multi-storey exterior windows safely and effectively.",
        bullets: [
          "Certified high-rise and multi-storey window washing",
          "Pure deionised water washing leaving zero mineral residue",
          "Removal of bird droppings, spider webs, and dust",
          "Strict compliance with working-at-heights safety standards",
        ],
        ctaText: "Book Exterior Windows",
        image: serviceImages["window-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Frames & tracks",
        shortLabel: "Frames & Tracks",
        title: "Track crevice vacuuming and frame wipe.",
        subtitle: "Restoring smooth sliding window function.",
        description:
          "We vacuum trapped dirt and dead insects from sliding tracks, wash sashes, and detail frames so windows glide smoothly.",
        bullets: [
          "Crevice vacuuming dead bugs, grit, and leaves",
          "Scrubbing sliding track aluminium guide rails",
          "Wiping frame perimeters and internal ledges",
          "Dusting security screens and flywire mesh",
        ],
        ctaText: "Schedule Track Clean",
        image: serviceImages["window-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Glass doors & partitions",
        shortLabel: "Doors & Glass",
        title: "Bifold doors, balustrades, and partitions.",
        subtitle: "Pristine architectural glass surfaces.",
        description:
          "From patio sliders and pool glass balustrades to office partition walls, we keep large-format glass crystal clear.",
        bullets: [
          "Cleaning large alfresco sliders and bifold doors",
          "Polishing glass balustrades and pool fencing",
          "Commercial meeting partition fingerprint wipe",
          "Stainless steel clamp and handle polishing",
        ],
        ctaText: "Book Glass Partition Clean",
        image: serviceImages["window-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess Glass & Access Requirements",
        description: "Evaluate window styles, heights, accessibility, and safety measures.",
      },
      {
        step: "02",
        title: "Select Suitable Cleaning Methods",
        description: "Prepare professional-grade squeegees, pure water systems, and microfibre tools.",
      },
      {
        step: "03",
        title: "Clean Glass, Frames & Edges",
        description: "Remove grime, wipe down tracks, and detailed edge-to-edge glass drying.",
      },
      {
        step: "04",
        title: "Final Clarity Check",
        description: "Inspect for streak-free transparency and maximum natural daylight.",
      },
    ],
    faqs: [
      {
        question: "Do you clean both sides of the windows?",
        answer:
          "Both sides can be included where access and the agreed service scope allow.",
      },
      {
        question: "Do you clean window tracks and frames?",
        answer: "Yes. These can be included based on the cleaning requirements.",
      },
      {
        question: "Can you clean commercial glass?",
        answer:
          "Yes. We can discuss glass cleaning requirements for commercial properties and business premises.",
      },
      {
        question: "Do you provide high-rise and multi-storey window cleaning?",
        answer:
          "Yes. Our technicians are trained for high-rise and multi-storey window cleaning using pure water-fed pole systems and strictly complying with Australian working-at-heights safety standards.",
      },
    ],
  },

  // 9. Carpet & Steam Cleaning
  {
    slug: "carpet-steam-cleaning",
    serviceId: 9,
    title: "Carpet & Steam Cleaning",
    hero: {
      eyebrow: "Carpet & Steam Cleaning",
      headline: "Restore the Freshness Beneath Your Feet.",
      description:
        "Carpets can gradually collect dust, dirt, stains, and unwanted odours through everyday use. ShineLux provides professional carpet cleaning solutions designed to refresh carpet fibres, improve appearance, and remove accumulated dirt through suitable deep-cleaning techniques.",
      ctaText: "Request a Carpet Cleaning Quote",
      image: serviceImages["carpet-steam-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Specialised carpet cleaning equipment",
      "Cleaning methods selected for carpet types",
      "Focus on accumulated dirt and stains",
      "Residential and commercial carpet care",
    ],
    tabs: [
      {
        id: 1,
        label: "Carpet extraction",
        shortLabel: "Carpet Steam",
        title: "Deep hot water extraction for carpet pile.",
        subtitle: "Lifting deep soil and revitalising fibres.",
        description:
          "Pressurised hot water extraction dissolves embedded soil and vacuums it out, restoring texture to high-traffic carpets.",
        bullets: [
          "High-power hot water extraction for deep soil",
          "Alkaline neutralization leaving fibres soft",
          "High-velocity moisture extraction for fast drying",
          "Removal of trapped dust mites and pet dander",
        ],
        ctaText: "Quote Carpet Extraction",
        image: serviceImages["carpet-steam-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Steam sanitising",
        shortLabel: "Steam Sanitise",
        title: "Thermal sanitisation and allergen control.",
        subtitle: "Eliminating bacteria for healthier air.",
        description:
          "High-temperature steam reaches deep into carpet underlay, killing bacteria and neutralizing allergen triggers.",
        bullets: [
          "Thermal steam killing up to 99.9% of bacteria",
          "Eradicating dust mites and underlay allergens",
          "Non-toxic solutions safe for children and pets",
          "Sanitising rugs, wool carpets, and tile squares",
        ],
        ctaText: "Book Steam Sanitising",
        image: serviceImages["carpet-steam-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Stain treatment",
        shortLabel: "Stain Removal",
        title: "Targeted spot treatment for tough spills.",
        subtitle: "Specialised lifting for wine, coffee, and oil.",
        description:
          "We assess stain and fibre chemistry to apply targeted spotting solutions, lifting stubborn coffee, wine, and grease marks.",
        bullets: [
          "Enzyme pre-treatment for pet stains and bio-spills",
          "Tannin lifting formulas for coffee, tea, and wine",
          "Solvent spotting for grease, makeup, and ink",
          "Colourfast pre-testing to protect delicate pile",
        ],
        ctaText: "Treat Carpet Stains",
        image: serviceImages["carpet-steam-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Deodorising & refresh",
        shortLabel: "Deodorising",
        title: "Odour neutralisation and botanical refresh.",
        subtitle: "Eliminating stale pet and moisture smells.",
        description:
          "Bio-enzymatic neutralisers break down odour-causing bacteria at the source, leaving rooms smelling naturally fresh.",
        bullets: [
          "Molecular odour neutralisers destroying smell source",
          "Deep extraction of trapped pet accident scent",
          "Fresh, subtle Australian botanical fragrance",
          "Optional stain-repellent fibre guard treatment",
        ],
        ctaText: "Refresh & Deodorise",
        image: serviceImages["carpet-steam-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Inspect Carpet Condition & Material",
        description: "Identify carpet pile, fibre composition, heavy traffic areas, and stain types.",
      },
      {
        step: "02",
        title: "Pre-Treat Selected Areas",
        description: "Apply targeted, carpet-safe solutions to dissolve embedded grime and spots.",
      },
      {
        step: "03",
        title: "Deep Clean Using Suitable Methods",
        description: "Hot water extraction lifts deep-seated pollutants without soaking underlays.",
      },
      {
        step: "04",
        title: "Review Results & Drying Guidance",
        description: "Inspect treated areas and provide straightforward ventilation and drying tips.",
      },
    ],
    faqs: [
      {
        question: "Does steam cleaning remove every stain?",
        answer:
          "Results depend on the stain, carpet material, age, and previous treatments. Some stains may not be completely removable.",
      },
      {
        question: "How long does the carpet take to dry?",
        answer:
          "Drying time varies depending on carpet thickness, ventilation, moisture levels, and the cleaning method used.",
      },
      {
        question: "Can you clean carpets in commercial premises?",
        answer:
          "Yes. Commercial carpet cleaning can be arranged for offices, facilities, and other carpeted spaces.",
      },
    ],
  },

  // 10. Healthcare / Medical Cleaning
  {
    slug: "healthcare-medical-cleaning",
    serviceId: 10,
    title: "Healthcare/ Medical Cleaning",
    hero: {
      eyebrow: "Healthcare & Medical Cleaning",
      headline: "Clean Clinical Environments. Greater Confidence in Care.",
      description:
        "Healthcare environments require careful attention to cleanliness, hygiene, and frequently touched surfaces. ShineLux provides tailored cleaning solutions for medical and healthcare facilities, supporting clean and well-maintained spaces for healthcare professionals, patients, and visitors.",
      ctaText: "Request a Healthcare Cleaning Proposal",
      image: serviceImages["healthcare-medical-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning plans designed for healthcare environments",
      "Focus on hygiene-sensitive areas",
      "Detailed attention to frequently touched surfaces",
      "Cleaning schedules designed around facility operations",
    ],
    tabs: [
      {
        id: 1,
        label: "Clinical rooms",
        shortLabel: "Clinical Rooms",
        title: "TGA-compliant disinfection for clinical suites.",
        subtitle: "Strict infection control for exam rooms.",
        description:
          "Our trained cleaners use hospital-grade disinfectants and colour-coded microfibres to sanitise exam beds and consulting furniture.",
        bullets: [
          "Hospital-grade disinfectant on exam beds",
          "Diagnostic equipment and armrest sanitisation",
          "Colour-coded microfibres preventing cross-spread",
          "Non-slip vinyl mopping to clinical standards",
        ],
        ctaText: "Quote Clinical Clean",
        image: serviceImages["healthcare-medical-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Waiting & reception",
        shortLabel: "Waiting Areas",
        title: "Hygienic reception and patient waiting areas.",
        subtitle: "Protecting visitors from communal germs.",
        description:
          "We disinfect reception check-in kiosks, chairs, and kids play corners with skin-safe, hospital-standard biocides.",
        bullets: [
          "Disinfecting check-in screens and reception counters",
          "Sanitising patient waiting chairs and tables",
          "Non-toxic wiping of children's play area toys",
          "HEPA vacuuming reducing airborne particulates",
        ],
        ctaText: "Book Reception Sanitisation",
        image: serviceImages["healthcare-medical-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Procedure & allied",
        shortLabel: "Procedure Bays",
        title: "Dental, physio, and minor procedure bays.",
        subtitle: "Exacting hygiene for sterile-adjacent zones.",
        description:
          "Specialised decontamination for pathology collection, dental suites, and physiotherapy plinths adhering to Australian standards.",
        bullets: [
          "Procedure trolley and mayo stand disinfection",
          "Dental chair vinyl and spittoon sanitisation",
          "Physio treatment plinth and equipment wiping",
          "Adherence to sharps isolation and waste protocol",
        ],
        ctaText: "Arrange Procedure Care",
        image: serviceImages["healthcare-medical-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Corridors & staff",
        shortLabel: "Staff & Transit",
        title: "Staff tea rooms and clinical transit corridors.",
        subtitle: "Documented compliance for practice audits.",
        description:
          "We maintain sterile transitional corridors and staff break rooms, providing signed cleaning logs for practice accreditation.",
        bullets: [
          "Handrail and crash door touchpoint sanitising",
          "Staff kitchen bench, fridge, and microwave wipe",
          "Scrub sink and automated dispenser cleaning",
          "Auditable daily infection control sign-off logs",
        ],
        ctaText: "Schedule Staff Care",
        image: serviceImages["healthcare-medical-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Review Facility Requirements",
        description: "Assess clinical zones, sanitation protocols, and hygiene compliance needs.",
      },
      {
        step: "02",
        title: "Identify Cleaning Zones",
        description: "Separate consulting rooms, procedure areas, and waiting rooms with dedicated tools.",
      },
      {
        step: "03",
        title: "Follow the Agreed Cleaning Protocols",
        description: "Apply hospital-grade disinfectants and strict cross-contamination controls.",
      },
      {
        step: "04",
        title: "Inspect Completed Areas",
        description: "Audit surfaces, sanitising stations, and high-touch areas for clinical readiness.",
      },
    ],
    faqs: [
      {
        question: "What healthcare facilities can you clean?",
        answer:
          "Cleaning can be arranged for suitable medical clinics, healthcare offices, treatment facilities, and related environments.",
      },
      {
        question: "Can cleaning be scheduled outside patient hours?",
        answer:
          "Suitable scheduling can be discussed to reduce disruption to healthcare operations.",
      },
      {
        question: "Do you follow special cleaning requirements?",
        answer:
          "Cleaning methods and product selection should be agreed based on the facility's requirements, infection-control procedures, and applicable standards.",
      },
    ],
  },

  // 11. Restaurant & Kitchen Cleaning (Hotel/ Restaurant & Kitchen cleaning)
  {
    slug: "hotel-restaurant-kitchen-cleaning",
    serviceId: 11,
    title: "Hotel/ Restaurant & Kitchen cleaning",
    hero: {
      eyebrow: "Restaurant & Kitchen Cleaning",
      headline: "A Spotless Kitchen. A Better Dining Experience.",
      description:
        "Cleanliness is essential in every food preparation and dining environment. ShineLux provides restaurant and kitchen cleaning solutions to help maintain clean workspaces, dining areas, kitchen surfaces, and customer facilities while supporting your day-to-day operations.",
      ctaText: "Request a Restaurant Cleaning Quote",
      image: serviceImages["hotel-restaurant-kitchen-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning solutions for food service environments",
      "Focus on grease-prone areas",
      "Flexible cleaning times",
      "Attention to customer and staff areas",
    ],
    tabs: [
      {
        id: 1,
        label: "Kitchen surfaces",
        shortLabel: "Kitchen Tops",
        title: "Food-safe prep benches and stainless lines.",
        subtitle: "Meeting council food hygiene standards.",
        description:
          "We clean stainless steel prep benches and splashbacks using food-safe degreasers, complying with health authority standards.",
        bullets: [
          "Food-grade sanitisation on stainless prep tables",
          "Degreasing splashbacks, walls, and heat lamps",
          "Under-counter fridge door and seal wipe down",
          "Dishwasher wash-bay and scrap area cleaning",
        ],
        ctaText: "Quote Kitchen Surfaces",
        image: serviceImages["hotel-restaurant-kitchen-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Grease & extraction",
        shortLabel: "Grease & Hoods",
        title: "Canopy grease breakdown and fryers.",
        subtitle: "Reducing commercial kitchen fire hazards.",
        description:
          "We soak rangehood baffle filters and scour fryers, removing heavy grease buildup to meet fire safety and insurance standards.",
        bullets: [
          "Hot soak and steam wash for canopy baffle filters",
          "Scraping and degreasing grills and flat tops",
          "External degreasing of deep fryers and ovens",
          "Stainless canopy polishing to eliminate grease drips",
        ],
        ctaText: "Book Grease Removal",
        image: serviceImages["hotel-restaurant-kitchen-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Dining & front of house",
        shortLabel: "Dining Areas",
        title: "Welcoming dining rooms and bistro bars.",
        subtitle: "Immaculate presentation for dining guests.",
        description:
          "We polish tables, sanitise bar tops, vacuum carpets, and clean gaming terminals to ensure a great dining atmosphere.",
        bullets: [
          "Sanitising dining tables, booths, and chairs",
          "Polishing bar tops, beer taps, and glass counters",
          "Thorough vacuuming of restaurant carpets and rugs",
          "Gaming room console buttons and seating wiped",
        ],
        ctaText: "Schedule Dining Clean",
        image: serviceImages["hotel-restaurant-kitchen-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Floors & wash pits",
        shortLabel: "Floors & Pits",
        title: "Non-slip tile scrubbing and drain flushing.",
        subtitle: "Eliminating oil films and grease trap odours.",
        description:
          "Machine rotary scrubbers strip greasy residue from non-slip kitchen tiles, while floor drains are cleared and flushed.",
        bullets: [
          "Rotary scrubbing non-slip quarry tiles",
          "High-pressure flushing of kitchen floor grates",
          "Bin storage and grease trap area degreasing",
          "Mop sink and chemical area deep scrub",
        ],
        ctaText: "Clean Kitchen Floors",
        image: serviceImages["hotel-restaurant-kitchen-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Review Kitchen & Dining Areas",
        description: "Assess commercial cooktops, exhaust canopies, grease traps, and dining tables.",
      },
      {
        step: "02",
        title: "Identify Priority Cleaning Zones",
        description: "Prioritize food preparation counters, cooking equipment, and washrooms.",
      },
      {
        step: "03",
        title: "Clean & Degrease Suitable Surfaces",
        description: "Apply commercial degreasers, sanitise contact zones, and scrub non-slip flooring.",
      },
      {
        step: "04",
        title: "Complete Final Hygiene Review",
        description: "Verify kitchen readiness for food safety audits and guest reception.",
      },
    ],
    faqs: [
      {
        question: "Can cleaning be done after the restaurant closes?",
        answer:
          "Yes. Cleaning schedules can be arranged around operating hours where availability permits.",
      },
      {
        question: "Do you clean commercial kitchens?",
        answer:
          "Yes. We provide cleaning for suitable restaurant and commercial food preparation environments.",
      },
      {
        question: "Can we request a deep kitchen clean?",
        answer:
          "Yes. Deep cleaning can be arranged for additional attention to accumulated grease, residue, and hard-to-reach areas.",
      },
    ],
  },

  // 12. Gym Cleaning
  {
    slug: "gym-cleaning",
    serviceId: 12,
    title: "Gym Cleaning",
    hero: {
      eyebrow: "Gym Cleaning",
      headline: "Keep Your Fitness Space Fresh, Clean & Ready.",
      description:
        "Gyms experience constant use of equipment, floors, changing facilities, and shared surfaces. ShineLux provides specialised gym cleaning services to help fitness centres maintain clean, welcoming, and hygienic environments for members and staff.",
      ctaText: "Request a Gym Cleaning Quote",
      image: serviceImages["gym-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning focused on high-use environments",
      "Detailed equipment and touchpoint attention",
      "Flexible service scheduling",
      "Cleaning tailored to different fitness facilities",
    ],
    tabs: [
      {
        id: 1,
        label: "Equipment floor",
        shortLabel: "Equipment",
        title: "Sweat removal and equipment sanitisation.",
        subtitle: "Targeting high-frequency weights and cardio.",
        description:
          "We wipe down cardio screens, free weights, cable attachments, and benches with solutions safe for electronics.",
        bullets: [
          "Cardio console touchscreens and handrail wipe",
          "Disinfecting dumbbell grips, bars, and plates",
          "Sweat removal on vinyl workout bench pads",
          "Cable machine pulley, pin, and handle sanitising",
        ],
        ctaText: "Quote Equipment Floor",
        image: serviceImages["gym-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Change rooms",
        shortLabel: "Change Rooms",
        title: "Fresh, hygienic showers and locker bays.",
        subtitle: "Eliminating body oils and locker odours.",
        description:
          "We scrub showers, disinfect lockers, and mop non-slip tiles to prevent fungal growth and keep amenities fresh.",
        bullets: [
          "Shower cubicle mould and soap scum scrubbing",
          "Disinfecting locker fronts, locks, and benches",
          "Mirror, basin, and tapware streak-free polish",
          "High-temperature mopping on wet-area floors",
        ],
        ctaText: "Book Change Room Clean",
        image: serviceImages["gym-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Reception & airflow",
        shortLabel: "Reception",
        title: "Entry turnstiles, refill taps, and vents.",
        subtitle: "Clean air and a professional first impression.",
        description:
          "From entry turnstiles to chilled water fountains and ceiling vents, we maintain an energising, clean gym environment.",
        bullets: [
          "Turnstile, scanner, and entry keypad sanitisation",
          "Water cooler fountain and bottle refill tap clean",
          "Reception counter and merchandise display wipe",
          "Dusting reachable HVAC return vents and fans",
        ],
        ctaText: "Schedule Reception Clean",
        image: serviceImages["gym-cleaning"].tabs[2],
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess Facility & Equipment",
        description: "Review cardio gear, free weight areas, rubber gym mats, and amenities.",
      },
      {
        step: "02",
        title: "Plan Cleaning Zones",
        description: "Target sweat-prone equipment, touchpoint handles, and shower cubicles.",
      },
      {
        step: "03",
        title: "Clean Shared Surfaces & Facilities",
        description: "Disinfect equipment, mop workout floors, and detail change rooms and glass.",
      },
      {
        step: "04",
        title: "Review & Prepare for Members",
        description: "Ensure fresh aroma, sanitized benches, and spotless presentation for workouts.",
      },
    ],
    faqs: [
      {
        question: "Can gym cleaning be done outside opening hours?",
        answer: "Yes. Early morning, evening, or other suitable arrangements can be discussed.",
      },
      {
        question: "Do you clean fitness equipment?",
        answer:
          "Yes. Accessible equipment surfaces and touchpoints can be included in the agreed scope.",
      },
      {
        question: "Can you provide ongoing gym cleaning?",
        answer:
          "Yes. Regular cleaning schedules can be tailored to the facility's usage and requirements.",
      },
    ],
  },

  // 13. Aged Care Cleaning
  {
    slug: "aged-care-cleaning",
    serviceId: 13,
    title: "Aged Care Cleaning",
    hero: {
      eyebrow: "Aged Care Cleaning",
      headline: "Thoughtful Cleaning for Comfortable Living.",
      description:
        "Aged care facilities require a considerate approach to cleanliness, comfort, and hygiene. ShineLux delivers tailored cleaning solutions for aged care environments, helping maintain welcoming shared spaces and carefully cleaned resident areas while respecting the privacy, comfort, and routines of residents.",
      ctaText: "Request an Aged Care Cleaning Proposal",
      image: serviceImages["aged-care-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Respectful cleaning in resident environments",
      "Attention to high-touch areas",
      "Flexible facility-based schedules",
      "Cleaning plans tailored to individual site needs",
    ],
    tabs: [
      {
        id: 1,
        label: "Resident rooms",
        shortLabel: "Resident Rooms",
        title: "Gentle cleaning for resident bedrooms.",
        subtitle: "Dignified, comforting, and quiet care.",
        description:
          "Our police-vetted staff work quietly and respectfully around residents, sanitising bed rails, mobility aids, and ensuites.",
        bullets: [
          "Sanitising electric bed rails and call bell pendants",
          "Dusting bedside tables, sills, and wardrobes",
          "Disinfecting walking frames and wheelchair handles",
          "Quiet vacuuming and gentle damp floor mopping",
        ],
        ctaText: "Quote Resident Clean",
        image: serviceImages["aged-care-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Communal & dining",
        shortLabel: "Dining & Lounges",
        title: "Social lounges, dining halls, and corridors.",
        subtitle: "Welcoming spaces for daily community life.",
        description:
          "We maintain clean dining tables, vacuum social lounges, and sanitise handrails to promote resident wellness and connection.",
        bullets: [
          "Dining table reset and chair vinyl sanitising",
          "Lounge chair vacuuming and spot spill response",
          "Handrail and corridor touchpoint disinfection",
          "Activity table, remote, and game box wipe down",
        ],
        ctaText: "Book Communal Clean",
        image: serviceImages["aged-care-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Clinical adjacency",
        shortLabel: "Clinical Care",
        title: "Nurse stations, ensuites, and grab rails.",
        subtitle: "Compliance with Aged Care Quality Standards.",
        description:
          "We apply hospital-grade disinfection across resident ensuites and nursing stations, protecting vulnerable residents.",
        bullets: [
          "Ensuite grab rail, raised toilet, and shower care",
          "Nurse station keyboard and phone sanitisation",
          "Medication room bench and drug fridge wipe",
          "Full compliance with facility IPC protocols",
        ],
        ctaText: "Arrange Clinical Care",
        image: serviceImages["aged-care-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Staff & support",
        shortLabel: "Staff & Support",
        title: "Sluice rooms, laundries, and staff rooms.",
        subtitle: "Hygienic support for healthcare workers.",
        description:
          "We manage utility rooms, laundry sorting areas, and carer break rooms, keeping facilities compliant and audit-ready.",
        bullets: [
          "Sluice room and clinical waste point disinfection",
          "Commercial laundry table and washer wipe down",
          "Staff tea room, microwave, and fridge cleaning",
          "Documented logs for facility accreditation audits",
        ],
        ctaText: "Schedule Support Clean",
        image: serviceImages["aged-care-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand Facility Requirements",
        description: "Coordinate with nursing managers, respect daily routines, and align policies.",
      },
      {
        step: "02",
        title: "Establish Cleaning Zones & Schedule",
        description: "Design low-noise, respectful cleaning shifts around meal and quiet times.",
      },
      {
        step: "03",
        title: "Carry Out Careful Cleaning",
        description: "Thoroughly disinfect high-touch rails, sanitise washrooms, and vacuum lounges.",
      },
      {
        step: "04",
        title: "Review Hygiene & Presentation",
        description: "Verify pristine cleanliness, odour neutralization, and resident safety.",
      },
    ],
    faqs: [
      {
        question: "Can cleaning be carried out while residents are present?",
        answer:
          "Cleaning arrangements can be planned around resident routines, facility policies, and staff requirements.",
      },
      {
        question: "Do you clean common areas and resident rooms?",
        answer:
          "Yes. Both can be included in a customised cleaning plan according to facility requirements.",
      },
      {
        question: "Can cleaning schedules be adjusted?",
        answer:
          "Yes. Service schedules can be discussed to accommodate facility routines and operational needs.",
      },
    ],
  },

  // 14. School Cleaning
  {
    slug: "school-cleaning",
    serviceId: 14,
    title: "School Cleaning",
    hero: {
      eyebrow: "School Cleaning",
      headline: "Cleaner Schools. Better Learning Environments.",
      description:
        "A well-maintained school environment supports comfort, cleanliness, and a positive learning experience. ShineLux offers professional school cleaning services designed to maintain classrooms, shared facilities, and school grounds' indoor areas throughout the academic year.",
      ctaText: "Request a School Cleaning Quote",
      image: serviceImages["school-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning schedules suited to school operations",
      "Focus on student and staff shared areas",
      "Consistent cleaning routines",
      "Attention to high-traffic spaces",
    ],
    tabs: [
      {
        id: 1,
        label: "Classrooms",
        title: "Daily learning spaces that feel fresh.",
        subtitle: "Desks, floors, and student touchpoints.",
        description:
          "We sanitise student desks and door handles, empty bins, and vacuum floors so teachers and students start the day fresh.",
        bullets: [
          "Student desk and chair sanitisation",
          "Teacher station and interactive screen wipe",
          "Whiteboard washing and marker tray clearing",
          "Floor vacuuming and daily waste bin reset",
        ],
        ctaText: "Quote Classroom Clean",
        image: serviceImages["school-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Washrooms",
        title: "High-volume student washroom blocks.",
        subtitle: "Hygiene, odour control, and restocking.",
        description:
          "School bathrooms receive thorough sanitising, fixture polishing, and restocking so amenities stay fresh and clean.",
        bullets: [
          "Toilet pan, urinal, and partition deep scrub",
          "Tap, basin, and mirror streak-free polish",
          "Floor scrubbing and floor drain attention",
          "Soap, towel, and toilet paper restocking",
        ],
        ctaText: "Book School Washrooms",
        image: serviceImages["school-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Labs & studios",
        title: "Science labs, art studios, and tech rooms.",
        subtitle: "Careful cleaning around equipment and sinks.",
        description:
          "We safely clean science benches, art wash basins, and computer suites, protecting equipment while ensuring hygiene.",
        bullets: [
          "Science benchtop and chemical sink wipe down",
          "Computer lab keyboard, screen, and desk dusting",
          "Art room sink clearing and paint spot scrub",
          "Music room and tech suite gentle dusting",
        ],
        ctaText: "Arrange Lab Clean",
        image: serviceImages["school-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Sports & events",
        title: "Gymnasiums, halls, and canteen areas.",
        subtitle: "Ready for assemblies, sports, and events.",
        description:
          "We sweep and buff sports timber floors, vacuum assembly hall seating, and scrub canteen areas for safe use.",
        bullets: [
          "Machine sweeping indoor basketball courts",
          "Assembly hall seating and stage vacuuming",
          "Locker room bench and shower sanitisation",
          "Canteen table wipe down and floor degrease",
        ],
        ctaText: "Schedule Sports Clean",
        image: serviceImages["school-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "School Site Assessment",
        description: "Review campus building layout, student count, term timetables, and key areas.",
      },
      {
        step: "02",
        title: "Cleaning Schedule Planning",
        description: "Arrange after-school daily cleans and deep holiday cleaning programs.",
      },
      {
        step: "03",
        title: "Classroom & Facility Cleaning",
        description: "Sanitise desks, scrub communal washrooms, mop corridors, and empty waste.",
      },
      {
        step: "04",
        title: "Quality Review",
        description: "Inspect teaching areas to ensure they are healthy, tidy, and ready for morning bell.",
      },
    ],
    faqs: [
      {
        question: "Can school cleaning be arranged during school holidays?",
        answer: "Yes. Holiday cleaning or additional cleaning projects can be discussed.",
      },
      {
        question: "Do you clean classrooms every day?",
        answer:
          "Cleaning frequency can be customised based on the school’s needs and service agreement.",
      },
      {
        question: "Can you clean large school facilities?",
        answer:
          "Yes. We can discuss cleaning requirements for classrooms, offices, halls, washrooms, and other school spaces.",
      },
    ],
  },

  // 15. Early Childhood Education Cleaning
  {
    slug: "early-childhood-education-cleaning",
    serviceId: 15,
    title: "Early Childhood Education Cleaning",
    hero: {
      eyebrow: "Early Childhood Education Cleaning",
      headline: "A Cleaner Space for Little Learners.",
      description:
        "Early learning environments need careful attention to cleanliness because children interact closely with toys, furniture, floors, and shared facilities throughout the day. ShineLux provides tailored cleaning services for childcare centres, kindergartens, and early learning facilities, helping create clean and comfortable environments for children, educators, and families.",
      ctaText: "Request a Childcare Cleaning Quote",
      image: serviceImages["early-childhood-education-cleaning"].hero,
    },
    whyTitle: "Why ShineLux",
    whyType: "bullets",
    whyContent: [
      "Cleaning focused on child-oriented environments",
      "Attention to shared toys and touchpoints",
      "Cleaning schedules designed around centre routines",
      "Suitable cleaning methods selected for different surfaces",
    ],
    tabs: [
      {
        id: 1,
        label: "Classrooms & playrooms",
        shortLabel: "Playrooms",
        title: "Non-toxic care for play tables and rugs.",
        subtitle: "Safe environments for toddler hands.",
        description:
          "We use child-safe, non-toxic eco-sanitisers on low tables, play mats, and reading nooks to protect curious little hands.",
        bullets: [
          "Non-toxic sanitisation of low tables and chairs",
          "Play rug vacuuming and steam sanitisation",
          "Disinfecting low cubby shelves and book racks",
          "Wiping door handles and low window ledges",
        ],
        ctaText: "Quote Playroom Clean",
        image: serviceImages["early-childhood-education-cleaning"].tabs[0],
      },
      {
        id: 2,
        label: "Toys & shared equipment",
        shortLabel: "Toys & Gear",
        title: "Toy, block, and climbing decontamination.",
        subtitle: "Preventing cross-spread on shared play items.",
        description:
          "Preschool toys are cleaned and decontaminated with botanical biocides that eliminate germs without toxic residues.",
        bullets: [
          "Sanitising plastic blocks, puzzles, and toys",
          "Wiping wooden play kitchens and dollhouses",
          "Disinfecting indoor climbing foam and mats",
          "Botanical biocides safe for mouth contact",
        ],
        ctaText: "Book Toy Sanitisation",
        image: serviceImages["early-childhood-education-cleaning"].tabs[1],
      },
      {
        id: 3,
        label: "Bathrooms & change areas",
        shortLabel: "Bathrooms",
        title: "Hospital-grade nappy and toilet hygiene.",
        subtitle: "Zero-compromise safety for little ones.",
        description:
          "We disinfect change tables, toddler toilets, and mini basins to maintain the highest biological standards in childcare.",
        bullets: [
          "Disinfecting nappy change mats and straps",
          "Sanitising child-sized toilets and mini basins",
          "Nappy disposal bin and tile splash wipe down",
          "Anti-slip floor mopping in all change areas",
        ],
        ctaText: "Schedule Change Area Clean",
        image: serviceImages["early-childhood-education-cleaning"].tabs[2],
      },
      {
        id: 4,
        label: "Rest & meal zones",
        shortLabel: "Rest & Meals",
        title: "Hypoallergenic cot rooms and meal tables.",
        subtitle: "Germ-free rest areas and hygienic eating.",
        description:
          "We detail sleep mats, cots, and feeding chairs, ensuring children rest in clean air and eat from sanitized surfaces.",
        bullets: [
          "Steam wiping sleep mats, cots, and rails",
          "High chair and infant meal table deep clean",
          "Sanitising bottle storage and milk prep sinks",
          "HEPA vacuuming for allergen-free nap room air",
        ],
        ctaText: "Book Rest & Meal Clean",
        image: serviceImages["early-childhood-education-cleaning"].tabs[3],
      },
    ],
    process: [
      {
        step: "01",
        title: "Review Centre Requirements",
        description: "Align with centre health policies, childcare regulations, and day routines.",
      },
      {
        step: "02",
        title: "Identify Rooms & Cleaning Priorities",
        description: "Spotlight playrooms, meal counters, nappy-change benches, and rest mats.",
      },
      {
        step: "03",
        title: "Clean Learning & Shared Spaces",
        description: "Apply child-safe, non-toxic sanitising methods across all accessible areas.",
      },
      {
        step: "04",
        title: "Final Review Before Facility Use",
        description: "Verify that learning, dining, and play spaces are immaculate for early arrival.",
      },
    ],
    faqs: [
      {
        question: "Can cleaning be scheduled after children leave?",
        answer:
          "Yes. We can discuss cleaning arrangements that work around the centre's operating hours and routines.",
      },
      {
        question: "Do you clean toys and play areas?",
        answer:
          "Suitable toys and play surfaces can be included in the cleaning scope according to the centre's procedures and the materials involved.",
      },
      {
        question: "Are cleaning products selected with children in mind?",
        answer:
          "Cleaning product selection and use can be discussed according to site requirements, product instructions, and the centre's policies.",
      },
    ],
  },
]

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find(
    (s) =>
      s.slug === slug ||
      (slug === "restaurant-kitchen-cleaning" && s.slug === "hotel-restaurant-kitchen-cleaning") ||
      (slug === "hotel-restaurant-kitchen-cleaning" && s.slug === "restaurant-kitchen-cleaning")
  )
}
