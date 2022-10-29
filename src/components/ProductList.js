import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);
    // here useEffect will be called only when the component loads/mounts

    const getProducts = async () => {
        // Ask rahul >> ???? 
        // to convert this fetch request into axios 
        //aslo how to replace item by product in return map function all at once in vs code
        let result = await fetch('http://localhost:8000/products');
        result = await result.json();
        setProducts(result);
    }


    console.log(products);

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
            </ul>
            {
                products.map((item,index)=>

                <ul key={item}>
                {/* index starts from 0 so we do index+1 so that index starts from 1     */}
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
            </ul>
                )
            }
        </div>
    )
}

export default ProductList;