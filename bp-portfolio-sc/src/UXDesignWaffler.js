import React, {Component} from 'react';
import styled from 'styled-components';
import Waffler from './images/UX/WebsiteUXWafflerThumb.png';
import { NavLink } from 'react-router-dom'
import WafflerFullPage from './images/UX/WW-Portfolio.jpg';

const UXDiv = styled.div`
    text-align: center;
    justify-content: center;
    
`

const UXProject = styled.div`
    width: 120px;
    height: 150px;
    background-color: blue;
    background-image: url(${({background}) => background});
    background-position: center;
    background-size: cover;
    display: flex;
    text-align: center;
    justify-content: center;
`
const UXFullImage = styled.div`
    width: 300px;
    height: 1800px;
    background-color: grey;
    background-image: url(${({background}) => background});
    background-position: center top;
    background-size: contain; 
    align-self: center;

    @media (min-width: 650px) {
        width: 600px;
        height: 3600px;
    }
    @media (min-width: 1000px) {
        width: 1000px;
        height: 6000px;

    }
`

class UXDesignWaffler extends Component {

    render(){
        return(
            <UXDiv className='UX-Indiv'>
                {/* <NavLink to='/ux-design/waffler'> */}
                    {/* <UXProject background={Waffler} alt='Waffler Project'/> */}
                    <UXFullImage background={WafflerFullPage} alt='Waffler Full Project'/>
                {/* </NavLink> */}
            </UXDiv>
        )
    }
}

export default UXDesignWaffler;