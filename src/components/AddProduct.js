import React, { useState } from 'react';
import axios from "axios";

const AddProduct = () => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompnay] = useState('');
    // here we are taking an error state which will be false by default 
    // this state will be used to display error messages when error is true for any input fields
    const [error, setError] = useState(false);

    const addProduct = async () => {

        if (!name || !price || !company || !category) {
            // if any of the fields are empty, set the error state to be true and return false
            // this will stop the futher execution of the program
            setError(true);
            return false
            // //ask rahul > ????
            // if only return false will stop further execution or any command will stop further execution
        }
        //get the userId from localstorage, loggedin user 
        //the local storage user is string, we need to convert it into an JSON first, so we use JSON.parse() to convert string into JSON
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        //the url which you want to hit for the api request.
        const baseUrl = "http://localhost:8000/add-product";
        const postData = { name, price, category, company, userId };
        const result = await axios.post(baseUrl, postData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // also ask rahul ????
            // meaning of Accept, Content-Type charset=UTF-8

        });
        let data = result.data;
        console.log(data);

    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
                  {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
             {error && !category && <span className='invalid-input'>Enter valid category</span>} 
            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;