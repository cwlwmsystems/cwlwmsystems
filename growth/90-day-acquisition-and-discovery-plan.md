# Cwlwm Systems — 90-day search and customer acquisition operating plan

Prepared: November 26, 2026. Owner: Cwlwm Systems. This is a playbook, not a statement that channels or profiles are already live.

## Objective and guardrails

Generate qualified website and systems project conversations without indiscriminate bulk messages. Keep independent company development, CRM, accounts and client data entirely separate from protocol80 and former employers. Do not market Zito Media's private SEO/AEO platform as a product owned by Cwlwm. Use authorized project examples only. Verify all information about prospects before sending a message.

Target two customer groups:
- **Track A (about 70% of prospecting):** independent retailers, service contractors, professional offices, community organizations and multi-location small businesses needing websites, ecommerce, brand visibility or ongoing technical care. Start with appropriate north-central and western Pennsylvania business communities; expand based on results.
- **Track B (about 30%):** distributors, field-service operators, growing service organizations and operations leaders who have manual handoffs, disconnected business software, fragmented data, insufficient reporting or unusual workflow requirements. Work remotely across the United States where appropriate.

## Website and search discovery checklist

### Technical baseline

- [ ] Confirm the live production deployment and SSL for https://cwlwmsystems.com/
- [ ] Confirm only one primary domain resolves as canonical and redirects are consistent.
- [ ] Test /robots.txt and /sitemap.xml over HTTP with a 200 response.
- [ ] Confirm /services and the five service-detail pages are present in the sitemap.
- [ ] Verify each canonical URL renders on its own page and that no unrelated page canonically points to the homepage.
- [ ] Verify robots, HTTP status, HTML title, meta description, H1, links and generated JSON-LD on actual rendered service pages.
- [ ] Check mobile Core Web Vitals, forms, Calendly availability, keyboard navigation and contrast.
- [ ] Submit or update the sitemap in the company's Google Search Console property.
- [ ] Submit or update the sitemap in Bing Webmaster Tools; configure IndexNow only after validating the correct key and implementation.
- [ ] Inspect the homepage, five commercial service pages, selected work and contact URL in Google's URL Inspection tool.
- [ ] Verify GA4 page views, click events, Search Console and basic reporting. Distinguish CTA clicks from actually completed bookings and qualified leads.
- [ ] Verify business identity, founder attribution and project-status accuracy across site and external profiles.
- [ ] Compare GA4 organic sessions, Search Console impressions/clicks and actual qualified inquiries by landing page monthly.

### AI search / AEO / GEO

SEO, AEO and GEO share the fundamentals of useful, accurate, accessible, crawlable content. No guarantee of placement in AI results or special ranking benefit from llms.txt. Treat llms.txt as optional human/agent-readable information, never as a replacement for HTML content.

- [ ] Maintain factual, buyer-useful service pages with problem descriptions, process, deliverables, FAQs and relevant projects.
- [ ] Make the founder, business offering, service area and contact path easy to verify.
- [ ] Use Service and Organization JSON-LD that matches rendered content; don't invent reviews, office addresses, business ratings, staff or credentials.
- [ ] Keep public GitHub work showcases accurate and clearly separated from confidential former-employer projects.
- [ ] Publish original, meaningful explainers answering buyer questions with examples from first-hand experience.
- [ ] Test question-based discovery manually in Google, Bing and relevant AI experiences; record observations with dates and avoid converting unsupported mentions into claimed rankings.
- [ ] If eligible for a Google Business Profile, verify real-world in-person service eligibility before claiming or creating it. Online-only companies are not eligible solely for local ranking.

### Local and regional distribution

