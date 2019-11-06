import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    constructor() {
        super()

        this.state = {
            on: true,
            theme: 'light',
        }
    }

    toggle = () => {
        this.setState(prevState => {
            if (this.state.on === true){
                this.setState({theme: 'light'})
            } else {
                this.setState({theme: 'dark'})
            }
            return {
                on: !prevState.on
            }
        })
    }


    render(){
        return(
            <Provider value={{
                ...this.state,
                toggle: this.toggle
            }}>
            {this.props.children}
            </Provider>
        )
    }
}

export default ThemeProvider;

export function withProvider (Comp){
    return props => <Consumer>
                    {value => <Comp {...value}{...props}/>}
                    </Consumer>
}