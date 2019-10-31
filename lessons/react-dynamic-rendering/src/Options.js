import React, { Component } from 'react'

class Options extends React.Component {
    constructor(){
        super()
        this.state = {
            toggle: false,
            selected: '',
        }   //this is used to toggle the style. Is true until condition is met to make it false.
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {toggle: !prevState.toggle}
        })
    }
    handleSelection = (e) => {
        this.setState({selected: e.target.value})
    }
    render(){
        const styles = {
            display: 'flex',
            alignItems: 'center', 
            flexDirection: 'column'
        }

        let display;
        if(this.state.toggle){
            display = "block"  //or use visibility: hidden and visibility: visible
        } else {
            display = 'none'
        }

        // const toggleableInputStyles = { display }

        const mappedGreetings = this.props.greetings.map((greeting) => {
            return <option value={greeting}>{greeting}</option>
        })

        return(
                <div style={styles}>
                    <select value={this.state.selected} onChange={() => {this.props.handleSelection(this.state.selected)}} name='greeting-drop-down' id='greeting-options'>
                        <option value=''>hello</option>
                        <option value=''>hi</option>
                        <option value=''>Good day, all you fine people</option>
                        {mappedGreetings}
                    </select>
                    Show color input? <label></label><input onChange={this.handleToggle} type='checkbox'/>
                    
                    { this.state.toggle && 
                    <label htmlFor='color'>what color? 
                        <input onChange={this.props.handleChange} id='color' value={this.props.color} name='color' placeholder='#666' /></label>
                    //:     this is used for a ternary statement. the && above would be a ? 
                    //<p>this is where your input would be</p>
                    //can use null to show nothing, or 
                    }
                </div>
            )
    }
}


export default Options