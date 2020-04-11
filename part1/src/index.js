import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Hannah'
  const age = '27'

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Nikolai" age = {5 + 22}/>
      <Hello name={name} age = {age}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))