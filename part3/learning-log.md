## ✅ Exercises 3.1–3.8 — Phonebook backend: Node + Express + middleware
- Express routes map verbs+paths to handlers; response.json/send set headers automatically
- Route params (:id), status codes 200/204/400/404, immutable updates server-side
- express.json() middleware unlocks request.body; order = pipeline
- morgan 'tiny' logging; custom morgan.token + JSON.stringify to log POST bodies
- Privacy note: never log sensitive payloads in production (GDPR)