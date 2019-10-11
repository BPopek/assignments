const readlineSync = require("readline-sync")

const answer = readlineSync.question("What color is the sky?")
    // javascript stops here until it gets an answer, then returns the below when it gets an answer 
console.log("string: ", answer)


// readlineSync.keyInYN returns a boolean true/false
// readlineSync.keyInSelect(animals, 'Which animal?')
//     uses an array to choose item from list

// https://www.npmjs.com/package/readline-sync