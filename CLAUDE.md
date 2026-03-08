# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Static export to docs/ (for GitHub Pages)
npm run lint         # ESLint
npx serve docs      # Test static build locally
```

The site is deployed as a static export (`output: "export"`) to GitHub Pages with `basePath: "/russian-english-site"` and `distDir: "docs"`. A `.nojekyll` file in `docs/` is required for `_next/` assets to be served.

## Architecture

**Static bilingual Next.js 16 site** for a VRChat Russian-English language exchange community.

### Internationalization (next-intl)

Locale routing uses `[locale]` URL segments (`/en/...`, `/ru/...`):

- `src/i18n/routing.ts` — defines locales `["en", "ru"]` with default `"en"`
- `src/i18n/navigation.ts` — exports locale-aware `Link`, `usePathname`, `useRouter` (use these instead of `next/link` and `next/navigation` equivalents)
- `src/i18n/request.ts` — server-side config; uses `setRequestLocale()` for static rendering
- `messages/en.json`, `messages/ru.json` — translation strings

**Critical:** All layouts/pages under `[locale]/` must call `setRequestLocale(locale)` for static export to work (avoids `headers()` calls). Client components get translations via `NextIntlClientProvider` in the locale layout.

### Routing

- `src/app/page.tsx` — root redirect to `/en`
- `src/app/layout.tsx` — minimal shell (fonts, `<html>`, `<body>`)
- `src/app/[locale]/layout.tsx` — locale layout with `NextIntlClientProvider`, `Navbar`, `Footer`, `generateStaticParams()`
- `src/app/[locale]/page.tsx` — home (hero + recruitment)
- `src/app/[locale]/team/page.tsx` — team members
- `src/app/[locale]/events/page.tsx` — simple event list (Saturday meetup, Sunday lessons)

### UI

Uses shadcn/ui (New York style) with Radix UI primitives. Components in `src/components/ui/`. Tailwind CSS 4 with dark mode enabled by default. Path alias: `@/*` maps to `src/*`.
