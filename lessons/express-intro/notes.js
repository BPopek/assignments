// graph ul ? graphic ul? 

// INSTALL EXPRESS 
    // npm init -y
        //to create the json package file
    // npm install --save express
        //no longer need the --save and can just do the npm i express



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

