const express = require('express')
const app = express()
const uuid = require("uuid/v4")
const mongoose = require('mongoose')

app.use(express.json())
//parses the json into javascript for you to use

// app.listen(8000, () => {
//     console.log('app is running on port 8000')
// })

// or 
const PORT = 8000

app.get('/:id', (req, res) => {
    console.log(req.params) 
    console.log(req.query)
    res.send("Hello world!")  //or res.send(database) to get all info
})

const todos = []
app.get('/todo', (req, res) => {
    console.log(req.query)
    res.send(todos)
})

app.post('/todo', (req, res) =>{
    todos.push(req.body) //pushes info to array
    todos.push({...req.body, _id: uuid()}) //pushes info to array and adds a unique id
    res.send(todos)
})

//MARCUS POST
app.post('/todo', (req, res) => {
    //to add random ID in post use uuid npm package
    req.body._id = uuid.v4()
    database.push(req.body)
    res.send({
        data: database,
        itemAdded: req.body
    })
})


//MARCUS DELETE
app.delete('/todo/:_id',  (req, res) => {
    let {_id} = req.params
    let index = database.findIndex(todo => todo._id === _id)
    database.splice(index, 1)
    res.send(`deleted item`)
})

//MARCUS PUT
app.put('/todo/:id', (req, res) => {
    let {_id} = req.params
    let updatedItem = req.body 
    database.forEach(todo => {
        if(todo._id === _id){
            Object.assign(todo, updatedItem)
        } 
    })
    res.send(database)
})

// QUERY example with class database info
app.get('/places', (req, res) => {
    if(req.query.timeToGo){
        res.send(database.filter(spot => spot.timeToGo === req.query.timeToGo))
    } else {
        res.send(database)
    }
})

app.get('/todo', (req, res) => {
    res.send(database)
})

mongoose.connect('mongodb://localhost:27017/nameofdatabase', {useNewURLParser: true}).then(() => {
    console.log('Connected to MongoDB')
})


app.listen(PORT, () => {
    console.log('app is running on port ' + PORT)
})
