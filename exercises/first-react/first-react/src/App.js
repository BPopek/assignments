// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Learning React: Day 1
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn More About React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// must do to use jsx

// My Components
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';

// Third-Party Packages 
// example: import readline from 'readline-sync'

import './App.css' 

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Body />
      {/* this is the equivalent of calling this as a function, can reuse as many times as you want */}
      <Footer />
    </div>
  )
}

export default App