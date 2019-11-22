// graph ul ? graphic ul? 

// INSTALL EXPRESS 
    // npm init -y
        //to create the json package file
                // npm install --save express
//no longer need the --save and can just do the npm i express

// ********************************************
    // at the top of page server.js: 
    // const express = require('express')
    // const app = express()     -converts info to json
    // const uuid = require("uuid/v4")
    // const database = require(link to json file)

// you cannot save your project folder with the same name as an NPM package or it (NPM)will not work 

// app.listen starts the server listening for requests 
    // don't use 3000 because react uses it for NPM start
    // once you enter a port and do node app.js it is listening for any changes or requests
//always put the listen last in the file

// Can use a callback function to see something so you know it is running


// npm i -g nodemon - watches for any changes in our folder, will restart the server after 
        // then use 'nodemon app.js' instead of node  


//REQUESTS take 2 arguments: url for path, and the callback function (req, res) etc

        // request object: 
        //     parameters  anything /
        //     query strings use ? and key value pairs 
                    // key=value

    // to add info for postman, use req.body                
    //         app.use(express.json())

// GET REQUESTS can say to res.send(database) to get all info

    // npm i uuid    installs the unique id 



// QUERIES:
    // req.query is part of our request object. It creates an object with a key value pair. Used to filter out results to whatever you specify.

    // replace / at end of link with ? and add queries

    // to make into a number for prices, put a + before the second one
    res.send(database.filter(spot => spot.price === +req.query.price))
            // to get prices less than a total amount
    // res.send(database.filter(spot => spot.price <+ +req.query.price))

    // to do 2 queries:
            app.get('/places',(req, res) => {
                if(req.query.timeToGo && req.query.price){
                    const times = database.filter(spot => spot.timeToGo === req.query.timeToGo)
                    res.send(times.filter(spot => spot.price <= +req.query.price))
                }else if(req.query.timeToGo){
                    res.send(database.filter(spot => spot.timeToGo === req.query.timeToGo))
                }else if(req.query.price){
                    res.send(database.filter(spot => spot.price <= +req.query.price))
                }else {
                    res.send(database)
                }
            })


// ROUTER
// name file to be what you are routing to.
    // in server.js file place this at top:
        app.use('/places', require('./placesRouter'))

        // can use multiple router files
    // in server.js file place both at top:
    app.use('/places', require('./placesRouter'))
    app.use('/todos', require('./todoRouter'))