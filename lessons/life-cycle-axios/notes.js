import { METHODS } from "http"

// HTTP REQUEST-RESPONSE CYCLE: 
    // Client --> User, makes a request
    // Request --> Order 
    // Computer Server --> Waiter
    // API --> Chef
    // Database --> Fridge/Pantry
    // Response --> Prepared Order 
    // Server --> Client/YOU

// Server take order, bring back what you ask for. 
// server listens for requests, takes it back to the chef (API). 
// API has a set of rules on how to handle each request (like a chef following a recipe ). Gets any of the info needed for that request.



// RENDER and CONSTRUCTOR are life cycle methods that run at different times. 
// CONSTRUCTOR: anything inside is read before the render is read 
// Whenever we render, a series of things happen.
// React has 16+? life-cycle METHODS. If you need info to exist at a certain state before something else happens, use the appropriate life-cycle method.

// RENDER 
// CONSTRUCTOR 
// COMPONENT DID MOUNT 


// to import axios: 'npm i axios' in terminal

    // do axios request in componentDidMount to ensure that the component is mounted and ready to use. Prevents the request from trying to update something that does not yet exist (makes sure component is ready to be updated).

    // AXIOS works the same way as it did in V Javascript, we just run it differently and save it to state 

    // for todos, make a container and map through them.

    // make sure you look closely at what you grab. Make sure you are drilling down to the right spot 