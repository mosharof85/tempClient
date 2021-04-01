import React, {useState, useEffect} from 'react';
import Product from "../Product/Product";
import { useParams } from "react-router-dom";
const axios = require('axios');



const Orders = () => {
    const {email} = useParams();

    const [products, setProducts] = useState([]);

    const fetchOrders = async () =>{

        let response = await axios.get('http://localhost:5000/orders/'+email);

        setProducts(response.data);
    }

    useEffect(()=>{
        fetchOrders();
    },[])

    return (
        <div className="home-products">
            <div className="inner">
                {
                    products.map(item=> <Product info={item} key={item._id} orderpage={true} />)
                }
            </div>
        </div>
    );
};

export default Orders;