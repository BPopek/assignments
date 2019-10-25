import React from 'react';

// My Components
import Nav from './Navbar';
import Footer from './Footer';
import Main from './Main';

// import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App