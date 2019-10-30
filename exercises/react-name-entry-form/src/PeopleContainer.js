import React from 'react';
import Person from './Person';

function PeopleContainer(props){
    const mappedPeople = props.people.map((person, i) => <Person key={i + person.firstName}
                                                            firstName={person.firstName}
                                                            lastName={person.lastName}
                                                            />)
    return (
        <ol>
            {mappedPeople}
        </ol>
    );
}

export default PeopleContainer