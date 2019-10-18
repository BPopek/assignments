// Array Map Exercises

// 1) Make an array of numbers that are doubles of the first array
    // const numbers = [2, 5, 100];
    // const doubleNumbers = numbers.map(number => number * 2)

    // console.log(doubleNumbers)

// 2) Take an array of numbers and make them strings
    // const numbers = [2, 5, 100];
        // turns to string (not strings in an array)
    // const stringItUp = numbers.join(" ");(number => number.map)
        // turns to string within array 
//     const stringItUp = numbers.map(number => number + "")

// console.log(stringItUp)

// 3) Capitalize each of an array of names
    // OPTION 1
        // const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
        // const namesString = names.join(' ').toLowerCase()

        // const capitalizeNames = namesString.split(' ').map(text => text.substring(0,1).toUpperCase() + text.substring(1)
        // )

        // console.log(capitalizeNames)

    // OPTION 2
        // const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

        // const capitalizeNames = names.map((name) => {
        //     let newName = name.toLowerCase();
        //     let upperName = newName.charAt(0).toUpperCase() + newName.slice(1);
        //     return upperName
        // })
        // console.log(capitalizeNames)


// 4) Make an array of strings of the names

// peopleArr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// const namesOnly = peopleArr.map((people) => {
//     const fullName = people.name;
//     return fullName
// })
// console.log(namesOnly)

// 6. Make an array of strings of the names saying whether or not they can go to The Matrix

peopleArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// const oldEnough = peopleArr.map((peopleAge) => {
//     if (peopleAge.age >= 18) {
//         return (peopleAge.name + ' can go to The Matrix')
//     } else {
//         return (peopleAge.name + ' is under age!!')
// }})

// console.log(oldEnough)

// 6) Make an array of the names in h1s, and the ages in h2s

const headers = peopleArr.map((fullname) => `<h1>${fullname.name}<h1><h2>${fullname.age}<h2>`)
console.log(headers)