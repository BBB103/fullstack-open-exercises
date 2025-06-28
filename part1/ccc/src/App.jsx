import { useState } from 'react'

const Display = (props) => {
    return (
      <div>
        {props.counter}
      </div>
    )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const [ counter, setCounter ] = useState(0)
  
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'>
      </Button>,

      <Button onClick={setToZero} text='zero'>
      </Button>,

      <Button onClick={decreaseByOne} text='minus'>
      </Button>
    </div>
  )
}

export default App