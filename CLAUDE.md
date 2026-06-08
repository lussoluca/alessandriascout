# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

AlessandriaScout — Italian-language website for the Alessandria scouting community (AGESCI groups AL1/AL2/AL3, MASCI, Amici degli Scout). Next.js 14 App Router site with content sourced from Contentful via GraphQL. UI text is in Italian.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (static generation)
npm run start    # serve production build
npm run lint     # next lint (ESLint 9 + eslint-config-next)
npm run pretty   # prettier --write . (prettier-plugin-tailwindcss sorts classes)
```

No test framework configured.

`npm run revalidate-local` POSTs to the local revalidate endpoint with a dummy key for testing cache invalidation.

## Environment

Copy `.env.dist` → `.env.local`. All keys are Contentful credentials:
`CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN` (published content), `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (drafts), `CONTENTFUL_PREVIEW_SECRET` (preview-mode link auth), `CONTENTFUL_REVALIDATE_SECRET` (webhook auth).

## Architecture

### Content: two CMS types, identical pattern

The site has two Contentful-backed content types, each with its own parallel implementation:

- **Posts** (blog) — `src/lib/api_posts.ts`, routes under `src/app/blog/`
- **Resources** (risorse) — `src/lib/api_resources.ts`, routes under `src/app/risorse/`

Both follow the same structure. When changing one, the other usually needs the mirror change:

- `api_*.ts` defines a `*_GRAPHQL_FIELDS` fragment, a `fetchGraphQL(query, preview)` helper hitting `https://graphql.contentful.com`, and `extract*` unwrappers. Queries are built by string interpolation. The `preview` boolean selects the preview token + `preview: true` in the query.
- Each type's `fetchGraphQL` tags fetches with `next: { tags: [...] }` (`'posts'` / resources tag) so they can be revalidated as a group.
- Per-type routes:
  - `[slug]/page.tsx` — detail page. `generateStaticParams` pre-renders all slugs; `draftMode()` toggles preview fetch.
  - `draft/route.ts` — enables Next.js `draftMode()` after validating `?secret=` against `CONTENTFUL_PREVIEW_SECRET`, then redirects to the detail page. This is the Contentful "Open preview" entry point.
  - `revalidate/route.ts` — Contentful webhook target. Validates `x-vercel-reval-key` header against `CONTENTFUL_REVALIDATE_SECRET`, then `revalidateTag(...)`.

Static (non-CMS) content lives in `src/data/` as plain JS: `groups.js` (the scout groups), `mainMenu.js` (nav), `faq.js`.

### Rendering Contentful content

Post/resource bodies are Contentful Rich Text (`content { json links { assets ... } }`). `src/components/Markdown.tsx` renders the rich-text JSON via `@contentful/rich-text-react-renderer`, resolving embedded asset links. `MarkdownLocal.tsx` renders local markdown strings (remark) — used for static data, not CMS content.

### Layout & styling

- `src/app/layout.tsx` — root layout, sets `lang="it"`, loads Google Fonts, wires Vercel SpeedInsights + Google Tag Manager.
- `Layout.tsx` composes `Navigation` + `Footer` around page children. `Container.tsx` is the standard width wrapper.
- Tailwind with a custom scout color palette and font families (`scout`, `scoutitalic`, etc.) in `tailwind.config.js`. `@tailwindcss/typography` (`Prose.tsx`) styles article bodies.

### Conventions

- Import alias `@/*` → `src/*` (set in both `jsconfig.json` and `tsconfig.json`).
- TypeScript is loose: `strict: false`, `strictNullChecks: true`. API functions return `any` / `Promise<any>` liberally — content shape comes from Contentful, not local types. Interfaces in `src/interfaces/` describe the intended shape.
- Remote images allowed only from `images.ctfassets.net` (Contentful) and `images.unsplash.com` — add hostnames in `next.config.js` to use others.
