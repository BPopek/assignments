// FAT ARROW FUNCTION:

// FUNCTION DECLARATION:


function sum(){

}

// FUNCTION EXPRESSION: declare a variable, function saved in the variable

const sum2 = function(){

}

// FAT ARROW SYNTAX: Javascript needs the symbol right after () to know it's a function.
        // () only required if there are more than one argument. If no argument or only one argument, no () needed.

        // Has implicit return statement. If only one statement needed to return (no if/else or similar) then {} not needed either. The brackets cancel out the return function of the arrow, so if they are used then we have to also return the function later

const sum2ES6 = () => {
    console.log("ES6 is fun!")
}

const sum3ES6 = (word, num) => {
    console.log(`ES6 is ${word}!`)
    return word
}

const sum4ES6 = word => console.log(`ES6 is ${word}!`)

// OLD WAY  
addEventListener("click", function()){

}

// ES6 
addEventListener("click", () => {

})