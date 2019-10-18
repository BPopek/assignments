const ask = require('readline-sync')

let isAlive = true
let hasWon = false
let wartAlive = true

function Enemy(name, hp, ap){
    this.hp = hp; 
    this.name = name;
    this.ap = ap;
}

let enemyHealth1 = 75
let enemyHealth2 = 50
let enemyHealth3 = 40
let enemyHealth4 = 50
let enemyHealth5 = 60
let enemyHealth6 = 70

const shyGuy = new Enemy('Shyguy', enemyHealth1, 1)
const cobrat = new Enemy('Cobrat', enemyHealth2, 1)
const pokey = new Enemy('Pokey', enemyHealth3, 1)
const phanto = new Enemy('Phanto', enemyHealth4, 1)
const birdo = new Enemy('Birdo', enemyHealth5, 1)
const wart = new Enemy('Wart', enemyHealth6, 1)

const enemies = [shyGuy, cobrat, pokey, phanto, birdo, wart]

function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const princess = new Hero('Princess Toadstool', 100, 1)
// const mario = new Hero('Mario', 70, 70)
// const luigi = new Hero('Luigi', 50, 55)
// const toad = new Hero('Toad', 60, 50)

// const heroes = [princess, mario, luigi, toad]
// ************************************************************

function PrintInventory(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const oneup = new PrintInventory('1 UP', 100, 5)
const mushroom = new PrintInventory('Mushroom', 70, 20)
const starman = new PrintInventory('Starman', 50, 50)

const bomb = new PrintInventory('Bomb', 5, 50)
const vegetable = new PrintInventory('Vegetable', 5, 80)
const turtleshell = new PrintInventory('Turtle Shell', 10, 90)

const inventoryItems = []
const possibleItems = [oneup, mushroom, starman, bomb, vegetable, turtleshell]

function printInventory(){
    console.log(`Your inventory includes: ${inventoryItems.name}`)
}

// ************************************************************

console.log('Welcome to Subcon, the land of dreams! Our once-beautiful world now suffers at the hands of the evil Wart. Please help us!')
const name = ask.question('What is your name? ')

console.log(`Thanks for joining us, ${name}! Only you can free us from his tyranny.`)

while (isAlive && !hasWon && wartAlive){
    let choice = ask.keyIn(`Would you like to [w] Walk, [l] look around for helpful items, [i] Check Inventory, or [q] Leave Game? `, {limit: 'wliq'})
    if (choice === 'w'){
        walk() 
    } else if (choice === 'l'){
        lookAround()
    } else if (choice === 'i'){
        printInventory()
    } else {
        isAlive = false
        console.log('You quit the game')
    }
}

function walk(){
    let random = Math.floor(Math.random() * 4)
    if (random === 3){
        enemyEncounter()
    } else {
        console.log('You continue walking safely')
    }
}
// ***********
function lookAround(){
    let random = Math.floor(Math.random() * 4)
    let randomWeapon = Math.floor(Math.random() * possibleItems.length)
    if(random === 3){
    findItem(possibleItems)
    } else {
        let choice = ask.keyIn(`You didn't find any weapons or health items. Would you like to [w] Walk, [l] look around more for helpful items, [i] Check Inventory, or [q] Leave Game? `, {limit: 'wliq'})
        if (choice === 'w'){
            walk() 
        } else if (choice === 'l'){
            lookAround(possibleItems)
        } else if (choice === 'i'){
            printInventory()
        } else {
            isAlive = false
            console.log('You quit the game')
        }
    }
}
function findItem(){
    let random = Math.floor(Math.random() * possibleItems.length)
    return possibleItems[random]
}
// **********
function selectEnemy(){
    let random = Math.floor(Math.random() * enemies.length)
    return enemies[random]
}

function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] Run, or [q] Quit? `, {limit: 'arq'})
    if(choice === 'a'){
        attack(currEnemy)
    } else if (choice === 'r'){
        run(currEnemy)
    } else {
        isAlive = false
        console.log('you quit')
    }
}

function attack(currEnemy) {
    const enemyAttack = currEnemy.ap * Math.floor(Math.random() * 5)
    const heroAttack = princess.ap * Math.floor(Math.random() * 5)
    currEnemy.hp -= heroAttack
    princess.hp -= enemyAttack
    if (princess.hp > 0 && currEnemy.hp > 0) {
        console.log(`You attack ${currEnemy.name}, their health is ${currEnemy.hp}. ${currEnemy.name} struck you and your health is ${princess.hp}.`)
        let choice = ask.keyIn(`Would you like to [a] Attack, [r] Run, or [q] Quit? ` , {limit: 'arq'})
        if (choice === 'a') {
            attack(currEnemy)
        } else if (choice === 'r'){
            run(currEnemy)
        } else {
            isAlive = false
            console.log('You Quit')}
    } else if (princess.hp <= 0){ 
            isAlive = false 
            console.log(`${currEnemy.name} has defeated you! You are dead.`)    
    } else if (currEnemy.hp <= 0) {
        console.log(`Great job, you defeated ${currEnemy.name}!`)
        if (currEnemy.name === "Shyguy"){
            currEnemy.hp = enemyHealth1
        } else if (currEnemy.name === "Cobrat"){
            currEnemy.hp = enemyHealth2
        } else if (currEnemy.name === "Pokey"){
            currEnemy.hp = enemyHealth3
        } else if (currEnemy.name === "Phanto"){
            currEnemy.hp = enemyHealth4
        } else if (currEnemy.name === "Birdo"){
            currEnemy.hp = enemyHealth5
        } else if (currEnemy.name === "Wart"){
            wartAlive = false
            console.log(`Thank you, ${name}! You have freed us from Wart's tyranny!`)
        return
    } else {
        return
    }
}
}

function run(currEnemy) {
    let random = Math.floor(Math.random() * 5)
    if (random === 1){
        console.log('You escaped your enemy!')
    } else {
        const enemyAttack = currEnemy.ap * Math.floor(Math.random() * 5)
        princess.hp -= enemyAttack
        if (princess.hp > 0){ 
            isAlive = true 
        } else {
            isAlive = false
            console.log(`${currEnemy.name} has defeated you! You are dead.`)
            return   
        }
        console.log(`You attempted to escape but ${currEnemy.name} has caught you. Uhoh, now ${currEnemy.name} is mad and their attack is TWICE as hard! ${currEnemy.name}'s health is ${currEnemy.hp}. ${currEnemy.name} struck you and your health is ${princess.hp}.`)
        let choice = ask.keyIn(`Would you like to [a] Attack, [r] Run, or [q] Quit? ` , {limit: 'arq'})
        if (choice === 'a') {
            attack(currEnemy)
        } else if (choice === 'r'){
            run(currEnemy)
        } else {
            isAlive = false
            console.log('You Quit')
        }
    }
}