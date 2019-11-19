import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withExhibitions } from './ExhibitionProvider';

class Navbar extends Component {
    constructor(props){
        super()
    }

    render(){

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("Navbar").style.top = "0";
            } else {
                document.getElementById("Navbar").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
        return(
            <div id='Navbar'>
                <NavLink exact to="/" className='Navbar-link' activeClassName='logo-active'>
                    <img src='/images/cooper-hewitt-logo.svg' className='logo' alt='logo'/>
                </NavLink>      
                <NavLink exact to="/current-exhibitions" className='Navbar-link' activeClassName='Navbar-link-active'>Current Exhibitions</NavLink>
                <NavLink exact to="/past-exhibitions" className='Navbar-link' activeClassName='Navbar-link-active'>Past Exhibitions</NavLink>
                <NavLink exact to="/random-object" onClick={this.props.randomObject} className='Navbar-link' activeClassName='Navbar-link-active'>Random Find</NavLink>
                <NavLink exact to="/search" className='Navbar-link' activeClassName='Navbar-link-active'>Search</NavLink>
            </div>
        )
    }
}



export default withExhibitions(Navbar)
