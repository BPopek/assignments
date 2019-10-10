const lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
// 1
// function myString(str){
//     return(str.join(" "))
// }
// console.log(myString(lyrics))

            // 2nd line could be return(lyrics.join(" "))
                // better to pass it in as str because you can change the argument to another string without having to change the string name

// 2
// function myReverse(array){
//     return(array.reverse().join(" ")
// }
// console.log(myReverse(lyrics))

    // array could also be abbreviated as arr or arr1

// 3
// function myString2(array){
//     for(let i = 0; i < array.length; i++) 
//         if (i / 2 !== 0){
//             array.splice(i, 1)
                // or  console.log(array[i])

//         }
//     return array.join(" ")
    
// }
// console.log(myString2(lyrics))

    // OR
// function myString2(array){
//     for(let i = 0; i < array.length; i++) 
//         if (i / 2 !== 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr.join(" ")
// }

// console.log(myString2(lyrics))

    // **** OR *****
    
function myString2(array){
    const newArr = []
    for(let i = 0; i < array.length; i+=2) {
            newArr.push(arr[i])
        }
    return newArr.join(" ")
}

console.log(myString2(lyrics))


// 4
function switched (arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i+=2){
      newArr.push(arr[i+1], arr[i])
    }
    return newArr.join(' ')
  }
  
  // 5
  function randoLyrics (arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
      const randomIndex = Math.floor(Math.random()*newArr.length)
      newArr.splice(randomIndex, 0, arr[i])
    }
    return newArr.join(' ')
  }