import React, {Component} from 'react';
import './App.css';
import HitListContainer from './HitListContainer';
import Navbar from './Navbar';

class App extends Component {
  constructor(){
    super()
  
  }
  
  render(){
    return (
      <div className='App'>
        <Navbar />
        <HitListContainer />
      </div>
    );
  }
}

export default App;
