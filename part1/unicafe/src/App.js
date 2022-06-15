import { useState } from 'react'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodInfo = {
    "onClick": () => setGood(good + 1),
    "text": "good"
  }

  const neutralInfo = {
    "onClick": () => setNeutral(neutral + 1),
    "text": "neutral"
  }

  const badInfo = {
    "onClick": () => setBad(bad + 1),
    "text": "bad"
  }

  return (
    <div>
      <Feedback good={goodInfo} neutral={neutralInfo} bad={badInfo} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App