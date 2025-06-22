const Hello = (props) => {
  console.log(props)
  return (
    <div>

      <p>Hello {props.name}, you are {props.age} years old. </p>
    </div>
  )
}

const App = () => {
  const r = 4
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={2}/>
      <Hello name='Tracy' age={r}/>
    </div>
  )
}

export default App