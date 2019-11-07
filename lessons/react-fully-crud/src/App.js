import React from 'react';
import './App.css';
import Form from './Form'
import TodoContainer from './TodoContainer'

function App() {
  return (
    <div>
      <Form button='Submit' type='add' />
      <TodoContainer />
    </div>
  );
}

export default App;
