// QUESTION 1
    // function total(arr) {
    //     const sum = arr.reduce(function(a,b){
    //         return a + b
    //     })
    //     return sum
    // }
    
    // console.log(total([1,2,3]))

// QUESTION 2

    // function stringConcat(arr) {
    //     const concatArr = arr.reduce(function(a,b){
    //         return (`${a}${b}`)
    //         // return a.toString() + b.toString()  **can also do this but template literals are easy to understand as well so that code works too
    //     })
    //     return concatArr
    // }
    
    // console.log(stringConcat([1,2,3]))

// QUESTION 3

// function totalVotes(arr) {
//     const total = arr.reduce(function(a, b) {
//         return a + b.voted;
//     } , 0);    
//     return total
//  }
 
//  const voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];

//  console.log(totalVotes(voters));

// QUESTION 4 

// function shoppingSpree(arr) {
//     const total = arr.reduce(function(a, b){
//         return a + b.price;
//     }, 0);
//     return total 
// }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist));

// QUESTION 5

// function flatten(arr) {
//     const newArr = arr.reduce(function(a, b) {
//         return a.concat(b);
//     })
//     return newArr
// }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays));

// QUESTION 6

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

function voterResults(arr) {
    const whoVoted = arr.reduce(function(a, b) {
        if (b.age < 26) {
            a.youth++
            if(b.voted)
                a.youngVotes++
        } else if (b.age > 25 && b.age < 35){
            a.mids++
            if(b.voted)
                a.midVotes++
        } else if (b.age > 35 && b.age < 56){          
            a.olds++
            if(b.voted)
                a.oldVotes++
        } 
        return a
    }, {
            youngVotes: 0,
            youth:  0,
            midVotes:  0,
            mids:  0,
            oldVotes:  0,
            olds: 0,
        }
        );
        return whoVoted
}
    
console.log(voterResults(voters));