import React from 'react';


const Person = (props) =>{
    let {name, age} = props 
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )

}

export default Person