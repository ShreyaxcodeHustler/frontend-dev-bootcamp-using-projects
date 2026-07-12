# Day 4 — Tables

## When to use a table
Use `<table>` only for **tabular data** (rows and columns of related data, like a spreadsheet or timetable). Never use tables for page layout — that's what CSS Flexbox/Grid are for.

## Core structure
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Asha</td>
      <td>92</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Average</td>
      <td>92</td>
    </tr>
  </tfoot>
</table>
```
- `<table>` — the container
- `<thead>` / `<tbody>` / `<tfoot>` — group header, body, and footer rows (optional but good practice)
- `<tr>` — table row
- `<th>` — header cell (bold, centered by default; use `scope="col"` or `scope="row"` for accessibility)
- `<td>` — standard data cell

## Merging cells
- `colspan="2"` — cell spans 2 columns
- `rowspan="2"` — cell spans 2 rows

## Captions
```html
<table>
  <caption>Student Scores — Term 1</caption>
  ...
</table>
```
`<caption>` gives the table an accessible title.

## Key takeaway
A well-marked-up table (with `<th scope="col">`, `<thead>`, `<caption>`) is readable by screen readers as an actual table — not just a grid of unrelated text.
