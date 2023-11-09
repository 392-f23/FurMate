import React from 'react';
import { signInWithGoogle, firebaseSignOut, useAuthState } from '../utilities/firebase';
import { useNavigate } from "react-router-dom";
import './Login.css'

function GoogleLogin() {
    let navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate('/questionnaire');
          } catch (error) {
            console.error(error);
          }

    }

    return (
        <div data-cy="login" className="login">
            <h2>Login with Google:</h2>
            <br></br>
            <button data-testid="login-button" id="button" className="btn btn-primary" onClick={handleGoogleLogin}>Login</button>
        </div>
    );
}

export default GoogleLogin;