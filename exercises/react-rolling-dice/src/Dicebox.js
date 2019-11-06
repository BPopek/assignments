import React, {Component} from 'react'

class DiceBox extends Component {
        constructor(props){
            super(props)
            this.state = {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
            }
        }

    handleRandom = () => {
        let random1 = Math.floor(Math.random() * 6 + 1)
        let random2 = Math.floor(Math.random() * 6 + 1)
        let random3 = Math.floor(Math.random() * 6 + 1)
        let random4 = Math.floor(Math.random() * 6 + 1)
        let random5 = Math.floor(Math.random() * 6 + 1)
        this.setState({num1: random1})
        this.setState({num2: random2})
        this.setState({num3: random3})
        this.setState({num4: random4})
        this.setState({num5: random5})
    }
    handleReset = () => {
        this.setState({num1: 0})
        this.setState({num2: 0})
        this.setState({num3: 0})
        this.setState({num4: 0})
        this.setState({num5: 0})

    }
    
    render(){
        return(
            <div className='box'>
                <die className='die1' number={this.state.num1} />
                <die className='die2' number={this.state.num2} />
                <die className='die3' number={this.state.num3} />
                <die className='die4' number={this.state.num4} />
                <die className='die5' number={this.state.num5} />

                <button className= 'roll' onClick={this.handleRandom}>Roll Dice!</button>
                <button  className= 'reset' onClick={this.handleReset}>Reset Dice</button>
            </div>
        )
    }
}

export default DiceBox