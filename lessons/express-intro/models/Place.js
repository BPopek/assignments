const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    place: {
        type: String,
        required: true,
        unique: true  
    },
    price: {
        type: Number,
        default: 0  
    },
    timeToGo: String,
    sitesToExplore: [String],  
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    // to connect to another schema
    conventionsAttended: [
        {
            type: Schema.Types.ObjectId,
            ref: "Convention"   //this is the name of the other schema/model
                //keep in mind the one to many, so the many refer to the id of the one. So if the two models are author & book, the books are the many that need to tie back to the author (Schema.Types.ObjectId and ref: "Author").
        }

    ]
})

module.exports = mongoose.model('Place', placeSchema)