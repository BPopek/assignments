import React from 'react'

const Pet = (props) => {
    let {name, breed} = props 
    return (
        <div>
            <h4>{name}:</h4>
            <h5>{breed}</h5>
        </div>
    )
}

export default Pet