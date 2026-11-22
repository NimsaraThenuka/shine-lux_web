/**
 * SERVICE DETAIL IMAGES
 * 
 * All images for the in-depth service detail pages are organized here.
 * You can easily replace any image URL below with your own real images or Cloudinary links.
 * Each service has a `hero` image and `tabs` array containing 4 images (one for each tab).
 */

import { services } from "./services"

export interface ServiceImageSet {
  hero: string
  tabs: string[]
}

const getHeroImage = (slug: string, fallback: string) => {
  const match = services.find(
    (s) =>
      s.slug === slug ||
      (slug === "hotel-restaurant-kitchen-cleaning" && s.slug === "restaurant-kitchen-cleaning") ||
      (slug === "restaurant-kitchen-cleaning" && s.slug === "hotel-restaurant-kitchen-cleaning")
  )
  return match?.image || fallback
}

export const serviceImages: Record<string, ServiceImageSet> = {
  "builders-post-construction-cleaning": {
    hero: getHeroImage(
      "builders-post-construction-cleaning",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Initial Builders Clean
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795343542/man-spraying-powder-paint-full-shot_23-2149878783_r0bspc.jpg",
      // Tab 2: Final Sparkle Clean
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795343684/person-taking-care-office-cleaning_23-2149374388_df0yub.jpg",
      // Tab 3: Exterior Wash Down
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795343786/street-disinfection-preventive-quarantine-measures-empty-streets-road-washing_114106-1302_syywuk.jpg",
      // Tab 4: Post-Renovation Clean
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795343831/man-doing-professional-home-cleaning-service_23-2150359025_hqguok.jpg",
    ],
  },
  "warehouse-factory-cleaning": {
    hero: getHeroImage(
      "warehouse-factory-cleaning",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Dock & goods-in
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85",
      // Tab 2: Aisles & pick paths
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795343984/professional-industrial-cleaner-protective-uniform-cleaning-floor-food-processing-plant_342744-1209_i4nvhe.jpg",
      // Tab 3: Mezz & offices
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344027/full-shot-men-cleaning-office_23-2149345516_cdgg1v.jpg",
      // Tab 4: Bulk storage
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344073/senior-logistic-worker-hardhat-uniform-walking-warehouse-wheeling-palette-jack-back-view-full-length-labor-logistics-concept_74855-14263_tnu5fg.jpg",
    ],
  },
  "commercial-cleaning": {
    hero: getHeroImage(
      "commercial-cleaning",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Open plan & desks
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
      // Tab 2: Executive & meetings
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344223/full-shot-people-cleaning-office_23-2150454486_gaxrzg.jpg",
      // Tab 3: Washrooms & kitchens
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344260/medium-shot-woman-cleaning-home_23-2150453297_frmdoi.jpg",
      // Tab 4: After-hours & multi-site
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344312/people-taking-care-office-cleaning_23-2149374442_kzhn2m.jpg",
    ],
  },
  "residential-house-cleaning": {
    hero: getHeroImage(
      "residential-house-cleaning",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Regular clean
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
      // Tab 2: Kitchen & meals
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344422/medium-shot-woman-cleaning-home_23-2150453301_bwaj6q.jpg",
      // Tab 3: Bathrooms & wet areas
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
      // Tab 4: Custom priorities
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344499/side-view-woman-working-as-plumber_23-2150746379_pdk3b3.jpg",
    ],
  },
  "end-of-lease-cleaning": {
    hero: getHeroImage(
      "end-of-lease-cleaning",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Kitchen
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=85",
      // Tab 2: Bathrooms
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
      // Tab 3: Whole property
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
      // Tab 4: Add-ons
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344663/modern-balcony-with-city-view_23-2151983239_qiexpw.jpg",
    ],
  },
  "periodical-cleaning": {
    hero: getHeroImage(
      "periodical-cleaning",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Daily cycle
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344845/busy-day-young-woman-doing-housework-looking-busy_259150-59500_ojkrep.jpg",
      // Tab 2: Weekly rotation
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344901/female-hands-rubber-gloves-wash-floor-with-rag_266732-24745_tingdk.jpg",
      // Tab 3: Monthly deep maintenance
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      // Tab 4: Custom schedule
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795344971/man-green-apron-writes-notebook-with-woman-background_924511-577_omeyso.jpg",
    ],
  },
  "once-off-cleaning": {
    hero: getHeroImage(
      "once-off-cleaning",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Spring clean
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345235/woman-cleaning-sofa-with-vacuum-cleaner-living-room_77190-25611_rzbmnv.jpg",
      // Tab 2: Post-event
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345382/woman-cleaning-mess-floor-room-after-party-removes-garbage-from-floor-disposable-cups-bag-morning-after-party-celebration-housework-cleaning-service_120485-6878_il5vft.jpg",
      // Tab 3: Pre-sale
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345387/medium-shot-man-cleaning-indoors_23-2150454569_xgydsp.jpg",
      // Tab 4: Custom blitz
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345629/housewife-woking-home-lady-blue-shirt-woman-clean-floor_1157-45535_yzit7y.jpg",
    ],
  },
  "window-cleaning": {
    hero: getHeroImage(
      "window-cleaning",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Interior glass
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345734/cleaning-windows-woman-apron-cleaning-windows-looking-involved_259150-59696_soptso.jpg",
      // Tab 2: Exterior windows
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345773/worker-washes-windows-multistory-building_598320-4174_bdr8q9.jpg",
      // Tab 3: Frames & tracks
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=85",
      // Tab 4: Glass doors & partitions
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345847/crop-housewife-hands-wearing-yellow-protective-gloves-cleaning-dirty-window-doors-housemaid-wiping-glass-with-rag-concept-housework-service_132075-11711_jbqdt9.jpg",
    ],
  },
  "carpet-steam-cleaning": {
    hero: getHeroImage(
      "carpet-steam-cleaning",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Carpet extraction
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345979/close-up-vacuuming-carpet_329181-636_b82vtq.jpg",
      // Tab 2: Steam sanitising
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795345981/worker-cleaning-cinema-hall-with-special-equipment_651396-2893_o7e8lw.jpg",
      // Tab 3: Stain treatment
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346033/janitor-cleaning-stain-carpet_1016675-2811_oaspie.jpg",
      // Tab 4: Deodorising & refresh
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346158/biodegradable-cleaning-products-being-used-clean-living-room-ensuring-cleanliness-environmental-sustainability_1162141-74342_oodhlj.jpg",
    ],
  },
  "healthcare-medical-cleaning": {
    hero: getHeroImage(
      "healthcare-medical-cleaning",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Clinical rooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346390/nobody-office-with-medical-equipment-instruments-checkup-visit-with-patient-healthcare-empty-cabinet-with-tools-consult-people-with-illness-professional-space_482257-31975_nmetsi.jpg",
      // Tab 2: Waiting & reception
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      // Tab 3: Procedure & allied
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346475/nurse-cleaning-bed-hospital-ward_236854-49629_nnrnla.jpg",
      // Tab 4: Corridors & staff
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346510/man-cleaning-staircase-handrail-gloves_176474-2788_razxce.avif",
    ],
  },
  "hotel-restaurant-kitchen-cleaning": {
    hero: getHeroImage(
      "hotel-restaurant-kitchen-cleaning",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Kitchen surfaces
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346763/side-view-woman-cleaning-home_23-2150453348_zqlujh.jpg",
      // Tab 2: Grease & extraction
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346806/domestic-female-hand-wearing-gloves-cleaning-dirty-stove-after-cooking-using-sponge-washing-woman-housewife-enjoying-daily-household-closeup-top-view_132075-13125_lzkr1g.jpg",
      // Tab 3: Dining & front of house
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346840/waiter-with-protective-face-mask-disinfecting-tables-cafe-due-coronavirus-epidemic_637285-7902_sjsx1h.jpg",
      // Tab 4: Floors & wash pits
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795346974/janitor-is-diligently-cleaning-restocking-hotel-room-ensuring-welcoming-environment-guests-scene-captures-essence-hospitality-attention-detail_908344-60086_pi7v84.jpg",
    ],
  },
  "gym-cleaning": {
    hero: getHeroImage(
      "gym-cleaning",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Equipment floor
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795347144/closeup-athlete-disinfecting-hand-weights-gym_637285-8356_c90zyw.jpg",
      // Tab 2: Change rooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795347178/woman-disinfecting-gym-equipment-while-wearing-gloves_23-2148769852_iajwdm.jpg",
      // Tab 3: Reception & airflow
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795347674/you-may-enter-if-you-agree-these-terms-shot-young-woman-filling-paperwork-reception-desk-gym_590464-53487_d2lii3.jpg",
    ],
  },
  "aged-care-cleaning": {
    hero: getHeroImage(
      "aged-care-cleaning",
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Resident rooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795348657/female-student-medicine-wearing-medical-mask-while-doing-her-practice_23-2149040303_qxk0xt.jpg",
      // Tab 2: Communal & dining
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795348777/wheelchair-talking-nurse-with-old-man-home-support-healthcare-advice-hip-fracture-elderly-care-medical-assistance-multiple-sclerosis-with-senior-person-with-disability_590464-559876_vyp4k9.jpg",
      // Tab 3: Clinical adjacency
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795348823/patient-with-physical-disease-getting-assistance-from-nurse-nursing-home-medical-assistant-talking-elder-man-sitting-wheelchair-about-healthcare-treatment-recovery-therapy_482257-28045_xrn8ek.jpg",
      // Tab 4: Staff & support
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795348914/nurse-wearing-uniform-taking-care-aged-woman_259150-24_pyltal.jpg",
    ],
  },
  "school-cleaning": {
    hero: getHeroImage(
      "school-cleaning",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Classrooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349012/school-disinfectant-safety-measures_1287986-15366_cppgqk.jpg",
      // Tab 2: Washrooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349051/clean-empty-public-restroom-with-exit-sign-sinks_1225213-4364_dxifwz.jpg",
      // Tab 3: Labs & studios
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349562/worker-white-sterile-uniform-with-rubber-gloves-mask-holding-sprayer_232070-9845_mnjw5z.jpg",
      // Tab 4: Sports & events
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349563/house-cleaning-with-mop_392895-521563_ytlvly.jpg",
    ],
  },
  "early-childhood-education-cleaning": {
    hero: getHeroImage(
      "early-childhood-education-cleaning",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1600&q=85"
    ),
    tabs: [
      // Tab 1: Classrooms & playrooms
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349848/rear-view-women-standing-bedroom_213512-5379_hjhmcr.jpg",
      // Tab 2: Toys & shared equipment
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349698/daycare-worker-sanitizing-toy-bin-with-colorful-cloths-early-childhood-center_108855-12839_zrpk7g.jpg",
      // Tab 3: Bathrooms & change areas
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795349926/man-s-hands-cleaning-sink-bathroom_329181-20787_vypznu.jpg",
      // Tab 4: Rest & meal zones
      "https://res.cloudinary.com/dyp247eoh/image/upload/v1795350071/barista-with-face-protection-gloves-cleaning-tables_23-2148630780_rvk2nl.jpg",
    ],
  },
}
