const Part = (props) => {
  return (
    <div>
      {props.part} ,{props.number}
    </div>
  )
}

const Header = (props) => {
    return (
      <div>
        {props.course}
      </div>
    )
}

const Content = (props) => {
  console.log(props)
    return (
      <div>
        <Part part={props.parts[0].name} number={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} number={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} number={props.parts[2].exercises}/>
      </div>
    )
}

const sum = (props) => {
    return (
      props.reduce((total, value) => total + value.exercises, 0)
    )
}

const Total = (props) => {

    return (
      <div>
        Number of exercises {sum(props.parts)}
      </div>
    )
}


// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}




export default App