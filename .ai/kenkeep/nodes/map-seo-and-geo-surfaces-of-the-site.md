---
type: map
title: SEO and GEO surfaces of the site
description: >-
  Where search and AI-discovery files live: robots.ts, sitemap.ts,
  public/llms.txt, layout metadata and the JSON-LD graph in page.tsx.
tags:
  - seo
  - geo
  - structured-data
  - metadata
kk_schema_version: 3
kk_id: map-seo-and-geo-surfaces-of-the-site
kk_derived_from:
  - '5d216fca-f4a2-4fe8-9211-b6e4743dfb77:map:0'
kk_relates_to:
  - practice-contact-form-uses-netlify-forms
  - map-site-is-hosted-on-netlify
kk_depends_on: []
kk_confidence: high
---
The site is one page served at https://corilucas.ca, and its search and AI-discovery surfaces sit in a few files:

- `src/app/robots.ts` allows all crawlers, disallows `/__forms.html` (the hidden Netlify form stub) and points to the sitemap.
- `src/app/sitemap.ts` lists the single home URL.
- `public/llms.txt` summarises Cori's credentials, services, areas of focus and both clinics (addresses, phone numbers, booking links) for AI crawlers.
- `src/app/layout.tsx` holds the page metadata: `metadataBase`, canonical `/`, Open Graph and a `summary` Twitter card. The share image is the square `/images/logo.png`.
- `src/app/page.tsx` embeds one JSON-LD `@graph` built from the same `services` and `clinics` arrays that render the page: `WebSite`, `WebPage`, a `Person` for Cori, a practice `MedicalBusiness` (with `areaServed` towns and an `availableService` per treatment) and a `MedicalBusiness` per clinic. Every node has an absolute `https://corilucas.ca/#...` `@id`, and Cori's `worksFor` lists the practice and both clinics.

When changing services, clinics, phone numbers or credentials, check that `llms.txt` and the JSON-LD still match the visible page.

<!-- kk:related:start -->
# Related

- Related: [practice-contact-form-uses-netlify-forms](netlify/practice-contact-form-uses-netlify-forms.md)
- Related: [map-site-is-hosted-on-netlify](netlify/map-site-is-hosted-on-netlify.md)
<!-- kk:related:end -->

<!-- kk:citations:start -->
# Citations

[1] 5d216fca-f4a2-4fe8-9211-b6e4743dfb77:map:0
<!-- kk:citations:end -->
