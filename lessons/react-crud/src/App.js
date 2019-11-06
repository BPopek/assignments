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
        this.setState({todos: res.data.reverse()})
      })
  }

  handleDelete = (id) => {
    axios.delete('https://api.vschool.io/bob/todo/' + id).then(response => {
      console.log(response)
    this.setState((prevState) => {
      const todos = prevState.todos.filter(todo => {
        return todo._id !== id
      })
      return {todos: todos}   //can simplify to { todos }
    }
    )
    })
  }

  handleSubmit = (todo) => {
    axios.post('https://api.vschool.io/bob/todo', todo).then(res => {
      this.setState(prevState => {
        return {todos: [res.data, ...prevState.todos]}
      })
    })
  }
  handleSave = (updates, id) => {
    axios.put('https://api.vschool.io/bob/todo/' + id, updates).then(response => {
      this.setState(prevState => {
        const todos = [...prevState.todos]   //makes a copy so you don't have to worry about changing prevstate
        const index = todos.findIndex(todo => {
          return todo._id === id
        })
        todos[index] = response.data
        return { todos }    //same as {todos: todos}
      })
    })
  }


  render(){
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    return (
      <div style = {style}>
         <Form handleSubmit={this.handleSubmit}/>
         <ToDoList 
            handleDelete={this.handleDelete} 
            todos={this.state.todos} 
            handleSave={this.handleSave}/>
      </div>
    );
  }
}

export default App;
