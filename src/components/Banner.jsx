import React from 'react'
import './Banner.css'
import NavBar from "/src/components/NavBar.jsx";
import { useState, useEffect } from "react";
import { signInWithGoogle, firebaseSignOut, useAuthState } from '../utilities/firebase';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const Banner = ({ banner, message }) => {

    // const [navBarOpen, setNavBarOpen] = useState(false);
    let navigate = useNavigate();

    const handleSignOut = async () => {
        var signOut = await firebaseSignOut();
        navigate('/');
    }

    const SignInButton = () => (
        <div>
            {document.getElementById("login")?
            <button className="ms-auto btn btn-light loginbtn" onClick={signInWithGoogle}>Sign in</button>:
            ''
            }
        </div >
    );

    const AuthButton = () => {
        const [user] = useAuthState();
        return user ? <></> : (<SignInButton />);
    };

    const ProfilePhoto = () => {
        const [user] = useAuthState();
        return user ? <img id="profilePic" onClick={handleSignOut} src={user.photoURL} alt="Profile Photo" class="circle_profile_photo" /> : <></>;
    }

    return (
        <div className="topTitle">
            {/* <button className="navbar-toggle-button" onClick={() => setNavBarOpen(!navBarOpen)}>☰</button> */}
            {/* <NavBar open={navBarOpen} onClose={() => setNavBarOpen(false)} /> */}
            <div className="auth">
                <AuthButton />
                <ProfilePhoto></ProfilePhoto>
            </div>
            <h1>{banner}</h1>
            <div>{message}</div>
        </div>
    );
}

export default Banner;