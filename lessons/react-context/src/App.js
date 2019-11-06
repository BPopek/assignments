import React from 'react';
import './App.css';
import {withProvider} from './OurProvider'
      // since this is not the default export, we have to destructure it with {}
import Person from './Person'

function App(props) {
  return (
    <div className={props.on ? 'light' : 'dark'}>
      <h1>{props.title}</h1>
      <h1>Hello There</h1>
      <Person />
        {/* to access props  */}
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <button onClick={props.toggle}>Change Theme</button>
    </div>
  );
}

export default withProvider(App);
