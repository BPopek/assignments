// function capitalizeAndLowercase(str){
//     return (str.toUpperCase()+str.toLowerCase()) 
// }
// console.log(capitalizeAndLowercase("Hello"))
// -----------
// function findMiddleIndex(str){
//     console.log(Math.floor(str.length / 2))
// }

// findMiddleIndex("Hello World")
// -----------

function returnFirstHalf(str){
    console.log(str.slice(0, (str.length / 2)))
}
returnFirstHalf("Hello World")