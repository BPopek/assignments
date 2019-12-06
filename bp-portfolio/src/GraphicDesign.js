import React, {Component} from 'react';
import styled from 'styled-components';
import CPO1 from './images/GD/shirts/CPO1.jpg';
import BreastCancerTees from './images/GD/shirts/BreastCancerTees.jpg';
import SammyMoxie from './images/GD/Sammy/SammyMoxie.jpg';
import Catalog2018 from './images/GD/print/AAFESCatalog2018.jpg';

const GDesignShirt = styled.div`
    width: 150px;
    height: 200px;
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

class GraphicDesign extends Component {

    render(){
        return(
            <GraphicDesignShirtDiv className='GraphicDesignShirtsIndiv'>
                <GDesignShirt background={CPO1} alt='CPO Shirts'/>
                <GDesignShirt background={BreastCancerTees} alt='Breast Cancer Tees'/>
                <GDesignShirt background={SammyMoxie} alt='Sammy Moxie'/>
                <GDesignShirt background={Catalog2018} alt='Catalogs'/>
            </GraphicDesignShirtDiv>
        )
    }
}

export default GraphicDesign;