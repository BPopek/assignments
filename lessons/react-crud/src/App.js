import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form'
import ToDoList from './ToDoList'


class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: []
    }    
  }
  componentDidMount(){
      axios.get('https://api.vschool.io/bob/todo').then(res => {
        this.setState({todos:res.data.reverse()})
      })
  }

  handleSubmit = (todo) => {
    axios.post('https://api.vschool.io/bob/todo', todo).then(res => {
      this.setState(prevState => {
        return {todos: [res.data, ...prevState.todos]}
      })
    })
  }

  render(){


    return (
      <div>
         <Form handleSubmit={this.handleSubmit}/>
         <ToDoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
