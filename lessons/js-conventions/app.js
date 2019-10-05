if (5 > 3) {
    console.log("is greater than")
}

let cat = "cat" 
    if (cat.length === 3) {
        console.log("is the length")
    }

let dog = "dog"
    if (cat !== dog) {
        console.log("not the same")
    }

var person = {
    name: "Bobby",
    age: 12
    }

    if (person.age >= 18) {
        console.log("is allowed to go to the movie")
    } else {
        console.log("is not allowed to go to the movie")
    }

    if (person.name.charAt(0) === "B") {
        console.log("name starts with B and can go in the movie")
    }

    if (person.name.charAt(0) === "B" && person.age>= 18) {
        console.log("name starts with B and they are over 18 so they can go in the movie")
    }

if (1 === "1") {
    console.log("strict")
}
else if (1 == "1") {
    console.log("loose")
}
else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log("yes")
}

if (typeof dog === "string") {
    console.log("yes it is a string")
}

if (typeof true === "boolean") {
    console.log("yes it is a boolean")
}

if (typeof variable === "undefined") {
    console.log("not defined")
}

if ("s" > 12) {
     console.log("not greater")
}

var myNum = 10;
    console.log(myNum % 2 === 0 ? "is even" : "is odd");

var newNum = 39;
    console.log(newNum % 2 === 0 ? "is even" : "is odd");

var testNum = 45;
    console.log(testNum % 2 === 0 ? "it is even" : "it is odd");


// FOR LOOPS
for(let i = 0; i < 100; i++){
    console.log(i)
}

let countTrue = 0
let countFalse = 0

for (let i = 0; i < 100; i++){
    if( Math.random() > .5 ){
        countTrue++
    } else { 
        countFalse++
    }
}

var favoriteThings = ["Rain", "Snow", "Dogs", "Cookies"]

for(let i = 0; i < favoriteThings.length; i++){
    console.log(favoriteThings)
}
// to get certain item 
    console.log(favoriteThings[0])
// to get all items 
    console.log(favoriteThings[i])