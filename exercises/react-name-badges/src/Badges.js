import React from 'react';

const Badges = (props) => {
    let{color, firstName, lastName, placeofBirth, phone, favoriteFood, email, tellUs} = props
   
    
    return(        
        <div className='BadgesBelow'>
            {
           (color % 2 === 0) ? <h1 className='BadgeHeader' style={{backgroundColor: 'blue'}}>Badge</h1> : <h1  className='BadgeHeader' style={{backgroundColor: 'red'}}>Badge</h1>
           }
            <p className='BadgeInfo'>Name: {firstName} {lastName}</p>
            <p className='BadgeInfo2'>Phone: {phone}</p>
            <p className='BadgeInfo'>Place of birth: {placeofBirth}</p>
            <p className='BadgeInfo2'>Favorite Food: {favoriteFood}</p>
            <p className='BadgeInfo'>Email: {email}</p>
            {/* <textarea className='BadgeInfo'>{tellUs}</textarea> */}
            <p className="BadgeInfo">Info About You:</p>
            <p className='TellUs'>{tellUs}</p>
        </div>
    )
}

export default Badges