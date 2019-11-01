import React from 'react';
import products from './products.json'

const Product = (props) => {
    // these props are coming from react-router, we have not created them yet 
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id )
    let {name, price, description} = product
    return(
        <div class='productPage'>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <button onClick={() => props.history.push('/Products')}>Back</button>
            {/* the props.history.push is automatically part of react render dom, must be in a callback function */}
        </div>
    )
}

export default Product