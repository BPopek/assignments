const readlineSync = require("readline-sync")

function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2)
    return result
}
function sub(num1, num2) {
    result = parseInt(num1) - parseInt(num2)
    return result
}
function mul(num1, num2) {
    result = parseInt(num1) * parseInt(num2)
    return result
}
function div(num1, num2) {
    result = parseInt(num1) / parseInt(num2)
    return result
}

let firstNum = readlineSync.question("Please enter your first number: ",{
    hideEchoBack: false
});

let secondNum = readlineSync.question("Please enter your second number: ",{
    hideEchoBack: false
});

let operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div. ",{
    hideEchoBack: false
});

if(operation === "add") {
    console.log("The result is: ", add(firstNum, secondNum));
} else if (operation === "sub") {
        console.log("The result is: ", sub(firstNum, secondNum));
}  else if (operation === "mul") {
    console.log("The result is: ", mul(firstNum, secondNum));
} else if (operation === "div") {
    console.log("The result is: ", div(firstNum, secondNum));
} else {
    console.log("Unexpected entry")
}