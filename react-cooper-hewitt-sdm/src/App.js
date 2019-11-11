import React from 'react';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import CurrentExhibitions from './CurrentExhibitions'
import ExhibitionsContainer from './ExhibitionsContainer';
import Footer from './Footer';
import './App.css'
import ExhibitionDetails from './ExhibitionDetails';


function App () {
    return(
        <div className='MainDiv'>
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/current-exhibitions' component={ExhibitionsContainer} />
                    <Route path='/past-exhibitions' component={ExhibitionsContainer} />
                    <Route path='/detailed-exhibitions/:id' component={ExhibitionDetails} />
                </Switch>
            <Footer />
        </div>
    )
}
export default App;