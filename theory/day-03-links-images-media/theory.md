# Day 3 — Links, Images & Multimedia

## Links: `<a>`
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>
```
- `href` — destination URL (can be external, internal like `about.html`, or an in-page anchor like `#section-id`)
- `target="_blank"` — opens in a new tab (always pair with `rel="noopener noreferrer"` for security)
- Internal page jump: `<a href="#pricing">Jump to Pricing</a>` links to `<section id="pricing">`

## Images: `<img>`
```html
<img src="cat.jpg" alt="A orange tabby cat sleeping" width="400" height="300">
```
- `src` — image path (void element, no closing tag)
- `alt` — **required**: describes the image for screen readers and shows if the image fails to load. Use `alt=""` (empty) only for purely decorative images.
- `width`/`height` — reserve space to prevent layout shift while loading

## Figures
Group an image with its caption using semantic elements:
```html
<figure>
  <img src="chart.png" alt="Bar chart of quarterly sales">
  <figcaption>Fig 1. Quarterly sales, 2026</figcaption>
</figure>
```

## Audio & video
```html
<audio controls src="song.mp3"></audio>

<video controls width="480" poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>
```
`controls` shows the native play/pause UI. Multiple `<source>` tags let the browser pick a format it supports.

## Key takeaway
`alt` text is not optional decoration — it's the difference between an accessible page and an inaccessible one. Always write meaningful `alt` text.
