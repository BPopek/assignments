const ask = require('readline-sync')

let isAlive = true
let hasWon = false
let wartAlive = true

function Enemy(name, description, hp, ap){
    this.description = description;
    this.hp = hp; 
    this.name = name;
    this.ap = ap;
}

let enemyHealth1 = 30
let enemyHealth2 = 35
let enemyHealth3 = 20
let enemyHealth4 = 40
let enemyHealth5 = 55
let enemyHealth6 = 70

const shyGuy = new Enemy('Shyguy', 'A member of the evil 8-bits club. Shyguys wear a mask because they are shy, but do not let that fool you — they really like to walk into you to do damage.', enemyHealth1, 1)
const cobrat = new Enemy('Cobrat', 'Watch out, Cobrats can jump and spit projectiles.', enemyHealth2, 1)
const pokey = new Enemy('Pokey', 'Pokeys may be tall and slow-moving, but their thorns will hurt you!', enemyHealth3, 1)
const phanto = new Enemy('Phanto', 'Careful! Never turn your back on a Phanto, especially if you have a key.', enemyHealth4, 1)
const birdo = new Enemy('Birdo', 'Beware, Birdo is a mini-boss! Watch out for their eggs.', enemyHealth5, 1)
const wart = new Enemy('Wart', 'Wart is the villaious tyrant who has all of Subcon under his evil spell! Watch out for his dangerous bubbles.', enemyHealth6, 1)

const enemies = [shyGuy, cobrat, pokey, phanto, birdo, wart]

function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const mainHero = new Hero('default', 0, 0)
const princess = new Hero('Princess Toadstool', 95, 1)
const mario = new Hero('Mario', 100, 1)
const luigi = new Hero('Luigi', 90, 1)
const toad = new Hero('Toad', 85, 1)

// const heroes = [princess, mario, luigi, toad]

