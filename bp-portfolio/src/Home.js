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
    margin: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 300px 300px 300px;
    row-gap: 25px;
    column-gap: 25px;
    ${'' /* flex-direction: row; */}

    @media (min-width: 650px) {
        grid-template-columns: 1fr 1fr 1fr;

    }
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    }

`

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <HomeCont>
                <WebDesignCH />
                <GraphicDesignShirts />
                <UXDesignWaffler />
            </HomeCont>
        )
    }
}

export default Home;