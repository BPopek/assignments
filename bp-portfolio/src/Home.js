import React, {Component} from 'react'
import styled from 'styled-components';
import GraphicDesignShirts from './GraphicDesignShirts';
import WebDesignCH from './WebDesignCH';
import Waffler from './images/UX/WebsiteUXWafflerThumb.png';
import {Link} from 'react-router-dom'
import CHThumb from './images/Web/CH-Sign-Thumb.jpg'


const HomeCont = styled.div`
    display: grid;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 225px 225px 225px 225px;
    row-gap: 25px;
    column-gap: 25px;
    text-align: center;
    justify-items: center;
    align-items: center;

    @media (min-width: 550px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 750px) {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
    @media (min-width: 850px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    }
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`
const HomeImage = styled.img`
    width: 150px;
    height: 200px;
    background-color: blue;
    src: url(${({background}) => background});
    background-position: center;
    background-size: center;
    display: flex;
    text-align: center;
    justify-content: center; 
`

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <HomeCont className='homeContainer'>
                <Link to="/web-design">
                    <HomeImage src={CHThumb} ></HomeImage>
                </Link>
                <GraphicDesignShirts />
                <Link to="/ux-design">
                    <HomeImage src={Waffler} ></HomeImage>
                </Link>
            </HomeCont>
        )
    }
}

export default Home;