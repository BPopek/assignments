import React from 'react'

const Navbar = () => {
    const styles = {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        fontFamily: "Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif'",

    }
    return(
        <div>
            <ul className='Nav' style={styles}>
                <li class='navLeft'>Start Bootstrap</li>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SAMPLE POST</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navbar