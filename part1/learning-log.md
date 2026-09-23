# Part 1 Learning Log

## ✅ Exercise 1.1 — First components: Header, Content, Total
- Created three components: `Header`, `Content`, and `Total`
- All data resides in the `App` component
- Props flow down from `App` to child components
- Learned how to pass data using props: `<Header course={course} />`

## ✅ Exercise 1.2 — Extracted Part component
- Created a reusable `Part` component
- `Content` component now composes three `Part` components
- Key lesson: **Repetition → Component**
- When you see repeated code patterns, extract them into a component

## ✅ Exercises 1.3–1.5 — Data modeling with objects & arrays
- 1.3: parts became objects; read via `props.part.name` / `.exercises`
- 1.4: parts collected into one array; passed as a single `parts` prop
- 1.5: entire course modeled as one object; children receive `course.name` / `course.parts`
- Key lesson: **shape the data first; components follow the shape**

## ✅ Exercises 1.6–1.11 — Unicafe App (State & Events)
- Mastered `useState` for component memory.
- Learned the "Event Handler Trap" (always wrap setState in an arrow function).
- Practiced "Lifting State Up" to the parent component.
- Used conditional rendering (`if (total === 0) return...`) to handle empty states.
- Extracted `Button` and `StatisticLine` components using compact arrow syntax.
- Rendered dynamic data inside an HTML `<table>`.