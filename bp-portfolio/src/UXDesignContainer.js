import React, {Component} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import UXDesignWaffler from './UXDesignWaffler';


const UXDesignContPage = styled.div`
display: grid;
margin: 50px;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
gap: 25px;
flex-direction: row;

@media (min-width: 650px) {
    grid-template-columns: 1fr 1fr 1fr;

}
@media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

}

`

class UXDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <UXDesignContPage className='UX'>
                <UXDesignWaffler />
            </UXDesignContPage>
        )
    }
}

export default UXDesignContainer;