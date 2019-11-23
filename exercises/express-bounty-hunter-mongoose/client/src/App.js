import React from 'react';
import './App.css';
import BountyForm from './BountyForm'
import BountyContainer from './BountyContainer'

function App() {
  return (
    <div className="App">
      <h2 className='AddBounty'>Add New Bounty</h2>
      <BountyForm button='Add New' type='add/get' />
      <h1 className='ActiveBounties'>Active Bounties:</h1>
      <BountyContainer />
    </div>
  );
}

export default App;
