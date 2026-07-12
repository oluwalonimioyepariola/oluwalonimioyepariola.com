# Oluwalonimi Oyepariola - Portfolio

Minimal software engineer portfolio. Next.js 14 (App Router) + Tailwind CSS. Single page: About, Experience, Projects, Education.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com, "Add New Project", import the repo. No config needed, Vercel detects Next.js automatically.
3. After buying oluwalonimioyepariola.com, add it in Vercel: Project Settings > Domains > Add. Follow the DNS instructions from your registrar.

## Editing content

All content lives in `app/page.tsx` in plain arrays at the top of the file:

- `socials` - social links
- `experience` - work history entries
- `projects` - project cards (update ParkWise/Claro status and add links when built)
- `education` - education entries

## Font

Uses the system monospace stack (fast, zero requests). To switch to IBM Plex Mono, see the comment at the top of `app/layout.tsx`.

## To do before sending to recruiters

- [ ] Buy oluwalonimioyepariola.com and connect it in Vercel
- [ ] Build ParkWise and Claro, then add GitHub/live links to the project cards
- [ ] Double check the GitHub profile has pinned, working repos
