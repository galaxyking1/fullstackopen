# courseinfo — Full Stack Open Part 1 (Exercises 1.1–1.5)

A small React application built with Vite for the Full Stack Open
course by the University of Helsinki. It displays course and part
information using components and props.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Concepts practiced

- Defining React components (`Header`, `Content`, `Part`, `Total`)
- Passing data from parent to child with props
- Component composition (Repetition → Component)
- JSX fundamentals

## Project structure

```text
src/
  App.jsx    # All components (Header, Part, Content, Total, App)
  main.jsx   # Application entry point
```

## Progress

- [x] 1.1 — Header, Content, Total components
- [x] 1.2 — Extracted Part component

## ✅ Exercises 1.3–1.5 — Data modeling with objects & arrays
- 1.3: parts became objects; read via `props.part.name` / `.exercises`
- 1.4: parts collected into one array; passed as a single `parts` prop
- 1.5: entire course modeled as one object; children receive `course.name` / `course.parts`
- Key lesson: **shape the data first; components follow the shape**