Create/claim only accurate, eligible entries:
1. Google Business Profile — if eligibility is confirmed.
2. Bing Places for Business — if eligible and public business details are verifiable.
3. Apple Business Connect — if the business meets the product's requirements.
4. LinkedIn founder professional profile and Cwlwm company page.
5. GitHub organization and pinned independent repositories; use portfolio links and clear ownership notes.
6. Appropriate local chambers, business associations and verified directories when membership or listing rules are met.
7. Selected industry communities, partner introductions and legitimate local business groups. Avoid low-quality mass directory submissions.

Keep one consistent name, domain, contact email, public social accounts and service descriptions. Publish a physical address only if business-address disclosure is appropriate; never manufacture one. Directory links should provide audience value, not be bought solely for SEO.

## Outreach workflow

### Qualification

Research the actual website, industry, location, public decision-maker and at least one specific, verifiable pain point or expansion trigger. Priority scoring: clear business problem (30), identifiable buyer (20), likely budget/fit (20), relevant proof (15), actual trigger/timing (15).

### Contact sequence

- Day 0: send a personalized, relevant message (or appropriate phone/LinkedIn introduction) with one verified observation and one easy question.
- Day 4–5: one useful follow-up that adds a specific example, question or resource.
- Day 10–12: one polite close-the-loop email; stop active outreach without a positive signal.
- 30–60 days later: reconnect only with a genuine new reason and absent an opt-out.
- Record every touch and suppression in the CRM. No scraped personal data dumps or indiscriminate automated blasting.

Comply with applicable email and privacy rules, including truthful sender/subject details, valid postal address, clear opt-out method and timely honoring of opt-outs for commercial emails. Commercial B2B messages can fall under CAN-SPAM. A contact link alone does not satisfy the legal obligations.

### Track A sample

Subject: Question about [Business Name]'s website

Hi [First Name],

I'm Kasey, founder of Cwlwm Systems. I build websites, ecommerce experiences and connected business systems.

I was looking at [specific page] and noticed [one factual, useful observation]. Is improving that part of the customer experience on your radar?

I recently worked on [relevant approved project], where the main focus was [accurate one-sentence scope]. If you're considering improvements, I'd be glad to compare practical options.

Kasey
Cwlwm Systems — cwlwmsystems.com

[Include complete required commercial-email identification and opt-out information in the actual outbound message.]

### Track B sample

Subject: Question about [Company]'s [specific workflow]

Hi [First Name],

I'm Kasey, founder of Cwlwm Systems. I design custom business applications and integrations that remove manual handoffs.

I noticed [public company trigger]. I'm curious how your team currently manages [a specific process] between [known or likely systems; do not claim to know their private stack].

If that's a recurring friction point, I can share how I usually evaluate an integration versus a focused internal tool.

Kasey
Cwlwm Systems — cwlwmsystems.com

[Include complete required commercial-email identification and opt-out information in the actual outbound message.]

### Referral introduction

Subject: Possible technical partnership — Cwlwm Systems

Hi [First Name],

I'm Kasey, founder of Cwlwm Systems. I build websites, ecommerce platforms, custom applications and system integrations.

I'm meeting regional professionals who occasionally encounter clients needing technical work outside their regular services. If that happens with your clients, I'd enjoy learning where my work might complement yours.

Would a brief introduction be worthwhile?

Kasey
Cwlwm Systems — cwlwmsystems.com

## Cwlwm-owned CRM — independent custom build

Cwlwm Systems will build and operate **its own CRM**, not use HubSpot to manage its sales pipeline. This CRM must use separate infrastructure, authentication and data from all current and former employers. It is planned, not yet deployed. Until its minimum viable version is operational, use a secure, access-controlled interim prospect register with the same data fields and opt-out safeguards; migrate it only with validation and deduplication.

### Minimum viable data model

