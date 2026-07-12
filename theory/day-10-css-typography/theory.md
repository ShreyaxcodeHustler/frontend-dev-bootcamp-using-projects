# Day 10 — CSS Typography

## Font family
```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```
Always provide a **fallback stack** ending in a generic family (`sans-serif`, `serif`, `monospace`) in case the preferred font isn't available.

## Core text properties
```css
p {
  font-size: 1rem;
  font-weight: 400;       /* 100-900, or normal/bold */
  font-style: italic;     /* or normal */
  line-height: 1.5;       /* unitless = multiplier of font-size, best practice */
  letter-spacing: 0.02em;
  text-align: left;       /* left, right, center, justify */
  text-decoration: underline;
  text-transform: uppercase; /* or lowercase, capitalize */
}
```

## Web fonts with `@font-face` / Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```
```css
body { font-family: "Inter", sans-serif; }
```
`display=swap` shows fallback text immediately, then swaps to the web font once loaded — avoiding invisible text while loading.

## Line height & readability
- `line-height: 1.4`–`1.6` is generally most readable for body text.
- Line length (measure) of **45–75 characters per line** reads best — control it with `max-width` on the text container, not by manually breaking lines.

## Key takeaway
Good typography is mostly about **restraint**: 2–3 font sizes, 1–2 font families, and consistent line-height — not maximizing variety.
