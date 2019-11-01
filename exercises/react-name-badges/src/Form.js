import React, { Component } from 'react'
import BadgeContainer from './BadgeContainer'

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
            badges: [],
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
                badges: [...prevState.badges, newPerson]
            }
        })
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }
    render(){
        // const styles = {
        //     display: 'grid',
        //     gridTemplateColumns: '1fr, 1fr',
        //     // display: 'flex',
        //     alignItems: 'center',
        //     // flexDirection: 'rows'
        // }
        return(
            <div>
                <form className='MainInput' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='First Name' className='InputLeft' name='firstName' value={this.state.firstName} onChange={this.handleChange} minlength='3'/>
                    <input type='text' placeholder='Last Name' className='InputRight' name='lastName' value={this.state.lastName} onChange={this.handleChange} minlength='3'/>
                    <input type='email' placeholder='Email' className='InputLeft'name='email' value={this.state.email} onChange={this.handleChange} minlength='3'/>
                    <input type='text' placeholder='Place of Birth' className='InputRight'name='placeOfBirth' value={this.state.placeOfBirth} onChange={this.handleChange} minlength='3'/>
                    <input type='tel' placeholder='Phone' className='InputLeft' name='phone' pattern='[0-9]{10}' value={this.state.phone} onChange={this.handleChange} minlength='3'/>
                    <input type='text' placeholder='Favorite Food' className='InputRight' name='favoriteFood' value={this.state.favoriteFood} onChange={this.handleChange} minlength='3'/>
                    <textarea type='text' placeholder='Tell us about yourself' className='TellUs' name='tellUs' value={this.state.tellUs} onChange={this.handleChange} minlength='3'/>
                    <button className='button'>Submit</button>
                </form>
                <div>
                    <BadgeContainer badges={this.state.badges} />
                </div>
            </div>
        )
    }
}
export default Form