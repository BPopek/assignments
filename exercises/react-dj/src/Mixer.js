import React, {Component} from 'react';
import Square from './Square';

class Mixer extends Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "black", "purple", "blue"]
        }
    }
    
    buttonColor = () => {
        this.setState((prevState) => {
        if(prevState.state.colors[0] === 'white'){
            this.setState({colors: ["black", "black", "black", "black"]})
        } else {
            this.setState({colors: ["white", "white", "white", "white"]})
        }
    })
}
    
    topPurple = () => {
        this.setState(prevState => {
            return {colors: ["purple", "purple", prevState.colors, prevState.colors]}
        } 
    )}
    bLeftBlue = () => {
        this.setState(prevState => {
            return {colors: [prevState.colors, prevState.colors, "blue", prevState.colors]}
        } 
    )}
    bRightBlue = () => {
        this.setState(prevState => {
            return {colors: [prevState.colors, prevState.colors, prevState.colors, "blue"]}
        } 
    )}
    

    render(){
        const mappedColors = this.state.colors.map(color => <Square color={color}/>)

        return(
            <div className='mixer'>
                {mappedColors}
                <button onClick={this.buttonColor} style={{width: "175px", height: '40px', fontSize: "12px"}}>Change B/W</button>
                <button onClick={this.topPurple} style={{width: "175px", height: '40px', fontSize: "12px"}}>Change Top Purple</button>
                <button onClick={this.bLeftBlue} style={{width: "175px", height: '40px', fontSize: "12px"}}>Change Bottom Left Blue</button>
                <button onClick={this.bRightBlue} style={{width: "175px", height: '40px', fontSize: "12px"}}>Change Bottom Right Blue</button>
            </div>
        )
    }
}

export default Mixer;