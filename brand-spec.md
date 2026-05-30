# Maison Reverie brand spec

Reference source: https://en.kleesier.com/ used only for editorial fashion-commerce posture, not for brand, copy, imagery, product names, or layout duplication.

## Tokens

```css
:root {
  --bg: oklch(97% 0.018 83);
  --surface: oklch(99% 0.008 82);
  --fg: oklch(22% 0.018 68);
  --muted: oklch(54% 0.022 70);
  --border: oklch(88% 0.018 78);
  --accent: oklch(72% 0.075 32);

  --font-display: "Cormorant Garamond", "Iowan Old Style", "Baskerville", Georgia, serif;
  --font-body: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-mono: "SFMono-Regular", ui-monospace, Menlo, monospace;
}
```

## Layout posture

- Full-bleed editorial campaign image first; navigation floats over the image and settles into a warm ivory sticky header after scroll.
- Warm ivory, soft beige, muted blush, and charcoal text; contrast comes from layered surfaces and photography rather than heavy cards.
- Elegant serif for brand wordmark and editorial headlines; clean sans for navigation, product metadata, and controls.
- Product modules use large quiet imagery, hairline dividers, small uppercase metadata, and restrained hover actions.
- Radii are minimal to soft, borders are subtle, shadows are avoided except for overlays; accent color appears sparingly on CTA, badges, and focus states.
