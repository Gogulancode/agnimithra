// Central content for the Agni Mithra site.
// Edit this file to change company info, products, industries, gallery, hero slides, etc.
//
// All image paths point to /public/images/. To replace any image, just drop a
// new file at the same path (same filename) — no code change needed.
// See /public/images/README.md for the folder layout and image specs.

export const company = {
  name: "Agni Mithra",
  tagline: "Premium Refractory & Industrial Solutions Provider",
  description:
    "Suppliers of High Performance Refractory Solutions for Steel, Foundry & Industrial Applications.",
  tagline: "ENGINEERED TO ENDURE. BUILT TO PERFORM.",
  phones: ["+91 9000067700", "+91 7305028859"],
  email: "sales@agnimithra.in",
  whatsapp: "919000067700",
  addresses: [
    "We Work, Spectrum Tower, Mindspace, Chincholi Bunder Road, Off Link Road, Malad West, Mumbai - 400064",
  ],
  socials: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/919000067700",
  },
  brochureUrl: "/Agnimithra_Brochure.pdf",
  brochureFilename: "Agnimithra_Brochure.pdf",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Refractory Castables", to: "/products/refractory-castables" },
      { label: "Gunning Mass", to: "/products/gunning-mass" },
      { label: "Ramming Mass", to: "/products/ramming-mass" },
      { label: "Fire Bricks", to: "/products/fire-bricks" },
      { label: "Mortars", to: "/products/mortars" },
      { label: "Insulation Materials", to: "/products/insulation-materials" },
      { label: "Industrial Oils", to: "/products/industrial-oils" },
      { label: "Industrial Consumables", to: "/products/industrial-consumables" },
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Contact Us", to: "/contact" },
];

export const heroSlides = [
  {
    eyebrow: "Agni Mithra",
    titleStart: "Premium Refractory &",
    titleHighlight: "Industrial Solutions",
    titleEnd: "Provider",
    body: "Delivering reliable refractory materials and industrial products across India for steel, cement, foundry, glass, and thermal industries.",
    image: "/images/hero/hero-1.jpg",
  },
  {
    eyebrow: "Trusted Across India",
    titleStart: "Quality Materials For",
    titleHighlight: "Steel & Foundry",
    titleEnd: "Plants",
    body: "From castables to fire bricks, we supply tested and certified refractories that perform under extreme conditions.",
    image: "/images/hero/hero-2.jpg",
  },
  {
    eyebrow: "Pan India Supply",
    titleStart: "Strong Logistics For",
    titleHighlight: "On-Time Delivery",
    titleEnd: "Everywhere",
    body: "We keep your operations running with timely supply, dependable service and competitive pricing.",
    image: "/images/hero/hero-3.jpg",
  },
];

export const heroFeatures = [
  {
    icon: "shield",
    title: "Quality Assured",
    body: "Premium quality products",
  },
  {
    icon: "truck",
    title: "Timely Delivery",
    body: "On-time supply with strong logistics",
  },
  {
    icon: "users",
    title: "Customer Focused",
    body: "Building long term relationships",
  },
  {
    icon: "headset",
    title: "Expert Support",
    body: "Technical guidance whenever you need",
  },
];

