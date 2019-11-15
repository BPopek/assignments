import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <Link to='https://www.linkedin.com/in/betsypopek/' className='footerLink'>LinkedIn</Link>
            <Link to='https://github.com/BPopek' className='footerLink'>GitHub</Link>
            <Link to='https://www.instagram.com/betsypopek/' className='footerLink'>Instagram</Link>
        </div>
    )
}

export default Footer;