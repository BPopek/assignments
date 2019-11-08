import React from 'react';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import CurrentExhibitions from './CurrentExhibitions'
import ExhibitionsContainer from './ExhibitionsContainer';
import Footer from './Footer';
import './App.css'


function App () {
    return(
        <div>
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/current-exhibitions' component={ExhibitionsContainer} />
                    <Route path='/past-exhibitions' component={ExhibitionsContainer} />
                </Switch>
                {/* <Main /> */}
            <Footer />
        </div>
    )
}
export default App;