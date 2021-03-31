import './Login.css';
import React, {useContext, useState} from 'react';
import googleLogo from '../../images/google.png';
import firebaseConfig from './Firebase.conf';
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from "../../App";
import { useHistory, useLocation } from "react-router-dom";



const Login = () => {

    const [user, setUser] = useState({
        isSignedIn : false,
        name : '',
        image : '',
        email : '',
        password : '',
        error : []
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" }};


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = (e)=>{

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(res=>{

                const {displayName, email, photoURL } = res.user;
                const singedUser = { ...user };
                singedUser.isSignedIn = true;
                singedUser.name = displayName;
                singedUser.email = email;
                singedUser.image = photoURL;
                singedUser.error = [];
                setUser(singedUser);
                setLoggedInUser(singedUser);
                history.replace(from);
            })
            .catch(error=>{

                const singedUser = { ...user };
                singedUser.error = [];
                singedUser.error.push(error.message);
                setUser(singedUser);
                console.log(error);
                alert(user.error);
            })
    }

    return (
        <div className="login-page">
            <div className='gsign'>
                <div className="gsign-inner" onClick={handleGoogleSignIn}>
                    <img src={googleLogo} alt=""/>
                    <p>Login with google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;