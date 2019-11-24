const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: String,
    type: String,
    price: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)