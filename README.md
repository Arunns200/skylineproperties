# Skyline Properties

Premium DTCP plot marketing website. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router.

## Run

```bash
npm install
npm run dev
```

## Customize

1. Brand & contact: `src/config/site.ts`
2. Projects / plots: `src/data/projects.ts`
3. Locations: `src/data/locations.ts`
4. Blog / testimonials / stats / about: `src/data/*`
5. Images: swap URLs or drop files under `public/images/`

## Backend later

Lead & site-visit submits go through `src/lib/data.ts` (`submitLead`, `submitSiteVisit`).
