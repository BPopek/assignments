import React, {Component} from 'react'
import styled from 'styled-components';
import CHhome from './images/Web/CHhomepage.png'

const WebDesignCHitem = styled.div`
    width: 200px;
    height: 250px;
    background-color: yellow;
    background-image: url(${({background}) => background});
    background-position: center;
    background-size: cover;
    position: flex;
    display: inline-block;
    resize-mode: stretch;
`

class WebDesignCH extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='WebDesign'>
                <WebDesignCHitem  background={CHhome} alt='Cooper Hewitt Project'/>
            </div>
        )
    }
}

export default WebDesignCH;