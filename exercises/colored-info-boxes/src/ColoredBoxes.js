import React from 'react'

const ColoredBoxes = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        width: '400px',
        textAlign: 'center',
        padding: '20px',
        margin: '25px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        borderRadius: '10px',
        boxShadow: '5px 5px 10px #666',
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default ColoredBoxes