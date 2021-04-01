import './Product.css';

import React from 'react';
import { useHistory } from "react-router-dom";

const Product = (props) => {
    const {imgUrl, name, price, _id} = props.info;

    const history = useHistory();

    return (
        <div className='item'>
            <div className="img"><img src={imgUrl} alt=""/></div>
            <p className="name">{name}</p>
            <div className="item-footer">
                <span>${price}</span>
                {
                    !props.orderpage && <button onClick={()=>history.push(`Checkout/${_id}`)} >Order Now</button>
                }
            </div>
        </div>
    );
};

export default Product;