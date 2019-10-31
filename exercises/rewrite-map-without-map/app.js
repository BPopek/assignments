// map over an array without using .map 
// * remember, .map builds an Array 

// if all strings, want to turn into numbers


Array.prototype.mapV2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        const results = callback(this[i])
        newArray.push(results)
    } 
    return newArray
} 

const strs = ["4", "6", "32", "65", "21"]

const num = strs.mapV2( num => {
    // return num * 1 //to turn into numbers
    return parseInt(num)  //or return Number(num)
})
console.log(num)