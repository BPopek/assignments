// COOKIES
//     small file size, can add an expiration date

// LOCAL STORAGE- info is saved to the browser
    // just an object (key/value pair)
    // found in Application tab on Chrome Inspect tools 
    // store a token for authentication


// SESSION STORAGE
    // MAIN DIFFERENCE: session storage does not persist after you close the window. Only saves the information for the current session.


    // adds name to browser local storage  

    localStorage.name = "Annie"
        // these two do the same thing
    localStorage.setItem("name", "Annie")

    console.log(localStorage.name)

    localStorage.removeItem("name")




    // if saving as local Object, may need to convert to JSON first 
    // for putting objects and arrays into local storage. NEVER PUT PASSWORDS IN LOCAL STORAGE! 

    const user = {
        userName: "Jeremy",
        password: "12345bagel"
    }

        // stringify is how you change it to a JSON string 
    const jsonifiedUser = JSON.stringify

    localStorage.user = jsonifiedUser

        // must de-jsonify the info to be able to use it, run through PARSE.
        // for getting objects and arrays from local storage 
        
    const deJsonifiedUser = JSON.parse(localStorage.user)

    console.log(localStorage.user)
    console.group(deJsonifiedUser)