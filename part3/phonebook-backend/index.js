require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(express.static('dist'))

morgan.token('body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// --- MONGODB CONNECTION ---
const url = process.env.MONGODB_URI
console.log('connecting to', url)
mongoose.set('strictQuery', false)

mongoose.connect(url, { family: 4 })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

// --- ROUTES ---

// GET all persons
app.get('/api/persons', (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons)
  })
})

// GET info
app.get('/info', (req, res) => {
  Person.countDocuments({}).then((count) => {
    res.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
  })
})

// GET single person
app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      person ? res.json(person) : res.status(404).end()
    })
    .catch((error) => next(error))
})

// POST new person (with duplicate check)
app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  Person.findOne({ name: body.name })
    .then((existing) => {
      if (existing) {
        return res.status(400).json({ error: 'name must be unique' })
      }
      const person = new Person({ name: body.name, number: body.number })
      return person.save().then((savedPerson) => res.status(201).json(savedPerson))
    })
    .catch((error) => next(error))
})

// PUT update person
app.put('/api/persons/:id', (req, res, next) => {
  const { name, number } = req.body

  Person.findByIdAndUpdate(
    req.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then((updatedPerson) => {
      updatedPerson ? res.json(updatedPerson) : res.status(404).end()
    })
    .catch((error) => next(error))
})

// DELETE person
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error))
})

// --- ERROR HANDLER MIDDLEWARE ---
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

// --- START SERVER ---
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})