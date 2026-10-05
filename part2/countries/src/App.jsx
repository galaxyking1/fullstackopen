import { useState, useEffect } from 'react'
import countriesService from './services/countries'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countriesService.getAll().then(setAllCountries)
  }, [])

  const handleFilterChange = (event) => setFilter(event.target.value)

  const matches = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

        {selected ? (
        <Country country={selected} />
      ) : matches.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : matches.length === 1 ? (
        <Country country={matches[0]} />
      ) : (
        <ul>
          {matches.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{' '}
              <button onClick={() => setSelected(country)}>show</button>
            </li>
          ))}
        </ul>
      )}

  return (
    <div>
      <h2>Countries</h2>
      <div>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </div>
      {matches.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <ul>
          {matches.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App