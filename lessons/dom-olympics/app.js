const h1 = document.createElement("h1");

h1.textContent = "JavaScript made this!!";

document.getElementById("header").appendChild(h1);

Headers.className = "header";

subTitle.innerHTML = 'span class="name'>Betsy</span>



// 3 STEPS:
// create/select Element (below is named by declaring the variable)
const title = document.createElement(h1)


// edit or give content (use console.dir; console.log shows the html and is not a javascript object. Console.dir returns a javascript object to be able to access all the information)
title.textContent = "Javascript Made This"
title.className = "header"

// Append to existing DOM Element
// ****only needed if you're creating a new element. Not needed if you are just selecting an element.
const header = document.getElementById("header")
header.appendChild(title)