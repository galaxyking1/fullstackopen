const Country = ({ country }) => {
  const capital = country.capital ? country.capital[0] : 'No capital listed'
  const languages = country.languages ? Object.values(country.languages) : []

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {capital}</p>
      <p>area {country.area}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} width="200" />
    </div>
  )
}

export default Country

import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ capital, lat, lon }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (lat === undefined || lon === undefined) return
    weatherService.getWeather(lat, lon).then(setWeather).catch(() => setWeather(null))
  }, [lat, lon])

  if (!weather || !weather.current_weather) {
    return <p>Weather information unavailable</p>
  }

  const { temperature, windspeed } = weather.current_weather
  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {temperature} °C</p>
      <p>wind {windspeed} km/h</p>
    </div>
  )
}<Weather capital={capital} lat={country.latlng?.[0]} lon={country.latlng?.[1]} />