- **Accounts (companies):** stable account ID, legal/display name, website, location/market, industry, acquisition track (Digital/Systems/Partner), observed business requirement, source URL, priority, research timestamp, ownership.
- **People (contacts):** stable contact ID, account ID, name, role, verified business contact details, source/provenance, communication preferences, consent where applicable, suppression/opt-out status and date.
- **Opportunities:** stable opportunity ID, linked account and primary contact, actual expressed requirement, service category, stage, anticipated value (if supported), expected close date, source campaign and next action. Do not create an opportunity merely because a company appears in a public directory.
- **Interactions:** timestamped outbound emails, calls, replies, meetings, referrals, notes and outcomes; associate with the correct account, person and opportunity.
- **Tasks:** assigned owner, due date, state, priority, related record and follow-up type. Keep a reliable next-action queue.
- **Campaigns and attribution:** acquisition track, channel, first-touch source and optional UTM information; preserve source history instead of overwriting it.
- **Suppressions:** permanent or policy-governed do-not-contact records and reason/date, checked before every outbound action.

### MVP operational flow

Researching → Ready for outreach → Contacted → Replied / Meeting → Nurture or Do not contact. Once a specific business opportunity is qualified: Qualified Opportunity → Discovery Scheduled → Discovery Completed → Scoping → Proposal Sent → Decision → Closed Won / Closed Lost.

Represent prospect status and opportunity stage separately. A reply is not a deal; a website visit is not consent; a closed-lost deal is not automatically a do-not-contact instruction.

### Engineering guardrails

Start with account/contact/opportunity associations, structured activities, next-step tasks, deduplication rules, and suppression enforcement. Secure authentication, authorization, least-privilege access, encrypted transport, backups, and an audit trail are baseline requirements, not future extras. Keep personal data minimized and honor applicable privacy/marketing rules. Import external research with explicit provenance and verify business contact data.

Only after the MVP works should Cwlwm consider controlled Gmail/Calendar integration, website form ingestion, scheduling events, analytics, dashboards, and optional outreach automation. Email delivery must include appropriate sender identification, applicable opt-out handling, throttling, and a suppression check. Do not implement indiscriminate bulk mailing.

**Initial reporting:** researched accounts, personalized first contacts, replies, qualified meetings held, proposals, wins, referral introductions and founder hours invested. Segment by acquisition track and campaign, and measure from actual records rather than estimates.

### Reporting

Weekly: researched accounts, personalized first contacts, replies, qualified meetings held, proposals, wins, referral introductions and founder hours invested.

Calculate positive reply rate as positive replies / actual first contacts; meeting rate as meetings held / positive replies; win rate as wins / resolved decisions. Separate Track A and Track B. Qualifying evidence is more important than arbitrary traffic volume.

## Weekly operating cadence (starting targets)

| Week | Research | Personalized first contacts | Partner introductions | Content / technical |
|---|---:|---:|---:|---|
| 1 | 20 | 5 | 2 | Fix search foundations, verify analytics and profiles |
| 2 | 20 | 10 | 2 | Publish project proof and service FAQs |
| 3 | 20 | 12 | 2 | Review SEO queries and message response |
| 4 | 20 | 12 | 2 | Improve the strongest page or offer |
| 5–8 | 15–20/week | 12–15/week | 1–2/week | Publish one substantive example/answer weekly |
| 9–13 | 15–20/week | 12–15/week | 1–2/week | Shift toward proven segments and conversion paths |

These are effort targets, not forecasts. Pause new prospecting if project delivery capacity is constrained.

## Decision points at 30, 60 and 90 days

- **Day 30:** Which segment answered? Which observed problems started real conversations? Are the site pages indexed? Is the booking flow working?
- **Day 60:** Which offer turns calls into paid scoping or proposals? Which referral partners generate useful introductions? What is the delivery capacity?
- **Day 90:** What are actual signed fees, delivery margin, founder hours, and repeatable sources? Focus the next quarter on two or fewer proven entry offers.

## Scope boundaries

Never claim that paid advertising, directory registrations, Google/Bing accounts, or email outreach have been completed unless verified in the provider account. GitHub changes alone do not submit a sitemap, create a listing, access Search Console, send a message or win a lead.
