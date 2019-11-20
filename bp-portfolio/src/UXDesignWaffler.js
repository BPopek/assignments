import React, {Component} from 'react';
import styled from 'styled-components';
import Waffler from './images/UX/WebsiteUXWaffler.png';



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

class UXDesignWaffler extends Component {
    

    render(){
        return(
            <div className='UX-indiv'>
                <UXProject background={Waffler} alt='Waffler Project'/>
              

            </div>
        )
    }
}

export default UXDesignWaffler;