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