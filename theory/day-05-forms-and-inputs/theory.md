# Day 5 — Forms & Input Elements

## The form container
```html
<form action="/submit" method="POST">
  ...
  <button type="submit">Send</button>
</form>
```
- `action` — URL the data is sent to
- `method` — `GET` (data in URL, for searches) or `POST` (data in request body, for anything sensitive/large)

## Labels — always pair inputs with labels
```html
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
```
The `for` attribute must match the input's `id`. This lets screen readers announce the label, and lets users click the label text to focus the input.

## Common input types
| `type` | Purpose |
|---|---|
| `text` | Free text |
| `email` | Validates email format |
| `password` | Masks input |
| `number` | Numeric input with steppers |
| `date` | Native date picker |
| `checkbox` | Multiple selectable options |
| `radio` | One choice from a group (same `name`) |
| `file` | File upload |

## Other form controls
```html
<textarea rows="4" cols="30"></textarea>

<select>
  <option value="ind">India</option>
  <option value="usa">USA</option>
</select>

<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

## Validation attributes
`required`, `minlength`, `maxlength`, `min`, `max`, `pattern` — the browser validates these before allowing submission, with zero JavaScript.

## Grouping fields
```html
<fieldset>
  <legend>Contact Preferences</legend>
  ...
</fieldset>
```
`<fieldset>`/`<legend>` visually and semantically group related fields.

## Key takeaway
A form is only as accessible as its labels. Never rely on placeholder text as a substitute for a real `<label>`.
