const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

// added in class 
// const subHeaderContainer = document.createElement("div")
// const name = document.createElement("span")
// const theRest = document.createElement("span")
// const header = document.getElementById("header")

// name.textContent = "Javascript Made This"
// name.className = "name"
// subHeaderContainer.className = "header"
// theRest.textContent = "Wrote the Javascript"

// subHeaderContainer.appendChild(name)
// subHeaderContainer.appendChild(theRest)
// header.appendChild(title)
// header.appendChild(subHeaderContainer)
// end of added in class 

const subTitle = document.createElement("span");
subTitle.innerHTML = '<span class="name">Betsy</span> wrote the JavaScript';
document.getElementById("header").appendChild(subTitle);
subTitle.className = "sub";

// BRONZE
const messages = document.getElementsByClassName("message");
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

const clear = document.getElementById("clear-button");

clear.addEventListener("click", function(){
    for (let i = 0; i < messages.length; i++){
        messages[i].textContent = ""
    }
})

// SILVER 
const dropMenu = document.getElementById("theme-drop-down");

function createDropDown(){
    dropMenu.addEventListener("change", function(){
        for(let i = 0; i < messages.length; i++) {
            messages[i].classList.toggle("theme-two");
        }
    })
    return dropMenu
}
createDropDown()

// GOLD 

const newLeft = document.createElement("div class='message left'")
const newRight = document.createElement("div class='message right'")
const formInput = document.getElementById("input")

function newMessages(){

}

