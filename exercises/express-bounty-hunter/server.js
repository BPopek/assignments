const express = require ('express')
const app = express()
const uuid = require('uuid/v4')
const PORT = 7000
const bounties = require('./bounties.json')

app.use(express.json())

//GET ALL
app.get('/bounties', (req, res) => {
    console.log(req.params)
    res.send(bounties)
})

//GET ONE
app.get('/bounties/:_id', (req, res) => {
    const specificItem = bounties.find(bounty => bounty._id === req.params._id)
    res.send(specificItem)
})

//POST NEW
app.post('/bounties', (req, res) => {
    req.body._id = uuid()
    bounties.push(req.body)
    res.send(req.body)
})

//PUT (CHANGE)
app.put('/bounties/:_id', (req, res) => {
    let {_id} = req.params
    let updatedItem = req.body
    bounties.forEach(bounty => {
        if(bounty._id === _id){
        Object.assign(bounty, updatedItem)
        }
    })
    res.send(bounties)
})

//DELETE
app.delete('/bounties/:_id', (req, res) => {
    let {_id} = req.params
    const indexDeleteItem = bounties.findIndex(bounty => bounty._id === _id)
    const deletedItemName = (bounties[indexDeleteItem].firstName + ' ' + bounties[indexDeleteItem].lastName)
    bounties.splice(indexDeleteItem, 1)
    res.send(`Successfully deleted ${deletedItemName}.`)
})


app.listen(PORT, () => {
    console.log('App is running on port ' + PORT)
})

