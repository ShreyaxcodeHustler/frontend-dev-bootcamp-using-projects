# Day 13 — CSS Grid

## What Grid is for
CSS Grid lays out children in **rows and columns simultaneously** — it's the right tool for whole-page layouts, dashboards, image galleries, anything genuinely two-dimensional.

## Turning on Grid
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;   /* 3 columns: fixed, then two flexible */
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}
```
- `fr` = "fraction of remaining space" — `1fr 1fr` splits leftover space evenly.
- `repeat(3, 1fr)` is shorthand for `1fr 1fr 1fr`.
- `auto` sizes a track to fit its content.

## Placing items explicitly
```css
.item {
  grid-column: 1 / 3;   /* start line 1, end line 3 -> spans 2 columns */
  grid-row: 2 / 4;
}

/* shorthand span */
.item {
  grid-column: span 2;
}
```

## Named template areas — the most readable way to build a page layout
```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}
.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```
The ASCII-art-like `grid-template-areas` makes the layout self-documenting — you can *see* the page shape in the CSS.

## Responsive grids without media queries
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}
```
This automatically fits as many 150px+ columns as will fit, stretching them to fill remaining space — a common "responsive card grid" one-liner.

## Grid vs. Flexbox
Grid: two-dimensional, layout-first (define the structure, then place items into it).
Flexbox: one-dimensional, content-first (items flow and size based on content).
They combine well — e.g. Grid for page layout, Flexbox inside each grid cell.

## Key takeaway
If you find yourself fighting Flexbox to align things in both rows *and* columns at once, that's the signal to switch to Grid.
