export const site = {
  name: "Cwlwm Systems",
  tagline: "Connected systems. Clearer operations.",
  description:
    "Cwlwm Systems designs custom operational software, integrations, automation, AI-assisted workflows, and decision intelligence for businesses that have outgrown disconnected tools and manual handoffs.",
  email: "cwlwmsystems@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cwlwm-systems.vercel.app",
};

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
];

export const solutions = [
  {
    slug: "operational-platforms",
    number: "01",
    title: "Custom Operational Platforms",
    short: "Purpose-built software for the workflows that sit between your existing systems.",
    description:
      "Replace fragile spreadsheets, disconnected forms, inbox-driven processes, and manual coordination with a focused operational system built around the way your team actually works.",
    signs: [
      "The same data is entered in several places.",
      "Important work depends on one spreadsheet or one person.",
      "Teams have software, but the handoffs still happen manually.",
    ],
    examples: ["Internal tools", "Operations portals", "Role-based workflows", "Approval systems", "Scheduling and capacity tools"],
  },
  {
    slug: "integrations-automation",
    number: "02",
    title: "Integrations & Workflow Automation",
    short: "Connect the tools you already use and automate the work between them.",
    description:
      "Cwlwm Systems can create reliable integrations, event-driven workflows, scheduled jobs, notifications, validation layers, and reconciliation logic so your systems behave like one operating environment.",
    signs: [
      "Employees copy information from one application to another.",
      "A missed handoff can delay revenue or customer service.",
      "APIs exist, but no one has connected the workflow end to end.",
    ],
    examples: ["API integrations", "Data synchronization", "Notifications", "Scheduled workflows", "Lifecycle automation"],
  },
  {
    slug: "ai-quality",
    number: "03",
    title: "AI-Assisted Operations & Quality",
    short: "Use AI inside controlled workflows instead of bolting a chatbot onto the business.",
    description:
      "We design AI-assisted systems with structured outputs, deterministic rules, review points, retries, monitoring, and clear ownership so automation can support real operational decisions without becoming a black box.",
    signs: [
      "High-volume work needs review, classification, or summarization.",
      "Managers cannot manually inspect enough interactions or records.",
      "You want AI benefits without giving up control or auditability.",
    ],
    examples: ["Quality assurance", "Document analysis", "Classification", "Coaching workflows", "Human-in-the-loop automation"],
  },
  {
    slug: "data-intelligence",
    number: "04",
    title: "Data & Decision Intelligence",
    short: "Turn fragmented operational data into prioritized action, not another dashboard.",
    description:
      "Bring together signals from multiple systems, normalize them into a usable model, and build clear prioritization, measurement, and decision workflows around the questions leadership actually needs answered.",
    signs: [
      "Reports disagree because sources define the same metric differently.",
      "Leadership can see what happened but not what to do next.",
      "Teams spend hours preparing data before they can use it.",
    ],
    examples: ["Operational analytics", "Scoring and prioritization", "Exception queues", "Measurement baselines", "Management dashboards"],
  },
  {
    slug: "field-location",
    number: "05",
    title: "Field & Location Systems",
    short: "Coordinate people, places, territories, capacity, and outcomes in one workflow.",
    description:
      "Build mobile-friendly systems for distributed teams and location-based operations, including territory assignment, field activity, appointment capacity, geographic matching, and downstream fulfillment.",
    signs: [
      "Field teams work from maps, spreadsheets, and text messages.",
      "Operations lacks one trustworthy view of activity and follow-through.",
      "Location data exists, but it is not usable by frontline workflows.",
    ],
    examples: ["Field operations", "Territory management", "Location intelligence", "Scheduling", "Geospatial processing"],
  },
  {
    slug: "growth-revenue",
    number: "06",
    title: "Growth & Revenue Systems",
    short: "Connect acquisition, content, lifecycle, sales, and measurement into a working growth system.",
    description:
      "Unify the operational layer behind growth: search intelligence, lifecycle triggers, lead routing, campaign data, attribution, customer states, and revenue-facing workflows.",
    signs: [
      "Marketing, sales, and operations use different versions of the customer journey.",
      "Growth insights are scattered across tools and reports.",
      "Recommendations are created, but execution and verification are not tracked.",
    ],
    examples: ["Search intelligence", "RevOps workflows", "Lifecycle automation", "Content systems", "Attribution support"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    copy: "Start with the business problem, not a technology wish list. We identify the bottleneck, users, decisions, constraints, and what a successful outcome would change.",
  },
  {
    number: "02",
    title: "Map",
    copy: "Document the current workflow, systems, handoffs, data relationships, business rules, failure points, and source of truth before changing anything.",
  },
  {
    number: "03",
    title: "Design",
    copy: "Define the smallest useful system, integration, or automation that can solve the real problem without creating unnecessary complexity.",
  },
  {
    number: "04",
    title: "Build & Integrate",
    copy: "Implement the workflow around your existing environment wherever possible, with validation, permissions, error handling, and operational visibility built in.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    copy: "Verify adoption and outcomes, watch for edge cases, and refine the system based on how the business actually uses it.",
  },
];

export const industries = [
  {
    title: "Home & Field Services",
    intro: "For teams that coordinate people, appointments, territories, customers, and fulfillment across many locations.",
    needs: ["Field operations", "Scheduling and capacity", "Lead-to-job workflows", "Territory intelligence", "Management visibility"],
  },
  {
    title: "Multi-Location & Franchise Operations",
    intro: "For businesses that need consistent operations while still understanding what is happening at each location or region.",
    needs: ["Location performance", "Exception management", "Standardized workflows", "Expansion intelligence", "Cross-location reporting"],
  },
  {
    title: "Customer Operations & Contact Centers",
    intro: "For organizations managing high volumes of interactions, quality standards, follow-up, and coaching.",
    needs: ["AI-assisted QA", "Coaching workflows", "Interaction intelligence", "Escalation routing", "Operational health monitoring"],
  },
  {
    title: "Professional Services",
    intro: "For firms where client work crosses intake, documents, approvals, deadlines, communications, and internal handoffs.",
    needs: ["Client intake", "Workflow automation", "Document routing", "Internal portals", "Status and accountability"],
  },
  {
    title: "Utilities & Infrastructure",
    intro: "For location-heavy operations where geographic data, field activity, assets, service areas, and customer workflows need to connect.",
    needs: ["Geospatial processing", "Field workflows", "Service-area intelligence", "Asset/location matching", "Operational reporting"],
  },
  {
    title: "Growth, Marketing & Revenue Teams",
    intro: "For teams that need the operational layer between content, acquisition, CRM, analytics, lifecycle, and revenue.",
    needs: ["Search intelligence", "Lifecycle automation", "Data integration", "RevOps workflows", "Measurement systems"],
  },
];

export const faqs = [
  {
    q: "Do we need to replace the software we already use?",
    a: "Usually not. Cwlwm Systems starts by understanding what already works. The goal is often to connect, extend, or create an operational layer around your existing tools rather than force a rip-and-replace project.",
  },
  {
    q: "What kinds of businesses are a good fit?",
    a: "The strongest fit is a business with a real operational bottleneck that crosses people, data, or multiple tools: repetitive work, unreliable handoffs, fragmented reporting, manual coordination, or a process that no off-the-shelf product handles cleanly.",
  },
  {
    q: "Can you work with our existing APIs, databases, CRM, or website?",
    a: "Yes. Integration is central to the work. A project can connect APIs, databases, web applications, cloud services, forms, content systems, analytics tools, and other platforms as long as the necessary access is available.",
  },
  {
    q: "Do you build with AI?",
    a: "Yes, when AI materially improves the workflow. We favor structured, controlled uses such as classification, quality review, summarization, extraction, prioritization, and assisted decision support with validation and human control points.",
  },
  {
    q: "What if an existing product already solves our problem?",
    a: "Then custom software may not be the right answer. The point is to solve the operating problem, not to manufacture a development project. A good discovery process should make that clear early.",
  },
  {
    q: "How does a project start?",
    a: "Start by describing what is not working, who is affected, what tools are involved, and what you wish happened instead. From there we can determine whether the next step should be a focused diagnostic, an integration, a prototype, or a scoped build.",
  },
];
