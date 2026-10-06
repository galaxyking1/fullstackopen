# Phonebook — Full Stack Open Part 2 (Exercises 2.6–2.17)

Full CRUD phonebook: React + Vite frontend, json-server REST backend (port 3001).

## Features
- Add persons (POST), replace numbers after confirm (PUT), delete with confirm (DELETE)
- Case-insensitive search filter
- Styled success/error notifications with 5s auto-clear
- 404 recovery: failed update/delete shows red banner and re-syncs from server
- All backend communication isolated in `src/services/persons.js`

## Run locally
    npm install
    npx json-server --port 3001 --watch db.json   # terminal 1 (backend)
    npm run dev                                    # terminal 2 (frontend)

## Tech
React, Vite, axios, useEffect, json-server