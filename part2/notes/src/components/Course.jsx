import Header from './Header.jsx'
import Content from './Content.jsx'
const Course = (props) => {
    return (
        <div>
        {props.course.map(
            (party) => 
                <div>
                    <Header content={party.name} />
                    <Content parts={party.parts} />
                </div>
            
        )}
        </div>
    )
}

export default Course