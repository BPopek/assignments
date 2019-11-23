const express = require('express')
const placesRouter = express.Router()
const Place = require('../models/Place')


// MONGODB    
    //find is a method from Mongoose

//this is the link to where you are starting out
placesRouter.route('/')
    //anything you put under here no longer needs the app. beginning or the (/'places') in code

    //MONGO GET
    .get((req, res) => {
        Place.find((err, places) => {       //will find everything under that Model
            if(err) return res.status(500).send(err)
            return res.status(200).send(places)
        })
    })

    // MONGO ENTER NEW POST 
    .post((req, res) => {
        const newPlace = new Place(req.body)  //this will add in the ID & default values
        newPlace.save((err, place) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(place)
        })
    })

    // .post((req, res) => {
    //     req.body._id = uuid.v4
    //     database.push(req.body)
    //     res.send(database)
    // })

placesRouter.route('/:_id')
    //MONGO get
    .get((req, res) => {
        Place.findById(req.params._id, (err, place) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(places)
        })
    })
    //MONGO put
    .put((req, res) => {
        Place.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, place) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(place)
            }
        )
    })

    // .put((req, res) => {
    //     let {_id} = req.params
    //     let updatedSpot = req.body
    //     database.forEach(spot => spot._id === _id && Object.assign(spot, updatedSpot))
    //     res.send(database)
    // })
    .delete((req, res)  => {
        let {_id} = req.params
        let index = database.findIndex(spot => spot._id === _id)
        database.splice(index, 1)
        res.send('successfully deleted item')
    })
    //MONGO delete
    .delete((req, res) => {
        Place.findOneAndDelete(
            {_id: req.params._id},
            (err, place) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(place)
            }
        )
    })

    //if any new routes, place under the new location

// MONGODB    
    //find is a method from Mongoose



    

//all routes listed above will be exported
module.exports = placesRouter