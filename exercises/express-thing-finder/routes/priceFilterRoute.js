const express = require('express')
const priceFilterRouter = express.Router()
const database = require('../database.json')

priceFilterRouter.route('/')
    .get((req, res) => {
        const maxDefault = '1000000'
        const minDefault = '0'
       if (req.query.price <= maxDefault && req.query.price >= minDefault) {
            const maxPriceFilter = database.filter(item => item.price <= +req.query.price)
            res.send(maxPriceFilter.filter(item => item.price >= +item.query.price))
        } else {
            res.send(database)
        }
    })

module.exports = priceFilterRouter