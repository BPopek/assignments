// // PROBLEM 1
// const countryNames = "United States Canada Mexico"
// function makeCaps(){
//     console.log (countryNames.toUpperCase())
//     console.log (countryNames.toLowerCase())
// }
// makeCaps(countryNames)

// PROBLEM 2

// function halfNum(num1){
//     return(Math.floor(num1 / 2))
// }
// console.log(halfNum(25))

// function findMiddleIndex(string){
//     return Math.floor(string.length / 2)
// }
// console.log(findMiddleIndex("Hello World"))

// PROBLEM 3

// function returnFirstHalf(string){
//     return string.slice(0, (string.length / 2))
// }
// console.log(returnFirstHalf("HelloW"))

// PROBLEM 4

// function capitalizeAndLowerCase(string){
//     let firstHalf = string.slice(0, string.length / 2)
//     let secondHalf = string.slice(string.length / 2)
//     return firstHalf.toUpperCase() + secondHalf.toLowerCase()
// }
// console.log(capitalizeAndLowerCase("Hello Worldsss"))

// OPTIONAL

function capitalize(str){
    str = str.split(" ")
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    return str.join(" ")
}
console.log(capitalize("hey friends! practice practice practice"))