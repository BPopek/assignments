import React from 'react';

const Person = (props) => {
    let{firstName, lastName, placeofBirth, phone, favoriteFood, email, tellUs} = props
    return(
        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>Phone: {phone}</p>
            <p>Place of birth: {placeofBirth}</p>
            <p>Favorite Food: {favoriteFood}</p>
            <p>Email: {email}</p>
            <p>{tellUs}</p>
        </div>
    )
}

export default Person