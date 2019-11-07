import React from 'react';
import './App.css';
import Form from './Form';
import {withProvider} from './ListProvider';
import UglyPostList from './UglyPostList'

function App() {
  return (
    <div className="App">
      <Form  button='Submit' type='add'/>
      <UglyPostList />
    </div>
  );
}

export default withProvider(App);
