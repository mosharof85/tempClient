import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <p className="logo">EDU CARE</p>
            <nav>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Orders">Home</Link></li>
                <li><Link to="/Admin">Admin</Link></li>
                <li><Link to="/Checkout">Checkout</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </nav>
        </header>
    );
};

export default Header;