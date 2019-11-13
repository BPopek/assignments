import React from 'react';
import {Link} from 'react-router-dom';
import {withExhibitions} from './ExhibitionProvider';

function Navbar (props) {
    return(
        <div className='Navbar'>
            <img src='/images/cooper-hewitt-logo.svg' className='logo' alt='logo'/>
            <Link to="/" className='Navbar-link'>Home</Link>
            <Link to="/current-exhibitions" className='Navbar-link'>Current Exhibitions</Link>
            <Link to="/past-exhibitions"  className='Navbar-link'>Past Exhibitions</Link>
            <Link to="/random-object" onClick={props.randomObject} className='Navbar-link' >Random Find</Link>
            <Link to="/search"  className='Navbar-link'>Search</Link>
        </div>
    )
}

export default withExhibitions(Navbar)
