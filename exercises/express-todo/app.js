const express = require('express')
const app = express()
const uuid = require('uuid/v4')
const PORT = 8000

app.use(express.json())


//get collection of all
app.get('/todo', (req, res) => {
    console.log(req.params)
    res.send(todos)
})

//get ONE from collection
app.get('/todo/:_id', (req, res) => {
    const todoID = req.params._id
    const specificToDo = todos.find(todo => todo._id === todoID)
    res.send(specificToDo)
})
    //or
    app.get('/todo/:_id', (req, res) => {
        const specificToDo = todos.find(todo => todo._id === req.params._id)
        res.send(specificToDo)
    })

// POST NEW TODO - ERIC
const todos = []
app.post('/todo', (req, res) => {
    todos.push({...req.body, _id: uuid()})
    res.send(todos)
})
    //or NATE's WAY
    app.post('/todo', (req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(newTodo)
    })

// PUT TO CHANGE ONE TODO

// app.put('/todo/update/:_id', (req, res) => {
//     let indextoUpdate = todos.findIndex((todo) => {
//         return todo._id === req.params._id;
//     });
//     for (key in todos[indextoUpdate]) {
//         if (key !== req.body[key]){
//             todos[indextoUpdate][key] = req.body[key];
//         };
//         //add id back in
//     }
//     res.send(todos)
// })


app.put('/todo/:_id', (req, res) => {
    const todoID = req.params._id
    const todoToUpdate = todos.find(todo => todo._id === todoID)
    const todoIndexToUpdate = todos.findIndex(todo => todo._id === todoID)
    const updatedToDo = Object.assign(todoToUpdate, req.body)
    todos.splice(todoIndexToUpdate, 1, updatedToDo)
    res.send(updatedToDo)
})



//NATE DELETE
app.delete('/todo/:_id', (req, res) => {
    const todoID = req.params._id
    const todoIndexDelete = todos.findIndex(todo => todo._id === todoID)
    const todoName = todos[todoIndexDelete].name
    todos.splice(todoIndexDelete, 1)
    res.send(`Successfully deleted Todo ${todoName}.`)
})

app.listen(PORT, () => {
    console.log('app is running on port ' + PORT)
})