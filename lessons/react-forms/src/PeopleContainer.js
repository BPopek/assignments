import React from 'react';
import Person from './Person';

function PeopleContainer(props) {
    const mappedPeople = props.people.map((person, i) => <Person key={i + person.fullName}
                                                            name={person.fullName} 
                                                            age={person.age}
                                                            />)
    return (
      <div>
        {mappedPeople}
      </div>
    );
  }
  
  export default PeopleContainer;
  