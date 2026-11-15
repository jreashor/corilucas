---
type: practice
title: Verified work merges straight to main without preview deploys
description: >-
  Work verified locally (build, lint, browser check) is committed and merged to
  main directly; no Netlify deploy previews or staging step.
tags:
  - workflow
  - deployment
  - git
  - netlify
kk_schema_version: 3
kk_id: practice-verified-work-merges-straight-to-main-without-preview-deploys
kk_derived_from:
  - '3ddeeb5c-566a-4402-8367-03820d2de3ef:practice:0'
kk_relates_to:
  - map-site-is-hosted-on-netlify
kk_depends_on: []
kk_confidence: medium
---
For this site, work that has been verified locally (build, lint and a browser check) is committed and merged straight to `main`. Netlify deploys `main`, and no deploy-preview or staging step is added first.

The reason is risk: the site is low traffic and a mistake is cheap to fix, so a preview round-trip costs more than it protects.

<!-- kk:related:start -->
# Related

- Related: [map-site-is-hosted-on-netlify](map-site-is-hosted-on-netlify.md)
<!-- kk:related:end -->

<!-- kk:citations:start -->
# Citations

[1] 3ddeeb5c-566a-4402-8367-03820d2de3ef:practice:0
<!-- kk:citations:end -->
