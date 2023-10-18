import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavBar.css'
import { useNavigate } from 'react-router-dom';


const NavBar = ({ open, onClose }) => {
    let navigate = useNavigate();
    return (
        <div className={`sidebar ${open ? 'open' : ''}`} onClick={onClose}>
            <Nav defaultActiveKey="/home" className="navBarColumn">
                <Nav.Link eventKey="questionnaire" onClick={()=>navigate('/')}>Questionnaire</Nav.Link>
                <Nav.Link eventKey="recommendations" onClick={()=>navigate('/recommendations')}>Recommendations</Nav.Link>
            </Nav>
        </div>
    );
};

export default NavBar;