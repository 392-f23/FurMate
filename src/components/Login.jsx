import React from 'react';
import { signInWithGoogle, firebaseSignOut, useAuthState } from '../utilities/firebase';
import { useNavigate } from "react-router-dom";
import './Login.css'

function GoogleLogin() {
    let navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const userData = await signInWithGoogle();
        if(userData){
            navigate('/questionnaire')
        }
    }

    return (
        <div data-cy="login" className="login">
            <h2>Login with Google:</h2>
            <br></br>
            <button id="button" class="btn btn-primary" onClick={handleGoogleLogin}>Login</button>
        </div>
    );
}

export default GoogleLogin;