import React, {Component } from 'react'
import PeopleContainer from './PeopleContainer'

class Form extends Component {
    constructor(props) {

        super(props)

        this.state = {
            fullName: '',
            age: '',
            people: [],
            favSoda:'',
            value: '', //this is for fave animals
            diet: []  //this one is an array because with checkboxes you can select more than one
        }
    }
    // CONTROLLED COMPONENT

    handleChange = e => {
        // console.log(e.target) //this gets the whole input below (all fields). Grabs the info from whichever field you are currently typing in/changing
        // console.log(e.target.value)  //this gets the exact info you type. As you type in the field, it changes in the state. this is a CONTROLLED COMPONENT.

        // *** e can only target the value of one at a time. if more than one field used, use the ["fullName"] to target specific input fields 
 
        // this.setState({fullName: e.target.value, age: e.target.value})

        // to target specific fields, use the targeted FIELD NAME (input name), not what you put as the "fullName" v
        this.setState({[e.target.name]: e.target.value})
            // to destructure further: 
        let {name, value} = e.target 
        this.setState({[name]: value})

        if(name === 'diet'){
            const pArr = [...this.state.diet]
            // TERNARY
            // pArr.includes(value) ? pArr.splice(parr.indexOf(value),1) : pArr.push(value)
            // IF STATEMENT 
            if(pArr.includes(value)){
                pArr.splice(pArr.indexOf(value), 1)
            } else {
                pArr.push(value)
            } this.setState({diet: pArr})
        } else {
            this.setState({[name]: value})  //regular set state
        }
    }
    handleSubmit = e => {
            // e.preventDefault()
            // alert(`My name is ${this.state.fullName} and I am ${this.state.age} years old`)
                // to destructure further 
        e.preventDefault()
        let {fullName, age} = this.state 
        const newPerson = {
            fullName,
            age
        }
        // alert(`My name is ${fullName} and I am ${age} years old`)

        // to change the people array, add people to the empty array 
        this.setState(prev => {
            return {
                // people: [...prev.people, {fullName: this.state.fullName, age: this.state.age}] 
                people: [...prev.people, newPerson]
            }   //don't use push, use spread. if property name is the same as the variable, don't need to repeat it.
            // people: [...prev.people, {fullName, age}] //can also const a new person to store the new people, then this line would just say [...prev.people, {newPerson}]
        })
    }
    handleSelect = e => {
        this.setState({value: e.target.value})  //only one dropdown menu, so add value to the state options above and set it to value: e....
    }

    render() {
        console.log(this.state)

    return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"    //this can all be on one line, not broken out as shown
                            placeholder='Full Name' 
                            name='fullName'   //this should always be the same name as the state. 
                            value={this.state.fullName}  
                            onChange={this.handleChange}   //not a saved method, this is the common name used when handling inputs
                            />
                            <br />
            {/* RADIO BUTTON                  */}
                    Coke<input type='radio' name='favSoda' value='coke' onChange={this.handleChange}/>
                    RtBeer<input type='radio' name='favSoda' value='root beer' onChange={this.handleChange}/>
                    Orange<input type='radio' name='favSoda' value='orange' onChange={this.handleChange}/>
                        {/* names are all the same in a radio button. Declare the value in the radio field above         */}
                        <br />
            {/* SELECT BOX              */}
                    Pick your favorite animal
                    <select value={this.state.value} onChange={this.handleSelect}>
                        <option value='Quokka'>Quokka</option>
                        <option value='Kiwi Bird'>Kiwi Bird</option>
                        <option value='Lemming'>Lemming</option>
                        <option value='Panda'>Panda</option>
                    </select>
            {/* CHECK BOX              */}

                    Vegetarian<input type='checkbox' name='diet' value='Vegetarian' onChange={this.handleChange}  />
                    Vegan<input type='checkbox' name='diet' value='Vegan' onChange={this.handleChange}   />
                    Carnivore<input type='checkbox' name='diet' value='Carnivore' onChange={this.handleChange}   />

                   {/* names are all the same in check boxes. Declare the value in the radio field above         */}

                    <button>Submit</button>
                </form>
                <PeopleContainer people={this.state.people} />
            </div>
        )
    }
}

export default Form