# Day 14 — Responsive Design & Media Queries

## Mobile-first mindset
Write your **base** CSS for the smallest screen first, then add complexity as screens get bigger using `min-width` media queries. This tends to produce simpler, more maintainable CSS than starting desktop-first and overriding downward.

## The viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Without this, mobile browsers render the page at a fake desktop-width viewport and zoom out — this tag is mandatory for responsive design to work at all.

## Media queries
```css
/* base styles = mobile */
.container {
  display: flex;
  flex-direction: column;
}

/* tablet and up */
@media (min-width: 600px) {
  .container {
    flex-direction: row;
  }
}

/* desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```
Common breakpoints (guidelines, not rules): `600px` (tablet), `768px`, `1024px` (small desktop), `1280px`+ (large desktop). Let your **content** decide breakpoints, not a fixed device list.

## Fluid layout tools (often reduce the need for media queries)
- `max-width: 100%` on images prevents overflow
- `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` — auto-responsive grid
- `clamp(1rem, 2vw + 1rem, 2rem)` — fluid font size that scales smoothly between a min and max

## Responsive images
```html
<img src="photo.jpg" srcset="photo-480.jpg 480w, photo-800.jpg 800w" sizes="(max-width: 600px) 100vw, 50vw" alt="...">
```
Lets the browser choose the right image resolution for the current viewport, saving bandwidth on small screens.

## Key takeaway
Responsive design is a combination of flexible layout (Flexbox/Grid + relative units) *and* media queries for the cases where the layout genuinely needs to restructure at certain widths — not a replacement for one another.
