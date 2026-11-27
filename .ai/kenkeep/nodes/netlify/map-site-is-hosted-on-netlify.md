---
type: map
title: Site is hosted on Netlify at corilucas.ca
description: >-
  Production runs on Netlify under corilucas.ca (DNS at Hover); deploy settings
  live in the Netlify dashboard, not the repo.
tags:
  - hosting
  - deployment
  - netlify
  - dns
kk_schema_version: 3
kk_id: map-site-is-hosted-on-netlify
kk_derived_from: []
kk_relates_to: []
kk_depends_on: []
kk_confidence: high
---
The production site is hosted on Netlify and served at the custom domain `corilucas.ca`. The domain is registered and its DNS is managed at Hover (nameservers `ns1/ns2.hover.com`), with the apex record pointing at Netlify's load balancer.

The repo contains no `netlify.toml` or other deploy config, so the build command, environment variables and domain settings are managed in the Netlify dashboard. DNS changes are made at Hover, not Netlify.
