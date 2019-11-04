import React, {Component} from 'react';
import Axios from 'axios';
import ColorList from './ColorList'

class BoxContainer extends Component {
    constructor(){
        super()
        this.state = {
          color:[]
        }
      }
      componentDidMount(){
        Axios.get('http://www.colr.org/json/colors/random/1').then(res => {
          this.setState({color: res.data.colors})
        })
      }
      
      render(){
        const ColorListMapped = this.state.color.map((box, i) => <ColorList hex={box.hex}
                                                                        />)
            return (
              <div className="Box">
                {ColorListMapped}
              </div>
            );
      }
    }
    
    export default BoxContainer;