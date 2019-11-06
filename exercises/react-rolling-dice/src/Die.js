import React from 'react';
import Dicebox from './Dicebox'

const Die = (props) => {

    return (
        <div className='indDie'>
            {/* <div style={style}>Die 1{num1}</div> */}
            <div style={style}>{props.number}</div>
        
        </div>
    )
}

export default Die