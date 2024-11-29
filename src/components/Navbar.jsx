import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHeart, FaRobot, FaBars, FaTimes } from 'react-icons/fa'; // Importing React Icons
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-title">FindRecipe</span>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>
          <FaHeart className="icon" /> Favorites
        </Link>
        <Link to="/recipes" className="nav-link" onClick={() => setMenuOpen(false)}>
          <FaRobot className="icon" /> AI-Recipe
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
