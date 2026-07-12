# Day 16 — CSS Variables & Best Practices

## Custom properties (CSS variables)
```css
:root {
  --color-primary: #2c3e50;
  --color-accent: #e67e22;
  --spacing-unit: 8px;
  --radius: 6px;
}

.button {
  background: var(--color-primary);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--radius);
}
```
- Defined with `--name: value;`, typically on `:root` (the `<html>` element) for global access.
- Read with `var(--name)`, with an optional fallback: `var(--color-primary, blue)`.
- Unlike Sass variables, CSS custom properties are **live in the browser** — they can be changed at runtime with JavaScript or overridden per-component, and they cascade/inherit like any other CSS property.

## Theming with variables (e.g. dark mode)
```css
:root {
  --bg: white;
  --text: black;
}
[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f0f0f0;
}
body {
  background: var(--bg);
  color: var(--text);
}
```
Toggling `data-theme="dark"` on `<html>` instantly re-themes everything that references these variables.

## Organizing CSS at scale
- **Reset/normalize** — remove browser inconsistencies first (margins, box-sizing)
- **Design tokens** — colors, spacing, type scale as custom properties, defined once
- **Component-based classes** — style reusable pieces (`.card`, `.button`), not one-off IDs
- **BEM naming** (`.block__element--modifier`) keeps large stylesheets predictable: e.g. `.card__title--large`
- Avoid `!important` and deep selector nesting — both fight the cascade instead of working with it

## A minimal, sane reset
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img, video { max-width: 100%; display: block; }
```

## Key takeaway
CSS variables turn "magic numbers" scattered across a stylesheet into a single source of truth — change one value at the top, and the whole design updates consistently.
