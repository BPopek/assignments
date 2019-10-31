import React, {Component} from 'react';
// import './App.css';
import Options from './Options'
import Greeting from './Greeting'
import AddGreeting from './AddGreeting'

class App extends React.Component {
  constructor(){
    super()
  
    this.state = {
      color: '',
      greetings: [],
      greeting: '',
      addGreeting: ''
    }
  }
  handleChange = e => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }
  addGreeting = (e, newItem) => {
    e.preventDefault()
    this.setState(prevState => {
      return { greetings: [...prevState.greetings, newItem] }
    })
  }
  handleChangeGreetingSelect = (e) => {
    this.setState({greeting: e.target.value})
  }

  render(){

    return (
      <div>
        <Options greetings={this.state.greetings} color={this.state.color} handleChange={this.handleChange} handleSelect={this.handleChangeGreetingSelect}/>
        <Greeting color={this.state.color} greeting={this.state.greeting}/>
        <AddGreeting addGreeting={this.addGreeting} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
