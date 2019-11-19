import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles'
import UXDesignContainer from './UXDesignContainer';
import Home from './Home';
import WebDesignContainer from './WebDesignContainer';
import GraphicDesignContainer from './GraphicDesignContainer';
import Profile from './Profile';
import Navbar from './Navbar';
import Footer from './Footer';


// const HomeGrid = styled.div`
// `


class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/web-design' component={WebDesignContainer} />
              <Route path='/graphic-design' component={GraphicDesignContainer} />
              <Route Path='/ux-design' component={UXDesignContainer} />
              <Route Path='/profile' component={Profile} />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
