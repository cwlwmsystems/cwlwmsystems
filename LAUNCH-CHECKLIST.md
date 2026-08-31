# Cwlwm Systems — Professional Launch Checklist

## Brand and commercial positioning
- [ ] Confirm the final company domain and spelling everywhere.
- [ ] Confirm `kasey@cwlwmsystems.com` is the public inquiry email you want to use.
- [ ] Confirm the published project pricing is commercially acceptable:
  - [ ] Systems & Workflow Review — $750 fixed
  - [ ] Automation & Integration — from $2,500
  - [ ] Custom Internal Tool — from $5,000
  - [ ] Operational Platform — from $10,000
- [ ] Confirm the published ongoing-partnership starting points:
  - [ ] System Care — from $750/month
  - [ ] Ongoing Improvement — from $1,500/month
  - [ ] Fractional Systems Partner — from $2,500/month
  - [ ] Embedded Partnership — custom
- [ ] Decide the typical monthly capacity you are willing to reserve at each retainer level.
- [ ] Decide how additional work beyond reserved capacity will be priced.
- [ ] Decide whether unused monthly capacity can roll over; document it consistently in SOWs.
- [ ] Define realistic response expectations. Avoid promising 24/7 or emergency support unless specifically priced and operationally sustainable.
- [ ] Review all case studies for anything confidential.
- [ ] Add real client names, metrics, screenshots, and testimonials only with permission.

## Vercel
- [ ] Push the final project to GitHub.
- [ ] Create/update the dedicated Vercel project.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://cwlwmsystems.com`.
- [ ] Confirm Production deployment is green.
- [ ] Test `/sitemap.xml`, `/robots.txt`, and `/llms.txt`.
- [ ] Test the mobile menu and all major CTA buttons.
- [ ] Test `/ongoing-partnership` on desktop and mobile.
- [ ] Remove any obsolete `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, or `CONTACT_FROM_EMAIL` environment variables if they are still present.

## Lead capture and scheduling
- [ ] Confirm the `/contact` page loads the embedded Calendly scheduler.
- [ ] Confirm the `/book` page loads the embedded Calendly scheduler.
- [ ] Confirm the direct email link on `/contact` opens `kasey@cwlwmsystems.com`.
- [ ] Confirm the Calendly widget loads with the Cwlwm brand colors.
- [ ] Complete a real/test Calendly booking and confirm the site redirects to `/booking-confirmed`.
- [ ] Confirm Calendly sends the expected confirmation/calendar invitation to the invitee.
- [ ] Confirm the booking appears on the connected Cwlwm Systems Google Calendar.
- [ ] Confirm Calendly is connected to the intended HubSpot account/workflow.
- [ ] Review the Calendly questions that prospects complete before booking.

## Domain and email
- [ ] Connect the custom domain in Vercel.
- [ ] Confirm HTTPS is active.
- [ ] Confirm `kasey@cwlwmsystems.com` is the public business email.
- [ ] Configure and verify SPF, DKIM, and DMARC for domain-based email.
- [ ] Confirm Google Workspace mail delivery works in both directions.

## Search and discoverability
- [ ] Add the domain to Google Search Console.
- [ ] Add the domain to Bing Webmaster Tools.
- [ ] Submit `/sitemap.xml`.
- [ ] Verify social sharing previews on LinkedIn and Facebook.
- [ ] Review all Insights articles and publish only the ones you are comfortable attaching to the company brand.
- [ ] Add new Insights content over time based on real client questions instead of publishing filler for volume.
- [ ] Create/claim a Google Business Profile only if the business is eligible and local visibility matters.

## Conversion review
- [ ] Read the homepage as a first-time business owner and verify these questions are answered quickly:
  - [ ] What does Cwlwm Systems do?
  - [ ] Is this relevant to a business like mine?
  - [ ] What kinds of problems does it solve?
  - [ ] What does it roughly cost?
  - [ ] Can Cwlwm stay involved after launch?
  - [ ] Why should I trust one person to build and maintain it?
  - [ ] What happens after I make contact?
- [ ] Test all Pricing page CTAs.
- [ ] Test all retainer/ongoing-partnership CTAs.
- [ ] Test the Systems Review page CTA.
- [ ] Test the Trust & Ownership links.
- [ ] Confirm no public section implies a larger team or uses first-person plural company language.

## Payments
- [ ] Confirm the Systems & Workflow Review Stripe Payment Link is active.
- [ ] Confirm successful Stripe checkout redirects to `https://cwlwmsystems.com/systems-review-confirmed?session_id={CHECKOUT_SESSION_ID}`.
- [ ] Confirm Stripe public business/support email uses the Cwlwm Systems domain email.
- [ ] Confirm the checkout and receipt business details are accurate.
- [ ] Decide whether explicit Terms of Service acceptance should be enabled for the Systems Review checkout.

## Delivery model
- [ ] Create a reusable proposal/SOW template for fixed-price projects.
- [ ] Create a reusable phased-development SOW template.
- [ ] Create a reusable monthly retainer SOW template.
- [ ] Define what counts as maintenance versus a new feature.
- [ ] Define how new phase authorization works.
- [ ] Define onboarding/training deliverables you can realistically provide.
- [ ] Create a basic administrator handoff checklist.
- [ ] Create a basic user-training checklist.
- [ ] Decide whether recorded training sessions or written SOPs are included or separately priced.
- [ ] Decide how you will track retainer backlog, monthly priorities, completed work, and remaining capacity.

## Testimonials and proof
- [ ] Leave `lib/testimonials.ts` empty until a real client approves a quote.
- [ ] After the first client project, request permission for a specific outcome-focused testimonial.
- [ ] Add measurable outcomes to case studies only when they are accurate and publishable.
- [ ] Prefer concrete proof such as time saved, steps removed, error reduction, capacity improved, or reporting automated over generic praise.

## Scheduling
- [ ] Keep the public Calendly event availability aligned with the hours you actually want to offer prospects.
- [ ] Confirm the `/contact` and `/book` embeds and `/booking-confirmed` redirect after any Calendly event or account changes.
- [ ] Review buffers, minimum notice, reminders, and maximum bookings per day in Calendly.

## Legal / contracting
- [ ] Read every page under `/legal` and confirm it matches how you plan to sell and deliver services.
- [ ] Have a licensed attorney review the Standard Service Agreement before relying on it for the first paid client engagement.
- [ ] Specifically review the phased-development, recurring-retainer, reserved-capacity, rollover, cancellation, and support language.
- [ ] Decide whether contracts need a specific governing-law, venue, or arbitration clause.
- [ ] Confirm the default 14-day invoice term matches how you want to bill clients.
- [ ] Decide whether recurring retainers are invoiced in advance or arrears and state it in each SOW.
- [ ] Confirm the default IP model: client owns project-specific paid deliverables; Cwlwm Systems retains reusable background technology and know-how.
- [ ] Use a project-specific proposal/SOW for scope, fees, phases, milestones, acceptance criteria, third-party costs, support, retainer capacity, response expectations, onboarding/training, data types, and special compliance requirements.
- [ ] Update `/privacy` and `/cookies` before enabling new analytics, advertising pixels, session replay, CRM tracking, or other non-essential tracking.
- [ ] Identify project-specific subprocessors in the SOW when they will materially process client personal data.
- [ ] Do not claim SOC 2, ISO 27001, HIPAA compliance, PCI compliance, or another certification unless it is actually applicable and documented.
