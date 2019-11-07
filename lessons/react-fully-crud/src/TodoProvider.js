import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()


class TodoProvider extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            todos: [],
        }
    }

        addNewTodo = newTodo => {
            axios.post('https://api.vschool.io/Betsy/todo', newTodo).then(res => {
                this.setState(prevState => {                                         
                    return {
                        todos: [...prevState.todos, res.data]
                    }
                })
                //setState is adding it to the client side, shows it immediately
            })
        }
        getAllTodos = () => {
            axios.get('https://api.vschool.io/Betsy/todo').then(res => {
                this.setState({todos: res.data})
            })
        }
        deleteTodo = (id) => {
            axios.delete('https://api.vschool.io/Betsy/todo/' + id).then(res => {
                this.setState(prevState => {
                    return {
                    todos: prevState.todos.filter(todo => todo._id !== id)     
                    //everything is included in new array except the todo that matches the id we just provided
                    //the .then and all following code is what makes it live for the user (no refresh)
                }
                })
            })
        }
        editTodo = (id, updatedTodo) => {
            axios.put('https://api.vschool.io/Betsy/todo/' + id, updatedTodo).then(res => {
                this.setState(prev => {
                    return {
                        todos: prev.todos.map(todo => todo._id === id ? res.data : todo)
                    }
                })
            })
        }

    
    render(){
        return(
            <Provider value={{
                ...this.state,
                addNewTodo: this.addNewTodo,      //must add all methods here for them to be available
                getAllTodos: this.getAllTodos,
                deleteTodo: this.deleteTodo,
                editTodo: this.editTodo,
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TodoProvider

export function withTodos (Comp){
    return props => <Consumer>
            {value => <Comp {...value}{...props} />}            
    </Consumer>
}