// To swap a product image, replace the file at /public/images/products/<slug>.jpg
// (same filename as the product slug).
export const products = [
  {
    slug: "refractory-castables",
    name: "Refractory Castables",
    short: "High-performance castables for furnace linings.",
    image: "/images/products/refractory-castables.jpg",
    description:
      "Our refractory castables are engineered for high-temperature applications across steel, cement, and petrochemical industries. They offer excellent thermal shock resistance, mechanical strength, and long service life.",
    features: [
      "Low cement and ultra-low cement variants",
      "Excellent abrasion resistance",
      "High hot strength",
      "Easy installation by casting, gunning or pumping",
    ],
    applications: ["Ladles", "Tundishes", "Reheating furnaces", "Cement kilns"],
  },
  {
    slug: "gunning-mass",
    name: "Gunning Mass",
    short: "Refractory mass for spray application and quick repairs.",
    image: "/images/products/gunning-mass.jpg",
    description:
      "Specially formulated gunning mass for fast, dependable repairs and maintenance of refractory linings in high-heat environments. Designed for minimal rebound and excellent adhesion.",
    features: [
      "Low rebound loss",
      "Excellent adhesion to hot surfaces",
      "High refractoriness",
      "Quick patching and emergency repair",
    ],
    applications: ["EAF roof and walls", "Ladles", "Tundishes", "Boilers"],
  },
  {
    slug: "ramming-mass",
    name: "Ramming Mass",
    short: "Silica and acidic ramming mass for induction furnaces.",
    image: "/images/products/ramming-mass.jpg",
    description:
      "High-purity silica ramming mass formulated for coreless induction furnaces. Provides excellent sintering properties and a long lining life.",
    features: [
      "High purity quartzite base",
      "Consistent grain sizing",
      "Long lining life",
      "Easy sintering",
    ],
    applications: ["Induction furnaces", "Crucible linings", "Steel melting"],
  },
  {
    slug: "fire-bricks",
    name: "Fire Bricks",
    short: "Fireclay, high-alumina and insulating bricks.",
    image: "/images/products/fire-bricks.jpg",
    description:
      "A complete range of fire bricks — fireclay, high-alumina, silica and insulating — built to handle the most demanding thermal environments.",
    features: [
      "Standard and custom shapes",
      "High cold-crushing strength",
      "Excellent thermal shock resistance",
      "Reliable batch-to-batch consistency",
    ],
    applications: ["Boilers", "Kilns", "Furnaces", "Chimneys"],
  },
  {
    slug: "mortars",
    name: "Mortars",
    short: "Heat-resistant mortars for brick laying and joints.",
    image: "/images/products/mortars.jpg",
    description:
      "Refractory mortars designed for laying and jointing fire bricks. Available in air-setting and heat-setting grades to suit a variety of installation needs.",
    features: [
      "Air-setting and heat-setting grades",
      "Smooth workability",
      "Strong bond strength",
      "Resistant to thermal cycling",
    ],
    applications: ["Brick laying", "Joint filling", "Kiln repairs"],
  },
  {
    slug: "insulation-materials",
    name: "Insulation Materials",
    short: "Ceramic fibre blankets, boards and modules.",
    image: "/images/products/insulation-materials.jpg",
    description:
      "High-temperature ceramic fibre insulation — blankets, boards, modules and ropes — for energy-efficient thermal management in industrial heating systems.",
    features: [
      "Low thermal conductivity",
      "Light weight",
      "Excellent thermal stability",
      "Easy to cut and install",
    ],
    applications: ["Furnace insulation", "Kilns", "Heat treatment", "Boilers"],
  },
  {
    slug: "industrial-oils",
    name: "Industrial Oils",
    short: "Lubricants, hydraulic oils and cutting fluids.",
    image: "/images/products/industrial-oils.jpg",
    description:
      "A broad range of industrial-grade oils — hydraulic, gear, compressor, cutting and quenching — supplied to maintain peak machinery performance.",
    features: [
      "Hydraulic and gear oils",
      "Cutting and quenching fluids",
      "Long service life",
      "Premium additive packages",
    ],
    applications: ["Heavy machinery", "Hydraulic systems", "Metalworking"],
  },
  {
    slug: "industrial-consumables",
    name: "Industrial Consumables",
    short: "PPE, abrasives, welding and maintenance supplies.",
    image: "/images/products/industrial-consumables.jpg",
    description:
      "A wide selection of industrial consumables for day-to-day plant operations — abrasives, fasteners, welding rods, safety equipment and more.",
    features: [
      "Abrasives and grinding wheels",
      "Welding electrodes and wires",
      "Personal protective equipment",
      "General plant maintenance supplies",
    ],
    applications: ["Workshops", "Plant maintenance", "Fabrication units"],
  },
];

export const whyChooseUs = [
  {
    icon: "medal",
    title: "Quality Products",
    body: "We supply only high-quality tested and certified refractory materials.",
  },
  {
    icon: "truck",
    title: "Timely Delivery",
    body: "We ensure on-time delivery to keep your operations running smoothly.",
  },
  {
    icon: "industry",
    title: "Industrial Expertise",
    body: "Deep industry knowledge to understand and fulfil your requirements.",
  },
  {
    icon: "tag",
    title: "Competitive Pricing",
    body: "Best quality materials at the most competitive market prices.",
  },
  {
    icon: "support",
    title: "Reliable Support",
    body: "Our team is always ready to support you before and after supply.",
  },
  {
    icon: "globe",
    title: "Pan India Supply",
    body: "Supplying refractory materials across India with strong logistics.",
  },
];

