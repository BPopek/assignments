// const axios = require("axios") ---- use the script tag to put axios CDN in html code

// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function (){
//     if(xhr.readyState === 4 && xhr.status === 200){
//        const jsonData = xhr.responseText 
//        console.log(jsonData)
//        const data = JSON.parse(jsonData)
//        console.log(data)
//     }
// }
// xhr.open("GET", "https://swapi.co/api/people/1")

// xhr.send()



// all this code becomes:
// GET 

axios.get().then(response => {
    console.log("https://swapi.co/api/people/1")response.data.name
})

const whatIsGet = axios.get("https://swapi.co/api/people/1")
console.log(whatIsGet)
// what is returned from whatIsGet is a promise 

Promise.then()

axios.get(("https://swapi.co/api/people/1")).then((response)=>{
    console.dir(response.data.name)
})

// PUSH 
const newToDo = {
    title: "Go shopping",
    description: "harmons"
}

axios.post("https://api.vschool.io/betsy/todo", newToDo).then((response)=>{

})

const editedToDo = {
    description: "this one is edited"
}
axios.put("https://api.vschool.io/betsy/todo/ID NUMBER HERE" + or id here, editedToDo)

// to DELETE. DELETE DOES NOT NEED A 2ND ARGUMENT, JUST DELETING THE WHOLE ITEM AND NO NEED TO TELL IT WHICH TO EDIT
axios.delete("https://api.vschool.io/betsy/todo") + id)



// POST
// to make checkbox


// PUTS and POST need an object created before them

// add event listener to list input form. Use submit because it adds when user hits 'enter' or clicks submit button. Event is the submission, target is the form itself.



checkbox.addEventListener("change"), e => {
    axios.put("https:api.vschool.io/Betsy/todo/" + todo._id), {completed: e.target.checked}.then(response => h1.style.textDecoration = response.data.completed ? "line-through" : "none"
)}

// terniary statement: response.data.completed ? console.log("true") : console.log("true") can turn it into a shortened version: const whatever = response.data.completed ? "true" : "true"
