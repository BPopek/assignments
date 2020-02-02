import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FootCont = styled.div`
    background-color: #dedede;
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    justify-content: space-evenly;
    text-align: center;

`

const FootLinks = styled(NavLink)`
font-family: Montserrat;
font-style: normal;
font-weight: 800;
text-decoration: none;
color: black;
`

function Footer() {
    return(
        <FootCont>
            <FootLinks to='https://www.linkedin.com/in/betsypopek/' className='footerLink'>LinkedIn</FootLinks>
            <FootLinks to='https://github.com/BPopek' className='footerLink'>GitHub</FootLinks>
            <FootLinks to='https://www.instagram.com/betsypopek/' className='footerLink'>Instagram</FootLinks>
        </FootCont>
    )
}

export default Footer;