import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='Footer'>
            <p>
                <a href='https://www.google.com/maps/place/2+E+91st+St,+New+York,+NY+10128/@40.7842946,-73.9600066,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258a2430dad87:0xae679017aaa7da76!8m2!3d40.7842946!4d-73.9578179' className='FooterMapLink'>2 EAST 91ST STREET &nbsp;
                    NEW YORK, NY &nbsp; 10128 </a>
            </p>
            {/* <p>DONATE LINK</p> */}
            <p>
                <Link to='https://www.cooperhewitt.org/donate/' className='FooterDonate'>DONATE</Link>
            </p>
        </div>
    )
}

export default Footer;