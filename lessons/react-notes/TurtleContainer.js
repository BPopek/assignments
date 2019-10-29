import React from 'react'

const TurtleContainer = () => {

    const mappedTurtles = turtleInfo.map(((turtle, i) => <Turtle key={i + turtle.name}
                                                                    name={turtle.name}
                                                                    nickName={turtle.nickname}
                                                                    weapon={turtle.weapon}
                                                                />))
                                                             
    return(
        <div>
            {mappedTurtles}
            {/* this creates as many turtle components as there are in your array. Turtle container is to hold all of those components  */}
        </div>
    )
}