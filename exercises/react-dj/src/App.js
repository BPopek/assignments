import React, { Component } from 'react';
import Mixer from './Mixer';
// import Count from './Count';
import './app.css'


class App extends Component {
    constructor(){
        super()
      
        }
         
    render(){
        return(
            <div className='squareContainer'>
                <Mixer />
        
            </div>
        )
    }
}

export default App