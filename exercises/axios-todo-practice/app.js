// const axios = require("axios")

const title = document.getElementById("title")
const description = document.getElementById("description")
const listInput = document.listInput
const price = document.getElementById("price")
const url = document.getElementById("url")
const box = document.getElementsByClassName("checkbox")
const form = document.form

axios.get("https://api.vschool.io/Betsy/todo/").then((response) => {
    const todos = response.data 
    for(i = 0; i < todos.length; i++) {
        makeTodo(todos[i]);
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newToDo = {
        title: e.target.title.value, 
        description: e.target.description.value, 
        price: e.target.price.value, 
        imgUrl: e.target.url.value
    }
    
    axios.post("https://api.vschool.io/Betsy/todo/", newToDo).then(response => {
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
    const editBut = document.createElement("button")

// edit element
    h1.textContent = todo.title 
    if(todo.completed) {
        h1.style.textDecoration = 'line-through'
    }

    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    p.textContent = todo.description
    img.src = todo.imgUrl
    deleteBut.type = "button"
    deleteBut.textContent = "X"
    editBut.type = "button"
    editBut.textContent = "EDIT"

    checkbox.addEventListener("change", e => {
        axios.put("https:api.vschool.io/Betsy/todo/" + todo._id, {completed: e.target.checked}).then(response => {
            // link in put abpve could also look like: (https://api.vschool.io/Betsy/todo/ + todo._id}, todo)
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
    })

    deleteBut.addEventListener('click', e => {
       axios.delete("https:api.vschool.io/Betsy/todo/" + todo._id).then(response =>{
    //    console.log(response.data.msg)
    // this console log ^ shows the response from the database on browser inspect console log (you have successfully deleted the record)
       container.remove()
        })
    })

    editBut.addEventListener('click', e => {
        const titleInput = document.createElement('input');
        titleInput.type = "text";
        titleInput.value = h1.textContent
        container.replaceChild(titleInput, h1)

        const descriptionInput = document.createElement('input');
        descriptionInput.type = "text";
        descriptionInput.value = p.textContent
        container.replaceChild(descriptionInput, p)

        const urlInput = document.createElement('input');
        urlInput.type = "text";
        urlInput.value = img.src
        container.replaceChild(urlInput, img)

        const saveBut = document.createElement('button');
        saveBut.type = "button";
        saveBut.textContent = "save";
        container.replaceChild(saveBut, editBut)

        // container.appendChild(titleInput)

        saveBut.addEventListener('click', e => {
            const saveToDo = {
                title: titleInput.value, 
                description: descriptionInput.value, 
                imgUrl: urlInput.value
            }
            
            axios.put(`https:api.vschool.io/Betsy/todo/${todo._id}`, saveToDo).then(response => 
                console.log(response.data))
        })

    })

// append
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(checkbox)
    container.appendChild(deleteBut)
    container.appendChild(editBut)

// console.log(container)
    list.appendChild(container)

}
// ********
// function updateToDo(todo){
//     axios.put(`https://api.vschool.io/Betsy/todo/${todo._id}`, todo).then(response => console.log(response.data))
// }
// ********

// ******** CLINT'S CODE (was inside maketoDo)
// deleteBut.addEventListener('click', e => {
//     deleteToDo(todo)
//     console.log(event.target)
// })


// ******** OUTSIDE MAKETODO

// function deleteToDo(todo){
//     axios.delete(`https://api.vschool.io/Betsy/todo/${todo._id}`, todo).then(response => console.log(response.data))
// }
// ********


// ******** CLINT'S CODE (was inside maketoDo)
// checkbox.addEventListener("change", e => {
//     todo.completed = checkbox.checked
//     updateToDo(todo)
//     console.log(event.target.checked)
// })

// ******** OUTSIDE MAKETODO


// function editToDo(todo){
//     axios.put(`https://api.vschool.io/Betsy/todo/${todo._id}`, todo).then(response => console.log(response.data))
// }


