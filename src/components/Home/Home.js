import './Home.css'
import React, {useState, useEffect} from 'react';
import Product from "../Product/Product";
const axios = require('axios');

const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () =>{

        let response = await axios.get('http://localhost:5000/products');

        setProducts(response.data);
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <div className="home-products">
            <div className="inner">
                {
                    products.map(item=> <Product info={item} key={item._id} orderpage={false}/>)
                }
            </div>
        </div>
    );
};

export default Home;