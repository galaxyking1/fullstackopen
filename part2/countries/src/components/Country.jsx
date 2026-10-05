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