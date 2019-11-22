const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.use('/items', require ('./Routes'))

app.listen(port, () => {
    console.log('App running on port ' + port)
})

