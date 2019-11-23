const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.use('/items', require ('./routes/routes'))
app.use('/items', require ('./routes/priceFilterRoute'))


app.listen(port, () => {
    console.log('App running on port ' + port)
})

