# Cwlwm Systems Website

A production-ready Next.js site for Cwlwm Systems, designed as a customer-facing company site rather than a personal portfolio.

## What is included

- Customer-facing homepage and positioning
- Solutions page with six service categories
- Five generalized business case studies
- Industry/application page
- Approach / engagement model page
- About / Cwlwm brand story
- Project inquiry page with direct-email fallback
- Optional native contact-form email delivery through Resend
- Privacy policy
- Responsive mobile navigation
- SEO metadata, canonical URLs, Open Graph image, sitemap, robots.txt, JSON-LD, web manifest
- `llms.txt` endpoint with a concise AI-readable company and service summary
- Basic security headers
- Cwlwm Systems logo and knot branding
- No client names, employer-specific terminology, fake testimonials, or invented performance claims

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

1. Create a new GitHub repository for this folder and push the files.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect **Next.js** automatically.
4. Deploy once.
5. Add the production URL as `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables**.
6. Redeploy so canonical URLs, sitemap, robots.txt, and social metadata use the correct production URL.

Example:

```text
NEXT_PUBLIC_SITE_URL=https://cwlwmsystems.com
```

Until you set this variable, the project uses `https://cwlwm-systems.vercel.app` as its metadata fallback.

## Contact form setup

The site always displays the direct contact email `cwlwmsystems@gmail.com`.

The project inquiry form can also send directly from the website through Resend. Without Resend configured, the form preserves the entered information and presents a pre-filled email fallback instead of silently failing.

### To enable native form delivery

1. Create a Resend account.
2. Add and verify the domain you will use for Cwlwm Systems.
3. Create an API key.
4. Add these Vercel environment variables:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=cwlwmsystems@gmail.com
CONTACT_FROM_EMAIL=Cwlwm Systems <website@yourdomain.com>
```

`CONTACT_FROM_EMAIL` must use a sender/domain your email provider has verified.

5. Redeploy the site.
6. Submit a test inquiry and verify that the message arrives and Reply uses the customer's email address.

## Recommended launch order

1. Deploy to a temporary Vercel URL.
2. Review every page on desktop and mobile.
3. Connect the project inquiry form.
4. Buy/connect the Cwlwm Systems domain.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
6. Redeploy.
7. Test the form again on the production domain.
8. Submit the sitemap URL to Google Search Console and Bing Webmaster Tools after the domain is live.

## Content architecture

- `/` — sales homepage
- `/solutions` — what Cwlwm Systems builds
- `/case-studies` — generalized system case studies
- `/case-studies/[slug]` — detailed case study pages
- `/industries` — where the system patterns apply
- `/approach` — process and engagement models
- `/about` — company positioning and brand story
- `/contact` — project inquiry
- `/privacy` — privacy policy

## Positioning

Primary message:

> Make your business systems work together.

Supporting idea:

> Cwlwm Systems builds the operating layer between your people, processes, data, and software.

Brand line:

> Connected systems. Clearer operations.

## Notes before public launch

- Replace the fallback Vercel URL with your final domain.
- Enable the contact form if you want form submissions without opening an email client.
- Review the privacy policy against the exact analytics, CRM, scheduling, or tracking tools you add later.
- If you add analytics, advertising pixels, a CRM form, a scheduling widget, or cookies, update the privacy policy accordingly.
- Do not publish client/employer names, proprietary screenshots, credentials, internal data, or private implementation details unless you have permission.