function GenerateItem(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const oneup = new GenerateItem('1 UP', 30, 2)
const mushroom = new GenerateItem('Mushroom', 40, 2)
const starman = new GenerateItem('Starman', 35, 35)

const bomb = new GenerateItem('Bomb', 5, 8)
const vegetable = new GenerateItem('Vegetable', 5, 8)
const turtleshell = new GenerateItem('Turtle Shell', 10, 8)

const inventoryItems = []
const possibleItems = [oneup, mushroom, starman, bomb, vegetable, turtleshell]

function printFullInventory(){
    console.log(`${mainHero.name}'s inventory includes:`)
        inventoryItems.forEach(item => {
            console.log(item.name)
        })
    console.log(`Your current health is ${mainHero.hp} and your attack is ${mainHero.ap}`)
}

console.log('Welcome to Subcon, the land of dreams! Our once-beautiful home now suffers at the hands of the evil Wart. Please join us on this quest to defeat him and restore peace to our dream world.!')
console.log(`


                     ______________
                    | PLEASE HELP! ⫸
                    | ̅̅̅̅̅̅̅̅̅̅̅̅̅̅
                    |    
              |▶︎    |     |▶︎    |▶︎
              |     |  ∆  |     |
           [][][]  _|_⎡ ⎤_|_  [][][]
            |::|  |:: : : ::|  |::|
            |::|__|:: [] ::|__|::|
            |:[]:[]:: [] ::[]:[]:|
            |:[]:[]:: [] ::[]:[]:|
            |:[]:[]::_____::[]:[]:|
            |:[]:[]:| ||| |:[]:[]:|
            |:[]:[]:| ||| |:[]:[]:|
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~               
    
      *** SUBCON - THE LAND OF DREAMS ***

`
)
const name = ask.question('What is your name? ')

console.log(`Thanks for joining us, ${name}! Only you can free us from Wart's evil tyranny.`)

let choice = ask.keyIn(`Which hero would you like to choose: [m] Mario, [l] Luigi, [t] Toad, or [p] Princess Toadstool? `, {limit: 'mltp'})
    if (choice === 'm'){
        mainHero.name = 'Mario';
        mainHero.hp = mario.hp;
        mainHero.ap = mario.ap;
    } else if (choice === "l") {
        mainHero.name = 'Luigi';
        mainHero.hp = luigi.hp;
        mainHero.ap = luigi.ap;
    } else if (choice === "t") {
        mainHero.name = 'Toad';
        mainHero.hp = toad.hp;
        mainHero.ap = toad.ap;
    } else {
        mainHero.name = 'Princess Toadstool';
        mainHero.hp = princess.hp;
        mainHero.ap = princess.ap;
    }
    // console.log(mainHero.ap)

while (isAlive && !hasWon && wartAlive){
    let choice = ask.keyIn(`${mainHero.name}, would you like to [w] walk around and explore the magical land of Subcon, [l] look around for helpful items, [i] check inventory, or [q] quit the game? `, {limit: 'wliq'})
    if (choice === 'w'){
        walk() 
    } else if (choice === 'l'){
        lookAround()
    } else if (choice === 'i'){
        printFullInventory(inventoryItems)
    } else {
        isAlive = false
        // console.log('You quit the game')
        console.log(`

            
        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
       * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
      * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
     * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
      * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
       * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *


        `)  
    }
}

function walk(){
    let random = Math.floor(Math.random() * 3)
    if (random === 2){
        enemyEncounter()
    } else {
        console.log('You continue walking safely around Subcon')
    }
}

function lookAround(){
    let random = Math.floor(Math.random() * 3)
    // let randomWeapon = Math.floor(Math.random() * possibleItems.length)
    if(random === 2){
        findItem(possibleItems)
        let choice = ask.keyIn(`${mainHero.name}, would you like to [w] walk around and explore the magical land of Subcon, [l] look around for helpful items, [i] check inventory, or [q] quit the game? `, {limit: 'wliq'})
        if (choice === 'w'){
            walk() 
        } else if (choice === 'l'){
            lookAround()
        } else if (choice === 'i'){
            printFullInventory(inventoryItems)
        } else {
            isAlive = false
            // console.log('You quit the game')
            console.log(`

            
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
           * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
          * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
         * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
          * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
           * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *


`) 
        }
    } else {
        let choice = ask.keyIn(`You didn't find any weapons or health items. Would you like to [w] walk around and continue to explore the magical land of Subcon, [l] look around more for helpful items, [i] check inventory, or [q] quit the game? `, {limit: 'wliq'})
        if (choice === 'w'){
            walk() 
        } else if (choice === 'l'){
            lookAround()
        } else if (choice === 'i'){
            printFullInventory(inventoryItems)
        } else {
            isAlive = false
            // console.log('You quit the game')
            console.log(`

            
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
           * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
          * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
         * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
          * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
           * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *


            `) 
        }
    }
}
function findItem(items){
    let random = Math.floor(Math.random() * items.length)
    const foundItem = items[random]
    // inventoryItems.push(item[random]); *not needed since added in if statement below
    //be more specific... compare foundItem.name with oneup.name

    //condition should check to see if items contains the foundItem
    const doubleCheckItems = inventoryItems.some(function(item) {
        // console.log('inventoryItems', inventoryItems)
        // console.log('foundItem', foundItem)
        return foundItem.name === item.name
    })

    if (!doubleCheckItems){
        inventoryItems.push(foundItem);

    if (foundItem === oneup){
        inventoryItems.pop();        
        console.log(`Great job ${mainHero.name}, you found a ${foundItem.name}! This brought you ${foundItem.hp} health points and ${foundItem.ap} attack points.`) 
    } else if (foundItem === mushroom){
        inventoryItems.pop(); 
        console.log(`Great job ${mainHero.name}, you found a ${foundItem.name}! This brought you ${foundItem.hp} health points and ${foundItem.ap} attack points.`) 
    } else if (foundItem === starman){
        inventoryItems.pop()
        console.log(`Great job ${mainHero.name}, you found a ${foundItem.name}! This brought you ${foundItem.hp} health points and ${foundItem.ap} attack points.`) 
    } else (console.log(`Great job ${mainHero.name}, you found a ${foundItem.name}! This has been added to your inventory and brought you ${foundItem.hp} health points and ${foundItem.ap} attack points.`) )
        mainHero.hp += items[random].hp
        mainHero.ap += items[random].ap
        return inventoryItems
    }   
}

function selectEnemy(){
    let random = Math.floor(Math.random() * enemies.length)
    return enemies[random]
}
function wonItem(items){
    let random = Math.floor(Math.random() * items.length)
    const wonItem = items[random]
    const currEnemy = selectEnemy()
    const doubleCheckItems = inventoryItems.some(function(item) {
        // console.log('inventoryItems', inventoryItems)
        // console.log('foundItem', foundItem)
        return wonItem.name === item.name
    })
    if (!doubleCheckItems){
        inventoryItems.push(wonItem);
    if (wonItem === oneup){
        inventoryItems.pop();
    } else if (wonItem === mushroom){
        inventoryItems.pop(); 
    } else if (wonItem === starman){
        inventoryItems.pop()
    }
    console.log(`You have been rewarded with a ${wonItem.name} from their stash! This has been added to your inventory and brought you ${wonItem.hp} health points and ${wonItem.ap} attack points.`) 
    mainHero.hp += wonItem.hp
    mainHero.ap += wonItem.ap
    return inventoryItems
}
}

function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`Oh no, you encountered ${currEnemy.name}! ${currEnemy.description} Would you like to [a] attack ${currEnemy.name}, [r] run away from ${currEnemy.name}, or [q] quit the game? `, {limit: 'arq'})
    if(choice === 'a'){
        attack(currEnemy)
    } else if (choice === 'r'){
        run(currEnemy)
    } else {
        isAlive = false
        // console.log('you quit')
        console.log(`

            
        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
       * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
      * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
     * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
      * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
       * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *


        `) 
    }
}

