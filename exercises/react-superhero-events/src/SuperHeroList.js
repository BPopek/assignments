import React from 'react'
import Hero from './SuperHero'

function SuperHeroList(props){
    const mappedSuperHeroes = props.heros.map(hero => {
        return <Hero name={hero.name}
                show={hero.show}
                catchPhrase={hero.catchPhrase}
                image={hero.imageName}
                key={hero.imageName}
        />
        })

        return(
            <div className='HeroListContainer'>
                 {mappedSuperHeroes}
            </div>
        )
}

export default SuperHeroList

// class HeroList extends Component {
//     constructor(){
//         super()
//     }
//     render(){
//         const mappedSuperHeroes = data.map(((hero, i) => <Hero key={i + hero.name}
//                                                                 name={hero.name}
//                                                                 show={hero.show}
//                                                                 catchPhrase={hero.catchPhrase}
//                                                                 image={hero.imageName}
//                                                                 />))
//         return (
//             <div className='HeroListContainer'>
//                 {mappedSuperHeroes}
//             </div>
//         )
//     }
// }