import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const petInfo = props.pets.map((pet) => <Pet name={pet.name}
                                                breed={pet.breed}/>) 
    let {name, age} = props

    return (
        <div className="friend">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <div>
                {petInfo}
            </div>
        </div>      
    )
}

export default Friend