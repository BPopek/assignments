import React from 'react'
import { withProvider } from './OurProvider'

const Person = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default withProvider(Person)