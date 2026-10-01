# Part 2 Learning Log

## ✅ Exercises 2.1–2.5 — Courseinfo: collections & modules
- Rendered dynamic lists with `parts.map(...)` — scales to any array size
- `key={item.id}` gives React stable identity; index keys are an anti-pattern
- `reduce((s, p) => s + p.exercises, 0)` folds arrays into totals
- Nested collection rendering: courses → Course → parts → Part
- Extracted `Course` into `src/components/Course.jsx` (ES6 module)
## ✅ Exercises 2.6–2.7 — Phonebook: forms & controlled inputs
- Controlled components: input `value` mirrors state; `onChange` feeds `event.target.value` back
- `event.preventDefault()` stops the browser's page-reload form submission
- Duplicate guard with `persons.some(...)` + `window.alert`
- Immutable append with `concat`; form reset by clearing state