export const industries = [
  {
    name: "Steel",
    image: "/images/industries/steel.jpg",
    body: "Refractories, gunning mass and ramming mass for steel melting shops, ladles and tundishes.",
  },
  {
    name: "Cement",
    image: "/images/industries/cement.jpg",
    body: "High-alumina bricks, castables and insulation for cement kilns and preheaters.",
  },
  {
    name: "Foundry",
    image: "/images/industries/foundry.jpg",
    body: "Ramming mass, crucibles and consumables for ferrous and non-ferrous foundries.",
  },
  {
    name: "Glass",
    image: "/images/industries/glass.jpg",
    body: "Specialty refractories for glass tank furnaces, regenerators and feeders.",
  },
  {
    name: "Thermal Power",
    image: "/images/industries/thermal-power.jpg",
    body: "Castables, bricks and insulation for boilers, ducts and ash hoppers.",
  },
  {
    name: "Petrochemical",
    image: "/images/industries/petrochemical.jpg",
    body: "Refractory linings for reformers, reactors and process heaters.",
  },
];

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Product Range" },
  { value: "25+", label: "States Served" },
];

export const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    body: "Tell us the type, grade and quantity of refractory material you need.",
  },
  {
    step: "02",
    title: "Get a Quick Quote",
    body: "Our team responds with the best price and technical specifications.",
  },
  {
    step: "03",
    title: "Confirm & Schedule",
    body: "Approve the order and we lock in production and dispatch dates.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    body: "We ship pan-India and stay available for technical support after delivery.",
  },
];

export const testimonials = [
  {
    quote:
      "Agni Mithra has been our go-to supplier for refractory castables for over three years. Quality is consistent and delivery is always on time.",
    name: "Plant Operations Head",
    company: "Leading Steel Manufacturer, Maharashtra",
  },
  {
    quote:
      "Their technical team helped us select the right ramming mass for our induction furnaces. Lining life improved noticeably after switching to them.",
    name: "Procurement Manager",
    company: "Foundry Group, Telangana",
  },
  {
    quote:
      "Pricing is competitive, support is prompt, and the products perform exactly as specified. Highly recommended for any heavy industry buyer.",
    name: "Maintenance Engineer",
    company: "Cement Plant, Karnataka",
  },
];

export const clients = [
  "JSW Steel",
  "Tata Steel",
  "UltraTech",
  "JSPL",
  "ACC Cement",
  "Shree Cement",
  "BHEL",
  "NTPC",
];

export const services = [
  {
    icon: "engineering",
    title: "Technical Engineering",
    body: "Our specialists help you select the right refractory grade for your operating conditions, temperature profile and load.",
  },
  {
    icon: "installation",
    title: "Installation Guidance",
    body: "End-to-end on-site guidance for casting, gunning, ramming and brick-laying installation methods.",
  },
  {
    icon: "support",
    title: "After-Sales Support",
    body: "Dedicated technical support to monitor lining performance and troubleshoot issues in real time.",
  },
  {
    icon: "logistics",
    title: "Pan-India Logistics",
    body: "Reliable supply chain with on-time delivery across all major industrial belts of India.",
  },
];

export const faqs = [
  {
    q: "Which industries do you supply to?",
    a: "We supply refractory materials and industrial products to steel, cement, foundry, glass, thermal power and petrochemical industries across India.",
  },
  {
    q: "Do you offer technical support for product selection?",
    a: "Yes. Our technical team helps you choose the right refractory grade based on your operating temperature, atmosphere and mechanical load conditions.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order quantity varies by product. Please share your requirement and we'll confirm the MOQ along with the best quote.",
  },
  {
    q: "How quickly can you deliver?",
    a: "Most products from our standard range can be dispatched within 3–7 working days depending on quantity and destination.",
  },
  {
    q: "Do you handle pan-India delivery?",
    a: "Yes. We deliver across all major industrial belts of India through our trusted logistics network.",
  },
];

// Shared background images used by Home sections and PageHero.
export const backgrounds = {
  aboutPlant: "/images/about/about-plant.jpg",
  aboutFurnace: "/images/about/about-furnace.jpg",
  aboutGunning: "/images/about/Gunning%20Mass.jpeg",
  aboutRamming: "/images/about/Ramming%20Mass.jpeg",
  pageHero: "/images/backgrounds/page-hero-bg.jpg",
  brochureCta: "/images/backgrounds/brochure-cta-bg.jpg",
};

