// .push()
const animals = ["dog", "cat"]

animals.push("mouse")
    console.log(animals)

    console.log(animals.push("mouse")) /* to count the number of items in array*/

// .pop() - removes the last item in array
    console.log(animals.pop())

// .shift() - removes to the front of array
    console.log(animals.shift("mouse"))

// .unshift() add to the front of array and returns new length
    console.log(animals.unshift("mouse "))

// .splice() multiple arguments: 
    // first is index of starting point, 
    // 2nd is how many to remove,
    // 3rd is where you add items back in
const animals2 = ["dog", "cat", "monkey", "spider monkey", "parrot", "mouse"]
    console.log(animals2.splice(3,2, "gorilla"))
    console.log(animals2)

// .concat() combines two arrays into one. First one is listed first, then 2nd array added on to the end
const plants = ["flower", "tree"]

animals.concat(plants)

// console.log(plants) will not return new array because it does not change the array itself
console.log(animals.concat(plants)) /*or RETURN to see new array*/

// .reverse() reverses the array 
animals2.reverse()
    console.log(animals2)

// .slice() returns the array of the # index and returns up to the 2nd parameter. Does not remove from original array.
animals2.slice(2,4)

// .join() a way to join all elements of an array into a string, returns string
function reverseString(str){
    // return str.split("").reverse("").join() is same as below
    const arr = str.split(" ")
        console.log(arr)
    const reversed = arr.reverse()
    return reversed.join()
}
// console.log(reverseString("hello"))


    // ARROW VERSION
// const reverseString = str => str.split("").reverse("").join()

// .indexOf
function removeFromArrayOfStrings(str, arr){
    const index = arr.indexOf(str)
    arr.splice(index, 1)
    return arr
}

console.log(removeFromArrayOfStrings("spider monkey", ["dog", "cat", "monkey", "spider monkey", "parrot", "mouse"]))