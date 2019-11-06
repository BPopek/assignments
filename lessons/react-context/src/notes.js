// context: allows you to share information globally so you can import it to use anywhere else in the react file. Stores it separately (sort of off to the side) from the rest of the tree components.

// can import methods, will be able to update the state 'remotely'


// first thing is to add to index file: 


// provider: where you store the things you want to make global (global state)
    // anything typed in this.state under super becomes global 
    // stores it inside of value


  {/* <Provider value={{
                ...this.state     //this allows us to pass in multiple objects/methods
            }}>
                {this.props.children}
                {/* this becomes APP because it is wrapped by Provider, and how we tagged it on index page */}
        {/* </Provider> */}



// consumer: makes these things accessible
    // introduces Higher Order Components. Being phased out by hooks 

    // export function withProvider (Comp){
    //     return (props) => <Consumer>
    //                     {value => <Comp />}
    //                     </Consumer>
    //     }

    // this is a component, takes a component as an argument. 
    // Consumer is making this value accessable to this component. 