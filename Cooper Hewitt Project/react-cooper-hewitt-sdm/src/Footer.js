import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='Footer'>
            <p>2 EAST 91ST STREET &nbsp;
                NEW YORK, NY &nbsp; 10128</p>
            {/* <p>DONATE LINK</p> */}
            <p>
                <Link to='https://www.cooperhewitt.org/donate/' className='FooterDonate'>DONATE</Link>
            </p>
        </div>
    )
}

export default Footer;