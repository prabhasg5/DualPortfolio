# Dual Portfolio — Developer & Creative Modes

A personal dual-mode portfolio showcasing both "Developer" (professional) and "Creative" (visual) sides. The site includes interactive ambience and visual flourishes that switch depending on the active mode.

This README explains what was added, how to run the project locally, and quick notes about customization and accessibility.

---

## What this project includes

- Two display modes: Developer (default) and Creative (toggleable).
- Ambient effects:
  - Stars background (animated / twinkling).
  - Snowfall ambience (gentle flakes).
  - Cherry-petal animation shown only in Creative mode.
- Mode-specific placeholders for the hero and about photos (creative placeholders shown only in Creative mode).

Files edited/added (high level):
- `index.html` — added containers for stars, snow, petals and creative placeholders in hero/about.
- `styles.css` — added styles and keyframes for stars, snow, petals; added CSS to toggle creative placeholders.
- `script.js` — created `createStars()`, `createSnow()`, `createPetals()` and related logic to populate/animate visuals. Made DOM access defensive to avoid runtime stops.
- `README.md` — this file.

---

## How to run locally

1. Open a terminal in the project folder (the folder with `index.html`).
2. Start a simple static server (Python recommended):

```bash
# from project root
python3 -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

Note: The site is static — no build step is required.

---

## Mode toggle

- There is a bottom toggle control that switches between Developer and Creative mode. When `body` has the `creative-mode` class:
  - The creative visual effects (petals) are shown.
  - Creative-mode placeholder images in hero/about are displayed instead of the default photos.

You can also toggle modes directly in the console for testing:

```js
document.body.classList.add('creative-mode')   // switch to creative
document.body.classList.remove('creative-mode') // switch to developer
```

---

## Customization

- Replace placeholder images:
  - Hero creative placeholder: `index.html` uses `https://via.placeholder.com/350x350?text=Creative+Hero` by default. Replace with a local filename (e.g. `assets/creative-hero.jpg`) and commit the asset.
  - About creative placeholder: `https://via.placeholder.com/400x400?text=Creative+About`.
- Change counts & intensity:
  - Stars count and per-star animation settings are created in `createStars()` (in `script.js`). Adjust `starsCount` and duration ranges.
  - Snowflake count is set in `createSnow()`.
  - Petal count is the `count` argument to `createPetals()` (default 24).
- Performance tuning:
  - Reduce star/snow/petal counts for low-power devices.
  - Add a media query to disable heavy animations on small screens (recommended).

---

## Accessibility & performance notes

- Animations can be reduced or disabled for users who prefer reduced motion. Consider reading `prefers-reduced-motion` and turning off non-essential animations.
- All visual effects are implemented with pointer-events disabled so they don't block interactions.
- If you observe high CPU/GPU usage, lower the particle counts or simplify animations.

---

## Troubleshooting

- If stars/petals/snow aren't visible:
  - Check the browser console for errors (runtime JS errors can stop the script before it creates elements).
  - Inspect the DOM for `#stars`, `#snow`, and `#petals` to verify elements were created.
- If toggles don't work, ensure the elements referenced in `script.js` exist in `index.html` and check for null-access errors.

---

## License

Use this project however you like — add a license file if you plan to publish or share the repo publicly.

---

If you want, I can:
- Add a small UI switch to toggle snow/stars/petals on/off for accessibility.
- Add a performance-friendly `prefers-reduced-motion` fallback.
- Replace placeholders with local sample images and update markup.

Tell me which of the above you want next and I will implement it.
