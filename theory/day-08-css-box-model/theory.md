# Day 8 — The CSS Box Model

## Every element is a box
Every HTML element, whether you intend it or not, is rendered as a rectangular box made of four layers, from inside out:

```
┌─────────────────────────────┐
│           margin             │
│  ┌─────────────────────┐    │
│  │        border         │    │
│  │  ┌───────────────┐   │    │
│  │  │    padding      │   │    │
│  │  │  ┌─────────┐  │   │    │
│  │  │  │ content │  │   │    │
│  │  │  └─────────┘  │   │    │
│  │  └───────────────┘   │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

- **Content** — the actual text/image/element
- **Padding** — space *inside* the border, between content and border
- **Border** — a visible (or invisible) line around the padding
- **Margin** — space *outside* the border, separating this box from others

## Setting each layer
```css
.box {
  width: 200px;
  padding: 16px;          /* all sides */
  padding: 8px 16px;      /* vertical horizontal */
  padding: 8px 16px 8px 16px; /* top right bottom left */
  border: 2px solid black;
  margin: 24px auto;      /* auto horizontally centers a block element */
}
```

## `box-sizing` — the setting that trips everyone up
By default (`box-sizing: content-box`), `width`/`height` apply **only to content** — padding and border are added *on top*, making the box bigger than you specified.

```css
* {
  box-sizing: border-box;
}
```
With `border-box`, `width`/`height` include padding and border, so the box stays exactly the size you set. **Most developers set this globally on every project.**

## Margin collapsing
Vertical margins between adjacent block elements can "collapse" into a single margin equal to the larger of the two — a common source of confusion. Horizontal margins never collapse.

## Key takeaway
Before touching layout tools like Flexbox or Grid, you must understand the box model — nearly every spacing bug traces back to a misunderstanding of padding vs. margin vs. `box-sizing`.
