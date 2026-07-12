# Day 2 — Text Formatting & Semantic Basics

## Headings
`<h1>` through `<h6>` create a document outline. Use only **one `<h1>` per page** (the main title), and don't skip levels just to get a smaller font — that's what CSS is for.

## Paragraphs and line breaks
- `<p>` — a block of text (a paragraph)
- `<br>` — a single line break *inside* a paragraph (use sparingly, e.g. for addresses/poems)

## Text-level semantic elements
These wrap small pieces of text and carry **meaning**, not just style:

| Element | Meaning |
|---|---|
| `<strong>` | Strong importance (renders bold) |
| `<em>` | Stressed emphasis (renders italic) |
| `<mark>` | Highlighted/relevant text |
| `<small>` | Side comments, fine print |
| `<abbr title="...">` | Abbreviation, with expansion on hover |
| `<code>` | A short fragment of code |
| `<time datetime="...">` | A machine-readable date/time |

> `<b>` and `<i>` still exist but are purely presentational (bold/italic with no semantic meaning). Prefer `<strong>`/`<em>` when meaning is intended.

## Lists
- **Unordered list** `<ul>` — items with no inherent order, each wrapped in `<li>`
- **Ordered list** `<ol>` — items where sequence matters
- **Description list** `<dl>` — pairs of terms (`<dt>`) and descriptions (`<dd>`), e.g. a glossary

Lists can be **nested**: put a `<ul>` or `<ol>` inside an `<li>`.

## Key takeaway
Choosing elements for what they *mean* (not just how they look) is the core skill of semantic HTML — it improves accessibility, SEO, and code readability all at once.
