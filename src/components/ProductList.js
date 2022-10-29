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


    const deleteProduct = async (id) => {
        console.log(id);
        // ask rahul >>>> ????
        // convert fetch into axios
        let result = await fetch(`http://localhost:8000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>

                    <ul key={item._id}>
                        {/* index starts from 0 so we do index+1 so that index starts from 1     */}
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;