import React from 'react'
import './Banner.css'
import NavBar from "/src/components/NavBar.jsx";
import { useState, useEffect } from "react";

const Banner = ({banner, message}) => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    return (
        <div className="topTitle">
            <button className="navbar-toggle-button" onClick={() => setNavBarOpen(!navBarOpen)}>☰</button>
            <NavBar show={navBarOpen} onClose={() => setNavBarOpen(false)} />
            <h1>{banner}</h1>
            <div>{message}</div>
        </div>
    );
}

export default Banner;