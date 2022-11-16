import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={good + bad + neutral} />
        <StatisticLine text='Average' value={(good - bad)/(good + bad + neutral)} />
        <StatisticLine text='Positive' value={(good/(good + bad + neutral))*100 + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  if (good+neutral+bad == 0){
    return (
      <div>
        <b>Give feedback</b>
        <div>
          <Button text='Good' handleClick={handleGood}/>
          <Button text='Neutral' handleClick={handleNeutral}/>
          <Button text='Bad' handleClick={handleBad}/>
        </div>
        <br/>
        <b>Statistics</b>
        <br/>
        <div>Give feedback to show statistics</div>
      </div>
    )
  }

  return (
    <div>
      <b>Give feedback</b>
      <div>
        <Button text='Good' handleClick={handleGood}/>
        <Button text='Neutral' handleClick={handleNeutral}/>
        <Button text='Bad' handleClick={handleBad}/>
      </div>
      <br/>
      <b>Statistics</b>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
  
}

export default App