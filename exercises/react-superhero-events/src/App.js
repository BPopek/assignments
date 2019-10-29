import React, {Component} from 'react';
import SuperHeroList from './SuperHeroList';
import heros from './data.json'

class App extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <SuperHeroList heros={heros} />
            </div>
        )
    }
}

export default App