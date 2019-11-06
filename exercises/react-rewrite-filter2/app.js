Array.prototype.filter2 = function(callback){
    const posArr = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]))
        posArr.push(this[i])
    }
    return posArr
}

// const positives = strs.filter(num => {
    // return num > 0
// })
const numbers = [-4, 6, -32, 65, -21, 8, 9, 100]

const positives = numbers.filter2(num => {
    return num > 0
})


console.log(positives)






// const posArr = []
// for(let i = 0; i <= strs.length; i++){
//     if(i > 0) {
//         return posArr.push(i) 
//     } else {
//         return null
//     }
// }

// console.log(posArr)
// console.log(strs)