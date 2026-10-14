## ✅ Exercises 3.1–3.8 — Phonebook backend: Node + Express + middleware
- Express routes map verbs+paths to handlers; response.json/send set headers automatically
- Route params (:id), status codes 200/204/400/404, immutable updates server-side
- express.json() middleware unlocks request.body; order = pipeline
- morgan 'tiny' logging; custom morgan.token + JSON.stringify to log POST bodies
- Privacy note: never log sensitive payloads in production (GDPR)
## ✅ Exercises 3.9 – 3.11 — Deploying the Full Stack Phonebook

- Enabled CORS so frontend (different origin) can talk to backend
- Used `process.env.PORT` so the app works both locally and on Render
- Deployed backend to Render (free tier)
- Created production build of the frontend (`npm run build`)
- Served static files from the backend using `express.static('dist')`
- Changed frontend `baseUrl` to relative path `/api/persons`
- Full-stack app now works both in development and in production