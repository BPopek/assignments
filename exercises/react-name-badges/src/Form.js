import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            tellUs: '',
            people: [],
            validationRules: {minLength: 3}
        }

    }
    handleSubmit = e => {
        e.preventDefault()
        let{firstName, lastName, placeofBirth, phone, favoriteFood, email, tellUs} = this.state 
        
        const newPerson = {
            firstName, 
            lastName, 
            placeofBirth, 
            phone, 
            favoriteFood, 
            email, 
            tellUs
        }
        this.setState(prevState => {
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    render(){
        const styles = {
            // display: 'grid',
            // gridTemplateColumns: '1fr, 1fr',
            // // display: 'flex',
            // alignItems: 'center',
            // // flexDirection: 'rows'
        }
        return(
            <div>
                <form style={styles} onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                    <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
                    <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                    <input type='text' placeholder='Place of Birth' name='placeOfBirth' value={this.state.placeOfBirth} onChange={this.handleChange}/>
                    <input type='tel' placeholder='Phone' name='phone' pattern='[0-9]{10}'value={this.state.phone} onChange={this.handleChange}/>
                    <input type='text' placeholder='Favorite Food' name='favoriteFood' value={this.state.favoriteFood} onChange={this.handleChange}/>
                    <input type='text' placeholder='Tell us about yourself' name='tellUs' value={this.state.tellUs} onChange={this.handleChange}/>
                    <button type='button' disabled={this.state.validationRules}>Submit</button>
                </form>
                
            </div>
        )
    }
}
export default Form