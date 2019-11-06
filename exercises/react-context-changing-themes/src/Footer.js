import React from 'react';
import {withProvider} from './ThemeProvider'


const Footer = (props) => {    
        return(
            <div className={props.on ? 'lightFooter' : 'darkFooter'}>
                <h3>Featuring a fun, fabulous footer</h3>
            </div>
        )
}

export default withProvider(Footer)