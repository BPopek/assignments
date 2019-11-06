import React from 'react';
import './App.css';
import {withProvider} from './ThemeProvider'
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer'

function App(props) {
  return (
    <div className='App'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default withProvider(App);
