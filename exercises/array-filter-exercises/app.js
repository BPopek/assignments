// // Array Filter Exercises

    // // Question 1
    // // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

    // const numbers = [3,6,8,2];
    // const fiveAndGreaterOnly = numbers.filter(number => number >= 5)   
    
    // console.log(fiveAndGreaterOnly)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

    // const numbers = [3,6,8,2]
    // function evensOnly(arr) {
    //     return arr % 2 === 0;
    // }
    // const evens = numbers.filter(evensOnly)

    // console.log(evens)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
    // objNames = ["dog", "wolf", "by", "family", "eaten", "camping"]
    // function fiveCharatersorFewerOnly(arr){
    //     return arr.length <= 5;
    // }

    // const shortNames = objNames.filter(fiveCharatersorFewerOnly)
    // console.log(shortNames)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
   
    // peopleArr = [
    //     { name: "Angelina Jolie", member: true },
    //     { name: "Eric Jones", member: false },
    //     { name: "Paris Hilton", member: true },
    //     { name: "Kayne West", member: false },
    //     { name: "Bob Ziroll", member: true }
    // ]

    // function peopleWhoBelongToTheIlluminati(arr){
    //     return (arr.member === true)
    // }
    // const belongToClub = [peopleArr.filter(peopleWhoBelongToTheIlluminati)]
    // console.log(belongToClub)


    // 5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

    moviePeople = [
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ]
    function ofAge(arr) {
        return arr.age >= 18
        }
    const oldEnough = moviePeople.filter(ofAge)
    console.log(oldEnough)