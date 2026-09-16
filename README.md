# Digital Pin Club

Independent fan community site for digital pin collectors (Disney Pinnacle hobby).  
**Not affiliated with** The Walt Disney Company, Dapper Labs, or Disney Pinnacle.

Brand: **Digital Pin Club** (never “Disney Pin Club”).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Shared `Header` / `Footer` components

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Local development server |
| `npm run build`   | Production build         |
| `npm run start`   | Serve production build   |
| `npm run lint`    | ESLint                   |

## Routes

- `/` — Home (Pin Press clubhouse)
- `/start` — New collector onboarding
- `/learn` — Guides
- `/calendar` — Drops & hangouts
- `/community` — Join destination
- `/spotlights` — Collector spotlights
- `/board` — Board showcase (placeholder)
- `/news` — Club news
- `/about` — About the club
- `/pinsider` — Companion data desk (links to https://pinsider.io)
- `/contact` — Contact
- `/disclaimer` · `/privacy` · `/terms` — Legal

## Adding content later

v1 uses in-file placeholder content (arrays in page components). A CMS can replace these later without changing the design system:

1. Keep visual tokens in `src/app/globals.css` (`--bg`, `--card`, `--accent`, etc.).
2. Swap static arrays in pages (news, calendar, spotlights, learn) for CMS fetches.
3. Wire the Sunday digest form (`DigestForm`) to an email provider; it currently shows a client-side success state only.
4. Point Community “Join” CTAs at your real Discord / social invite when ready.

## Design system (quick ref)

- Background `#D4D4D8` · surfaces `#C4C4CC` · cards `#FFFFFF` · borders `#71717A`
- Text `#09090B` · muted `#3F3F46`
- Accent violet `#7C5CFF` · soft wash `#EDE9FE` · event amber `#E8A317`
- Quiet live/on `#0E7490` · drop-week mint `#3DDC97` · CTA coral `#FF6B4A`
- Display: Inter Tight · Body: Inter · Mono: IBM Plex Mono

## License / affiliation

Fan community project. See `/disclaimer` on the site. Do not use official licensed pin artwork in brand assets.