function attack(currEnemy) {
    const enemyAttack = currEnemy.ap * Math.floor(Math.random() * 5 + 1)
    const heroAttack = mainHero.ap * Math.floor(Math.random() * 5 + 1)
    currEnemy.hp -= heroAttack
    mainHero.hp -= enemyAttack
    if (mainHero.hp > 0 && currEnemy.hp > 0) {
        console.log(`You attack ${currEnemy.name}, their health is now ${currEnemy.hp}. ${currEnemy.name} struck you and your health is ${mainHero.hp}.`)
        let choice = ask.keyIn(`Would you like to [a] attack ${currEnemy.name}, [r] run away from ${currEnemy.name}, [i] check inventory, or [q] quit the game? ` , {limit: 'ariq'})
        if (choice === 'a') {
            attack(currEnemy)
        } else if (choice === 'r'){
            run(currEnemy)
        } else if (choice === 'i'){
            printFullInventory(inventoryItems)
        } else {
            isAlive = false
            // console.log('You Quit')
            console.log(`

            
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
                       * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
                      * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
                     * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
                      * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
                       * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
            
            
            `)  

        }
    } else if (mainHero.hp <= 0){ 
            isAlive = false 
            console.log(`Bad news, ${currEnemy.name} has defeated you! You have failed to save Subcon from the evil Wart.`)  
            console.log(`

            
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
                       * ┼┼┼ ███▀▀▀██ ███▀▀▀███ ███▀█▄█▀███ ██▀▀▀     ███▀▀▀███ ▀███   ██▀  ██▀▀▀ ██▀▀▀▀██▄  ┼┼┼ *
                      * ┼┼┼┼ ██    ██ ██     ██ ██   █   ██ ██        ██     ██   ██   ██   ██    ██     ██  ┼┼┼┼ *
                     * ┼┼┼┼┼ ██   ▄▄▄ ██▄▄▄▄▄██ ██   ▀   ██ ██▀▀▀     ██     ██   ██   ██   ██▀▀▀ ██▄▄▄▄▄▀▀  ┼┼┼┼┼ *
                      * ┼┼┼┼ ██    ██ ██     ██ ██       ██ ██        ██     ██   ██   ██   ██    ██     ██  ┼┼┼┼ *
                       * ┼┼┼ ███▄▄▄██ ██     ██ ██       ██ ██▄▄▄     ███▄▄▄███    ▀▀█▀▀    ██▄▄▄ ██     ██▄ ┼┼┼ *
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
            
            
            `)  
    } else if (currEnemy.hp <= 0) {
        console.log(`Great job, you defeated ${currEnemy.name}!`)
        if (currEnemy.name === "Shyguy"){
            currEnemy.hp = enemyHealth1
            wonItem(possibleItems)
        } else if (currEnemy.name === "Cobrat"){
            currEnemy.hp = enemyHealth2
            wonItem(possibleItems)
        } else if (currEnemy.name === "Pokey"){
            currEnemy.hp = enemyHealth3
            wonItem(possibleItems)
        } else if (currEnemy.name === "Phanto"){
            currEnemy.hp = enemyHealth4
            wonItem(possibleItems)
        } else if (currEnemy.name === "Birdo"){
            currEnemy.hp = enemyHealth5
            wonItem(possibleItems)
        } else if (currEnemy.name === "Wart"){
            wartAlive = false
                console.log(`Thank you, ${mainHero.name}! You have freed us from Wart's tyranny! Now we can wake up from this terrible dream.`)

                console.log(`

                                   
                   ∖ | /
                 '-○○○○○-'
               -==○○○○○○○==-
                 .-○○○○○-.              __   _
                   / | ∖              _(  )_( )_
   __   _                            (_   _    _)
 _(  )_( )_                            (_) (__)
(_   _    _)               
  (_) (__)
                     
              |▶︎    |▶︎    |▶︎    |▶︎
              |     |  ∆  |     |
           [][][]  _|_⎡ ⎤_|_  [][][]
            |::|  |:: ::: ::|  |::|
            |::|__|:: [] ::|__|::|
            |:[]:[]:: [] ::[]:[]:|
            |:[]:[]:: [] ::[]:[]:|
            |:[]:[]::_____::[]:[]:|
            |:[]:[]:| ||| |:[]:[]:|
            |:[]:[]:| ||| |:[]:[]:|
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~               
    
      *** SUBCON - THE LAND OF DREAMS ***

`)
        return
    } else {
        return
    }
}
}

