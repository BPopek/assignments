import React, {Component} from 'react';
import PeopleContainer from './PeopleContainer'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            firstName:'',
            lastName: '',
            people: [],
            list:[]
        }
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        let {firstName, lastName} = this.state 
        
        const newPerson = {
            firstName,
            lastName
        }  
        
        this.setState(prev => {
            return {
                people: [...prev.people, newPerson]
            }
        })
        console.log(this.state.people)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' 
                    placeholder='First Name' 
                    name='firstName' 
                    value={this.state.firstName} 
                    onChange={this.handleChange}
                    />
                    <input type='text' 
                    placeholder='Last Name' 
                    name='lastName' 
                    value={this.state.lastName} 
                    onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <PeopleContainer people={this.state.people} />
            </div>
        )
    }
}

export default Form