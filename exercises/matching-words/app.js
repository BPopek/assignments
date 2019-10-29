// const inscription = ["Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."]

// LAURA:

function noDupes(str){
    const newArr = []
    str = str.replace(/[.,]/g, " ")
    // to grab every period & comma globally and replace with space
    let oldArr = str.toLowerCase().split(" ")
    for(let i = 0; i < oldArr.length; i++) {
        let total = 0;
            // this will reset the total every time the i loop runs 
        for (let j = 0; j < oldArr.length; j++) {
            if (oldArr[j] === oldArr[i]) {
                total++
                if (total > 1 && !newArr.includes(oldArr[i])) {
                newArr.push(oldArr[i])
                }
            }
        }
    } return newArr
}

console.log(noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))






















// function hasDuplicates(arr) {
//     const repeats = []
// for (let i = 0; i <= arr.length; i++) {
//     if (repeats[arr[i]] === undefined) {
//         repeats[arr[i]] = 1;
//     } else {
//         return true;
//     }
//     return false
// }}

// console.log(hasDuplicates(inscription))

// function findRepeats(arr){
//     return arr.filter(function(item, index) {
//         return arr.indexOf(item) >= index;
//     });
// };

// console.log(findRepeats(inscription))