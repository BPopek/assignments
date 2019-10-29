import React from 'react'
import Turtle from './Turtle'
import turtleInfo from './turtles.json'

const TurtleContainer = () => {
    const mappedTurtles = turtleInfo.map(((turtle, i) => <Turtle key={i + turtle.name}
                                                            name={turtle.name}
                                                            weapon={turtle.weapon}
                                                            nickName={turtle.nickName}
                                                            image={turtle.imgUrl}
                                                             />))
    return (
        <div className='turtle-container'>
            {mappedTurtles}
        </div>
    )
}

export default TurtleContainer