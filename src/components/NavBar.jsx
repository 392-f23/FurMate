import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavBar.css'


const NavBar = ({ open, onClose }) => {
    return (
        <div className={`sidebar ${open ? 'open' : ''}`} onClick={onClose}>
            <Nav defaultActiveKey="/home" className="navBarColumn">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="questionnaire">Questionnaire</Nav.Link>
                <Nav.Link eventKey="recommendations">Recommendations</Nav.Link>
                <Nav.Link eventKey="map">Map</Nav.Link>
            </Nav>
        </div>
    );
};

export default NavBar;