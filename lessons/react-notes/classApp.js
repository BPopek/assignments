import React, { Component } from 'react'


// render is the only way to return JSX

class App extends Component {
    constructor(){
        super()
        // define state here, properties go within {}. The first is  the beginning state (count = 0)
        this.state = {
            count: 0
        }
        // to point the function to the App class, HTML way is to add the below line to connect it to the App class. 
        // this.handleClick = this.handleClick.bind(this)
        // if you write it as a fat arrow function, it will look outside of that function to look for what to connect it to 
    }
        handleIncrement = () => {

            // this.setState({count: 10})
            // above is an object. to make it incremental use a function. Use plus 1 and not '++' because the ++ will change the state, do not want to change anything outside of the function.

            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        handleDecrement = () => {
            this.setState(prevState => {
                return {count: prevState.count - 1}
            })
        }

    }
// SetState takes one of two data types: object or function. It compares the state to see if it needs to make updates. 

    render(){
        return(
            <div>
                <Count number={this.state.count}/>
                {/* HTML version:
                <button onclick="handleclick()" style={{width: "100%", fontSize: "30px"}} */}
                {/* JS6 version: because it is a method of this class, need the this. before handleClick*/}
                <button onClick={this.handleIncrement} style={{width: "100%", fontSize: "30px"}}>Increment</button>
                <button onClick={this.handleDecrement} style={{width: "100%", fontSize: "30px"}}>Decrement</button>
            </div>
        )
    }
}     

export default App;


// CLASS without constructor or super: they are not usually needed. Can type it as shown below without those, but still need the render function (return needs to be in a function)

                    import React, {Component} from 'react'

                    class DiceBox extends Component {
                        // can create variables or other code here 

                        render(){
                            return(

                            )
                        }
                    }

                    export default DiceBox