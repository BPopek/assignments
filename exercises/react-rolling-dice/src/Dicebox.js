import React, {Component} from 'react'

class DiceBox extends Component {
        constructor(){
            super()
            this.state = {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
            }
        }

    randomNumbers = () => {
        let random1 = Math.floor(Math.random() * 6)
        let random2 = Math.floor(Math.random() * 6)
        let random3 = Math.floor(Math.random() * 6)
        let random4 = Math.floor(Math.random() * 6)
        let random5 = Math.floor(Math.random() * 6)
        this.setState({num1: random1})
        this.setState({num2: random2})
        this.setState({num3: random3})
        this.setState({num4: random4})
        this.setState({num5: random5})
    }

    render(){
        return(
            <div>
                <button onClick={}
            </div>
        )
    }
}

export default DiceBox