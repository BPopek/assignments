const express = require('express')
const itemRouter = express.Router()
const database = require('../database.json')

// itemRouter.route('/')
//     .get((req, res) => {
//         res.send(database)
//     })



itemRouter.route('/')
    .get((req, res) => {
        if(req.query.type) {
            res.send(database.find(item => item.type === req.query.type))
        } else if (req.query.name) {
            res.send(database.find(item => item.name === req.query.name)) 
        } else if (req.query.price){
            res.send(database.find(item => item.price === req.query.price)) 
        } else {
            res.send(database)
        }
    })

module.exports = itemRouter