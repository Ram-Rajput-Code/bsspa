

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavThree = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="./images/logo.png" alt="404" /></div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li><Link className="nav-link active" aria-current="page" to="/about">About Us</Link></li>
        <li><Link className="nav-link active" aria-current="page" to="/facilities">Facilities</Link></li>
        <li><Link className="nav-link active" aria-current="page" to="/admission">Admission</Link></li>
        <li><Link className="nav-link active" aria-current="page" to="/activities">Activities</Link></li>
        <li><Link className="nav-link active" aria-current="page" to="#">Scolastic & CO-Scolastic</Link></li>

      </ul>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavThree;
