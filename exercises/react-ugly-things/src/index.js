import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListProvider from './ListProvider'

ReactDOM.render(
    <ListProvider>
        <App />
    </ListProvider>
    , document.getElementById('root'));

