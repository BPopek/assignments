// FOR LOOPS:

        // for (let i = 15; i < 51; i++) {
        //     console.log(i)
        // }

        // for (let i = 0; i <= 10; i++) {
        //     console.log(i)
        //     if (i === 7) {
        //         console.log("It's your lucky day!")
        //     } 
        // }

// ARRAYS AND LOOPS:
        // var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]
        // var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
        // var users = [
        //     {
        //         name: "joe",
        //         age: 30,
        //     },
        //     {
        //         name: "steve",
        //         age: 23
        //     },
        //     {
        //         name: "sarah",
        //         age: 39
        //     },
        //     {
        //         name: "lisa",
        //         age: 27
        //     }
        // ]
        // Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
        // for (let i = 0; i < petsArr.length; i++) {
        //     console.log(petsArr[i] + "s")
        // }

        // Using the numbers array, how would you write a for loop to console log only the odd numbers?
            // for (let i = 0; i < numbersArr.length; i++) {
            //     if (numbersArr[i] % 3 === 0) {
            //         console.log(numbersArr[i])
            //     }
            // }

        // Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")
            // for (let i = 0; i < users.length; i++){
            //     console.log("Hi, I am " + users[i].name + " and I am " + users[i].age + " years old.")
            // }
        
        // Using the pets array, how would you write a for loop that would console.log all the pets in
        //     reverse order?
        // for(let i = petsArr.length - 1; i >= 0 ; i--){
        //     console.log(petsArr[i])
        // }

// NESTED LOOPS:
        var arrayOfArrays = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
    // CONSOLE LOG EACH INDIVIDUAL ARRAY 
        // for (let i = 0; i < arrayOfArrays.length; i++) {
        //     console.log(arrayOfArrays[i])
        // } 
    // TO GET EACH IND NUMBER IN EACH INNER ARRAY 

        // for (let i = 0; i < arrayOfArrays.length; i++) {
        //     for(let j = 0; j < arrayOfArrays[i].length; j++) {
        //         console.log(arrayOfArrays[i][j])
        //     }
        // }

    // CONSOLE LOG THE NUMBER 6
        // console.log(arrayOfArrays[1][2])
    // CONSOLE LOG THE NUMBER 1
        // console.log(arrayOfArrays[0][0])
    // CONSOLE LOG THE NUMBER 9
        // console.log(arrayOfArrays[2][2])

        // *****************************************************************
// FORCEPTION:        
    // Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:
    // ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        // var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
        // var alphabet = ["abcdefghijklmnopqrstuvwxyz"]
        //     function forception(people, alphabet){
        //         for(i = 0; i < people[i].length; i++){
        //             for(j = 0; j < alphabet.length; j++) {
        //                 console.log(forception[i][j])
        //             }
        //         }
        //     }

// STRING METHODS

    // toUpperCase & toLowerCase
        // var name = "luke"
            // console.log(name.toUpperCase())
        // to save as new string 
        // var upperCaseLuke = name.toUpperCase()
            // console.log(upperCaseLuke)
            // console.log(name)
        // var lowerCaseLuke = upperCaseLuke.toLowerCase()
            // console.log(lowerCaseLuke)

    // concat = can use + or concat
        // var s = "s"
        //     console.log(name.concat(s))
        // var pluralName = name.concat(s)
        //     console.log(pluralName)

    // SPLIT - turn a string into an array
        // var animal = "tiger"
        // var characterArr = animal.split("g")
        //     console.log(characterArr)

    // SLICE => cut up a string (cut into parts)
        // var phoneNumber = "6764567890"
            // to get "676-456-7890"
        // var first3 = phoneNumber.slice(0,3)
        // var second3 = phoneNumber.slice(3,6)
        // var last4 = phoneNumber.slice(6)
        //     console.log(first3)
        //     console.log(second3)
        //     console.log(last4)
        // var prettyNumber = first3 + "-" + second3 + "-" + last4
        //     console.log(prettyNumber)

    // indexOf = need to know if letter 'C' occurs in string. Finds the FIRST match of it, you can also use lastIndexOf to find the last instance of a letter.
        // var city = "New York City"
        // var indexOfC = city.indexOf("C")
        //     console.log(indexOfC)

    // Make a function that will return any given string into all caps followed by the same string all lowercase.
        // var saying = "Hello"
        // function capitalizeAndLowercase() {
        //     console.log(saying.toUpperCase() + saying.toLowerCase())
        // }
        // capitalizeAndLowercase(saying)

    // Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
        // var saying = "Hello"
        // function findMiddleIndex() {
        //     console.log(Math.floor(saying.length / 2))
        // }
        // findMiddleIndex(saying)
        // var saying2 = "Hello World"
        // function findMiddleIndex2() {
        //     console.log(Math.floor(saying2.length / 2))
        // }
        // findMiddleIndex2(saying2)

    // Make a function that uses slice() and the other functions you've written to return the first half of the string
        // var saying = "Hello"

        // function returnFirstHalf(){
        //     console.log(saying.slice(0, saying.length / 2))
        // }
        // returnFirstHalf(saying)

        // var saying2 = "Hello World"

        // function returnFirstHalf2(){
        //     console.log(saying2.slice(0, saying2.length / 2))
        // }
        // returnFirstHalf2(saying2)

    // Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
        
        // function capitalizeAndLowercaseHalf(str) {
        //     let firstHalf = str.slice(0, str.length / 2)
        //     let secondHalf = str.slice(str.length / 2)
        //     return firstHalf.toUpperCase() + secondHalf.toLowerCase()
        // }
        // console.log(capitalizeAndLowercaseHalf("Hello"))

        function lessThan100(a, b) {
            if (a + b) <= 100 {
                return true
            } else {
                return false
            }
        }
        
        