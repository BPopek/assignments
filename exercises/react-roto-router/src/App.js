import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Home from './Home';
import Footer from './Footer'
import Product from './Product';
import ProductList from './ProductList';

function App() {
  return (
    <div className='App'>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/About' component={About}></Route>
          <Route path='/Services' component={Services}></Route> 
          <Route exact path='/products' component={ProductList}></Route>       
          <Route path='/products:_id' component={Product}></Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
