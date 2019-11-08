import React from 'react';
import {Link} from 'react-router-dom';


function Navbar () {
    return(
        <div className='Navbar'>
            <img src='https://collection.cooperhewitt.org/images/cooper-hewitt-logo.svg' className='logo' alt='logo'/>
            <Link to="/">Home</Link>
            {/* <Link to="/ExhibitionsContainer">Current Exhibitions</Link> */}
            <Link to="/current-exhibitions">Current Exhibitions</Link>
            <Link to="/past-exhibitions">Past Exhibitions</Link>
        </div>
    )
}

export default Navbar
