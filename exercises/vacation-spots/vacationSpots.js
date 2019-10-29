import React from 'react'

const spots = (props) => {
    let {place, price, timeToGo} = props
    return (
        <div className='spots'>
        <h1> {place}</h1>
        <h3>{price}</h3>
        <h4>{timeToGo}</h4>
        </div>
    )
}
export default vacationSpots
