import React from 'react'

const Pet = (props) => {
    console.log(props)
    return (
        <div>
            I have a {props.name} as a pet.
        </div>
    )
}

export default Pet