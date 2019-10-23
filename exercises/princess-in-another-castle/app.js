let gameActive = true 
let hasWon = false
let hasStar = false

class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive
    }
    setName(namePicked){
        if (namePicked === 'Mario'){
            this.name="Mario";
            } else {
                this.name="Luigi";
            }
    }
    gotHit(){
        if (this.status === 'Small'){
            this.status = 'Dead';
            this.gameActive = false
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else if (this.status === 'Powered Up')
            this.status = 'Big'
    }
    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big';
        } else if (this.status === 'Big'){
            this.status = 'Powered Up';
        } else if (player.status === 'Powered Up'){
            this.hasStar = true;
            console.log('Yay, you got a star! \n')
        }
    }
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`Name: ${this.name}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        console.log(`Status: ${this.status}`)
        console.log(`Has Star: ${this.hasStar} \n`)
        
    }
}

const player = new Player('Mario', 0, 'Powered Up', false, true)

const myInterval = setInterval(() => {
    function randomRange() {
        let total = Math.floor(Math.random() * 4);
        if (total === 0) {
            player.gotHit()
        } else if (total === 1) {
            player.gotPowerup()
        } else {
            player.addCoin()
        }
    }
    randomRange()
    player.setName(player.name)
    player.print()
    if(player.gameActive === false){
        clearInterval(myInterval)
    }
}, 1000)
