

import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo"><img src="./images/logo.png" alt="404" width={'100%'} /></div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "enable" : ""}`}>
                <li><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink></li>
                <li><NavLink className="nav-link" aria-current="page" to="/facilities">Facilities</NavLink></li>
                <li><NavLink className="nav-link" aria-current="page" to="/admission">Admission</NavLink></li>
                <li><NavLink className="nav-link" aria-current="page" to="/activities">Activities</NavLink></li>
                <li><NavLink className="nav-link" aria-current="page" to="/scolastic">Scolastic & CO-Scolastic</NavLink></li>

            </ul>
            <div className="navbar-toggle" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Nav;
