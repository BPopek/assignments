const express = require('express')
const itemRouter = express.Router()
const database = require('./database.json')


itemRouter.route('/')
    .get((req, res) => {
        res.send(database)
    })

//NOT WORKING
itemRouter.route('/:type')
    .get((req, res) => {
        res.send(database.find(item => items.type === req.query.type))   
    })

//filter by a maxium price AND a minium price. You can make the maxium default to 1000000 and the minimum defualt to 0.  ****** NOT WORKING

    .get('/', (req, res) => {
        if(req.query.price){
            const maxPrice = database.filter(item => items.price <= +req.query.price)
            res.send(maxPrice.filter(item => items.price >= +req.query.price))
        }
    })


module.exports = itemRouter