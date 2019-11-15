import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ExhibitionProvider from './ExhibitionProvider'


ReactDOM.render(
    <ExhibitionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ExhibitionProvider>
, document.getElementById('root'));