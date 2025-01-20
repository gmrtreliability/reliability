import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";
import logo from "../assets/ncra-logo.png";
import MenuIcon from "./Menu_icon";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <Link to="/reliability/" className="navbar-logo">
          <img src={logo} alt="GMRT Logo" className="logo" />
        </Link>
        {/* Hamburger Menu Icon */}
        <MenuIcon toggleMenu={toggleMenu} isMenuOpen={menuOpen} />
        {/* Navigation Menu */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="navbar-item active">
            <Link to="/reliability/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/upload-excel" className="navbar-link color">
              Upload Excel
            </Link>
          </li>
          <li className="navbar-item">
            <a
              href="http://callsheet.gmrt.ncra.tifr.res.in/"
              className="navbar-link"
            >
              Callsheet
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="https://www.gmrt.ncra.tifr.res.in/"
              className="navbar-link"
            >
              Official-web
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
