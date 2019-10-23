// QUESTION 1

const numbers = [1, 3, 5, 2, 90, 20]

function leastToGreatest(arr) {
    arr.sort(function(a,b){
        return a - b
    })
    return arr
}
// console.log(leastToGreatest(numbers))

// numbers.sort(function(a,b) {
//     return a - b
// })
// console.log(numbers)

// QUESTION 2

function greatestToLeast(arr) {
    arr.sort(function(a,b){
        return b - a
    })
    return arr
}
// console.log(greatestToLeast(numbers))

// QUESTION 3
const animals = ["dog", "wolf", "by", "family", "eaten"]
function lengthSort(arr) {
    arr.sort(function(a,b){
        return a.length - b.length
    })
    return arr
}     
  
//   console.log(lengthSort(animals))

// QUESTION 4
function alphabetical(arr) {
    return arr.sort()
}
// console.log(alphabetical(animals))

// QUESTION 5

function byAge(arr){
    arr.sort(function(a, b){
        return a.age - b.age
    })  
    return arr
}
  
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]))