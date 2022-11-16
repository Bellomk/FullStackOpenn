/*
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

export default App
*/
import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)

  const plusOne = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
  const minusOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter} />
      <Button text='Plus' onClick={plusOne} />
      <Button text='Reset' onClick={reset} />
      <Button text='Minus' onClick={minusOne} />
    </div>
  )
}


export default App