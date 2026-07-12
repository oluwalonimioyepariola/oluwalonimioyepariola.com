# oluwalonimioyepariola.com

My personal portfolio — a minimal, resume-style single page built with Next.js.

**Live at [oluwalonimioyepariola.com](https://oluwalonimioyepariola.com)**

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router) with TypeScript and React 18
- [Tailwind CSS](https://tailwindcss.com) with a small custom monochrome palette
- [Montserrat](https://fonts.google.com/specimen/Montserrat) via `next/font`
- [cmdk](https://cmdk.paco.me/) for the command palette
- Deployed on [Vercel](https://vercel.com)

## Features

- **Command palette** — press `Cmd+K` / `Ctrl+K` for quick actions: print the page as a CV, or jump to GitHub, LinkedIn, X and email. The hint bar stays out of the way and only appears once you scroll past the About section (implemented with an `IntersectionObserver`, so the reveal point is content-anchored and consistent across screen sizes).
- **Print-ready CV** — a dedicated print stylesheet turns the page into a compact one-page CV: tighter spacing, no split entries across page breaks, and the icon links swap for a plain-text contact line.
- **Skills with brand icons** — skill pills pull logos from the [Simple Icons](https://simpleicons.org) CDN; anything without a logo renders as a clean text pill.
- **Auto-generated social card** — the Open Graph image is generated at build time with `next/og` (`app/opengraph-image.tsx`), so link previews on LinkedIn/X/WhatsApp match the site's design.
- **SEO-ready** — full metadata, `sitemap.xml` and `robots.txt` are generated from `app/sitemap.ts` and `app/robots.ts`.
- **Fully static** — every route prerenders at build time; no client-side data fetching.

## Running locally

```bash
git clone https://github.com/oluwalonimioyepariola/oluwalonimioyepariola.com.git
cd oluwalonimioyepariola.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── page.tsx                    # the whole page — all content lives in arrays at the top
├── layout.tsx                  # metadata, font loading
├── globals.css                 # base styles + print stylesheet
├── opengraph-image.tsx         # generated OG/social card
├── sitemap.ts / robots.ts      # SEO routes
├── icon.png / favicon.ico ...  # favicons
└── components/
    └── CommandPalette.tsx      # ⌘K palette + scroll-revealed hint bar
```

All content (experience, projects, skills, education, social links) is plain data at the top of `app/page.tsx` — no CMS, no markdown files. Each skill is `{ name, icon? }`, where `icon` is a [Simple Icons slug](https://simpleicons.org).
