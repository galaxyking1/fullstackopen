import { useState, useEffect } from 'react'
import personsService from './services/persons'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }
  return <div className={type}>{message}</div>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')

  useEffect(() => {
    personsService.getAll().then(setPersons)
  }, [])

  const showNotification = (text, type) => {
    setMessage(text)
    setMessageType(type)
    setTimeout(() => setMessage(null), 5000)
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const existing = persons.find((p) => p.name === newName)

    if (existing) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changed = { ...existing, number: newNumber }
        personsService
          .update(existing.id, changed)
          .then((returned) => {
            setPersons(persons.map((p) => (p.id === existing.id ? returned : p)))
            showNotification(`Updated ${returned.name}`, 'success')
          })
          .catch(() => {
            showNotification(
              `Information of ${existing.name} has already been removed from server`,
              'error'
            )
            setPersons(persons.filter((p) => p.id !== existing.id))
          })
      }
      setNewName('')
      setNewNumber('')
      return
    }

    personsService
      .create({ name: newName, number: newNumber })
      .then((returned) => {
        setPersons(persons.concat(returned))
        setNewName('')
        setNewNumber('')
        showNotification(`Added ${returned.name}`, 'success')
      })
      .catch(() => showNotification('Could not add person to server', 'error'))
  }

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id))
          showNotification(`Deleted ${person.name}`, 'success')
        })
        .catch(() => {
          showNotification(
            `Information of ${person.name} has already been removed from server`,
            'error'
          )
          personsService.getAll().then(setPersons)
        })
    }
  }

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{' '}
            <button onClick={() => handleDelete(person)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App