import axios from 'axios'

const getWeather = (lat, lon) =>
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
    .then((r) => r.data)

export default { getWeather }