import React, {Component} from 'react';
import styled from 'styled-components';
import GraphicDesignShirts from './GraphicDesignShirts'


const GDesignContPage = styled.div`
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

class GraphicDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <GDesignContPage className='GD'>
                <GraphicDesignShirts/>

            </GDesignContPage>
        )
    }
}

export default GraphicDesignContainer;