const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/Inventory')


inventoryRouter.route('/')

    .get((req, res) => {
        Inventory.find((err, inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(inventory)
        })
    })

    .post((req, res) => {
        const newInventory = new Inventory(req.body)
        newInventory.save((err, inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(inventory)
        })
    })

    inventoryRouter.route('/:_id')

    .get((req, res) => {
        Inventory.findById(req.params._id, (err, inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(inventory)
        })
    })

    .put((req, res) => {
        Inventory.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, inventory) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(inventory)
            }
        )
    })

    .delete((req, res) => {
        Inventory.findOneAndDelete(
            {_id: req.params._id},
            (err, inventory) => {
                if(err) res.status(500).send(err)
                return res.status(200).send(inventory)
            }
        )
    })

    module.exports = inventoryRouter