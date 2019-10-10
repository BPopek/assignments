const myBox = document.getElementById("box")

myBox.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
})

myBox.addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
})

myBox.addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
})

myBox.addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
})

document.addEventListener("keypress", function(event){
    if (event.key === "b"){
        myBox.style.backgroundColor = "blue"
    } else if (event.key === "r"){
        myBox.style.backgroundColor = "red"
    } else if (event.key === "y"){
        myBox.style.backgroundColor = "yellow"
    } else if (event.key === "o"){
        myBox.style.backgroundColor = "orange"
    } else {
        myBox.style.backgroundColor = "white"
    }
})

window.addEventListener("scroll", function(){
    myBox.style.backgroundColor = "orange"
    }
)