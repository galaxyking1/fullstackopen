import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => axios.get(`${baseUrl}/all`).then((r) => r.data)

export default { getAll }