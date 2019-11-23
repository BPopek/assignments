const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: String,
    typePerson: String,
})


module.exports = mongoose.model('Bounty', bountySchema)