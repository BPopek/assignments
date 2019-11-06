import React from 'react'
import {withProvider} from './ThemeProvider'


const Body = (props) => {   
    console.log(props) 
    return(
        <div className={props.on ? 'lightBody' : 'darkBody'}>
            <h1>Click the button below to toggle the {props.theme} theme!</h1>
            <button onClick={props.toggle} className={props.on ? 'lightButton' : 'darkButton'}>Toggle the Theme</button>
        </div>

    )
}

export default withProvider(Body)