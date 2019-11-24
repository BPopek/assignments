const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/Bounty')

bountyRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if(err) {
                return res.status(500).send(err)
            } else if (req.query.firstName) {
                res.send(bounties.filter(item => item.firstName === req.query.firstName))
            } else if (req.query.lastName) {
                res.send(bounties.filter(item => item.lastName === req.query.lastName))
            } else if (req.query.typePerson) {
                res.send(bounties.filter(item => item.typePerson === req.query.typePerson))
            } else if (req.query.bountyAmount) {
                res.send(bounties.filter(item => item.bountyAmount === req.query.bountyAmount))
            } else if (req.query._id) {
                res.send(bounties.find(item => item._id === req.query._id))
            } else {
                return res.status(200).send(bounties)
            }
        })
    })

//POST NEW MONGOOSE
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(bounty)
        })
    })

bountyRouter.route('/:_id')
   
    //GET ONE MONGOOSE
        .get((req, res) => {
            Bounty.findById(req.params._id, (err, bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounties)
            })
        })

    //PUT (CHANGE) MONGOOSE
    .put((req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

    //DELETE MONGOOSE
    // .delete((req, res) => {
    //     Bounty.findOneAndDelete(
    //         {id: req.params._id},
    //         (err, bounty) => {
    //             if(err) return res.status(500).send(err)
    //             return res.status(200).send(bounty)
    //         }
    //     )
    // })

    .delete((req, res) => {
        Bounty.findByIdAndRemove(
            {id: req.params._id},
            (err, bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

module.exports = bountyRouter