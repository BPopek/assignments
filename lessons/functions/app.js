// var name = "John"

// what happens in the function above does not affect the variable declared above

// function addNums(num1 + num2){
//     return num1 + num2
// }

// const total = addNums(5, 6)    won't run since return is used above

// console.log(total)


// scoping
// var - will scope to curly brackets - don't use anymore
// let - will scope to any brackets. Looks locally first and then globally (beyond current        brackets)
// const - use for complex data types: arrays/objects. Used when name will never change (use let if name will change).

// functions


// PROBLEM 1
// function mySum(num1, num2){
//     return num1 + num2
// }

// console.log(mySum(2, 5))

// PROBLEM 2
// function myParam(num1, num2, num3)
//     if (num1 > num2 && num1 > num3){
//         return num1;
//     } else if (num2 > num3 && num2 > num1){
//         return num2;
//     } else {
//         return num3;
//     }
// console.log(myParam(1, 3, 7))

// PROBLEM 3
// function evenOdd(num1){
//     if(num1 % 2 === 0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// console.log (evenOdd(6))

// PROBLEM 4 
// if only one opton then no need for second statement 

function myConcat(str){
    if(str.length > 20){
        return(str.slice(0, str.length / 2));
    } else /*if (str.length <= 20)*/{
        return(str.concat(str));
    }
}
console.log(myConcat("abcdeabcdeabcdeabcdeabcdeabcdeabcde"))

// // PROBLEM 5

// const fibNum = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
// var total = 0

// function myFib(num){
//     for(let i = 0; i < num; i++){
//         total += fibNum[i]
//         console.log(total)
//     }
// }
// myFib(5)
