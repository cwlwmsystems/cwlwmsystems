export type ServiceLanding = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  introduction: string;
  audience: string;
  outcomes: string[];
  problems: { title: string; explanation: string }[];
  deliverables: { title: string; explanation: string }[];
  process: { title: string; explanation: string }[];
  questions: { question: string; answer: string }[];
  relatedWork: { slug: string; label: string; note: string }[];
  relatedServices: string[];
  serviceType: string;
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "business-websites",
    title: "A business website that makes the next step easy.",
    metaTitle: "Business Website Design & Development",
    metaDescription: "Cwlwm Systems builds professional, mobile-friendly business websites with clear customer journeys, SEO foundations, analytics and ongoing support. Based in Pennsylvania, serving businesses remotely.",
    eyebrow: "Website design & development",
    introduction: "Your website should make the quality of your business obvious. We help established businesses replace confusing or outdated digital experiences with clear content, useful navigation, fast mobile pages and a straightforward path to getting in touch.",
    audience: "Independent retailers, contractors, professional services, community organizations and multi-location businesses that need a site they can trust and maintain.",
    outcomes: ["An online presence that reflects the business behind it", "Clear paths from service or product pages to an inquiry", "Content structure that can support local search and future growth"],
    problems: [
      { title: "The site no longer represents the business", explanation: "An outdated layout, inconsistent information or generic template can undermine an otherwise strong first impression. We start with the customer and the business goal, not a preselected theme." },
      { title: "Visitors cannot find what matters", explanation: "When services, locations, contact options or relevant information are buried, visitors must work too hard. We map the site around the questions customers actually have." },
      { title: "The site is difficult to improve", explanation: "A launch is the beginning of the website's useful life. We document hosting, analytics, content ownership and the practical way to keep it current." },
    ],
    deliverables: [
      { title: "Site strategy and information architecture", explanation: "Define the audience, page hierarchy, conversion paths, content responsibilities and what success should look like." },
      { title: "Considered design and responsive development", explanation: "Build a cohesive visual experience that works on phones, tablets and desktop screens, with usable navigation and accessible interfaces." },
      { title: "Search and measurement foundations", explanation: "Configure descriptive titles, canonical URLs, crawlable navigation, appropriate structured data, an XML sitemap and analytics where access is available." },
      { title: "Forms and business connections", explanation: "Connect appropriate contact forms, scheduling, email or CRM systems so an inquiry has an operational destination." },
      { title: "Launch and ownership plan", explanation: "Test key interactions, review hosting and domain configuration, document handoff and define optional ongoing support." },
    ],
    process: [
      { title: "Understand the business", explanation: "Review what customers need, what the existing website does well and where the journey breaks down." },
      { title: "Design the customer path", explanation: "Organize pages, calls to action and content around specific decisions and actions." },
      { title: "Build, test and launch", explanation: "Validate mobile usability, forms, navigation, indexing controls and basic measurement before going live." },
    ],
    questions: [
      { question: "Do we need to rebuild our existing website?", answer: "Not necessarily. If the underlying platform and information architecture are sound, a focused improvement may be more appropriate than a complete replacement." },
      { question: "Can the website connect with our CRM or scheduling tool?", answer: "Often, yes. We review the platform, available APIs, permissions and data requirements before specifying the integration." },
      { question: "Can you guarantee a first-place Google ranking?", answer: "No. We implement technical and content foundations that support discoverability and measurement. Search visibility depends on competition, relevance, indexing and many factors no provider controls." },
      { question: "Will we be able to maintain the site?", answer: "The ownership model is part of the scope. We can document a handoff, agree on ongoing maintenance or plan future enhancements." },
    ],
    relatedWork: [
      { slug: "olson-tenglund", label: "Olson & Tenglund", note: "Multi-location business website and identity" },
      { slug: "salt-light-church", label: "Salt & Light Church", note: "Community website design in public preview" },
    ],
    relatedServices: ["ecommerce-development", "seo-aeo"],
    serviceType: "Business website design and development",
  },
  {
    slug: "ecommerce-development",
    title: "An online store built around the way people buy.",
    metaTitle: "Ecommerce Website & Online Store Development",
    metaDescription: "Custom ecommerce experiences, product catalogs, checkout connections and operational integrations from Cwlwm Systems. Build a clear customer journey and maintainable storefront.",
    eyebrow: "Ecommerce & digital commerce",
    introduction: "An online store is more than a product grid. It needs to help customers find the right item, understand their options and move through a dependable purchase or inquiry flow—while keeping orders, inventory and business operations connected where appropriate.",
    audience: "Independent retailers and specialty businesses that need an online catalog, shopping experience, customer account journey or a more capable connection to existing operations.",
    outcomes: ["A clearer product-discovery and purchasing experience", "A maintainable catalog structure with reliable identifiers", "Practical integration points for payment, customer and fulfillment systems"],
    problems: [
      { title: "Customers cannot find the right product", explanation: "Catalogs become frustrating when categories, filters, variants, fitment or product descriptions do not match how people shop. Discovery should reflect real customer decisions." },
      { title: "Commerce and operations are disconnected", explanation: "A storefront may collect orders while staff manually reconcile products, customers or fulfillment. We identify where the source of truth belongs before connecting the systems." },
      { title: "Product data is difficult to maintain", explanation: "Supplier data, images, SKUs and availability need a repeatable model. We design import and content workflows that can be supported after launch." },
    ],
    deliverables: [
      { title: "Catalog and product model", explanation: "Organize products, categories, variants, identifiers and attributes for customer-facing use and internal maintenance." },
      { title: "Storefront and conversion experience", explanation: "Build mobile-friendly navigation, product detail views, customer questions and purchase or inquiry flows." },
      { title: "Integration and data planning", explanation: "Evaluate payment, inventory, accounting, CRM, shipping and supplier systems against actual operational requirements." },
      { title: "Quality and operations testing", explanation: "Test common shopping paths, edge cases, catalog updates, transaction or inquiry handoffs, and access requirements." },
    ],
    process: [
      { title: "Map the buying journey", explanation: "Understand who purchases, how products are selected and where customer decisions become operational records." },
      { title: "Model products and sources of truth", explanation: "Identify authoritative SKUs, prices and availability before building customer-facing flows." },
      { title: "Build and verify", explanation: "Implement a scoped experience, test it with representative products and document the ongoing content process." },
    ],
    questions: [
      { question: "Can you work with an existing product catalog?", answer: "Yes, subject to the available export or API. We review identifiers, product relationships and data quality before committing to an import or synchronization." },
      { question: "Do we need a fully custom ecommerce system?", answer: "Not always. Existing platforms are often a better choice when they fit the business. Custom development makes sense when unusual catalog, fitment or operational requirements justify it." },
      { question: "Can the store work with our accounting or CRM system?", answer: "Potentially. The design depends on available integrations, which records each platform owns and how exceptions will be reconciled." },
    ],
    relatedWork: [
      { slug: "port-petals", label: "Port Petals", note: "Independent retail storefront and customer experience" },
      { slug: "olson-tenglund", label: "Olson & Tenglund", note: "Business website and separate automotive commerce development" },
    ],
    relatedServices: ["business-websites", "automation-integrations"],
    serviceType: "Ecommerce website development",
  },
  {
    slug: "custom-software",
    title: "Custom software for the work that doesn't fit into a standard tool.",
    metaTitle: "Custom Business Software & Internal Application Development",
    metaDescription: "Cwlwm Systems designs practical internal tools, portals, field operations applications and business software with thoughtful data models, workflows, permissions and support.",
    eyebrow: "Custom business applications",
    introduction: "Sometimes the missing system is not another subscription. It is a focused application that ties users, business rules and data together. We help teams define the smallest useful system, build it around actual processes and maintain clear ownership after launch.",
    audience: "Teams managing important work in spreadsheets, email, disconnected applications or processes that no standard platform handles comfortably.",
    outcomes: ["Fewer fragile manual handoffs", "Clearer business states and user responsibilities", "A maintainable application aligned with a specific operational outcome"],
    problems: [
      { title: "A spreadsheet has become critical infrastructure", explanation: "When a spreadsheet coordinates real transactions, approvals, appointments or field activity, weak permissions and undocumented logic create operational risk." },
      { title: "Users have to work around the software", explanation: "Generic tools often expose features but do not match the sequence of work. We map the process, users and exceptions before choosing the application architecture." },
      { title: "Data is scattered across systems", explanation: "A new application needs reliable records, identifiers and integration rules. We establish the source of truth and error-handling approach before a build grows." },
    ],
    deliverables: [
      { title: "Requirements and workflow design", explanation: "Define users, states, permissions, dependencies, acceptance criteria and where human judgment is required." },
      { title: "Application and data architecture", explanation: "Design the interface, relational data model, integration boundaries and background processing appropriate to the project." },
      { title: "Implementation and validation", explanation: "Build iteratively, test real user paths and verify important edge cases and recovery behavior." },
      { title: "Documentation and operational handoff", explanation: "Define environment ownership, account access, support responsibilities, training and future enhancement options." },
    ],
    process: [
      { title: "Prove the use case", explanation: "Determine whether process changes or off-the-shelf configuration would solve the problem before prescribing custom development." },
      { title: "Build the minimum useful workflow", explanation: "Start with the highest-value path and clear acceptance criteria rather than a long speculative feature list." },
      { title: "Test with actual operating scenarios", explanation: "Review permissions, data quality, exceptions, workflow continuity and real user adoption." },
    ],
    questions: [
      { question: "How do we know whether custom software is the right answer?", answer: "We compare the business requirement with existing platforms, configuration options and integration costs. A custom build should earn its place through measurable business value." },
      { question: "Can an application connect to the tools we already use?", answer: "Usually that is part of the discovery. We assess API availability, vendor limitations, ownership of records, security requirements and ongoing maintenance." },
      { question: "What happens after launch?", answer: "The engagement defines hosting, access, documentation, support and ownership. You can choose a planned handoff or an ongoing technical partnership." },
    ],
    relatedWork: [
      { slug: "cwlwm-field-operations", label: "Cwlwm Field Operations", note: "Independently developed operations software in progress" },
    ],
    relatedServices: ["automation-integrations", "business-websites"],
    serviceType: "Custom business application development",
  },
  {
    slug: "automation-integrations",
    title: "Connect the tools you have. Eliminate the work between them.",
    metaTitle: "Business Process Automation & API Integrations",
    metaDescription: "Workflow automation, API connections, CRM integrations, data synchronization and process design for growing companies. Cwlwm Systems builds reliable business handoffs.",
    eyebrow: "Integrations & workflow automation",
    introduction: "When people copy information between a website, CRM, spreadsheet, accounting tool and operations system, the problem is usually not any one application. It is the handoff between them. We design reliable processes that connect the right records, rules and people.",
    audience: "Businesses with recurring manual entry, disconnected SaaS tools, CRM handoff gaps, reporting inconsistencies or workflows dependent on a single employee.",
    outcomes: ["Less repetitive data entry and reconciliation", "Clear ownership of system records and workflow states", "Automation that handles failures without silently losing work"],
    problems: [
      { title: "The same information gets entered multiple times", explanation: "Duplicated data often drifts apart. We determine which application owns each field and how downstream changes should move." },
      { title: "A workflow stops when someone forgets a step", explanation: "Notifications, scheduling, lead routing and approvals need defined triggers, validation and exceptions rather than assumptions about who will remember." },
      { title: "Integrations fail without visibility", explanation: "A working API call is not a complete system. Retries, deduplication, access, logging and reconciliation matter when the workflow runs every day." },
    ],
    deliverables: [
      { title: "Current-state process and data flow", explanation: "Map triggers, records, associations, source-of-truth decisions and downstream responsibilities." },
      { title: "Appropriate connection method", explanation: "Evaluate native integrations, automation tools, vendor APIs and custom middleware according to real complexity." },
      { title: "Validation and exception handling", explanation: "Plan idempotency, rate limits, missing data, failures, retries and who owns a manual review queue." },
      { title: "Operational reporting and documentation", explanation: "Provide enough visibility to know what succeeded, what failed and what needs attention." },
    ],
    process: [
      { title: "Follow one record from beginning to end", explanation: "Start with a concrete lead, order, appointment or service request and identify each state change." },
      { title: "Choose the minimum reliable integration", explanation: "Avoid custom complexity if a safe native integration already handles the requirement." },
      { title: "Verify the failure paths", explanation: "Test duplicates, invalid records, permissions, timeouts and ownership of exceptions." },
    ],
    questions: [
      { question: "Can you integrate HubSpot with our existing tools?", answer: "The answer depends on your HubSpot subscription, connected applications, available APIs and access permissions. We begin by mapping the objects, fields, associations and direction of sync." },
      { question: "Will automation replace our existing software?", answer: "Usually not. A focused integration is often preferable to replacing the platforms that already serve their intended purpose." },
      { question: "How do we know it is working?", answer: "A proper handoff includes validation, monitoring, retry or exception paths and a clear way to check successful and failed processing." },
    ],
    relatedWork: [
      { slug: "cwlwm-field-operations", label: "Cwlwm Field Operations", note: "Independent software architecture in development" },
      { slug: "port-petals", label: "Port Petals", note: "Customer-facing commerce and connected systems work" },
    ],
    relatedServices: ["custom-software", "seo-aeo"],
    serviceType: "Business process automation and software integrations",
  },
  {
    slug: "seo-aeo",
    title: "Search visibility built on evidence—not shortcuts.",
    metaTitle: "SEO, AEO & AI Search Visibility Services",
    metaDescription: "Technical SEO, local search foundations, answer engine optimization and generative search readiness. Cwlwm Systems connects site architecture, content, analytics and measurable improvement.",
    eyebrow: "SEO, AEO & generative search",
    introduction: "Getting found online starts with an accessible, useful website and accurate information about your business. Search and AI experiences both depend on being able to discover, understand and trust the content. We approach SEO, AEO and GEO as an evidence-driven improvement process—not a promise to manipulate a particular ranking.",
    audience: "Businesses with weak search visibility, inconsistent location information, outdated site structures, unclear service pages or unanswered questions about performance and AI discovery.",
    outcomes: ["A clear technical foundation for crawling and indexing", "Content organized around the real questions buyers ask", "Measurement that separates observed traffic and citations from speculation"],
    problems: [
      { title: "Pages exist, but search engines cannot confidently interpret them", explanation: "Poor internal linking, unclear titles, indexing directives or duplicated pages can obscure otherwise useful content. Technical search work begins with verifying the actual rendered pages." },
      { title: "The content does not answer the buyer's question", explanation: "Generic copy is easy to write and hard to trust. Helpful pages need concrete scope, process explanations, examples, limitations and next steps based on first-hand knowledge." },
      { title: "No one can tell what improved", explanation: "Search Console, analytics and emerging AI citation reports describe different evidence. We separate them and measure changes over meaningful windows." },
    ],
    deliverables: [
      { title: "Technical visibility review", explanation: "Inspect crawlability, canonical URLs, page titles, content structure, sitemaps, mobile usability, internal links and relevant structured data." },
      { title: "Service and content architecture", explanation: "Develop pages that explain actual services, answer common buying questions and connect to relevant, authorized project evidence." },
      { title: "Local and entity consistency", explanation: "Check business identity and public profiles where the company meets platform eligibility requirements; avoid invented addresses or city-specific doorway pages." },
      { title: "Analytics and search measurement", explanation: "Set up or improve Search Console, Bing Webmaster Tools and GA4 reporting where accounts and permissions are available." },
      { title: "Prioritized improvement roadmap", explanation: "Rank opportunities, document changes and compare observed results without promising positions or AI citations." },
    ],
    process: [
      { title: "Establish what is already indexed", explanation: "Check actual pages, search queries, crawler access and conversion paths before writing new content." },
      { title: "Improve the most relevant journeys", explanation: "Prioritize service pages and real questions that connect search intent to the business's offers." },
      { title: "Measure and iterate", explanation: "Track relevant impressions, engaged visits, inquiries and any separately reported AI citation evidence." },
    ],
    questions: [
      { question: "What is the difference between SEO, AEO and GEO?", answer: "SEO improves the ability of search engines and users to find and understand pages. AEO is a label for making content directly useful as answers, while GEO commonly refers to visibility in generative AI experiences. They share technical and content fundamentals, rather than requiring three unrelated systems." },
      { question: "Do we need special AI markup or an llms.txt file?", answer: "No special markup is required for Google AI Overviews or AI Mode. Accurate structured data and useful content can help search engines understand a site, but an AI-specific text file is not a guaranteed visibility technique." },
      { question: "Can you guarantee that ChatGPT or Google will recommend my business?", answer: "No. Search and AI systems decide what to surface independently. We can improve the site's clarity, accessibility, citations and measurable search readiness, but not guarantee inclusion." },
      { question: "Does a Google Business Profile work for every online company?", answer: "No. Google requires qualifying in-person customer contact. Online-only companies without eligible in-person service are not entitled to a profile just to obtain a local ranking." },
    ],
    relatedWork: [
      { slug: "olson-tenglund", label: "Olson & Tenglund", note: "Business website and search-foundation work" },
      { slug: "seo-aeo-search-intelligence", label: "SEO/AEO Search Intelligence", note: "Founder's engineering work from prior employment; not a Cwlwm-owned platform" },
    ],
    relatedServices: ["business-websites", "automation-integrations"],
    serviceType: "Technical SEO, answer engine optimization and search analytics",
  },
];

export function getServiceLanding(slug: string) {
  return serviceLandings.find((page) => page.slug === slug);
}
