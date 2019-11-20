import React, {Component} from 'react'
import styled from 'styled-components';
import GraphicDesignContainer from './GraphicDesignContainer';
import UXDesignContainer from './UXDesignContainer';
import WebDesignContainer from './WebDesignContainer';
import GraphicDesignShirts from './GraphicDesignShirts';
import UXDesignWaffler from './UXDesignWaffler';
import WebDesignCH from './WebDesignCH';

const HomeCont = styled.div`
    display: grid;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 150px 150px 150px;
    row-gap: 25px;
    column-gap: 25px;
    text-align: center;
    justify-items: center;
    align-items: center;


    @media (min-width: 650px) {
        grid-template-columns: 1fr 1fr 1fr;

    }
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr ;

    }
`

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <HomeCont className='homeContainer'>
                <WebDesignCH />
                <GraphicDesignShirts />
                <UXDesignWaffler />
            </HomeCont>
        )
    }
}

export default Home;