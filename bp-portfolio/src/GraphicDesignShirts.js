import React, {Component} from 'react';
import styled from 'styled-components';
import CPO1 from './images/GDshirts/CPO1.jpg';
import CPO2 from './images/GDshirts/CPO2.jpg';
import CPO3 from './images/GDshirts/CPO3.jpg';
import RIMPAC from './images/GDshirts/RIMPAC.jpg';


const GDesignShirt = styled.div`
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
const GraphicDesignShirtDiv = styled.div`
    display: contents;

`

class GraphicDesignShirts extends Component {

    render(){
        return(
            <GraphicDesignShirtDiv className='GraphicDesignShirtsIndiv'>
                <GDesignShirt background={CPO1} alt='CPO Shirt'/>
                <GDesignShirt background={CPO2} alt='CPO Shirt'/>
                <GDesignShirt background={CPO3} alt='CPO Shirt'/>
                <GDesignShirt background={RIMPAC} alt='RIMPAC Shirt'/>
            </GraphicDesignShirtDiv>
        )
    }
}

export default GraphicDesignShirts;