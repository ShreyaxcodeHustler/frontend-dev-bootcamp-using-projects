# Day 1 — Introduction to HTML

## What is HTML?
HTML (HyperText Markup Language) is not a programming language — it's a **markup language**. It describes the *structure* and *meaning* of content on a web page using **elements**, not how it looks (that's CSS's job) or how it behaves (that's JavaScript's job).

## Anatomy of an element
```html
<tagname attribute="value">Content</tagname>
```
- **Opening tag**: `<p>`
- **Content**: the text or nested elements inside
- **Closing tag**: `</p>`
- Some elements are **void/self-closing** and have no content or closing tag: `<img>`, `<br>`, `<hr>`, `<input>`

## The basic document skeleton
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- visible content goes here -->
</body>
</html>
```
- `<!DOCTYPE html>` tells the browser to use modern standards mode.
- `<html lang="en">` is the root element; `lang` helps screen readers and search engines.
- `<head>` holds metadata — nothing here is visible on the page.
- `<meta charset="UTF-8">` sets character encoding so special characters render correctly.
- `<meta name="viewport">` makes the page behave properly on mobile devices.
- `<body>` holds everything the user actually sees.

## Attributes
Attributes add extra information to a tag, written as `name="value"` inside the opening tag. Examples: `id`, `class`, `src`, `href`, `alt`.

## Comments
```html
<!-- This won't be shown in the browser -->
```

## Key takeaway
HTML gives content **structure and meaning**. Learning it well means learning to pick the *right* element for the job, not just any element that visually works.
