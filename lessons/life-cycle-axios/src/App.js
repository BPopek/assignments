import React, {Component} from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()

    this.state = {
      name: 'john'
    }    
  }
  componentDidMount(){
      axios.get('https://api.vschool.io/bob/todo').then(res => {
        this.setState({todos:res.data})
      })
  }
  render(){
    return (
      <div>

      </div>
    );
  }
}

export default App;
