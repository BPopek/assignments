const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8000

app.use(express.json())

app.use('/places', require ('./routes/placesRouter'))

mongoose.connect('mongodb://localhost:27017/vacationPlanner', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.error(err)
    })

app.listen(port, () => {
    console.log('Server running on port ' + port)
})

