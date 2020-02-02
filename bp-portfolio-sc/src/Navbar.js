import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavbarCont = styled.div`
    background-color: #dedede;
    display: flex;
    position: fixed;
    top: 0px;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    justify-content: space-evenly;
    text-align: center;

`
const NaviLinks = styled(NavLink)`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    text-decoration: none;
    color: ${props => (props.primary ? 'black' : '')};
    font-size: 14px;
    active ? color: black : color: #084a73
`

class Navbar extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <NavbarCont>
                <NaviLinks exact to='/' className='navbarLink' activeClassName='navbarLinkActive'>Home</NaviLinks>
                <NaviLinks exact to='/web-design' className='navbarLink'activeClassName='navbarLinkActive'>Web Design</NaviLinks>
                <NaviLinks exact to='/graphic-design' className='navbarLink'activeClassName='navbarLinkActive'>Graphic Design</NaviLinks>
                <NaviLinks exact to='/ux-design' className='navbarLink'activeClassName='navbarLinkActive'>UX Design</NaviLinks>
                <NaviLinks exact to='/profile' className='navbarLink'activeClassName='navbarLinkActive'>Profile</NaviLinks>
            </NavbarCont>
        )
    }
}

export default Navbar;