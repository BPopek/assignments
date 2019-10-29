import React from 'react'
import VacationInfo from './vacationSpots.json'

const VacationContainer = () => {
    const mappedVacation = VacationInfo.map(((spots, i) => <Spots key={i + spots.place}
                                                                place={spots.place}
                                                                price={spots.price}
                                                                timeToGo={spots.timeToGo}
                                                                />))
    return (
        <div className='vacation-container'>
        {mappedVacation}
        </div>
    )
}

export default VacationContainer