import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import UXDesign from './UXDesign';
import Home from './Home';
import WebDesign from './WebDesign';
import GraphicDesign from './GraphicDesign';
import Profile from './Profile';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/web' component={WebDesign} />
            <Route path='graphic-design' component={GraphicDesign} />
            <Route Path='ux-design' component={UXDesign} />
            <Route Path='profile' component={Profile} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
