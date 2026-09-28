import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]   

  const [selected, setSelected] = useState(0)
  
  // State for votes: an array of numbers, initialized to 0 for each anecdote
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const getRandomIndex = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const handleVote = () => {
    // 1. Copy the current points array
    const newPoints = [...points]
    // 2. Increment the vote for the currently selected anecdote
    newPoints[selected] += 1
    // 3. Update state with the NEW array
    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={getRandomIndex}>next anecdote</button>
    </div>
  )
}

export default App