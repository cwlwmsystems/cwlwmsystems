export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  intro: string;
  challenge: string[];
  solution: string;
  flow: string[];
  capabilities: string[];
  value: string[];
  applications: string[];
  foundation: string[];
  accent: "green" | "red" | "gold" | "blue" | "violet";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "field-operations-platform",
    number: "01",
    title: "Field Operations & Sales Management Platform",
    eyebrow: "Distributed teams · Scheduling · Operational visibility",
    intro:
      "A configurable field operations system that connects territory or location assignment, frontline activity, customer outcomes, scheduling, fulfillment, and management reporting in one operational workflow.",
    challenge: [
      "Field teams often move between maps, spreadsheets, forms, scheduling tools, and messages that do not share a common operational record.",
      "Frontline users need a fast mobile workflow while operations needs trustworthy capacity, status, and follow-through.",
      "Management needs to understand what happened at each location and what should happen next without manually reconciling several systems.",
    ],
    solution:
      "The platform uses the customer, property, asset, or service location as the operational anchor. Field activity is captured against that record, downstream scheduling uses shared capacity, lifecycle states preserve what happened, and management receives a consistent view of activity and outcomes.",
    flow: ["Assign work", "Visit / engage", "Capture outcome", "Follow up", "Schedule", "Fulfill", "Measure"],
    capabilities: [
      "Role-based field workflows",
      "Territory and location assignment",
      "Mobile-first interaction capture",
      "Shared scheduling capacity",
      "Offline-safe workflow patterns",
      "Lifecycle and outcome tracking",
      "Realtime operational visibility",
      "Data-quality controls",
    ],
    value: [
      "Reduce manual coordination between field teams and central operations.",
      "Create one trustworthy record of activity, outcome, and next action.",
      "Protect shared capacity from overbooking and conflicting updates.",
      "Connect frontline work to downstream fulfillment and performance measurement.",
    ],
    applications: ["Home services", "Solar and roofing", "Utilities", "Property services", "Field sales", "Franchise operations"],
    foundation: ["Web application", "Relational database", "Mobile/PWA workflow", "Realtime synchronization", "Geospatial interface", "Transactional scheduling"],
    accent: "green",
  },
  {
    slug: "ai-quality-coaching",
    number: "02",
    title: "AI Quality Assurance & Coaching Platform",
    eyebrow: "AI workflows · Quality operations · Human control",
    intro:
      "An AI-assisted quality system that turns high-volume customer or sales interactions into structured evaluations, coaching actions, management intelligence, and measurable follow-up.",
    challenge: [
      "Manual review limits the percentage of interactions a manager can evaluate.",
      "Free-form AI output is not reliable enough to become official business state without structure and validation.",
      "Analysis, scoring, notifications, and coaching need separate failure boundaries so one issue does not break the entire workflow.",
    ],
    solution:
      "Interactions enter a controlled processing pipeline, are validated for eligibility, analyzed into a structured schema, scored through deterministic business rules, saved as auditable evidence, and routed into coaching or follow-up workflows.",
    flow: ["Ingest", "Validate", "Analyze", "Score", "Route", "Coach", "Measure"],
    capabilities: [
      "Structured AI evaluation",
      "Deterministic business scoring",
      "Queue-based processing",
      "Duplicate and retry protection",
      "Eligibility and exclusion rules",
      "Coaching workflows",
      "Manager notifications",
      "Effectiveness tracking",
    ],
    value: [
      "Expand QA coverage without requiring every interaction to be manually reviewed.",
      "Create more consistent evaluation evidence across reviewers and teams.",
      "Turn a score into a closed-loop coaching workflow rather than a static report.",
      "Keep AI inside an auditable, controlled operating process.",
    ],
    applications: ["Contact centers", "Inside sales", "Customer success", "Insurance", "Healthcare scheduling", "Financial services"],
    foundation: ["Asynchronous workers", "Structured LLM output", "Relational persistence", "Deterministic scoring", "Notification workflows", "Operational monitoring"],
    accent: "violet",
  },
  {
    slug: "market-performance-intelligence",
    number: "03",
    title: "Market & Business Unit Performance Intelligence",
    eyebrow: "Decision intelligence · Prioritization · Measurement",
    intro:
      "A decision-support system that identifies underperforming locations, regions, teams, or business units, separates severity from actionability, and creates a measurable intervention workflow.",
    challenge: [
      "Performance evidence often lives across systems and cannot be compared consistently.",
      "A weak score does not automatically mean an issue is actionable; lifecycle, capacity, eligibility, or evidence quality can change the decision.",
      "Without a frozen baseline, it is difficult to prove whether an intervention improved the result.",
    ],
    solution:
      "The system normalizes operational evidence into a canonical unit, derives multi-horizon health signals, ranks eligible opportunities using explainable rules, and freezes a measurement baseline when an intervention begins.",
    flow: ["Collect", "Normalize", "Score", "Qualify", "Prioritize", "Intervene", "Measure"],
    capabilities: [
      "Canonical business-unit modeling",
      "Multi-horizon trend analysis",
      "Coverage-aware scoring",
      "Data-completeness tracking",
      "Deterministic ranking",
      "Lifecycle and eligibility policy",
      "Frozen measurement baselines",
      "Intervention tracking",
    ],
    value: [
      "Focus leadership attention on the units most likely to need action.",
      "Replace inconsistent prioritization with explainable, repeatable logic.",
      "Separate poor performance from whether the organization can act on it now.",
      "Measure improvement against a stable before-and-after baseline.",
    ],
    applications: ["Multi-location businesses", "Franchises", "Regional sales", "Service territories", "Retail networks", "Portfolio operations"],
    foundation: ["Relational analytics", "Scoring models", "Policy rules", "Transactional baselines", "Management interface", "Trend measurement"],
    accent: "red",
  },
  {
    slug: "location-intelligence-platform",
    number: "04",
    title: "Location Intelligence & Geospatial Data Platform",
    eyebrow: "Geospatial processing · Data engineering · Automation",
    intro:
      "A repeatable geospatial pipeline that turns service, delivery, territory, ownership, or operating boundaries into normalized location-level records that downstream teams can actually use.",
    challenge: [
      "Businesses often define an operating area with geographic shapes while sales and operations need specific addresses, properties, assets, or locations.",
      "Large reference datasets make brute-force spatial matching slow and expensive.",
      "Automated processing needs lineage, repeat-upload protection, locks, and safe recovery.",
    ],
    solution:
      "The pipeline parses and repairs geometry, reduces the candidate universe before exact spatial evaluation, normalizes and deduplicates matched records, and preserves processing lineage for repeatable downstream use.",
    flow: ["Ingest boundary", "Repair", "Filter", "Spatial match", "Normalize", "Export", "Reuse"],
    capabilities: [
      "Geometry parsing and repair",
      "Coordinate transformation",
      "Candidate-set reduction",
      "Exact point-in-polygon matching",
      "Record normalization",
      "Deduplication",
      "Processing locks and recovery",
      "Lineage tracking",
    ],
    value: [
      "Translate map boundaries into specific operational records.",
      "Reduce unnecessary spatial processing before expensive exact matching.",
      "Create repeatable datasets instead of one-off GIS exports.",
      "Protect automated processing from duplicate or stale jobs.",
    ],
    applications: ["Utilities", "Logistics", "Real estate", "Territory planning", "Franchise expansion", "Infrastructure operations"],
    foundation: ["Python data pipeline", "Spatial SQL", "Geometry libraries", "Cloud processing", "Columnar query engine", "Lineage controls"],
    accent: "gold",
  },
  {
    slug: "digital-visibility-intelligence",
    number: "05",
    title: "Search & Digital Visibility Intelligence Platform",
    eyebrow: "Growth intelligence · Search operations · Measurement",
    intro:
      "A growth operations platform that connects scalable publishing, technical site health, organic demand, optimization workflows, analytics, and emerging AI visibility into one measurable improvement loop.",
    challenge: [
      "Large sites need consistent content structure and metadata without managing every page as a separate project.",
      "Search performance, analytics, technical evidence, and AI visibility live in different systems with different meanings.",
      "Recommendations often stop at the audit instead of being prioritized, implemented, verified, and measured.",
    ],
    solution:
      "The system separates managed content, rendered-site evidence, and external performance data, then turns those signals into prioritized work with ownership, verification, and outcome measurement.",
    flow: ["Publish", "Collect evidence", "Diagnose", "Prioritize", "Implement", "Verify", "Measure"],
    capabilities: [
      "Reusable publishing architecture",
      "Search performance integration",
      "Rendered-site monitoring",
      "Intent and ownership modeling",
      "Opportunity prioritization",
      "Content-gap analysis",
      "Experiment tracking",
      "AI referral and citation measurement",
    ],
    value: [
      "Scale structured content without scaling maintenance at the same rate.",
      "Bring search, site health, analytics, and AI discovery into one operating view.",
      "Prioritize work by likely business value instead of treating every finding equally.",
      "Close the loop from recommendation through verification and outcome measurement.",
    ],
    applications: ["Multi-location brands", "Professional services", "SaaS", "Home services", "Healthcare networks", "Content-heavy businesses"],
    foundation: ["Web application", "Relational content model", "Search APIs", "Analytics integration", "Structured data", "Experiment tracking"],
    accent: "blue",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
