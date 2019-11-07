import React, { Component } from 'react'
import Form from './Form'
import {withTodos} from './TodoProvider'


class Todo extends Component {
    constructor(){
        super()
        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                toggled: !prevState.toggled
            }
        })
    }

    render(){
        const {title, description, _id} = this.props.info     //props.info - to show all of the info
        return(
            <div>
                {this.state.toggled ? 
                    <div className='todo'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <button onClick={() => this.props.deleteTodo(_id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                        :
                    <Form button='Save Changes' type='update' todo={this.props.info} toggle={this.toggle}/>
                }
            </div>
        )
    }
}

export default withTodos(Todo);
