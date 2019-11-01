import React from 'react';

const Badges = (props) => {
    let{firstName, lastName, placeofBirth, phone, favoriteFood, email, tellUs} = props
    return(
        <div className='BadgesBelow'>
            <h1 className='BadgeHeader'>Badge:</h1>
            <p className='BadgeInfo'>Name: {firstName} {lastName}</p>
            <p className='BadgeInfo2'>Phone: {phone}</p>
            <p className='BadgeInfo'>Place of birth: {placeofBirth}</p>
            <p className='BadgeInfo2'>Favorite Food: {favoriteFood}</p>
            <p className='BadgeInfo'>Email: {email}</p>
            {/* <textarea className='BadgeInfo'>{tellUs}</textarea> */}
            <p className="BadgeInfo">Info About You:</p>
            <textarea  className='TellUs'>{tellUs}</textarea>
        </div>
    )
}

export default Badges