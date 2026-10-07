# Part 3a – Node.js and Express (Learning Log)

## Exercises Completed

### 3.1 – Return list of persons
- Created Express server
- Returned hardcoded phonebook entries at `GET /api/persons`
- Learned `response.json()`

### 3.2 – Info page
- Created `GET /info`
- Shows number of people + current server time
- Practiced sending HTML with `response.send()`

### 3.3 – Get single person
- Implemented `GET /api/persons/:id`
- Used `request.params.id`
- Returned 404 when not found

### 3.4 – Delete person
- Implemented `DELETE /api/persons/:id`
- Used `.filter()` to remove person
- Returned status 204
- Tested with Thunder Client

### 3.5 – Add new person
- Added `app.use(express.json())`
- Implemented `POST /api/persons`
- Generated random id with `Math.random()`
- Used `.concat()` to add new person

### 3.6 – Validation
- Reject request if name or number is missing (400)
- Reject request if name already exists (400)
- Returned clear error messages in JSON

## Key Learnings
- How to create different types of routes in Express
- Difference between `response.json()`, `response.send()`, and `response.status().end()`
- How to work with route parameters (`:id`)
- Importance of validating request body
- Testing APIs with Thunder Client