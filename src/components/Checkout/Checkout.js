import './Checkout.css';

import React, {useState, useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import {UserContext} from '../../App';
const axios = require('axios');

const Checkout = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {id} = useParams();

    const [product, setProduct] = useState({});

    const fetchProduct = async () =>{

        let response = await axios.get('http://localhost:5000/product/'+id);
        setProduct(response.data);
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    const handlePlaceOrder = async (id)=>{
        const orderData = {
            email : loggedInUser.email,
            productID: id
        }

        const url = 'http://localhost:5000/addOrder';

        let response = await axios.post(url, orderData);

        if(response.data){
            alert('Order Added Successfully');
        }
        else{
            alert('Something went wrong');
        }
    }

    return (
        <div>
            <div className='checkout item'>
                <div className="img">
                    <img src={product.imgUrl} alt=""/>
                </div>
                <p className="name"><span>{product.name}</span></p>
                <div className="item-footer">
                    <span>${product.price}</span>
                    <button onClick={()=>{handlePlaceOrder(product._id)}}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;