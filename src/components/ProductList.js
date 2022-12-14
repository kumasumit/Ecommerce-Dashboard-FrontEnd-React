import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    // Implement the searchHandle function
    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            // ask rahul >> ?? 
            // to convert fetch into axios request
            let result = await fetch(`http://localhost:8000/search/${key}`);
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            //if there is nothing in search box
            //call the getProducts() function

            getProducts();
        }

    }
    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             />
             {/* here as soon as search box content changes, the function searchHandle is called */}
             {/* ask rahul >>> ????
             how to memoize this search by debouncing and throttling */}


            <ul>
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            { 
            // if product array length is greater than 0 display the list else show no products found
                products.length>0 ? products.map((item, index) =>

                    <ul key={item._id}>
                        {/* index starts from 0 so we do index+1 so that index starts from 1     */}
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                        {/* ask rahul >> ???
                        how to change this to template literal */}
                        <Link to={"/update/"+item._id} >Update </Link></li>
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList;