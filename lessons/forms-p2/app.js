// const animals = document.animals

// console.log(animals)

// const likes = animals.likes
//     // gives a node list (looks like an array). Array methods will not all work!
//     console.log(likes)


//     // use a for loop to loop through to look at all the values. First make the array, then use loop. Make array outside of loop so it only makes one!
// const likesArr = []

// for(let i = 0; i < likes.length; i++){
//     likesArr.push(likes[i].value)
// }
// console.log(likesArr)

// const favAnimal = animals.favorite.value
//     console.log(favAnimal)

// *****tie all of the above together in an event AudioListener

const animals = document.animals
​
animals.addEventListener('submit', function(e){
    e.preventDefault()
    const likes = animals.likes
​
    const likesArr = []
    for(let i = 0; i < likes.length; i++){
        if(likes[i].checked){
            likesArr.push(likes[i].value)
        }
    }
    console.log(likesArr)
​
    const favAnimal = animals.favorite.value
​
    console.log(favAnimal)
})