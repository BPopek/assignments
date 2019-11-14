import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withExhibitions} from './ExhibitionProvider';

class Navbar extends Component {
    constructor(props){
        super()
        this.state = {
            active: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = e => {
        this.setState({
            active: e.target.innerHTML
        })
    }
    render(){
        let homeStyle;
        let currentStyle;
        let pastStyle;
        let randomStyle;
        let searchStyle;

        if (this.state.active === 'home') {
            homeStyle = {color: '#806aaf'}
            currentStyle = {color: 'white'}
            pastStyle = {color: 'white'}
            randomStyle = {color: 'white'}
            searchStyle = {color: 'white'}
        } else if (this.state.active === 'current-exhibitions') {
            currentStyle = {color: '#806aaf'}
            homeStyle = {color: 'white'}
            pastStyle = {color: 'white'}
            randomStyle = {color: 'white'}
            searchStyle = {color: 'white'}
        } else if (this.state.active === 'past-exhibitions') {
            pastStyle = {color: '#806aaf'}
            currentStyle = {color: 'white'}
            homeStyle = {color: 'white'}
            randomStyle = {color: 'white'}
            searchStyle = {color: 'white'}
        } else if (this.state.active === 'random-object') {
            randomStyle = {color: '#806aaf'}
            currentStyle = {color: 'white'}
            pastStyle = {color: 'white'}
            homeStyle = {color: 'white'}
            searchStyle = {color: 'white'}
        } else if (this.state.active === 'search') {
            searchStyle = {color: '#806aaf'}
            currentStyle = {color: 'white'}
            pastStyle = {color: 'white'}
            randomStyle = {color: 'white'}
            homeStyle = {color: 'white'}
        }

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
                <img src='/images/cooper-hewitt-logo.svg' className='logo' alt='logo'/>
                <Link to="/" className='Navbar-link' style={homeStyle} >Home</Link>
                <Link to="/current-exhibitions" className='Navbar-link' style={currentStyle} >Current Exhibitions</Link>
                <Link to="/past-exhibitions" className='Navbar-link' style={pastStyle} >Past Exhibitions</Link>
                <Link to="/random-object" onClick={this.props.randomObject} className='Navbar-link' style={randomStyle} >Random Find</Link>
                <Link to="/search"  className='Navbar-link' style={searchStyle} >Search</Link>
            </div>
        )
    }
}



export default withExhibitions(Navbar)
