import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className='Navbar'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Products">Products</Link>
        </div>
    )
}

export default Navbar