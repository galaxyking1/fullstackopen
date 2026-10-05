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
## ✅ Exercise 2.8 — Phonebook meets the server
- Two servers: Vite (5173, UI) + json-server (3001, REST over db.json)
- `useEffect(fn, [])` fetches once after mount; side effects never during render
- axios Promise payload lives in `response.data`
- Extracted `src/services/persons.js` — URL lives in one place
## ✅ Exercises 2.9–2.10 — Phonebook: full CRUD + error handling
- REST in practice: POST 201 create, PUT update, DELETE remove (Part 0 diagrams, alive)
- Trust `response.data`: server assigns ids, UI mirrors server truth
- `.catch()` on every Promise; styled red/green Notification with 5s auto-clear
- Duplicate name → `window.confirm` → PUT number update
- Delete → confirm → DELETE; 404 case shows error and refetches the list
- Immutable single-item update: `map(p => p.id === id ? returned : p)`
## ✅ Exercises 2.9–2.10 — Phonebook: filter & component extraction
- 2.9: case-insensitive search filter (`personsToShow` derived in App, input outside the form)
- 2.10: extracted Filter / PersonForm / Persons / Notification modules; state + handlers stay in App
- Event-handler props follow onXxx / handleXxx convention
- Never define a component inside another component (remount + state-loss bugs)

## Commit ↔ Exercise Map (corrected after course renumbering audit)
- 433f14e → 2.6 | 6062d7e → 2.7+2.8 | 033385b → 2.11+2.13
- b913290 → 2.12+2.15 | 735e3fc → 2.14 | 2.9 commit → 2.9 | 2.10 commit → 2.10
## ✅ Exercises 2.16–2.20 — Styles & Countries (live-numbered from 2e page)
- 2.16: success notifications with 5s auto-clear (commit b913290)
- 2.17: failed PUT/DELETE → red error banner + recovery; two-browser 404 test passed (b913290, 735e3fc)
- 2.18: countries search + too-many guard + single-match details (flag, languages)
- 2.19: show buttons + selected state
- 2.20: capital weather (Open-Meteo, key-less) — API keys belong in env vars, never in source

## Commit ↔ Exercise Map (2e)
- b913290 → 2.16+2.17 | 735e3fc → 2.17 | scaffold+2.18 commit → 2.18 | 2.19 commit → 2.19 | 2.20 commit → 2.20