import React, { Component } from 'react'
const {Provider, Consumer} = React.createContext()

class OurProvider extends Component {
    constructor() {
        super()

        this.state = {  //anything you want in global state
            title: 'I am a title',
            name: 'Stew',
            on: false,
        }
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render(){
        return(                     //info in state passed in to Provider here
            <Provider value={{
                ...this.state,     //this allows us to pass in multiple objects/methods
                toggle: this.toggle         //passing the toggle method
            }}>
                {this.props.children}
                {/* this becomes APP because it is wrapped by Provider, and how we tagged it on index page */}
            </Provider>
        )

    }
}
export default OurProvider

export function withProvider (Comp){
    return (props) => <Consumer>
                    {value => <Comp {...value}{...props}/>}
                    </Consumer>
    }
// this is the higher order argument (component as argument). This consumer is making available the APP component 
// value is anything in the state 
// props is anything passed in as prop on APP