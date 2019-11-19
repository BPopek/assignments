import React, {Component} from 'react';
import styled from 'styled-components';
import CPO1 from './images/GDshirts/CPO1.jpg';
import CPO2 from './images/GDshirts/CPO2.jpg';
import CPO3 from './images/GDshirts/CPO3.jpg';
import RIMPAC from './images/GDshirts/RIMPAC.jpg';


const GDesignShirt = styled.div`
    width: 200px;
    height: 250px;
    background-color: blue;
    background-image: url(${({background}) => background});
    background-position: center;
    background-size: cover;
`
const GraphicDesignShirtContainer = styled.div`
    display: flex;
`

class GraphicDesignShirts extends Component {
    

    render(){
        return(
            <GraphicDesignShirtContainer className='GraphicDesignIndiv'>
                <GDesignShirt background={CPO1} alt='CPO Shirt'/>
                <GDesignShirt background={CPO2} alt='CPO Shirt'/>
                <GDesignShirt background={CPO3} alt='CPO Shirt'/>
                <GDesignShirt background={RIMPAC} alt='RIMPAC Shirt'/>

            </GraphicDesignShirtContainer>
        )
    }
}

export default GraphicDesignShirts;