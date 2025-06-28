import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.sfunc}>{props.context}</button>
  )
} 

const Stat = (props) => {
  const obj = {
    context: props.context,
    state: props.state,
    per: props.per
  };
  if(!obj.per){
    return (
      <tr>
        <td>{obj.context}</td>
        <td>{obj.state}</td>
      </tr>
    );
  }
  return (
    <tr>
        <td>{obj.context}</td>
        <td>{100*obj.state} %</td>
    </tr>
  );
};

const Statistics = (props) => {
  const obj = {
    good: props.good,
    neutral: props.neutral,
    bad: props.bad
  }
  if (obj.good+obj.bad+obj.neutral){
    return (
      <table>
        <tbody>
          <Stat context={"good"} state={obj.good} per={0}/>
          <Stat context={"neutral"} state={obj.neutral} per={0}/>
          <Stat context={"bad"} state={obj.bad} per={0}/>
          <Stat context={"all"} state={obj.good+obj.bad+obj.neutral} per={0}/>
          <Stat context={"average"} state={(obj.good-obj.bad)/(obj.good+obj.bad+obj.neutral)} per={0}/>
          <Stat context={"positive"} state={(obj.good)/(obj.good+obj.bad+obj.neutral)} per={1}/>
        </tbody>
      </table>
    )
  }
  return (<div>No feedback given</div>)
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button sfunc={() => {setGood(good+1)}} context={"good"}/>
      <Button sfunc={() => {setNeutral(neutral+1)}} context={"neutral"}/>
      <Button sfunc={() => {setBad(bad+1)}} context={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>

  )
}

export default App
