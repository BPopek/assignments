const ask = require('readline-sync')
let isAlive = true
let hasWon = false

function Enemy(name, hp, ap){
    this.hp = hp;
    this.name = name;
    this.ap = ap;
}
// const enemy = new Enemy('name', 53, 12)

const count = new Enemy('The Count', 53, 12)
const dracula = new Enemy('Dracula', 100, 20)
const nosferatu = new Enemy('Nosferatu', 600, 3)

const enemies = [count, dracula, nosferatu]
// console.log(enemies) to see enemy array 

function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const hero = new Hero('Superman', 500, 2)


console.log('Hello how are you, welcome!')
const name = ask.question('What is your name? ')

console.log(`Welcome to the game,  ${name} , your journey is about to begin!`)

while(isAlive && !hasWon){ 
    let choice = ask.keyIn('Would you like to (w) walk, (i) Check Inventory, or (q) Leave Game? ', {limit: 'wiq'})
    if (choice === 'w'){
        walk() 
    } else if (choice === 'i'){
        printInventory()
    }else {
        isAlive = false
        console.log('You quit the game')
    }

function walk(){
    let random = Math.floor(Math.random()*4)
    if (random === 3){
        enemyEncounter()
    } else {
        console.log('You continue walking safely')
    }
}

function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] Run, or [q] Quit`, {limit: 'arq'})
    if(choice === 'a'){
        fight()
    }else if (choice === 'r'){
        run()
    }else{
        isAlive = false
        console.log('you quit')
    }
}

function selectEnemy(){
    let random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}
    function printInventory(){

    }

    // let living = ask.keyIn('Are you alive? (y/n)', {limit: 'yn'})
    // if (living === 'y'){
    //     console.log('keep playing')    
    // } else if (living === 'n'){
    //     isAlive = false
    //     console.log('You are dead')
    // }
}

console.log('the game ended')