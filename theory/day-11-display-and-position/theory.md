# Day 11 — Display & Position

## `display` — how a box participates in layout
| Value | Behavior |
|---|---|
| `block` | Takes full available width, starts on a new line (`div`, `p`, `h1`) |
| `inline` | Flows within text, ignores `width`/`height`/vertical margin (`span`, `a`, `strong`) |
| `inline-block` | Flows like inline, but respects `width`/`height`/margin like block |
| `none` | Removed entirely from layout (and accessibility tree) |
| `flex` | Turns element into a flex container (see Day 12) |
| `grid` | Turns element into a grid container (see Day 13) |

```css
.hidden { display: none; }
.badge  { display: inline-block; width: 24px; height: 24px; }
```

## `position` — how an element is placed relative to its normal flow
| Value | Behavior |
|---|---|
| `static` | Default. Normal document flow; `top`/`left`/etc. have no effect |
| `relative` | Stays in normal flow, but `top`/`left`/`right`/`bottom` shift it *from where it would have been* |
| `absolute` | Removed from flow, positioned relative to nearest **positioned** ancestor (or the page if none) |
| `fixed` | Removed from flow, positioned relative to the **viewport** — stays put when scrolling |
| `sticky` | Acts `relative` until a scroll threshold, then acts `fixed` within its container |

## The "positioning context" trick
```css
.card {
  position: relative;   /* creates a positioning context */
}
.badge {
  position: absolute;
  top: 8px;
  right: 8px;            /* positioned relative to .card, not the page */
}
```
This is one of the most common CSS patterns: give a parent `position: relative` so an absolutely positioned child anchors to it, not to the whole page.

## `z-index`
Controls stacking order for overlapping *positioned* elements (anything other than `static`). Higher values render on top.

## Key takeaway
`display` decides how a box behaves in the normal flow; `position` decides whether — and how — it's taken **out** of that flow.
