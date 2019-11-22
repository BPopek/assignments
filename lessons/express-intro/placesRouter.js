const express = require('express')
const placeRouter = express.Router()

const Place = require('./Place')

//this is the link to where you are starting out
placeRouter.route('/')
    //anything you put under here no longer needs the app. beginning or the (/'places') in code

    .get((req, res) => {
        res.send(database)
    })
    .post((req, res) => {
        req.body._id = uuid.v4
        database.push(req.body)
        res.send(database)
    })

placeRouter.route('/:_id')
    .put((req, res) => {
        let {_id} = req.params
        let updatedSpot = req.body
        database.forEach(spot => spot._id === _id && Object.assign(spot, updatedSpot))
        res.send(database)
    })
    .delete((req, res)  => {
        let {_id} = req.params
        let index = database.findIndex(spot => spot._id === _id)
        database.splice(index, 1)
        res.send('successfully deleted item')
    })

    //if any new routes, place under the new location

// MONGODB    
    //find is a method from Mongoose

.get((req, res) => {
    Place.find((err, places) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(places)
    })
})

.post((req, res) => {
    const newPlace = new Place(req.body)
    newPlace.save((err, place) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(place)
    })
})


    

//all routes listed above will be exported
module.exports = placeRouter