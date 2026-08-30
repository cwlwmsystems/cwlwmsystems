export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  takeaway: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "when-a-spreadsheet-becomes-operational-risk",
    title: "When a spreadsheet becomes an operational risk",
    description: "How to tell when a useful spreadsheet has quietly become critical business infrastructure — and what to do next.",
    category: "Operations",
    readTime: "6 min read",
    published: "August 2026",
    takeaway: "A spreadsheet becomes risky when the business depends on it for shared state, workflow control, permissions, or timely decisions that the spreadsheet was never designed to manage.",
    sections: [
      {
        heading: "Spreadsheets are not the problem",
        paragraphs: [
          "Spreadsheets are one of the best tools in business. They are fast, flexible, familiar, and excellent for analysis. The problem begins when a spreadsheet stops being a document and starts acting like an application.",
          "That usually happens gradually. One person creates a tracker. A second team adds columns. Someone adds formulas, filters, status colors, and a second tab. Then the file becomes the place where work is assigned, approved, scheduled, reconciled, and reported. At that point the business is no longer just using a spreadsheet. It is operating through one.",
        ],
      },
      {
        heading: "The warning signs",
        paragraphs: [
          "The strongest signal is not the number of rows. It is how much operational responsibility the spreadsheet has accumulated.",
        ],
        bullets: [
          "Several people edit the same file to coordinate active work.",
          "A status change in the sheet is expected to trigger someone else's next action.",
          "People are afraid to change formulas or columns because no one fully understands the dependencies.",
          "The file contains sensitive information but access is broad because the workflow needs it.",
          "Reporting requires manual cleanup before anyone trusts the numbers.",
          "There is no reliable audit trail explaining who changed a business-critical value and why.",
          "A missed update can delay a customer, payment, appointment, or operational handoff.",
        ],
      },
      {
        heading: "What should replace it?",
        paragraphs: [
          "Not every spreadsheet deserves custom software. Sometimes the right answer is better discipline, a database-backed no-code tool, a CRM feature that was never configured, or a modest integration between systems you already own.",
          "When the workflow is unique enough to justify a custom system, the goal should be to preserve what made the spreadsheet useful — visibility and flexibility — while adding the controls an operating process needs: permissions, validation, workflow states, notifications, history, integrations, and a dependable source of truth.",
        ],
      },
      {
        heading: "A useful first step",
        paragraphs: [
          "Before building anything, map what the spreadsheet is actually doing for the business. Identify who touches it, what decisions depend on it, where the data originates, what downstream systems consume it, and what breaks when it is wrong. That map is usually more valuable than immediately choosing a technology.",
          "The moment you understand the operating role of the spreadsheet, you can decide whether it should remain a spreadsheet, become a controlled workflow, or be replaced by a purpose-built internal tool.",
        ],
      },
    ],
  },
  {
    slug: "you-probably-do-not-need-another-saas-product",
    title: "You probably do not need another SaaS product",
    description: "Why the missing piece in many businesses is the operating layer between software products, not another subscription.",
    category: "Systems",
    readTime: "6 min read",
    published: "August 2026",
    takeaway: "Before replacing software, look closely at the handoffs between the systems you already have. The gap is often integration, shared workflow, or ownership — not missing features.",
    sections: [
      {
        heading: "Most businesses already have plenty of software",
        paragraphs: [
          "A typical business may have a CRM, accounting platform, website, forms, scheduling tool, email platform, analytics, spreadsheets, cloud storage, and one or more industry-specific applications. Each product can be perfectly reasonable on its own while the overall operating environment remains frustrating.",
          "That is because work does not respect software boundaries. A customer submits a form, becomes a lead, needs validation, moves into a sales process, creates an operational task, gets scheduled, receives service, generates an invoice, and appears in reporting. No single product necessarily owns that entire chain.",
        ],
      },
      {
        heading: "The cost lives in the gaps",
        paragraphs: [
          "The business pays for those gaps through repeated data entry, manual status checks, spreadsheet reconciliation, missed notifications, inconsistent definitions, and employees acting as human APIs between systems.",
          "Buying another application can make the stack larger without making the workflow better. In some cases it creates one more source of truth to reconcile.",
        ],
      },
      {
        heading: "Look for an operating layer",
        paragraphs: [
          "An operating layer is not necessarily a giant new platform. It can be a focused integration, a small internal application, an event-driven workflow, a shared data model, or a management interface that coordinates the parts of the process no existing product owns.",
          "The useful question is not, ‘Which product should replace everything?’ It is, ‘What information and decisions need to move reliably between the tools already in use?’",
        ],
        bullets: [
          "What system creates the original record?",
          "Which team owns each state change?",
          "What data must move downstream?",
          "Which exceptions require a person?",
          "What should happen automatically?",
          "What should management be able to see without asking someone to assemble it?",
        ],
      },
      {
        heading: "Replacement should be earned",
        paragraphs: [
          "Sometimes replacement is absolutely the right answer. A legacy platform may be unsupported, too expensive, impossible to integrate, or fundamentally mismatched with the business. But replacing a core system is disruptive and expensive, so the case for doing it should be stronger than frustration with a broken handoff.",
          "Connecting before replacing keeps the business focused on the operating problem instead of turning every process issue into a software migration project.",
        ],
      },
    ],
  },
  {
    slug: "what-to-automate-first",
    title: "What should a business automate first?",
    description: "A practical way to prioritize automation opportunities without starting with the flashiest technology.",
    category: "Automation",
    readTime: "7 min read",
    published: "August 2026",
    takeaway: "The best first automation is usually repetitive, rules-driven, high-frequency work with clear inputs, clear outputs, and a human fallback for exceptions.",
    sections: [
      {
        heading: "Start with friction, not technology",
        paragraphs: [
          "Automation projects go wrong when the conversation begins with a tool instead of a business process. ‘Where could AI help?’ is less useful than ‘Where are skilled employees repeatedly spending time on predictable work?’",
          "The goal is not to automate the maximum number of tasks. It is to remove the right friction without creating a fragile process that nobody understands.",
        ],
      },
      {
        heading: "The strongest first candidates",
        paragraphs: ["Good automation candidates tend to share a few characteristics."],
        bullets: [
          "The task happens frequently enough that small savings compound.",
          "The inputs are available digitally and can be validated.",
          "The decision rules are mostly explainable.",
          "The output has a clear destination or next action.",
          "Errors can be detected and routed for review.",
          "The business can measure whether the automation helped.",
        ],
      },
      {
        heading: "Do not automate a broken process verbatim",
        paragraphs: [
          "If a five-step manual process exists only because three systems do not share information, automating all five steps may preserve unnecessary complexity. First ask which steps should exist at all.",
          "A good automation project often includes process simplification, data cleanup, and clearer ownership before code is written. The fastest automation is frequently the one that removes a step rather than reproducing it faster.",
        ],
      },
      {
        heading: "Use humans for exceptions",
        paragraphs: [
          "Reliable automation does not pretend exceptions disappear. It recognizes them. A strong workflow handles the normal path automatically and creates a clear queue, alert, or review state when confidence is low or required information is missing.",
          "That design is especially important when AI is involved. AI can classify, summarize, extract, and recommend, but official business state should still be protected by validation, thresholds, review points, and auditability appropriate to the risk of the decision.",
        ],
      },
    ],
  },
  {
    slug: "how-to-know-if-you-need-custom-software",
    title: "How to know if you actually need custom software",
    description: "A decision framework for choosing between process changes, off-the-shelf software, integration, and a custom build.",
    category: "Buying software",
    readTime: "7 min read",
    published: "August 2026",
    takeaway: "Custom software makes sense when the workflow is strategically important, sufficiently unique, and costly enough that forcing it through generic tools creates ongoing operational drag.",
    sections: [
      {
        heading: "Custom software is not the default answer",
        paragraphs: [
          "Building software carries real cost. It must be designed, tested, secured, maintained, documented, and understood by the business. If an existing product solves the problem cleanly at a reasonable cost, buying it is often the better decision.",
          "The case for custom work becomes stronger when the process itself is part of how the business competes or operates differently, and when generic software repeatedly forces employees into workarounds.",
        ],
      },
      {
        heading: "Four questions to ask",
        paragraphs: [],
        bullets: [
          "Is this workflow important enough that improving it changes cost, capacity, customer experience, revenue, risk, or management visibility?",
          "Is the process genuinely different from what common software handles, or has the current product simply not been configured well?",
          "Will the system need to connect several existing tools or data sources in a way no single vendor owns?",
          "Can the business clearly describe who will use the system, what they need to accomplish, and how success will be measured?",
        ],
      },
      {
        heading: "Integration is often the middle path",
        paragraphs: [
          "The decision is not only ‘buy versus build.’ Many valuable projects sit in the middle. A company can keep its CRM, accounting platform, or industry system and build a focused layer that handles the unique workflow around it.",
          "That can reduce project risk because the custom portion stays narrow and the business continues using mature products for commodity capabilities such as billing, email, or identity.",
        ],
      },
      {
        heading: "Discovery should be able to say no",
        paragraphs: [
          "A credible discovery process should be allowed to conclude that custom software is unnecessary. Sometimes the correct recommendation is a configuration change, a small automation, better data governance, or a product the business did not know existed.",
          "That is why the first deliverable should often be clarity about the operating problem rather than a commitment to a large build.",
        ],
      },
    ],
  },
  {
    slug: "hidden-cost-of-copying-data-between-systems",
    title: "The hidden cost of employees copying data between systems",
    description: "Manual re-entry looks inexpensive because it is distributed across the day. In aggregate, it can become a major source of waste and operational risk.",
    category: "Integration",
    readTime: "6 min read",
    published: "August 2026",
    takeaway: "Manual data transfer is not just a labor cost. It creates delay, inconsistent state, duplicate records, error recovery, and uncertainty about which system should be trusted.",
    sections: [
      {
        heading: "Human APIs are everywhere",
        paragraphs: [
          "An employee receives information in one application, copies it into another, changes a status, sends an email, and updates a spreadsheet so another team knows the work is ready. None of those actions may take very long individually, which is why the cost is easy to ignore.",
          "Across hundreds or thousands of transactions, the business is paying skilled people to move information instead of using it. More importantly, every manual handoff creates another opportunity for delay or disagreement between systems.",
        ],
      },
      {
        heading: "The cost is larger than keystrokes",
        paragraphs: [
          "The visible cost is time. The less visible cost is operational uncertainty. Did the second system receive the update? Was the correct customer selected? Did someone overwrite a newer value? Which application is authoritative when they disagree?",
        ],
        bullets: [
          "Duplicate and mismatched records",
          "Delayed downstream work",
          "Status-chasing between teams",
          "Manual reconciliation before reporting",
          "Training burden for undocumented workarounds",
          "Customer-facing errors when one system is stale",
        ],
      },
      {
        heading: "Good integration includes ownership",
        paragraphs: [
          "Simply moving data is not enough. A durable integration defines which system owns each field or state, when synchronization occurs, how duplicates are handled, what happens when an API fails, and how someone can see and recover an exception.",
          "Those rules turn a technical connection into an operational workflow. Without them, automation can make bad data travel faster.",
        ],
      },
      {
        heading: "Measure the workflow before building",
        paragraphs: [
          "Estimate how often the manual handoff occurs, how long it takes, how often it fails, and what a failure costs. That creates a simple baseline for deciding whether an integration is worth doing and whether the finished project actually delivered value.",
        ],
      },
    ],
  },
  {
    slug: "build-vs-buy-custom-software",
    title: "Build vs. buy: when custom software earns its cost",
    description: "A practical comparison of buying software, integrating existing tools, and building a custom operational system.",
    category: "Strategy",
    readTime: "8 min read",
    published: "August 2026",
    takeaway: "The right answer is usually the smallest durable solution that improves the workflow: configure first, integrate second, and build custom where the business gains something meaningful from being different.",
    sections: [
      {
        heading: "Buying is powerful when the problem is common",
        paragraphs: [
          "Mature products are difficult to beat at common capabilities. Accounting, payroll, email delivery, payment processing, file storage, identity, and many CRM functions are examples where a specialized vendor can spread development and compliance costs across thousands of customers.",
          "If your process resembles the standard use case and the product can be configured to fit, buying is usually faster and cheaper than recreating the capability.",
        ],
      },
      {
        heading: "Custom work matters where your operating model is different",
        paragraphs: [
          "The economics change when the workflow cuts across multiple products, requires unusual business rules, or directly affects a capability that matters to the way the company operates. In those cases, repeated workarounds can become more expensive than owning a focused custom layer.",
          "Custom does not have to mean rebuilding the whole stack. The strongest architecture is often a thin operational system that connects mature products and owns only the pieces that are truly unique.",
        ],
      },
      {
        heading: "Compare total operating cost, not subscription price",
        paragraphs: [
          "A $200-per-month product can be expensive if eight employees spend hours every week compensating for its limitations. A custom system can also be expensive if the company underestimates support, hosting, security, and change management. Both sides of the decision need the full operating cost.",
        ],
        bullets: [
          "Software subscriptions and user licenses",
          "Implementation and migration",
          "Employee time spent on workarounds",
          "Error and rework cost",
          "Integration and reporting effort",
          "Maintenance, support, and future changes",
          "Opportunity cost when the workflow limits growth or capacity",
        ],
      },
      {
        heading: "Use a staged decision",
        paragraphs: [
          "A systems review or discovery phase can reduce the risk of making the decision too early. Map the current process, inventory the existing tools, identify the expensive handoffs, and determine what capabilities are commodity versus unique.",
          "From there, the answer may be configuration, a purchased product, an integration, a small internal tool, or a larger custom platform. The right strategy is the one that solves the business problem with the least unnecessary complexity.",
        ],
      },
    ],
  },
  {
    slug: "who-owns-a-system-after-launch",
    title: "Who owns a business system after launch?",
    description: "Why maintenance, onboarding, training, documentation, and roadmap ownership matter after custom software goes live.",
    category: "Operations",
    readTime: "7 min read",
    published: "August 2026",
    takeaway: "A production system needs an operating owner after launch. That ownership can sit internally, transfer through a documented handoff, or remain with a fractional systems partner — but it should never be ambiguous.",
    sections: [
      {
        heading: "Deployment is not the finish line",
        paragraphs: [
          "A system can be technically complete and still fail operationally. Users need access, administrators need to understand the controls, data needs to stay clean, integrations change, vendors update APIs, and the business discovers edge cases that were difficult to predict before launch.",
          "The most important post-launch question is therefore not simply who can fix a bug. It is who owns the responsibility for keeping the system aligned with the operating process it supports.",
        ],
      },
      {
        heading: "There are several valid ownership models",
        paragraphs: [
          "Some businesses have an internal engineering or IT team that can take full ownership after a documented handoff. Others have capable administrators but need occasional specialist help. Smaller organizations may need the original builder to remain involved because there is no full-time systems role internally.",
          "None of those models is automatically better. The risk comes from leaving ownership undefined and assuming someone will notice when documentation, permissions, integrations, or workflow rules drift out of date.",
        ],
        bullets: [
          "Who handles production incidents and unexpected failures?",
          "Who updates dependencies, integrations, and vendor API changes?",
          "Who onboards new administrators and users?",
          "Who decides whether a request is a bug, configuration issue, or new feature?",
          "Who maintains documentation and operating procedures?",
          "Who prioritizes the next phase of improvements?",
        ],
      },
      {
        heading: "A retainer should reserve capacity, not promise infinity",
        paragraphs: [
          "An ongoing systems relationship works best when the business knows what level of availability it is buying. A monthly retainer can reserve maintenance, improvement, training, or development capacity without pretending every possible request is included.",
          "The agreement should define recurring priorities, response expectations, what is included, how additional work is approved, and whether unused capacity rolls forward. That makes the relationship predictable for both sides.",
        ],
      },
      {
        heading: "Continuity has value when the context is expensive to relearn",
        paragraphs: [
          "The deeper a system becomes tied to business rules, integrations, exception handling, and operational history, the more expensive it is for a new person to rediscover that context. Keeping the original systems partner involved can reduce that repeated discovery cost while preserving the option for a future handoff.",
          "The goal is not lock-in. It is continuity with documentation, client access, and a clear exit path if the business eventually brings ownership in-house.",
        ],
      },
    ],
  },
  {
    slug: "how-to-phase-custom-software-project",
    title: "How to phase a custom software project without building half a product",
    description: "A practical way to divide a larger systems roadmap into useful releases that create value before the entire platform is finished.",
    category: "Delivery",
    readTime: "7 min read",
    published: "August 2026",
    takeaway: "A good phase is not an arbitrary slice of features. It is the smallest complete operating capability that can be used, measured, and learned from before the next investment decision.",
    sections: [
      {
        heading: "Phasing should reduce risk, not just spread invoices out",
        paragraphs: [
          "Large custom systems often contain several workflows, roles, integrations, reports, and future ideas. Trying to design and build everything at once increases the number of assumptions that must remain correct until launch.",
          "Phasing lowers that risk when each release creates a usable operating capability. The business can begin working in the system, discover real edge cases, and adjust the roadmap before later phases become expensive to change.",
        ],
      },
      {
        heading: "Start with the dependency chain",
        paragraphs: [
          "The first phase should establish the data and workflow that later capabilities depend on. That may mean a source-of-truth record, user roles, a core intake process, or the first reliable state transition between systems.",
          "Reporting, advanced automation, and AI are usually more useful after the underlying operating data is trustworthy. Building intelligence on top of unstable workflow state simply makes uncertainty more sophisticated.",
        ],
        bullets: [
          "Foundation: core records, roles, source of truth, and first useful workflow",
          "Operations: integrations, automation, validation, notifications, and exception handling",
          "Intelligence: reporting, prioritization, quality controls, and management visibility",
          "Expansion: additional teams, locations, workflows, or advanced capabilities",
        ],
      },
      {
        heading: "Each phase should be useful on its own",
        paragraphs: [
          "A phase that cannot be used until three more phases are complete is often just a milestone inside one large project. A useful phase should have a real user, a defined workflow, acceptance criteria, and an outcome the business can observe.",
          "That does not mean every phase needs to be independently profitable. It means the business should be able to validate that the architecture and operating assumptions are moving in the right direction.",
        ],
      },
      {
        heading: "Let production teach the roadmap",
        paragraphs: [
          "Once the first release is in use, the business will learn which edge cases matter, which reports are actually requested, which automation opportunities repeat, and which planned features are less important than expected.",
          "A phased roadmap should be strong enough to provide direction and flexible enough to absorb that evidence. The point is not to abandon planning. It is to make later planning better because the system is producing real information instead of relying only on assumptions.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
