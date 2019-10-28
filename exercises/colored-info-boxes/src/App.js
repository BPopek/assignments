import React from 'react'
import ColoredBoxes from './ColoredBoxes'

const App = () => {
    return(
        <div className='Boxes'>
            <ColoredBoxes backgroundColor='#ffa500' title='Fruits I like' subtitle='Oranges' information='Oranges are delicious'/>
            <ColoredBoxes backgroundColor='#8c393f' title='Fruits I like' subtitle='Pomegranate' information='Pomegranate seeds are tasty'/>
            <ColoredBoxes backgroundColor='#9bbc88' title='Fruits I like' subtitle='Kiwi' information='Eat them with a spoon!'/>
            <ColoredBoxes backgroundColor='#fffd96' title='Fruits I like' subtitle='Pineapple' information='Grilled pineapple is the best'/>
            <ColoredBoxes backgroundColor='#ff0800' title='Fruits I like' subtitle='Apples' information='An apple a day keeps the doctor away'/>
            <ColoredBoxes backgroundColor='#ffe135' title='Fruits I like' subtitle='Bananas' information='I like bananas in my cereal'/>
            <ColoredBoxes backgroundColor='#fa7a55' title='Fruits I like' subtitle='peaches' information='I like peaches in a can, they were put there by a man. In a factory downtown.'/>
            <ColoredBoxes backgroundColor='#de3163' title='Fruits I like' subtitle='cherries' information='Fresh cherries are a great snack'/>
            <ColoredBoxes backgroundColor='#8e4585' title='Fruits I like' subtitle='plums' information='Plums can be delicious but I hate tart plums'/>
            <ColoredBoxes backgroundColor='#fbceb1' title='Fruits I like' subtitle='apricots' information='I love apricots in baked goods'/>
        </div>
    )
}

export default App