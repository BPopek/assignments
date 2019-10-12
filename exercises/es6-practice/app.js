//  ****** 1
// function collectAnimals(...animals) {  
//     console.log(animals) 
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 

//  ****** 2

// function combineFruit(fruit, sweet, vegetable){
//     return {
//         fruits:[...fruit],
//         sweets:[...sweet],
//         vegetables:[...vegetable]
//     }
// }

// console.log(combineFruit(
//             ["apple", "pear"],
//             ["cake", "pie"],
//             ["carrot"])
//             )

//  ******  3

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };

//   const {location, duration} = vacation;

//   function parseSentence(){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   console.log(parseSentence())

// ****** 4

// returnFirst = (items) => {
//     const [ firstItem, secondItem, thirdItem ] = items 
//     return items
// }
// console.log(returnFirst(['phone', 'keys']))

// ****** 5

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [ firstFav, secondFav, thirdFav ] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// BLUE SQUARE 
// *********1

function combineAnimals(...animalArr) {  
    const allAnimals = [...animalArr]
    // const allAnimals = [...realAnimals,...magicalAnimals, ...mysteriousAnimals]
    return allAnimals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 


// ["dog", "cat", "mouse", "jackolope", "platypus"]

