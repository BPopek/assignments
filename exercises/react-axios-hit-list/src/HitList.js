import React from 'react';

const HitList = (props) => {
    let {image, name} = props

    return(
        <div className='TextNames'>
            <img src={image} alt='test'/>
            <h1>{name}</h1>
        </div>
    )
}

export default HitList;