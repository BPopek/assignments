import React, { Component } from 'react'
import {withTodos} from './TodoProvider'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }
    }
    //to keep info showing in the input fields when user clicks edit button. If no set state to title/description the field would be blank
    componentDidMount(){
        if(this.props.type === 'update'){
            let {title, description} = this.props.todo
            this.setState({title, description})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add'){
            this.props.addNewTodo(this.state)
            //this is because we are reusing our form, type of the form on APP is 'add'. Uses either type of form based on name. 
        } else {
            this.props.editTodo(this.props.todo._id, this.state)
            this.props.toggle()
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'todo-submit' : 'edit-todo'}>
                <input type="text" 
                       placeholder='Title' 
                       name='title' 
                       value={this.state.title} 
                       onChange={this.handleChange}  
                       />
                <input type="text" 
                       placeholder='Description' 
                       name='description' 
                       value={this.state.description} 
                       onChange={this.handleChange}  
                       />
                <button>{this.props.button}</button>
            </form>
        )
    }
}

export default withTodos(Form)