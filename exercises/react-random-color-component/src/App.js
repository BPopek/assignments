import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import BoxContainer from './BoxContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      color: ''
    }
  }
    componentDidMount(){
      Axios.get('http://www.colr.org/json/colors/random/1').then(res => {
        this.setState({color:res.data})
      })
    }
  
  render(){
        return (
          <div className="App">
            <BoxContainer />
          </div>
        );

  }
}

export default App;
