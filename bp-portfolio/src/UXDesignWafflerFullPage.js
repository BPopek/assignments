import React, {Component} from 'react';
import styled from 'styled-components';
import WafflerFullPage from './images/UX/WW-Portfolio.jpg';
import { NavLink } from 'react-router-dom'

const UXFullImage = styled.div`
    width: 300px;
    height: 800px;
    ${'' /* background-color: grey;
    background-image: url(${({background}) => background});
    background-position: center;
    background-size: cover; */}
    display: flex;
    text-align: center;
    ${'' /* justify-content: center; */}
`

class UXDesignWafflerFullPage extends Component {
    
    render(){
        return(
            <div className='UX-FullWaffler'>
                <NavLink to='/ux-design/waffler'>
                    <UXFullImage background={WafflerFullPage} alt='Waffler Full Project'/>
                </NavLink>
            </div>
        )
    }
}

export default UXDesignWafflerFullPage;