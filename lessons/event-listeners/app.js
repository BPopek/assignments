// console.log(document) 
// ^ shows all html in console

// const myBox = document.getElementById("box")
//     // grabs the element by the class ID
// const tagBox = document.getElementsByTagName("div")
//     // grabs by tag name. Returns an HTML collection (different than an array because some methods will not work on a collection that will work on an array)
// const classBox = document.getElementsByClassName("boxes")

// console.log(myBox)
// console.log(tagBox[0])
// console.log(classBox[0])

const myBox = document.getElementById("box")
const text = document.getElementById("textBox")

myBox.addEventListener("click", function(){
    // console.log("it worked")
    this.style.backgroundColor = "blue"
})

text.addEventListener("change", function(){
    myBox.style.backgroundColor = "blue"
})

document.addEventListener("keypress", function(){
    myBox.style.backgroundColor = "yellow"
})

document.addEventListener("keypress", function(e){
    // console.log(e.key)  <- to listen for keys. 
    // v Code below listens for specific keys (y and g keys). Can use 'event' instead of e for this also.
    if(e.key === "y"){
        myBox.style.backgroundColor = "yellow"
    } else if (e.key === "g"){
    myBox.style.backgroundColor = "green"
    }
})

const classBoxes = document.getElementsByClassName("boxes")

window.addEventListener("scroll", function(){
    for(let i = 0; i < classBoxes.length; i++){
        classBoxes[i].style.backgroundColor = "purple"
    }
})