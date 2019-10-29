import React from 'react'

const Turtle = (props) => {
    let {name, nickName, weapon, image} = props
    return (
        <div className='turtle'>
            <h1>{name}</h1>
            <h3>{nickName}</h3>
            <h4>{weapon}</h4>
            <img src={image} alt=""/>
        </div>
    )
}

export default Turtle