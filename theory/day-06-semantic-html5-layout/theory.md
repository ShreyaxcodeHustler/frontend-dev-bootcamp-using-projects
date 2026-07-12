# Day 6 — Semantic HTML5 Layout

## Why not just use `<div>` everywhere?
You *can* build any layout with `<div>`s alone, but semantic elements tell browsers, screen readers, and search engines **what each region of the page means** — for free, with no extra ARIA needed.

## The standard page regions
```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <section>
      <article>...</article>
    </section>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

| Element | Meaning |
|---|---|
| `<header>` | Introductory content — logo, title, nav. Can appear once per page or once per `<article>`/`<section>` |
| `<nav>` | A block of navigation links |
| `<main>` | The dominant, unique content of the page (only **one** per page) |
| `<section>` | A thematic grouping of content, usually with its own heading |
| `<article>` | Self-contained content that could stand alone (a blog post, a product card, a news story) |
| `<aside>` | Content tangentially related to the main content (sidebar, pull quote) |
| `<footer>` | Closing content — copyright, links, contact info |

## `<section>` vs `<article>` vs `<div>`
- Use `<article>` if the content makes sense **independently** (e.g., syndicated in an RSS feed).
- Use `<section>` if it's a **thematic chunk** of a larger whole, typically starting with a heading.
- Use `<div>` only when there is **no semantic meaning** — purely a styling hook.

## Key takeaway
A page built entirely from semantic landmarks lets screen reader users jump directly to "navigation" or "main content" — this is one of the biggest, cheapest accessibility wins in HTML.
