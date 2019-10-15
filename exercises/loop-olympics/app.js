
// for (let i = 0; i <= 9; i++) {
//     console.log(i)
// }

// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit)
// }
// for (let i = 0; i <= 9; i++) {
//     console.log()
// }
// const array = []
// for (let i = 0; i <= 9; i++) {
//     array.push(i)
// }
//     console.log(array)

// for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//     console.log(i)
//     }
// }

// const fruitArr = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (let i = 0; i < fruitArr.length; i++) {
//     if (i % 2 === 0) {
//         console.log(fruitArr[i])
//     }
// }    

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for(let i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }

//   namesArr = []
//   occupationsArr = []
//   for (let i = 0; i < peopleArray.length; i++) {
//       namesArr.push(peopleArray[i].name) 
//       occupationsArr.push(peopleArray[i].occupation)
//   }
//   console.log(namesArr)
//   console.log(occupationsArr)

// namesArrEven = []
// occupationsArrOdd = []
//   for(let i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         namesArrEven.push(peopleArray[i].name) 
//     } 
//     if (i % 2 === 1) {
//         occupationsArrOdd.push(peopleArray[i].occupation)
//     }
//   }
//   console.log(namesArrEven)
//   console.log(occupationsArrOdd)


//   matrixes
// const matrix = [
//     [0, 0, 0], 
//     [1, 5, 1], 
//     [2, 2, 2]]

//     console.log(matrix[1][1])
// // to change 5 in matrix above to 1
//     matrix[1][1] = 1 

// const matrix = [
//     [0, 0, 0], 
//     [1, 5, 1], 
//     [2, 2, 2]]

// for(let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])
//     for(let j = 0; j < matrix[i].length; j++) {
//         console.length(matrix[j])
//     }
// }

// GOLD MEDAL 1

// const matrix1 = []
//     for(let i = 0; i < 3; i++) {
//       let matrix2 = [];
//         for(j = 0; j < 3; j++) {
//           matrix2[j] = 0;
//         }
//         matrix1[i] = matrix2;
//     }
// console.log(matrix1)

// GOLD MEDAL 2

const matrix1 = []
    for(let i = 0; i < 3; i++) {
      let matrix2 = [];
        for(j = 0; j < 3; j++) {
          matrix2[j] = i;
        }
        matrix1[i] = matrix2;
    }
console.log(matrix1)

// GOLD MEDAL 3

// const matrix1 = []
//     for(let i = 0; i < 3; i++) {
//       let matrix2 = [];
//         for(j = 0; j < 3; j++) {
//           matrix2[j] = j;
//         }
//         matrix1[i] = matrix2;
//     }
// console.log(matrix1)

// const matrix1 = []
//     for(let i = 0; i < 3; i++) {
//       let matrix2 = [];
//         for(j = 0; j < 3; j++) {
//           matrix2[j] = "x";
//         }
//         matrix1[i] = matrix2;
//     }
// console.log(matrix1)