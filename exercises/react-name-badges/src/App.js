import React from 'react';
import './App.css';
import Form from './Form'
import BadgeContainer from './BadgeContainer'

function App(props) {
  return (
    <div >
      <Form />
      <BadgeContainer  people={props.people}/>
    </div>
  );
}

export default App;
