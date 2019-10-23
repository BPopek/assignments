// // capitalizeAndLowercase("Hello")
// let str = "Hello"

// capitalizedStr = str.toUpperCase();
// console.log(capitalizedStr)


// function findMiddleIndex(str){
//    return Math.floor(str.length / 2)
// }
// console.log(findMiddleIndex("Hello"))

// function returnFirstHalf(str){
//     return str.slice(0, (str.length / 2))
// }
// console.log(returnFirstHalf("Hello World"))

// function capitalizeLower(str){
//     let capHalf = str.slice(0, Math.floor(str.length / 2))
//     let lowHalf = str.slice(Math.floor(str.length / 2))
//     return capHalf.toUpperCase() + lowHalf.toLowerCase()
// }
// console.log(capitalizeLower("Hello World"))

function capitalize(str){
    str = str.split(" ")
    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1)
    }
    return str.join(" ")
}
console.log(capitalize("hey friends! practice practice practice"))