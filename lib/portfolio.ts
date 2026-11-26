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
    slug: "community-websites", name: "Community Websites", type: "Community and nonprofit web projects", status: "Mixed project stages",
    summary: "Accessible, manageable websites and communication experiences for local organizations.",
    challenge: "Help smaller organizations establish a digital home with clear information, community engagement and support pathways.",
    delivered: ["Responsive websites and page structures", "Organization-specific event, contact or donation flows", "Content and launch planning"],
    engineering: ["Next.js and modern responsive interfaces", "Accessibility and information architecture", "Deployment and form-integration planning"],
    tools: ["Next.js", "React", "TypeScript", "Content architecture"],
    note: "The Port Allegany Lions Club repository is a working prototype with launch dependencies. Other work is not described as production without verification.",
    repository: "https://github.com/cwlwmsystems/port-allegany-lions-club"
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