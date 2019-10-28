import React from 'react'

const Person = (props) => {
    console.log(props)
    return (
        <div>
            <h1>I am a person</h1>
            <Pet.type= {props.pet}>
        </div>
    )
}

export default Person


