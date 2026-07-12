# Day 15 — CSS Transitions & Animations

## Transitions — animate between two states
A transition smoothly interpolates a property when it changes (e.g., on `:hover`, `:focus`, or a class toggle via JS).
```css
.button {
  background: steelblue;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: darkslateblue;
  transform: translateY(-2px);
}
```
- `transition-property` — which property to animate (`all` works but is less performant)
- `transition-duration` — how long
- `transition-timing-function` — `ease`, `linear`, `ease-in-out`, or a custom `cubic-bezier()`
- `transition-delay` — wait before starting

**Only some properties can be smoothly transitioned** — ones with an interpolatable value: `opacity`, `transform`, `color`, `background-color`, `width/height`, etc. `display` cannot be transitioned.

## Animations — multi-step, can run automatically/loop
```css
@keyframes pulse {
  0%   { transform: scale(1); opacity: 1; }
  50%  { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

.badge {
  animation: pulse 1.5s ease-in-out infinite;
}
```
- `@keyframes name { ... }` defines the steps (percentages or `from`/`to`)
- `animation-name`, `animation-duration`, `animation-timing-function`, `animation-iteration-count` (`infinite` or a number), `animation-direction` (`alternate`, `reverse`)

## The `transform` property
```css
.el {
  transform: translateX(10px) rotate(5deg) scale(1.2);
}
```
`transform` (and `opacity`) are the **cheapest** properties to animate — they run on the GPU without triggering layout recalculation, so prefer them over animating `width`/`top`/`left` for smoother performance.

## Respecting motion preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```
Some users get motion sickness from animation — always provide a reduced-motion fallback.

## Key takeaway
Use `transition` for simple two-state changes (hover, focus, toggles). Use `@keyframes` animation for anything with multiple steps or that needs to loop automatically.
