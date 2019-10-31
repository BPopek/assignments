import React from 'react'

function Greeting({color, greeting}){
    const styles = {
        color,
        textAlign: 'center'
    }
    return(
        <h1 style={styles}>{greeting}</h1>
    )
}
export default Greeting