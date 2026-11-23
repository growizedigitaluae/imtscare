# IMTS CARE — Air Ambulance Page Update

This update adds the first dedicated internal service page:

- `src/app/air-ambulance/page.tsx`
- Air Ambulance page styles appended to `src/app/globals.css`
- Homepage Air Ambulance service card now links to `/air-ambulance`
- Homepage Air Ambulance section includes a link to the dedicated service page

## Apply

Extract this ZIP into the project root, allowing files to merge/overwrite:

`Desktop/Growize Projects/IMTS CARE`

Then run:

```bash
npm run dev
```

Open:

`http://localhost:3000/air-ambulance`

No dependencies were added. The project remains local and Git is not connected.

## Notes

- The page uses the existing IMTS CARE navy and turquoise design system.
- Photography is temporary remote Unsplash imagery and should be replaced with approved/licensed customer images before launch.
- Copy is intentionally phrased around coordination. It does not claim that IMTS CARE owns aircraft, guarantees availability, or provides a particular medical crew/equipment on every transfer.
- Confirm all operational, medical, availability and company-profile claims with the customer before publication.
- The supplied archive did not contain `node_modules`, so a local production build still needs to be run on the user's Mac with `npm run build`.
