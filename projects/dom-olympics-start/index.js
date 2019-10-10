const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";


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