const Parts = (props) => {
    return(
        <div>
            {props.name} {props.exercises}
        </div>
    )
}
 
const Content = (props) => {
    console.log('content',props)
    return (
        <div>
            {
                props.parts.map((part) => 
                    <Parts key={part.id} name={part.name} exercises={part.exercises}/>
                )
                
            }
            <h3>
                total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
            </h3>
        </div>
    )
}

export default Content