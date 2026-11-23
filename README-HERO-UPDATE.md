# IMTS CARE Hero Refresh

This update changes only the homepage hero presentation and its responsive styling.

## Design changes
- Removes the dark gradient overlay completely.
- Uses a clean split layout: copy on the left, aircraft photography on the right.
- Retains the floating information card over the image.
- Adds subtle entrance, floating-card, image-drift and kicker-dot animations.
- Provides a mobile layout with the image below the copy and the floating card retained.
- Respects `prefers-reduced-motion` accessibility settings.

## Apply
From the project root, replace `src/app/page.tsx` only if the ZIP includes it (the existing JSX is intentionally unchanged) and replace `src/app/globals.css` with the included file. The package includes the complete `src/app/globals.css` and original matching project files.
