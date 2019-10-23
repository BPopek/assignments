// classes are the ES6 version of the constructor function, will be used in React

    // constructor function is the ES5 way to create new objects. Like a blueprint; what does it need - you tell it the values

function Person(name, age){
    this.name = name;
    this.age = age; 
}
const betsy = new Person('Betsy', 37)
const jake = new Person('Jake', 39)

console.log(betsy)

// parameters can be called whatever you want: 
// function Person(nm, a){
//     this.name = nm;
//     this.age = a; 
// }

// function Person(name, age){
    //     this.nm = name;
    //     this.a = age; 
    // } - this will return nm and a in the object that is console logged

// DEFAULT PARAMETERto make a default that you can change you can declare it in the function - DEFAULT PARAMETER
    function Person (name='Stew'){
        this.name = name; 
        // name will default to Stew unless you change it 
        this.age = age;
        // function is inside of an Object, it is a METHOD 
        this.speak = function(){
            console.log('I am talking')
        }
    }
    // if using these people below, to call speak you would use 
// const betsy = new Person('Betsy', 37)
// const jake = new Person('Jake', 39)
// betsy.speak 

// ES5 way to write it out:   another way to write the speak function (but not as a method) would be 
Person.prototype.speak = function(){
    console.log('I am talking')
}

// TO USE CLASSES INSTEAD OF CONSTRUCTORS.
    // if some are default parameters but not all, place the default parameter at the end. 
    // so if constructor(name="Jeremy", age) but you want to be able to keep name and change age, put constructor(age, name="Jeremy")

class Person {
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }
    // methods are easier to write, can be placed after the constructor but inside of the class
    speak(){
        // console.log('Hello I am speaking')
        // to call speak in another method within the same class, you change to (phrase) and declare the phrase in the other method as shown below
        console.log(phrase)
    }
    iDoWhatIWant(){
        console.log('You cant tell me what to do')
    }
    // if calling speak (or other method) within the class 
    doThing(){
        this.speak('Hello there')
        console.log('doing things')
    }
}



const jeremy = new Person('Jeremy', 30)
console.log(jeremy)
// to call the speak method you just need to type the name.speak 
// if multiple methods are used in the class, you must call each individually
jeremy.speak
jeremy.iDoWhatIWant

// --------------------------------------------------------------------

class Vehicle {
    constructor(make, model){
        this.make = make; 
        this.model = model;
    }
    start(){
        console.log('Engines Running')
    }
}
// to inherit properties from another class: 
class Motorcycle extends Vehicle{
    constructor(make, model, hasSideCar){
        // function to tell it which elements you're taking from other class 
        super(make,model)        
        this.hasSideCar = hasSideCar
    }
    popWheely(){
        console.log('driving on one wheel')
    }
}
// to instantiate
const moto = new Motorcycle('Harley', 'Iron883', false)

console.log(moto)
// child classes (extended classes) can call methods from parent classes!
moto.start()
// if method is in the extended class, the 'parent' class cannot call that method.
// Which means Vehicle.popWheely() will not work since this was created in the moto class 


// princess: put functions inside class (use methods)

// SET INTERVAL: allows you to print something off over & over at a set interval
// takes a callback function (fat arrow) and how long you want it to repeat 
setInterval(() => {
    console.log('Hello')
}, 1000)


// to end it write it as:

let total = 0
// do not need to set total to 0 if you are clearing the interval by saying the if player.gameActive is false 
const myInterval = setInterval(() => {
    console.log("Hello")
        total++
    if(player.gameActive === false) {
        clearInterval(myInterval)
    }
}, 1000)