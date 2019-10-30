import React from 'react'

const Person = (props) => {
    let {firstName, lastName} = props
    return (
            <li>{firstName} {lastName}</li>
    )
}

export default Person