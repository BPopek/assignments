import React from 'react';
import {withProvider} from './ThemeProvider'


const Navbar = (props) => {    
        return(
            <div className={props.on ? 'lightNav' : 'darkNav'}>
                <h5>Home</h5>
                <h5>About</h5>
                <h5>Menu</h5>
            </div>
        )
}

export default withProvider(Navbar)