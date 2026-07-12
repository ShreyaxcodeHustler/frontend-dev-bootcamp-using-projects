# Day 7 — Introduction to CSS

## What is CSS?
CSS (Cascading Style Sheets) controls the **presentation** of HTML: colors, fonts, spacing, layout. HTML says *what* something is; CSS says *how it looks*.

## Three ways to add CSS
1. **Inline** (avoid except for quick tests): `<p style="color: red;">...</p>`
2. **Internal**, inside `<head>`:
   ```html
   <style>
     p { color: red; }
   </style>
   ```
3. **External** (best practice — separates content from presentation):
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

## Anatomy of a CSS rule
```css
selector {
  property: value;
}
```
```css
p {
  color: navy;
  font-size: 18px;
}
```

## Selectors
| Selector | Matches |
|---|---|
| `p` | Every `<p>` element |
| `.classname` | Every element with `class="classname"` |
| `#idname` | The single element with `id="idname"` |
| `p.intro` | `<p>` elements with class `intro` |
| `div p` | `<p>` elements *inside* any `<div>` (descendant) |
| `div > p` | `<p>` elements that are *direct children* of `<div>` |
| `a:hover` | `<a>` while the mouse hovers it (pseudo-class) |
| `p::first-line` | The first line of every `<p>` (pseudo-element) |
| `*` | Every element (universal selector) |

## The Cascade — how conflicts are resolved
When multiple rules target the same element, CSS picks a winner using, in order:
1. **Importance** (`!important` beats everything — use sparingly)
2. **Specificity** — inline style > ID > class/attribute/pseudo-class > element
3. **Source order** — later rules win if specificity is equal

## Key takeaway
CSS is declarative: you describe the desired end state, and the browser figures out how to render it. Understanding the cascade and specificity is what lets you predict — instead of guess — which rule wins.
