import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import ProductList from './ProductList';
import Product from './Product'
 

function App() {
  return (
    <div className='app'>
    <Navbar />
    {/* put the NAV above the switch because we always want it showing. Switch means only one of those pages is shown at a time. */}
      <Switch>
        <Route exact path='/' component={Home} />
          {/* whichever one is set first, it will render that component. exact path means that the only time you see a / in the address it will always go to home */}
        <Route path='/About' component={About} />
        {/* <Route path='/contact' component={Contact} /> */}
        <Route path='/Services' component={Services} />
        <Route exact path='/products' component={ProductList} />
        <Route path='/products/:_id' component={Product} />

      </Switch>
    </div>
  );
}

export default App;
