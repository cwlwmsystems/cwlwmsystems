export const site = {
  name: "Cwlwm Systems",
  tagline: "Connected systems. Clearer operations.",
  description:
    "Founder-led custom operational software, integrations, automation, internal tools, and decision systems for businesses that have outgrown disconnected tools, spreadsheets, and manual handoffs.",
  email: "cwlwmsystems@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cwlwm-systems.vercel.app",
};

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
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
      "I design AI-assisted systems with structured outputs, deterministic rules, review points, retries, monitoring, and clear ownership so automation can support real operational decisions without becoming a black box.",
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
    copy: "Start with the business problem, not a technology wish list. I identify the bottleneck, users, decisions, constraints, and what a successful outcome would change.",
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
    q: "Does my business need to replace the software it already uses?",
    a: "Usually not. Cwlwm Systems starts by understanding what already works. The goal is often to connect, extend, or create an operational layer around your existing tools rather than force a rip-and-replace project.",
  },
  {
    q: "What kinds of businesses are a good fit?",
    a: "The strongest fit is a business with a real operational bottleneck that crosses people, data, or multiple tools: repetitive work, unreliable handoffs, fragmented reporting, manual coordination, or a process that no off-the-shelf product handles cleanly.",
  },
  {
    q: "Can Cwlwm Systems work with existing APIs, databases, CRM platforms, or websites?",
    a: "Yes. Integration is central to the work. A project can connect APIs, databases, web applications, cloud services, forms, content systems, analytics tools, and other platforms as long as the necessary access is available.",
  },
  {
    q: "What if an existing product already solves the problem?",
    a: "Then custom software may not be the right answer. The point is to solve the operating problem, not to manufacture a development project. A good discovery process should make that clear early.",
  },
  {
    q: "How does a project start?",
    a: "Start by describing what is not working, who is affected, what tools are involved, and what you wish happened instead. From there, I can determine whether the next step should be a focused diagnostic, an integration, a prototype, or a scoped build.",
  },
];


export const problemSignals = [
  "Your team enters the same information into more than one system.",
  "A spreadsheet has quietly become a mission-critical application.",
  "Employees copy data between tools because the systems do not talk to each other.",
  "Managers spend hours assembling reports before they can make a decision.",
  "Important work is tracked through email, chat, or individual memory.",
  "Your CRM, website, forms, database, and operations tools each tell a different story.",
  "A repetitive process is consuming skilled employee time that should be spent elsewhere.",
  "An off-the-shelf product gets you most of the way there, but the last 20% is where the business actually operates.",
];

export const engagementOptions = [
  {
    title: "Systems & Workflow Review",
    price: "$750 fixed",
    fit: "A defined operational problem that needs diagnosis before anyone starts building.",
    includes: ["Current-state workflow map", "Systems and data inventory", "Bottlenecks and risk points", "Prioritized automation opportunities", "Recommended next-step roadmap"],
    href: "/systems-review",
  },
  {
    title: "Automation & Integration",
    price: "From $2,500",
    fit: "A focused workflow that can be improved by connecting systems or removing repetitive manual work.",
    includes: ["API or database integration", "Workflow automation", "Validation and error handling", "Notifications or scheduled jobs", "Documentation and handoff"],
    href: "/contact?interest=automation",
  },
  {
    title: "Custom Internal Tool",
    price: "From $5,000",
    fit: "A portal, dashboard, workflow, admin tool, or operational application built around how your business works.",
    includes: ["Requirements and workflow design", "User interface and application logic", "Authentication and permissions", "Data model and integrations", "Launch and documentation"],
    href: "/contact?interest=internal-tool",
  },
  {
    title: "Operational Platform",
    price: "From $10,000",
    fit: "A larger system spanning multiple workflows, users, data sources, integrations, and operational states.",
    includes: ["Architecture and phased scope", "Multiple workflows or roles", "Operational reporting", "Integration layer", "Testing, launch, and stabilization"],
    href: "/contact?interest=platform",
  },
];

export const nextSteps = [
  { number: "01", title: "Tell me what is happening", copy: "Describe the process, people, tools, and where work gets stuck. You do not need to know what software should be built." },
  { number: "02", title: "Project-fit conversation", copy: "A short conversation determines whether the problem is a fit, whether an existing product may solve it, and what the most sensible next step is." },
  { number: "03", title: "Discovery or systems review", copy: "For work that needs deeper understanding, I map the current workflow, data, rules, constraints, risks, and desired operating state." },
  { number: "04", title: "Clear scope and price", copy: "Before development begins, you receive a written scope describing deliverables, assumptions, timeline, responsibilities, and cost." },
  { number: "05", title: "Build with visibility", copy: "The system is built in understandable stages. You see working progress and can validate the workflow before launch." },
  { number: "06", title: "Launch, document, hand off", copy: "The finished system is tested, documented, deployed, and transferred according to the project agreement. Ongoing support is optional, not forced." },
];

export const trustPoints = [
  { title: "You work directly with the builder", copy: "There is no sales-to-delivery handoff. I am the person learning the process, designing the solution, building it, and refining it with you." },
  { title: "No forced platform lock-in", copy: "Where practical, systems can be deployed into client-controlled infrastructure and accounts. Ongoing hosting or support is only included when you choose it." },
  { title: "Project-specific work transfers", copy: "Ownership of project-specific deliverables is handled in the service agreement and statement of work, with transfer after the agreed payment terms are satisfied." },
  { title: "Existing software comes first", copy: "I do not recommend custom development just to create a development project. If an existing product solves the problem cleanly, that should be considered first." },
  { title: "Security is part of the design", copy: "Authentication, permissions, validation, auditability, data handling, backups, and failure recovery are considered as operating requirements, not afterthoughts." },
  { title: "No invented proof", copy: "Client names, testimonials, screenshots, and metrics are only published with permission. Case studies focus on real system patterns without fabricating customer claims." },
];

export const fitReasons = [
  "There is a specific operational problem with a measurable cost in time, errors, delay, risk, or missed opportunity.",
  "The workflow crosses more than one person, tool, data source, or department.",
  "You want a system that fits the business rather than forcing the business into a generic template.",
  "You can provide access to the people who actually perform the workflow and the systems that support it.",
  "You value reliability, documentation, and maintainability in addition to getting something working quickly.",
];

export const notFitReasons = [
  "The main requirement is simply the lowest possible development price.",
  "You want a clone of an existing commercial product without a distinct business need.",
  "There is not yet a clear problem, owner, or workflow to improve.",
  "The project requires a large full-time delivery team or enterprise staffing model from day one.",
];
