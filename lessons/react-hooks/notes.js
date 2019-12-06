// start with use
// use state and use effect 
componentDidMount
componentDidUnmount
componentDidUpdate

// at top:
import React, {useState, useEffect} from 'react'

function CharacterList() {
    const [characters, setCharacters] = useState([])   //have to start as an array so you can map through it (otherwise would get undefined error). When you const it you have the first parameter named, and the second parameter is setName
    
    useEffect(() => {
        fetch("https://swapi.co/api/people").then(response => {
            const data = response.json().then(data => {
                console.log(data.results)
            })
        })
    })
    const mappedCharacters = characters.map(character => <div>hi</div>)
    const mappedCharacters = characters.map(character => <>{character.name}</>)  //this is called a fragment?
    const mappedCharacters = characters.map(character => <Character name={character.name}/>)  


    return (
        <div className='container'>

        </div>
    )
}

export default CharacterList