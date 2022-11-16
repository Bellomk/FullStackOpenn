import { useState } from 'react'

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const voteAnecdote = (arr, anec) => {
  const copyVotes = [...arr]
  copyVotes[anec] += 1
  return copyVotes
}

const getMax = (arr) => arr.indexOf(Math.max(...arr))

const Display = ({value}) => <div>{value}</div>

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <b>Anecdote of the day</b>
      <Display value={anecdotes[selected]} />
      <div>
        <Button
          text="vote"
          handleClick={() => setVotes(voteAnecdote(votes, selected))}
        />
        <Button
          text="next anecdote"
          handleClick={() => setSelected(getRandomIntInclusive(0, anecdotes.length - 1))}
        />
      </div>
      <br />
      <b>Anecdote with most votes</b>
      <Display value={anecdotes[getMax(votes)]} />
    </div>
  )
}

export default App