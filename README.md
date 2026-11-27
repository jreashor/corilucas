# corilucas.ca

Website for Cori Lucas R.Ac, a Registered Acupuncturist in Halifax and Hammonds Plains, Nova Scotia. It is a single-page [Next.js](https://nextjs.org) site (App Router, Tailwind CSS) with booking links for two clinics and a contact form.

## Getting started

Use the Node version in `.nvmrc` (24) and pnpm (the version is pinned in `package.json`, so Corepack will pick it up):

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The page lives in `src/app/page.tsx` and updates as you edit it.

Other scripts:

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # ESLint
```

## Project layout

- `src/app/page.tsx` — the home page, plus the `services` and `clinics` data and the JSON-LD graph built from them.
- `src/app/components/` — `ClinicCard` (booking card) and `ContactForm`.
- `src/app/layout.tsx` — site metadata, Open Graph and Twitter card.
- `src/app/robots.ts` and `src/app/sitemap.ts` — crawler rules and sitemap.
- `public/llms.txt` — summary of the site for AI crawlers.
- `public/__forms.html` — hidden static form that registers the contact form with Netlify.
- `public/images/` — site images. New photos must be CC0 or public domain.

When services, clinics, phone numbers or credentials change, update the page, the JSON-LD and `public/llms.txt` together so they match.

## Deployment

The site is hosted on [Netlify](https://www.netlify.com) at [corilucas.ca](https://corilucas.ca). Netlify deploys `main`; work is verified locally (build, lint, browser check) and merged straight to `main`, with no deploy-preview or staging step. There is no `netlify.toml`, so the build command, environment variables and domain settings are managed in the Netlify dashboard. DNS is managed at Hover, not Netlify.

### Contact form

The contact form posts to Netlify Forms. `public/__forms.html` declares the form so Netlify can detect it at build time, and its field names must stay in sync with `src/app/components/ContactForm.tsx`. Form detection must be enabled in the Netlify dashboard, and submissions appear there under Forms.

## Project knowledge

Conventions and context for working on this repo are kept in [`.ai/kenkeep/`](.ai/kenkeep/ENTRY.md), a small knowledge base used by AI coding agents (see `AGENTS.md`).
