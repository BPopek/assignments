// twoSum([1,2,3], 4);



const twoSum = (Arr, num) => {

    for(let i = 0; i < Arr.length; i++){
        for (let j = i + 1; j < Arr.length; j++){       
            if (Arr[i] + Arr[j] === num) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([1, 2, 3], 5))
console.log(twoSum([4,2,5,7,5,3,1,2,9], 14))