function run(currEnemy) {
    let random = Math.floor(Math.random() * 2)
    if (random === 1){
        console.log('Wow, you are fast! You have successfully escaped your enemy!')
    } else {
        const enemyAttack = currEnemy.ap * Math.floor(Math.random() * 5)
        mainHero.hp -= enemyAttack
        if (mainHero.hp > 0){ 
            isAlive = true 
        } else {
            isAlive = false
            console.log(`Bad news, ${currEnemy.name} has defeated you! You have failed to save Subcon from the evil Wart.`)
            console.log(`

            
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
           * ┼┼┼ ███▀▀▀██ ███▀▀▀███ ███▀█▄█▀███ ██▀▀▀     ███▀▀▀███ ▀███   ██▀  ██▀▀▀ ██▀▀▀▀██▄  ┼┼┼ *
          * ┼┼┼┼ ██    ██ ██     ██ ██   █   ██ ██        ██     ██   ██   ██   ██    ██     ██  ┼┼┼┼ *
         * ┼┼┼┼┼ ██   ▄▄▄ ██▄▄▄▄▄██ ██   ▀   ██ ██▀▀▀     ██     ██   ██   ██   ██▀▀▀ ██▄▄▄▄▄▀▀  ┼┼┼┼┼ *
          * ┼┼┼┼ ██    ██ ██     ██ ██       ██ ██        ██     ██   ██   ██   ██    ██     ██  ┼┼┼┼ *
           * ┼┼┼ ███▄▄▄██ ██     ██ ██       ██ ██▄▄▄     ███▄▄▄███    ▀▀█▀▀    ██▄▄▄ ██     ██▄ ┼┼┼ *
            * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *


            `)  
            return   
        }
        console.log(`You attempted to escape but ${currEnemy.name} has caught you. Careful, now ${currEnemy.name} is mad and their attack could cause more damage! 
        ${currEnemy.name}'s health is ${currEnemy.hp}. ${currEnemy.name} struck you and your health is ${mainHero.hp}.`)
        let choice = ask.keyIn(`Would you like to [a] attack ${currEnemy.name}, [r] run away from ${currEnemy.name}, or [q] quit the game? ` , {limit: 'arq'})
        if (choice === 'a') {
            attack(currEnemy)
        } else if (choice === 'r'){
            run(currEnemy)
        } else {
            isAlive = false
            // console.log('You Quit')
            console.log(`

            
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
                       * ┼┼┼ ▀███  ██▀ ███▀▀▀███ ▀███   ██▀    ██▀▀▀▀▀██ ▀███   ██▀  ██████ ██████ ┼┼┼ *
                      * ┼┼┼┼   ██  ██  ██     ██   ██   ██     ██     ██   ██   ██     ██     ██   ┼┼┼┼ *
                     * ┼┼┼┼┼   ██████  ██     ██   ██   ██     ██  █  ██   ██   ██     ██     ██   ┼┼┼┼┼ *
                      * ┼┼┼┼     ██    ██     ██   ██   ██     ██   █ ██   ██   ██     ██     ██   ┼┼┼┼ *
                       * ┼┼┼     ██    ███▄▄▄███   ██▄▄▄██     ██▄▄▄█▄██   ██▄▄▄██   ██████   ██   ┼┼┼ *
                        * ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼ *
            
            
            `) 
        }
    }
}
    