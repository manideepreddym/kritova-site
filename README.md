# kritova-site

Marketing website for **Kritova** — AI solutions built by a real community (Troy, Michigan).

Single-page React site. Frontend-only: no backend, no database, no environment variables.

## Stack

- React 19 (Create React App via craco)
- framer-motion — scroll reveals, masked hero, scroll-linked timeline
- lenis — smooth momentum scrolling
- Spectral + IBM Plex Mono (Google Fonts)

## Develop

```bash
yarn install
yarn start
```

## Build

```bash
yarn build   # outputs static files to build/
```

## Deploy (Vercel)

- Framework preset: **Create React App**
- Build command: `yarn build` · Output directory: `build`
- No environment variables required

## Editing content

- Proof-of-work rows: `src/data/shipped.js` — append one object per shipped project (`badge`: `live` | `tech` | `muted`)
- Logo/brand assets: `public/kritova-logo.png`, `public/favicon.png`, `public/og-image.png`
