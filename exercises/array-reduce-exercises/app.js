// QUESTION 1
    function total(arr) {
        const sum = arr.reduce(function(a,b){
            return a + b
        })
        return sum
    }
    
    // console.log(total([1,2,3]))

// QUESTION 2

    function stringConcat(arr) {
        const concatArr = arr.reduce(function(a,b){
            return (`${a}${b}`)
            // return a.toString() + b.toString()  **can also do this but template literals are easy to understand as well so that code works too
        })
        return concatArr
    }
    
    // console.log(stringConcat([1,2,3]))

// QUESTION 3

function totalVotes(arr) {
    const voted = arr.reduce(function(a,b){
        if(arr.voted = true);
    })    
    return voted
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
//  console.log(totalVotes(voters));

// QUESTION 4 
