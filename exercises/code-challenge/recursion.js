// Given a selected cell, your program will fill it's room
const house = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
]
// checkCell will check left, right, down, and up of cell. 
// if the cell in that direction is empty, fill cell with an X
// and call checkCell on cell

// first: fill cell with an X. Then call same function on all cells surrounding (top, left, right, bottom)

// function fillAndCheckSurroundings(x, y){
//     house[x][y] = 'x'
//     if(house[x - 1][y] ===' '){
//         fillAndCheckSurroundings(x - 1, y)
//     }
//     if(house[x + 1][y] ===' '){
//         fillAndCheckSurroundings(x + 1, y)
//     }
//     if(house[x][y - 1] ===' '){
//         fillAndCheckSurroundings(x, y - 1) 
//     }
//     if(house[x][y + 1] ===' '){
//         fillAndCheckSurroundings(x, y + 1)
//     }
//         return house
// }
// console.log(fillAndCheckSurroundings(1,9))
function fillAndCheckSurroundings(x, y){
if (house[y][x] === ' ' && x >= 0 && x <= house[y].length && y >= 0 && y <= house.length) {
    house[y][x] = 'X';
    fillAndCheckSurroundings(x+1,y);
    fillAndCheckSurroundings(x-1,y);
    fillAndCheckSurroundings(x,y+1);
    fillAndCheckSurroundings(x,y-1);
  }
  return house
}

console.log(fillAndCheckSurroundings(8,3))