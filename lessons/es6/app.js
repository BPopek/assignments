// function  ES6 fat arrows


// Destructuring

const expense = {
    type: "Business",
    amount: "$45 USD"
  };
  
const type = expense.type;
const amount = expense.amount;

// curly brace is naming it to a variable as well as finding the object name so no need for 'expense.type' and also must be the name that the variable is called above (cannot rename variable)

const {type} = expense;
const {amount} = expense;
// con destructure further to combine and name both variables in same line of code
const {type, amount} = expense;

console.log(type, amount)


// -------------REST AND SPREAD OPERATORS-------------


// both look like ... the difference in where you use them. 
// Spread operator is used everywhere except where the rest operator is used.
// rest operator is used is as a parameter in a function to hold as many inputs as you want.

function myFunc (stuff){
    console.log(stuff)
}
myFunc('hi', 'hello') 
// will only return 'hi'

function myFunc (...stuff) {
    console.log(stuff)
}
myFunc('hi', 'hello', 'good day', 'cheers')
// the ...stuff allows us to add multiple variables in that category

// can use regular parameters as well as rest as long as they are FIRST
function myFunc (num,...stuff) {
    console.log(num)
    console.log(stuff)
}
myFunc(50, 'hi', 'hello', 'good day', 'cheers')


// SPREAD OPERATOR
const primaryColors = ['red', 'yellow', 'blue'];
const otherColors = ['teal', 'aquamarine', 'lobstermaine'];

primaryColors.push(...otherColors)
    // will push them in to combine both arrays
console.log(...primaryColors)

const allColors = [...primaryColors,...otherColors]
    
console.log(allColors) 
// will return info in an array
console.log(...allColors) 
// will return without the brackets (faking a string) 
