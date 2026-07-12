# Day 12 — Flexbox

## What Flexbox is for
Flexbox lays out children **in a single row or column**, and excels at distributing space and aligning items — think navbars, toolbars, card rows, centering content.

## Turning on Flexbox
```css
.container {
  display: flex;
}
```
Every direct child of `.container` becomes a **flex item**.

## Container properties
```css
.container {
  display: flex;
  flex-direction: row;        /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;            /* nowrap (default) | wrap */
  justify-content: center;    /* main-axis alignment: flex-start, center, space-between, space-around, space-evenly */
  align-items: center;        /* cross-axis alignment: stretch (default), flex-start, center, flex-end */
  gap: 16px;                  /* space between items — no manual margins needed */
}
```

**Main axis vs. cross axis**: for `flex-direction: row`, the main axis is horizontal and `justify-content` controls it; the cross axis is vertical and `align-items` controls it. Swap for `column`.

## Item properties
```css
.item {
  flex-grow: 1;     /* how much extra space this item takes, relative to siblings */
  flex-shrink: 1;    /* how much it shrinks when space is tight */
  flex-basis: 200px; /* starting size before growing/shrinking */
  flex: 1;           /* shorthand for grow:1 shrink:1 basis:0 — "take equal share" */
  align-self: flex-end; /* override align-items for just this one item */
}
```

## Common patterns
```css
/* Perfectly centered content */
.center { display: flex; justify-content: center; align-items: center; }

/* Equal-width columns */
.columns > * { flex: 1; }

/* Push one item to the far right */
.navbar { display: flex; }
.navbar .push-right { margin-left: auto; }
```

## Key takeaway
Flexbox is **one-dimensional** — it's the right tool when you're arranging items along a single row or column. For two-dimensional layouts (rows *and* columns together), reach for Grid (Day 13).
