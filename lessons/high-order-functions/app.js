// High order functions

    // function doSomething()
    // document.addEventListener('keypress', function(){

    // })

    // anonymous function is a call back function 
    // addEventListener is a high order function 

    // setInterval(function('time in milliseconds'){
    //     console.log("time")
    // }, 1000)


// Array Iterator Methods - these are all high order functions

// .forEach()
    // const seasons = ['autumn', 'fall', 'harvest season', 'hunting season']
            // reg for loop
//     for(let i = 0; 1 < seasons.length; i++){
//         console.log(seasons[i])
//     }
//             // old way to write function 
//             seasons.forEach(function(){
//                 // argument goes here
//             })
            
//             // ES6 format 
//     seasons.forEach((season) => {
//         console.log(season)
//     })

// // .map() - runs a for loop on an array and returns a NEW array with changes indicated. 

//     const seasons = ['autumn', 'fall', 'harvest season', 'hunting season']
//     const seasons = [{name: 'autumn'}, {name: 'fall'}, 'harvest season', 'hunting season']

//     const seasonObjects = seasons.map((season) => {
//         return {name: season}
//     })
//     console.log(seasonObjects)

//     // useful for react to return html info 

//     const seasonH1s = seasons.map((season) => {
//         return `<h1>${season}</h1>`
//     })
//     console.log(seasonH1s)

// function doubleNumbers(arr) {
//     // console.log(arr)
//     return(arr.map((num) => {
//         return num * 2
//     })
// }

// console.log(doubleNumbers([2, 5, 100]));


// function stringItUp(arr){
//     return arr.map((num) => {
//         return 
//     })
// }
// console.log(stringItUp([2, 5, 100]));

function readyToPutInTheDOM(){
    return arr.map((person) => {
        return person.name
    }) 
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
// can also write it slightly separated
function readyToPutInTheDOM(){
    const elements = people.map((person) => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    }) 
    return elements

}


// .filter() - runs loop on array and returns new array with only the items that meet the ondition. return will be a boolean: if true add to array, if false do not return.
    // written out with full if/else statement 

    // const filteredSeasons = seasons.filter((season) => {
    //     if(season.split(" ").length === 1){
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // console.log(filteredSeasons)

    // to shorten further:

//     const filteredSeasons = seasons.filter((season) => {
//         return season.split(" ").length === 1
//     })
    
//     console.log(filteredSeasons)

// // .find()



