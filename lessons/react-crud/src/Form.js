import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            title: ''
        }   
                    // needs to be the same name from the API


    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.title} name='title' />
                <button>Submit</button>
            </form>
        )
    }
}
export default Form;