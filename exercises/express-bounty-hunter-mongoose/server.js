const express = require ('express')
const app = express()
const PORT = 7500
const mongoose = require('mongoose')

app.use(express.json())
app.use('/bounties', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bountyHunterDB', { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })


app.listen(PORT, () => {
    console.log('App is running on port ' + PORT)
})

