import React, {Component} from 'react';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import ExhibitionsContainer from './ExhibitionsContainer';
import Footer from './Footer';
import './App.css'
import ExhibitionDetails from './ExhibitionDetails';
import RandomObject from './RandomObject';
import Search from './Search'
import SearchDetailPage from './SearchDetailPage';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class App extends Component {

    render(){
        return(
            <div className='MainDiv'>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/current-exhibitions' component={ExhibitionsContainer} />
                        <Route path='/past-exhibitions' component={ExhibitionsContainer} />
                        <Route path='/detailed-exhibitions/:id' component={ExhibitionDetails} />
                        <Route path='/random-object' component={RandomObject} />
                        <Route path='/search' component={Search} />
                        <Route path='/search-detail-page/:id' component={SearchDetailPage} />

                    </Switch>
                <Footer />
            </div>
        )
    }
}
export default App;