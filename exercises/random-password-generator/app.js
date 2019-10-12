

// const randPassword = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function randomPasswordGenerator(randPassword) {
//     for(let i = 0; i > randPassword[i].length; i++) {
//         (Math.floor(Math.random(randPassword) * 10) + 1)
//     }
// }

// randomPasswordGenerator(hgng)


// for(Math.floor(Math.random(password) * 10)




// ROB'S GROUP
function randomPasswordGenerator(passlength) {
    const password = [];
    let randChar;
    for (let i = 0; i < passlength; i++) {
        randChar = String.fromCharCode(Math.round(Math.random() * 94) + 32);
        password.push(randChar);
    }
    return password.join("")
}
console.log(randomPasswordGenerator(4))

// MARCUS'S SOLUTION:
const randomPassword = (num, str) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?><,./\|}{][;:~'
    let password = ''
    if(str) str = str.split('')
    for(let i =0; i < num; i++){
      if(str.length){
        let strIndex = Math.floor(Math.random()*str.length)
        password += str[strIndex]
        str.splice(strIndex, 1)
      }else {
        password += chars[Math.floor(Math.random()*chars.length)]
      }
    }
    return password
}