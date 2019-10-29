import React from 'react'

const Turtle = (props) =>{
    let {name, nickName, weapon} = props
    // called destructuring: makes it so you no longer need to say props below, just the {name}
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.nickName}</h3>
            <h4>{props.weapon}</h4>
            <img src={props.image} alt=""/>
        </div>
    )
}
export default Turtle