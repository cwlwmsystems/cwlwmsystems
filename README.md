# Cwlwm Systems Website

A production-ready Next.js customer-facing website for Cwlwm Systems, built to sell custom operational software, integrations, automation, internal tools, and systems consulting.

## What is included

### Sales and conversion
- Customer-facing homepage with founder-led positioning
- Problems I Solve page
- Solutions page with six system categories
- Five generalized business case studies using a Before → System → Operational Outcome structure
- Engagements & Pricing page with published starting prices
- Fixed-price **Systems & Workflow Review — $750**
- 20-minute project-fit call request flow
- Industries page
- Approach page showing what happens from inquiry through handoff
- Trust & Ownership page covering access, handoff, lock-in, security, and project ownership in plain language
- About page with direct founder-led delivery positioning and good-fit / poor-fit qualification
- Project inquiry page with direct-email fallback
- Six original Insights articles for search visibility and buyer education
- Testimonial component that remains hidden until real approved testimonials are added

### Lead capture
The inquiry form supports:
- General project inquiries
- 20-minute project-fit call requests
- Systems & Workflow Review requests
- Automation & Integration
- Custom Internal Tool
- Operational Platform
- Budget and timeline qualification
- Optional preferred call times
- Native delivery through Resend with a pre-filled email fallback

### Legal and trust
- `/legal` — legal and policy hub
- `/terms` — website Terms of Service
- `/service-agreement` — standard client Service Agreement
- `/privacy` — Privacy Policy
- `/cookies` — Cookie Policy
- `/acceptable-use` — Acceptable Use Policy
- `/data-processing` — Data Processing Terms
- `/subprocessors` — subprocessor disclosure
- `/billing-cancellation` — billing and cancellation policy
- `/security` — Security Practices
- `/accessibility` — Accessibility Statement

### Technical / discoverability
- Responsive mobile navigation
- SEO metadata and canonical URLs
- Open Graph image
- Sitemap and robots.txt
- JSON-LD ProfessionalService schema
- Web manifest
- `llms.txt` endpoint with company, service, pricing, case-study, and insight summaries
- Basic security headers
- Cwlwm Systems logo and knot branding
- Georgia display typography with system fonts for body copy

## Public site architecture

- `/` — sales homepage
- `/solutions` — system and service categories
- `/problems` — common business problems Cwlwm Systems solves
- `/case-studies` — generalized system case studies
- `/case-studies/[slug]` — detailed system case studies
- `/pricing` — engagement models and starting prices
- `/systems-review` — fixed-price Systems & Workflow Review
- `/book` — request a 20-minute project-fit call
- `/industries` — where the system patterns apply
- `/approach` — delivery process and operating principles
- `/trust` — ownership, access, security, handoff, and lock-in principles
- `/insights` — buyer education and thought leadership
- `/insights/[slug]` — individual articles
- `/about` — company and founder-led delivery positioning
- `/contact` — project inquiry
- `/legal` — legal and policy hub

## Current published pricing

- **Systems & Workflow Review:** $750 fixed
- **Automation & Integration:** from $2,500
- **Custom Internal Tool:** from $5,000
- **Operational Platform:** from $10,000
- General custom development positioning: most custom development engagements begin at **$2,500**

These are public starting points, not promises that every project fits the minimum. Client-specific pricing is defined in the written proposal/SOW.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Before deploying, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Create or update the GitHub repository for this folder.
2. In Vercel, import the repository as its own project.
3. Vercel should detect **Next.js** automatically.
4. Deploy once.
5. Add the production URL as `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables**.
6. Redeploy so canonical URLs, sitemap, robots.txt, and social metadata use the correct production URL.

Example:

```text
NEXT_PUBLIC_SITE_URL=https://cwlwmsystems.com
```

Until that variable is set, the project uses `https://cwlwm-systems.vercel.app` as its metadata fallback.

## Contact form setup

The public email remains `cwlwmsystems@gmail.com`.

The site can send inquiries directly through Resend. Without Resend configured, the form preserves the entered information and offers a pre-filled email fallback.

### Enable native form delivery

1. Create a Resend account.
2. Verify the domain used for Cwlwm Systems.
3. Create an API key.
4. Add these Vercel environment variables:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=cwlwmsystems@gmail.com
CONTACT_FROM_EMAIL=Cwlwm Systems <website@yourdomain.com>
```

5. Redeploy.
6. Test a normal inquiry and a `/book` fit-call request.

## Testimonials

`lib/testimonials.ts` intentionally ships with an empty array. The public testimonial section renders only when approved real testimonials are added. Do not add fabricated quotes, customer names, or metrics.

Example structure:

```ts
{
  quote: "Approved client quote",
  name: "Client Name",
  role: "Operations Director",
  company: "Client Company"
}
```

## Positioning

Primary message:

> Make your business systems work together.

Supporting idea:

> Cwlwm Systems builds the operating layer between your people, processes, data, and software.

Brand line:

> Connected systems. Clearer operations.

## Important launch notes

- Confirm that the published starting prices are the prices you actually want to honor before promoting the site.
- Replace the fallback Vercel URL with the final domain.
- Enable and test the contact form.
- If you later connect Calendly, Cal.com, SavvyCal, or another scheduling platform, `/book` can be changed from a call-request form to live availability.
- Review the privacy/cookie policies whenever analytics, CRM tracking, session replay, advertising pixels, or embedded scheduling tools are added.
- Add customer-specific proof only with permission.
- Keep case studies generalized when the underlying implementation contains employer or client confidential information.

## Legal review before the first signed client

The legal pages are a practical baseline for a small custom-software and systems consultancy, but they are not a substitute for advice from a licensed attorney. Before relying on the Standard Service Agreement for paid client work, have counsel review the business structure, governing law, venue, liability caps, insurance needs, tax treatment, data obligations, and the exact services being sold.

For each client, the proposal/SOW should define the exact scope, fees, milestones, payment schedule, acceptance criteria, third-party costs, support period, hosting responsibilities, data types, compliance requirements, and project-specific ownership terms.
