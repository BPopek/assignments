// template based application. Made to be as lightweight as possible (no axios      or other stuff baked into it)
// rigid way of developing: less bugs will occur. 

// VIRTUAL DOM: 

// React uses a declarative way of programming (compared to imperative). You get    to tell the program what to do but don't have to tell it HOW to do it.
        // Imperative = telling it exactly what to do, what to create, exactly how to change

// React is based on component based architecture:
//  * when mapping out project: one main component, inside that will be other          components



// UNIDIRECTIONAL DATA FLOW: 
// components know their data, but the parent gave it that data. If user clicks in the child component, it does not talk to the parent component. Data only flows down (parent to child) and not hte other way or sideways (child to child or child to parent)



// INSTALL NEW REACT APP:
// make folder for react project:
// then in terminal, in react project folder: type 'create-react-app name-of-the-app' this will create a nw folder called name-of-the-app
// create-react-app . will create the react file in the folder you are in (above one will also create a new folder)



// REACT FILE in VS CODE:
// once you open the react File, type NPM START in the terminal (must be in project folder). Opens a window

// don't need to touch public folder for now. leave that folder closed.
    // public html file: body has empty div with root id 

// source folder:
//     remove: app test File, service worker, logo.svg file. Don't need 2 css files so can delete one
//     everything starts for us in the index.js file in the src folder 
    // we use app.js file:

    // to open file in browser, use NPM START


// DOM = index.html. to connect DOM you use index.js to connect through react DOM    

// node only supports old ES5 version of 'const App = require('App') 
// react supports ES6 so now we use 'import App from 'app'


// COMPONENTS
// react is built around using components. 
// when you name components, use a capital letter 

// import React from 'react';
// must do to use jsx, otherwise it will not understand html code

// to import component, use import line of text at top and then be sure to link it inside the App component

// TO STYLE COMPONENTS 
// use app.css file for styling. Link in app.js file 