import React, {useContext} from 'react';
import './Header.css'
import {
    Link
} from "react-router-dom";
import {UserContext} from "../../App";

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <div className="container">
                <Link to="/" className='logo' >EDU CARE</Link>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to={ !loggedInUser.email ? '/Orders' : '/Orders/'+loggedInUser.email }>Orders</Link></li>
                    <li><Link to="/Admin">Admin</Link></li>
                    <li><Link to={ !loggedInUser.email ? '/Checkout' : '/Checkout/'+loggedInUser.email }>Checkout</Link></li>
                    <li className={loggedInUser.name ? 'loginBtn user' : 'loginBtn'} ><Link to={ loggedInUser.name ? '/' : '/Login' }>{ loggedInUser.name ? loggedInUser.name : 'Login' }</Link></li>
                    <li className={!loggedInUser.name && 'hide'}><button onClick={()=> setLoggedInUser({})}>Logout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;