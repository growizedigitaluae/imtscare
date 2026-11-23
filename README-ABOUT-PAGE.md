# IMTS CARE — About Us page update

This package adds a dedicated `/about` route to the existing IMTS CARE Next.js website.

## Included
- `src/app/about/page.tsx` — detailed About Us page with metadata, responsive sections, company values, global coordination regions, management profiles and contact CTA.
- `src/app/globals.css` — appended About page styles. Existing site styles are retained.
- `src/app/page.tsx` — homepage About Us navigation and links now point to `/about`; Air Ambulance service links point to `/air-ambulance`.
- `src/app/air-ambulance/page.tsx` — existing Air Ambulance page retained; About Us navigation points to `/about`.
- `public/images/team/` — cropped management portraits taken from the supplied IMTS CARE company brochure.

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000/about`.

## Content notes
Company information and leadership titles are based on the supplied IMTS CARE brochure. The brochure states more than 10 years of experience and official partnerships with over 110 hospitals; confirm these claims remain current before launch. The page avoids promising free treatment, admission, clinical outcomes or guaranteed transport availability.

The two large About page photography backgrounds use temporary remote Unsplash images. Replace them with licensed or customer-owned photographs before production.
