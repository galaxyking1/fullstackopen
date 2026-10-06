# Countries — Full Stack Open Part 2 (Exercises 2.18–2.20)

Country explorer consuming the restcountries REST API, with live capital weather
from Open-Meteo (key-less).

## Features
- Search with "Too many matches" guard (>10 results)
- 2–10 results: list with `show` buttons; single result: auto details view
- Details: capital, area, population, languages, flag
- Capital weather block (temperature + wind) refetched per country via [lat, lon] effect

## Run locally
    npm install
    npm run dev

## Tech
React, Vite, axios, useEffect, restcountries + Open-Meteo APIs