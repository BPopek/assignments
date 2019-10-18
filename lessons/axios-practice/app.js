const axios = require("axios")

axios.get("https://swapi.co/api/people").then((response)=>{
    console.dir(response.data)
})




// build a function to do all of the below:

function makeTodo(todo){
    // create or select DOM element 

    const container = document.createElement("div")
    const h1 = document.createElement("h1")

    // edit element
    h1.textContent = todo.title
    p.textContent = todo.description


    // append
    container.appendChild(h1)
    list.appendChild(container)
}
