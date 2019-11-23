const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    price: Number,
    timeToGo: String
})

// schema includes the structure for all the things your data should have 


module.exports = mongoose.model('Place', placeSchema)