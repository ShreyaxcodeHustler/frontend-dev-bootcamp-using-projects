# Frontend Dev Bootcamp — Theory Branch

This branch adds a **theory + example** companion for each day of the bootcamp,
focused on HTML and CSS fundamentals. Each folder is self-contained:

```
day-XX-topic/
├── theory.md       # concept explanation, written to be read like short notes
└── example.html    # a runnable, standalone demo of the concept (open directly in a browser)
```

## Index

| Day | Topic | Theory | Example |
|---|---|---|---|
| 1  | Introduction to HTML | [theory.md](day-01-html-introduction/theory.md) | [example.html](day-01-html-introduction/example.html) |
| 2  | Text Formatting & Semantic Basics | [theory.md](day-02-text-and-semantics/theory.md) | [example.html](day-02-text-and-semantics/example.html) |
| 3  | Links, Images & Multimedia | [theory.md](day-03-links-images-media/theory.md) | [example.html](day-03-links-images-media/example.html) |
| 4  | Tables | [theory.md](day-04-tables/theory.md) | [example.html](day-04-tables/example.html) |
| 5  | Forms & Input Elements | [theory.md](day-05-forms-and-inputs/theory.md) | [example.html](day-05-forms-and-inputs/example.html) |
| 6  | Semantic HTML5 Layout | [theory.md](day-06-semantic-html5-layout/theory.md) | [example.html](day-06-semantic-html5-layout/example.html) |
| 7  | Introduction to CSS | [theory.md](day-07-css-introduction/theory.md) | [example.html](day-07-css-introduction/example.html) |
| 8  | The CSS Box Model | [theory.md](day-08-css-box-model/theory.md) | [example.html](day-08-css-box-model/example.html) |
| 9  | Colors, Backgrounds & Units | [theory.md](day-09-colors-backgrounds-units/theory.md) | [example.html](day-09-colors-backgrounds-units/example.html) |
| 10 | CSS Typography | [theory.md](day-10-css-typography/theory.md) | [example.html](day-10-css-typography/example.html) |
| 11 | Display & Position | [theory.md](day-11-display-and-position/theory.md) | [example.html](day-11-display-and-position/example.html) |
| 12 | Flexbox | [theory.md](day-12-flexbox/theory.md) | [example.html](day-12-flexbox/example.html) |
| 13 | CSS Grid | [theory.md](day-13-css-grid/theory.md) | [example.html](day-13-css-grid/example.html) |
| 14 | Responsive Design & Media Queries | [theory.md](day-14-responsive-design/theory.md) | [example.html](day-14-responsive-design/example.html) |
| 15 | CSS Transitions & Animations | [theory.md](day-15-transitions-animations/theory.md) | [example.html](day-15-transitions-animations/example.html) |
| 16 | CSS Variables & Best Practices | [theory.md](day-16-css-variables-best-practices/theory.md) | [example.html](day-16-css-variables-best-practices/example.html) |

## How to use this

1. Read `theory.md` for the day.
2. Open `example.html` directly in a browser (or right-click → "Open with Live Server" in VS Code) to see it in action.
3. Try editing the example — change values, break things, see what happens. That's the fastest way to internalize CSS.

## Suggested git workflow

```bash
git checkout -b theory
# (files already added in this branch)
git add theory/
git commit -m "Add theory + examples for days 1-16 (HTML & CSS)"
git push origin theory
```
