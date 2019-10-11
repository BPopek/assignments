// const options = ["red pill", "blue pill"]

// let selection = 1

// while (selection === 1){
//     selection = readlineSync.keyInSelect(options, "enter the rabbit hole? ", {cancel: false})
// }
// // cancel false 
// console.log("you now know the truth and are free")

// // -------------------------------------------------------------------


const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");
console.log("Hi " + name + ", welcome to the Escape Room! Here are your options: ");

const options = ["Put your hand in a hole in the wall ", "Look around and find the key ", "open the door "]

let selection = 0
let key = false
let isAlive = true

while(isAlive) {

    selection = readlineSync.keyInSelect(options, "Let's see what happens... ", {cancel: false})
    if (selection === 0) {
        console.log("Sorry, you DIE! Try again.")
        isAlive = false
    } else if (selection === 2 && !key) {
        console.log("The door is locked, that would have been too easy!  ")
        console.log('Now what???')

    } else if (selection === 1) {
        key = true
        console.log("Wow, you found the key! Now you can go open the door and ESCAPE! ")
    } else if (selection === 2 && key) {
        key = true
        console.log("Yay, you escaped! ")
        return
    }
}

