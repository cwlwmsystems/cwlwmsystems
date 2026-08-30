# Cwlwm Systems Website

A production-ready Next.js customer-facing website for Cwlwm Systems, built to sell custom operational software, integrations, automation, internal tools, implementation, training, phased development, and ongoing systems partnership.

## What is included

### Sales and conversion
- Customer-facing homepage with founder-led positioning
- Problems I Solve page
- Solutions page with seven system/service categories
- Five generalized business case studies using a Before → System → Operational Outcome structure
- Engagements & Pricing page with project and retainer starting prices
- Fixed-price **Systems & Workflow Review — $750**
- Dedicated **Ongoing Systems Partnership** page
- Monthly retainer / fractional systems partner positioning
- Phased-development model for larger builds
- Implementation, onboarding, documentation, and training positioning
- Embedded 30-minute Calendly project-fit booking flow with branded confirmation redirect
- Industries page
- Approach page showing what happens from inquiry through launch, adoption, ongoing support, or handoff
- Trust & Ownership page covering access, handoff, lock-in, security, and project ownership in plain language
- About page with direct founder-led delivery positioning and good-fit / poor-fit qualification
- Project inquiry page with direct-email fallback
- Eight original Insights articles for search visibility and buyer education
- Testimonial component that remains hidden until real approved testimonials are added

### Lead capture
The inquiry form supports:
- General project inquiries
- 30-minute project-fit call bookings
- Systems & Workflow Review requests
- Automation & Integration
- Custom Internal Tool
- Operational Platform
- Ongoing Systems Partnership / Retainer
- Project or monthly budget qualification depending on the selected engagement
- Timeline qualification
- Optional preferred call times
- Native delivery through Resend with a pre-filled email fallback

### Legal and trust
- `/legal` — legal and policy hub
- `/terms` — website Terms of Service
- `/service-agreement` — standard client Service Agreement, including phased development and retainer-capacity terms
- `/privacy` — Privacy Policy
- `/cookies` — Cookie Policy
- `/acceptable-use` — Acceptable Use Policy
- `/data-processing` — Data Processing Terms
- `/subprocessors` — subprocessor disclosure
- `/billing-cancellation` — billing, retainer, and cancellation policy
- `/security` — Security Practices
- `/accessibility` — Accessibility Statement

### Technical / discoverability
- Responsive mobile navigation
- SEO metadata and canonical URLs
- Open Graph image
- Sitemap and robots.txt
- JSON-LD ProfessionalService schema
- Web manifest
- `llms.txt` endpoint with company, service, project pricing, retainer pricing, case-study, and insight summaries
- Basic security headers
- Cwlwm Systems logo and knot branding
- Georgia display typography with system fonts for body copy

## Public site architecture

- `/` — sales homepage
- `/solutions` — system and service categories
- `/problems` — common business problems Cwlwm Systems solves
- `/case-studies` — generalized system case studies
- `/case-studies/[slug]` — detailed system case studies
- `/pricing` — project engagements, retainers, phased development, and starting prices
- `/systems-review` — fixed-price Systems & Workflow Review
- `/ongoing-partnership` — maintenance, retainers, training, onboarding, phased development, and fractional systems partnership
- `/book` — embedded Calendly 30-minute project-fit call scheduler
- `/booking-confirmed` — branded post-booking confirmation page (noindex)
- `/industries` — where the system patterns apply
- `/approach` — delivery process, implementation, adoption, and operating principles
- `/trust` — ownership, access, security, handoff, and continuity principles
- `/insights` — buyer education and thought leadership
- `/insights/[slug]` — individual articles
- `/about` — company and founder-led delivery positioning
- `/contact` — project or retainer inquiry
- `/legal` — legal and policy hub

## Current published pricing

### Project engagements
- **Systems & Workflow Review:** $750 fixed
- **Automation & Integration:** from $2,500
- **Custom Internal Tool:** from $5,000
- **Operational Platform:** from $10,000
- General custom development positioning: most custom development engagements begin at **$2,500**

### Ongoing partnership starting points
- **System Care:** from $750/month
- **Ongoing Improvement:** from $1,500/month
- **Fractional Systems Partner:** from $2,500/month
- **Embedded Partnership:** custom

These are public starting points, not promises that every project or retainer fits the minimum. Client-specific pricing, recurring capacity, response expectations, additional work, and rollover rules are defined in the written proposal/SOW.

## Ongoing engagement model

The site now presents Cwlwm Systems as capable of supporting the full lifecycle:

**Systems Review → Build → Launch & Implement → Onboard & Train → Maintain → Improve → Expand**

A client can choose a documented handoff after launch or retain Cwlwm Systems for ongoing continuity. Retainers reserve defined recurring capacity and are not unlimited-work arrangements.


## Calendly booking flow

The `/book` page embeds the Cwlwm Systems Calendly event at `https://calendly.com/cwlwmsystems/30min`. The embed uses the Cwlwm brand palette:

- Forest Green `#02592D`
- Warm Cream `#F4F0E7`
- Charcoal `#252825`

When Calendly emits its `calendly.event_scheduled` event after a successful booking, the site redirects the visitor to `/booking-confirmed`. This redirect is handled by the website embed and does not require configuring a separate Calendly confirmation redirect.

If the Calendly event URL changes, update `components/CalendlyBooking.tsx`.

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
6. Test a normal inquiry, a `/book` fit-call request, and an ongoing-partnership inquiry.

## Testimonials

`lib/testimonials.ts` intentionally ships with an empty array. The public testimonial section renders only when approved real testimonials are added. Do not add fabricated quotes, customer names, or metrics.

## Positioning

Primary message:

> Make your business systems work together.

Supporting idea:

> Cwlwm Systems builds the operating layer between your people, processes, data, and software.

Ongoing partnership message:

> I can build the system, help your team adopt it, and stay involved as the business and platform evolve.

Brand line:

> Connected systems. Clearer operations.

## Important launch notes

- Confirm that all published project and retainer starting prices are the prices you actually want to honor before promoting the site.
- Decide how much monthly capacity each retainer level typically reserves before quoting the first retainer client.
- Define response-time expectations carefully; do not promise 24/7 or emergency support unless priced and operationally feasible.
- Replace the fallback Vercel URL with the final domain.
- Enable and test the contact form.
- Keep the Calendly event URL in `components/CalendlyBooking.tsx` current if the booking event changes.
- Review privacy/cookie policies whenever analytics, CRM tracking, session replay, advertising pixels, or embedded scheduling tools are added.
- Add customer-specific proof only with permission.
- Keep case studies generalized when the underlying implementation contains employer or client confidential information.

## Legal review before the first signed client

The legal pages are a practical baseline for a small custom-software and systems consultancy, but they are not a substitute for advice from a licensed attorney. Before relying on the Standard Service Agreement for paid client work, have counsel review the business structure, governing law, venue, liability caps, insurance needs, tax treatment, data obligations, recurring-service terms, and the exact services being sold.

For each client, the proposal/SOW should define the exact scope, fees, phases, milestones, payment schedule, acceptance criteria, third-party costs, implementation/training responsibilities, support or retainer capacity, response expectations, rollover rules, hosting responsibilities, data types, compliance requirements, and project-specific ownership terms.
