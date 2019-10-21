// // QUESTION 1

// const array1 = ["code", "code", "cool"]
// const array2 = ["code", "code", "cool", "code"]
// const array3 = ["coe", "ode", "cool", "pool"]

// function countCode(arr) {  
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === "code")
//         count ++
//     }
//     return count
// }

//  ANSWER AS A HIGH ORDER FUNCTION:
// const countCode = (arr) => { 
//     return arr.filter(str => str ==='code').length
//     }

//     // OR ON ONE LINE:
// const countCode = arr => arr.filter(str => str ==='code').length

// console.log(countCode(array1))
// console.log(countCode(array2))
// console.log(countCode(array3))

// QUESTION 2

// let string1 = "aaacodebbb"
// let string2 = "codexxcode"
// let string3 = "cozexxcope" 

// function countCode2(string) {
//     let newArr = [];
//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === 'c' || string[i] === 'o' || string[i] === 'e') {
//             newArr.push(string[i])
//         }
//     }
//     let count = Math.floor(newArr.length / 3)
//     return count 
// }
// console.log(countCode2(string1))
// console.log(countCode2(string2))
// console.log(countCode2(string3))


// REGEX
// const countCode = str => str.match(/co.e/gi)


// /c/ means it will match anything starting with a c. 
// the /g makes the search global so it will search more than the first string
// Use a period as a blank character to search for any letter 
// to make it case insensitive (check uppercase and lowercase letters) uadd the i at the end

const countCode = str => str.match(/.o.e/gi).filter(word => word[0].charCodeAt(0) < 91 || word[0] === 'c').length

console.log(countCode("aaacodebbb"))
console.log(countCode("Wodexxcode"))
console.log(countCode("cozexxVode"))


// charCodeAt uses the ASCII number codes (capitals go up to ASCII number 90)

// EXTRA CREDIT

