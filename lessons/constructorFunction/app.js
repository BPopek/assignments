function User(name, isAdmin = false) {
    this.name = name
    this.isAdmin = isAdmin
    this.greet = function(){
        console.log("hello, my name is " + this.name)
    }
}

const addedUser = new User('Richie')
    // word new makes a new instantiate = new instance of new user, so new name 
const secondUser = new User('California')
addedUser.name = 'Richard'  
addedUser.greet() 
console.log(addedUser)
console.log(secondUser)


// function House(brickColor, numWindows){

// }

// function User(name, age, password, username, isAdmin = false) {

// constructor functions are capitalized