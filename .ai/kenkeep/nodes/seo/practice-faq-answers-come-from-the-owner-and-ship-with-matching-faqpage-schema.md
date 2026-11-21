---
type: practice
title: FAQ answers come from the owner and ship with matching FAQPage schema
description: >-
  Cori writes the FAQ answers; the home-page FAQ and its FAQPage JSON-LD must
  carry identical text.
tags:
  - faq
  - seo
  - geo
  - structured-data
  - content
kk_schema_version: 3
kk_id: practice-faq-answers-come-from-the-owner-and-ship-with-matching-faqpage-schema
kk_derived_from: []
kk_relates_to:
  - map-seo-and-geo-surfaces-of-the-site
kk_depends_on: []
kk_confidence: high
---
The owner writes the FAQ answers herself; the questions are only suggested, and answers are never drafted for her. Once she supplies them, the FAQ is a section on the home page (`src/app/page.tsx`) with a matching `FAQPage` node added to the existing JSON-LD `@graph`.

The visible text and the schema must match word for word, because search engines treat markup that differs from the visible page as misleading. The FAQ stays on the single home page: the owner declined dedicated per-location and per-service pages, so it is not split across extra routes.

<!-- kk:related:start -->
# Related

- Related: [map-seo-and-geo-surfaces-of-the-site](map-seo-and-geo-surfaces-of-the-site.md)
<!-- kk:related:end -->
