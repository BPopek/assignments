import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            value: '',
            diet: [],
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        // this.setState({[name]: value})

        if(name === 'diet'){
            const pArr = [...this.state.diet]
            if(pArr.includes(value)){
                pArr.splice(pArr.indexOf(value), 1)
            } else {
                pArr.push(value)
            }
            this.setState({diet: pArr})
            } else {
                this.setState({[name]: value})
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        let {firstName, lastName, age, gender, destination, diet} = this.state 
        alert(` 
                First name: ${firstName}
                Last Name: ${lastName}
                Age: ${age}
                Gender: ${gender}
                Destination: ${destination}
                Dietary Restrictions: ${diet}`)
    }
    
    handleSelect = e => {
        this.setState({destination: e.target.value})
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Traveler Information</h2>

                    <input type='text' placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                    <input type='text' placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
                    <input type='number' placeholder='Age' name='age' value={this.state.age} onChange={this.handleChange}/>

                    <h3>Gender:</h3>
                    Male<input type='radio' name='gender' value='male' onChange={this.handleChange}/>
                    Female<input type='radio' name='gender' value='female' onChange={this.handleChange}/>
                    Cookie Monster<input type='radio' name='gender' value='cookieMonster' onChange={this.handleChange}/>

                    <h3>Destination</h3>
                    <select value={this.state.destination} onChange={this.handleSelect}>
                        <option value='Jackson Hole, WY'>Jackson Hole, WY</option>
                        <option value='Chamonix, France'>Chamonix, France</option>
                        <option value='Alta, UT'>Alta, UT</option>
                        <option value='Crystal Mountain, WA'>Crystal Mountain, WA</option>
                    </select>

                    <h3>Dietary Restrictions</h3>
                    Vegetarian<input type='checkbox' name='diet' value='Vegetarian' onChange={this.handleChange}    />
                    Vegan<input type='checkbox' name='diet' value='Vegan' onChange={this.handleChange}    />
                    Cookies<input type='checkbox' name='diet' value='Cookies' onChange={this.handleChange}    />
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )}
}

export default Form