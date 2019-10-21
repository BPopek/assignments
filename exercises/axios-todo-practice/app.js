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
const box = document.getElementsByClassName("checkbox")


axios.get("https://api.vschool.io/Betsy/todo/").then((response) => {
    const todos = response.data 
    for(i = 0; i < todos.length; i++) {
        makeTodo(todos[i]);
    }
})

document.listInput.addEventListener("submit", (e) => {
    e.preventDefault()
    const newToDo = {
        title: e.target.title.value, 
        description: e.target.description.value, 
        price: e.target.price.value, 
        imgUrl: e.target.url.value
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
    checkbox.className += 'checkbox'
    const deleteBut = document.createElement("button")


// edit element
    h1.textContent = todo.title 

    if(todo.completed === true) {
        // h1.innerHTML = `<s>${todo.title}</s>`
        h1.style.textDecoration = 'line-through';
        } else {
            h1.textContent = todo.title
    }

    checkbox.type = "checkbox"
    // checkbox.type.checked = todo.completed
    p.textContent = todo.description
    img.src = todo.imgUrl
    deleteBut.type = "button"
    deleteBut.textContent = "X"
    
    checkbox.addEventListener("change", e => {
        todo.completed = checkbox.checked
        updateToDo(todo)
        console.log(event.target.checked)
    })

    deleteBut.addEventListener('click', e => {
        deleteToDo(todo)
        console.log(event.target)
    })

// append
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(checkbox)
    container.appendChild(deleteBut)
    container.appendChild(img)

// console.log(container)
    list.appendChild(container)

}

function updateToDo(todo){
    axios.put(`https://api.vschool.io/Betsy/todo/${todo._id}`, todo).then(response => console.log(response.data))
}

function deleteToDo(todo){
    axios.delete(`https://api.vschool.io/Betsy/todo/${todo._id}`, todo).then(response => console.log(response.data))
}