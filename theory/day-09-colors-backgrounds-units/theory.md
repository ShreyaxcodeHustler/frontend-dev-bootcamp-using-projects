# Day 9 — Colors, Backgrounds & Units

## Color formats
```css
p {
  color: red;                     /* named color */
  color: #ff0000;                 /* hex */
  color: rgb(255, 0, 0);          /* red, green, blue */
  color: rgba(255, 0, 0, 0.5);    /* with alpha (transparency) */
  color: hsl(0, 100%, 50%);       /* hue, saturation, lightness */
}
```
`hsl()` is often the most intuitive for tweaking a color — adjust hue for the color, lightness to make it darker/lighter.

## Backgrounds
```css
.box {
  background-color: #f4f4f4;
  background-image: url("photo.jpg");
  background-size: cover;         /* fills the box, may crop */
  background-position: center;
  background-repeat: no-repeat;
}

/* shorthand */
.box {
  background: #f4f4f4 url("photo.jpg") center / cover no-repeat;
}
```

## Units — absolute vs. relative
| Unit | Type | Meaning |
|---|---|---|
| `px` | Absolute | Fixed pixel size |
| `%` | Relative | Percentage of the parent's size |
| `em` | Relative | Multiple of the **current element's** font size |
| `rem` | Relative | Multiple of the **root (`<html>`)** font size — predictable, doesn't compound |
| `vw` / `vh` | Relative | 1% of viewport width / height |

**Best practice**: use `rem` for font sizes and spacing (scales cleanly with user's browser settings), `%`/`vw`/`vh` for layout widths, and `px` only for things that should never scale (like a 1px border).

## Key takeaway
Prefer `rem` over `px` for typography and spacing — it respects user accessibility settings (like a larger default browser font size) in a way `px` never can.
