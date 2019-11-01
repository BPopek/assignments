import React from 'react';
import {Link} from 'react-router-dom';
 
import products from './products.json';


const ProductList = () => {

    const productsMapped = products.map(product => <Link to={`/products/${product._id}`}>{product.name}</Link> )
    
    return (
        <div className='product-list'>
            <h1>Products Page</h1>
            <div className='product-links'>
                {productsMapped}
            </div>
        </div>

    );
};

export default ProductList