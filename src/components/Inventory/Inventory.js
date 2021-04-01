import './Inventory.css';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const axios = require('axios');

const Inventory = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () =>{

        let response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const handleDeleteProduct = async (id)=>{
        let response = await axios.delete('http://localhost:5000/deleteProduct/'+id);
        fetchProducts();
        console.log(response);
    }

    return (
        <div className="admin-page">
            <div className="admin">
                <div className="left">
                    <ul>
                        <li><Link to="/Admin">Add Product</Link></li>
                        <li><Link to="/Inventory">Manage Product</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="products">
                        {
                            products.map(item=> <div className='item'><p className="name"><span>{item.name}</span></p><p className="price"><span>{item.price}</span></p>
                                <div className="img"><img src={item.imgUrl} alt=""/></div><div className="action"><button onClick={()=>{handleDeleteProduct(item._id)}}>Delete</button></div></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;