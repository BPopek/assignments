import React from 'react'

function SuperHero({name, show, catchPhrase, image}){
    const handleClick = () => {
        alert(catchPhrase)
    }
        return (
            <div className='HeroCards' onClick={handleClick}>
                <h1>{name}</h1>
                <h2>{show}</h2>
                <img src={image} alt={name}/>
            </div>
      
        )
    }


export default SuperHero