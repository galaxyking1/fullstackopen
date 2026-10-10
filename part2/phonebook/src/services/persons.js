import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => axios.get(baseUrl).then((r) => r.data)
const create = (newObject) => axios.post(baseUrl, newObject).then((r) => r.data)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject).then((r) => r.data)
const remove = (id) => axios.delete(`${baseUrl}/${id}`).then((r) => r.data)

export default { getAll, create, update, remove }