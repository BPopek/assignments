// const axios = require("axios")

// const createToDo = ((singleToDoObject) => {
//     axios.post("https://api.vschool.io/betsy/todo/" + singleToDoObject._id).then(function(response) {
//         alert("Your to-do was successfully added!")
//     } (function(response) {
//         alert("There was a problem creating your to-do.");
//         })
//     )
// })

// for(let i = 0; i < response.data.length; i++) {
//         let newItem = document.createElement('h5');
//         newItem.textContent = response.data[i].title;
//         document.getElementById("list").appendChild(newItem)
//         if(response.data[i].completed === true) {
//             newItem.innerHTML = `<s>${response.data[i].title}</s>`
//         }
    // }

const title = document.getElementById("title")
const description = document.getElementById("description")
const listInput = document.listInput
const price = document.getElementById("price")
const url = document.getElementById("url")

axios.get("https://api.vschool.io/Betsy/todo/").then((response) => {
    const todos = response.data 
    console.log(todos)
    for(i = 0; i < todos.length; i++) {
        makeTodo(todos[i]);
    }
})

document.listInput.addEventListener("submit", (e) => {
    e.preventDefault()
    const newToDo = {
        "title": `${title.value}`, 
        "description": `${description.value}`, 
        "price": `${price.value}`, 
        "imgUrl": `${url.value}` 
    }
    
    axios.post("https://api.vschool.io/Betsy/todo/", newToDo).then((response) => {
        makeTodo(response.data)
    })
})

function makeTodo(todo){
// create or select DOM element 
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")

// edit element
    h1.textContent = todo.title 

    if(todo.completed === true) {
        // h1.innerHTML = `<s>${todo.title}</s>`
        h1.style.textDecoration = 'line-through';
        } else {
            h1.textContent = todo.title
    }

    checkbox.type = "checkbox"
    checkbox.type.checked = todo.completed
    p.textContent = todo.description
    img.src = todo.imgUrl

// append
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(checkbox)
    container.appendChild(img)

// console.log(container)
    list.appendChild(container)

}
