import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    const styles = {
        textAlign: 'center',
    }
    return(
        <div className='Header' style={styles}>
            <Navbar />
            <div>
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
            <div className='overlay'>
                <img src="https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg"></img>
            </div>
        </div>
    )
}

export default Header