import React from 'react';

const ColorList = (props) => {
    let {name, hex, id} = props

    return(
        <div>
        <h3 className='Box' style={{backgroundColor: "#" + props.hex }}> HEX color #{hex} </h3>
        </div>
    )
}

export default ColorList;