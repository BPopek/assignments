import React from 'react'

const Spots = (props) => {
    let {place, price, timeToGo} = props
    let color = ""
        if (timeToGo === 'Spring') {
            color = '#AC7'
        } else if (timeToGo === 'Summer'){
            color = '#EA5732'
        } else if (timeToGo === 'Fall'){
            color = '#346135'
        } else {
            color = '#ADD'
        }
        let dollars = ""
            if (price < 500){
                dollars = "$"
            } else if (price > 500 && price < 1000) {
                dollars = "$$"
            } else dollars = "$$$"
    
    return (
        <div className='spots' style={{backgroundColor:color}}>
        <h1>{place} • {dollars}</h1>
        <h3>${price}</h3>
        <h4>{timeToGo}</h4>

        </div>
    )
}
export default Spots
