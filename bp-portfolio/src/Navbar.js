import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div id='Navbar'>
                <Link exact to='/' className='navbarLink'>All Art</Link>
                <Link to='/web-design' className='navbarLink'>Web Design</Link>
                <Link to='/graphic-design' className='navbarLink'>Graphic Design</Link>
                <Link to='/ux-design' className='navbarLink'>UX Design</Link>
                <Link to='/profile' className='navbarLink'>Profile</Link>
            </div>
        )
    }
}

export default Navbar;