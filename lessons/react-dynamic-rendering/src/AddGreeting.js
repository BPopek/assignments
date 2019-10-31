import React, { Component } from 'react'
// import { isFlow } from '@babel/types'

class AddGreeting extends React.Component {
    constructor(){
        super()
        this.state = {
            newGreeting: '',
        }
    }

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }
    render() {
        const styles={
            display: 'flex',
            justifyContent:'center'
        }
        return (

            // when we want to break the unidirectional isFlow, we get data up the componenet, this is an anonymous callback function.
            // if you see maximum recursion error, try putting an anonymous function in front like below 
            
            <form style={styles} onSubmit={ (e) => this.props.addGreeting(e, this.state.newGreeting) }>
                <input name='newGreeting' onChange={this.handleChange} value={this.state.newGreeting} placeholder='hello'/>
                <button>add new</button>
            </form>
        )
    }
}

export default AddGreeting
