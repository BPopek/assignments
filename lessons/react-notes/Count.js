import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super()
    }
    render(){
        return (
         <h1 style={{textAlign: "center"}}>
             {this.props.number}
             </h1>
        )
    }
}


// can export the file at the end or by placing the 'export default' text before the class 
// export default BodyClass

// in class based components, if props are not defined you can just say 'this.props' to point it to the component