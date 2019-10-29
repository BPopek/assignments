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

// SOURCE FOLDER:
//     remove: app test File, service worker, logo.svg file. Don't need 2 css files so can delete one
//     everything starts for us in the index.js file in the src folder 
    // we use app.js file:

    // to open file in browser, use NPM START


// DOM = index.html. to connect DOM you use index.js to connect through react DOM    

// INDEX.JS FILE ALWAYS CONTAINS:
//         import React from 'react';
//         import ReactDOM from 'react-dom';
//         import App from './App';
//         import './App.css';
        
//         ReactDOM.render(<App />, document.getElementById('root'));

// APP JS FILE ALWAYS HAS:
            // import React from 'react'
                // function App (){
                //     return(
                //         <div>
                //             Hello
                //         </div>
                //     )
                // }
                // export default App 


// node only supports old ES5 version of 'const App = require('App') 
// react supports ES6 so now we use 'import App from 'app'


// COMPONENTS
    // react is built around using components. 
    // when you name components, use a capital letter 

    // import React from 'react';
    // must do to use jsx, otherwise it will not understand html code

    // to import component, use import line of text at top and then be sure to link it inside the App component

// TO STYLE COMPONENTS 
// use app.css file for styling. Link in the top of the index.js file under the 'import react' text
    // import './FileName.css;'
    // can use packages - react style components? might be a name of one 


    // CAN WRITE CSS STYLING RIGHT IN THE JAVASCRIPT:
        // in the function, define a variable
        // have to tell it the HEX code for colors, have to use a comma instead of ; after each one

        // Helpful when you just want to add a little bit of styling for an Element. Can have styling for a 'card' element on the same page 

        // cannot do media queries or transitions in Javascript styling, must do that in a CSS file 

    // inside the curly brackets you can use any JS6 code (variables)  
            // example: <div style={styles}>    
            // <h1>{greeting}</h1> could also do {greeting.toUpperCase}


// PROPS 
    // Use separate props folder - type 'create-react-app .' inside the project folder?
    // create index.js and app.js files 
    
    // using components are like using functions. Using props is like using arguments and parameters instead. 

    // Props are like an empty object. When we pass in a parameters, that gets inserted into the empty object

    import React from 'react'
    import Person from 'Person'
    import Pet from 'Pet'

    const App = () => {
        return (
            <div>
                Hello world
                <Person name='Seth'/>
                <Person name='Stew'/>
                <Person name='Stew' pet='parrot'/>

                <Pet type={props.pet}/>

                {/* this is passing in a key value pair or argument into the App function. Can call multiple times and assign a different name*/}
            </div>
        )
    }

    export default App




    <colorBox backgroundColor='blue' title='title' subtitle='subtitle'/>


// MAPPING IN REACT: way to make it more efficient
    // create a new array that gets mapped to this variable 

    destructuring: 


// CONTAINER COMPONENTS: way to structure React files

    // make new component (turtle container) and then import into the main app JS file. Makes it so the main app page stays very clean, and you can easily tell where you want to go to make edits.


// CLASS BASED COMPONENT 

        //   only make it a class-based component if you need to use STATE or LIFE CYCLE COMPONENTS/METHODS (run at specific phases of life cycles)
        // otherwise use a functional component 