export type PortfolioProject = {
  slug: string; name: string; type: string; status: string; summary: string; challenge: string;
  delivered: string[]; engineering: string[]; tools: string[]; note: string;
  website?: string; repository?: string; study?: string;
};
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "port-petals", name: "Port Petals", type: "Client ecommerce platform", status: "Production / active development",
    summary: "A connected storefront and operations platform for a floral and gift retailer.",
    challenge: "Connect online purchasing, payments, pickup and delivery, customer accounts, loyalty, communication and staff operations.",
    delivered: ["Responsive catalog, cart and optional customer accounts", "Square-hosted checkout with verified payment-webhook confirmation", "Pickup and local delivery administration", "Customer order history, wishlists, rewards and referral workflows", "Marketing consent separated from account registration"],
    engineering: ["Server-side checkout validation and webhook processing", "Supabase relational data, authentication and access policies", "Rewards ledger and transaction-aware fulfillment workflows", "Staff administration, notifications and deployment"],
    tools: ["Next.js", "React", "TypeScript", "Supabase", "Square", "Resend", "Vercel"],
    note: "The project README documents a production deployment and ongoing development. Partial-refund reward accounting and additional automated test coverage are not presented as complete.",
    website: "https://www.portpetals.com", repository: "https://github.com/cwlwmsystems/port-petals",
    study: "https://github.com/cwlwmsystems/.github/blob/main/case-studies/port-petals.md"
  },
  {
    slug: "cwlwm-field-operations", name: "Cwlwm Field Operations", type: "Independent Cwlwm software product", status: "Development platform",
    summary: "A company-agnostic, multi-tenant application for field sales and operational coordination.",
    challenge: "Provide one structured environment for distributed teams, territories, representative activity, scheduling, dispatch and reporting.",
    delivered: ["Organization-scoped records, membership and access roles", "Territory and location management with mapping", "Field activity, sales and appointment workflows", "Scheduling, dispatch and operational reporting", "Administrative and audit-oriented controls"],
    engineering: ["Multi-tenant PostgreSQL data architecture", "Supabase row-level security and protected access", "Organization-aware operations and role permissions", "Release and validation documentation"],
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Vercel"],
    note: "Independently developed by Cwlwm Systems as a general-purpose product. It is separate from Zito Media's FieldOS application, which was used by Zito. Development milestones do not imply a publicly available SaaS launch.",
    repository: "https://github.com/cwlwmsystems/cwlwm-field-operations"
  },
  {
    slug: "olson-tenglund", name: "Olson & Tenglund", type: "Retail website and software", status: "Informational website live / catalog application evolving",
    summary: "Business presence, location discoverability and automotive catalog tooling for a regional auto-parts retailer.",
    challenge: "Establish a clear online business presence for three stores and develop more structured catalog, product and vehicle-fitment workflows.",
    delivered: ["Business and store-location website", "Local search, sitemap and structured-content work", "Separate application code for vehicle fitment and supplier catalog staging"],
    engineering: ["Next.js frontend and deployment", "Search indexing and technical SEO", "Product and vehicle-reference data modeling"],
    tools: ["Next.js", "TypeScript", "Supabase", "SEO", "Structured data"],
    note: "The informational website and catalog application are distinct projects; unfinished ecommerce functionality is not represented as live.",
    website: "https://olsontenglund.com", repository: "https://github.com/kaseypelchy-ops/olson-tenglund-info"
  },
  {
    slug: "salt-light-church", name: "Salt & Light Church", type: "Community website", status: "Public preview / final content and integrations in progress",
    summary: "A branded church website that helps visitors find worship information, ministries, events, missions and ways to connect.",
    challenge: "Give a local church a welcoming digital presence, make essential visitor information easy to find and organize ministry, event and community content into a coherent experience.",
    delivered: [
      "Custom visual identity application and responsive website layout",
      "Homepage featuring worship information and a prominent Plan Your Visit path",
      "Dedicated pages for ministries, missions, events, worship, giving and church information",
      "Structured event presentation and clear pathways for new visitors",
      "Consistent navigation, typography and responsive page templates"
    ],
    engineering: [
      "Next.js application with reusable layouts, navigation and section components",
      "Responsive content hierarchy and accessible navigation patterns",
      "Separate route structures for visits, events, ministries and giving",
      "Vercel preview deployment for review and iteration"
    ],
    tools: ["Next.js", "React", "TypeScript", "Responsive design", "Vercel"],
    note: "The public Vercel site is a design and content preview. Some dates, photographs, donation links and other calls to action remain placeholders; a working donation integration or production rollout has not been verified.",
    website: "https://saltlightchurch.vercel.app",
    repository: "https://github.com/kaseypelchy-ops/church-website"
  },
  {
    slug: "seo-aeo-search-intelligence",
    name: "SEO, AEO & Search Intelligence",
    type: "Founder engineering experience · Search operations",
    status: "Production system from prior employment · Sanitized public showcase",
    summary: "A search-operations platform connecting structured publishing, technical site health, organic search data and AI-visibility evidence into one improvement workflow.",
    challenge: "Manage a large local-search content footprint consistently while connecting page ownership, rendered-site quality, Search Console data, analytics and AI visibility to actionable work.",
    delivered: [
      "Structured page inventory with localized content, SEO metadata, FAQs, internal links and redirects",
      "Reusable data-driven WordPress page rendering using PostgreSQL and Supabase",
      "Search Console and rendered-site evidence for site-health, opportunity and content-gap analysis",
      "Intent, page-ownership, cannibalization and internal-link recommendation workflows",
      "GA4 AI-referral and Bing AI-citation measurement with source-aware reporting",
      "Optimization tracking from findings through implementation, verification and outcome measurement"
    ],
    engineering: [
      "PostgreSQL, JSONB and PL/pgSQL models for content relationships and page-level API bundles",
      "PHP/WordPress REST integration with route validation and safe fallback behavior",
      "Next.js application workflows, scheduled pipelines and durable issue history",
      "Evidence-linked scoring models that distinguish missing, zero and incomplete measurements",
      "Traceable import lineage, editorial controls, and locked before-and-after experiment windows"
    ],
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "WordPress", "PHP", "Search Console", "GA4", "Bing AI Performance", "JSON-LD"],
    note: "This is a documented technical case study of a production platform designed and developed by Cwlwm Systems' founder during prior employment at Zito Media. It is not a Cwlwm-owned product or client engagement. The production system, operational data and credentials remain private; the linked personal GitHub repository contains fictional records and simplified public-safe examples.",
    repository: "https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase"
  }
];
export const skillAreas = [
  {name:"Software engineering", detail:"Applications, websites, portals and administrative tools", tools:["Next.js", "React", "TypeScript", "JavaScript", "APIs", "Authentication"], evidence:"Port Petals · Cwlwm Field Operations"},
  {name:"Data architecture", detail:"Reliable sources of truth and operational data models", tools:["PostgreSQL", "Supabase", "SQL", "PL/pgSQL", "ETL", "Imports"], evidence:"Field Operations · Automotive catalog"},
  {name:"Automation and integrations", detail:"Event-driven data movement, validation and fault handling", tools:["REST APIs", "Webhooks", "Idempotency", "Workflow automation", "Notifications"], evidence:"Port Petals payment and operations workflows"},
  {name:"CRM and RevOps", detail:"HubSpot configuration, migrations, reporting and lifecycle processes", tools:["HubSpot", "Sales Hub", "Marketing Hub", "Service Hub", "CRM migration", "Salesforce"], evidence:"Founder qualifications and professional experience; separate from client work"},
  {name:"Analytics and growth", detail:"Measurement, discoverability and applied business intelligence", tools:["BigQuery", "GA4", "Search Console", "SEO / AEO / GEO", "AI-assisted workflows"], evidence:"Retail web work and engineering background"}
];
export const certifications = ["CRM Data Migration","Data Integrations","Implementation for Partners","Marketing Hub Software","Reporting","Sales Hub Software","Service Hub Software","Salesforce Integration","Revenue Operations","Inbound"];