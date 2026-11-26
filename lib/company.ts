export const companyServices = [
  {
    number: "01", slug: "digital-experiences", title: "Websites & ecommerce",
    description: "Professional websites and online stores that make a strong first impression and work as well as they look.",
    services: ["Business websites", "Ecommerce experiences", "Customer portals and digital journeys", "Responsive development", "Performance & analytics"],
    outcome: "A credible digital presence designed around customers and maintained for growth.",
    relatedProject: "olson-tenglund",
  },
  {
    number: "02", slug: "software-products", title: "Software & applications",
    description: "Purpose-built applications, internal platforms and digital tools that solve the business problems off-the-shelf products leave behind.",
    services: ["Custom business applications", "Internal tools & admin portals", "Customer & partner portals", "Field operations & scheduling", "Product & data-driven experiences"],
    outcome: "Software shaped by real processes, real users and long-term ownership.",
    relatedProject: "cwlwm-field-operations",
  },
  {
    number: "03", slug: "connected-systems", title: "Connected systems",
    description: "Better connections between data, teams and technology—without replacing the systems that already work.",
    services: ["API & SaaS integrations", "Business process automation", "Databases & data migration", "HubSpot CRM & RevOps", "Operational reporting & analytics"],
    outcome: "Reliable handoffs, cleaner information and less time spent coordinating tools.",
    relatedProject: "port-petals",
  },
  {
    number: "04", slug: "brand-growth", title: "Brand & digital growth",
    description: "A consistent digital identity and the marketing foundations that help customers find, understand and trust the business.",
    services: ["Brand identity and creative assets", "SEO, local search, AEO & GEO", "Content and social media foundations", "Digital advertising creative", "Measurement and marketing automation"],
    outcome: "A recognizable brand, credible digital presence and measurable paths to customer engagement.",
    relatedProject: "olson-tenglund",
  },
  {
    number: "05", slug: "ongoing-partnership", title: "Ongoing partnership",
    description: "Dependable technical ownership after launch, whether the next step is maintenance, training or another development phase.",
    services: ["Website & application care", "Implementation & onboarding", "Technical support & troubleshooting", "Documentation & training", "Phased enhancement & systems guidance"],
    outcome: "One technical partner who understands the systems and keeps them moving.",
    relatedProject: "port-petals",
  },
] as const;

export const companyPrinciples = [
  {number:"01",name:"Understand the business",description:"Define the goal, user, workflow and source of truth before selecting tools."},
  {number:"02",name:"Build with care",description:"Design for usability, accessibility, security and maintainability—not a one-time demo."},
  {number:"03",name:"Make it work together",description:"Connect data, software and people in a process that holds up under real use."},
  {number:"04",name:"Stay accountable",description:"Launch clearly, document decisions and support adoption or a responsible handoff."},
] as const;
