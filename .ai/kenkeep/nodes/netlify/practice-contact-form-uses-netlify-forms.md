---
type: practice
title: Contact form submits to Netlify Forms via a hidden static form
description: >-
  The contact form posts url-encoded data to /__forms.html; that static file
  registers the form with Netlify. Field names must stay in sync between the
  two files, and form detection must be enabled in the Netlify dashboard.
tags:
  - forms
  - netlify
  - contact
  - testimonials
kk_schema_version: 3
kk_id: practice-contact-form-uses-netlify-forms
kk_derived_from: []
kk_relates_to:
  - map-site-is-hosted-on-netlify
kk_depends_on: []
kk_confidence: high
---
The site has no backend. The contact form (`src/app/components/ContactForm.tsx`, a client component) is handled by Netlify Forms.

Netlify discovers forms by scanning static HTML at deploy time, and Next.js App Router pages are not emitted as static HTML, so `public/__forms.html` holds a hidden copy of the form (`name="contact"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`) purely to register it. The React form POSTs `application/x-www-form-urlencoded` data to `/__forms.html` with a hidden `form-name=contact` field.

Rules that follow from this:

- Any field added, renamed or removed in `ContactForm.tsx` must be mirrored in `public/__forms.html`, or Netlify silently drops the field.
- Never put `netlify` / `data-netlify` attributes on the React form itself. `@netlify/plugin-nextjs` v5+ fails the build if it sees them without a matching static form, and they do nothing in SSR output anyway.
- Form detection is a one-time dashboard switch (Site configuration → Forms → Enable form detection) and submission email notifications are configured there too. None of this lives in the repo.
- The honeypot field `bot-field` is the only spam protection. Netlify's free tier allows 100 submissions/month.

The form has a topic selector. Choosing "Share a testimonial" reveals a publication notice, a required consent checkbox (`publish-consent`) and a credit preference (`credit-as`). Testimonials are not auto-published anywhere; they arrive as ordinary submissions in the Netlify dashboard for Cori to review.

Publishing guidance (checked against the ATCMANS Bylaws and Governance, Nov 2025 edition, which contains the Code of Ethics): ATCMANS has no rule on testimonials. The relevant constraints are Code of Ethics items 11 and 14: members must not advertise or promote unrealistic treatment outcomes or absolute claims of cure, and public information must be fair, accurate and objective. So when choosing testimonials to publish, skip or trim any that claim a cure or guarantee a result. Acupuncture is not a regulated profession in Nova Scotia, so no statutory college rules apply; the consent checkbox is what makes publication of a client's words defensible under privacy law.
