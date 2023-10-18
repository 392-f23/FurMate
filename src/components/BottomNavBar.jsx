// BottomNavbar.js
import React, { useState } from 'react';
import './BottomNavbar.css';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {

    return (
        <div className="bottom-navbar">
            <NavLink 
                exact 
                to="/" 
                className="nav-item" 
                activeClassName="active"
            >
                Questionnaire
            </NavLink>
            <NavLink 
                to="/recommendations" 
                className="nav-item" 
                activeClassName="active"
            >
                Recommendation
            </NavLink>
        </div>
    );
}

export default BottomNavbar;
