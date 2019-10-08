// // *** Bare bones of function - want it to do one thing and do it well
//     // function name(Parameters) {
//     //     code block here
//     // }
//     // name(arguments)

//     // CONSOLE LOG DOES NOT ACTUALLY DO ANYTHING, JUST PRINTS IT TO CONSOLE/TERMINAL FOR US TO SEE

//     function toaster(slot1, slot2) {
//         console.log(slot2 + " " + slot1)  /* OR return(slot1 " " + slot2) */
//     }
//     toaster("bread", "waffles")

// // once info is saved as a return above and not console.log, you can use info to assign to other 
//     let toasterStr = toaster("bread", "waffles")


// // *** Methods vs Functions
//     // method is a function within an object
//     // any time you see something.function() then it is a method

//     //     function: toaster(arguments)
//     //     method: Array.toaster(arguments)

// const myObj = {
//     toast: function(){
//         console.log("toasted" + slot1)
//     }
//     }

// myObj.toast("english muffin")



// // *** Arguments vs Parameters



// // *** Returns vs console.logs 
//     // Console.log prints to console or terminal. 
//     // Return = returns info for you to use in other code 


// // *** Calling a function
//     // Writing a function does not call it, must have line of code after to call the function (can be console.log or return or just function)


// // *** Expression vs. Declaration (hoisting)
// // EXPRESSION: do not get hoiseted, function must be called after it is written (before         will give you an error "functionName is not defined").
//         // * benefit to function expression: useful with arrow functions

//     const functionName = function(){
//         console.log("expression called")
// }
// // DECLARATION - gets hoisted regardless of where it is placed in code

//     function functName (){
//         console.log("declaration called")
//     }

// functionName() /*if this was placed above the function expression it will give error*/
// funcName() /* will run anywhere in code*/

// // *** Arrow Functions
// // const arrowFunc = (parameters) => code block;

// const arrowFunc = toast = code block;  /*if only one parameter no () needed*/

// const arrowFunc = () => {

// }
const speak = (phrase1, phrase2) => phrase1 + " " + phrase2; 
    /*if on one line, returns automatically*/

const oneParam = param1 => param1 + " is my parameter";  
    /*if only one parameter no () needed*/

const multLines = (num1) => {
    if(num1 > 10) {
        return "it is a big one"    
    } else if (num1 === 10){
        return "it is ten"
    } else {
        return "it is little"
    }
}

console.log(speak("hi", "buddy"))
console.log(oneParam("rectangle"))
console.log(multLines(12))
// if you are writing multiple lines in code block, use curly brace to separate, return is required to run them


// get comfortable with 