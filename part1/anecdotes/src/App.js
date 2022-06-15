import { useState } from 'react'
import DailyAnecdote from './components/DailyAnecdote'
import PopularAnecdote from './components/PopularAnecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const maxVotes = Math.max(...votes)
  const popularAnecdoteIdx = votes.indexOf(maxVotes)

  const getRandomInt = (limit) => Math.floor(Math.random() * limit)
  const changeAnecdote = (() => {
    // Prevent using the same anecdote twice in a row
    let tmp = getRandomInt(anecdotes.length)
    while (tmp === selected) {
      tmp = getRandomInt(anecdotes.length)
    }

    setSelected(tmp)
  })

  const voteForCurrentAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++
    setVotes(copyVotes)
  }

  return (
    <>
      <DailyAnecdote
        anecdote={anecdotes[selected]}
        voteNb={votes[selected]}
        onClickVote={voteForCurrentAnecdote}
        onClickNext={changeAnecdote} />
      <PopularAnecdote anecdote={anecdotes[popularAnecdoteIdx]} voteNb={votes[popularAnecdoteIdx]} />
    </>
  )
}

export default App