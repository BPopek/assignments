import React, {Component} from 'react'
import styled from 'styled-components';
import WebDesignCH from './WebDesignCH'

const WDesignContPage = styled.div`
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

class WebDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <WDesignContPage className='WD'>
                <WebDesignCH alt='project'/>
              

            </WDesignContPage>
        )
    }
}

export default WebDesignContainer;